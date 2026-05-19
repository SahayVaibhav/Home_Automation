import { useEffect, useState } from 'react';
import AppLayout from './AppLayout';
import BackgroundWatermark from './components/BackgroundWatermark';
import Login from './pages/Login';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F2] px-3 py-3">
      <div className="mx-auto max-w-[430px]">
        <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2.6rem] border border-white/80 bg-[linear-gradient(180deg,#fcfbf8_0%,#f6f1eb_100%)] shadow-[0_35px_100px_rgba(77,54,45,0.12)]">
          <BackgroundWatermark />
          <div className="relative z-10 min-h-[calc(100vh-2rem)]">
            {showSplash ? (
              <SplashScreen />
            ) : !isLoggedIn ? (
              <Login onLogin={setIsLoggedIn} />
            ) : (
              <AppLayout onLogout={() => setIsLoggedIn(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
