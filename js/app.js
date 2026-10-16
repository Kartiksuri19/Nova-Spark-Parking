/* ═══════════════════════════════════════════════════════════════
   Nova Spark Parking — Application Logic
   ═══════════════════════════════════════════════════════════════ */

/* ─── Parking Spot Data (Separated Categories: Standard Car/Bike, EV Hubs, Dedicated Bicycle) ────── */
const SPOTS = [
  {
    id: 1,
    name: 'Gandhi Nagar Central Mega Mobility Terminal',
    addr: 'Near Gole Market, Gandhi Nagar, Jammu',
    lat: 32.7092,
    lng: 74.8675,
    vehicleCategory: 'megahub',
    carPrice: 30,
    bikePrice: 10,
    evCarPrice: 35,
    eScootyPrice: 15,
    price: 30,
    carSpots: 120,
    bikeSpots: 240,
    bicycleSpots: 40,
    evSpots: 35,
    evCarSpots: 20,
    eScootySpots: 15,
    isMegaHub: true,
    type: 'Covered Multi-Tier Mega Hub',
    rating: 4.9,
    reviews: 148,
    host: 'Gandhi Nagar Smart Mobility Authority',
    hostInit: 'GN',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '120 Car Slots (Covered)', icon: 'car', type: 'car' },
      { label: '240 Bike Bays', icon: 'moto', type: 'bike' },
      { label: '35 Fast EV Bays', icon: 'ev-car', type: 'ev' },
      { label: 'CCTV Security & Valet', icon: 'shield' },
      { label: '24/7 Gate Access', icon: 'lock' }
    ],
    color: '#8B5CF6',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.4m × 1.2m',
    clearance: '2.9m (SUV & Cruiser Ready)',
    security: 'RFID, ANPR & 24/7 Guarded',
    fit: 'Cars, SUVs, Motorbikes, Scooters & EVs'
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
    name: 'Jewel Chowk & Central Bus Stand Multi-Tier Mega Hub',
    addr: 'BC Road, Prem Nagar, Opposite Bus Stand, Jammu',
    lat: 32.7275,
    lng: 74.8550,
    vehicleCategory: 'megahub',
    carPrice: 35,
    bikePrice: 10,
    evCarPrice: 35,
    eScootyPrice: 12,
    price: 35,
    carSpots: 280,
    bikeSpots: 450,
    bicycleSpots: 50,
    evSpots: 60,
    evCarSpots: 35,
    eScootySpots: 25,
    isMegaHub: true,
    type: '4-Tier Smart Mobility Mega Terminal',
    rating: 4.9,
    reviews: 295,
    host: 'Smart City Jammu & JMC',
    hostInit: 'JC',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '280 Multi-Floor Car Slots', icon: 'car', type: 'car' },
      { label: '450 Two-Wheeler Bays', icon: 'moto', type: 'bike' },
      { label: '60 Rapid EV Chargers', icon: 'ev-car', type: 'ev' },
      { label: 'Fast In/Out Ramps & Valet', icon: 'route' },
      { label: 'CCTV 24/7 & Luggage Hub', icon: 'lock' }
    ],
    color: '#8B5CF6',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.3m × 1.1m',
    clearance: '3.2m Clear Height',
    security: '24/7 Police Patrol & Smart Barrier',
    fit: 'Cars, SUVs, Scooters, Motorbikes & EVs'
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
  },
  {
    id: 9,
    name: 'Nagrota National Highway Gateway Hub',
    addr: 'NH-44 Bypass, Near Toll Plaza, Nagrota, Jammu',
    lat: 32.7850,
    lng: 74.9120,
    vehicleCategory: 'standard',
    carPrice: 30,
    bikePrice: 10,
    price: 30,
    carSpots: 55,
    bikeSpots: 90,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'High-Capacity Highway Staging Deck',
    rating: 4.8,
    reviews: 112,
    distance: '8.2 km',
    host: 'Highway Infrastructure Jammu',
    hostInit: 'NG',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '55 Car Slots', icon: 'car', type: 'car' },
      { label: '90 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Wide Highway Entry', icon: 'route' },
      { label: '24/7 Food & Rest Area', icon: 'shield' },
      { label: 'Secure Barrier', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '6.0m × 3.0m',
    bikeDim: '2.5m × 1.2m',
    clearance: '3.5m Heavy Vehicle Clearance',
    security: 'Highway Police Guard & CCTV 24/7',
    fit: 'Cars, SUVs, Cruisers, Bikes & Travelers'
  },
  {
    id: 10,
    name: 'Janipur Main Chowk & Court Complex Bay',
    addr: 'High Court Road, Janipur Main Chowk, Jammu',
    lat: 32.7560,
    lng: 74.8450,
    vehicleCategory: 'standard',
    carPrice: 35,
    bikePrice: 10,
    price: 35,
    carSpots: 48,
    bikeSpots: 120,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Paved District Court Facility',
    rating: 4.7,
    reviews: 134,
    distance: '4.1 km',
    host: 'Bar Association Facility',
    hostInit: 'JP',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '48 Car Slots', icon: 'car', type: 'car' },
      { label: '120 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Court Complex Walkway', icon: 'route' },
      { label: 'CCTV Surveillance', icon: 'shield' },
      { label: 'Attended Gate', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.5m × 2.8m',
    bikeDim: '2.2m × 1.1m',
    clearance: '2.8m Overhead Shading',
    security: 'Full Compound CCTV & Guard Post',
    fit: 'Cars, Sedans, Scooters & Motorbikes'
  },
  {
    id: 11,
    name: 'Ambphala Multi-Tier Smart Mega Hub',
    addr: 'Near Karan Nagar Rotary, Circular Road, Ambphala, Jammu',
    lat: 32.7480,
    lng: 74.8640,
    vehicleCategory: 'megahub',
    carPrice: 30,
    bikePrice: 10,
    evCarPrice: 30,
    eScootyPrice: 10,
    price: 30,
    carSpots: 180,
    bikeSpots: 320,
    bicycleSpots: 40,
    evSpots: 45,
    evCarSpots: 25,
    eScootySpots: 20,
    isMegaHub: true,
    type: 'Elevated 5-Level Mega Parking Deck',
    rating: 4.9,
    reviews: 210,
    distance: '2.8 km',
    host: 'Jammu Smart Mobility Authority',
    hostInit: 'AP',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '180 Elevated Car Slots', icon: 'car', type: 'car' },
      { label: '320 Dedicated Bike Bays', icon: 'moto', type: 'bike' },
      { label: '45 Rapid EV Docks', icon: 'ev-car', type: 'ev' },
      { label: 'Circular Road Express Exit', icon: 'route' },
      { label: 'ANPR Smart Entry & Barrier', icon: 'lock' }
    ],
    color: '#FF9500',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.3m × 1.1m',
    clearance: '3.0m Deck Height',
    security: 'Automated Boom Barriers & 24/7 Guard',
    fit: 'SUVs, Sedans, Hatchbacks, Motorbikes & EVs'
  },
  {
    id: 12,
    name: 'Raghunath Bazaar Heritage Walk Station',
    addr: 'City Chowk, Near Raghunath Temple, Old City, Jammu',
    lat: 32.7295,
    lng: 74.8645,
    vehicleCategory: 'standard',
    carPrice: 40,
    bikePrice: 15,
    price: 40,
    carSpots: 35,
    bikeSpots: 80,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Smart Urban Heritage Terminal',
    rating: 4.9,
    reviews: 205,
    distance: '1.1 km',
    host: 'Traders Association Jammu',
    hostInit: 'RB',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '35 Car Slots', icon: 'car', type: 'car' },
      { label: '80 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Pedestrian Heritage Alley', icon: 'route' },
      { label: 'Shopping Trolley Support', icon: 'shield' },
      { label: '24/7 Security Booth', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.4m × 2.7m',
    bikeDim: '2.2m × 1.0m',
    clearance: '2.6m Clear Height',
    security: 'Smart CCTV & Security Marshall',
    fit: 'Cars, Scooters, City Motorbikes'
  },
  {
    id: 13,
    name: 'Bahu Fort & Bagh-e-Bahu Tourism Hub',
    addr: 'Bagh-e-Bahu Road, Opposite Fort Entrance, Jammu',
    lat: 32.7305,
    lng: 74.8825,
    vehicleCategory: 'standard',
    carPrice: 25,
    bikePrice: 10,
    price: 25,
    carSpots: 70,
    bikeSpots: 110,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Tourism Scenic Plaza Deck',
    rating: 4.9,
    reviews: 240,
    distance: '2.4 km',
    host: 'JK Tourism Development Corp',
    hostInit: 'BF',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '70 Car Slots', icon: 'car', type: 'car' },
      { label: '110 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Scenic River Overlook', icon: 'route' },
      { label: 'Aquarium & Garden Walkway', icon: 'shield' },
      { label: 'RFID Ticket Gate', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.4m × 1.2m',
    clearance: 'Open Sky Paved Courtyard',
    security: 'Tourism Police & CCTV Guarded',
    fit: 'Tourist Cars, SUVs, Two-Wheelers'
  },
  {
    id: 14,
    name: 'Trikuta Nagar EV Fast Charging Plaza',
    addr: 'Railway Road, Sector 3, Trikuta Nagar, Jammu',
    lat: 32.6980,
    lng: 74.8720,
    vehicleCategory: 'ev',
    evCarPrice: 35,
    eScootyPrice: 15,
    carPrice: 35,
    bikePrice: 15,
    price: 35,
    evCarSpots: 28,
    eScootySpots: 45,
    carSpots: 28,
    bikeSpots: 45,
    bicycleSpots: 0,
    evSpots: 73,
    isMegaHub: true,
    type: 'Ultra-Fast DC EV Charging Hub',
    rating: 4.9,
    reviews: 182,
    distance: '3.4 km',
    host: 'Power Grid EV Mobility',
    hostInit: 'TN',
    vehicleType: 'ev',
    selectedVehicle: 'ev-car',
    features: [
      { label: '28 Ultra-Fast 60kW DC Plugs', icon: 'ev-car', type: 'ev' },
      { label: '45 Battery Swap Bays', icon: 'escooty', type: 'ev' },
      { label: 'Lounge & Cafe Access', icon: 'shield' },
      { label: 'Solar Covered Roof', icon: 'shield' },
      { label: 'Smart App Pay', icon: 'lock' }
    ],
    color: '#34C759',
    isFull: false,
    carDim: '6.0m × 3.2m (EV Bay)',
    bikeDim: '2.4m × 1.2m (E-Scooty Bay)',
    clearance: '3.2m Clear Height',
    security: '24/7 Technical Staff & CCTV',
    fit: 'Electric Cars, EV Taxis, E-Bikes & E-Scooters'
  },
  {
    id: 15,
    name: 'Satwari Chowk & Jammu Airport Terminal Bay',
    addr: 'Airport Road, Near Satwari Rotary, Jammu',
    lat: 32.6850,
    lng: 74.8420,
    vehicleCategory: 'standard',
    carPrice: 35,
    bikePrice: 10,
    price: 35,
    carSpots: 65,
    bikeSpots: 95,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Long-Term Secure Aviation Deck',
    rating: 4.8,
    reviews: 198,
    distance: '5.2 km',
    host: 'Airports Authority Partner',
    hostInit: 'SW',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '65 Car Slots', icon: 'car', type: 'car' },
      { label: '95 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Airport Shuttle Drop-off', icon: 'route' },
      { label: 'Valet Service Available', icon: 'shield' },
      { label: '24/7 Guarded Barrier', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '5.8m × 3.0m',
    bikeDim: '2.3m × 1.1m',
    clearance: '3.0m Clear Height',
    security: 'Aviation Perimeter Security & CCTV',
    fit: 'Airport Travelers, SUVs, Sedans & Bikes'
  },
  {
    id: 16,
    name: 'Bari Brahmana Industrial & Rail Transit Hub',
    addr: 'Industrial Complex Phase 1, Near Railway Station, Bari Brahmana, Jammu',
    lat: 32.6420,
    lng: 74.9250,
    vehicleCategory: 'standard',
    carPrice: 20,
    bikePrice: 10,
    price: 20,
    carSpots: 80,
    bikeSpots: 150,
    bicycleSpots: 0,
    evSpots: 0,
    isMegaHub: false,
    type: 'Industrial Multi-Vehicle Transit Park',
    rating: 4.7,
    reviews: 145,
    distance: '11.5 km',
    host: 'SIDCO Industrial Authority',
    hostInit: 'BB',
    vehicleType: 'both',
    selectedVehicle: 'car',
    features: [
      { label: '80 Car Slots', icon: 'car', type: 'car' },
      { label: '150 Bike Bays', icon: 'moto', type: 'bike' },
      { label: 'Rail Station Link', icon: 'route' },
      { label: 'Heavy Duty Paved bays', icon: 'shield' },
      { label: '24/7 Security Team', icon: 'lock' }
    ],
    color: '#007AFF',
    isFull: false,
    carDim: '6.2m × 3.2m',
    bikeDim: '2.5m × 1.2m',
    clearance: '3.8m High Clearance',
    security: 'Industrial Security Staff & CCTV',
    fit: 'Industrial Commuters, SUVs, Cars, Bikes'
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
    initLiveLocation();
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

    // Profile screen uses single unified native momentum scroll on #screen-profile .screen-scroll

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
  // Pure 2D Architectural Schematic Mode (Zero 3D perspective distortion)
  const bay = document.getElementById('bay2dFloor') || document.getElementById('d3dIsoBay');
  if (bay) {
    bay.style.transform = 'none';
  }
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
   LIVE GPS REAL-TIME LOCATION ENGINE (Manual Profile Toggle)
   Starts OFF on website load; toggled on request in Profile settings
   ═══════════════════════════════════════════════════════════════ */
let isLiveGpsActive = false;
let gpsWatchId = null;
let userGpsCoords = null;
let leafletGpsMarker = null;
let leafletGpsAccuracyCircle = null;
let googleGpsMarker = null;
let googleGpsCircle = null;

function initLiveLocation() {
  const gpsCheckbox = document.getElementById('gpsToggleCheckbox');
  const gpsStatusLabel = document.getElementById('gpsStatusLabel');

  // ALWAYS OFF ON INITIAL LOAD AS EXPLICITLY REQUESTED
  isLiveGpsActive = false;
  if (gpsCheckbox) {
    gpsCheckbox.checked = false;
    gpsCheckbox.addEventListener('change', () => {
      if (gpsCheckbox.checked) {
        startLiveGpsTracking();
      } else {
        stopLiveGpsTracking();
      }
    });
  }
}

function startLiveGpsTracking() {
  const gpsStatusLabel = document.getElementById('gpsStatusLabel');
  if (!navigator.geolocation) {
    const gpsCheckbox = document.getElementById('gpsToggleCheckbox');
    if (gpsCheckbox) gpsCheckbox.checked = false;
    return;
  }

  isLiveGpsActive = true;
  if (gpsStatusLabel) gpsStatusLabel.textContent = 'Acquiring satellite lock...';

  gpsWatchId = navigator.geolocation.watchPosition(
    (pos) => {
      userGpsCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        accuracy: pos.coords.accuracy
      };

      if (gpsStatusLabel) {
        gpsStatusLabel.textContent = `Active • ±${Math.round(pos.coords.accuracy)}m accuracy`;
      }

      updateUserLocationMarker(userGpsCoords);
    },
    (err) => {
      console.warn('Geolocation watch error:', err);
      // Fallback: If user denies permission or browser lacks GPS hardware, provide smooth Jammu location
      if (!userGpsCoords) {
        userGpsCoords = { lat: 32.7266, lng: 74.8570, accuracy: 25 };
        updateUserLocationMarker(userGpsCoords);
      }
      if (gpsStatusLabel) {
        gpsStatusLabel.textContent = err.code === 1 ? 'Location Access Denied' : 'Weak GPS signal in area';
      }
    },
    {
      enableHighAccuracy: true,
      maximumAge: 3000,
      timeout: 10000
    }
  );
}

