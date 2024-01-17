import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";

const NavigationBar = () => {
  const { isAsideOpen, setAside } = useMyContext();
  const openAside = () => {
    isAsideOpen ? setAside(false) : setAside(true);
    console.log(isAsideOpen);
  };
  return (
    <>
      <div className="navigator">
        <h2>Massage Chez Vous</h2>

        <div className="NavLinks">
          <Link to="/">Home</Link>
          <Link to="Service & Pricing">Service & Pricing</Link>
          <Link to="About Us">About us</Link>
        </div>
        <Link to="Book Now">Book Now</Link>

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
