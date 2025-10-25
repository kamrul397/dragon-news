import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-base-200">
      <header className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </header>
      <main>
        <div className="w-11/12 mx-auto py-10">
          {/* Outlet for nested routes */}
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