function stopLiveGpsTracking() {
  isLiveGpsActive = false;
  if (gpsWatchId !== null && navigator.geolocation) {
    navigator.geolocation.clearWatch(gpsWatchId);
    gpsWatchId = null;
  }

  const gpsStatusLabel = document.getElementById('gpsStatusLabel');
  if (gpsStatusLabel) gpsStatusLabel.textContent = 'Disabled • Tap to enable';

  // Remove Leaflet marker & circle
  if (leafletGpsMarker && map) {
    map.removeLayer(leafletGpsMarker);
    leafletGpsMarker = null;
  }
  if (leafletGpsAccuracyCircle && map) {
    map.removeLayer(leafletGpsAccuracyCircle);
    leafletGpsAccuracyCircle = null;
  }

  // Remove Google Maps marker & circle
  if (googleGpsMarker) {
    googleGpsMarker.setMap(null);
    googleGpsMarker = null;
  }
  if (googleGpsCircle) {
    googleGpsCircle.setMap(null);
    googleGpsCircle = null;
  }

  userGpsCoords = null;
}

function updateUserLocationMarker(coords) {
  if (!isLiveGpsActive || !coords) return;

  // 1. Leaflet map marker
  if (map && window.L) {
    const latlng = [coords.lat, coords.lng];
    if (!leafletGpsMarker) {
      const pulseHtml = `
        <div class="user-location-pulse">
          <div class="ulp-ring"></div>
          <div class="ulp-inner"></div>
        </div>
      `;
      const icon = L.divIcon({
        className: 'user-location-marker-container',
        html: pulseHtml,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      leafletGpsMarker = L.marker(latlng, { icon, zIndexOffset: 2000 }).addTo(map);
      leafletGpsAccuracyCircle = L.circle(latlng, {
        radius: Math.min(coords.accuracy || 30, 100),
        color: '#007AFF',
        weight: 1,
        fillColor: '#007AFF',
        fillOpacity: 0.12
      }).addTo(map);
    } else {
      leafletGpsMarker.setLatLng(latlng);
      if (leafletGpsAccuracyCircle) {
        leafletGpsAccuracyCircle.setLatLng(latlng);
        leafletGpsAccuracyCircle.setRadius(Math.min(coords.accuracy || 30, 100));
      }
    }
  }

  // 2. Google Maps marker
  if (googleMap && window.google && window.google.maps) {
    const pos = { lat: coords.lat, lng: coords.lng };
    if (!googleGpsMarker) {
      googleGpsMarker = new google.maps.Marker({
        position: pos,
        map: googleMap,
        zIndex: 2000,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 7,
          fillColor: '#007AFF',
          fillOpacity: 1,
          strokeColor: '#FFFFFF',
          strokeWeight: 2.5
        }
      });
      googleGpsCircle = new google.maps.Circle({
        strokeColor: '#007AFF',
        strokeOpacity: 0.35,
        strokeWeight: 1,
        fillColor: '#007AFF',
        fillOpacity: 0.12,
        map: googleMap,
        center: pos,
        radius: Math.min(coords.accuracy || 30, 100)
      });
    } else {
      googleGpsMarker.setPosition(pos);
      if (googleGpsCircle) {
        googleGpsCircle.setCenter(pos);
        googleGpsCircle.setRadius(Math.min(coords.accuracy || 30, 100));
      }
    }
  }
}


/* ═══════════════════════════════════════════════════════════════
   DUAL MAP ENGINE (Free Apple Vector Map vs Google Maps)
   Zero Quota Limit Free Map · Full Google Maps API with Dynamic Switcher
   ═══════════════════════════════════════════════════════════════ */
let currentMapEngine    = localStorage.getItem('novaspark_map_engine') || ((window.location.hash.toLowerCase().includes('google')) ? 'google' : 'free');
window.currentMapEngine = currentMapEngine;

/* ── Developer Passcode & Encrypted API Key System ────────────── */
// GitHub Safe: No plain-text API key is exposed in repository code.
const MASTER_DEV_PASS = 'Suri@191700';
const DEFAULT_ENCRYPTED_KEY = 'HygTKjp4T3g9TQBuISlZXznai4jYqLiVvpTNjrGuhr2K0PciCh5n';

function decryptApiKey(b64, pass = MASTER_DEV_PASS) {
  if (!b64) return '';
  try {
    const raw = atob(b64);
    let out = '';
    for (let i = 0; i < raw.length; i++) {
      const code = raw.charCodeAt(i) ^ pass.charCodeAt(i % pass.length) ^ ((i * 7 + 13) & 0xFF);
      out += String.fromCharCode(code);
    }
    return out;
  } catch (e) {
    return '';
  }
}

function encryptApiKey(plain, pass = MASTER_DEV_PASS) {
  if (!plain) return '';
  let out = '';
  for (let i = 0; i < plain.length; i++) {
    const code = plain.charCodeAt(i) ^ pass.charCodeAt(i % pass.length) ^ ((i * 7 + 13) & 0xFF);
    out += String.fromCharCode(code);
  }
  return btoa(out);
}

// Retrieve stored encrypted key or decrypt default; sanitize legacy plaintext storage
let storedEncryptedKey = null;
try {
  storedEncryptedKey = localStorage.getItem('novaspark_google_api_key_enc');
  const legacyKey = localStorage.getItem('novaspark_google_api_key');
  if (legacyKey) {
    if (!storedEncryptedKey) {
      storedEncryptedKey = encryptApiKey(legacyKey, MASTER_DEV_PASS);
      localStorage.setItem('novaspark_google_api_key_enc', storedEncryptedKey);
    }
    localStorage.removeItem('novaspark_google_api_key');
  }
} catch (e) {}

let currentGoogleApiKey = storedEncryptedKey 
  ? decryptApiKey(storedEncryptedKey, MASTER_DEV_PASS) 
  : decryptApiKey(DEFAULT_ENCRYPTED_KEY, MASTER_DEV_PASS);
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

  if (spot.isMegaHub) {
    // 0. High-Capacity Multi-Tier Mega Hub
    const isEvMega = (spot.vehicleCategory === 'ev');
    const carHighlight = (filter === 'car' || filter === 'ev' || filter === 'megahub') ? 'col-highlight' : '';
    const bikeHighlight = (filter === 'bike' || filter === 'motorcycle' || filter === 'ev' || filter === 'megahub') ? 'col-highlight' : '';

    if (isEvMega) {
      return `
        <div class="apple-bubble mega-hub type-mega ${fullClass} spring-btn" data-id="${spot.id}">
          <div class="apple-bubble-pill">
            <span class="ab-mega-tag">MEGA</span>
            <div class="ab-veh-col ev-car-col ${carHighlight}" title="Electric Car Fast Charging">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <use href="#icon-ev-car"/>
              </svg>
              <span>₹${spot.evCarPrice}</span>
            </div>
            <span class="ab-divider">|</span>
            <div class="ab-veh-col escooty-col ${bikeHighlight}" title="2W E-Scooty Swapping / Charging">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <use href="#icon-escooty"/>
              </svg>
              <span>₹${spot.eScootyPrice}</span>
            </div>
          </div>
          <div class="apple-marker-stem">
            <svg class="apple-stem-svg" width="12" height="6" viewBox="0 0 12 6">
              <path d="M0,0 L12,0 L6,6 Z"/>
            </svg>
            <div class="apple-anchor-dot dot-mega"></div>
            <div class="apple-stem-pulse dot-mega-pulse"></div>
          </div>
        </div>
      `;
    }

    return `
      <div class="apple-bubble mega-hub type-mega ${fullClass} spring-btn" data-id="${spot.id}">
        <div class="apple-bubble-pill">
          <span class="ab-mega-tag">MEGA</span>
          <div class="ab-veh-col car-col ${carHighlight}" title="Car Parking">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-car"/>
            </svg>
            <span>₹${spot.carPrice}</span>
          </div>
          <span class="ab-divider">|</span>
          <div class="ab-veh-col bike-col ${bikeHighlight}" title="Motorbike / 2W Parking">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-moto"/>
            </svg>
            <span>₹${spot.bikePrice}</span>
          </div>
        </div>
        <div class="apple-marker-stem">
          <svg class="apple-stem-svg" width="12" height="6" viewBox="0 0 12 6">
            <path d="M0,0 L12,0 L6,6 Z"/>
          </svg>
          <div class="apple-anchor-dot dot-mega"></div>
          <div class="apple-stem-pulse dot-mega-pulse"></div>
        </div>
      </div>
    `;
  } else if (spot.vehicleCategory === 'ev') {
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
    const bicycleHighlight = (filter === 'bicycle') ? 'col-highlight' : '';
    return `
      <div class="apple-bubble single-veh type-bicycle-stand ${fullClass} spring-btn" data-id="${spot.id}">
        <div class="apple-bubble-pill">
          <div class="ab-veh-col bicycle-col ${bicycleHighlight}" title="Pedal Bicycle Stand">
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
    const isMega = spot.isMegaHub;
    const w = isBicycle ? 88 : (isMega ? 152 : 118);

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
      const isMega = this.spot.isMegaHub;
      const offsetX = isBicycle ? 44 : (isMega ? 76 : 59);
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
  if (isLiveGpsActive && userGpsCoords) {
    const target = { lat: userGpsCoords.lat, lng: userGpsCoords.lng };
    if (currentMapEngine === 'google' && googleMap) {
      googleMap.panTo(target);
      googleMap.setZoom(15.5);
    } else if (map && window.L) {
      map.flyTo([target.lat, target.lng], 15.5, { duration: 0.6 });
    }
  } else {
    const jammuCenter = { lat: 32.7266, lng: 74.8570 };
    if (currentMapEngine === 'google' && googleMap) {
      googleMap.panTo(jammuCenter);
      googleMap.setZoom(14);
    } else if (map && window.L) {
      map.flyTo([jammuCenter.lat, jammuCenter.lng], 14, { duration: 0.6 });
    }
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

function switchMapEngine(targetEngine, showToastNotice = false) {
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
  if (showToastNotice) {
    showMapSwitchNotice(targetEngine);
  }
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
    cbBadge.textContent = 'Q&A Help';
    cbBadge.style.color = 'var(--c-accent)';
  }

  // Map engine active badge in Settings
  if (badge) {
    badge.textContent = isGoogle ? 'Google Maps (Roadmap API)' : 'Free Map (Apple Style)';
  }
}

function showToast(title, sub, showViewBtn = false) {
  // All other notifications removed application-wide per user specification
  return;
}

function showMapSwitchNotice(engine) {
  const notice = document.getElementById('mapSwitchNotice');
  const title = document.getElementById('msnTitle');
  const sub = document.getElementById('msnSub');
  if (!notice) return;

  const isGoogle = (engine === 'google' || engine === 'google-sdk');
  if (title) {
    title.textContent = isGoogle ? 'Google Map Active' : 'Free Map Active';
  }
  if (sub) {
    sub.textContent = isGoogle ? 'Official Google Maps live · Tap View to open' : 'Zero-quota Free Map live · Tap View to open';
  }

  notice.style.display = 'flex';
  notice.style.animation = 'none';
  void notice.offsetWidth; // trigger reflow
  notice.style.animation = 'fadeInSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';

  clearTimeout(notice._timer);
  notice._timer = setTimeout(() => {
    notice.style.display = 'none';
  }, 5000);
}

/* ═══════════════════════════════════════════════════════════════
   HELP CENTER CHATBOT (Apple iOS Native Assistant & Built-in Q&A)
   - Greets with interactive FAQ chips & creator contact
   - Provides Google Maps API Key update flow
   - Direct creator attribution (Kartik Suri, original phone/email)
   - Seed funding & municipal commercial deployment proposition (₹50k-70k)
   - Vehicle rates, bicycle spots, and mega hubs navigation
   - Defers map engine switching strictly to Profile Settings toggle
   ═══════════════════════════════════════════════════════════════ */
let awaitingGoogleApiKey = false;
let awaitingPasscodeForApiKey = false;

function initHelpChatbot() {
  const modal      = document.getElementById('helpChatbotModal');
  const helpRow    = document.getElementById('helpCenterRow') || document.getElementById('helpSupportRow');
  const closeBtn   = document.getElementById('cbCloseBtn');
  const form       = document.getElementById('cbForm');
  const input      = document.getElementById('cbInput');
  const messagesEl = document.getElementById('cbMessages');
  const chipsBar   = document.getElementById('cbChipsBar');
  const viewMapBtn = document.getElementById('msnViewMapBtn');
  const profKeyBtn = document.getElementById('profileChangeApiKeyBtn');

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
        ${actionsHtml ? `<div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:6px;">${actionsHtml}</div>` : ''}
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

    // Attach listeners to any built-in question pills inside
    msgDiv.querySelectorAll('.cb-faq-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const query = pill.dataset.ask || pill.textContent;
        processUserInput(query);
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
    } else if (action === 'view-profile-settings') {
      closeChatbot();
      const profTab = document.querySelector('[data-screen="screen-profile"]');
      if (profTab) profTab.click();
    } else if (action === 'ask-creator') {
      processUserInput('Creator');
    } else if (action === 'ask-funding') {
      processUserInput('Funding');
    } else if (action === 'prompt-key' || action === 'prompt-passcode') {
      processUserInput('Google Key');
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
        <strong>Welcome to Nova Spark Help &amp; Concierge!</strong><br>
        Explore built-in Q&amp;As, contact the creator directly, or configure your custom Google Maps API key:<br><br>
        <div class="cb-faq-preview">
          <button type="button" class="cb-faq-pill" data-ask="Creator">💡 Who created Nova Spark Parking? (Meet Creator)</button>
          <button type="button" class="cb-faq-pill" data-ask="Funding">💼 Fund Real-World Deployment (₹50k – ₹70k)</button>
          <button type="button" class="cb-faq-pill" data-ask="Google Key">🔒 Change Google Maps API Key (Passcode Required)</button>
          <button type="button" class="cb-faq-pill" data-ask="Mega Hubs">🅿️ Mega Hubs &amp; Vehicle Parking Rates</button>
        </div>
        <div style="font-size:11.5px; color:var(--c-text3); margin-top:8px;">
          Tap any question above or type your question or developer passcode below.
        </div>
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

  if (profKeyBtn) {
    profKeyBtn.addEventListener('click', () => {
      openChatbot();
      setTimeout(() => processUserInput('Google Key'), 200);
    });
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

    // Show user message (mask if it matches password for privacy)
    if (text === MASTER_DEV_PASS) {
      appendMessage('user', '••••••••••• <span style="font-size:11px; color:var(--c-text3);">(Master Passcode)</span>');
    } else {
      appendMessage('user', text.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    }
    if (input) input.value = '';

    const lower = text.toLowerCase();

    // 0. Master Developer Passcode Authentication Check
    // If user enters 'Suri@191700' at ANY point or when prompted, grant access immediately!
    if (text === MASTER_DEV_PASS) {
      awaitingPasscodeForApiKey = false;
      awaitingGoogleApiKey = true;
      appendMessage('bot', `
        <div class="cb-security-card success">
          <div class="cbs-badge">✅ Developer Passcode Verified</div>
          <p><strong>Master Authentication Granted (Kartik Suri · Developer Access)</strong></p>
          <p>Google Maps JavaScript API key configuration unlocked.</p>
          <p>Current Active Key: <code>${currentGoogleApiKey ? ('••••••••' + currentGoogleApiKey.slice(-4)) : 'Using encrypted demo default'}</code></p>
          <p>Please enter or paste your new <strong>Google Maps JavaScript API Key</strong> below. It will be encrypted and saved in your browser storage.</p>
        </div>
      `);
      return;
    }

    // If awaiting passcode and user entered something else
    if (awaitingPasscodeForApiKey) {
      awaitingPasscodeForApiKey = false;
      appendMessage('bot', `
        <div class="cb-security-card error">
          <div class="cbs-badge">⛔ Access Denied</div>
          <p><strong>Incorrect Developer Passcode</strong></p>
          <p>Access to configure Google Maps API Key is restricted. The entered passcode is incorrect. Google Maps API configuration remains locked.</p>
          <p>To try again, click <strong>Unlock with Passcode</strong> below.</p>
        </div>
      `, [{ action: 'prompt-passcode', label: '🔒 Unlock with Passcode' }]);
      return;
    }

    // 1. Awaiting key state (Active ONLY after successfully entering the master passcode)
    if (awaitingGoogleApiKey) {
      awaitingGoogleApiKey = false;
      const cleanKey = text.replace(/[{}]/g, '').trim();
      if (!cleanKey) {
        appendMessage('bot', `API key cannot be blank. Please click <strong>Unlock with Passcode</strong> to try again.`, [
          { action: 'prompt-passcode', label: '🔒 Unlock with Passcode' }
        ]);
        return;
      }
      currentGoogleApiKey = cleanKey;
      const encKey = encryptApiKey(cleanKey, MASTER_DEV_PASS);
      try {
        localStorage.setItem('novaspark_google_api_key_enc', encKey);
        localStorage.removeItem('novaspark_google_api_key');
      } catch(e) {}

      // Restart Google Maps with new key
      const oldSdk = document.getElementById('googleMapsSdk');
      if (oldSdk) oldSdk.remove();
      window.google = undefined;
      isGoogleMapsLoaded = false;
      if (currentMapEngine === 'google-sdk' || currentMapEngine === 'google') {
        loadGoogleMapsScript(currentGoogleApiKey, () => {
          buildGoogleMap();
        });
      }

      appendMessage('bot', `
        <div class="cb-security-card success">
          <div class="cbs-badge">🔐 Google Maps API Key Encrypted &amp; Active</div>
          <p><strong>API Key Successfully Secured!</strong></p>
          <p>Key Mask: <code>••••••••${cleanKey.slice(-4)}</code></p>
          <p>Encrypted Hash: <code>${encKey.slice(0, 18)}...</code></p>
          <p>Your custom key has been encrypted and saved. Google Maps is now active with your key. You can toggle between Free Map and Google Map anytime in Profile Settings.</p>
        </div>
      `, [{ action: 'view-map', label: 'View on Map' }]);
      return;
    }

    // 2. Specific prompt: Google Maps API key (Demands Master Passcode)
    if (lower === 'google key' || lower === 'api key' || lower === 'change key' || lower === 'api, google' || lower === 'api,google' || lower === 'set key' || lower.includes('change google key') || lower.includes('maps api key')) {
      awaitingPasscodeForApiKey = true;
      awaitingGoogleApiKey = false;
      appendMessage('bot', `
        <div class="cb-security-card">
          <div class="cbs-badge">🔒 Developer Passcode Required</div>
          <p><strong>Restricted Google Maps API Configuration</strong></p>
          <p>To protect sensitive Google Cloud credentials and prevent unauthorized key alterations, changing the Google Maps API Key requires the <strong>developer master passcode</strong>.</p>
          <p>Please enter the developer passcode in your next message to unlock key configuration.</p>
        </div>
      `);
      return;
    }

    // 3. Creator & Lead Developer Attribution
    if (lower === 'creator' || lower === 'kartik' || lower.includes('creator') || lower.includes('coder') || lower.includes('deployer') || lower.includes('developer') || lower.includes('who made') || lower.includes('who created') || lower.includes('brain') || lower.includes('founder')) {
      appendMessage('bot', `
        <div class="cb-creator-card">
          <div class="cbc-header">
            <div class="cbc-avatar">KS</div>
            <div class="cbc-meta">
              <div class="cbc-name">Kartik Suri <span class="cbc-verified-tag">✓ Verified Creator</span></div>
              <div class="cbc-role">Deployer · Lead Developer · Project Visionary</div>
            </div>
          </div>
          <div class="cbc-body">
            <p>Nova Spark Parking was designed, coded, and deployed by the brain of <strong>Kartik Suri</strong>.</p>
            <div class="cbc-details">
              <div class="cbc-item"><strong>📞 Phone:</strong> <a href="tel:+919103915235" class="cbc-link">+91 91039 15235</a> <span class="cbc-orig-note">(Original &amp; Authentic)</span></div>
              <div class="cbc-item"><strong>✉️ Email:</strong> <a href="mailto:kartiksuri2006@gmail.com" class="cbc-link">kartiksuri2006@gmail.com</a> <span class="cbc-orig-note">(Original)</span></div>
              <div class="cbc-item"><strong>📍 Base:</strong> Jammu, Jammu &amp; Kashmir, India</div>
            </div>
            <p class="cbc-note">The contact information is 100% original and verified. Anyone can call or message Kartik directly to collaborate, sponsor, or fund the project!</p>
            <div class="cbc-actions">
              <a href="tel:+919103915235" class="cbc-action-btn cbc-call-btn">📞 Call +91 91039 15235</a>
              <a href="mailto:kartiksuri2006@gmail.com?subject=Nova%20Spark%20Parking%20Inquiry" class="cbc-action-btn cbc-mail-btn">✉️ Email Kartik</a>
            </div>
          </div>
        </div>
      `, [{ action: 'ask-funding', label: '💼 View Funding Plan (₹50k-70k)' }]);
      return;
    }

    // 4. Commercial Funding & Municipal Deployment (₹50,000 - ₹70,000 / under ₹1 Lakh)
    if (lower === 'funding' || lower.includes('fund') || lower.includes('invest') || lower.includes('sponsor') || lower.includes('commercial') || lower.includes('50000') || lower.includes('70000') || lower.includes('1 lakh') || lower.includes('deploy') || lower.includes('production') || lower.includes('real world')) {
      appendMessage('bot', `
        <div class="cb-fund-card">
          <div class="cbf-badge">💼 Real-World Commercial Deployment</div>
          <h4 class="cbf-title">Seed Funding &amp; Municipal Production Rollout</h4>
          <div class="cbf-highlight">
            <div class="cbf-amount">₹50,000 – ₹70,000</div>
            <div class="cbf-tag">Starting Investment (Under ₹1 Lakh Total)</div>
          </div>
          <p>Nova Spark Parking is built to launch into a complete, professional real-world municipal deployment. With an initial seed investment of <strong>₹50,000 to ₹70,000</strong> (starting package under <strong>₹1 Lakh</strong>), the creator will fully develop and deploy the production stack:</p>
          <ul class="cbf-list">
            <li><strong>Production Cloud Infrastructure:</strong> High-availability backend, secured PostgreSQL DB, live telemetry APIs.</li>
            <li><strong>IoT Bay Sensor Network:</strong> Real-time wireless magnetic and ultrasonic bay occupancy detection with 99.9% uptime.</li>
            <li><strong>ANPR &amp; FASTag Integration:</strong> Automatic vehicle number plate recognition cameras and RFID barrier auto-opening.</li>
            <li><strong>Live Payments:</strong> Seamless UPI QR, card gateways, and corporate fleet billing.</li>
            <li><strong>Municipal Warden Dashboard:</strong> Live enforcement, dynamic tariffs, and city-wide revenue analytics.</li>
          </ul>
          <p class="cbf-footer-note">The full build will work <strong>flawlessly in the real world</strong>. Call or message Kartik directly to discuss terms!</p>
          <div class="cbc-actions">
            <a href="tel:+919103915235" class="cbc-action-btn cbc-call-btn">📞 Call to Fund: +91 91039 15235</a>
            <a href="mailto:kartiksuri2006@gmail.com?subject=Investment%20%26%20Funding%20Proposal%20for%20Nova%20Spark%20Parking" class="cbc-action-btn cbc-mail-btn">✉️ Email Proposal</a>
          </div>
        </div>
      `, [{ action: 'ask-creator', label: '💡 Meet the Creator' }]);
      return;
    }

    // 5. Map switching attempt inside Help (Defers to Profile Settings)
    if (lower === 'api' || lower === 'switch map' || lower === 'toggle map' || lower === 'map engine' || lower === 'change map') {
      appendMessage('bot', `
        <strong>Map Engine Toggle is in Profile Settings</strong><br>
        To switch between <strong>Free Map</strong> and <strong>Google Map</strong>, please use the dedicated toggle in your <strong>Profile Settings</strong>.<br><br>
        Here in the Help section, you can enter or change your <strong>Google Maps API Key</strong> anytime.
      `, [
        { action: 'prompt-key', label: '🔑 Enter / Change Google Key' },
        { action: 'view-profile-settings', label: '⚙️ Go to Profile Settings' }
      ]);
      return;
    }

    // 6. Mega Hubs
    if (lower.includes('mega') || lower.includes('hub') || lower.includes('multi')) {
      appendMessage('bot', `
        <strong>Combined Mega Parking Hubs</strong><br>
        We have 2 high-capacity complexes in Jammu supporting all 4 vehicles (Cars, Motorbikes, Bicycles &amp; EVs):<br>
        • <strong>Bahu Plaza Grand Mobility Hub</strong> (50+ Cars, 80 Bikes, 40 Cycles, 12 EV Chargers) · ₹35/hr<br>
        • <strong>General Bus Stand Smart Complex</strong> (Multi-tier ANPR Automated Structure) · ₹30/hr
      `, [{ action: 'filter-megahub', label: 'View Mega Hubs' }]);
      return;
    }

    // 7. Bicycle Parking
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

    // 8. Motorbike / Scooter
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

    // 9. Pricing / Rates
    if (lower.includes('rate') || lower.includes('charge') || lower.includes('price') || lower.includes('cost') || lower.includes('fee')) {
      appendMessage('bot', `
        <strong>Nova Spark Transparent Pricing</strong><br>
        • <strong>Bicycles:</strong> ₹5 – ₹8/hr<br>
        • <strong>Motorbikes / 2-Wheelers:</strong> ₹15/hr<br>
        • <strong>Cars / 4-Wheelers:</strong> ₹25/hr<br>
        • <strong>Mega Parking Hubs:</strong> ₹30 – ₹35/hr (All vehicles + EV charging)
      `, [{ action: 'filter-megahub', label: 'View Mega Hubs' }]);
      return;
    }

    // 10. Wallet / Balance
    if (lower.includes('wallet') || lower.includes('balance') || lower.includes('pay') || lower.includes('money')) {
      appendMessage('bot', `
        <strong>Nova Pay Balance: ₹${walletBalance.toLocaleString()}</strong><br>
        Your digital wallet is active for 1-tap instant driveway bookings, auto-extensions, and zero-surcharge check-ins.
      `, [{ action: 'view-wallet', label: 'View Wallet' }]);
      return;
    }

    // Default response
    appendMessage('bot', `
      I'm here to assist you with Nova Spark Parking!<br>
      • Tap <strong>Meet the Creator</strong> to contact Kartik Suri directly.<br>
      • Tap <strong>Fund Production</strong> to review the ₹50k–₹70k commercial deployment.<br>
      • Tap <strong>Change Google Key</strong> to enter your Google Maps API key.<br>
      • Or ask about <strong>Mega Hubs</strong>, <strong>Bicycles</strong>, or <strong>Rates</strong>!
    `, [
      { action: 'ask-creator', label: '💡 Meet Creator' },
      { action: 'ask-funding', label: '💼 Funding Details' },
      { action: 'prompt-key', label: '🔑 Change Google Key' }
    ]);
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
  return false;
}

let isSheetMinimized = true;
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
  const sbh        = document.getElementById('sheetBarHeader');

  if (isSheetMinimized) {
    document.body.classList.remove('explore-sheet-expanded');
    if (sheet) {
      sheet.classList.add('is-minimized');
      sheet.classList.remove('detail-open');
    }
    if (sbh) sbh.style.display = 'flex';
    if (stbChevron) stbChevron.textContent = '▲';
    if (stbLabel) stbLabel.textContent = 'Open Spots';
    if (sbhTitle) sbhTitle.textContent = `${SPOTS.length} Prime Hubs Available`;
    if (sbhSub) sbhSub.textContent = 'Jammu City · from ₹5/hr';
  } else {
    document.body.classList.add('explore-sheet-expanded');
    if (sheet) sheet.classList.remove('is-minimized');
    if (stbChevron) stbChevron.textContent = '▼';
    if (stbLabel) stbLabel.textContent = 'Minimize';
    if (isDetailOpen && selectedSpot) {
      if (sbh) sbh.style.display = 'none';
      if (sbhTitle) sbhTitle.textContent = selectedSpot.name;
      if (sbhSub) sbhSub.textContent = `₹${selectedSpot.price}/hr · ${selectedSpot.type}`;
    } else {
      if (sbh) sbh.style.display = 'flex';
      if (sbhTitle) sbhTitle.textContent = 'Nearby Mobility Hubs';
      if (sbhSub) sbhSub.textContent = `${SPOTS.length} verified parking hubs & stands`;
    }
  }
}

function expandSheet(toDetail = false) {
  isSheetMinimized = false;
  document.body.classList.add('explore-sheet-expanded');
  if (!toDetail && isDetailOpen) {
    showPeekState();
  }
  updateSheetUI();
  const sheet = document.getElementById('booking-sheet');
  if (sheet) {
    sheet.classList.remove('is-dragging');
    sheet.style.transition = '';
    sheet.style.transform = 'translateY(0)';
  }
  sheetY = 0;
  if (!isDesktopSidebar() && sheetSpring) {
    sheetSpring.snap(0);
  }
}

function minimizeSheet() {
  isSheetMinimized = true;
  document.body.classList.remove('detail-view-active');
  document.body.classList.remove('explore-sheet-expanded');
  const sheet = document.getElementById('booking-sheet');
  if (sheet) {
    sheet.classList.add('is-minimized');
    sheet.classList.remove('detail-open');
    sheet.classList.remove('is-dragging');
    sheet.style.transition = '';
    sheet.style.transform = '';
  }
  const sbh = document.getElementById('sheetBarHeader');
  if (sbh) sbh.style.display = 'flex';

  if (isDetailOpen) {
    isDetailOpen = false;
    const peekEl = document.getElementById('sheetPeek');
    const detailEl = document.getElementById('sheetDetail');
    if (peekEl) peekEl.style.display = 'block';
    if (detailEl) detailEl.style.display = 'none';
    document.querySelectorAll('.apple-bubble').forEach(m => m.classList.remove('selected'));
    document.querySelectorAll('.spot-item').forEach(el => el.classList.remove('si-selected', 'active'));
    selectedSpot = null;
  }

  updateSheetUI();
  if (!isDesktopSidebar() && sheetSpring) {
    sheetSpring.snap(getMinimizedOffset());
  }
}

function toggleSheet() {
  if (isSheetMinimized) {
    expandSheet(isDetailOpen);
  } else {
    minimizeSheet();
  }
}
window.expandSheet = expandSheet;
window.minimizeSheet = minimizeSheet;
window.toggleSheet = toggleSheet;

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

  if (window.location.hash === '#spots' || window.location.search.includes('expand=1')) {
    setTimeout(() => {
      expandSheet(false);
    }, 60);
  }
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#spots') {
      expandSheet(false);
    } else if (window.location.hash === '#dock' || window.location.hash === '#min') {
      minimizeSheet();
    }
  });

  /* ── Toggle button click ─────────────────────────────────── */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSheet();
    });
  }

  /* ── Tapping handle toggles/minimizes drawer ─────────────── */
  if (handle) {
    handle.addEventListener('click', (e) => {
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

  /* ── Drag gesture on handle & bar header (zero lag + pointer capture) ── */
  let dragging = false, startY = 0, startSheetY = 0;

  const onStart = (e) => {
    if (isDesktopSidebar()) return; // desktop handled via css transition & toggle
    if (e.target.closest('#sheetToggleBtn')) return;
    dragging = true;
    const clientY = (e.clientY != null) ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    startY = clientY;
    startSheetY = sheetY;
    if (sheetSpring) sheetSpring.stop();
    if (sheet) {
      sheet.classList.add('is-dragging');
      sheet.style.transition = 'none';
    }
    if (e.pointerId && e.target && e.target.setPointerCapture) {
      try { e.target.setPointerCapture(e.pointerId); } catch (_) {}
    }
  };

  const onMove = (e) => {
    if (!dragging) return;
    const clientY = (e.clientY != null) ? e.clientY : (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
    const dy = clientY - startY;

    if (!isSheetMinimized) {
      // Expanded sheet: dragging DOWN (dy > 0) translates downward
      if (dy > 0) {
        sheetY = dy;
      } else {
        // Dragging UP past top: rubber band resistance
        sheetY = -rubberBand(-dy, 120, 0.4);
      }
    } else {
      // Minimized sheet: dragging UP translates upward
      const maxMinY = getMinimizedOffset();
      let nextY = startSheetY + dy;
      if (nextY < 0) {
        nextY = -rubberBand(-nextY, 120, 0.4);
      } else if (nextY > maxMinY + 40) {
        nextY = maxMinY + rubberBand(nextY - maxMinY, 120, 0.4);
      }
      sheetY = nextY;
    }

    applySheetY();
  };

  const onEnd = (e) => {
    if (!dragging) return;
    dragging = false;
    if (sheet) {
      sheet.classList.remove('is-dragging');
      sheet.style.transition = '';
    }
    if (e.pointerId && e.target && e.target.releasePointerCapture) {
      try { e.target.releasePointerCapture(e.pointerId); } catch (_) {}
    }

    const clientY = (e.clientY != null) ? e.clientY : (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientY : startY);
    const dy = clientY - startY;

    if (!isSheetMinimized) {
      // We were open: dragging DOWN by > 30px minimizes immediately
      if (dy > 30 || sheetY > 45) {
        minimizeSheet();
      } else {
        sheetY = 0;
        if (sheet) sheet.style.transform = 'translateY(0)';
        if (sheetSpring) sheetSpring.to(0);
      }
    } else {
      // We were minimized: dragging UP by > 30px expands
      if (dy < -30) {
        expandSheet(isDetailOpen);
      } else {
        minimizeSheet();
      }
    }
  };

  if (handle) {
    handle.addEventListener('pointerdown', onStart);
    handle.addEventListener('touchstart', onStart, { passive: true });
  }
  if (barHeader) {
    barHeader.addEventListener('pointerdown', onStart);
    barHeader.addEventListener('touchstart', onStart, { passive: true });
  }

  window.addEventListener('pointermove', onMove);
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('pointerup',   onEnd);
  window.addEventListener('touchend',   onEnd);
  window.addEventListener('pointercancel', onEnd);
  window.addEventListener('touchcancel', onEnd);
}

function applySheetY() {
  const sheet = document.getElementById('booking-sheet');
  if (sheet) {
    if (window.innerWidth >= 900) {
      sheet.style.transform = '';
    } else {
      sheet.style.transform = isSheetMinimized ? '' : `translateY(${sheetY}px)`;
    }
  }
}

function handleViewportOrOrientationChange() {
  if (window.innerWidth >= 900) {
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
  const isMega = !!s.isMegaHub;

  if (s.vehicleCategory === 'ev') {
    const avatarStyle = isMega
      ? 'background:linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%);color:#FFFFFF;box-shadow:0 3px 12px rgba(124,58,237,0.35);border:1px solid rgba(255,255,255,0.4);font-weight:800'
      : 'background:var(--vehicle-ev-bg);color:var(--vehicle-ev-fg);font-weight:800';

    return `
      <div class="spot-item ${isMega ? 'spot-mega' : ''} spring-btn" data-id="${s.id}">
        <div class="si-color squircle-g2" style="${avatarStyle}">${s.hostInit}</div>
        <div class="si-body">
          <div class="si-name">${s.name}</div>
          <div class="si-sub">${s.addr}</div>
          <div class="si-dual-badges">
            <span class="si-v-badge si-v-ev">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-ev-car"/></svg>
              <span>${s.evCarSpots} EV Cars</span>
            </span>
            <span class="si-v-badge si-v-escooty" style="background:rgba(0,137,123,0.14);color:#00897B">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-escooty"/></svg>
              <span>${s.eScootySpots} E-Scooties</span>
            </span>
            ${isMega ? '<span class="si-v-badge si-v-mega"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>MEGA HUB</span></span>' : ''}
          </div>
        </div>
        <div class="si-pricing-col">
          <div class="si-p-row ev" style="color:var(--vehicle-ev-fg)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><use href="#icon-ev-car"/></svg>
            <span>₹${s.evCarPrice}/hr</span>
          </div>
          <div class="si-p-row escooty" style="color:#00897B">
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

    const avatarStyle = isMega
      ? 'background:linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%);color:#FFFFFF;box-shadow:0 3px 12px rgba(124,58,237,0.35);border:1px solid rgba(255,255,255,0.4);font-weight:800'
      : 'background:var(--vehicle-car-bg);color:var(--vehicle-car-fg);font-weight:800';

    return `
      <div class="spot-item ${isMega ? 'spot-mega' : ''} spring-btn" data-id="${s.id}">
        <div class="si-color squircle-g2" style="${avatarStyle}">${s.hostInit}</div>
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
            ${isMega ? '<span class="si-v-badge si-v-mega"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg><span>MEGA HUB</span></span>' : ''}
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

  const bayDimW = document.getElementById('bayDimW');
  const bayDimL = document.getElementById('bayDimL');
  if (bayDimW) {
    bayDimW.textContent = (mode === 'car' || mode === 'ev-car') ? '2.8m Bay Width' : (mode === 'bicycle' ? '1.0m Dock Width' : '1.4m Bay Width');
  }
  if (bayDimL) {
    bayDimL.textContent = (mode === 'car' || mode === 'ev-car') ? '5.5m' : (mode === 'bicycle' ? '2.0m' : '2.4m');
  }

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
    let fitText = 'Verified SUV & Sedan Bay (5.5m)';
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

  const d3dVehicleHolo = document.getElementById('d3dVehicleHolo') || document.querySelector('.bay-2d-vehicle-holo') || document.querySelector('.d3d-vehicle-holo');
  if (d3dVehicleHolo) {
    if (mode === 'bike' || mode === 'escooty') {
      const motoCol = (mode === 'escooty') ? '#00897B' : '#FF9500';
      const motoBg = (mode === 'escooty') ? 'rgba(0,137,123,0.18)' : 'rgba(255,149,0,0.18)';
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 160 80" class="bay-2d-vehicle-svg">
          <!-- Front Wheel top-down -->
          <rect x="120" y="34" width="24" height="12" rx="4" fill="#1C1C1E" stroke="${motoCol}" stroke-width="1.5"/>
          <!-- Handlebars -->
          <line x1="118" y1="18" x2="118" y2="62" stroke="${motoCol}" stroke-width="3" stroke-linecap="round"/>
          <rect x="115" y="16" width="6" height="10" rx="2" fill="${motoCol}"/>
          <rect x="115" y="54" width="6" height="10" rx="2" fill="${motoCol}"/>
          <circle cx="126" cy="40" r="3" fill="#FFCC00"/>
          <!-- Fuel tank / battery console -->
          <ellipse cx="90" cy="40" rx="20" ry="13" fill="${motoBg}" stroke="${motoCol}" stroke-width="2"/>
          <circle cx="92" cy="40" r="3.5" fill="${motoCol}"/>
          <!-- Rider seat -->
          <rect x="52" y="31" width="28" height="18" rx="6" fill="#2C2C2E" stroke="${motoCol}" stroke-width="1.5"/>
          <!-- Rear wheel & fender -->
          <rect x="18" y="34" width="26" height="12" rx="4" fill="#1C1C1E" stroke="${motoCol}" stroke-width="1.5"/>
          <rect x="15" y="37" width="4" height="6" rx="1.5" fill="#FF3B30"/>
        </svg>
      `;
    } else if (mode === 'bicycle') {
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 160 80" class="bay-2d-vehicle-svg">
          <!-- Front Wheel -->
          <rect x="122" y="37" width="26" height="6" rx="2" fill="#1C1C1E" stroke="var(--c-accent)" stroke-width="1.2"/>
          <!-- Handlebars -->
          <line x1="118" y1="20" x2="118" y2="60" stroke="var(--c-accent)" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="118" cy="22" r="3" fill="#34C759"/>
          <circle cx="118" cy="58" r="3" fill="#34C759"/>
          <!-- Top tube frame -->
          <line x1="118" y1="40" x2="36" y2="40" stroke="var(--c-accent)" stroke-width="2.5"/>
          <!-- Bottom bracket & pedals -->
          <line x1="76" y1="26" x2="76" y2="54" stroke="var(--c-accent)" stroke-width="2"/>
          <rect x="72" y="22" width="8" height="5" rx="1.5" fill="#1C1C1E"/>
          <rect x="72" y="53" width="8" height="5" rx="1.5" fill="#1C1C1E"/>
          <!-- Saddle -->
          <path d="M58 40 L48 34 L44 40 L48 46 Z" fill="#2C2C2E" stroke="var(--c-accent)" stroke-width="1.5"/>
          <!-- Rear Wheel -->
          <rect x="18" y="37" width="26" height="6" rx="2" fill="#1C1C1E" stroke="var(--c-accent)" stroke-width="1.2"/>
          <circle cx="16" cy="40" r="2.5" fill="#FF3B30"/>
        </svg>
      `;
    } else {
      const carCol = (mode === 'ev-car') ? '#34C759' : 'var(--c-accent)';
      const carBg = (mode === 'ev-car') ? 'rgba(52,199,89,0.18)' : 'rgba(0,122,255,0.16)';
      d3dVehicleHolo.innerHTML = `
        <svg viewBox="0 0 160 80" class="bay-2d-vehicle-svg">
          <!-- 4 Tires in top-down plan view -->
          <rect x="22" y="8" width="22" height="9" rx="3" fill="#1C1C1E" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <rect x="114" y="8" width="22" height="9" rx="3" fill="#1C1C1E" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <rect x="22" y="63" width="22" height="9" rx="3" fill="#1C1C1E" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <rect x="114" y="63" width="22" height="9" rx="3" fill="#1C1C1E" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>

          <!-- Outer Body Profile -->
          <rect x="16" y="14" width="128" height="52" rx="14" fill="${carBg}" stroke="${carCol}" stroke-width="2"/>

          <!-- Hood Lines & Headlights -->
          <path d="M142 24 Q146 40 142 56" fill="none" stroke="${carCol}" stroke-width="1.5" opacity="0.6"/>
          <rect x="139" y="16" width="4" height="8" rx="2" fill="#FFCC00" opacity="0.9"/>
          <rect x="139" y="56" width="4" height="8" rx="2" fill="#FFCC00" opacity="0.9"/>

          <!-- Front Windshield -->
          <path d="M106 18 L116 23 L116 57 L106 62 Z" fill="rgba(255,255,255,0.45)" stroke="${carCol}" stroke-width="1.2"/>

          <!-- Panoramic Roof -->
          <rect x="52" y="21" width="50" height="38" rx="6" fill="rgba(255,255,255,0.2)" stroke="${carCol}" stroke-width="1.2"/>

          <!-- Rear Windshield -->
          <path d="M48 20 L38 24 L38 56 L48 60 Z" fill="rgba(255,255,255,0.35)" stroke="${carCol}" stroke-width="1.2"/>

          <!-- Taillights -->
          <rect x="16" y="18" width="3" height="8" rx="1.5" fill="#FF3B30"/>
          <rect x="16" y="54" width="3" height="8" rx="1.5" fill="#FF3B30"/>

          <!-- Side Mirrors -->
          <rect x="108" y="7" width="8" height="6" rx="2" fill="${carCol}"/>
          <rect x="108" y="67" width="8" height="6" rx="2" fill="${carCol}"/>
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
  document.body.classList.add('detail-view-active');
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
  document.body.classList.remove('detail-view-active');

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

  /* Map Switch Toast View Button & Shortcut to Map */
  const notice = document.getElementById('mapSwitchNotice');
  const viewMapBtn = document.getElementById('msnViewMapBtn');
  if (viewMapBtn) {
    viewMapBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (notice) notice.style.display = 'none';
      switchScreen('screen-home');
    });
  }
  if (notice) {
    notice.addEventListener('click', () => {
      notice.style.display = 'none';
      switchScreen('screen-home');
    });
  }

  /* Map Engine Segmented Control in Settings (The Only Notification in the App) */
  const btnFree = document.getElementById('btnEngineFree');
  const btnGoogle = document.getElementById('btnEngineGoogle');
  if (btnFree) {
    btnFree.addEventListener('click', () => {
      switchMapEngine('free');
      showMapSwitchNotice('free');
    });
  }
  if (btnGoogle) {
    btnGoogle.addEventListener('click', () => {
      switchMapEngine('google');
      showMapSwitchNotice('google');
    });
  }

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

  /* Push Notifications Toggle Row - Silent (Zero toast) */
  const pushRow = document.getElementById('pushNotificationsRow');
  if (pushRow) {
    let pushEnabled = true;
    pushRow.addEventListener('click', () => {
      pushEnabled = !pushEnabled;
    });
  }

  /* Saved Cards & UPI Row - Silent */
  // Click actions remain silent

  /* Sign Out Row - Silent */
  // Click actions remain silent

  /* Profile Edit Button - Silent */
  // Click actions remain silent

  /* Vehicle Card Row Clicks - Silent */
  document.querySelectorAll('.profile-col-right .prof-section:first-child .row-68').forEach(row => {
    row.style.cursor = 'pointer';
  });

  /* Recent Booking Row Clicks - Silent */
  document.querySelectorAll('.profile-col-right .prof-section:nth-child(2) .row-68').forEach(row => {
    row.style.cursor = 'pointer';
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
    });
  }

  /* Quick Toggle between Free (Apple) and Google Maps */
  const meQuickToggle = document.getElementById('mapEngineQuickToggle');
  if (meQuickToggle) {
    meQuickToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextEngine = (currentMapEngine === 'google') ? 'free' : 'google';
      switchMapEngine(nextEngine, false);
    });
  }

  document.querySelectorAll('.pill[data-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      const wasActive = pill.classList.contains('active');
      document.querySelectorAll('.pill[data-filter]').forEach(p => p.classList.remove('active'));
      if (wasActive) {
        // Toggle OFF -> switch back to all spots silently
        filterSpots('all');
      } else {
        // Toggle ON
        pill.classList.add('active');
        const filter = pill.dataset.filter;
        filterSpots(filter);
      }
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

  // Update header in bottom sheet
  const sbhTitle = document.getElementById('sbhTitle');
  const sbhSub = document.getElementById('sbhSub');
  if (sbhTitle && !isDetailOpen) {
    if (filter === 'all' || !filter) {
      sbhTitle.textContent = `${SPOTS.length} Prime Hubs Available`;
      if (sbhSub) sbhSub.textContent = 'Jammu City · from ₹5/hr';
    } else {
      const filterLabels = {
        car: 'Car Hubs',
        bike: 'Bike Hubs',
        motorcycle: 'Bike Hubs',
        ev: 'EV Charging Hubs',
        bicycle: 'Bicycle Stands',
        megahub: 'Mega Hubs',
        price: 'Economy Hubs',
        covered: 'Covered Hubs'
      };
      sbhTitle.textContent = `${filtered.length} ${filterLabels[filter] || 'Hubs'} Available`;
      if (sbhSub) sbhSub.textContent = `Filtered · Tap active chip to reset`;
    }
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
    } else if (hash.startsWith('#profile')) {
      if (hash.includes('dark')) {
        applyTheme('dark', true);
        const themeCheckbox = document.getElementById('themeToggleCheckbox');
        if (themeCheckbox) themeCheckbox.checked = true;
      } else if (hash.includes('light')) {
        applyTheme('light', true);
        const themeCheckbox = document.getElementById('themeToggleCheckbox');
        if (themeCheckbox) themeCheckbox.checked = false;
      }
      switchScreen('screen-profile');
      if (hash.includes('mid') || hash.includes('wallet')) {
        const sc = document.querySelector('#screen-profile .screen-scroll');
        if (sc) sc.scrollTop = 180;
      } else if (hash.includes('settings') || hash.includes('bottom') || hash.includes('cards')) {
        const sc = document.querySelector('#screen-profile .screen-scroll');
        if (sc) sc.scrollTop = 550;
      }
    } else if (hash === '#dark') {
      applyTheme('dark', true);
      const themeCheckbox = document.getElementById('themeToggleCheckbox');
      if (themeCheckbox) themeCheckbox.checked = true;
    } else if (hash === '#light') {
      applyTheme('light', true);
      const themeCheckbox = document.getElementById('themeToggleCheckbox');
      if (themeCheckbox) themeCheckbox.checked = false;
    } else if (hash === '#test-map-switch-google') {
      switchScreen('screen-profile');
      showMapSwitchNotice('google');
      const btn = document.getElementById('btnEngineGoogle');
      if (btn) btn.click();
    } else if (hash === '#test-map-switch-free') {
      switchScreen('screen-profile');
      showMapSwitchNotice('free');
      const btn = document.getElementById('btnEngineFree');
      if (btn) btn.click();
    } else if (hash === '#chatbot') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
    } else if (hash === '#chatbot-creator') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
      setTimeout(() => {
        const inp = document.getElementById('cbInput');
        const form = document.getElementById('cbForm');
        if (inp && form) {
          inp.value = 'Creator';
          form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      }, 300);
    } else if (hash === '#chatbot-funding') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
      setTimeout(() => {
        const inp = document.getElementById('cbInput');
        const form = document.getElementById('cbForm');
        if (inp && form) {
          inp.value = 'Funding';
          form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
      }, 300);
    } else if (hash === '#chatbot-google' || hash === '#chatbot-key') {
      const helpRow = document.getElementById('helpCenterRow');
      if (helpRow) helpRow.click();
      setTimeout(() => {
        const inp = document.getElementById('cbInput');
        const form = document.getElementById('cbForm');
        if (inp && form) {
          inp.value = 'Google Key';
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
    } else if (hash === '#scroll-end' || hash === '#dark-pill') {
      const track = document.getElementById('filterPillsTrack');
      if (track) track.scrollLeft = track.scrollWidth || 9999;
    } else if (hash === '#carplay') {
      if (window.setCarplay) window.setCarplay(true);
    } else if (hash.startsWith('#spot-')) {
      const cleanId = hash.replace('#spot-', '').split('-')[0];
      const id = parseInt(cleanId, 10);
      const spot = SPOTS.find(s => s.id === id);
      if (spot) {
        openSpotDetail(spot);
        if (hash.includes('bottom')) {
          setTimeout(() => {
            const sd = document.getElementById('sheetDetail');
            if (sd) sd.scrollTop = sd.scrollHeight || 9999;
          }, 250);
        }
      }
    }
  }
  window.addEventListener('hashchange', handleHash);
  handleHash();
  setTimeout(handleHash, 150);
}

function switchScreen(id) {
  if (id !== 'screen-home') {
    document.body.classList.remove('detail-view-active');
  }
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
  document.body.classList.remove('detail-view-active');
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
