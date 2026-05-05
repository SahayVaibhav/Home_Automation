import React, { useState } from "react";

const HomeDashboard = ({ setActiveTab }) => (
  <div className="relative w-full max-w-md bg-[#F8F5F2] min-h-[812px] shadow-2xl rounded-[3rem] overflow-hidden border-[8px] border-white">
    <header className="px-6 pt-10 pb-4 flex justify-between items-center bg-[#F8F5F2]">
      <div className="flex items-center gap-4">
        <button className="text-[#1A1A1A]">
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
        </button>
        <div className="flex flex-col">
          <button className="flex items-center gap-1 font-bold text-lg text-[#1A1A1A]">
            Amaara Villa 12
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16"><path d="m6 9 6 6 6-6" /></svg>
          </button>
          <div className="flex items-center gap-1 text-xs text-[#6B7280]">
            <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Kasauli, Himachal Pradesh
          </div>
        </div>
      </div>
      <button onClick={() => setActiveTab('notifications')} className="relative text-[#1A1A1A]">
        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
      </button>
    </header>
    <main className="px-6 pb-24 overflow-y-auto no-scrollbar max-h-[700px]">
      <section className="mt-4 relative rounded-3xl overflow-hidden h-44 shadow-lg">
        <img alt="Nature background" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr6hasJ0D7qXKAXRGtAtb2Hnj7BG0EejU2m7Af2ja3Im9yElL5qxccUlgAQWOH5RrzlRmehfznNBB6X65kX1V6V-1oajMw4ToabeZRVhF0Dhq0qUqtZjc9VlI4AA7IIbDWllINh04-qnubCINVs6dcs20Ue5jYTnbxrtWatZuG1LQCoB8kWY0ZP9yKGMFnGKHbqPzv5G_oipL5ZAkEtMpVU04Bbj98XDU8A2j8bxJzfHBo9Zh_1AKFzib42AEbbCsrb5U5Hx8Vc4A" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 p-6 flex items-start gap-4 text-white">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 11.5A2.5 2.5 0 1 1 12 14a2.5 2.5 0 0 1 0-2.5zm0-3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z" /></svg>
            <div>
              <div className="text-4xl font-bold">18°C</div>
              <div className="text-sm font-medium opacity-90">Partly Cloudy</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 bg-white rounded-3xl p-2 flex items-center shadow-sm">
        <button className="flex-1 py-3 px-4 bg-[#7A1F1F] text-white rounded-[2rem] font-semibold text-sm shadow-md">Home</button>
        <button className="flex-1 py-3 px-4 text-[#6B7280] font-medium text-sm">Away</button>
        <button className="flex-1 py-3 px-4 text-[#6B7280] font-medium text-sm">Guest</button>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-[#1A1A1A]">Quick Actions</h2>
          <button className="text-[#7A1F1F] text-sm font-semibold">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
              <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 6v6H9V6h6zm0-2H9C7.89 4 7 4.89 7 6v6c0 1.1.89 2 2 2h6c1.1 0 2-.89 2-2V6c0-1.1-.89-2-2-2zM9 18h6v2H9v-2z" /></svg>
            </div>
            <span className="text-[10px] font-medium text-[#6B7280] text-center leading-tight">All Lights Off</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
              <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="11" rx="2" ry="2" width="18" x="3" y="11" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            </div>
            <span className="text-[10px] font-medium text-[#6B7280] text-center leading-tight">Lock All Doors</span>
          </div>
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
              <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="6" width="7" x="3" y="14" /><rect height="6" width="7" x="14" y="14" /><path d="M10 16h4" /></svg>
            </div>
            <span className="text-[10px] font-medium text-[#6B7280] text-center leading-tight">Open Gate</span>
          </div>
          <div onClick={() => setActiveTab('sos')} className="flex flex-col items-center gap-2 cursor-pointer">
            <div className="w-full aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm border border-red-100">
              <svg className="w-6 h-6 text-[#7A1F1F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 9v4" /><path d="M12 17h.01" /><path d="m4.93 4.93 14.14 14.14" /><path d="m19.07 4.93-14.14 14.14" /></svg>
            </div>
            <span className="text-[10px] font-bold text-[#7A1F1F] text-center leading-tight uppercase">Sos</span>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-[#1A1A1A]">Rooms</h2>
          <button className="text-[#7A1F1F] text-sm font-semibold">View All</button>
        </div>
        <div className="space-y-4">
          <div onClick={() => setActiveTab('room')} className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 6v6H9V6h6zm0-2H9C7.89 4 7 4.89 7 6v6c0 1.1.89 2 2 2h6c1.1 0 2-.89 2-2V6c0-1.1-.89-2-2-2zM9 18h6v2H9v-2z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A]">Living Room</h3>
                <p className="text-xs text-[#6B7280] font-medium">2 Lights On</p>
              </div>
            </div>
            <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <span className="text-xs font-bold text-[#1A1A1A]">24°C</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F8F5F2] rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 20h20" /><path d="M7 14V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A]">Master Bedroom</h3>
                <p className="text-xs text-[#6B7280] font-medium">All Off</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#1A1A1A]">22°C</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
          <div className="bg-white p-5 rounded-3xl flex items-center justify-between shadow-sm border border-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" /><path d="M12 8v4l3 3" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A]">Kitchen</h3>
                <p className="text-xs text-[#6B7280] font-medium">1 Light On</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#1A1A1A]">23°C</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input defaultChecked className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </main>
    <nav className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-t border-gray-100 rounded-b-[2.5rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 text-[#7A1F1F]">
        <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
        <span className="text-[10px] font-bold">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1 text-[#6B7280]">
        <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><rect height="11" rx="2" ry="2" width="18" x="3" y="11" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
        <span className="text-[10px] font-medium">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 text-[#6B7280]">
        <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        <span className="text-[10px] font-medium">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 text-[#6B7280]">
        <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        <span className="text-[10px] font-medium">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 text-[#6B7280]">
        <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </nav>
  </div>
);

const SecurityScreen = ({ setActiveTab }) => (
  <main className="w-full max-w-md bg-[#F8F9FA] min-h-[812px] shadow-2xl relative flex flex-col rounded-[3rem] overflow-hidden border-[8px] border-white">
    <header className="pt-12 pb-4 px-6 flex items-center justify-between sticky top-0 bg-[#F8F9FA] z-10">
      <button onClick={() => setActiveTab('home')} className="p-1">
        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <h1 className="text-lg font-semibold text-gray-800">Security</h1>
      <button onClick={() => setActiveTab('notifications')} className="p-1">
        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </button>
    </header>
    <div className="flex-1 overflow-y-auto px-6 pb-24 no-scrollbar">
      <section className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-800">Live Cameras</h2>
          <button className="text-xs font-medium text-[#8B1D1D]">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <img alt="Main Gate Camera" className="w-full h-24 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2iRBBENrU2GKOw-rHRoR_KnVyXvDLWbu3xSH-rXFczIKZHiIMul9jqXR0LM6gkJ0t1n_bbXf8V5wOjgOBKBljDulpuK-IslU3h0pCqLqK82Kz8fyF2eDBLUCRkFArmjuVwGL8Q8zmX_jP81usiY_LuGEDS0ks7yuRdq_-y8VzOTXqwumxUqjpafNjyi5G-AvRMqAiWkhAIoIA5zn3sukIavznfsG4jcyqjaAJUVruI1gTrBjdFaYorKl4Tg6ocHR2wj-l96nAGMM" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-1 flex justify-between items-center">
              <span className="text-[10px] text-white font-medium">Main Gate</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <img alt="Driveway Camera" className="w-full h-24 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Qpx5yu3W5HPguJyVvYj0VFFfpkZ9gyw7XzEm8wouZqvAHqlbZ6ZNaaQHNJ_PGC4donEztox2bC99j8nGpyqHNeAiX35clWlTBy4Gma9AZx4ebH1fh5QQn5QgmFdfOLDc-VkLxiv8Xio6GjTUrGXXNsKrk-OOmeiOqEKKOTJr3mWToNQb7141wQMcE10DzBxjRigE6ASlTJ22nRuQXDOxyGn3-oczsHneDGSg-vlAidFlIBotOJXKqxiL7kYM4DSsMCEGFKuxBlc" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-1 flex justify-between items-center">
              <span className="text-[10px] text-white font-medium">Driveway</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <img alt="Living Room Camera" className="w-full h-24 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYvFDWXY_dMFShH26OuHDrjRfKL8gHMhJQlz9FokXj3Ai-bV5X4535zgXeqMlztjQDaee3Ji76-rFCPQzNQ-3ViTJMmKv0157GZZMP5WsSHsolQwimhBuN0Itrkq8qz-4UBG8rbZaijcf-wvQ8SU-jgAUthDteTgxcZemr8E8WwczQTKHyr68L6ZL9oXi3f2OQNzlig2CYUjjMzoI0tl6KhVYDvR4cBzaJ1xqkv_utRSpB78hDOVaGHlr3XTcZh30tbr8iyG5NwHc" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-1 flex justify-between items-center">
              <span className="text-[10px] text-white font-medium">Living Room</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-sm">
            <img alt="Backyard Camera" className="w-full h-24 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8VR2VZ0wks8bNIpm9-qjJ5ps71pGA40BogzpT9nVWrONwK-W2b7ivren0kNMR7m1qTOB7KOkjrx5D0F5g-ZtNqH6zAbtMUCEiv7d--YzT8ilV7bg9umGXBk-fNHmqLXDPMcmVxqp48uzMGeqpNl9-0KCsqrruOktGEY0_kz6oaYOL5JSGci6MCaM5RjZq9jDulVynmdtSuqb7qvPrGEABFkl10n6QXOWbPT8ww9jcBpH42xuFwK3LF3P6x7LAtCLCiifpVpzmMIc" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-1 flex justify-between items-center">
              <span className="text-[10px] text-white font-medium">Backyard</span>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8 flex gap-4">
        <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 flex items-center shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mr-3">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <p className="text-[11px] text-gray-500 font-medium">Gate</p>
            <p className="text-sm font-bold text-green-600">Open</p>
          </div>
        </div>
        <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 flex items-center shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
            <svg className="h-6 w-6 text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <div>
            <p className="text-[11px] text-gray-500 font-medium">Main Door</p>
            <p className="text-sm font-bold text-[#8B1D1D]">Locked</p>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-800">Activity Log</h2>
          <button className="text-xs font-medium text-[#8B1D1D]">View All</button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">Main Gate Opened</p>
              <p className="text-[10px] text-gray-400">Today, 07:45 PM</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">Guest Entry</p>
              <p className="text-[10px] text-gray-400">Today, 06:20 PM</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">Main Door Locked</p>
              <p className="text-[10px] text-gray-400">Today, 05:10 PM</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-gray-800">Security Motion Detected</p>
              <p className="text-[10px] text-gray-400">Today, 02:35 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center rounded-b-[2.5rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 group">
        <svg className="h-5 w-5 text-gray-400 group-hover:text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#8B1D1D]">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1">
        <svg className="h-5 w-5 text-[#8B1D1D]" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm-3.75 5.25a3.75 3.75 0 117.5 0v3h-7.5v-3z" fillRule="evenodd" /></svg>
        <span className="text-[10px] font-bold text-[#8B1D1D]">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 group">
        <svg className="h-5 w-5 text-gray-400 group-hover:text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" /></svg>
        <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#8B1D1D]">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 group">
        <svg className="h-5 w-5 text-gray-400 group-hover:text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#8B1D1D]">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 group">
        <svg className="h-5 w-5 text-gray-400 group-hover:text-[#8B1D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#8B1D1D]">Profile</span>
      </button>
    </nav>
  </main>
);

const ScenesScreen = ({ setActiveTab }) => (
  <div className="w-[375px] h-[812px] bg-[#F9FAFB] relative overflow-y-auto shadow-[0_20px_25px_-5px_rgb(0,0,0,0.1),0_8px_10px_-6px_rgb(0,0,0,0.1)] flex flex-col rounded-[2.5rem] border-[8px] border-white no-scrollbar">
    <header className="w-full px-6 pt-4 flex justify-between items-center text-xs font-semibold">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21l-12-18h24z" /></svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h.5l5 5-1.5 1.5-5-5v-.5l-2.2-2.2C10.5 14.5 8 15 5.5 14.5L2 18h16.5l-3-4z" /></svg>
        <svg className="w-6 h-3" fill="currentColor" viewBox="0 0 24 24"><rect fill="none" height="10" rx="2" stroke="currentColor" strokeWidth="2" width="20" x="2" y="7" /><rect height="6" rx="1" width="4" x="4" y="9" /></svg>
      </div>
    </header>
    <div className="flex items-center px-6 py-4">
      <button onClick={() => setActiveTab('home')} className="p-1 -ml-1 text-gray-800">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <h1 className="flex-1 text-center text-lg font-bold text-gray-900 pr-5">Scenes</h1>
    </div>
    <main className="flex-1 px-6 pb-24 overflow-y-auto no-scrollbar">
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Preset Scenes</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Leave Home</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Turn off all lights, lock doors, AC off &amp; security on</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Welcome Home</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Lights on, AC on, curtains open</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Movie Mode</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Lights dim, curtains close, TV &amp; sound on</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100 cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">Good Night</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Lights off, AC off, doors locked</p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-8">
        <button className="w-full bg-[#8B1D21] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-red-900/20 active:scale-95 transition-transform">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
          <span>Create New Scene</span>
        </button>
      </div>
    </main>
    <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center rounded-b-[2rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-[10px] text-gray-400">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <span className="text-[10px] text-gray-400">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1">
        <div className="relative">
          <svg className="h-6 w-6 text-[#8B1D21]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.383-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
        </div>
        <span className="text-[10px] font-bold text-[#8B1D21]">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="text-[10px] text-gray-400">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[10px] text-gray-400">Profile</span>
      </button>
    </nav>
  </div>
);

const CommunityScreen = ({ setActiveTab }) => (
  <div className="w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative border-[8px] border-white">
    <header className="px-8 pt-4 pb-2 flex justify-between items-center text-sm font-semibold">
      <span>9:41</span>
      <div className="flex gap-1.5 items-center">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 11h22L12 21z" /></svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 5h-2v14h2V5z M17 9h-2v10h2V9z M21 13h-2v6h2v-6z M9 11H7v8h2v-8z M5 15H3v4h2v-4z" /></svg>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10H8V8h8v8z" /></svg>
      </div>
    </header>
    <nav className="px-6 py-4 flex items-center justify-between">
      <button onClick={() => setActiveTab('home')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <h1 className="text-lg font-bold text-gray-900">Community</h1>
      <div className="w-9"></div>
    </nav>
    <main className="flex-1 px-6 overflow-y-auto pb-24 no-scrollbar">
      <section className="mt-4 bg-white rounded-2xl p-5 card-shadow border border-gray-50">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="#991B1B" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.946 5.946 0 00-.941 3.197m0 0a5.992 5.992 0 01-1.89-1.133L6 18.72zm12-12.026a3 3 0 11-6 0 3 3 0 016 0zm-3 9a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex-1">
            <h2 className="text-[17px] font-bold text-gray-900">Visitor Management</h2>
            <p className="text-[13px] text-gray-500 leading-tight mt-1">Pre-approve and manage your visitors</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-[#8B1A1A] text-white py-3 px-2 rounded-xl text-sm font-semibold hover:bg-opacity-90 transition-colors">Approve Visitor</button>
          <button className="border border-[#8B1A1A] text-[#8B1A1A] py-3 px-2 rounded-xl text-sm font-semibold hover:bg-rose-50 transition-colors">Generate QR</button>
        </div>
      </section>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Staff Management</h3>
              <p className="text-xs text-gray-400 mt-0.5">View staff entry logs</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.867 19.125h.008v.008h-.008v-.008z" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Maintenance Requests</h3>
              <p className="text-xs text-gray-400 mt-0.5">Raise mintenance requests and track status</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <div className="flex items-center justify-between py-4 border-b border-gray-100 cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.357.205c-.466.269-1.054.047-1.246-.467L9.75 15.111m.59 0c.801.057 1.612.086 2.427.086 1.442 0 2.842-.091 4.214-.267m0 0a19.255 19.255 0 013.015-.077 1.625 1.625 0 011.583 1.583V8.066c0-.853-.61-1.579-1.454-1.624-1.282-.068-2.583-.112-3.899-.13a12.06 12.06 0 00-3.244.313m0 0a11.992 11.992 0 01-2.427.086m0 0a12.11 12.11 0 01-3.244-.313m0 0a19.292 19.292 0 01-3.015.077 1.625 1.625 0 01-1.583-1.583V15.93c0 .853.61 1.579 1.454 1.624" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Announcements</h3>
              <p className="text-xs text-gray-400 mt-0.5">Stay updated with community updates</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </main>
    <footer className="absolute bottom-0 w-full bg-white border-t border-gray-100 py-3 px-6 flex justify-between items-center rounded-b-[30px]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] font-medium">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.248 3.232 9.74 7.784 11.578a11.946 11.946 0 001.216.424l.033.008.034-.008a11.947 11.947 0 001.216-.424C17.768 19.5 21 15.008 21 9.744c0-1.29-.204-2.532-.582-3.699A11.959 11.959 0 0112 2.714z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] font-medium">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] font-medium">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 text-[#8B1A1A]">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122z" /></svg>
        <span className="text-[10px] font-bold">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </footer>
  </div>
);

const ProfileScreen = ({ setActiveTab, onLogout }) => (
  <main className="w-full max-w-[390px] min-h-[844px] bg-white relative flex flex-col overflow-hidden shadow-2xl border border-gray-100 rounded-[2.5rem]">
    <div className="h-11 w-full px-6 flex justify-between items-center text-sm font-semibold">
      <span>9:41</span>
      <div className="flex gap-1.5 items-center">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11h2v3H2v-3zm4-2h2v5H6V9zm4-3h2v8h-2V6zm4-3h2v11h-2V3z" /></svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 8V5a1 1 0 011-1h14a1 1 0 011 1v3a.997.997 0 01-.293.707zM16 6H4v1.586l6 6 6-6V6z" fillRule="evenodd" /></svg>
      </div>
    </div>
    <header className="bg-[#8B2323] pt-4 pb-12 px-6 rounded-b-[40px] relative">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img alt="Arjun Mehta" className="w-16 h-16 rounded-full border-2 border-white/30 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOJZRxR2fL7YQIfJkR5IBbzi1RK18FtXTj8Udx7qR9jiLX_b0TQrQMyomgjGNgpXgPOwT2IM6T74AdR9rASepYgnZPTToqPtivtF7pPg3hv0PCxejCxt_XbTYYuG16RgpkP-iFoaP-OJqqQ7X6vN92zqkoXbqY7OMKxu1IHeq3LOYAfZ7M1UYXEk4tA0X0qtPO3fKcz4mCsw5wwOqxl_lGUsSRi89DwxfIGrZhQflMpeJCv7Cfsyo7Je06XQCm-wvtTWa1EmjqGxw" />
          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
            <svg className="w-3 h-3 text-[#8B2323]" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-xl font-bold">Arjun Mehta</h1>
          <p className="text-sm opacity-80">Owner</p>
        </div>
      </div>
    </header>
    <div className="px-6 -mt-6 flex-1 overflow-y-auto pb-24 no-scrollbar">
      <section className="mt-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Account &amp; Access</h2>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 shadow-sm">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">Family Members</p>
                <p className="text-xs text-gray-400">Manage family access</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">Guest Access</p>
                <p className="text-xs text-gray-400">Manage guest permissions</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <div className="w-full flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">Caretaker Mode</p>
                <p className="text-xs text-gray-400">Limited access for caretakers</p>
              </div>
            </div>
            <div aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 focus:outline-none" role="switch">
              <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Settings</h2>
        <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 shadow-sm">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">Device Management</p>
                <p className="text-xs text-gray-400">Add or manage devices</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">Automation</p>
                <p className="text-xs text-gray-400">Manage routines and schedules</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <button onClick={() => setActiveTab('notifications')} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <div className="text-left">
                <p className="text-[15px] font-semibold text-gray-800">App Settings</p>
                <p className="text-xs text-gray-400">Notifications, theme &amp; more</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
        </div>
      </section>
      <button onClick={onLogout} className="w-full mt-8 py-4 text-[#8B2323] font-bold text-[15px] hover:bg-red-50 rounded-xl transition-colors">
        Logout
      </button>
    </div>
    <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center rounded-b-[2.5rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px]">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px]">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px]">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px]">Community</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-[#8B2323]">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" /></svg>
        <span className="text-[10px] font-bold">Profile</span>
      </button>
    </nav>
  </main>
);

const SOSScreen = ({ setActiveTab }) => (
  <div className="w-[375px] h-[812px] bg-white overflow-hidden relative rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col border-[8px] border-white">
    <div className="px-8 pt-4 pb-2 flex justify-between items-center text-xs font-semibold">
      <span>9:41</span>
      <div className="flex gap-1 items-center">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21L1 11h22L12 21z" /></svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 5h-2v14h2V5z M17 9h-2v10h2V9z M21 13h-2v6h2v-6z M9 11H7v8h2v-8z M5 15H3v4h2v-4z" /></svg>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 6H7c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10H8V8h8v8z" /></svg>
      </div>
    </div>
    <header className="px-6 py-4 flex items-center justify-between">
      <button onClick={() => setActiveTab('home')} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
        <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <h1 className="text-lg font-bold text-gray-800">Emergency</h1>
      <div className="w-8"></div>
    </header>
    <main className="flex-1 overflow-y-auto px-6 no-scrollbar">
      <section className="flex flex-col items-center justify-center py-12">
        <div className="relative flex items-center justify-center w-64 h-64">
          <div className="absolute inset-0 border-2 border-[#C1272D] border-opacity-10 rounded-full"></div>
          <div className="absolute inset-4 border border-[#C1272D] border-opacity-5 rounded-full"></div>
          <button className="relative w-48 h-48 bg-[#C1272D] rounded-full flex items-center justify-center sos-shadow pulse-effect active:scale-95 transition-transform">
            <div className="absolute inset-2 border-4 border-white border-opacity-20 rounded-full"></div>
            <span className="text-white text-5xl font-black tracking-widest">SOS</span>
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-8 text-center max-w-[200px] leading-relaxed">
          Press and hold to send emergency alert
        </p>
      </section>
      <section className="mt-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-bold text-gray-800">Quick Actions</h2>
        </div>
        <div className="space-y-3">
          <button className="w-full flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-[#C1272D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-800">Call Security</h3>
              <p className="text-xs text-gray-400">Connect to security desk</p>
            </div>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <button className="w-full flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-800">Call Hospital</h3>
              <p className="text-xs text-gray-400">Get medical assistance</p>
            </div>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
          <button className="w-full flex items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:bg-gray-50 transition-colors text-left">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-800">Call Police</h3>
              <p className="text-xs text-gray-400">Connect to local police</p>
            </div>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </button>
        </div>
        <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start">
          <div className="w-8 h-8 flex-shrink-0 bg-red-100 rounded-lg flex items-center justify-center mr-3">
            <svg className="h-4 w-4 text-[#C1272D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <p className="text-[11px] text-gray-600 leading-normal">
            Alerts will be sent to your family and security team.
          </p>
        </div>
      </section>
    </main>
    <footer className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-4 pb-4 rounded-b-[40px]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 group">
        <svg className="w-6 h-6 text-gray-300 group-hover:text-[#802020]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] text-gray-400 group-hover:text-[#802020]">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1 group">
        <svg className="w-6 h-6 text-[#C1272D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.955 11.955 0 013.598 6 11.99 11.99 0 003 9.744c0 5.248 3.232 9.74 7.784 11.578a11.946 11.946 0 001.216.424l.033.008.034-.008a11.947 11.947 0 001.216-.424C17.768 19.5 21 15.008 21 9.744c0-1.29-.204-2.532-.582-3.699A11.959 11.959 0 0112 2.714z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] text-[#C1272D] font-bold">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 group">
        <svg className="w-6 h-6 text-gray-300 group-hover:text-[#802020]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] text-gray-400 group-hover:text-[#802020]">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 group">
        <svg className="w-6 h-6 text-gray-300 group-hover:text-[#802020]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] text-gray-400 group-hover:text-[#802020]">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 group">
        <svg className="w-6 h-6 text-gray-300 group-hover:text-[#802020]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[10px] text-gray-400 group-hover:text-[#802020]">Profile</span>
      </button>
    </footer>
  </div>
);

const NotificationsScreen = ({ setActiveTab }) => (
  <main className="w-[375px] h-[812px] mx-auto bg-[#F8F4F1] flex flex-col relative shadow-2xl overflow-hidden rounded-[2.5rem] border-[8px] border-white">
    <header className="flex justify-between items-center px-8 pt-4 pb-2 text-[13px] font-semibold">
      <div>9:41</div>
      <div className="flex items-center space-x-1.5">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" /></svg>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2.3L5 15.3l1.4 1.2L13 4.1l6.6 12.4 1.4-1.2L13 2.3z" /></svg>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 5H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 11h-2v-3h-2v3H8v-5h2v-3h2v3h2v5z" /></svg>
      </div>
    </header>
    <nav className="flex items-center px-6 py-4">
      <button onClick={() => setActiveTab('home')} className="p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <h1 className="flex-1 text-center text-lg font-semibold mr-8">Notifications</h1>
    </nav>
    <section className="px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
      <button className="px-6 py-1.5 bg-[#8B2323] text-white text-sm font-medium rounded-full shadow-sm">All</button>
      <button className="px-6 py-1.5 bg-white border border-[#E5E1DE] text-[#717171] text-sm font-medium rounded-full">Security</button>
      <button className="px-6 py-1.5 bg-white border border-[#E5E1DE] text-[#717171] text-sm font-medium rounded-full">Home</button>
      <button className="px-6 py-1.5 bg-white border border-[#E5E1DE] text-[#717171] text-sm font-medium rounded-full">Community</button>
    </section>
    <section className="flex-1 px-6 space-y-3 pb-24 overflow-y-auto no-scrollbar">
      <article className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-white hover:border-[#E5E1DE] transition-all cursor-pointer shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
          <svg className="h-5 w-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Main Gate Opened</h3>
          <p className="text-xs text-[#717171]">Today, 07:45 PM</p>
        </div>
        <svg className="h-4 w-4 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
      </article>
      <article className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-white hover:border-[#E5E1DE] transition-all cursor-pointer shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
          <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Motion Detected</h3>
          <p className="text-xs text-[#717171]">Driveway Camera</p>
          <p className="text-[10px] text-[#717171] mt-0.5 font-medium">Today, 06:30 PM</p>
        </div>
        <svg className="h-4 w-4 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
      </article>
      <article className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-white hover:border-[#E5E1DE] transition-all cursor-pointer shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Guest Entry Approved</h3>
          <p className="text-xs text-[#717171]">Ramesh Kumar</p>
          <p className="text-[10px] text-[#717171] mt-0.5 font-medium">Today, 05:20 PM</p>
        </div>
        <svg className="h-4 w-4 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
      </article>
      <article className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-white hover:border-[#E5E1DE] transition-all cursor-pointer shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Maintenance Update</h3>
          <p className="text-xs text-[#717171]">Water supply issue resolved</p>
          <p className="text-[10px] text-[#717171] mt-0.5 font-medium">Today, 04:15 PM</p>
        </div>
        <svg className="h-4 w-4 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
      </article>
      <article className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-white hover:border-[#E5E1DE] transition-all cursor-pointer shadow-sm">
        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm">Device Alert</h3>
          <p className="text-xs text-[#717171]">Living Room AC is offline</p>
          <p className="text-[10px] text-[#717171] mt-0.5 font-medium">Today, 01:10 PM</p>
        </div>
        <svg className="h-4 w-4 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
      </article>
    </section>
    <footer className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#E5E1DE] px-4 py-3 pb-6 flex justify-between items-center z-10 rounded-b-[2.5rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center gap-1 group">
        <svg className="h-6 w-6 text-[#717171] group-hover:text-[#8B2323] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px] font-medium text-[#717171] group-hover:text-[#8B2323]">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center gap-1 group">
        <svg className="h-6 w-6 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px] font-medium text-[#717171]">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center gap-1 group">
        <div className="relative">
          <svg className="h-6 w-6 text-[#8B2323]" fill="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#8B2323] rounded-full ring-2 ring-white"></span>
        </div>
        <span className="text-[10px] font-bold text-[#8B2323]">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center gap-1 group">
        <svg className="h-6 w-6 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px] font-medium text-[#717171]">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center gap-1 group">
        <svg className="h-6 w-6 text-[#717171]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
        <span className="text-[10px] font-medium text-[#717171]">Profile</span>
      </button>
    </footer>
  </main>
);

const RoomControlScreen = ({ setActiveTab }) => (
  <main className="w-[375px] h-[812px] mx-auto bg-[#F8F5F2] flex flex-col shadow-2xl relative rounded-[2.5rem] border-[8px] border-white overflow-hidden">
    <header className="flex items-center justify-between px-6 pt-12 pb-4 sticky top-0 bg-[#F8F5F2] z-50">
      <button onClick={() => setActiveTab('home')} className="p-2">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <h1 className="text-lg font-semibold">Living Room</h1>
      <button onClick={() => setActiveTab('notifications')} className="p-2">
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </button>
    </header>
    <div className="flex-1 px-6 pb-24 overflow-y-auto no-scrollbar">
      <section className="grid grid-cols-4 gap-3 mb-8">
        <div className="bg-[#8B2323] text-white rounded-xl p-3 flex flex-col items-center justify-center space-y-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          <span className="text-[10px] font-medium">Lights</span>
        </div>
        <div className="bg-white text-gray-400 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center space-y-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 5a2 2 0 012-2h12a2 2 0 012 2M4 5v14a2 2 0 002 2h12a2 2 0 002-2V5" /></svg>
          <span className="text-[10px] font-medium">Curtains</span>
        </div>
        <div className="bg-white text-gray-400 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center space-y-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
          <span className="text-[10px] font-medium">Climate</span>
        </div>
        <div className="bg-white text-gray-400 rounded-xl p-3 border border-gray-100 flex flex-col items-center justify-center space-y-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          <span className="text-[10px] font-medium">Devices</span>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Lights</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input defaultChecked className="sr-only peer" type="checkbox" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
        <div className="mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Brightness</span>
            <span>75%</span>
          </div>
          <input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-slider" type="range" defaultValue="75" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Warm</button>
          <button className="py-2 text-xs rounded-lg bg-[#8B2323] text-white">Bright</button>
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Night</button>
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Off</button>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">Curtains</h3>
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h16M4 5a2 2 0 012-2h12a2 2 0 012 2M4 5v14a2 2 0 002 2h12a2 2 0 002-2V5" /></svg>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <span className="text-xs text-gray-500 mb-2 block">60% Open</span>
            <input className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer custom-slider" type="range" defaultValue="60" />
          </div>
          <div className="flex space-x-2">
            <button className="p-2"><svg className="h-5 w-5 fill-current text-gray-600" viewBox="0 0 20 20"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0s-4.287-4.084-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z" /></svg></button>
            <button className="p-2"><svg className="h-5 w-5 fill-current text-gray-600" viewBox="0 0 20 20"><path clipRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" fillRule="evenodd" /></svg></button>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-6 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-gray-800">AC</h3>
          <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
            <button className="px-4 py-2 text-gray-600 border-r border-gray-200">−</button>
            <button className="px-4 py-2 text-gray-600">+</button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-6 text-gray-600">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <span className="font-semibold">24°C</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button className="py-2 text-xs rounded-lg bg-[#8B2323] text-white">Cool</button>
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Heat</button>
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Auto</button>
          <button className="py-2 text-xs rounded-lg bg-gray-100 text-gray-600">Fan</button>
        </div>
      </section>
      <section className="bg-white rounded-3xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-6">Devices</h3>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="text-sm font-medium text-gray-700">TV</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <span className="text-sm font-medium text-gray-700">Floor Lamp</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
              <span className="text-sm font-medium text-gray-700">Soundbar</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>
      </section>
    </div>
    <nav className="absolute bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-100 flex justify-around items-center py-4 px-2 z-50 rounded-b-[2.5rem]">
      <button onClick={() => setActiveTab('home')} className="flex flex-col items-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <span className="text-[10px] text-gray-400 mt-1">Home</span>
      </button>
      <button onClick={() => setActiveTab('security')} className="flex flex-col items-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        <span className="text-[10px] text-gray-400 mt-1">Security</span>
      </button>
      <button onClick={() => setActiveTab('scenes')} className="flex flex-col items-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
        <span className="text-[10px] text-gray-400 mt-1">Scenes</span>
      </button>
      <button onClick={() => setActiveTab('community')} className="flex flex-col items-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="text-[10px] text-gray-400 mt-1">Community</span>
      </button>
      <button onClick={() => setActiveTab('profile')} className="flex flex-col items-center">
        <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[10px] text-gray-400 mt-1">Profile</span>
      </button>
    </nav>
  </main>
);

export default function AppLayout({ onLogout }) {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center font-sans">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .pulse-effect::before {
          content: ''; position: absolute; width: 140%; height: 140%; border-radius: 50%;
          background-color: #C1272D; opacity: 0.2;
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite; z-index: -1;
        }
        @keyframes pulse-ring {
          0% { transform: scale(.8); opacity: 0.5; }
          80%, 100% { opacity: 0; }
        }
        .sos-shadow { box-shadow: 0 10px 25px -5px rgba(193, 39, 45, 0.4); }
        .card-shadow { box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); }
        .custom-slider::-webkit-slider-thumb {
          appearance: none; width: 16px; height: 16px; background: #8B2323; border-radius: 50%; cursor: pointer;
        }
      `}</style>
      {activeTab === 'home' && <HomeDashboard setActiveTab={setActiveTab} />}
      {activeTab === 'security' && <SecurityScreen setActiveTab={setActiveTab} />}
      {activeTab === 'scenes' && <ScenesScreen setActiveTab={setActiveTab} />}
      {activeTab === 'community' && <CommunityScreen setActiveTab={setActiveTab} />}
      {activeTab === 'profile' && <ProfileScreen setActiveTab={setActiveTab} onLogout={onLogout} />}
      {activeTab === 'sos' && <SOSScreen setActiveTab={setActiveTab} />}
      {activeTab === 'notifications' && <NotificationsScreen setActiveTab={setActiveTab} />}
      {activeTab === 'room' && <RoomControlScreen setActiveTab={setActiveTab} />}
    </div>
  );
}