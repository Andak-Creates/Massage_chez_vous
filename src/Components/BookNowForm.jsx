import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { ourServices } from "./Tools";

const BookNowForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massageType: "",
    date: "",
    time: "",
    preferences: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API request, booking confirmation).
    console.log("Form submitted:", formData);
    Email.send({
      Host: "kelvinandak@gmail.com",
      Username: "kelvinandak@gmail.com",
      Password: "sosoAndakYt1",
      To: "vindi.sings@gmail.com",
      From: "kelvinandak@gmail.com",
      Subject: "New massage booking",
      Body: `And this is the body ${formData}`,
    }).then((message) => alert(message));
  };

  // send email option

  return (
    <div className="bookingForm" data-aos="fade-up" data-aos-duration="2000">
      <h2>Book a Session</h2>

      <div
        className="backgroundHolder"
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        <div className="imageBack">
          <img src="massageImage1.jpeg" alt="" />
        </div>
        <div className="plainBack"></div>
        <form onSubmit={handleSubmit} className="form">
          <div className="innerForm">
            <label>
              Name:
              <input
                type="text"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Massage Type:
              <select
                className="input"
                name="massageType"
                value={formData.massageType}
                onChange={handleChange}
                required
              >
                <option value="">Select a Massage Type</option>
                <option value="swedish massage">Swedish Massage</option>
                <option value="deep tissue">Deep Tissue Massage</option>
                <option value="hot stone massage">Hot Stone Massage</option>
                <option value="Sport Stretch">Sport Stretch</option>
                {/* Add more massage types as needed */}
              </select>
            </label>

            <label>
              Preferred Date:
              <input
                type="date"
                className="input"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Preferred Time:
              <input
                className="input"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Preferences:
              <textarea
                className="input"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
              />
            </label>

            <button type="submit" className="bookSesh">
              Book Now
            </button>
          </div>
        </form>
        {/* <form action="" className="form">
          <div className="innerForm">
            <label>
              <span>Full Name:</span>
              <input className="input" type="text" required />
            </label>

            <label>
              <span>Email</span>
              <input className="input" type="email" required />
            </label>

            <label>
              <span>Phone Number</span>
              <input className="input" type="tel" value={phone} required />
            </label>

            <select className="pickService" value={massage} required>
              <option value="">Pick a Session</option>
              <option value="">Swedish Massage</option>
              <option value="">Deep Tissue Massage</option>
              <option value="">Hot Stone Massage</option>
              <option value="">Sport Stretch</option>
            </select>

            <button type="submit" onClick={handleSubmit} className="bookSesh">
              Book Session
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default BookNowForm;
