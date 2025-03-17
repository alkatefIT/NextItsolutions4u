"use client";

import React, { useRef, useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "./Contact.css";
import emailjs from "@emailjs/browser";
// import Whatsapp from "../components/Whatsapp";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ThanksNote from "@/components/Thanks-Note/ThanksNote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeOpenText,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname(); // Replacing window.location.href


  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_2swzphn",
        "template_g8h71ep",
        form.current,
        "0f9IduTSqGe0ndFxP"
      );
      setShowModal(true);
      form.current.reset();
    } catch (error) {
      console.error("Email send failed:", error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleCall = () => {
    window.location.href = "tel:+971556449916";
  };

  const handleMail = () => {
    window.location.href = "mailto:sales@itsolutions4u.co";
  };

  return (
    <div>
      {/* <Whatsapp /> */}
      <Navbar />

      <div className="contact-contents">
        <h2 className="text-center mt-5 mb-5">Get in touch with us 👋</h2>

        <div className="full-icon">
          <div className="icon-body">
            <div className="icon">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="fa-2x"
                aria-hidden="true"
              />{" "}
            </div>
            <h6>UAE</h6>
          </div>
          <div className="icon-body">
            <div className="icon" onClick={handleMail}>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="fa-2x"
                aria-hidden="true"
              />{" "}
            </div>
            <h6>sales@itsolutions4u.co</h6>
          </div>
          <div className="icon-body">
            <div className="icon" onClick={handleCall}>
            <FontAwesomeIcon
                icon={faPhone}
                className="fa-2x"
                aria-hidden="true"
              />{" "}            </div>
            <h6>+971556449916</h6>
          </div>
        </div>

        <ThanksNote handleClose={handleCloseModal} show={showModal} />

        <Container>
          <div className="form-map">
            <Form className="contact-form" ref={form} onSubmit={sendEmail}>
              <Row>
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                    className="custom-input"
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="company">
                  <Form.Control
                    type="text"
                    placeholder="Your Company Name"
                    name="company"
                    required
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Control
                    type="text"
                    placeholder="Your Contact Number"
                    pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
                    title="Please enter your country code"
                    name="mobile"
                    required
                    className="custom-input"
                  />
                </Form.Group>
              </Row>
              <Form.Group controlId="message">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Your Message"
                  name="message"
                  required
                  className="custom-input"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="send-button">
                Send Message
              </Button>
            </Form>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.626104750271!2d54.5217293!3d24.3595137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e38a6fafa28c9%3A0x614cc0e3d724ea9a!2sAl%20Katef%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1704532584749!5m2!1sen!2sin"
              allowFullScreen
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
