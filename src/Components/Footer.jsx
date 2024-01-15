import React from "react";
import { ourServices } from "./Tools";

const Footer = () => {
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
          <a href="tel:08119540296">tel: 08119540296</a>
          <p>
            Location: <a href="">Lagos, Lekki Sangotendo</a>
          </p>
          <p>
            IG: <a href="">Massage Chez Vous</a>
          </p>
        </div>
      </div>
      <div className="rights">All Rights Reserved. Designed By Vindi Tech</div>
    </div>
  );
};

export default Footer;
