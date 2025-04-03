"use client";

import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./FormModal.css";
import { IoClose } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const FormModal = ({ handleClose, handleShow, show }) => {
  const form = useRef(null);



  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      console.log("Email sent successfully");
      form.current.reset();
    })
    .catch((error) => console.error("Email sending failed", error));
  };

  useEffect(() => {
    const modalShownBefore = localStorage.getItem("modalShown");
    if (!modalShownBefore) {
      handleShow();
      localStorage.setItem("modalShown", "true");
    }
  }, []);

  return (
    <div>
      <Modal dialogClassName="custom-modal" show={show} onHide={handleClose}>
        <div className="modal-close ms-auto">
          <IoClose className="fs-3" onClick={handleClose} />
        </div>

        <Modal.Title className="text-center mt-3">
          What services are you looking for?
        </Modal.Title>

        <Modal.Body>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {[
              "IT AMC Services", "MCC Approval", "CCTV", "Biometric",
              "Network Solutions", "PC Repairs", "Digital Marketing",
              "SEO", "Website Design & Development", "Mobile App Development",
              "Printer Rental", "Printer Sales", "Printer AMC",
              "Spare Parts/Consumables"
            ].map((service, index) => (
              <div key={index} className="modal-services">{service}</div>
            ))}
          </div>
        </Modal.Body>

        <Modal.Title className="text-center mt-5">
          Didn’t find what you were looking for? <br />
          Please provide us with your contact details and we’ll be in touch shortly.
        </Modal.Title>

        <Modal.Body>
          <section id="contact">
            <div className="container">
              <main>
                <form
                  className="d-flex flex-column justify-content-center p-1"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="form-modal d-flex flex-wrap justify-content-center gap-5">
                    {[
                      { label: "First Name", name: "firstName", type: "text" },
                      { label: "Last Name", name: "lastName", type: "text" },
                      { label: "Company Name", name: "company", type: "text" },
                      { label: "Email", name: "email", type: "email" },
                      { label: "Mobile Number", name: "mobile", type: "tel" }
                    ].map(({ label, name, type }) => (
                      <div key={name} className="input">
                        <label htmlFor={name}>{label}</label>
                        <input type={type} name={name} id={name} required />
                      </div>
                    ))}
                  </div>

                  <div className="modal-button">
                    <Button className="mt-5" type="submit" variant="success">
                      Submit
                    </Button>
                  </div>
                </form>
              </main>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;
