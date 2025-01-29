import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Contact from "./components/Contact";
import Spinner from "react-bootstrap/Spinner";
import "./styles/GlobalStyles.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutUs />
          <OurServices />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
