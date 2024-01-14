import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Link to="Book now">
        <div className="banner">Book Now!</div>
      </Link>
    </>
  );
};

export default Banner;
