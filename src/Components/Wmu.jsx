import React from "react";
import { whatMakesUs } from "./Tools";

const Wmu = () => {
  return (
    <div className="whatMakesUs">
      <small className="wmu_header" data-aos="fade-up" data-aos-duration="1000">
        WHAT MAKES US A CUSTOMER FAVORITE
      </small>

      <div className="wmuContent">
        {whatMakesUs.map((wmu, idx) => (
          <div
            className="wmuDetails"
            data-aos="fade-up"
            data-aos-duration="2000"
            key={idx}
          >
            <img src={wmu.img} alt="" />
            <small className="wmu_header">{wmu.header}</small>
            <p> {wmu.desc} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wmu;
