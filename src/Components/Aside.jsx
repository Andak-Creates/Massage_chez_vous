import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";
import "../Css/aside.css";
const Aside = () => {
  const { isAsideOpen, setAside } = useMyContext();
  const closeAsideBody = () => {
    setAside(false);
  };

  const handleClick = () => {
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
            <div className="cancelBtn" onClick={closeAsideBody}>
              <h1 style={{ color: "white" }}>
                <i className="bi bi-x-lg"></i>
              </h1>
            </div>

            <div className="asideContent">
              <div className="asideLink">
                <Link to="/" onClick={handleClick}>
                  Home
                </Link>
                <Link to="/Service-&-Pricing" onClick={handleClick}>
                  Service & Pricing
                </Link>
                <Link to="/About-Us" onClick={handleClick}>
                  About us
                </Link>
                <Link to="/Book-Now" onClick={handleClick}>
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
