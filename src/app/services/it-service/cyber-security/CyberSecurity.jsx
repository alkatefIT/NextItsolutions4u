import React from "react";
import cybersecurity from "../../../../assets/cybersecurity.svg";
import Image from "next/image";
import "../cloud-computing/CloudComputing"

const CyberSecurity = () => {
  return (
    <div>


      <div className="container cybersecurity-container">
        <h1 className="text-center">
          <span className="title-blue">cyber</span>
          <span className="title-orange">Security</span>
        </h1>

        <div className="agency-content-img">
          <Image
            src={cybersecurity}
            alt="digital marketing agency
            in Dubai"
          />
        </div>

        <p>
          Cybersecurity is the field of protecting data, networks, and computer
          systems from online threats, loss, and damage. It entails putting
          rules in place to protect IT assets and guaranteeing data
          availability, confidentiality, and integrity. A variety of tools,
          procedures, and practices are included in cybersecurity strategies to
          protect against ransomware, phishing scams, infections, and
          unauthorized access.
        </p>

        <div className="cloud-solutions ">
          <div className="solutions-box">
            <p>
              Our organization is known for its dedication to protecting digital
              assets and reducing cyber risks, and it is at the top of offering
              premium cybersecurity services. Al Katef takes a complete strategy
              to cybersecurity, utilizing modern technologies and hiring
              qualified experts to provide a strong defense against a dynamic
              array of cyber threats.
            </p>
          </div>
          <div className="border-end"></div>

          <div className="solutions-box">
            <p>
              Risk identification, risk assessments, hacking tests, and the
              application of modern security solutions are all included in the
              company's cybersecurity services. We use advanced instruments and
              techniques to find and fix potential bugs in a customer's digital
              infrastructure, assisting in avoiding data breaches and illegal
              access.
            </p>
          </div>
        </div>
        <div className="bb border-bottom"></div>

        <div className="cloud-solutions">
          <div className="solutions-box mt-3">
            <p>
              Al Katef's active approach to cybersecurity, which includes
              ongoing monitoring and quick reaction times, is one of our main
              advantages. As a result, the impact of cyber incidents on the
              client's operations is reduced and potential risks are quickly
              recognized and neutralized.
            </p>
          </div>
          <div className="border-end"></div>

          <div className="solutions-box mt-3">
            <p>
              Al Katef Company is a reputable cybersecurity service provider in
              the United Arab Emirates, providing customized solutions to
              protect businesses from the wide range of cyber threats that are
              always changing. Our commitment to remaining at the top of
              cybersecurity establishes us as a reliable partner for companies
              looking to safeguard their digital assets effectively.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CyberSecurity;
