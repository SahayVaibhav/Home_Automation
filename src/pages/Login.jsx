import { useState } from "react";
import logo from "../assets/logo.png";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "1234") {
      onLogin(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#F5F3EF] px-6">
      
      {/* LOGO */}
      <img src={logo} alt="Amaara Pulse" className="w-40 mb-6" />

      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-6">Amaara Pulse</h1>

      {/* INPUTS */}
      <input
        type="text"
        placeholder="Username"
        className="w-full max-w-sm p-3 mb-4 rounded-xl border"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-3 mb-6 rounded-xl border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* BUTTON */}
      <button
        onClick={handleLogin}
        className="w-full max-w-sm bg-[#7A1F1F] text-white py-3 rounded-xl"
      >
        Login
      </button>
    </div>
  );
}

export default Login;