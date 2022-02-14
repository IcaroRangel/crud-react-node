import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePatient from "../pages/CreatePatient";
import Home from "../pages/Home";
import Patients from "../pages/Patients";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/createPatient" element={<CreatePatient />} />
    </Routes>
  );
};

export default Routings;
