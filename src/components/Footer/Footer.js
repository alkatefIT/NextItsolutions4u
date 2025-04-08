"use client";

import Image from "next/image";
import Link from "next/link";
import "./Footer.css";
import LogoDark from "../../assets/logo_black.png";
import PayCard from "../../assets/footer_payment.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faTextWidth,
  faTty,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-parent">
      <hr />
      <div className="footer-cover">
        <div className="footer-logo-section">
          <Image src={LogoDark} alt="error" width={150} height={50} />
          <p>
            Al Katef IT Solutions is a global IT solutions company based UAE,
            with over 20 years experience in IT service, printer service,
            digital marketing.
          </p>
          <div className="soc-med-i d-flex justify-content-between  fs-5 align-items-center">
            <p className="icons">
              <a
                href="https://www.facebook.com/alkatef.uae"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </p>
            <p className="icons">
              <a
                href="https://www.instagram.com/alkatef.uae/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
            <p className="icons">
              <a
                href="https://www.linkedin.com/company/alkatefuae/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </p>
            <p className="icons">
              <a
                href="https://www.youtube.com/@alkatefuae"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </p>
            <p className="icons">
              <a
                href="https://twitter.com/alkatef_uae"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </p>
          </div>
        </div>
        <div className="footer-product-section">
          <p className="footer-section-title">PRODUCTS</p>
          <div className="footer-links-flex">
            <Link href="/printer" className="footer-links-flex-link">
              Printer
            </Link>
            <Link href="services/cctv" className="footer-links-flex-link">
              CCTV
            </Link>
            <Link href="#" className="footer-links-flex-link">
              PABX
            </Link>
            <Link href="#" className="footer-links-flex-link">
              Biometrics
            </Link>
            <Link href="#" className="footer-links-flex-link">
              Flat Panel
            </Link>
          </div>
        </div>
        <div className="footer-links-section">
          <p className="footer-section-title">USEFUL LINKS</p>
          <div className="footer-links-flex">
            <Link href="/certificates" className="footer-links-flex-link">
              Certificate
            </Link>
            <Link
              href="/terms-and-conditions"
              className="footer-links-flex-link"
            >
              T&Cs
            </Link>
            <Link href="#" className="footer-links-flex-link">
              Sitemap
            </Link>
            <Link href="/privacy-and-policy" className="footer-links-flex-link">
              Privacy and Policies
            </Link>
            <Link href="/contact" className="footer-links-flex-link">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer-contact-section">
          <p className="footer-section-title">CONTACT US</p>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faHouse} style={{color:'black'}} /> M-25 Mussafah, Abu Dhabi, UAE
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faEnvelope} style={{color:'black'}} /> sales@itsolutions4u.co
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faPhone} style={{color:'black'}} /> +971 55 644 9916
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faTty} style={{color:'black'}} /> +971 2 552 4336
          </div>
          <Image src={PayCard} alt="ERR" width={150} height={50} />
        </div>
      </div>
      <div className="footer-line-parent">
        <hr className="footer-line" />
      </div>
      <div className="footer-copyright-section">
        <p>
          &copy; 2023 itsolutions4u.co All rights reserved. Designed by
           &nbsp; <a
            href="https://alkatefitsolutions.com/"
            target="_blank"
            rel="noreferrer"
          >
          AL KATEF IT SOLUTIONS
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
