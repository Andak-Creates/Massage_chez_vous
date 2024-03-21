import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";
import "../Css/aside.css";
const Aside = () => {
  const { isAsideOpen, setAside } = useMyContext();
  const [isLinkClicked, setIsLinkClicked] = useState({
    home: false,
    service: false,
    about: false,
    bookNow: false,
  });
  const closeAsideBody = () => {
    setAside(false);
  };

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

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isAsideOpen ? (
        <div
          className="aside"
          onClick={closeAsideBody}
          style={{
            width: "100%",
            transition: "all 300ms ease",

            height: "100%",
            position: "fixed",
            top: "0",
            right: 0,

            backdropFilter: "blur(3px)",
            zIndex: "60",
          }}
        >
          <div className="innerAside">
            <img src="Aesthetic.webp" alt="" />
            <div className="cancelBtn" onClick={closeAsideBody}>
              <h1 style={{ color: "white" }}>
                <i className="bi bi-x-lg"></i>
              </h1>
            </div>

            <div className="asideContent">
              <div className="asideLink">
                <Link
                  to="/"
                  onClick={() => handleLinkClick("home")}
                  style={{ color: isLinkClicked.home ? "red" : "black" }}
                >
                  Home
                </Link>
                <Link
                  to="/Service-&-Pricing"
                  onClick={() => handleLinkClick("service")}
                  style={{ color: isLinkClicked.service ? "red" : "black" }}
                >
                  Service & Pricing
                </Link>
                <Link
                  to="/About-Us"
                  onClick={() => handleLinkClick("about")}
                  style={{ color: isLinkClicked.about ? "red" : "black" }}
                >
                  About us
                </Link>
                <Link
                  to="/Book-Now"
                  onClick={() => handleLinkClick("book")}
                  style={{ color: isLinkClicked.book ? "red" : "black" }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="aside"
          style={{
            transition: "all 300ms ease",
            width: "0%",
            height: "100%",
            position: "fixed",
            top: "0",
            right: 0,
            backdropFilter: "blur(3px)",
            zIndex: "60",
          }}
        ></div>
      )}
    </>
  );
};

export default Aside;
