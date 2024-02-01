import React, { useEffect, useState } from "react";
import { whatMakesUs } from "../Components/Tools";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import CustomLink from "../Components/CustomLink";
import { useMyContext } from "../Components/Context";

export const About = () => {
  const { testimonial, setTestimonial } = useMyContext();

  return (
    <>
      <div className="about">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Health is Happiness
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000" className="top">
          At Massage Chez Vous, we have a passion for health and wellness. It is
          our goal to see people improve their day to day wellbeing by helping
          them reduce or resolve their pain. it is defficult to truly enjoy life
          and be happy if you are constantly burdened with tension and pain.
          Massage is great for treating many types of pain. wether that pain
          comes in the form of headaches, joint pain, back pain, inflammation, a
          recent accident, or chronic pain. A deep tissue massage from a highly
          trained therapist can ba a powerful remedy
        </p>
        {/* How it works section */}
        <div className="howItWorks" data-aos="fade-up" data-aos-duration="1000">
          <h1>How it works</h1>
          <div className="innerWork">
            <div className="work" data-aos="fade-up" data-aos-duration="1500">
              <h1 className="step">01.</h1>
              <small>Choose your treatment</small>
              <p>
                From Deep Tissue and Sport Massages to osteopapthy and
                physiotherapy treatments. *
              </p>
            </div>
            <div className="work" data-aos="fade-up" data-aos-duration="1500">
              <h1 className="step">02.</h1>
              <small>Pick a time and place</small>
              <p>
                Our Mobile Massage therapist can come to your house or hotel any
                time from 7am-11pm
              </p>
            </div>
            <div className="work" data-aos="fade-up" data-aos-duration="1500">
              <h1 className="step">03.</h1>
              <small>Relax</small>
              <p>
                Get some towels ready, they'll come to you with everything else,
                including the massage table.
              </p>
            </div>
          </div>
          <CustomLink to="/Book-Now" className="bookASession">
            Book Now
          </CustomLink>
          <small
            className="available"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            AVAILABLE IN LAGOS ONLY
          </small>
        </div>
        {/* Over the years section */}
        <div className="overTheYears">
          <img
            src="uhmm.webp"
            alt=""
            data-aos="zoom-in"
            data-aos-duration="2000"
          />
          <p data-aos="zoom-in" data-aos-duration="3000">
            Over the years we have heard from many people how difficult it is to
            find good therapists who they can feel confident will be able to
            help them resolve their pain. we have high standards for our staffs
            and encourage them to constantly improve their knowledge and
            techniques in orther to best relieve your pain. They will be able to
            assess and evaluate the muscles of the body to identify the areas
            that are causing you pain or limiting your mobility. they will then
            use the necessary massage techniques and service to effectively
            bring balance back to your muscular system and get you feeling
            better
          </p>
        </div>
        <p className="endNote" data-aos="zoom-in" data-aos-duration="1000">
          We are a health focused Massage clinic and because of this we offer
          products and services that you won't find at your typical massage spa.
          The services we privide were chosen specifically from our years of
          experience and are tailored for every individual to help them heal,
          manage or get rid of their pain completely. if you aren't sure about
          which treatment is best in your situation our highly trained staff
          will be able to recommennd a treatment strategy to suit your
          individual needs.
        </p>{" "}
        {/* display testimonials */}
        {testimonial.length > 0 && (
          <div>
            <h2>Testimonials</h2>
            <div className="testimonials">
              {testimonial.length > 0 &&
                testimonial.map((item) => (
                  <div className="testimony" key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.thoughts}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
