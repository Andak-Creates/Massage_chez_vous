import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import { ourServices } from "./Tools";
import { useMyContext } from "./Context";

const BookNowForm = () => {
  // const [bookData, setBookData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   massageType: "",
  // });

  const [bookings, setBookings] = useState([]);

  const {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    massage,
    setMassage,
  } = useMyContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      client: name,
      clientEmail: email,
      number: phone,
      massageType: massage,
    };

    setBookings([...bookings, newBooking]);

    localStorage.setItem("bookings", JSON.stringify([...bookings, newBooking]));

    setName("");
    setEmail("");
    setPhone("");
    setMassage("");
  };

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleMassage = (event) => {
    setMassage(event.target.select);
  };

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
              <input
                className="input"
                type="text"
                value={name}
                onChange={handleName}
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                className="input"
                type="email"
                value={email}
                onChange={handleEmail}
                required
              />
            </label>

            <label>
              <span>Phone Number</span>
              <input
                className="input"
                type="tel"
                value={phone}
                onChange={handlePhone}
                required
              />
            </label>

            <select
              className="pickService"
              value={massage}
              onChange={handleMassage}
              required
            >
              <option value="">Pick a Session</option>
              <option value="">Swedish Massage</option>
              <option value="">Deep Tissue Massage</option>
              <option value="">Hot Stone Massage</option>
              <option value="">Sport Stretch</option>
            </select>

            <button type="submit" onClick={handleSubmit} className="bookSesh">
              <Link to="/Book-Now" className="book_sessionBtn">
                Book Session
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
