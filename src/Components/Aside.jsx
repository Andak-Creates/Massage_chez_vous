import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { useMyContext } from "./Context";
import "../Css/aside.css";
import { navLinks } from "./Tools";
const Aside = () => {
  const { isAsideOpen, setAside, linkId, setLinkId } = useMyContext();

  const closeAsideBody = () => {
    setAside(false);
  };

  const handleLinkClick = (navId) => {
    const clickedLink = navLinks.map((mylink) => {
      if (mylink.id === navId) {
        setLinkId(navId);
        sessionStorage.setItem("linkClicked", JSON.stringify(navId));
      }
    });

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setAside(false);
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
      {isAsideOpen ? (
        <div
          className="aside"
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
                {navLinks &&
                  navLinks.map((myLink) => (
                    <Link
                      onClick={() => handleLinkClick(myLink.id)}
                      key={myLink.id}
                      style={myLink.id == linkId ? { color: "red" } : {}}
                      to={myLink.linkTo}
                      id={myLink.id}
                    >
                      {myLink.linkName}
                    </Link>
                  ))}
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
