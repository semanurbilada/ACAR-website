import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FixedButtons from "../components/FixedButtons";

export default function Layout({ pageContent }) {
  return (
    <div>
      <Navbar />
      {pageContent}
      <FixedButtons />
      <Footer />
    </div>
  );
}