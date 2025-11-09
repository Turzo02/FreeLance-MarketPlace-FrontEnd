import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
