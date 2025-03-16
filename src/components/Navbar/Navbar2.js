import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from '../../assets/logo_black.png';
import "./Navbar.css"


const Navbar2 = () => {
  return (
    <div className='Navbar2-home'>
      
      <nav className="navbar navbar-expand-lg navbar-home">
          <div className="nav-item-parent">
            <Link className="navbar-brand" href='/'>
              <Image src={Logo} className='main-logo' alt="Logo" />

            </Link>
            <button className="navbar-toggler bg-white navbar-toggler-home" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5 " id="navbarNav">
              <ul className="navbar-nav navbar-nav-home ">
                <li className="nav-item nav-item-home ">
                  <Link className="nav-link nav-link-home text-black" aria-current="page" href='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-home text-black" href='/about'>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-home text-black" href='/services'>Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-home text-black" href='/products'>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-link-home text-black" href='/blogs'>Blog</Link>
                </li>
                <li className="nav-item  ">
                  <Link className="nav-link nav-contact-li nav-link-home text-black pe-5" href='/contact'>Contact Us</Link>
                </li>

                <button className='btn btn-outline nav-contact rounded-5'>
                  <Link className="nav-link nav-link-home" href='/contact'>Contact Us</Link>
                </button>
              </ul>
            </div>
          </div>
        </nav>

    </div>
  )
}

export default Navbar2
