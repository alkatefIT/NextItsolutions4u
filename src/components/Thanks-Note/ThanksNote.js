import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ThanksNote = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Button className="float-end bg-danger border-0" onClick={handleClose}>
          <i className="fa-solid fa-xmark "></i>
        </Button>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <FontAwesomeIcon
            icon={faCheck}
            className="fs-1 text-success fw-bolder"
          />{" "}
          <h3 className="mt-3 text-center">
            Thank you for submitting the form!
          </h3>
          <p className="text-center w-75">
            We appreciate your message. Our team will get in touch with you
            soon.
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ThanksNote;
