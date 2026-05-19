import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AirVent,
  AlertTriangle,
  ArrowRight,
  Camera,
  DoorOpen,
  House,
  Lightbulb,
  LogOut,
  Menu,
  Shield,
  ThermometerSun,
  VenetianMask,
} from 'lucide-react';
import profileImage from './assets/Ileash _Thakur_Profile Image.png';
import logoImage from './assets/logo.png';
import viewImage from './assets/view.png';
import {
  getLightState,
  setBrightness,
  setColor,
  setScene,
  TAPO_LIGHT_ENTITY_ID,
  turnLightOff,
  turnLightOn,
} from './services/lightApi';

const navItems = [
  { id: 'home', label: 'Home', icon: House },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'sos', label: 'SOS', icon: AlertTriangle },
  { id: 'profile', label: 'Profile', icon: Menu },
];

const initialDevices = [
  { id: 'lights', label: 'Lights', subtitle: 'Ambient mode', icon: Lightbulb, active: true, tone: 'gold' },
  { id: 'gate', label: 'Gate', subtitle: 'Front access', icon: DoorOpen, active: false, tone: 'burgundy' },
  { id: 'curtains', label: 'Curtains', subtitle: 'Garden side', icon: VenetianMask, active: true, tone: 'gold' },
  { id: 'cctv', label: 'CCTV', subtitle: '4 cameras live', icon: Camera, active: true, tone: 'slate' },
  { id: 'ac', label: 'AC', subtitle: '22°C preset', icon: AirVent, active: false, tone: 'slate' },
  { id: 'sos', label: 'SOS', subtitle: 'Emergency line', icon: AlertTriangle, active: false, tone: 'alert' },
];

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  `${window.location.protocol}//${window.location.hostname}:3001`;

function BottomNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="absolute inset-x-0 bottom-0 border-t border-white/70 bg-white/78 px-4 pb-6 pt-3 backdrop-blur-xl">
      <div className="grid grid-cols-4 gap-2">
        {navItems.map(({ id, label, icon: Icon }) => {
          const active = activeTab === id;

          return (
            <motion.button
              key={id}
              className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-2.5 text-[11px] ${
                active ? 'text-[#7E1F25]' : 'text-[#8A7A72]'
              }`}
              onClick={() => setActiveTab(id)}
              type="button"
              whileTap={{ scale: 0.97 }}
            >
              <div className={`rounded-2xl p-2 ${active ? 'bg-[#7E1F25]/10' : 'bg-transparent'}`}>
                <Icon className={`h-4.5 w-4.5 ${active ? 'text-[#7E1F25]' : 'text-[#8A7A72]'}`} />
              </div>
              <span className={active ? 'font-semibold' : 'font-medium'}>{label}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}

function AppShell({ activeTab, children }) {
  return <div className="relative flex min-h-[calc(100vh-2rem)] flex-col">{children}</div>;
}

function HeroCard() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-[2rem] border border-white/50 shadow-[0_24px_60px_rgba(59,42,35,0.15)]"
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img alt="Amaara view" className="absolute inset-0 h-full w-full object-cover" src={viewImage} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(43,25,25,0.18),rgba(126,31,37,0.28)),linear-gradient(180deg,transparent_0%,rgba(18,10,10,0.35)_100%)]" />
      <div className="relative flex min-h-48 flex-col justify-between p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/75">Welcome Home</p>
            <img
              alt="Amaara Pulse"
              className="mt-3 h-12 w-auto drop-shadow-[0_14px_28px_rgba(25,16,16,0.18)]"
              src={logoImage}
            />
            <p className="mt-2 max-w-[14rem] text-sm text-white/80">
              Calm, precise control for your home sanctuary.
            </p>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 px-3 py-2 text-right backdrop-blur-md">
            <p className="text-2xl font-semibold">18°C</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/75">Partly Cloudy</p>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-[1.4rem] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
          <div>
            <p className="text-sm font-medium">Amaara Villa 12</p>
            <p className="text-xs text-white/75">All systems connected</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-white/85">
            <ThermometerSun className="h-4 w-4" />
            <span>Air quality excellent</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function DeviceCard({ device, onSelect, onToggle, onOpenSos }) {
  const Icon = device.icon;
  const toneClasses = {
    gold: device.active
      ? 'from-[#D8BC8D] to-[#C8A46A] text-[#4F3920]'
      : 'from-[#FCFAF7] to-[#F4EEE7] text-[#C8A46A]',
    burgundy: device.active
      ? 'from-[#9A343B] to-[#7E1F25] text-white'
      : 'from-[#FCFAF7] to-[#F4EEE7] text-[#7E1F25]',
    slate: device.active
      ? 'from-[#EDE7E0] to-[#E4DBD1] text-[#4D4139]'
      : 'from-[#FCFAF7] to-[#F5F0EA] text-[#7C6D64]',
    alert: 'from-[#7E1F25] to-[#63161C] text-white',
  };

  const ringClasses = {
    gold: 'bg-[#C8A46A]/15',
    burgundy: 'bg-[#7E1F25]/15',
    slate: 'bg-[#6F625B]/10',
    alert: 'bg-white/10',
  };

  return (
    <motion.article
      className={`rounded-[1.8rem] border border-white/70 bg-gradient-to-br p-4 shadow-[0_12px_30px_rgba(66,46,38,0.08)] ${toneClasses[device.tone]}`}
      layout
      onClick={() => onSelect?.(device.id)}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${ringClasses[device.tone]}`}>
          <Icon className="h-6 w-6" />
        </div>
        {device.id === 'sos' ? (
          <motion.button
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]"
            onClick={onOpenSos}
            type="button"
            whileTap={{ scale: 0.97 }}
          >
            Open
          </motion.button>
        ) : (
          <motion.button
            aria-pressed={device.active}
            className={`relative flex h-7 w-12 items-center rounded-full p-1 ${
              device.active ? 'bg-[#1A1A1A]/20' : 'bg-[#1A1A1A]/10'
            }`}
            onClick={(event) => {
              event.stopPropagation();
              onToggle(device.id);
            }}
            type="button"
            whileTap={{ scale: 0.96 }}
          >
            <motion.span
              className="block h-5 w-5 rounded-full bg-white shadow-md"
              layout
              transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              style={{ x: device.active ? 20 : 0 }}
            />
          </motion.button>
        )}
      </div>
      <div className="mt-9">
        <h3 className="text-lg font-semibold tracking-tight">{device.label}</h3>
        <p className={`mt-1 text-sm ${device.tone === 'alert' || device.active ? 'text-current/75' : 'text-[#8A7A72]'}`}>
          {device.subtitle}
        </p>
      </div>
    </motion.article>
  );
}

