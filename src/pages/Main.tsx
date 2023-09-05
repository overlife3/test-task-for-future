import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../layouts/Header/Header";

function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;
