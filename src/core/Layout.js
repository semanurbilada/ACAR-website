import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PopUp from "../components/PopUp";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FixedButtons from "../components/FixedButtons";

export default function Layout({ pageContent }) {
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  return (
    <main>
      <Navbar />
      { location === "/home" && <PopUp/> }
      {pageContent}
      <FixedButtons />
      <Footer />
    </main>
  );
}