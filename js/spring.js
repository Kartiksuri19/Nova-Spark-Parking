/**
 * Nova Spark Parking — Spring Physics Engine
 * ============================================
 * Physically-simulated spring animations based on F = -kx - cv
 * Derived from Apple visionOS / iOS 27 Liquid Glass architecture.
 *
 * Exact Conversion Formulae:
 *   Stiffness  k = (2π / response)²
 *   Damping    c = dampingFraction × 4π / response
 */

/* ─── 4 Mandatory Apple Spring Profiles ────────────────────────── */
const SPRING_PRESETS = Object.freeze({
  // 1. Micro-Interactions (response: 0.30, dampingFraction: 0.50 -> k = 438.65, c = 20.94)
  micro:       { response: 0.30, dampingFraction: 0.50  },
  // 2. State Toggles & Shared-Element Pills (response: 0.55, dampingFraction: 0.825 -> k = 130.51, c = 18.85)
  state:       { response: 0.55, dampingFraction: 0.825 },
  // 3. Heavy Modals & Drawers (response: 0.90, dampingFraction: 1.00 -> k = 48.74, c = 13.96)
  heavy:       { response: 0.90, dampingFraction: 1.00  },
  // 4. Interactive Gesture Tracking (response: 0.15, dampingFraction: 0.86, blendDuration: 0.15s)
  interactive: { response: 0.15, dampingFraction: 0.86  },
});

/* ─── Core Spring Simulation Class ────────────────────────────── */
class Spring {
  constructor(preset = 'state') {
    const cfg = SPRING_PRESETS[preset] || SPRING_PRESETS.state;
    this.stiffness = Math.pow((2 * Math.PI) / cfg.response, 2);
    this.damping   = cfg.dampingFraction * 4 * Math.PI / cfg.response;
    this.mass      = 1;
    this.pos       = 0;
    this.vel       = 0;
    this.target    = 0;
    this._raf      = null;
    this._last     = null;
    this._running  = false;
    this.onUpdate  = null;
    this.onRest    = null;
    this._restEps  = 0.12;
    this._velEps   = 0.08;
  }

  configure(preset) {
    const cfg = SPRING_PRESETS[preset] || SPRING_PRESETS.state;
    this.stiffness = Math.pow((2 * Math.PI) / cfg.response, 2);
    this.damping   = cfg.dampingFraction * 4 * Math.PI / cfg.response;
    return this;
  }

  snap(value) {
    this.pos = value;
    this.vel = 0;
    return this;
  }

  to(target) {
    this.target = target;
    if (!this._running) this._start();
    return this;
  }

  async animate(from, target) {
    this.snap(from);
    return new Promise(resolve => {
      this.onRest = resolve;
      this.to(target);
    });
  }

  _start() {
    this._running = true;
    this._last = performance.now();
    this._raf = requestAnimationFrame(t => this._tick(t));
  }

  _tick(now) {
    const dt = Math.min((now - this._last) / 1000, 0.064);
    this._last = now;

    const dx = this.pos - this.target;
    const accel = (-this.stiffness * dx - this.damping * this.vel) / this.mass;
    this.vel += accel * dt;
    this.pos += this.vel * dt;

    if (this.onUpdate) this.onUpdate(this.pos, this.vel);

    if (Math.abs(dx) < this._restEps && Math.abs(this.vel) < this._velEps) {
      this.pos = this.target;
      this.vel = 0;
      this._running = false;
      if (this.onUpdate) this.onUpdate(this.pos, 0);
      if (this.onRest) { this.onRest(this.pos); this.onRest = null; }
      return;
    }
    this._raf = requestAnimationFrame(t => this._tick(t));
  }

