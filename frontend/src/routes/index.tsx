import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePatient from "../pages/CreatePatient";
import Home from "../pages/Home";
import Patients from "../pages/Patients";
import UpdatePatient from "../pages/UpdatePatient";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/createPatient" element={<CreatePatient />} />
      <Route path="/updatePatient" element={<UpdatePatient />} />
    </Routes>
  );
};

export default Routings;
