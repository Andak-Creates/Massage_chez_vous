import React from "react";
import NavigationBar from "./Components/NavigationBar";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ServiceAndPricing from "./Pages/ServiceAndPricing";
import { About } from "./Pages/About";
import BookNow from "./Pages/BookNow";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Service & Pricing" element={<ServiceAndPricing />} />
          <Route path="About us" element={<About />} />
          <Route path="Book Now" element={<BookNow />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
