export const initialRooms = [
  {
    id: 'living-room',
    name: 'Living Room',
    lightsOn: true,
    brightness: 80,
    temperature: 24,
    curtains: 65,
    acTemp: 22,
    devices: {
      tv: true,
      plug: false,
      soundbar: true,
    },
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    lightsOn: false,
    brightness: 20,
    temperature: 23,
    curtains: 90,
    acTemp: 21,
    devices: {
      tv: false,
      plug: true,
      soundbar: false,
    },
  },
];

export const initialActivityLog = [
  { id: '1', message: 'Visitor gate access approved', time: '2 min ago' },
  { id: '2', message: 'Living room camera motion detected', time: '15 min ago' },
  { id: '3', message: 'Bedroom AC adjusted to 21°C', time: '28 min ago' },
  { id: '4', message: 'Night patrol completed block A', time: '45 min ago' },
];

export const sceneDefinitions = [
  {
    id: 'leave-home',
    name: 'Leave Home',
    description: 'Turns devices off, secures doors, and closes the gate.',
  },
  {
    id: 'welcome-home',
    name: 'Welcome Home',
    description: 'Lights up the villa and opens comfort settings.',
  },
  {
    id: 'movie-mode',
    name: 'Movie Mode',
    description: 'Dims lights, closes curtains, and powers the TV.',
  },
  {
    id: 'good-night',
    name: 'Good Night',
    description: 'Prepares the home for sleep with soft climate control.',
  },
];

export const communityLinks = [
  {
    id: 'staff',
    title: 'Staff Management',
    description: 'View staff entry logs',
  },
  {
    id: 'maintenance',
    title: 'Maintenance Requests',
    description: 'Raise maintenance requests and track status',
  },
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'Stay updated with community updates',
  },
];

export const notifications = [
  {
    id: 'n1',
    title: 'Main Gate Opened',
    detail: 'Today, 07:45 PM',
    category: 'Security',
    tone: 'amber',
  },
  {
    id: 'n2',
    title: 'Motion Detected',
    detail: 'Driveway Camera',
    meta: 'Today, 06:30 PM',
    category: 'Security',
    tone: 'green',
  },
  {
    id: 'n3',
    title: 'Guest Entry Approved',
    detail: 'Ramesh Kumar',
    meta: 'Today, 05:20 PM',
    category: 'Community',
    tone: 'blue',
  },
  {
    id: 'n4',
    title: 'Maintenance Update',
    detail: 'Water supply issue resolved',
    meta: 'Today, 04:15 PM',
    category: 'Community',
    tone: 'blue',
  },
  {
    id: 'n5',
    title: 'Device Alert',
    detail: 'Living Room AC is offline',
    meta: 'Today, 01:10 PM',
    category: 'Home',
    tone: 'red',
  },
];
