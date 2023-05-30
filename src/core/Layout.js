import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FixedButtons from "../components/FixedButtons";

export default function Layout({ pageContent }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location]);

  return (
    <section>
      <Navbar />
      {pageContent}
      <FixedButtons />
      <Footer />
    </section>
  );
}