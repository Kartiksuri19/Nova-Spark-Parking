/* ═══════════════════════════════════════════════════════════════
   Nova Spark Parking — Application Logic
   ═══════════════════════════════════════════════════════════════ */

/* ─── Parking Spot Data (Separated Categories: Standard Car/Bike, EV Hubs, Dedicated Bicycle) ────── */
const SPOTS = [
  {
    id: 1,
    name: 'Gandhi Nagar Central Hub',
    addr: 'Near Gole Market, Gandhi Nagar, Jammu',
    lat: 32.7092,
    lng: 74.8675,
    vehicleCategory: 'standard',
    carPrice: 30,
    bikePrice: 10,
    price: 30,
    carSpots: 42,
    bikeSpots: 85,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Covered Multi-Vehicle Bay',
    rating: 4.8,
    reviews: 94,
    host: 'Sharma & Sons',
    hostInit: 'GN',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '42 Car Slots', icon: 'car', type: 'car' },
      { label: '85 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Covered Roof', icon: 'shield' },
      { label: 'CCTV Security', icon: 'shield' },
      { label: '24/7 Gate Access', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.4m × 1.2m',
    clearance: '2.7m (SUV & Cruiser Ready)',
    security: 'RFID & CCTV Guarded',
    fit: 'Cars, SUVs, Motorbikes & Scooters'
  },
  {
    id: 2,
    name: 'Bahu Plaza Grand EV Mobility Hub',
    addr: 'Rail Head Complex, Bahu Plaza, Jammu',
    lat: 32.7065,
    lng: 74.8790,
    vehicleCategory: 'ev',
    evCarPrice: 35,
    eScootyPrice: 15,
    carPrice: 35,
    bikePrice: 15,
    price: 35,
    evCarSpots: 24,
    eScootySpots: 40,
    carSpots: 24,
    bikeSpots: 40,
    bicycleSpots: 0,
    evSpots: 64,
    isMegaHub: true,
    type: 'Solar Clean EV Charging Deck',
    rating: 4.9,
    reviews: 218,
    host: 'Bahu Plaza Authority',
    hostInit: 'BP',
    vehicleType: 'ev',
    selectedVehicle: 'ev-car',
    features: [
      { label: '24 Fast EV Car Plugs (CCS2)', icon: 'ev-car', type: 'ev' },
      { label: '40 E-Scooty Swapping Docks', icon: 'escooty', type: 'ev' },
      { label: 'Solar Shading Roof', icon: 'shield' },
      { label: 'Automated RFID Barrier', icon: 'lock' },
      { label: '24/7 Guards & Support', icon: 'shield' }
    ],
    color: '#34C759',
    isFull: false,
    carDim: '6.0m × 3.2m (EV Bay)',
    bikeDim: '2.5m × 1.2m (E-Scooty Bay)',
    clearance: '3.2m High Clearance',
    security: 'ANPR Smart Cameras & Guarded Entry',
    fit: 'Electric Cars, SUVs, E-Scooties & Electric 2W'
  },
  {
    id: 3,
    name: 'Mubarak Mandi Heritage Hub',
    addr: 'Panjtirthi Chowk, Old Heritage City, Jammu',
    lat: 32.7425,
    lng: 74.8730,
    vehicleCategory: 'standard',
    carPrice: 40,
    bikePrice: 15,
    price: 40,
    carSpots: 32,
    bikeSpots: 95,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Old City Paved Complex',
    rating: 4.7,
    reviews: 142,
    host: 'Heritage Trust',
    hostInit: 'MM',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '32 Car Slots', icon: 'car', type: 'car' },
      { label: '95 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Direct Bazaar Access', icon: 'route' },
      { label: 'Shaded Canopy', icon: 'shield' },
      { label: 'Security Guard', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.5m × 2.8m',
    bikeDim: '2.2m × 1.1m',
    clearance: '2.6m Clearance',
    security: 'Guarded Gate & Floodlights',
    fit: 'Cars, Sedans, Scooters & Motorcycles'
  },
  {
    id: 4,
    name: 'Jewel Chowk & Bus Stand Hub',
    addr: 'BC Road, Prem Nagar, Opposite Bus Stand, Jammu',
    lat: 32.7275,
    lng: 74.8550,
    vehicleCategory: 'standard',
    carPrice: 35,
    bikePrice: 10,
    price: 35,
    carSpots: 65,
    bikeSpots: 110,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Multi-Tier Smart Terminal',
    rating: 4.8,
    reviews: 188,
    host: 'Smart City Jammu',
    hostInit: 'JC',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '65 Car Slots', icon: 'car', type: 'car' },
      { label: '110 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Fast In/Out Ramps', icon: 'route' },
      { label: 'Luggage Assistance', icon: 'shield' },
      { label: 'CCTV 24/7', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.6m × 2.9m',
    bikeDim: '2.3m × 1.1m',
    clearance: '2.8m Clearance',
    security: '24/7 Police Patrol & Smart Barrier',
    fit: 'Cars, SUVs, Scooters & Motorcycles'
  },
  {
    id: 5,
    name: 'Jammu University Smart Cycle Stand',
    addr: 'Baba Saheb Ambedkar Road, University Campus, Jammu',
    lat: 32.7140,
    lng: 74.8735,
    vehicleCategory: 'bicycle',
    isBicycleStand: true,
    bicyclePrice: 5,
    price: 5,
    carPrice: 0,
    bikePrice: 0,
    carSpots: 0,
    bikeSpots: 0,
    evSpots: 0,
    bicycleSpots: 80,
    isMegaHub: false,
    type: 'Automated Smart Cycle Dock',
    rating: 4.9,
    reviews: 126,
    host: 'Campus Security',
    hostInit: 'JU',
    vehicleType: 'bicycle',
    selectedVehicle: 'bicycle',
    features: [
      { label: '80 Smart Cycle Docks', icon: 'bicycle', type: 'bicycle' },
      { label: 'App QR Unlocking', icon: 'lock' },
      { label: 'Solar Weather Shading', icon: 'shield' },
      { label: 'Campus Patrol 24/7', icon: 'shield' }
    ],
    color: '#30B0C7',
    isFull: false,
    carDim: 'Pedal Cycle Only',
    bikeDim: '1.8m × 0.6m Dock',
    clearance: 'Open Sky & Canopy Bays',
    security: 'Campus Guarded Checkpoint & CCTV',
    fit: 'Pedal Bicycles & Non-Motorized Cycles'
  },
  {
    id: 6,
    name: 'Canal Road & Science College Hub',
    addr: 'Canal Road, Near Science College, Jammu',
    lat: 32.7268,
    lng: 74.8432,
    vehicleCategory: 'standard',
    carPrice: 25,
    bikePrice: 10,
    price: 25,
    carSpots: 38,
    bikeSpots: 75,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Paved Garden Bay',
    rating: 4.9,
    reviews: 79,
    distance: '1.5 km',
    host: 'Priya & Vikram D.',
    hostInit: 'CR',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '38 Car Slots', icon: 'car', type: 'car' },
      { label: '75 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Easy Turnaround', icon: 'route' },
      { label: 'Helmet Storage', icon: 'shield' },
      { label: 'Gated Compound', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.5m × 2.8m',
    bikeDim: '2.3m × 1.1m',
    clearance: 'Open & Paved Courtyard',
    security: 'Compound Barrier & CCTV',
    fit: 'Cars, SUVs, Motorcycles & Scooties'
  },
  {
    id: 7,
    name: 'Channi Himmat EV Clean Mobility Hub',
    addr: 'Sector 1, Near Police Post, Channi Himmat, Jammu',
    lat: 32.6890,
    lng: 74.8910,
    vehicleCategory: 'ev',
    evCarPrice: 30,
    eScootyPrice: 12,
    carPrice: 30,
    bikePrice: 12,
    price: 30,
    evCarSpots: 18,
    eScootySpots: 32,
    carSpots: 18,
    bikeSpots: 32,
    bicycleSpots: 0,
    evSpots: 50,
    isMegaHub: true,
    type: 'Multi-Deck Smart EV Terminal',
    rating: 4.9,
    reviews: 165,
    host: 'Jammu Municipal Corp',
    hostInit: 'CH',
    vehicleType: 'ev',
    selectedVehicle: 'ev-car',
    features: [
      { label: '18 Fast CCS2 EV Plugs', icon: 'ev-car', type: 'ev' },
      { label: '32 Electric Scooty Plugs', icon: 'escooty', type: 'ev' },
      { label: 'Solar Canopy & CCTV', icon: 'shield' },
      { label: 'ANPR Smart Gate', icon: 'lock' }
    ],
    color: '#34C759',
    isFull: false,
    carDim: '5.8m × 3.0m (EV Bay)',
    bikeDim: '2.4m × 1.2m (E-Scooty Bay)',
    clearance: '3.0m Clear Height',
    security: 'ANPR Smart Gate & 24/7 Security',
    fit: 'Electric Cars, EV Taxis, E-Scooters & 2W EVs'
  },
  {
    id: 8,
    name: 'Bikram Chowk & Riverfront Cycle Station',
    addr: 'Near Kala Kendra, Bikram Chowk, Jammu',
    lat: 32.7180,
    lng: 74.8610,
    vehicleCategory: 'bicycle',
    isBicycleStand: true,
    bicyclePrice: 5,
    price: 5,
    carPrice: 0,
    bikePrice: 0,
    carSpots: 0,
    bikeSpots: 0,
    evSpots: 0,
    bicycleSpots: 65,
    isMegaHub: false,
    type: 'Promenade Smart Pedal Bay',
    rating: 4.8,
    reviews: 110,
    host: 'Jammu Smart City Mobility',
    hostInit: 'BC',
    vehicleType: 'bicycle',
    selectedVehicle: 'bicycle',
    features: [
      { label: '65 Smart Pedal Cycle Bays', icon: 'bicycle', type: 'bicycle' },
      { label: 'River Walk Promenade Access', icon: 'route' },
      { label: 'App Scan-to-Ride', icon: 'lock' },
      { label: 'Guarded & Lit 24/7', icon: 'shield' }
    ],
    color: '#30B0C7',
    isFull: false,
    carDim: 'Pedal Cycle Only',
    bikeDim: '1.8m × 0.6m Dock',
    clearance: 'Open Paved Waterfront Stand',
    security: 'Promenade Guarded Bay & CCTV',
    fit: 'Pedal Bicycles & Sports Cycles'
  }
];

/* ─── State ──────────────────────────────────────────────────── */
let map;
let markers = [];
let selectedSpot  = null;
let selectedHours = 2;
let activeSession = null;     // { spot, hours, startTime, endTime, bookingId }
let sessionTimerId = null;
let sheetSpring;              // Spring instance controlling bottom-sheet Y
let sheetY = 0;               // current translateY of bottom-sheet
let walletBalance = 1250;

function updateWalletUI() {
  const formatted = `₹${walletBalance.toLocaleString()}`;
  const homeVal = document.getElementById('homeWalletVal');
  if (homeVal) homeVal.textContent = formatted;
  const wcBal = document.querySelector('.wc-bal');
  if (wcBal) wcBal.textContent = formatted;
}

/* Sheet snap-points (px from bottom of viewport) */
const SHEET_CLOSED = 400;     // off-screen
const SHEET_PEEK   = 160;     // list visible
const SHEET_FULL   = -10;     // fully expanded

