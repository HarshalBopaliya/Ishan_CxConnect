import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed width) */}
      <Sidebar />

      {/* Main content (takes remaining space) */}
      <main className="flex-1 bg-gray-100 overflow-y-auto p-4">
        {/* Render the child route */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
