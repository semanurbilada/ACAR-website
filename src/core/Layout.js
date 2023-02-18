import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ pageContent }) {
  return (
    <div>
      <Navbar />
      {pageContent}
      <Footer />
    </div>
  );
}