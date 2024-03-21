import React, { useEffect } from "react";
import { ourServices } from "./Tools";
import { useMyContext } from "./Context";

const Footer = () => {
  const {
    myThoughts,
    setThoughts,
    testimonial,
    setTestimonial,
    myName,
    setMyName,
  } = useMyContext();

  // useEffect(() => {
  //   //retrieve testimonial from local storage
  //   const storedTestimonial =
  //     JSON.parse(localStorage.getItem("testimonials")) || [];
  //   setTestimonial(storedTestimonial);
  // }, []);

  // const handleThoughts = (event) => {
  //   setThoughts(event.target.value);
  // };

  // const HandleName = (event) => {
  //   setMyName(event.target.value);
  // };

  // warn("this functionality is currently unavailable");
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // //creating new testimonials
  //   // const newTestimonial = {
  //   //   id: Date.now(), //Adds unique ID
  //   //   name: myName,
  //   //   thoughts: myThoughts,
  //   // };

  //   // //updates testimonial state
  //   // setTestimonial([...testimonial, newTestimonial]);

  //   // // Storing testimonial data in local storage
  //   // localStorage.setItem(
  //   //   "testimonials",
  //   //   JSON.stringify([...testimonial, newTestimonial])
  //   // );

  //   // // Reset form
  //   // setMyName("");
  //   // setThoughts("");
  // };

  return (
    <div className="footer">
      <h2 className="logo">Massage Chez Vous</h2>
      <div className="footDetails">
        <div className="footService">
          {ourServices.map((service, idx) => (
            <div key={idx} className="FS">
              {service.service}
            </div>
          ))}
        </div>

        <div className="footAbout">
          <small>ABOUT</small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          ullam error, distinctio, tempora mollitia dicta unde pariatur commodi
          optio porro deleniti fugit velit totam delectus amet omnis
          perspiciatis iusto harum?
        </div>

        <div className="footContact">
          <small>CONTACT</small>
          <p>
            Tel: <a href="tel:08101432389">08119540296</a>
          </p>
          <p>
            Location: <a href="">Lagos, Lekki Sangotendo</a>
          </p>
          <p>
            IG: <a href="">Massage Chez Vous</a>
          </p>
        </div>

        <form className="footForm">
          <small className="wmuHeader">POST A FEEDBACK</small>
          <label>
            name:
            <input type="text" value={myName} />
          </label>
          <label>
            Comment:
            <input type="text" value={myThoughts} />
          </label>

          <button>Submit</button>
        </form>
      </div>
      <div className="rights">All Rights Reserved. Designed By Vindi Tech</div>
    </div>
  );
};

export default Footer;