/* ─── Boot ───────────────────────────────────────────────────── */
function bootApp() {
  try {
    initTheme();
    initMap();
    populateSpotsList();
    initSheet();
    initTabs();
    initButtons();
    initFilterPills();
    initSearchBar();
    initHelpChatbot();
    initCarplay();
    init3dIsometricTilt();

    // Rubber-band overscroll attachments
    const spotsScroll = document.getElementById('spotsList');
    if (spotsScroll && typeof setupRubberBand === 'function') setupRubberBand(spotsScroll);

    const sheetDetailScroll = document.getElementById('sheetDetail');
    if (sheetDetailScroll && typeof setupRubberBand === 'function') setupRubberBand(sheetDetailScroll);

    const profCol = document.querySelector('.profile-col-right');
    if (profCol && typeof setupRubberBand === 'function') setupRubberBand(profCol);

    // Sliding liquid glass indicator pills
    const durTrack = document.getElementById('durTrack');
    const durPill = document.getElementById('durActivePill');
    if (durTrack && durPill && typeof setupSlidingIndicator === 'function') {
      window.updateDurPill = setupSlidingIndicator(durTrack, durPill, '.dur-btn.active');
    }

    const tabBar = document.getElementById('tab-bar');
    const tabPill = document.getElementById('tabSliderPill');
    if (tabBar && tabPill && typeof setupSlidingIndicator === 'function') {
      window.updateTabPill = setupSlidingIndicator(tabBar, tabPill, '.tab.active');
    }

    // Pre-seed an active booking for immediate demonstration of the Status Layer
    const now = new Date();
    activeSession = {
      spot: SPOTS[0],
      hours: 2,
      total: 65,
      startTime: new Date(now.getTime() - 28 * 60000), // started 28 mins ago
      endTime:   new Date(now.getTime() + 92 * 60000), // 1h 32m left
      bookingId: 'NSPK-2026-JMU-4821',
    };
    populateSession();
  } catch(err) {
    window.__domBootError = err.message + '\n' + (err.stack || '');
    console.error('DOM Boot Error:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp);
} else {
  bootApp();
}

function init3dIsometricTilt() {
  const stage = document.getElementById('d3dIsoStage');
  const bay = document.getElementById('d3dIsoBay');
  if (!stage || !bay) return;

  const handleMove = (x, y) => {
    const rect = stage.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (x - cx) / (rect.width / 2);
    const dy = (y - cy) / (rect.height / 2);
    const rotX = 58 - dy * 7;
    const rotZ = 38 + dx * 9;
    bay.style.transform = `rotateX(${rotX}deg) rotateZ(${rotZ}deg) translateZ(0)`;
  };

  stage.addEventListener('mousemove', (e) => {
    handleMove(e.clientX, e.clientY);
  });
  stage.addEventListener('mouseleave', () => {
    bay.style.transform = 'rotateX(58deg) rotateZ(38deg) translateZ(0)';
  });
  stage.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
  stage.addEventListener('touchend', () => {
    bay.style.transform = 'rotateX(58deg) rotateZ(38deg) translateZ(0)';
  });
}


/* ═══════════════════════════════════════════════════════════════
   THEME MANAGEMENT (Apple Light & Dark Modes)
   ═══════════════════════════════════════════════════════════════ */
const urlTheme = new URLSearchParams(window.location.search).get('theme') || (window.location.hash.toLowerCase().includes('dark') ? 'dark' : null);
let currentTheme = urlTheme || localStorage.getItem('novaspark_theme') || 'light';

function initTheme() {
  applyTheme(currentTheme, false);

  // Settings checkbox switch
  const themeCheckbox = document.getElementById('themeToggleCheckbox');
  if (themeCheckbox) {
    themeCheckbox.checked = (currentTheme === 'dark');
    themeCheckbox.addEventListener('change', () => {
      const newTheme = themeCheckbox.checked ? 'dark' : 'light';
      applyTheme(newTheme, true);
    });
  }

  // Quick toggle pill in filter bar
  const quickToggle = document.getElementById('themeQuickToggle');
  if (quickToggle) {
    quickToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme, true);
      if (themeCheckbox) themeCheckbox.checked = (newTheme === 'dark');
    });
  }
}

function applyTheme(theme, persist = true) {
  currentTheme = theme;
  if (persist) {
    try { localStorage.setItem('novaspark_theme', theme); } catch(e) {}
  }

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  const themeStatusLabel = document.getElementById('themeStatusLabel');
  if (themeStatusLabel) {
    themeStatusLabel.textContent = theme === 'dark' ? 'Dark Theme Active' : 'Light Theme Active';
  }

  const sunIcon = document.querySelector('.theme-toggle-icon .icon-sun');
  const moonIcon = document.querySelector('.theme-toggle-icon .icon-moon');
  if (sunIcon && moonIcon) {
    sunIcon.style.display = theme === 'dark' ? 'none' : 'block';
    moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
  }

  const quickToggle = document.getElementById('themeQuickToggle');
  if (quickToggle) {
    const iconId = (theme === 'dark') ? '#icon-sun' : '#icon-moon';
    const label = (theme === 'dark') ? 'Light' : 'Dark';
    quickToggle.innerHTML = `
      <svg class="pill-v-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="${iconId}"/></svg>
      <span>${label}</span>
    `;
  }

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', theme === 'dark' ? '#000000' : '#F5F5F7');
  }

  if (map && window.L) {
    updateMapTiles();
  } else if (currentMapEngine === 'google-sdk' && googleMap && window.google && window.google.maps) {
    googleMap.setOptions({ styles: (theme === 'dark') ? GOOGLE_APPLE_DARK_STYLE : GOOGLE_APPLE_LIGHT_STYLE });
  }
}


/* ═══════════════════════════════════════════════════════════════
   DUAL MAP ENGINE (Free Apple Vector Map vs Google Maps)
   Zero Quota Limit Free Map · Full Google Maps API with Dynamic Switcher
   ═══════════════════════════════════════════════════════════════ */
let currentMapEngine    = localStorage.getItem('novaspark_map_engine') || ((window.location.hash.toLowerCase().includes('google')) ? 'google' : 'free');
window.currentMapEngine = currentMapEngine;
let currentGoogleApiKey = localStorage.getItem('novaspark_google_api_key') || 'AIzaSyAwO1cg53_iug1-q8LNyANuYGnkWwyRjNA';
let mapInitialized      = false;
let isSatelliteMode     = (window.location.hash.toLowerCase().includes('satellite') || window.location.search.toLowerCase().includes('satellite')) ? true : false;
window.isSatelliteMode  = isSatelliteMode;

// Apple Vector, Google Map & Satellite High-Definition Tile Layers
let appleLightTileLayer   = null;
let appleDarkTileLayer    = null;
let googleRoadTileLayer   = null;
let googleSatTileLayer    = null;
let arcgisSatTileLayer    = null;
let activeTileLayer       = null;

let googleMap           = null;
let googleMarkers       = [];
let isGoogleMapsLoading = false;
let isGoogleMapsLoaded  = false;

// Apple Light & Dark Vector Themes for Google Maps SDK
const GOOGLE_APPLE_LIGHT_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#F7FAFC" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#FFFFFF" }, { weight: 3 }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#4A5568" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#1A202C" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#718096" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#E6F4EA" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#2E7D32" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#FFFFFF" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#E2E8F0" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#4A5568" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#FFF3E0" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#FFB74D" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#B45309" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#EDF2F7" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#D0EBFF" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#1971C2" }] }
];

const GOOGLE_APPLE_DARK_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#161618" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#161618" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#A0A0A5" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#E5E5EA" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#8E8E93" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#142A1D" }] },
  { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#34C759" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#242428" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1C1C1E" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#98989D" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3A3528" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#FF9F0A" }] },
  { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#FFD60A" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#202530" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0A2540" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#0A84FF" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#051320" }] }
];

let activeFilterMode = 'all';

function createAppleMarkerHtml(spot, filter = 'all') {
  const fullClass = spot.isFull ? 'is-full' : '';

  if (spot.vehicleCategory === 'ev') {
    // 2. EV Charging Hub (EV Car + 2W E-Scooty)
    const carHighlight = (filter === 'ev' || filter === 'car') ? 'col-highlight' : '';
    const scootyHighlight = (filter === 'ev' || filter === 'bike' || filter === 'motorcycle') ? 'col-highlight' : '';
    return `
      <div class="apple-bubble dual-veh type-ev-hub ${fullClass} spring-btn" data-id="${spot.id}">
        <div class="apple-bubble-pill">
          <div class="ab-veh-col ev-car-col ${carHighlight}" title="Electric Car Fast Charging">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-ev-car"/>
            </svg>
            <span>₹${spot.evCarPrice}</span>
          </div>
          <span class="ab-divider">|</span>
          <div class="ab-veh-col escooty-col ${scootyHighlight}" title="2W E-Scooty Swapping / Charging">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-escooty"/>
            </svg>
            <span>₹${spot.eScootyPrice}</span>
          </div>
        </div>
        <div class="apple-marker-stem">
          <svg class="apple-stem-svg" width="12" height="6" viewBox="0 0 12 6">
            <path d="M0,0 L12,0 L6,6 Z"/>
          </svg>
          <div class="apple-anchor-dot dot-ev"></div>
          <div class="apple-stem-pulse dot-ev-pulse"></div>
        </div>
      </div>
    `;
  } else if (spot.vehicleCategory === 'bicycle') {
    // 3. Dedicated Pedal Bicycle Stand
    return `
      <div class="apple-bubble single-veh type-bicycle-stand ${fullClass} spring-btn" data-id="${spot.id}">
        <div class="apple-bubble-pill">
          <div class="ab-veh-col bicycle-col col-highlight" title="Pedal Bicycle Stand">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-bicycle"/>
            </svg>
            <span>₹${spot.bicyclePrice}/hr</span>
          </div>
        </div>
        <div class="apple-marker-stem">
          <svg class="apple-stem-svg" width="12" height="6" viewBox="0 0 12 6">
            <path d="M0,0 L12,0 L6,6 Z"/>
          </svg>
          <div class="apple-anchor-dot dot-bicycle"></div>
          <div class="apple-stem-pulse dot-bicycle-pulse"></div>
        </div>
      </div>
    `;
  }

  // 1. Standard Car + Motorbike Spot (Gandhi Nagar, Jewel Chowk, Mubarak Mandi, Canal Road)
  const carHighlight = (filter === 'car') ? 'col-highlight' : '';
  const bikeHighlight = (filter === 'bike' || filter === 'motorcycle') ? 'col-highlight' : '';

  return `
    <div class="apple-bubble dual-veh type-standard ${fullClass} spring-btn" data-id="${spot.id}">
      <div class="apple-bubble-pill">
        <div class="ab-veh-col car-col ${carHighlight}" title="Car Parking">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <use href="#icon-car"/>
          </svg>
          <span>₹${spot.carPrice}</span>
        </div>
        <span class="ab-divider">|</span>
        <div class="ab-veh-col bike-col ${bikeHighlight}" title="Motorbike / 2W Parking">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <use href="#icon-moto"/>
          </svg>
          <span>₹${spot.bikePrice}</span>
        </div>
      </div>
      <div class="apple-marker-stem">
        <svg class="apple-stem-svg" width="12" height="6" viewBox="0 0 12 6">
          <path d="M0,0 L12,0 L6,6 Z"/>
        </svg>
        <div class="apple-anchor-dot dot-standard"></div>
        <div class="apple-stem-pulse dot-standard-pulse"></div>
      </div>
    </div>
  `;
}

/* ── Free Map Marker Rendering (Leaflet) ── */
function renderAppleMarkers(filter = activeFilterMode) {
  if (!map || !window.L) return;

  markers.forEach(m => {
    if (m.marker && map.hasLayer(m.marker)) map.removeLayer(m.marker);
  });
  markers = [];

  SPOTS.forEach(spot => {
    const html = createAppleMarkerHtml(spot, filter);
    const isBicycle = (spot.vehicleCategory === 'bicycle');
    const w = isBicycle ? 88 : 118;

    const icon = L.divIcon({
      className: 'apple-marker-container',
      html: html,
      iconSize: [w, 44],
      iconAnchor: [w / 2, 44],
      popupAnchor: [0, -44]
    });

    const marker = L.marker([spot.lat, spot.lng], { icon }).addTo(map);

    marker.on('click', (e) => {
      if (e.originalEvent) e.originalEvent.stopPropagation();
      openSpotDetail(spot);
    });

    markers.push({ spot, marker });
  });
}

/* ── Google Maps Overlay Class & Marker Rendering ── */
function createGoogleAppleMarker(spot, gMap, onClick, filter = 'all') {
  if (!window.google || !window.google.maps || !window.google.maps.OverlayView) return null;

  const overlay = new google.maps.OverlayView();
  overlay.spot = spot;
  overlay.onClick = onClick;
  overlay.filter = filter;
  overlay.div = null;

  overlay.onAdd = function() {
    const d = document.createElement('div');
    d.className = 'apple-marker-container';
    d.style.position = 'absolute';
    d.style.cursor = 'pointer';
    d.style.zIndex = '100';
    d.innerHTML = createAppleMarkerHtml(this.spot, this.filter);

    d.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.onClick) this.onClick(this.spot);
    });

    this.div = d;
    const panes = this.getPanes();
    if (panes) {
      const targetPane = panes.overlayMouseTarget || panes.overlayLayer;
      if (targetPane) targetPane.appendChild(d);
    }
  };

  overlay.draw = function() {
    if (!this.div) return;
    const proj = this.getProjection();
    if (!proj) return;
    const point = proj.fromLatLngToDivPixel(new google.maps.LatLng(this.spot.lat, this.spot.lng));
    if (point) {
      const isBicycle = (this.spot.vehicleCategory === 'bicycle');
      const offsetX = isBicycle ? 44 : 59;
      this.div.style.left = (point.x - offsetX) + 'px';
      this.div.style.top  = (point.y - 44) + 'px';
    }
  };

  overlay.onRemove = function() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  overlay.setVisible = function(vis) {
    if (this.div) this.div.style.display = vis ? 'block' : 'none';
  };

  overlay.getDiv = function() {
    return this.div;
  };

  if (gMap) overlay.setMap(gMap);
  return overlay;
}

