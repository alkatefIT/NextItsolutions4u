"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Footer.css";
import LogoDark from "../../assets/logo_black.png";
import PayCard from "../../assets/footer_payment.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
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
  const pathname = usePathname();
  const isCctvPath = pathname === "/services/closed-circuit-television";

  return (
    <div className="footer-parent">
      <hr />
      <div className="footer-cover">
        <div className="footer-logo-section">
          <div style={{ width: 150, height: 50, marginBottom:20 }}>
            <Image
              src={LogoDark}
              alt="Company Logo"
              width={150}
              height={50}
              priority
            />
          </div>
          <p>
            Al Katef IT Solutions is a global IT solutions company based in the
            UAE, with over 20 years experience in IT service, printer service,
            and digital marketing.
          </p>
          <div className="soc-med-i d-flex justify-content-between fs-5 align-items-center">
            {[
              { icon: faFacebook, link: "https://www.facebook.com/alkatef.uae" },
              { icon: faInstagram, link: "https://www.instagram.com/alkatef.uae/" },
              { icon: faLinkedin, link: "https://www.linkedin.com/company/alkatefuae/" },
              { icon: faYoutube, link: "https://www.youtube.com/@alkatefuae" },
              { icon: faXTwitter, link: "https://twitter.com/alkatef_uae" },
            ].map((item, idx) => (
              <p className="icons" key={idx}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={item.icon} fixedWidth />
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="footer-product-section">
          <p className="footer-section-title">PRODUCTS</p>
          <div className="footer-links-flex">
            <Link href="/printer" className="footer-links-flex-link">
              Printer
            </Link>
            {isCctvPath ? (
              <span className="footer-links-flex-link disabled-link">CCTV</span>
            ) : (
              <Link
                href="/services/closed-circuit-television"
                className="footer-links-flex-link"
              >
                CCTV
              </Link>
            )}
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
            <Link href="/terms-and-conditions" className="footer-links-flex-link">
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
            <FontAwesomeIcon icon={faHouse} style={{ color: "black" }} fixedWidth />{" "}
            M-25 Mussafah, Abu Dhabi, UAE
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} fixedWidth />{" "}
            sales@itsolutions4u.co
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faPhone} style={{ color: "black" }} fixedWidth />{" "}
            +971 55 644 9916
          </div>
          <div className="footer-section-contact">
            <FontAwesomeIcon icon={faTty} style={{ color: "black" }} fixedWidth />{" "}
            +971 2 552 4336
          </div>
          <div style={{ width: 150, height: 50, marginTop: "0.5rem" }}>
            <Image
              src={PayCard}
              alt="Payment Methods"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="footer-line-parent">
        <hr className="footer-line" />
      </div>

      <div className="footer-copyright-section">
        <p>
          &copy; 2023 itsolutions4u.co All rights reserved. Designed by{" "}
          <a
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
