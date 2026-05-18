import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function SplashScreen() {
  return (
    <div className="relative flex min-h-[calc(100vh-2rem)] items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,106,0.22),transparent_32%),linear-gradient(180deg,#fdfcf9_0%,#f2ece5_100%)]" />
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="relative flex flex-col items-center text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="h-56 overflow-hidden">
          <motion.img
            alt="Amaara Pulse"
            animate={{ opacity: 1, y: 0 }}
            className="h-auto w-72 max-w-none -translate-y-8 drop-shadow-[0_24px_50px_rgba(126,31,37,0.12)]"
            initial={{ opacity: 0, y: 16 }}
            src={logo}
            transition={{ delay: 0.12, duration: 0.8, ease: 'easeOut' }}
          />
        </div>
        <motion.p
          animate={{ opacity: 1 }}
          className="mt-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#7E1F25]/70"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          Luxury Smart Living
        </motion.p>
      </motion.div>
    </div>
  );
}

export default SplashScreen;
