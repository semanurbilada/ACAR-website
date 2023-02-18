import Footer from "../components/Navbar";
import Navbar from "../components/Footer";

export default function Layout({ pageContent }) {
  return (
    <div>
      <Navbar />
      {pageContent}
      <Footer />
    </div>
  );
}