import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Routings;