function renderGoogleAppleMarkers(filter = activeFilterMode) {
  if (!googleMap || !window.google || !window.google.maps) return;

  googleMarkers.forEach(m => {
    if (m && m.setMap) m.setMap(null);
  });
  googleMarkers = [];

  SPOTS.forEach(spot => {
    const overlay = createGoogleAppleMarker(spot, googleMap, (s) => {
      openSpotDetail(s);
    }, filter);
    if (overlay) googleMarkers.push(overlay);
  });
}

function initSearchBar() {
  const input = document.querySelector('.search-input');
  if (!input || input._searchInit) return;
  input._searchInit = true;

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      filterSpots('all');
      return;
    }

    const filtered = SPOTS.filter(s =>
      s.name.toLowerCase().includes(query) ||
      s.addr.toLowerCase().includes(query) ||
      (s.type && s.type.toLowerCase().includes(query)) ||
      (s.shortName && s.shortName.toLowerCase().includes(query)) ||
      (s.features && s.features.some(f => (f.label || f).toLowerCase().includes(query)))
    );

    // Update spot list with Apple vehicle badges & dual pricing
    const list = document.getElementById('spotsList');
    if (list) {
      list.innerHTML = filtered.map(renderSpotItemHtml).join('');

      list.querySelectorAll('.spot-item').forEach(el => {
        el.addEventListener('click', () => {
          const spot = SPOTS.find(s => s.id === +el.dataset.id);
          if (spot) openSpotDetail(spot);
        });
      });
    }

    // Toggle markers on Leaflet
    markers.forEach(m => {
      const isVisible = filtered.some(s => s.id === m.spot.id);
      if (isVisible) {
        if (map && !map.hasLayer(m.marker)) map.addLayer(m.marker);
      } else {
        if (map && map.hasLayer(m.marker)) map.removeLayer(m.marker);
      }
    });

    // Toggle markers on Google Maps
    if (googleMarkers && googleMarkers.length) {
      googleMarkers.forEach(gm => {
        const isVisible = filtered.some(s => s.id === gm.spot.id);
        gm.setVisible(isVisible);
      });
    }

    if (filtered.length === 1) {
      if (currentMapEngine === 'google' && googleMap) {
        googleMap.panTo({ lat: filtered[0].lat, lng: filtered[0].lng });
        googleMap.setZoom(16);
      } else if (map) {
        map.flyTo([filtered[0].lat, filtered[0].lng], 15.5, { duration: 0.5 });
      }
    }
  });
}

function recenterCurrentMap() {
  const jammuCenter = { lat: 32.7266, lng: 74.8570 };
  if (currentMapEngine === 'google' && googleMap) {
    googleMap.panTo(jammuCenter);
    googleMap.setZoom(14);
  } else if (map && window.L) {
    map.flyTo([jammuCenter.lat, jammuCenter.lng], 14, { duration: 0.6 });
  }
  if (isDetailOpen) showPeekState();
}

/* ── Ensure Tile Layers ── */
function ensureTileLayers() {
  if (!window.L) return;

  // 1. Apple Vector Street Map (ArcGIS World Street Map - Pastel Apple aesthetic, unwatermarked)
  if (!appleLightTileLayer) {
    appleLightTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      className: 'apple-dark-tiles',
      attribution: '&copy; Esri, HERE, Garmin, USGS'
    });
  }

  // 2. Google Maps Roadmap Tile Layer (Authentic Google Maps vector styling)
  if (!googleRoadTileLayer) {
    googleRoadTileLayer = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: '0123',
      className: 'apple-dark-tiles',
      attribution: '&copy; Google Maps'
    });
  }

  // 3. Google Maps Satellite Hybrid (High-resolution aerial imagery + streets & labels)
  if (!googleSatTileLayer) {
    googleSatTileLayer = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: '0123',
      className: 'satellite-tiles',
      attribution: '&copy; Google Imagery'
    });
  }

  // 4. ArcGIS World Imagery (Backup Satellite)
  if (!arcgisSatTileLayer) {
    arcgisSatTileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      className: 'satellite-tiles',
      attribution: '&copy; Esri, Maxar'
    });
  }
}

/* ── Multi-Layer Tile Resolver ── */
function getDesiredTileLayer() {
  ensureTileLayers();

  // 1. Satellite Mode (Google Hybrid Satellite with roads & labels)
  if (window.isSatelliteMode) {
    return googleSatTileLayer || arcgisSatTileLayer;
  }

  // 2. Google Maps Road Mode
  if (currentMapEngine === 'google') {
    return googleRoadTileLayer;
  }

  // 3. Free Map Mode (Apple Vector Light / Dark via World Street Map)
  return appleLightTileLayer;
}

function updateMapTiles() {
  if (!map || !window.L) return;
  ensureTileLayers();
  const desired = getDesiredTileLayer();
  if (activeTileLayer === desired && map.hasLayer(desired)) return;

  const allLayers = [appleLightTileLayer, googleRoadTileLayer, googleSatTileLayer, arcgisSatTileLayer];
  allLayers.forEach(layer => {
    if (layer && map.hasLayer(layer)) {
      try { map.removeLayer(layer); } catch(e) {}
    }
  });

  activeTileLayer = desired;
  if (activeTileLayer) {
    activeTileLayer.addTo(map);
    if (activeTileLayer.bringToBack) activeTileLayer.bringToBack();
  }
}

/* ── Leaflet Engine Boot ── */
function initLeafletMapEngine() {
  const container = document.getElementById('map-container');
  if (!container || !window.L) return;
  if (container._leaflet_id) {
    container._leaflet_id = null;
  }

  mapInitialized = true;
  const jammuCenter = [32.7266, 74.8570];

  map = L.map('map-container', {
    center: jammuCenter,
    zoom: 14,
    zoomControl: false,
    attributionControl: false,
    minZoom: 11,
    maxZoom: 19
  });

  ensureTileLayers();
  activeTileLayer = getDesiredTileLayer();
  if (activeTileLayer) activeTileLayer.addTo(map);

  renderAppleMarkers();

  const recenterBtn = document.getElementById('recenterBtn');
  if (recenterBtn && !recenterBtn._bound) {
    recenterBtn._bound = true;
    recenterBtn.addEventListener('click', recenterCurrentMap);
  }

  map.on('click', () => {
    if (isDetailOpen) showPeekState();
  });

  initSearchBar();

  if (isCarplayActive) {
    const curSpot = selectedSpot || SPOTS[0];
    showCarRoute(curSpot);
  }
}

