import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Banner = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Link to="/Book-Now">
        <div className="banner" onClick={handleClick}>
          <p>Book Now!</p>
        </div>
      </Link>
    </>
  );
};

export default Banner;
