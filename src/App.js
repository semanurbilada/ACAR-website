import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/index.css";
import Layout from "./core/Layout.js";
import Default from "./pages/Default.js";
//import TR from "./pages/TR.js";
//import EN from "./pages/EN.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Default />} />
        {/* 
        <Route path="/tr" element={<Layout pageContent={<TR />} />} />
        <Route path="/en" element={<Layout pageContent={<EN />} />} />
        */}
      </Routes>
    </Router>
  );
}