/* ── Google Maps Engine Boot ── */
function loadGoogleMapsScript(key, callback) {
  if (window.google && window.google.maps && window.google.maps.Map) {
    if (callback) callback();
    return;
  }
  if (isGoogleMapsLoading) {
    const checkInterval = setInterval(() => {
      if (window.google && window.google.maps && window.google.maps.Map) {
        clearInterval(checkInterval);
        if (callback) callback();
      }
    }, 100);
    return;
  }

  isGoogleMapsLoading = true;
  window.__novaGoogleMapsLoaded = () => {
    isGoogleMapsLoaded = true;
    isGoogleMapsLoading = false;
    if (callback) callback();
  };

  window.gm_authFailure = () => {
    console.warn('Google Maps API Key: Maps JavaScript API or billing may need activation in Google Cloud Console. Seamlessly falling back to Google Maps Tile Layer.');
    showToast('Google Maps Active', 'Running with high-definition Google Maps tile layer.');
    switchMapEngine('google');
  };

  const existingScript = document.getElementById('googleMapsSdk');
  if (existingScript) existingScript.remove();

  const script = document.createElement('script');
  script.id = 'googleMapsSdk';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&callback=__novaGoogleMapsLoaded&v=weekly`;
  script.async = true;
  script.onerror = (e) => {
    console.error('Failed to load Google Maps SDK', e);
    isGoogleMapsLoading = false;
    showToast('Google Maps Active', 'Running with high-definition Google Maps tile layer.');
    switchMapEngine('google');
  };
  document.head.appendChild(script);
}

function buildGoogleMap() {
  const container = document.getElementById('map-container');
  if (!container || !window.google || !window.google.maps) return;

  container.innerHTML = '';
  const isDark = (currentTheme === 'dark');
  const jammuCenter = { lat: 32.7266, lng: 74.8570 };

  googleMap = new google.maps.Map(container, {
    center: jammuCenter,
    zoom: 14,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    mapTypeId: window.isSatelliteMode ? 'hybrid' : 'roadmap',
    backgroundColor: isDark ? '#000000' : '#F5F5F7',
    styles: isDark ? GOOGLE_APPLE_DARK_STYLE : GOOGLE_APPLE_LIGHT_STYLE
  });

  googleMap.addListener('click', () => {
    if (isDetailOpen) showPeekState();
  });

  renderGoogleAppleMarkers();

  const recenterBtn = document.getElementById('recenterBtn');
  if (recenterBtn && !recenterBtn._bound) {
    recenterBtn._bound = true;
    recenterBtn.addEventListener('click', recenterCurrentMap);
  }

  initSearchBar();

  if (isCarplayActive) {
    const curSpot = selectedSpot || SPOTS[0];
    showCarRoute(curSpot);
  }
}

function initGoogleMapEngine() {
  const container = document.getElementById('map-container');
  if (!container) return;

  if (!window.google || !window.google.maps) {
    loadGoogleMapsScript(currentGoogleApiKey, () => {
      buildGoogleMap();
    });
  } else {
    buildGoogleMap();
  }
}

function initMap() {
  if (currentMapEngine === 'google-sdk') {
    initGoogleMapEngine();
  } else {
    initLeafletMapEngine();
  }
}

function switchMapEngine(targetEngine) {
  currentMapEngine = targetEngine;
  try {
    localStorage.setItem('novaspark_map_engine', targetEngine);
  } catch(e) {}

  const container = document.getElementById('map-container');

  if (targetEngine === 'google-sdk') {
    // Teardown Leaflet and boot Google Maps JS SDK
    if (map) {
      try { map.remove(); } catch(e) {}
      map = null;
      mapInitialized = false;
      markers = [];
    }
    if (container) {
      container._leaflet_id = null;
      container.innerHTML = '';
    }
    initGoogleMapEngine();
  } else {
    // Both 'free' and 'google' tile engines run on high-performance Leaflet
    if (googleMap) {
      if (googleMarkers && googleMarkers.length) {
        googleMarkers.forEach(m => { if (m && m.setMap) m.setMap(null); });
        googleMarkers = [];
      }
      googleMap = null;
      if (container) {
        container.innerHTML = '';
      }
    }

    if (!map) {
      mapInitialized = false;
      initLeafletMapEngine();
    } else {
      updateMapTiles();
    }
  }

  updateMapEngineUI();
  showToast(
    targetEngine === 'google' ? 'Google Maps Active' : (targetEngine === 'google-sdk' ? 'Google Maps SDK Active' : 'Apple Vector Map Active'),
    targetEngine === 'google' ? 'Switched to official Google Maps roadmap tiles.' : (targetEngine === 'google-sdk' ? 'Loaded Google Maps JavaScript SDK.' : 'Switched to high-definition Apple Maps styling.')
  );
}

function updateMapEngineUI() {
  const isGoogle = (currentMapEngine === 'google' || currentMapEngine === 'google-sdk');

  // Filter bar quick toggle pill
  const quickToggle = document.getElementById('mapEngineQuickToggle');
  const meqtLabel = document.getElementById('meqtLabel');
  if (quickToggle) {
    quickToggle.classList.toggle('active', isGoogle);
    if (meqtLabel) meqtLabel.textContent = isGoogle ? 'Google Map' : 'Apple Map';
  }

  // Settings badge & switcher buttons
  const badge = document.getElementById('mebActiveBadge');
  if (badge) {
    badge.textContent = isGoogle ? 'Google Maps (Active)' : 'Free Map (Apple Style)';
  }

  const btnFree = document.getElementById('btnEngineFree');
  const btnGoogle = document.getElementById('btnEngineGoogle');
  if (btnFree && btnGoogle) {
    btnFree.classList.toggle('active', !isGoogle);
    btnGoogle.classList.toggle('active', isGoogle);
  }

  // Chatbot engine badge
  const cbBadge = document.getElementById('cbEngineBadge');
  if (cbBadge) {
    cbBadge.textContent = isGoogle ? 'Google Maps' : 'Apple Map';
    cbBadge.style.color = isGoogle ? 'var(--c-accent)' : '#34C759';
  }

  // Help row subtext in Settings
  const helpSub = document.getElementById('helpCenterSub') || document.getElementById('helpSupportSub');
  if (helpSub) {
    helpSub.textContent = isGoogle ? 'Active: Google Maps · Tap to toggle engine' : 'Active: Apple Vector Map · Tap to toggle engine';
  }
}

function showToast(title, sub, showViewBtn = false) {
  const notice = document.getElementById('mapSwitchNotice');
  const titleEl = document.getElementById('msnTitle');
  const subEl = document.getElementById('msnSub');
  const btn = document.getElementById('msnViewMapBtn');
  if (!notice) return;

  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = sub;
  if (btn) btn.style.display = showViewBtn ? 'inline-block' : 'none';

  notice.style.display = 'flex';
  notice.style.animation = 'none';
  void notice.offsetWidth; // trigger reflow
  notice.style.animation = 'fadeInSlide .25s var(--ease-state)';

  clearTimeout(notice._timer);
  notice._timer = setTimeout(() => {
    notice.style.display = 'none';
  }, showViewBtn ? 5000 : 3500);
}

function showMapSwitchNotice(engine) {
  const isGoogle = (engine === 'google');
  const title = isGoogle ? 'Map Switched to Google Maps!' : 'Map Switched to Free Map!';
  const sub = isGoogle ? 'Official Google Maps SDK is now active (Key 200 OK)' : 'Zero-quota Leaflet + Esri vector tiles are now active';
  showToast(title, sub, true);
}

/* ═══════════════════════════════════════════════════════════════
   HELP CENTER CHATBOT (Apple iOS Native Assistant)
   - Greets: "What can I help you with today?"
   - Typing 'API' toggles between Free Map and Google Maps, confirms state
   - Typing 'API, Google' prompts for API key, receives and applies it
   - Provides instant search, bicycle spots, and mega hubs navigation
   ═══════════════════════════════════════════════════════════════ */
let awaitingGoogleApiKey = false;

function initHelpChatbot() {
  const modal      = document.getElementById('helpChatbotModal');
  const helpRow    = document.getElementById('helpCenterRow') || document.getElementById('helpSupportRow');
  const closeBtn   = document.getElementById('cbCloseBtn');
  const form       = document.getElementById('cbForm');
  const input      = document.getElementById('cbInput');
  const messagesEl = document.getElementById('cbMessages');
  const chipsBar   = document.getElementById('cbChipsBar');
  const viewMapBtn = document.getElementById('msnViewMapBtn');

  if (!modal) return;

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function appendMessage(sender, textHtml, actions = []) {
    if (!messagesEl) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `cb-msg ${sender}`;

    let actionsHtml = '';
    if (actions && actions.length) {
      actionsHtml = actions.map(act =>
        `<button type="button" class="cb-action-btn" data-act="${act.action}">${act.label}</button>`
      ).join(' ');
    }

    msgDiv.innerHTML = `
      <div class="cb-bubble">
        ${textHtml}
        ${actionsHtml ? `<div style="margin-top:8px;">${actionsHtml}</div>` : ''}
      </div>
      <div class="cb-msg-time">${formatTime(new Date())}</div>
    `;

    messagesEl.appendChild(msgDiv);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    // Attach listeners to any action buttons inside
    msgDiv.querySelectorAll('.cb-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleChatAction(btn.dataset.act);
      });
    });
  }

  function handleChatAction(action) {
    if (action === 'view-map') {
      closeChatbot();
      const homeTab = document.querySelector('[data-screen="screen-home"]');
      if (homeTab) homeTab.click();
    } else if (action === 'filter-megahub') {
      closeChatbot();
      const homeTab = document.querySelector('[data-screen="screen-home"]');
      if (homeTab) homeTab.click();
      const pill = document.querySelector('.pill[data-filter="megahub"]');
      if (pill) pill.click();
    } else if (action === 'filter-bicycle') {
      closeChatbot();
      const homeTab = document.querySelector('[data-screen="screen-home"]');
      if (homeTab) homeTab.click();
      const pill = document.querySelector('.pill[data-filter="bicycle"]');
      if (pill) pill.click();
    } else if (action === 'filter-motorcycle') {
      closeChatbot();
      const homeTab = document.querySelector('[data-screen="screen-home"]');
      if (homeTab) homeTab.click();
      const pill = document.querySelector('.pill[data-filter="motorcycle"]');
      if (pill) pill.click();
    } else if (action === 'view-wallet') {
      closeChatbot();
      const profTab = document.querySelector('[data-screen="screen-profile"]');
      if (profTab) profTab.click();
    }
  }

  function openChatbot() {
    modal.classList.add('show');
    if (input) {
      setTimeout(() => input.focus(), 250);
    }
    // Greet if first time opening
    if (messagesEl && messagesEl.children.length === 0) {
      appendMessage('bot', `
        <strong>Hello! What can I help you with today?</strong><br>
        • Type <code>API</code> to switch between <strong>Google Maps</strong> &amp; <strong>Free Map</strong>.<br>
        • Type <code>API, Google</code> to update your Google Maps API key.<br>
        • Or ask about bicycle docks, motorbikes, mega hubs, or wallet balance!
      `);
    }
  }

  function closeChatbot() {
    modal.classList.remove('show');
    if (input) input.blur();
  }

  if (helpRow) {
    helpRow.addEventListener('click', openChatbot);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeChatbot);
  }

  // Backdrop click closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeChatbot();
  });

  // Suggestion chips
  if (chipsBar) {
    chipsBar.querySelectorAll('.cb-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        if (cmd) {
          processUserInput(cmd);
        }
      });
    });
  }

  // Process user message
  function processUserInput(rawText) {
    const text = rawText.trim();
    if (!text) return;

    // Show user message
    appendMessage('user', text.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    if (input) input.value = '';

    const lower = text.toLowerCase();

    // 1. Awaiting key state
    if (awaitingGoogleApiKey) {
      awaitingGoogleApiKey = false;
      const cleanKey = text.replace(/[{}]/g, '').trim();
      if (!cleanKey) {
        appendMessage('bot', `API key cannot be blank. Please type <code>API, Google</code> to try again.`);
        return;
      }
      currentGoogleApiKey = cleanKey;
      try { localStorage.setItem('novaspark_google_api_key', cleanKey); } catch(e) {}

      // Restart Google Maps with new key
      const oldSdk = document.getElementById('googleMapsSdk');
      if (oldSdk) oldSdk.remove();
      window.google = undefined;
      isGoogleMapsLoaded = false;
      switchMapEngine('google');

      appendMessage('bot', `
        <strong>Google Maps API Key Saved!</strong><br>
        Key: <code>••••••••${cleanKey.slice(-4)}</code><br>
        Google Maps is now activated and running with your key.
      `, [{ action: 'view-map', label: 'View on Map' }]);
      return;
    }

    // 2. Specific prompt: API, Google
    if (lower === 'api, google' || lower === 'api,google' || lower === 'api google' || lower === 'google api key') {
      awaitingGoogleApiKey = true;
      appendMessage('bot', `
        <strong>Enter your Google Maps API Key:</strong><br>
        Please paste or type your Google Maps API key in your next message. I will securely save it and activate Google Maps immediately.
      `);
      return;
    }

    // 3. Toggle: API
    if (lower === 'api' || lower === 'toggle api' || lower === 'switch api' || lower === 'map api') {
      const nextEngine = (currentMapEngine === 'free') ? 'google' : 'free';
      switchMapEngine(nextEngine);
      showMapSwitchNotice(nextEngine);

      if (nextEngine === 'google') {
        appendMessage('bot', `
          <strong>Google Maps is started!</strong><br>
          Official Google Maps JavaScript vector canvas is now active with Apple-style marker overlays.
        `, [{ action: 'view-map', label: 'View on Map' }]);
      } else {
        appendMessage('bot', `
          <strong>Free Map is started!</strong><br>
          Zero-quota Leaflet vector tiles with Apple-style interactive markers are now active.
        `, [{ action: 'view-map', label: 'View on Map' }]);
      }
      return;
    }

    // 4. Mega Hubs
    if (lower.includes('mega') || lower.includes('hub') || lower.includes('multi')) {
      appendMessage('bot', `
        <strong>Combined Mega Parking Hubs</strong><br>
        We have 2 high-capacity complexes in Jammu supporting all 4 vehicles (Cars, Motorbikes, Bicycles &amp; EVs):<br>
        • <strong>Bahu Plaza Grand Mobility Hub</strong> (50+ Cars, 80 Bikes, 40 Cycles, 12 EV Chargers) · ₹35/hr<br>
        • <strong>General Bus Stand Smart Complex</strong> (Multi-tier ANPR Automated Structure) · ₹30/hr
      `, [{ action: 'filter-megahub', label: 'View Mega Hubs' }]);
      return;
    }

    // 5. Bicycle Parking
    if (lower.includes('bicycle') || lower.includes('cycle')) {
      appendMessage('bot', `
        <strong>Dedicated Bicycle Parking</strong><br>
        We have 3 dedicated bicycle stations starting from ₹5/hr:<br>
        • <strong>Jammu University Cycle Station</strong> (₹5/hr) · Solar roof &amp; tire pump<br>
        • <strong>Panjtirthi Heritage Cycle Hub</strong> (₹8/hr) · Smart chain locks &amp; e-bike charging<br>
        • <strong>Gandhi Nagar Apsara Cycle Vault</strong> (₹6/hr) · Sheltered racks &amp; attendant
      `, [{ action: 'filter-bicycle', label: 'View Bicycles' }]);
      return;
    }

    // 6. Motorbike / Scooter
    if (lower.includes('motor') || lower.includes('scooter') || lower.includes('bike') || lower.includes('two wheeler')) {
      appendMessage('bot', `
        <strong>Motorbike &amp; Scooter Parking</strong><br>
        Dedicated bays are available across Jammu starting from ₹15/hr:<br>
        • <strong>Canal Road Garden Driveway</strong> (₹15/hr)<br>
        • <strong>Bahu Fort Riverfront Bay</strong> (₹15/hr)<br>
        • <strong>Mubarak Mandi Heritage Bay</strong> (₹15/hr)
      `, [{ action: 'filter-motorcycle', label: 'View Motorbikes' }]);
      return;
    }

    // 7. Wallet / Balance
    if (lower.includes('wallet') || lower.includes('balance') || lower.includes('pay') || lower.includes('money')) {
      appendMessage('bot', `
        <strong>Nova Pay Balance: ₹${walletBalance.toLocaleString()}</strong><br>
        Your digital wallet is active for 1-tap instant driveway bookings, auto-extensions, and zero-surcharge check-ins.
      `, [{ action: 'view-wallet', label: 'View Wallet' }]);
      return;
    }

    // Default response
    appendMessage('bot', `
      I'm here to help with all parking services in Jammu!<br>
      • Type <code>API</code> to toggle map engine (Google Maps / Free Map)<br>
      • Type <code>API, Google</code> to set your Google Maps API key<br>
      • Ask about <strong>Bicycles</strong>, <strong>Motorbikes</strong>, or <strong>Mega Hubs</strong>!
    `);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input) processUserInput(input.value);
    });
  }

  if (viewMapBtn) {
    viewMapBtn.addEventListener('click', () => {
      const homeTab = document.querySelector('[data-screen="screen-home"]');
      if (homeTab) homeTab.click();
    });
  }

  updateMapEngineUI();
}

window.initMap = initMap;


/* ═══════════════════════════════════════════════════════════════
   BOTTOM SHEET — Spring-Physics Drag & Snap
   ═══════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════
   BOTTOM SHEET — Apple Spring Drag, Dock & Minimize Physics
   ═══════════════════════════════════════════════════════════════ */
function isDesktopSidebar() {
  return (typeof window !== 'undefined') &&
    ((window.innerWidth >= 900 && window.matchMedia('(orientation: landscape)').matches) || window.innerWidth >= 1024);
}

let isSheetMinimized = !isDesktopSidebar();
let isDetailOpen     = false;

function getMinimizedOffset() {
  const sheet = document.getElementById('booking-sheet');
  if (!sheet) return 360;
  if (isDesktopSidebar()) return 0;
  const isTabletPortrait = (window.innerWidth >= 600 && window.innerWidth <= 950 && window.matchMedia('(orientation: portrait)').matches) ||
                           (window.innerWidth >= 600 && window.innerWidth < 900);
  const visibleH = isTabletPortrait ? 56 : 124;
  return Math.max(0, sheet.offsetHeight - visibleH);
}

function updateSheetUI() {
  const sheet      = document.getElementById('booking-sheet');
  const stbChevron = document.getElementById('stbChevron');
  const stbLabel   = document.getElementById('stbLabel');
  const sbhTitle   = document.getElementById('sbhTitle');
  const sbhSub     = document.getElementById('sbhSub');

  if (isSheetMinimized) {
    if (sheet) sheet.classList.add('is-minimized');
    if (stbChevron) stbChevron.textContent = '▲';
    if (stbLabel) stbLabel.textContent = 'Open Spots';
    if (sbhTitle) sbhTitle.textContent = `${SPOTS.length} Prime Hubs Available`;
    if (sbhSub) sbhSub.textContent = 'Jammu City · from ₹5/hr';
  } else {
    if (sheet) sheet.classList.remove('is-minimized');
    if (stbChevron) stbChevron.textContent = '▼';
    if (stbLabel) stbLabel.textContent = 'Minimize';
    if (isDetailOpen && selectedSpot) {
      if (sbhTitle) sbhTitle.textContent = selectedSpot.name;
      if (sbhSub) sbhSub.textContent = `₹${selectedSpot.price}/hr · ${selectedSpot.type}`;
    } else {
      if (sbhTitle) sbhTitle.textContent = 'Nearby Mobility Hubs';
      if (sbhSub) sbhSub.textContent = `${SPOTS.length} verified parking hubs & stands`;
    }
  }
}

function expandSheet(toDetail = false) {
  isSheetMinimized = false;
  if (!toDetail && isDetailOpen) {
    showPeekState();
  }
  updateSheetUI();
  if (!isDesktopSidebar()) {
    sheetSpring.to(0);
  }
}

function minimizeSheet() {
  isSheetMinimized = true;
  updateSheetUI();
  if (!isDesktopSidebar()) {
    sheetSpring.to(getMinimizedOffset());
  }
}

function toggleSheet() {
  if (isSheetMinimized) {
    expandSheet(isDetailOpen);
  } else {
    minimizeSheet();
  }
}

function initSheet() {
  const sheet     = document.getElementById('booking-sheet');
  const handle    = document.getElementById('sheetHandle');
  const barHeader = document.getElementById('sheetBarHeader');
  const toggleBtn = document.getElementById('sheetToggleBtn');

  sheetSpring = new Spring('heavy');
  isSheetMinimized = !isDesktopSidebar();
  updateSheetUI();

  if (isSheetMinimized) {
    // Initial dock bar position: calculate and place immediately on mobile / portrait
    requestAnimationFrame(() => {
      sheetY = getMinimizedOffset();
      sheetSpring.snap(sheetY);
      applySheetY();
    });
  } else {
    sheetY = 0;
    sheetSpring.snap(0);
    applySheetY();
  }

  sheetSpring.onUpdate = (v) => {
    sheetY = v;
    applySheetY();
  };

  /* ── Toggle button click ─────────────────────────────────── */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSheet();
    });
  }

  /* ── Tapping header opens if currently minimized ─────────── */
  if (barHeader) {
    barHeader.addEventListener('click', (e) => {
      if (isSheetMinimized && !e.target.closest('#sheetToggleBtn')) {
        expandSheet(isDetailOpen);
      }
    });
  }

  /* ── Drag gesture on handle & bar header ─────────────────── */
  let dragging = false, startY = 0, startSheetY = 0;

  const onStart = (e) => {
    if (isDesktopSidebar()) return; // desktop handled via css transition & toggle
    if (e.target.closest('#sheetToggleBtn')) return;
    dragging = true;
    startY = (e.touches ? e.touches[0] : e).clientY;
    startSheetY = sheetY;
    sheetSpring.stop();
  };

  const onMove = (e) => {
    if (!dragging) return;
    const curY = (e.touches ? e.touches[0] : e).clientY;
    const dy = curY - startY;

    let nextY = startSheetY + dy;
    if (nextY < 0) {
      // Dragging up past top resting point — rubber band resistance
      nextY = -rubberBand(-nextY, window.innerHeight, 0.55);
    }
    const maxMinY = getMinimizedOffset();
    if (nextY > maxMinY + 50) {
      // Dragging down past minimized bottom — rubber band resistance
      const over = nextY - maxMinY;
      nextY = maxMinY + rubberBand(over, 200, 0.55);
    }

    sheetY = nextY;
    applySheetY();
  };

  const onEnd = (e) => {
    if (!dragging) return;
    dragging = false;
    const curY = (e.changedTouches ? e.changedTouches[0] : e).clientY;
    const dy = curY - startY;
    const minOffset = getMinimizedOffset();

    if (isSheetMinimized) {
      // We were minimized: dragging UP expands
      if (dy < -40 || sheetY < minOffset - 60) {
        expandSheet(isDetailOpen);
      } else {
        sheetSpring.to(minOffset);
      }
    } else {
      // We were open: dragging DOWN minimizes
      if (dy > 60 || sheetY > 90) {
        minimizeSheet();
      } else {
        sheetSpring.to(0);
      }
    }
  };

  if (handle)    handle.addEventListener('pointerdown', onStart);
  if (barHeader) barHeader.addEventListener('pointerdown', onStart);

  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup',   onEnd);
  window.addEventListener('pointercancel', onEnd);
}

function applySheetY() {
  const sheet = document.getElementById('booking-sheet');
  if (sheet) {
    if (isDesktopSidebar()) {
      sheet.style.transform = 'none';
    } else {
      sheet.style.transform = `translateY(${sheetY}px)`;
    }
  }
}

function handleViewportOrOrientationChange() {
  const isSidebar = isDesktopSidebar();
  if (isSidebar) {
    sheetY = 0;
    if (sheetSpring) sheetSpring.snap(0);
  } else {
    if (isSheetMinimized) {
      sheetY = getMinimizedOffset();
      if (sheetSpring) sheetSpring.snap(sheetY);
    } else {
      sheetY = 0;
      if (sheetSpring) sheetSpring.snap(0);
    }
  }
  applySheetY();
  updateSheetUI();
  if (window.map) {
    window.map.invalidateSize();
  }
  if (typeof window.updateTabPill === 'function') {
    window.updateTabPill(true);
  }
}

window.addEventListener('resize', handleViewportOrOrientationChange);
window.addEventListener('orientationchange', handleViewportOrOrientationChange);

function moveSheet(offset) {
  if (!isDesktopSidebar()) {
    sheetSpring.to(offset);
  }
}


/* ═══════════════════════════════════════════════════════════════
   SPOTS LIST (Peek State)
   ═══════════════════════════════════════════════════════════════ */
function renderSpotItemHtml(s) {
  if (s.vehicleCategory === 'ev') {
    return `
      <div class="spot-item spring-btn" data-id="${s.id}">
        <div class="si-color squircle-g2" style="background:var(--vehicle-ev-bg);color:var(--vehicle-ev-fg);font-weight:800">${s.hostInit}</div>
        <div class="si-body">
          <div class="si-name">${s.name}</div>
          <div class="si-sub">${s.addr}</div>
          <div class="si-dual-badges">
            <span class="si-v-badge si-v-ev">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-ev-car"/></svg>
              <span>${s.evCarSpots} EV Cars</span>
            </span>
            <span class="si-v-badge si-v-ev" style="background:rgba(0,137,123,0.14);color:#00897B">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-escooty"/></svg>
              <span>${s.eScootySpots} E-Scooties</span>
            </span>
            <span class="si-v-badge si-v-mega">
              <span>Mega EV Hub</span>
            </span>
          </div>
        </div>
        <div class="si-pricing-col">
          <div class="si-p-row ev" style="color:var(--vehicle-ev-fg)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-ev-car"/></svg>
            <span>₹${s.evCarPrice}/hr</span>
          </div>
          <div class="si-p-row ev" style="color:#00897B">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-escooty"/></svg>
            <span>₹${s.eScootyPrice}/hr</span>
          </div>
        </div>
      </div>
    `;
  }

  if (s.vehicleCategory === 'bicycle') {
    return `
      <div class="spot-item spring-btn" data-id="${s.id}">
        <div class="si-color squircle-g2" style="background:var(--vehicle-bike-bg);color:var(--vehicle-bike-fg);font-weight:800">${s.hostInit}</div>
        <div class="si-body">
          <div class="si-name">${s.name}</div>
          <div class="si-sub">${s.addr}</div>
          <div class="si-dual-badges">
            <span class="si-v-badge si-v-bicycle">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-bicycle"/></svg>
              <span>${s.bicycleSpots} Smart Cycles</span>
            </span>
            <span class="si-v-badge si-v-bicycle">
              <span>Dedicated Stand</span>
            </span>
          </div>
        </div>
        <div class="si-pricing-col">
          <div class="si-p-row bicycle" style="color:var(--vehicle-bike-fg)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-bicycle"/></svg>
            <span>₹${s.bicyclePrice}/hr</span>
          </div>
        </div>
      </div>
    `;
  }

  // Standard Car & Motorbike Hub
  return `
    <div class="spot-item spring-btn" data-id="${s.id}">
      <div class="si-color squircle-g2" style="background:var(--vehicle-car-bg);color:var(--vehicle-car-fg);font-weight:800">${s.hostInit}</div>
      <div class="si-body">
        <div class="si-name">${s.name}</div>
        <div class="si-sub">${s.addr}</div>
        <div class="si-dual-badges">
          <span class="si-v-badge si-v-car">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-car"/></svg>
            <span>${s.carSpots} Cars</span>
          </span>
          <span class="si-v-badge si-v-bike">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-moto"/></svg>
            <span>${s.bikeSpots} Bikes</span>
          </span>
        </div>
      </div>
      <div class="si-pricing-col">
        <div class="si-p-row car" style="color:var(--vehicle-car-fg)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-car"/></svg>
          <span>₹${s.carPrice}/hr</span>
        </div>
        <div class="si-p-row bike" style="color:var(--vehicle-moto-fg)">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-moto"/></svg>
          <span>₹${s.bikePrice}/hr</span>
        </div>
      </div>
    </div>
  `;
}

function populateSpotsList() {
  const list = document.getElementById('spotsList');
  if (!list) return;
  list.innerHTML = SPOTS.map(renderSpotItemHtml).join('');

  list.querySelectorAll('.spot-item').forEach(el => {
    el.addEventListener('click', () => {
      const spot = SPOTS.find(s => s.id === +el.dataset.id);
      if (spot) openSpotDetail(spot);
    });
  });
}


/* ═══════════════════════════════════════════════════════════════
   SPOT DETAIL (Expanded State & Vehicle Selector)
   ═══════════════════════════════════════════════════════════════ */
function selectVehicleMode(spot, mode) {
  if (!spot) return;
  spot.selectedVehicle = mode;

  if (mode === 'ev-car') {
    spot.price = spot.evCarPrice;
  } else if (mode === 'escooty') {
    spot.price = spot.eScootyPrice;
  } else if (mode === 'bicycle') {
    spot.price = spot.bicyclePrice;
  } else if (mode === 'bike') {
    spot.price = spot.bikePrice;
  } else {
    spot.price = spot.carPrice;
  }

  const carBtn = document.getElementById('vcsChoiceCar');
  const bikeBtn = document.getElementById('vcsChoiceBike');
  if (carBtn) carBtn.classList.toggle('active', (mode === 'car' || mode === 'ev-car' || mode === 'bicycle'));
  if (bikeBtn) bikeBtn.classList.toggle('active', (mode === 'bike' || mode === 'escooty'));

  const mPrice = document.getElementById('mPrice');
  if (mPrice) mPrice.textContent = `₹${spot.price}/hr`;

  const mType = document.getElementById('mType');
  if (mType) {
    let typeIcon = 'car';
    let typeLabel = 'Car Bay';
    if (mode === 'bike') { typeIcon = 'moto'; typeLabel = 'Bike Bay'; }
    else if (mode === 'ev-car') { typeIcon = 'ev-car'; typeLabel = 'EV Car Fast Charger'; }
    else if (mode === 'escooty') { typeIcon = 'escooty'; typeLabel = '2W E-Scooty Bay'; }
    else if (mode === 'bicycle') { typeIcon = 'bicycle'; typeLabel = 'Pedal Bicycle Dock'; }

    mType.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block; vertical-align:middle; margin-right:4px;">
        <use href="#icon-${typeIcon}"/>
      </svg>
      <span>${typeLabel}</span>
    `;
  }

  const d3dDim = document.getElementById('d3dDim');
  if (d3dDim) d3dDim.textContent = `${(mode === 'car' || mode === 'ev-car') ? spot.carDim : spot.bikeDim} · ${spot.clearance}`;

  const d3dSlotNum = document.getElementById('d3dSlotNum');
  if (d3dSlotNum) {
    let prefix = 'CAR';
    if (mode === 'bike') prefix = 'BIKE';
    else if (mode === 'ev-car') prefix = 'EV-CAR';
    else if (mode === 'escooty') prefix = 'E-SCOOTY';
    else if (mode === 'bicycle') prefix = 'CYCLE';
    d3dSlotNum.textContent = `${prefix} BAY #${spot.id}`;
  }

  const d3dFitBadge = document.getElementById('d3dFitBadge');
  if (d3dFitBadge) {
    let fitText = 'Verified SUV & Sedan Bay';
    if (mode === 'bike') fitText = 'Verified 2-Wheeler / Motorbike Bay';
    else if (mode === 'ev-car') fitText = 'Fast DC CCS2 Certified Station';
    else if (mode === 'escooty') fitText = 'Jammu E-Scooty Swap Verified';
    else if (mode === 'bicycle') fitText = 'Secure Automated Cycle Dock';

    d3dFitBadge.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="display:inline-block; vertical-align:middle; margin-right:4px;">
        <use href="#icon-check"/>
      </svg>
      <span>${fitText}</span>
    `;
  }

  const d3dVehicleHolo = document.getElementById('d3dVehicleHolo') || document.querySelector('.d3d-vehicle-holo');
  if (d3dVehicleHolo) {
    if (mode === 'bike' || mode === 'escooty') {
      const motoCol = (mode === 'escooty') ? '#00897B' : 'var(--vehicle-moto-fg)';
      const motoBg = (mode === 'escooty') ? 'rgba(0,137,123,0.15)' : 'var(--vehicle-moto-bg)';
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 100 46" class="d3d-car-svg">
          <path d="M30 36 L45 20 L55 20 L65 28 L72 14 L62 14" fill="none" stroke="${motoCol}" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="28" cy="36" r="8" fill="${motoBg}" stroke="${motoCol}" stroke-width="2"/>
          <circle cx="72" cy="36" r="8" fill="${motoBg}" stroke="${motoCol}" stroke-width="2"/>
          <path d="M42 20 L38 30 L56 30" fill="${motoBg}" stroke="${motoCol}" stroke-width="1.8"/>
        </svg>
      `;
    } else if (mode === 'bicycle') {
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 100 46" class="d3d-car-svg">
          <circle cx="24" cy="34" r="9" fill="none" stroke="var(--vehicle-bike-fg)" stroke-width="2"/>
          <circle cx="76" cy="34" r="9" fill="none" stroke="var(--vehicle-bike-fg)" stroke-width="2"/>
          <path d="M24 34 L48 34 L62 20 L38 20 Z" fill="none" stroke="var(--vehicle-bike-fg)" stroke-width="2"/>
          <path d="M48 34 L38 14 L30 14" fill="none" stroke="var(--vehicle-bike-fg)" stroke-width="2"/>
          <path d="M76 34 L62 16 L56 16" fill="none" stroke="var(--vehicle-bike-fg)" stroke-width="2"/>
        </svg>
      `;
    } else {
      const carCol = (mode === 'ev-car') ? 'var(--vehicle-ev-fg)' : 'var(--vehicle-car-fg)';
      const carBg = (mode === 'ev-car') ? 'var(--vehicle-ev-bg)' : 'var(--vehicle-car-bg)';
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 100 46" class="d3d-car-svg">
          <path d="M12 28 C16 16, 26 11, 42 9 L72 9 C82 9, 90 16, 95 28 L98 32 C99 35, 97 38, 92 38 L12 38 C7 38, 5 35, 7 32 Z" fill="${carBg}" stroke="${carCol}" stroke-width="2"/>
          <path d="M28 16 L38 11 L72 11 L80 16 Z" fill="rgba(255,255,255,0.75)" stroke="rgba(26,90,153,0.4)"/>
          <circle cx="24" cy="38" r="6" fill="#1C1C1E" stroke="${carCol}" stroke-width="1.8"/>
          <circle cx="80" cy="38" r="6" fill="#1C1C1E" stroke="${carCol}" stroke-width="1.8"/>
        </svg>
      `;
    }
  }

  const hudPrice = document.getElementById('hudPrice');
  if (hudPrice) hudPrice.textContent = `₹${spot.price}/hr`;

  updateBookingSummary();
}

