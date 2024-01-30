import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";

const NavigationBar = () => {
  const { isAsideOpen, setAside } = useMyContext();

  const openAside = () => {
    isAsideOpen ? setAside(false) : setAside(true);
    console.log(isAsideOpen);
  };

  const [isLinkClicked, setIsLinkClicked] = useState({
    home: false,
    service: false,
    about: false,
    bookNow: false,
  });
  const handleLinkClick = (linkName) => {
    // Reset the state for all links to black
    const updatedState = Object.fromEntries(
      Object.entries(isLinkClicked).map(([key]) => [key, false])
    );

    // Change the color by toggling the state
    setIsLinkClicked((prevState) => ({
      ...updatedState,
      [linkName]: !prevState[linkName],
    }));
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="navigator">
        <h2>Massage Chez Vous</h2>

        <div className="NavLinks">
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            style={{ color: isLinkClicked.home ? "red" : "black" }}
            className="navbar-link"
          >
            Home
          </Link>
          <Link
            to="/Service-&-Pricing"
            onClick={() => handleLinkClick("service")}
            style={{ color: isLinkClicked.service ? "red" : "black" }}
            className="navbar-link"
          >
            Service & Pricing
          </Link>
          <Link
            to="/About-Us"
            onClick={() => handleLinkClick("about")}
            style={{ color: isLinkClicked.about ? "red" : "black" }}
            className="navbar-link"
          >
            About us
          </Link>
        </div>
        <Link
          to="/Book-Now"
          onClick={() => handleLinkClick("book")}
          style={{ color: isLinkClicked.book ? "red" : "black" }}
          className="navbar-link"
        >
          Book Now
        </Link>

        <div className="burger" onClick={openAside}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.333"
            height="7"
            viewBox="0 0 28.333 7"
          >
            <g dataname="Group 3368" transform="translate(-2078.333 -1780)">
              <line
                x2="28.333"
                transform="translate(2078.333 1780.5)"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              ></line>
              <line
                dataname="Line 61"
                x2="28.333"
                transform="translate(2078.333 1786.5)"
                fill="none"
                stroke="#000"
                strokeWidth="1"
              ></line>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
