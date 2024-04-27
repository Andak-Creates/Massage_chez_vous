import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "./Context";

const CustomLink = ({ to, children, className }) => {
  const { isClicked, setIsClicked } = useMyContext();

  const handleLinkClick = () => {
    // Toggle the state for the clicked link
    setIsClicked(!isClicked);

    // Scroll to the top of the page if needed
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <Link
      to={to}
      onClick={handleLinkClick}
      style={{ color: isClicked ? "red" : "black" }}
      className={className}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
