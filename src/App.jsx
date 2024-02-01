import React from "react";
import NavigationBar from "./Components/NavigationBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ServiceAndPricing from "./Pages/ServiceAndPricing";
import { About } from "./Pages/About";
import BookNow from "./Pages/BookNow";
import Banner from "./Components/Banner";
import Aside from "./Components/Aside";
import { useMyContext } from "./Components/Context";
import Footer from "./Components/Footer";
import "./Css/bookform.css";
import "./Css/about.css";
import "./Css/booknow.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Only run once on scroll
    });

    // Disable body overflow when AOS animations are active
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable body overflow when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Router>
      <>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Service-&-Pricing" element={<ServiceAndPricing />} />
            <Route path="/About-Us" element={<About />} />
            <Route path="/Book-Now" element={<BookNow />} />
          </Routes>

          <Aside />

          <Banner />

          <Footer />
        </div>
      </>
    </Router>
  );
};

export default App;
