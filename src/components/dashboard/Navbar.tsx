// Navbar.tsx
import React from "react";
import {Search, Bell} from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between">
      <div className="text-sm font-semibold text-gray-400 tracking-wide">
        TUTOR'S DASHBOARD
      </div>

      <div className="relative w-64">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-full py-1 pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <Search
          size={16}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={18} className="text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
            T
          </div>
          <span className="text-sm text-gray-700">Tutor's Name</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