function openSpotDetail(spot) {
  selectedSpot  = spot;
  selectedHours = 2;
  isDetailOpen  = true;
  isSheetMinimized = false;

  const sheet = document.getElementById('booking-sheet');
  if (sheet) {
    sheet.classList.remove('is-minimized');
    sheet.classList.add('detail-open');
  }
  updateSheetUI();

  // Explicitly hide persistent bar header to eliminate duplicate titles
  const sbh = document.getElementById('sheetBarHeader');
  if (sbh) sbh.style.display = 'none';

  // Highlight marker on map
  document.querySelectorAll('.apple-bubble').forEach(m => m.classList.remove('selected'));
  const targetObj = markers.find(m => m.spot.id === spot.id);
  if (targetObj && targetObj.marker && targetObj.marker._icon) {
    const mkEl = targetObj.marker._icon.querySelector('.apple-bubble');
    if (mkEl) mkEl.classList.add('selected');
  }
  const domBubble = document.querySelector(`.apple-bubble[data-id="${spot.id}"]`);
  if (domBubble) domBubble.classList.add('selected');

  // Highlight spot item in list
  document.querySelectorAll('.spot-item').forEach(el => {
    el.classList.toggle('si-selected', +el.dataset.id === spot.id);
  });

  // Center map (offset slightly to the right on desktop so marker is clear of the left sidebar)
  const offsetLng = (isDesktopSidebar() && !isCarplayActive) ? -0.005 : 0;
  if (currentMapEngine === 'google' && googleMap) {
    googleMap.panTo({ lat: spot.lat, lng: spot.lng + offsetLng });
    googleMap.setZoom(16);
  } else if (map && window.L) {
    map.flyTo([spot.lat, spot.lng + offsetLng], 15.5, { duration: 0.6 });
  }

  // Update HUD if in carplay mode
  const hudTitle = document.getElementById('hudSpotTitle');
  if (hudTitle) {
    hudTitle.textContent = spot.name;
    const hudSub = document.getElementById('hudSpotSub');
    if (hudSub) hudSub.textContent = `${spot.addr} • 4 min away (1.8 km)`;
    const hudNav = document.getElementById('hudNavAction');
    if (hudNav) hudNav.href = `https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}`;
    if (isCarplayActive) {
      showCarRoute(spot);
    }
  }

  // Populate detail pane
  document.getElementById('detailName').textContent  = spot.name;
  document.getElementById('detailAddr').textContent  = spot.addr;

  const starVal = document.getElementById('detailStarVal');
  if (starVal) starVal.textContent = spot.rating.toFixed(1);
  const starCount = document.getElementById('detailCount');
  if (starCount) starCount.textContent = `(${spot.reviews})`;

  document.getElementById('mDist').textContent       = spot.distance || ((Math.random()*2+0.3).toFixed(1) + ' km');
  document.getElementById('hostAvatar').textContent  = spot.hostInit;
  document.getElementById('hostName').textContent    = spot.host;

  // 3D Driveway Box Visualizer update
  const d3dRoofCanopy = document.getElementById('d3dRoofCanopy');
  if (d3dRoofCanopy) {
    d3dRoofCanopy.style.display = spot.type.toLowerCase().includes('cov') ? 'block' : 'none';
  }

  // Wire Vehicle Choice Selector dynamically
  const vcsCarPrice = document.getElementById('vcsCarPrice');
  const vcsBikePrice = document.getElementById('vcsBikePrice');
  const vcsCarAvail = document.getElementById('vcsCarAvail');
  const vcsBikeAvail = document.getElementById('vcsBikeAvail');
  const carBtn = document.getElementById('vcsChoiceCar');
  const bikeBtn = document.getElementById('vcsChoiceBike');

  if (spot.vehicleCategory === 'ev') {
    if (bikeBtn) bikeBtn.style.display = 'flex';
    if (carBtn) {
      const lbl = carBtn.querySelector('.vcs-label');
      if (lbl) lbl.textContent = 'EV Car Fast Plug';
      const use = carBtn.querySelector('.vcs-icon svg use');
      if (use) use.setAttribute('href', '#icon-ev-car');
    }
    if (bikeBtn) {
      const lbl = bikeBtn.querySelector('.vcs-label');
      if (lbl) lbl.textContent = '2W E-Scooty Swap';
      const use = bikeBtn.querySelector('.vcs-icon svg use');
      if (use) use.setAttribute('href', '#icon-escooty');
    }
    if (vcsCarPrice) vcsCarPrice.textContent = `₹${spot.evCarPrice}/hr`;
    if (vcsBikePrice) vcsBikePrice.textContent = `₹${spot.eScootyPrice}/hr`;
    if (vcsCarAvail) vcsCarAvail.textContent = `${spot.evCarSpots} Plugs Vacant • ₹${spot.evCarPrice}/hr`;
    if (vcsBikeAvail) vcsBikeAvail.textContent = `${spot.eScootySpots} Docks Vacant • ₹${spot.eScootyPrice}/hr`;

    if (carBtn) carBtn.onclick = () => selectVehicleMode(spot, 'ev-car');
    if (bikeBtn) bikeBtn.onclick = () => selectVehicleMode(spot, 'escooty');
    selectVehicleMode(spot, spot.selectedVehicle === 'escooty' ? 'escooty' : 'ev-car');
  } else if (spot.vehicleCategory === 'bicycle') {
    if (bikeBtn) bikeBtn.style.display = 'none';
    if (carBtn) {
      const lbl = carBtn.querySelector('.vcs-label');
      if (lbl) lbl.textContent = 'Smart Pedal Cycle';
      const use = carBtn.querySelector('.vcs-icon svg use');
      if (use) use.setAttribute('href', '#icon-bicycle');
    }
    if (vcsCarPrice) vcsCarPrice.textContent = `₹${spot.bicyclePrice}/hr`;
    if (vcsCarAvail) vcsCarAvail.textContent = `${spot.bicycleSpots} Docks Vacant • ₹${spot.bicyclePrice}/hr`;

    if (carBtn) carBtn.onclick = () => selectVehicleMode(spot, 'bicycle');
    selectVehicleMode(spot, 'bicycle');
  } else {
    // Standard Car & Bike
    if (bikeBtn) bikeBtn.style.display = 'flex';
    if (carBtn) {
      const lbl = carBtn.querySelector('.vcs-label');
      if (lbl) lbl.textContent = 'Car Parking';
      const use = carBtn.querySelector('.vcs-icon svg use');
      if (use) use.setAttribute('href', '#icon-car');
    }
    if (bikeBtn) {
      const lbl = bikeBtn.querySelector('.vcs-label');
      if (lbl) lbl.textContent = 'Bike / 2-Wheeler';
      const use = bikeBtn.querySelector('.vcs-icon svg use');
      if (use) use.setAttribute('href', '#icon-moto');
    }
    if (vcsCarPrice) vcsCarPrice.textContent = `₹${spot.carPrice}/hr`;
    if (vcsBikePrice) vcsBikePrice.textContent = `₹${spot.bikePrice}/hr`;
    if (vcsCarAvail) vcsCarAvail.textContent = `${spot.carSpots} Spots Vacant • ₹${spot.carPrice}/hr`;
    if (vcsBikeAvail) vcsBikeAvail.textContent = `${spot.bikeSpots} Spots Vacant • ₹${spot.bikePrice}/hr`;

    if (carBtn) carBtn.onclick = () => selectVehicleMode(spot, 'car');
    if (bikeBtn) bikeBtn.onclick = () => selectVehicleMode(spot, 'bike');
    selectVehicleMode(spot, spot.selectedVehicle === 'bike' ? 'bike' : 'car');
  }

  // Thumbnail styling
  const dt = document.getElementById('detailThumb');
  if (dt) {
    dt.style.background = `linear-gradient(135deg, ${spot.color}40, ${spot.color}18)`;
    dt.innerHTML = '<span class="detail-p-letter">P</span>';
  }

  // Features (Zero Emojis - Lucide Vectors)
  const tagsEl = document.getElementById('detailTags');
  if (tagsEl && spot.features) {
    tagsEl.innerHTML = spot.features.map(f => {
      const iconName = f.icon || 'shield';
      const cls = f.type ? `chip-${f.type}` : '';
      return `
        <div class="tag liquid-glass squircle ${cls}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <use href="#icon-${iconName}"/>
          </svg>
          <span>${f.label || f}</span>
        </div>
      `;
    }).join('');
  }

  // Duration buttons
  document.querySelectorAll('.dur-btn').forEach(btn => {
    btn.classList.toggle('active', +btn.dataset.hrs === selectedHours);
  });
  if (window.updateDurPill) window.updateDurPill();

  updateBookingSummary();

  // Switch pane visibility
  document.getElementById('sheetPeek').style.display   = 'none';
  document.getElementById('sheetDetail').style.display  = 'block';

  // Expand sheet to view details
  expandSheet(true);
}

