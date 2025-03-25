"use client";

import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import Logo from "../../assets/logo_black.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container responsive-container">
        <Link className="navbar-brand" href="/">
          <Image src={Logo} alt="Logo" className="main-logo" width={220} />
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
            className="btn btn-danger rounded-pill ms-2 px-3 py-2"
          >
            Contact Us
          </Link>
          <Link
            className="nav-link text-dark"
            href="/services/it-service"
            style={{ display: "none" }}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
