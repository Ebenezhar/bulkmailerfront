import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Portal() {
  return (
    <div className="flex w-full min-h-screen overscroll-contain">
      <div className="flex flex-col pr-2 bg-gray-800 m-2 rounded-2xl h-screen justify-between w-60">
        <Sidebar />
      </div>
      <div className='flex-auto'>
        <Outlet />
      </div>

    </div>
  );
}

export default Portal;
