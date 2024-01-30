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

const App = () => {
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
