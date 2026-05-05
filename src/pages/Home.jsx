import { useState } from "react";
import SosPage from "./SosPage";

function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#F5F3EF] pb-16">

      {/* HOME DASHBOARD */}
      {activeTab === "home" && (
        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#7A1F1F]">
            Amaara Pulse
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome to your smart home dashboard
          </p>

          {/* Example quick actions */}
          <div className="mt-6 space-y-3">
            <button className="w-full bg-white p-4 rounded-xl shadow">
              All Lights Off
            </button>

            <button className="w-full bg-white p-4 rounded-xl shadow">
              Open Gate
            </button>
          </div>
        </div>
      )}

      {/* SOS PAGE */}
      {activeTab === "sos" && (
        <SosPage onResolve={() => setActiveTab("home")} />
      )}

      {/* BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-4 border-t">
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("sos")}>SOS</button>
      </div>

    </div>
  );
}

export default Home;