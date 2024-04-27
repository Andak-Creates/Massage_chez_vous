import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";
import { navLinks } from "./Tools";

const NavigationBar = () => {
  const { isAsideOpen, setAside } = useMyContext();
  const { linkId, setLinkId } = useMyContext();

  const openAside = () => {
    isAsideOpen ? setAside(false) : setAside(true);
  };
  const handleLinkClick = (navId) => {
    const clickedLink = navLinks.map((link) => {
      if (link.id === navId) {
        setLinkId(navId);
        console.log(navId);
        // setting local storage for link id
        sessionStorage.setItem("linkClicked", JSON.stringify(navId));
      }

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    });
  };

  useEffect(() => {
    // Retrieving link id on every reload
    const lastClickedId = JSON.parse(sessionStorage.getItem("linkClicked"));

    if (lastClickedId !== null) {
      setLinkId(lastClickedId);
    }
  }, []);
  return (
    <>
      <div className="navigator">
        <h2>Massage Chez Vous</h2>

        <div className="NavLinks">
          {navLinks &&
            navLinks
              .map((myLink) => (
                <Link
                  onClick={() => handleLinkClick(myLink.id)}
                  key={myLink.id}
                  style={myLink.id == linkId ? { color: "red" } : {}}
                  to={myLink.linkTo}
                  id={myLink.id}
                >
                  {myLink.linkName}
                </Link>
              ))
              .slice(0, 3)}
        </div>
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
        {navLinks
          .map((myLink) => (
            <Link
              onClick={() => handleLinkClick(myLink.id)}
              key={myLink.id}
              id={myLink.id}
              to={myLink.linkTo}
            >
              {myLink.linkName}
            </Link>
          ))
          .slice(3, 4)}
      </div>
    </>
  );
};

export default NavigationBar;
