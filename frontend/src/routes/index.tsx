import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
    </Routes>
  );
};

export default Routings;
