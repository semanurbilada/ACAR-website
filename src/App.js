import { useState, createContext } from "react";
import {
  Route, 
  Routes,
  HashRouter as Router 
} from "react-router-dom";

import Layout from "./core/Layout";
import Language from "./pages/Language.js";

import Home from "./pages/Home.js";
import Places from "./pages/Places.js";
import Products from "./pages/Products";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

export const StateContext = createContext({
  language: null,
});

export default function App() {
  const [ language, setLanguage ] = useState("TR");

  return (
    <div className="bg-gray-300">
      <Router>
        <StateContext.Provider 
          value={{ language, setLanguage }}
        >
          <Routes>
            <Route path="/" element={<Language />} />
            <Route path="/home" element={<Layout pageContent={<Home />} />} />
            <Route path="/places" element={<Layout pageContent={<Places />} />} />
            <Route path="/products" element={<Layout pageContent={<Products />} />} />
            <Route path="/about" element={<Layout pageContent={<About />} />} />
            <Route path="/contact" element={<Layout pageContent={<Contact />} />} />
          </Routes>
        </StateContext.Provider>
      </Router>
    </div>
  );
}