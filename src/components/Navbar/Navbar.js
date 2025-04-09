"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import Logo from "../../assets/logo_black.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Import Bootstrap JS only on client
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container responsive-container">
        <Link className="navbar-brand" href="/">
          <Image src={Logo} alt="Logo" className="main-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4 ">
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/blogs">
                Blog
              </Link>
            </li>
          </ul>
          <Link
            href="/contact"
            className="btn btn-danger nav-contact rounded-pill"
          >
            Contact Us
          </Link>

          {/* /////////// Links To GET In Sitemap /////////////// */}
          <div style={{ display: "none" }}>
            <Link className="nav-link text-dark" href="/services/it-service">
              IT Services
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/cyber-security"
            >
              Cybersecurity Solutions
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/cloud-computing"
            >
              Cloud Computing Services
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/network-infrastructure"
            >
              Network Infrastructure Setup
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/software-development"
            >
              Custom Software Development
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/data-management"
            >
              Data Management Solutions
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/business-intelligence"
            >
              Business Intelligence Tools
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/it-service/it-consulting"
            >
              IT Consulting Services
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/rental-service"
            >
              IT Equipment Rental Services
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/digital-marketing"
            >
              Digital Marketing Solutions
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/telecom-solutions"
            >
              Telecom Solutions
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/annual-maintenance-contract"
            >
              Annual Maintenance Contracts
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/network-solutions"
            >
              Enterprise Network Solutions
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/website-development"
            >
              Website Development Services
            </Link>
            <Link
              className="nav-link text-dark"
              href="/services/app-development"
            >
              Mobile App Development
            </Link>
            <Link className="nav-link text-dark" href="/services/branding">
              Branding & Design Services
            </Link>
          </div>
          {/* /////////// //////////////////////// /////////////// */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
