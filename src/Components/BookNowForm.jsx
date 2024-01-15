import React from "react";
import { ourServices } from "./Tools";

const BookNowForm = () => {
  return (
    <div className="bookingForm">
      <h2>Book a Session</h2>

      <div className="backgroundHolder">
        <div className="imageBack"></div>
        <div className="plainBack"></div>
        <div className="form">
          <div className="innerForm">
            <label>
              <span>Full Name:</span>
              <input className="input" type="text" placeholder="" required="" />
            </label>

            <label>
              <span>Email</span>
              <input
                className="input"
                type="email"
                placeholder=""
                required=""
              />
            </label>

            <div className="pickService">
              {" "}
              <p>Choose a Session</p>
              <div className="holder">
                <ul className="listHolder">
                  {ourServices.map((pick, idx) => (
                    <li key={idx}>{pick.service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowForm;
