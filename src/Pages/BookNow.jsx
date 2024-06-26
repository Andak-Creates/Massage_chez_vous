import React, { useEffect, useState } from "react";

const BootNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    massageType: "",
    date: "",
    time: "",
    preferences: "",
  });

  // useEffe  ct(() => {
  //   const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API request, booking confirmation).
    console.log("Form submitted:", formData);
    alert(
      "Booking Request successfully sent, You'll recieve an email shortly confirming your booking request"
    );
  };

  return (
    <div className="bookNow">
      <h1>Book Your Massage</h1>

      {/* Hero Image */}
      <img
        src=""
        alt="Serene Massage Setting"
        // style={{ height: "200px", width: "90%", objectFit: "cover" }}
      />

      {/* Booking Form */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Massage Type:
          <select
            name="massageType"
            value={formData.massageType}
            onChange={handleChange}
            required
          >
            <option value="">Select a Massage Type</option>
            <option value="swedish">Swedish Massage</option>
            <option value="deep-tissue">Deep Tissue Massage</option>
            {/* Add more massage types as needed */}
          </select>
        </label>

        <label>
          Preferred Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Preferred Time:
          <input
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
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Book Now</button>
      </form>

      {/* Additional sections (therapist info, promotions, etc.) can be added here */}

      {/* Contact Information */}
      <div className="contactInfo">
        <h2>Contact Us</h2>
        <p>
          For assistance, please tap to call:{" "}
          <a href="tel:08101432389">(234) 8119-540-296</a>
        </p>
        <p>Email: @massagechezvous.com</p>
      </div>
    </div>
  );
};

export default BootNow;
