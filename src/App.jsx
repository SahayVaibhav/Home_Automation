import { useState } from "react";
import Login from "./pages/Login";
import AppLayout from "./AppLayout"; // your big UI file

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={setIsLoggedIn} />;
  }

  return <AppLayout onLogout={() => setIsLoggedIn(false)} />;
}

export default App;