  stop() {
    this._running = false;
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  destroy() {
    this.stop();
    this.onUpdate = null;
    this.onRest = null;
  }
}

/* ─── DOM Animation Helpers ───────────────────────────────────── */
function springTo(el, prop, from, to, preset = 'state', unit = 'px') {
  const s = new Spring(preset);
  return new Promise(resolve => {
    s.onUpdate = v => {
      if (prop === 'translateY')       el.style.transform = `translateY(${v}${unit})`;
      else if (prop === 'scale')       el.style.transform = `scale(${v})`;
      else if (prop === 'opacity')     el.style.opacity = v;
      else                             el.style[prop] = `${v}${unit}`;
    };
    s.onRest = () => { s.destroy(); resolve(); };
    s.snap(from);
    s.to(to);
  });
}

/**
 * Instantaneous 0.94 scale down on pointer down, bouncy spring back on release.
 */
function setupTactileSprings() {
  // Rely on hardware-accelerated CSS compositor transitions (:active, :hover)
  // to prevent JS inline style collisions and stuck scale transforms.
}

/* ─── Apple Asymptotic Rubber-Band Overscroll ─────────────────── */
/**
 * f(x, d, c) = (x · d · c) / (d + c · x)
 * @param {number} x  drag distance past boundary
 * @param {number} d  viewport/container dimension
 * @param {number} c  Apple friction constant (0.55)
 */
function rubberBand(x, d, c = 0.55) {
  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  return sign * ((absX * d * c) / (d + c * absX));
}

/**
 * Attaches rubber-band elasticity to scroll containers.
 */
function setupRubberBand(container) {
  if (!container || container._rbBound) return;
  container._rbBound = true;

  let startY = 0;
  let currentDelta = 0;
  let isTracking = false;
  const spring = new Spring('state');

  const onStart = (clientY) => {
    startY = clientY;
    currentDelta = 0;
    isTracking = true;
    spring.stop();
  };

  const onMove = (clientY) => {
    if (!isTracking) return;
    const dy = clientY - startY;
    const atTop = container.scrollTop <= 0 && dy > 0;
    const atBottom = (container.scrollTop + container.clientHeight >= container.scrollHeight - 1) && dy < 0;

    if (atTop || atBottom) {
      const d = container.clientHeight || 400;
      currentDelta = rubberBand(dy, d, 0.55);
      container.style.transform = `translateY(${currentDelta}px)`;
    }
  };

  const onEnd = () => {
    if (!isTracking) return;
    isTracking = false;
    if (Math.abs(currentDelta) > 1) {
      spring.snap(currentDelta);
      spring.onUpdate = (v) => {
        container.style.transform = (Math.abs(v) < 0.5) ? '' : `translateY(${v}px)`;
      };
      spring.onRest = () => {
        container.style.transform = '';
      };
      spring.to(0);
    }
    currentDelta = 0;
  };

  container.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) onStart(e.touches[0].clientY);
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) onMove(e.touches[0].clientY);
  }, { passive: true });

  container.addEventListener('touchend', onEnd, { passive: true });
  container.addEventListener('touchcancel', onEnd, { passive: true });
}

/* ─── Sliding Liquid Glass Pill Indicator ─────────────────────── */
function setupSlidingIndicator(track, pill, activeSelector = '.active') {
  if (!track || !pill) return;
  const springX = new Spring('state');
  const springW = new Spring('state');

  const update = (immediate = false) => {
    const active = track.querySelector(activeSelector);
    if (!active) return;
    const targetX = active.offsetLeft;
    const targetW = active.offsetWidth;

    if (immediate) {
      springX.snap(targetX);
      springW.snap(targetW);
      pill.style.transform = `translateX(${targetX}px)`;
      pill.style.width = `${targetW}px`;
      return;
    }

    springX.onUpdate = (x) => { pill.style.transform = `translateX(${x}px)`; };
    springW.onUpdate = (w) => { pill.style.width = `${w}px`; };
    springX.to(targetX);
    springW.to(targetW);
  };

  // Run initial update
  setTimeout(() => update(true), 60);
  window.addEventListener('resize', () => update(true));

  return update;
}

// Auto-initialize global tactile springs on DOM load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTactileSprings);
  } else {
    setupTactileSprings();
  }
}

// Global exports
if (typeof window !== 'undefined') {
  window.Spring = Spring;
  window.SPRING_PRESETS = SPRING_PRESETS;
  window.setupRubberBand = setupRubberBand;
  window.setupSlidingIndicator = setupSlidingIndicator;
  window.setupTactileSprings = setupTactileSprings;
  window.springTo = springTo;
  window.rubberBand = rubberBand;
}
