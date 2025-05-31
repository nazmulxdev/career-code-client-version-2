import React from "react";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
