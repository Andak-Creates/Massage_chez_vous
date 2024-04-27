import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { navLinks } from "./Tools";
import { useMyContext } from "./Context";

const Banner = () => {
  const { linkId, setLinkId } = useMyContext();

  const handleClick = (navId) => {
    const clickedLink = navLinks.map((link) => {
      if (link.id === navId) {
        setLinkId(navId);
        sessionStorage.setItem("linkClicked", JSON.stringify(navId));
      }
    });

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "instant",
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
      <div className="banner" style={linkId == 4 ? { display: "none" } : {}}>
        {navLinks &&
          navLinks
            .map((myLink) => (
              <Link
                className="p"
                onClick={() => handleClick(myLink.id)}
                key={myLink.id}
                to={myLink.linkTo}
                id={myLink.id}
              >
                {myLink.linkName}
              </Link>
            ))
            .slice(3, 4)}
      </div>
    </>
  );
};

export default Banner;
