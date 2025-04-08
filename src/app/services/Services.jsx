"use client"; // If using App Router

import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
// import Whatsapp from "@/components/Whatsapp";
import "./Services.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToolsLogoSlider from "@/components/Tools-Logo-Slider/ToolsLogoSlider";


export default function Services() {
  const form = useRef();
  const form1 = useRef();

  const serviceId = "service_2swzphn";
  const templateId = "template_n3grqyf";
  const userId = "0f9IduTSqGe0ndFxP";


  const sendEmail = (e, formRef) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, formRef.current, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

    formRef.current.reset();
  };

  return (
    <div className="service-page-container">
      {/* <Whatsapp premsg="Hi, I'm interested in learning more about your services" /> */}
      <div className="service-page-title">
        <h1 id="service-section">
          <span className="title-blue">Our</span>{" "}
          <span className="title-orange">Services</span>
        </h1>
        <p>Custom IT Solutions for Your Successful Business</p>
      </div>

      {/* Forms and Services Links */}
      <div className="form-services">
        <form
          className="form-card"
          ref={form}
          onSubmit={(e) => sendEmail(e, form)}
        >
          <h2 className="fw-bolder text-white mb-5">
            Request a free <br /> consultation
          </h2>
          <input type="email" name="ema" placeholder="Email" required />
          <input
            type="text"
            name="mob"
            pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
            title="Please enter your country code"
            placeholder="Mobile"
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>

        {/* Service Links */}
        <div className="services-link">
          <Link href="services/it-service">
            <div className="service-link-points border-bottom mb-5">
              <h3>IT Support</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/rental-service">
            <div className="service-link-points border-bottom mb-5">
              <h3>Rental Service</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/annual-maintenance-contract">
            <div className="service-link-points border-bottom mb-5">
              <h3>AMC</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/telecom-solutions">
            <div className="service-link-points border-bottom mb-5">
              <h3>Telecom Solutions</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/network-solutions">
            <div className="service-link-points border-bottom mb-5">
              <h3>Network Solutions</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/digital-marketing">
            <div className="service-link-points border-bottom mb-5">
              <h3>Digital Marketing </h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/closed-circuit-television">
            <div className="service-link-points border-bottom mb-5">
              <h3>CCTV</h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/website-development">
            <div className="service-link-points border-bottom mb-5">
              <h3> Website Development </h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/app-development">
            <div className="service-link-points border-bottom  mb-5">
              <h3>App Development </h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>

          <Link href="services/branding">
            <div className="service-link-points border-bottom">
              <h3>Branding </h3>
              <FontAwesomeIcon icon={faArrowRight} className="custom-right-arrow-icon" />{" "}
            </div>
          </Link>
        </div>

        <form
          className="form-card2"
          ref={form1}
          onSubmit={(e) => sendEmail(e, form1)}
        >
          <h2 className="fw-bolder text-white mb-5">
            Request a free <br /> consultation
          </h2>
          <input type="email" name="ema" placeholder="Email" required />
          <input
            type="text"
            name="mob"
            pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
            title="Please enter your country code"
            placeholder="Number"
            required
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>

      <ToolsLogoSlider />

    </div>
  );
}