function LightControlPanel({
  busy,
  error,
  expanded,
  lightState,
  onBrightnessCommit,
  onExpandToggle,
  onPowerToggle,
  onSceneSelect,
  onPresetSelect,
}) {
  const [draftBrightness, setDraftBrightness] = useState(lightState?.brightness ?? 255);

  useEffect(() => {
    if (typeof lightState?.brightness === 'number') {
      setDraftBrightness(lightState.brightness);
    }
  }, [lightState?.brightness]);

  const presets = [
    { label: 'Warm', rgb: [255, 183, 94] },
    { label: 'Red', rgb: [255, 0, 0] },
    { label: 'Blue', rgb: [0, 102, 255] },
    { label: 'Purple', rgb: [156, 39, 176] },
    { label: 'Gold', rgb: [255, 204, 64] },
    { label: 'White', rgb: [255, 244, 229] },
  ];

  const scenes = [
    { label: 'Movie', value: 'movie' },
    { label: 'Night', value: 'night' },
    { label: 'Relax', value: 'relax' },
    { label: 'Party', value: 'party' },
  ];

  return (
    <motion.section
      className="mt-8 rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-[0_16px_35px_rgba(66,46,38,0.08)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, delay: 0.15 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7E1F25]/55">Lighting</p>
          <h3 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Real Bulb Controls</h3>
          <p className="mt-2 text-sm text-[#7B6C63]">
            {lightState?.alias || TAPO_LIGHT_ENTITY_ID} • {busy ? 'Syncing...' : 'Live connected'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`relative flex h-8 w-14 items-center rounded-full p-1 ${
              lightState?.power ? 'bg-[#7E1F25]' : 'bg-[#DCCFC3]'
            }`}
            disabled={busy}
            onClick={onPowerToggle}
            type="button"
          >
            <motion.span
              className="block h-6 w-6 rounded-full bg-white shadow-md"
              layout
              transition={{ type: 'spring', stiffness: 360, damping: 26 }}
              style={{ x: lightState?.power ? 24 : 0 }}
            />
          </button>
          <button
            className="rounded-2xl border border-[#E8DED5] bg-[#FCFAF7] px-3 py-2 text-sm font-medium text-[#7E1F25]"
            onClick={onExpandToggle}
            type="button"
          >
            {expanded ? 'Hide' : 'Expand'}
          </button>
        </div>
      </div>

      {error ? (
        <div className="mb-4 rounded-2xl border border-[#E7B9BE] bg-[#FFF4F5] px-4 py-3 text-sm text-[#9C2E39]">
          {error}
        </div>
      ) : null}

      {expanded ? (
        <>
          <div className="rounded-[1.6rem] bg-[#F8F3EE] px-4 py-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="font-medium text-[#4D4139]">Brightness</span>
              <span className="font-semibold text-[#7E1F25]">{draftBrightness}</span>
            </div>
            <input
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-[#E9DED2] accent-[#7E1F25]"
              disabled={busy}
              max="255"
              min="0"
              onChange={(event) => setDraftBrightness(Number(event.target.value))}
              onMouseUp={() => onBrightnessCommit(draftBrightness)}
              onTouchEnd={() => onBrightnessCommit(draftBrightness)}
              type="range"
              value={draftBrightness}
            />
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E1F25]/60">Colors</p>
            <div className="grid grid-cols-3 gap-3">
              {presets.map((preset) => (
                <motion.button
                  key={preset.label}
                  className="rounded-[1.2rem] border border-[#E8DED5] bg-[#FCFAF7] px-4 py-3 text-sm font-medium text-[#4D4139] shadow-sm"
                  disabled={busy}
                  onClick={() => onPresetSelect(preset.rgb, draftBrightness)}
                  type="button"
                  whileTap={{ scale: 0.985 }}
                >
                  {preset.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E1F25]/60">Scenes</p>
            <div className="grid grid-cols-2 gap-3">
              {scenes.map((scene) => (
                <motion.button
                  key={scene.value}
                  className="rounded-[1.2rem] border border-[#E8DED5] bg-[#FCFAF7] px-4 py-3 text-sm font-medium text-[#4D4139] shadow-sm"
                  disabled={busy}
                  onClick={() => onSceneSelect(scene.value)}
                  type="button"
                  whileTap={{ scale: 0.985 }}
                >
                  {scene.label}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </motion.section>
  );
}

function HomeScreen({
  devices,
  lightBusy,
  lightError,
  lightExpanded,
  lightState,
  onBrightnessCommit,
  onLightExpandToggle,
  onLightPowerToggle,
  onOpenSos,
  onPresetSelect,
  onSceneSelect,
  onToggle,
}) {
  return (
    <div className="flex-1 overflow-y-auto px-5 pb-28 pt-5">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7E1F25]/60">Private Residence</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1A1A1A]">Good evening, Ileasha</h2>
        </div>
        <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#7E1F25]/60">Status</p>
          <p className="mt-1 text-sm font-semibold text-[#1A1A1A]">Secure</p>
        </div>
      </header>

      <HeroCard />

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7E1F25]/55">Controls</p>
            <h3 className="mt-1 text-xl font-semibold text-[#1A1A1A]">Device Cards</h3>
          </div>
          <div className="rounded-full border border-[#E8DED5] bg-white/65 px-3 py-2 text-xs font-medium text-[#7E1F25] backdrop-blur">
            6 connected
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <AnimatePresence>
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 18 }}
                onClick={device.id === 'lights' ? onLightExpandToggle : undefined}
                transition={{ delay: index * 0.05, duration: 0.35 }}
              >
                <DeviceCard
                  device={device}
                  onOpenSos={onOpenSos}
                  onSelect={device.id === 'lights' ? onLightExpandToggle : undefined}
                  onToggle={onToggle}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {lightState ? (
        <LightControlPanel
          busy={lightBusy}
          error={lightError}
          expanded={lightExpanded}
          lightState={lightState}
          onBrightnessCommit={onBrightnessCommit}
          onExpandToggle={onLightExpandToggle}
          onPowerToggle={onLightPowerToggle}
          onPresetSelect={onPresetSelect}
          onSceneSelect={onSceneSelect}
        />
      ) : null}
    </div>
  );
}

function SecurityScreen({ devices }) {
  const cctv = devices.find((device) => device.id === 'cctv');
  const gate = devices.find((device) => device.id === 'gate');

  return (
    <div className="flex-1 overflow-y-auto px-5 pb-28 pt-5">
      <header className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7E1F25]/55">Security</p>
        <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">Estate Monitoring</h2>
      </header>

      <div className="grid gap-4">
        <motion.section
          className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_16px_35px_rgba(66,46,38,0.08)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">CCTV Network</p>
              <p className="mt-1 text-sm text-[#7B6C63]">{cctv?.active ? 'All cameras online' : 'Camera stream paused'}</p>
            </div>
            <Camera className="h-5 w-5 text-[#C8A46A]" />
          </div>
        </motion.section>

        <motion.section
          className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_16px_35px_rgba(66,46,38,0.08)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">Main Gate</p>
              <p className="mt-1 text-sm text-[#7B6C63]">{gate?.active ? 'Gate is open' : 'Gate is secured'}</p>
            </div>
            <DoorOpen className="h-5 w-5 text-[#7E1F25]" />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function SosScreen({ onClose }) {
  return (
    <div className="flex flex-1 flex-col justify-between px-5 pb-28 pt-8">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7E1F25]/55">Emergency Mode</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1A1A1A]">SOS Assistance</h2>
        <p className="mx-auto mt-3 max-w-[16rem] text-sm text-[#7B6C63]">
          Immediate dispatch to estate security, hospital, and emergency support.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          className="relative flex h-64 w-64 items-center justify-center"
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-full bg-[#7E1F25]/10 blur-xl" />
          <div className="absolute inset-5 rounded-full border border-[#7E1F25]/15" />
          <motion.button
            className="relative flex h-48 w-48 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#97343b_0%,#7E1F25_55%,#62161b_100%)] text-white shadow-[0_30px_70px_rgba(126,31,37,0.32)]"
            type="button"
            whileTap={{ scale: 0.96 }}
          >
            <div className="absolute inset-3 rounded-full border-4 border-white/15" />
            <span className="text-5xl font-semibold tracking-[0.32em]">SOS</span>
          </motion.button>
        </motion.div>
      </div>

      <div className="space-y-3">
        <motion.button
          className="flex w-full items-center justify-between rounded-2xl border border-white/70 bg-white/70 px-5 py-4 text-left shadow-sm backdrop-blur-xl"
          type="button"
          whileTap={{ scale: 0.985 }}
        >
          <span>
            <span className="block text-sm font-semibold text-[#1A1A1A]">Call Security</span>
            <span className="block text-xs text-[#7B6C63]">Private estate response desk</span>
          </span>
          <ArrowRight className="h-4 w-4 text-[#7E1F25]" />
        </motion.button>
        <motion.button
          className="w-full rounded-2xl bg-[#7E1F25] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(126,31,37,0.22)]"
          onClick={onClose}
          type="button"
          whileTap={{ scale: 0.985 }}
        >
          Return to Dashboard
        </motion.button>
      </div>
    </div>
  );
}

function ProfileScreen({ onLogout }) {
  return (
    <div className="flex-1 overflow-y-auto px-5 pb-28 pt-5">
      <motion.section
        className="rounded-[2rem] bg-[linear-gradient(135deg,#8D2930_0%,#7E1F25_60%,#63171C_100%)] p-6 text-white shadow-[0_22px_50px_rgba(126,31,37,0.28)]"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-4">
          <img alt="Ileasha Thakur" className="h-20 w-20 rounded-full border-2 border-white/25 object-cover" src={profileImage} />
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Owner</p>
            <h2 className="mt-2 text-2xl font-semibold">Ileasha Thakur</h2>
            <p className="mt-1 text-sm text-white/75">Amaara Villa 12</p>
          </div>
        </div>
      </motion.section>

      <div className="mt-6 space-y-4">
        {[
          ['Access Level', 'Full residence control'],
          ['Automation', '6 premium scenes active'],
          ['Estate Mode', 'Private and secured'],
        ].map(([label, value], index) => (
          <motion.div
            key={label}
            className="rounded-[1.6rem] border border-white/70 bg-white/72 p-5 shadow-sm backdrop-blur-xl"
            initial={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7E1F25]/60">{label}</p>
            <p className="mt-2 text-base font-medium text-[#1A1A1A]">{value}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#EADFD5] bg-white/72 px-5 py-4 text-sm font-semibold text-[#7E1F25] shadow-sm backdrop-blur-xl"
        onClick={onLogout}
        type="button"
        whileTap={{ scale: 0.985 }}
      >
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </motion.button>
    </div>
  );
}

function AppLayout({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');
  const [devices, setDevices] = useState(initialDevices);
  const [lightExpanded, setLightExpanded] = useState(false);
  const [lightBusy, setLightBusy] = useState(false);
  const [lightError, setLightError] = useState('');
  const [lightState, setLightState] = useState(null);

  const applyLightState = (light) => {
    setLightState(light);
    setDevices((current) =>
      current.map((device) =>
        device.id === 'lights'
          ? {
              ...device,
              active: light.power,
              subtitle:
                typeof light.brightness === 'number'
                  ? `${light.brightness}% brightness`
                  : light.online
                    ? 'Connected live'
                    : 'Unavailable',
            }
          : device,
      ),
    );
  };

  useEffect(() => {
    let cancelled = false;

    async function loadLightState() {
      try {
        const light = await getLightState();
        if (cancelled || !light) {
          return;
        }
        setLightError('');
        applyLightState(light);
      } catch {
        setLightError('Unable to connect to the light service.');
      }
    }

    loadLightState();

    return () => {
      cancelled = true;
    };
  }, []);

  const screen = useMemo(() => {
    if (activeTab === 'home') {
      return (
        <HomeScreen
          devices={devices}
          lightBusy={lightBusy}
          lightError={lightError}
          lightExpanded={lightExpanded}
          lightState={lightState}
          onBrightnessCommit={async (brightness) => {
            setLightBusy(true);
            setLightError('');
            try {
              const light = await setBrightness(TAPO_LIGHT_ENTITY_ID, brightness);
              applyLightState(light);
            } catch (error) {
              setLightError(error.message || 'Brightness update failed.');
            } finally {
              setLightBusy(false);
            }
          }}
          onLightExpandToggle={() => setLightExpanded((current) => !current)}
          onLightPowerToggle={async () => {
            setLightBusy(true);
            setLightError('');
            try {
              const light = lightState?.power
                ? await turnLightOff(TAPO_LIGHT_ENTITY_ID)
                : await turnLightOn(TAPO_LIGHT_ENTITY_ID);
              applyLightState(light);
            } catch (error) {
              setLightError(error.message || 'Unable to update power state.');
            } finally {
              setLightBusy(false);
            }
          }}
          onOpenSos={() => setActiveTab('sos')}
          onPresetSelect={async (rgb, brightness) => {
            setLightBusy(true);
            setLightError('');
            try {
              const light = await setColor(TAPO_LIGHT_ENTITY_ID, rgb, brightness);
              applyLightState(light);
            } catch (error) {
              setLightError(error.message || 'Unable to update light color.');
            } finally {
              setLightBusy(false);
            }
          }}
          onSceneSelect={async (scene) => {
            setLightBusy(true);
            setLightError('');
            try {
              const light = await setScene(TAPO_LIGHT_ENTITY_ID, scene);
              applyLightState(light);
            } catch (error) {
              setLightError(error.message || 'Unable to apply the selected scene.');
            } finally {
              setLightBusy(false);
            }
          }}
          onToggle={async (deviceId) => {
            if (deviceId === 'lights') {
              const currentLight = devices.find((device) => device.id === 'lights');
              const optimisticPower = !currentLight?.active;

              setDevices((current) =>
                current.map((device) =>
                  device.id === 'lights'
                    ? {
                        ...device,
                        active: optimisticPower,
                        subtitle: optimisticPower ? 'Updating...' : 'Updating...',
                      }
                    : device,
                ),
              );

              try {
                setLightBusy(true);
                setLightError('');
                const light = optimisticPower
                  ? await turnLightOn(TAPO_LIGHT_ENTITY_ID)
                  : await turnLightOff(TAPO_LIGHT_ENTITY_ID);
                applyLightState(light);
              } catch (error) {
                setDevices((current) =>
                  current.map((device) =>
                    device.id === 'lights'
                      ? {
                          ...device,
                          active: currentLight?.active ?? false,
                          subtitle: 'Backend unavailable',
                        }
                      : device,
                  ),
                );
                setLightError(error.message || 'Unable to toggle the light.');
              } finally {
                setLightBusy(false);
              }

              return;
            }

            setDevices((current) =>
              current.map((device) =>
                device.id === deviceId ? { ...device, active: !device.active } : device,
              ),
            );
          }}
        />
      );
    }

    if (activeTab === 'security') {
      return <SecurityScreen devices={devices} />;
    }

    if (activeTab === 'sos') {
      return <SosScreen onClose={() => setActiveTab('home')} />;
    }

    return <ProfileScreen onLogout={onLogout} />;
  }, [activeTab, devices, onLogout]);

  return (
    <AppShell activeTab={activeTab}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
          exit={{ opacity: 0, y: -8 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          {screen}
        </motion.div>
      </AnimatePresence>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </AppShell>
  );
}

export default AppLayout;
