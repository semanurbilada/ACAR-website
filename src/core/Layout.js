import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ pageContent: PageContent }) => (
  <div>
    <Navbar />
    <PageContent />
    <Footer />
  </div>
);

export default Layout;