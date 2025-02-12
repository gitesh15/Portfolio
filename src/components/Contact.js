import React from "react";
import "../style/style.css";

function Contact() {
  return (
    <>
      <div id="page3">
        <div id="left1">
          <div id="text5">
            <h5>Contact</h5>
            <h1>
              Let's Discuss <br />
            </h1>
          </div>
          <div id="info">
            <div className="infos">
              <div className="circle i1">
                <i className="ri-message-2-line" aria-label="Email"></i>
              </div>
              <h1>thoratgitesh02@gmail.com</h1>
            </div>
            <div className="infos">
              <div className="circle i1">
                <i className="ri-map-pin-4-line" aria-label="Location"></i>
              </div>
              <h1>
                Dewas <br /> India
              </h1>
            </div>
          </div>
        </div>
        {/* <div id="right1">
          <div className="line l1">
            <h1>👋 Say Hi!</h1>
            <div className="circle c1">
              <i className="ri-arrow-right-up-line" aria-label="Arrow"></i>
            </div>
          </div>
          <div className="line l2"></div>
        </div> */}

        {/* Contact Form Section */}
        <div id="contact-form">
          <h1>Contact Form</h1>
          <form action="http://localhost:3000/get-form-data" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="form-textarea"
              required
            ></textarea>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
