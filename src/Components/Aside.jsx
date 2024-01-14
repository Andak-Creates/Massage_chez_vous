import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";
import "../Css/aside.css";
const Aside = () => {
  const { isAsideOpen, setAside } = useMyContext();
  const closeAside = () => {
    setAside(false);
  };
  return (
    <>
      {window.innerWidth < 615 ? (
        <div
          className="aside"
          onClick={closeAside}
          style={
            isAsideOpen
              ? {
                  height: "100%",
                  width: "100%",
                  position: "fixed",
                  top: "0",
                  left: "0",
                  zIndex: "12",
                  overflow: "hidden",
                  display: "flex",
                  transition: "all 300ms ease 300ms",
                }
              : {
                  height: "100%",
                  width: "100%",
                  position: "fixed",
                  top: "0",
                  right: "0",
                  zIndex: "12",
                  overflow: "hidden",
                  display: "flex",
                }
          }
        >
          <div className="cancelBtn" onClick={closeAside}>
            <h1 style={{ color: "white" }}>X</h1>
          </div>
          <div className="asideContent">
            <div className="asideLink">
              <Link to="/">Home</Link>
              <Link to="Service & Pricing">Service & Pricing</Link>
              <Link to="About Us">About us</Link>
              <Link to="Book Now">Book Now</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="aside" style={{ display: "none" }}>
          too big
        </div>
      )}
    </>
  );
};

export default Aside;
