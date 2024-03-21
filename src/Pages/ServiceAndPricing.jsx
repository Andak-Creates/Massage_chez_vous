import React, { useState } from "react";
import "../Css/sandp.css";
import { serviceAndPricingDetails } from "../Components/Tools";
import { Link } from "react-router-dom";

const ServiceAndPricing = () => {
  const [isServiceClicked, setServiceClicked] = useState(false);
  const handleService = (serviceId) => {
    const updatedService = serviceAndPricingDetails.map((service) => {
      if (service.id === serviceId) {
        localStorage.setItem("displayService", JSON.stringify([service]));
        setServiceClicked(true);
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  const handleGoBAck = () => {
    setServiceClicked(false);
  };
  return (
    <div className="serviceAndPricing">
      <h2>Service and pricing</h2>

      {isServiceClicked && localStorage.getItem("displayService") ? (
        <div className="serviceDisplay">
          {JSON.parse(localStorage.getItem("displayService")).map((service) => (
            <div key={service.id}>
              <button className="goBackBtn" onClick={handleGoBAck}>
                <i className="bi bi-arrow-left"></i> Go Back
              </button>
              <div className="contentDisplayed">
                <img src={service.img} alt="" />
                <h4>{service.service}</h4>
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="innerServiceAndPrice"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="service_">
            {serviceAndPricingDetails.map((item) => (
              <div
                className="serviceContent"
                data-aos="zoom-in"
                data-aos-duration="2000"
                key={item.id}
              >
                <h4 className="serviceTitle">{item.service}</h4>
                <div
                  className="innerContent"
                  title="Tap to see complete details"
                  id={item.id}
                  onClick={() => handleService(item.id)}
                >
                  <img src={item.img} className="image" alt="" />

                  <div className="desc">
                    <p>{item.details}</p>
                  </div>

                  <div className="prices">
                    <div className="price">
                      <h5>25mins:</h5>
                      <p>#{item.smallTime},000</p>
                    </div>
                    <div className="price">
                      <h5>40mins:</h5>
                      <p>#{item.mediumTime},000</p>
                    </div>

                    <div className="price">
                      <h5>60mins:</h5>
                      <p>#{item.largestTime},000</p>
                    </div>
                    <small>Tap Box To See more</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAndPricing;