function showPeekState() {
  isDetailOpen = false;

  const sheet = document.getElementById('booking-sheet');
  if (sheet) sheet.classList.remove('detail-open');

  const sbh = document.getElementById('sheetBarHeader');
  if (sbh) sbh.style.display = 'flex';

  document.getElementById('sheetPeek').style.display  = 'block';
  document.getElementById('sheetDetail').style.display = 'none';

  // 1. Clear all marker highlights on map
  document.querySelectorAll('.apple-bubble').forEach(m => {
    m.classList.remove('selected');
  });

  // 2. Clear all spot-item highlights in list and drop focus
  document.querySelectorAll('.spot-item').forEach(el => {
    el.classList.remove('si-selected', 'active');
    if (el.blur) el.blur();
  });

  // 3. Drop active element focus so back button or items don't retain highlight/outline
  if (document.activeElement && document.activeElement.blur) {
    document.activeElement.blur();
  }

  // 4. Clear URL hash if it was a deep link to a spot
  if (window.location.hash.toLowerCase().startsWith('#spot-')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  selectedSpot = null;
  updateSheetUI();

  // 5. Smoothly pan map back to Jammu city overview
  if (!isCarplayActive) {
    if (currentMapEngine === 'google' && googleMap) {
      googleMap.panTo({ lat: 32.7266, lng: 74.8570 });
    } else if (map && window.L) {
      map.flyTo([32.7266, 74.8570], 14, { duration: 0.6 });
    }
  }
  if (!isDesktopSidebar() && !isSheetMinimized) {
    sheetSpring.to(0);
  }
}

function updateBookingSummary() {
  if (!selectedSpot) return;
  const sub   = selectedSpot.price * selectedHours;
  const fee   = 5;
  const total = sub + fee;
  document.getElementById('sumSub').textContent   = `₹${sub}`;
  document.getElementById('sumFee').textContent   = `₹${fee}`;
  document.getElementById('sumTotal').textContent = `₹${total}`;
  document.getElementById('ctaLabel').textContent = `Book Now — ₹${total}`;
}


/* ═══════════════════════════════════════════════════════════════
   BUTTONS & INTERACTIONS
   ═══════════════════════════════════════════════════════════════ */
function initButtons() {
  /* Back button in detail pane */
  const backBtn = document.getElementById('sheetBackBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showPeekState();
    });
  }

  /* Minimize button in detail pane */
  const sheetMinBtn = document.getElementById('sheetMinimizeBtn');
  if (sheetMinBtn) {
    sheetMinBtn.addEventListener('click', () => {
      minimizeSheet();
    });
  }

  /* Duration picker */
  document.querySelectorAll('.dur-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedHours = +btn.dataset.hrs;
      document.querySelectorAll('.dur-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateBookingSummary();
    });
  });

  /* Book Now */
  document.getElementById('bookNowBtn').addEventListener('click', () => {
    if (!selectedSpot) return;
    completeBooking();
  });

  /* View Session (from confirmation overlay) */
  document.getElementById('viewSessionBtn').addEventListener('click', () => {
    hideOverlay();
    switchScreen('screen-session');
  });

  /* Filter toggle button on search bar */
  const filterBtn = document.getElementById('filterBtn');
  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      const pills = document.querySelector('.filter-pills');
      if (pills) {
        const activePill = pills.querySelector('.pill.active');
        const nextPill = activePill ? (activePill.nextElementSibling || pills.firstElementChild) : pills.firstElementChild;
        if (nextPill) {
          nextPill.click();
          nextPill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    });
  }

  /* Map Switch Toast View Button */
  const viewMapBtn = document.getElementById('msnViewMapBtn');
  if (viewMapBtn) {
    viewMapBtn.addEventListener('click', () => {
      const notice = document.getElementById('mapSwitchNotice');
      if (notice) notice.style.display = 'none';
      switchScreen('screen-home');
    });
  }

  /* Map Engine Segmented Control in Settings */
  const btnFree = document.getElementById('btnEngineFree');
  const btnGoogle = document.getElementById('btnEngineGoogle');
  if (btnFree) btnFree.addEventListener('click', () => switchMapEngine('free'));
  if (btnGoogle) btnGoogle.addEventListener('click', () => switchMapEngine('google'));

  /* Session action buttons */
  document.getElementById('navBtn').addEventListener('click', () => {
    if (activeSession) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${activeSession.spot.lat},${activeSession.spot.lng}`;
      window.open(url, '_blank');
    }
  });

  document.getElementById('extBtn').addEventListener('click', () => {
    if (!activeSession) return;
    const addCost = activeSession.spot.price || 30;
    if (walletBalance >= addCost) {
      walletBalance -= addCost;
      updateWalletUI();
    }
    activeSession.hours += 1;
    activeSession.endTime = new Date(activeSession.endTime.getTime() + 3600000);
    activeSession.total += addCost;
    const scEnd = document.getElementById('scEnd');
    if (scEnd) scEnd.textContent = fmtTime(activeSession.endTime);
    startTimer();
  });

  document.getElementById('endBtn').addEventListener('click', () => {
    endSession();
  });

  /* Find Parking from Empty Session */
  const fpBtn = document.getElementById('findParkingBtn');
  if (fpBtn) {
    fpBtn.addEventListener('click', () => {
      switchScreen('screen-home');
      expandSheet(false);
    });
  }

  /* Home Screen Live Wallet Pill -> open Profile & Wallet */
  const hwBtn = document.getElementById('homeWalletBtn');
  if (hwBtn) {
    hwBtn.addEventListener('click', () => {
      switchScreen('screen-profile');
    });
  }

  /* Add Money button in Profile Wallet Card */
  const addMoneyBtn = document.querySelector('.wc-add');
  if (addMoneyBtn) {
    addMoneyBtn.addEventListener('click', () => {
      walletBalance += 500;
      updateWalletUI();
      addMoneyBtn.textContent = '₹500 Added!';
      setTimeout(() => { addMoneyBtn.textContent = '+ Add Money'; }, 1500);
    });
  }

  /* Push Notifications Toggle Row */
  const pushRow = document.getElementById('pushNotificationsRow');
  if (pushRow) {
    let pushEnabled = true;
    pushRow.addEventListener('click', () => {
      pushEnabled = !pushEnabled;
      showToast(
        pushEnabled ? 'Push Notifications Enabled' : 'Push Notifications Paused',
        pushEnabled ? 'Real-time spot vacancy and session expiry alerts active.' : 'Alerts are muted for this device.'
      );
    });
  }

  /* Saved Cards & UPI Row */
  const cardsRow = document.getElementById('savedCardsRow');
  if (cardsRow) {
    cardsRow.addEventListener('click', () => {
      showToast('Payment Methods', 'Apple Pay, Visa •• 4242 & UPI linked to Nova Pay.');
    });
  }

  /* Sign Out Row */
  const signOutRow = document.getElementById('signOutRow');
  if (signOutRow) {
    signOutRow.addEventListener('click', () => {
      showToast('Session Reset', 'Signed out. Guest session now active.');
    });
  }

  /* Profile Edit Button */
  const editBtn = document.querySelector('.uc-edit');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      showToast('Arjun Kapoor', 'Jammu Prime Mobility ID • Verified Resident.');
    });
  }

  /* Vehicle Card Row Clicks */
  document.querySelectorAll('.profile-col-right .prof-section:first-child .row-68').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const name = row.querySelector('.row-t')?.textContent || 'Vehicle';
      showToast('Active Vehicle Selected', `${name} set as primary vehicle for navigation.`);
    });
  });

  /* Recent Booking Row Clicks */
  document.querySelectorAll('.profile-col-right .prof-section:nth-child(2) .row-68').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
      const name = row.querySelector('.row-t')?.textContent || 'Booking';
      const sub = row.querySelector('.row-s')?.textContent || '';
      showToast('Booking Archive', `${name} • ${sub}`);
    });
  });

  /* Native GPU transitions handle .spring-btn:active */
}


/* ═══════════════════════════════════════════════════════════════
   FILTER PILLS & SATELLITE TOGGLE
   ═══════════════════════════════════════════════════════════════ */
function initFilterPills() {
  const satBtn = document.getElementById('satelliteToggle');
  if (satBtn) {
    satBtn.classList.toggle('active', !!window.isSatelliteMode);
    satBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      window.isSatelliteMode = !window.isSatelliteMode;
      isSatelliteMode = window.isSatelliteMode;

      if (currentMapEngine === 'google-sdk' && googleMap) {
        googleMap.setMapTypeId(window.isSatelliteMode ? 'hybrid' : 'roadmap');
      } else {
        updateMapTiles();
      }

      satBtn.classList.toggle('active', window.isSatelliteMode);
      satBtn.innerHTML = `
        <svg class="pill-v-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <use href="#icon-satellite"/>
        </svg>
        <span>${window.isSatelliteMode ? 'Map View' : 'Satellite'}</span>
      `;

      showToast(
        window.isSatelliteMode ? 'Satellite Hybrid Active' : 'Vector Map Active',
        window.isSatelliteMode ? 'Aerial satellite imagery with street overlays.' : 'Vector street cartography active.'
      );
    });
  }

  /* Quick Toggle between Free (Apple) and Google Maps */
  const meQuickToggle = document.getElementById('mapEngineQuickToggle');
  if (meQuickToggle) {
    meQuickToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextEngine = (currentMapEngine === 'google') ? 'free' : 'google';
      switchMapEngine(nextEngine);
    });
  }

  document.querySelectorAll('.pill[data-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill[data-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      filterSpots(filter);
    });
  });
}

function filterSpots(filter) {
  activeFilterMode = filter;
  let filtered = SPOTS;
  if (filter === 'car') {
    filtered = SPOTS.filter(s => (s.carSpots && s.carSpots > 0) || (s.evCarSpots && s.evCarSpots > 0));
  } else if (filter === 'bike' || filter === 'motorcycle') {
    filtered = SPOTS.filter(s => s.bikeSpots && s.bikeSpots > 0 && !s.isBicycleStand);
  } else if (filter === 'ev') {
    filtered = SPOTS.filter(s => s.vehicleCategory === 'ev' || (s.evSpots && s.evSpots > 0));
  } else if (filter === 'bicycle') {
    filtered = SPOTS.filter(s => s.vehicleCategory === 'bicycle' || (s.bicycleSpots && s.bicycleSpots > 0));
  } else if (filter === 'megahub') {
    filtered = SPOTS.filter(s => s.isMegaHub === true);
  } else if (filter === 'price') {
    filtered = SPOTS.filter(s => (s.bicyclePrice && s.bicyclePrice <= 25) || (s.bikePrice && s.bikePrice <= 25) || (s.carPrice && s.carPrice <= 25));
  } else if (filter === 'covered') {
    filtered = SPOTS.filter(s => {
      const t = s.type.toLowerCase();
      return t.includes('cov') || t.includes('deck') || t.includes('gar') || t.includes('complex') || t.includes('hub');
    });
  } else if (filter === 'nearby') {
    filtered = SPOTS.slice(0, 4);
  }

  // Update spots list
  const list = document.getElementById('spotsList');
  if (list) {
    list.innerHTML = filtered.map(renderSpotItemHtml).join('');

    list.querySelectorAll('.spot-item').forEach(el => {
      el.addEventListener('click', () => {
        const spot = SPOTS.find(s => s.id === +el.dataset.id);
        if (spot) openSpotDetail(spot);
      });
    });
  }

  // Update marker visibility & column highlight on map
  if (currentMapEngine === 'google' && googleMap) {
    renderGoogleAppleMarkers(filter);
    if (googleMarkers && googleMarkers.length) {
      googleMarkers.forEach(gm => {
        const isVisible = filtered.some(s => s.id === gm.spot.id);
        gm.setVisible(isVisible);
      });
    }
  } else if (map && window.L) {
    renderAppleMarkers(filter);
    markers.forEach(m => {
      const isVisible = filtered.some(s => s.id === m.spot.id);
      if (m.marker) {
        if (isVisible) {
          if (!map.hasLayer(m.marker)) map.addLayer(m.marker);
        } else {
          if (map.hasLayer(m.marker)) map.removeLayer(m.marker);
        }
      }
    });
  }
}


/* ═══════════════════════════════════════════════════════════════
   CARPLAY & ANDROID AUTO AUTOMOTIVE IN-CAR EXPERIENCE
   ═══════════════════════════════════════════════════════════════ */
let isCarplayActive = false;
let carRoutePolyline = null;
let carRouteInner = null;

function initCarplay() {
  const toggleBtn = document.getElementById('carplayToggle');
  const closeBtn  = document.getElementById('carplayCloseBtn');
  const hud       = document.getElementById('carplayDashboard');
  const sheet     = document.getElementById('booking-sheet');
  const searchBar = document.querySelector('.glass-search-bar');

  function setCarplay(active) {
    isCarplayActive = active;
    document.body.classList.toggle('carplay-active', active);
    if (toggleBtn) toggleBtn.classList.toggle('active', active);
    const pills = document.querySelector('.filter-pills');

    if (active) {
      if (hud) hud.style.display = 'flex';
      if (sheet) sheet.style.display = 'none';
      if (searchBar) searchBar.style.display = 'none';
      if (pills) pills.style.display = 'none';
      const curSpot = selectedSpot || SPOTS[0];
      openSpotDetail(curSpot);
      showCarRoute(curSpot);
    } else {
      if (hud) hud.style.display = 'none';
      if (sheet) sheet.style.display = 'flex';
      if (searchBar) searchBar.style.display = 'flex';
      if (pills) pills.style.display = 'flex';
      hideCarRoute();
      if (map && window.L) {
        map.flyTo([32.7266, 74.8570], 14, { duration: 0.6 });
      }
    }
  }
  window.setCarplay = setCarplay;

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCarplay(!isCarplayActive);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setCarplay(false);
    });
  }

  // Quick Book inside HUD
  const quickBookBtn = document.getElementById('hudQuickBookBtn');
  if (quickBookBtn) {
    quickBookBtn.addEventListener('click', () => {
      completeBooking();
      setCarplay(false);
    });
  }
}

function showCarRoute(destSpot) {
  hideCarRoute();

  const start = [32.7180, 74.8560]; // Driver GPS near Tawi Bridge nexus
  const dest  = destSpot ? [destSpot.lat, destSpot.lng] : [32.7092, 74.8675];

  // Dynamic waypoints traversing Jammu arterial avenues
  const dLat = dest[0] - start[0];
  const dLng = dest[1] - start[1];
  const path = [
    start,
    [start[0] + dLat * 0.28, start[1] + dLng * 0.15],
    [start[0] + dLat * 0.55, start[1] + dLng * 0.60],
    [start[0] + dLat * 0.82, start[1] + dLng * 0.88],
    dest
  ];

  const isDark = (currentTheme === 'dark');
  const outerColor = isDark ? '#4DA3FF' : '#1A5A99';
  const innerColor = isDark ? '#FFFFFF' : '#85BFFF';

  if (currentMapEngine === 'google' && googleMap && window.google && window.google.maps) {
    const googlePath = path.map(p => ({ lat: p[0], lng: p[1] }));
    carRoutePolyline = new google.maps.Polyline({
      path: googlePath,
      geodesic: true,
      strokeColor: outerColor,
      strokeOpacity: 0.9,
      strokeWeight: 7,
      map: googleMap
    });
    carRouteInner = new google.maps.Polyline({
      path: googlePath,
      geodesic: true,
      strokeColor: innerColor,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      map: googleMap
    });

    const bounds = new google.maps.LatLngBounds();
    googlePath.forEach(pt => bounds.extend(pt));
    googleMap.fitBounds(bounds, { top: 80, bottom: 80, left: isDesktopSidebar() ? 400 : 40, right: 40 });
  } else if (map && window.L) {
    carRoutePolyline = L.polyline(path, {
      color: outerColor,
      weight: 7,
      opacity: 0.88,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    carRouteInner = L.polyline(path, {
      color: innerColor,
      weight: 3,
      opacity: 1.0,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(map);

    const leftPad = isDesktopSidebar() ? 400 : 40;
    map.fitBounds(carRoutePolyline.getBounds(), {
      paddingTopLeft: [leftPad, 80],
      paddingBottomRight: [40, 80]
    });
  }
}

function hideCarRoute() {
  if (carRoutePolyline) {
    if (carRoutePolyline.setMap) {
      carRoutePolyline.setMap(null);
    } else if (map) {
      map.removeLayer(carRoutePolyline);
    }
    carRoutePolyline = null;
  }
  if (carRouteInner) {
    if (carRouteInner.setMap) {
      carRouteInner.setMap(null);
    } else if (map) {
      map.removeLayer(carRouteInner);
    }
    carRouteInner = null;
  }
}


/* ═══════════════════════════════════════════════════════════════
   TAB NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const screenId = tab.dataset.screen;
      switchScreen(screenId);
    });
  });

  // Deep linking via URL hash (#session, #profile, #spot-1)
  function handleHash() {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#session') {
      switchScreen('screen-session');
    } else if (hash === '#profile') {
      switchScreen('screen-profile');
    } else if (hash === '#profile-dark') {
      applyTheme('dark', true);
      const themeCheckbox = document.getElementById('themeToggleCheckbox');
      if (themeCheckbox) themeCheckbox.checked = true;
      switchScreen('screen-profile');
    } else if (hash === '#dark') {
      applyTheme('dark', true);
      const themeCheckbox = document.getElementById('themeToggleCheckbox');
      if (themeCheckbox) themeCheckbox.checked = true;
    } else if (hash === '#light') {
      applyTheme('light', true);
      const themeCheckbox = document.getElementById('themeToggleCheckbox');
      if (themeCheckbox) themeCheckbox.checked = false;
    } else if (hash === '#chatbot') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
    } else if (hash === '#chatbot-toggle') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
      setTimeout(() => {
        const inp = document.getElementById('cbInput');
        const form = document.getElementById('cbForm');
        if (inp && form) {
          inp.value = 'API';
          form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      }, 300);
    } else if (hash === '#chatbot-google') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
      setTimeout(() => {
        const inp = document.getElementById('cbInput');
        const form = document.getElementById('cbForm');
        if (inp && form) {
          inp.value = 'API, Google';
          form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      }, 300);
    } else if (hash === '#bicycle' || hash === '#bicycles') {
      const pill = document.querySelector('.pill[data-filter="bicycle"]');
      if (pill) pill.click();
    } else if (hash === '#megahub' || hash === '#megahubs') {
      const pill = document.querySelector('.pill[data-filter="megahub"]');
      if (pill) pill.click();
    } else if (hash === '#motorcycle' || hash === '#motorcycles') {
      const pill = document.querySelector('.pill[data-filter="motorcycle"]');
      if (pill) pill.click();
    } else if (hash === '#spots') {
      expandSheet(false);
    } else if (hash === '#carplay') {
      if (window.setCarplay) window.setCarplay(true);
    } else if (hash.startsWith('#spot-')) {
      const id = parseInt(hash.replace('#spot-', ''), 10);
      const spot = SPOTS.find(s => s.id === id);
      if (spot) openSpotDetail(spot);
    }
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();
  setTimeout(handleHash, 150);
}

function switchScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.screen === id);
  });

  if (window.updateTabPill) window.updateTabPill();

  // Re-invalidate map size when switching back to home
  if (id === 'screen-home' && map && window.L) {
    setTimeout(() => map.invalidateSize(), 150);
  }
}


/* ═══════════════════════════════════════════════════════════════
   BOOKING FLOW
   ═══════════════════════════════════════════════════════════════ */
function completeBooking() {
  const spot  = selectedSpot;
  const hours = selectedHours;
  const total = spot.price * hours + 5;
  const now   = new Date();
  const end   = new Date(now.getTime() + hours * 3600000);
  const bid   = `NSPK-2026-JMU-${String(Math.floor(1000 + Math.random() * 9000))}`;

  activeSession = {
    spot, hours, total,
    startTime: now,
    endTime:   end,
    bookingId: bid,
  };

  // Deduct from reactive wallet balance
  walletBalance = Math.max(0, walletBalance - total);
  updateWalletUI();

  // Populate confirmation overlay
  document.getElementById('cfId').textContent    = bid;
  document.getElementById('cfDur').textContent   = `${hours} hour${hours>1?'s':''}`;
  document.getElementById('cfTotal').textContent = `₹${total}`;

  // Collapse sheet to minimized dock
  minimizeSheet();

  // Show overlay
  setTimeout(() => showOverlay(), 300);

  // Prepare session screen
  populateSession();
}

function populateSession() {
  const s = activeSession;
  if (!s) return;

  document.getElementById('emptySession').style.display = 'none';
  const sessionEl = document.getElementById('sessionLive');
  sessionEl.style.display = isDesktopSidebar() ? 'grid' : 'block';

  document.getElementById('scName').textContent  = s.spot.name;
  document.getElementById('scAddr').textContent  = s.spot.addr;
  document.getElementById('scStart').textContent = fmtTime(s.startTime);
  document.getElementById('scEnd').textContent   = fmtTime(s.endTime);
  document.getElementById('scSpot').textContent  = `A-${Math.floor(10 + Math.random()*40)}`;
  document.getElementById('passId').textContent  = s.bookingId;

  generateQR();
  startTimer();
}

function endSession() {
  if (sessionTimerId) clearInterval(sessionTimerId);
  activeSession = null;
  document.getElementById('emptySession').style.display = 'flex';
  document.getElementById('sessionLive').style.display  = 'none';
}


/* ═══════════════════════════════════════════════════════════════
   SESSION TIMER
   ═══════════════════════════════════════════════════════════════ */
function startTimer() {
  if (sessionTimerId) clearInterval(sessionTimerId);

  const circumference = 2 * Math.PI * 88; // ring radius 88
  const ring = document.getElementById('ringFill');
  ring.style.strokeDasharray  = circumference;

  const tick = () => {
    if (!activeSession) return;
    const now  = Date.now();
    const end  = activeSession.endTime.getTime();
    const start = activeSession.startTime.getTime();
    const remaining = Math.max(0, end - now);
    const total     = end - start;
    const frac      = remaining / total;

    // Timer text
    const h = Math.floor(remaining / 3600000);
    const m = Math.floor((remaining % 3600000) / 60000);
    const sec = Math.floor((remaining % 60000) / 1000);
    document.getElementById('timerVal').textContent =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

    // Ring progress
    ring.style.strokeDashoffset = circumference * (1 - frac);

    if (remaining <= 0) {
      clearInterval(sessionTimerId);
      document.getElementById('timerVal').textContent = '00:00:00';
    }
  };

  tick();
  sessionTimerId = setInterval(tick, 1000);
}


/* ═══════════════════════════════════════════════════════════════
   QR CODE GENERATOR (visual pattern — not scannable)
   ═══════════════════════════════════════════════════════════════ */
function generateQR() {
  const box = document.getElementById('qrBox');
  const size   = 21;  // 21x21 grid (QR Version 1)
  const cellPx = Math.floor(140 / size);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size * cellPx;
  canvas.style.width = canvas.style.height = '140px';
  canvas.style.borderRadius = '12px';
  const ctx = canvas.getContext('2d');

  // Use booking ID as seed for a deterministic-looking pattern
  const seed = activeSession ? activeSession.bookingId : 'NSPK';
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;

  // Clear with crisp white surface
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw modules
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Finder patterns (3 corners)
      if (isFinderPattern(r, c, size)) {
        ctx.fillStyle = '#1D1D1F';
        ctx.fillRect(c * cellPx, r * cellPx, cellPx, cellPx);
        continue;
      }
      // Pseudo-random data
      hash = ((hash << 7) ^ (hash >> 3) ^ (r * 31 + c * 17)) | 0;
      const on = (hash & 1) === 1;
      ctx.fillStyle = on ? '#1D1D1F' : 'rgba(0,0,0,0.03)';
      ctx.fillRect(c * cellPx, r * cellPx, cellPx, cellPx);
    }
  }

  box.innerHTML = '';
  box.appendChild(canvas);
}

function isFinderPattern(r, c, size) {
  const corners = [[0,0],[0,size-7],[size-7,0]];
  for (const [cr, cc] of corners) {
    const lr = r - cr, lc = c - cc;
    if (lr >= 0 && lr < 7 && lc >= 0 && lc < 7) {
      // Draw the concentric finder pattern
      if (lr === 0 || lr === 6 || lc === 0 || lc === 6) return true;
      if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) return true;
      return false;
    }
  }
  return false;
}


/* ═══════════════════════════════════════════════════════════════
   OVERLAY
   ═══════════════════════════════════════════════════════════════ */
function showOverlay() {
  const ov = document.getElementById('confirmOverlay');
  ov.classList.add('show');
}
function hideOverlay() {
  const ov = document.getElementById('confirmOverlay');
  ov.classList.remove('show');
}


/* ═══════════════════════════════════════════════════════════════
   UTILITIES
   ═══════════════════════════════════════════════════════════════ */
function fmtTime(d) {
  let h = d.getHours(), ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  const m = String(d.getMinutes()).padStart(2, '0');
  return `${h}:${m} ${ampm}`;
}
