import React from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { navLinks, ourServices } from "../Components/Tools";
import BookNowForm from "../Components/BookNowForm";
import Wmu from "../Components/Wmu";
import { useMyContext } from "../Components/Context";

const Home = () => {
  const { linkId, setLinkId } = useMyContext();
  const handleLinkClick = (navId) => {
    const clickedLink = navLinks.map((link) => {
      if (link.id === navId) {
        setLinkId(navId);
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
  return (
    <div className="home">
      <div className="innerHome">
        <img src="stoneMassage.webp" alt="" />

        <div className="innerHomeContent">
          <h2>The Best Massage Service At Your Doorstep.</h2>
          <p>TAX AND TIPS INCLUDED</p>
          <div className="findOutMore">
            {navLinks
              .map((myLink) => (
                <Link
                  key={myLink.id}
                  onClick={() => handleLinkClick(myLink.id)}
                  to={myLink.linkTo}
                  className="viewMoreBtn"
                >
                  View More
                </Link>
              ))
              .slice(2, 3)}
          </div>
        </div>
      </div>

      {/* Content below InnerHome */}
      <div className="contentBelow" data-aos="zoom-in" data-aos-duration="1000">
        <p>
          Want a break from the daily grind? Massage Chez Vous's{" "}
          <span className="lightBlueText">
            broad range of massage therapies
          </span>{" "}
          offers result-driven massage to improve your health. Our massage
          therapists are licensed and are regularly measured on high standards
          of quality assurance ensuring a safe, positive, and beneficial
          experience for our clients
        </p>
      </div>

      {/* About Us */}
      {/* <div className="homeAbout">
        <h2>About Us</h2>
        <div className="miniAbout">
          <img src="chezVous.jpg" alt="unavailable" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            aperiam autem, expedita inventore, sapiente voluptas aliquam iusto
            obcaecati iste suscipit rem at quidem doloribus perferendis in
            veniam possimus esse unde itaque! Quod repellat voluptatibus
            <br></br>
            <button className="viewMoreBtn">View More</button>
          </p>
        </div>
      </div> */}

      {/* Our services */}
      <div className="ourServices" data-aos="zoom-in" data-aos-duration="1000">
        <h2>Our services</h2>

        <div className="innerService">
          {ourServices.map((service, idx) => (
            <div
              className="service"
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={idx}
            >
              <img src={service.img} alt="" />
              <p>{service.service}</p>
              <small> {service.details} </small>
              <br></br>
              {navLinks
                .map((myLink) => (
                  <Link
                    key={myLink.id}
                    onClick={() => handleLinkClick(myLink.id)}
                    to={myLink.linkTo}
                    className="viewMoreBtn"
                  >
                    See More
                  </Link>
                ))
                .slice(1, 2)}
            </div>
          ))}
        </div>
      </div>

      {/* What makes us a customer favorite section */}
      <Wmu />

      {/* Book Now Section */}
      <BookNowForm />
    </div>
  );
};

export default Home;
