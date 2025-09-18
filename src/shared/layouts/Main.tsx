import React from "react";
import SidebarComp from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed width) */}
      <SidebarComp />

      {/* Main content (takes remaining space) */}
      <main className="flex-1 bg-gray-100 overflow-y-auto p-4">
        {/* Render the child route */}
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
