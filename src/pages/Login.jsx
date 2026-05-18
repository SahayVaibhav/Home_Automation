import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LockKeyhole, UserRound } from 'lucide-react';
import logo from '../assets/logo.png';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === '1234') {
      setError('');
      onLogin(true);
      return;
    }

    setError('Invalid credentials');
  };

  return (
    <div className="relative flex min-h-[calc(100vh-2rem)] items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,164,106,0.18),transparent_30%),linear-gradient(180deg,#fbfaf7_0%,#f4efe8_100%)]" />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm rounded-[2rem] border border-white/70 bg-white/65 p-7 shadow-[0_30px_80px_rgba(126,31,37,0.08)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div className="mb-8 flex flex-col items-center text-center">
          <img alt="Amaara Pulse" className="mb-5 w-48 drop-shadow-[0_16px_30px_rgba(126,31,37,0.14)]" src={logo} />
          <h1 className="text-2xl font-semibold tracking-tight text-[#1A1A1A]">Amaara Pulse</h1>
          <p className="mt-2 text-sm text-[#6F625B]">Luxury smart home access</p>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#7E1F25]/70">
              Username
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-[#E8DED5] bg-[#FCFBF9] px-4 py-3 shadow-sm">
              <UserRound className="h-4 w-4 text-[#C8A46A]" />
              <input
                className="w-full bg-transparent text-sm text-[#1A1A1A] outline-none placeholder:text-[#AA9A90]"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter username"
                type="text"
                value={username}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#7E1F25]/70">
              Password
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-[#E8DED5] bg-[#FCFBF9] px-4 py-3 shadow-sm">
              <LockKeyhole className="h-4 w-4 text-[#C8A46A]" />
              <input
                className="w-full bg-transparent text-sm text-[#1A1A1A] outline-none placeholder:text-[#AA9A90]"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                type="password"
                value={password}
              />
            </div>
          </label>
        </div>

        {error ? <p className="mt-4 text-sm text-[#B03A44]">{error}</p> : null}

        <motion.button
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7E1F25] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(126,31,37,0.2)]"
          onClick={handleLogin}
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.985 }}
        >
          <span>Login</span>
          <ArrowRight className="h-4 w-4" />
        </motion.button>

        <p className="mt-5 text-center text-xs text-[#8C7A70]">Demo login: `user` / `1234`</p>
      </motion.div>
    </div>
  );
}

export default Login;
