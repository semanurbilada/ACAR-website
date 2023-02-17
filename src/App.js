import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./css/index.css";
import Language from "./pages/Language.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Language />} />
        {/* 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        */}
      </Routes>
    </Router>
  );
}