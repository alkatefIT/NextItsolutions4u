"use client"; // Ensure client-side rendering

import Image from "next/image";
import "./LogoSlider.css";

import Logo1 from "../../assets/company-1.png";
import Logo2 from "../../assets/company-2.png";
import Logo3 from "../../assets/company-3.png";
import Logo4 from "../../assets/company-4.png";
import Logo5 from "../../assets/company-5.png";
import Logo6 from "../../assets/company-6.png";
import Logo7 from "../../assets/company-7.png";
import Logo8 from "../../assets/company-8.png";
import Logo9 from "../../assets/company-9.png";
import Logo10 from "../../assets/company-10.png";

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
];

const LogoSection = () => {
  return (
    <div className="logo-section">
      {/* Animated logo slider */}
      <div className="logo-slider">
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            className="logo"
            src={logo}
            alt={`Company Logo ${index + 1}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
