import React from "react";
import { ourServices } from "./Tools";

const BookNowForm = () => {
  return (
    <div className="bookingForm">
      <h2>Book a Session</h2>

      <div className="backgroundHolder">
        <div className="imageBack"></div>
        <div className="plainBack"></div>
        <form action="" className="form">
          <div className="innerForm">
            <label>
              <span>Full Name:</span>
              <input className="input" type="text" placeholder="" required />
            </label>

            <label>
              <span>Email</span>
              <input className="input" type="email" placeholder="" required />
            </label>

            <label>
              <span>Phone Number</span>
              <input className="input" type="tel" placeholder="" required="" />
            </label>

            <select className="pickService" id="" required>
              <option value="">Pick a Session</option>
              <option value="">Swedish Massage</option>
              <option value="">Deep Tissue Massage</option>
              <option value="">Hot Stone Massage</option>
              <option value="">Sport Stretch</option>
            </select>

            <button type="submit" className="bookSesh">
              Book Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
