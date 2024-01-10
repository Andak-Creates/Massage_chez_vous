import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigator">
      <h2>Massage Chez vous</h2>

      <div className="NavLinks">
        <Link to="/">Home</Link>
        <Link to="Service & Pricing">Service & Pricing</Link>
        <Link to="About Us">About us</Link>
      </div>
      <Link to="Book Now">Book Now</Link>
    </div>
  );
};

export default NavigationBar;
