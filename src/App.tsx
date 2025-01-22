import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <OurServices />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
