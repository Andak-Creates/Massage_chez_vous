import React from "react";
import "../Css/sandp.css";
import { serviceAndPricingDetails } from "../Components/Tools";

const ServiceAndPricing = () => {
  return (
    <div className="serviceAndPricing">
      <h2>Service and pricing</h2>

      <div className="innerServiceAndPrice">
        <div className="service_">
          {serviceAndPricingDetails.map((item, idx) => (
            <div className="serviceContent">
              <h4 className="serviceTitle">{item.service}</h4>
              <div
                key={idx}
                className="innerContent"
                title="This should take you to a dynamic page when it's functional"
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
    </div>
  );
};

export default ServiceAndPricing;
