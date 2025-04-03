"use client";

import Image from "next/image";
import React from "react";
import "./Home2.css";
import front from "../../assets/front.webp";
import IT from "../../assets/IT.svg";
import q from "../../assets/q.svg";
import questionImg from "../../assets/questions.svg";
import Telecom from "../../assets/telecom.svg";
import Maintenance from "../../assets/maintenance.svg";
import sales from "../../assets/sales.svg";
import network from "../../assets/network.svg";
import copying from "../../assets/copying.svg";
import Websoln from "../../assets/ser_sec_web.svg";
import BestImg from "../../assets/why-choose-us-best.svg";
import StaffImg from "../../assets/why-choose-us-staffs.svg";
import ReliableImg from "../../assets/why-choose-us-reliable.svg";
import AwardImg from "../../assets/why-choose-us-award.svg";

import { useRouter } from "next/navigation";
import ServicesBox from "@/components/Service Box/ServicesBox";
import LogoSection from "@/components/Logo-Slider/LogoSlider";
import WhychooseBox from "@/components/Why-Choose-Box/WhyChooseBox";


const HomeView = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact"); // Redirect to Contact Page
  };

  const handleServices = () => {
    router.push("/services"); // Redirect to Services Page
  };


  

  return (
    <div>
      <section className="container home-section ">
        <div className="main-home">
          {/* Left Section */}
          <div className="left-main">
            <div className="left-services">
              {["It Solutions", "Printer Service", "Digital Marketing"].map(
                (service, index) => (
                  <span className="title-orange" key={index}>
                    <h6 className="bg-light rounded-4 text-center mt-2 mb-3 p-3">
                      {service}
                    </h6>
                  </span>
                )
              )}
            </div>

            {/* Main Content */}
            <div className="left-content">
              <span className="title-blue mt-5">
                <h1 className="mb-3">
                  We Build UAE's Future with{" "}
                  <span className="title-orange"> IT Solutions.</span>
                </h1>
              </span>

              {/* Image */}
              <div className="right-main-2">
                <Image
                  className="mt-5"
                  src={front}
                  alt="Digital marketing agency in Dubai"
                />
              </div>

              {/* Description */}
              <p className="mt-3">
                Elevate your expectations with our <br className="br-none" />
                commitment to delivering the finest service.
              </p>

              {/* Buttons */}
              <div className="mt-3">
                <button
                  onClick={handleContact}
                  className="btn btn-primary rounded-5"
                >
                  Contact Us
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  onClick={handleServices}
                  className="btn btn-success rounded-5"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-main">
            <Image
              className="mt-5"
              src={front}
              alt="Digital marketing agency in Dubai"
            />
          </div>
        </div>
      </section>

      <section className="service-section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" #FEF5F3"
            fillOpacity="1"
            d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <div className="service-content">
          <span className="title-blue ">
            <h2 className="fw-bold">Our Services</h2>
          </span>

          <div className="all-services">
            <ServicesBox
              img={IT}
              title="IT Service"
              alttxt="IT Service"
              redirect="/services/it-service"
              desc="We offer a wide range of IT services in order to meet your customized requirements (IT products and services)."
            />
            <ServicesBox
              img={q}
              title="Rental Service"
              alttxt="Rental Service"
              redirect="services/rental-service"
              desc="Streamline your life with our effortless rental service, providing access to premium products without the long-term commitment"
            />
            <ServicesBox
              img={questionImg}
              title="Digital Marketing"
              alttxt="Digital Marketing"
              redirect="services/digital-marketing"
              desc="Digital marketing is an essential part of many businesses marketing strategies, as it allows them to reach a larger audience"
            />
            <ServicesBox
              img={Telecom}
              title="Telecom Solutions"
              redirect="services/telecom-solutions"
              alttxt="Telecom Solutions"
              desc="Optimize your work environment with our server solutions. Improve connectivity, data management, and performance."
            />
            <ServicesBox
              img={Maintenance}
              title="AMC"
              alttxt="AMC"
              redirect="services/annual-maintenance-contract"
              desc="We provide a yearly contract for printer /photocopier maintenance and repairs to streamline client operations."
            />
            <ServicesBox
              img={sales}
              title="Sales"
              alttxt="Sales"
              desc="Discover our diverse printers and copiers for your business needs, ensuring high-quality performance and reliability."
            />
            <ServicesBox
              img={network}
              title="Network Solutions"
              redirect="services/network-solutions"
              alttxt="Network solutions"
              desc="We provide a multitude of products, all of which aims to run your business with ease and highest efficiency."
            />
            <ServicesBox
              img={copying}
              title="Photocopying"
              alttxt="Photocopying"
              desc="Whether you need a copier for a day or a long-term, our expert team is here to provide you with personalized service and support."
            />
            <ServicesBox
              img={Websoln}
              title="CCTV"
              redirect="services/cctv"
              alttxt="cctv"
              desc="Enhance security with our state-of-the-art CCTV solutions, providing vigilant surveillance for peace of mind in every corner."
            />
          </div>
        </div>
      </section>

      <section className="company-section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L40,32C80,32,160,32,240,53.3C320,75,400,117,480,133.3C560,149,640,139,720,117.3C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="company-title">
          <h2 id="service-section">
            <span className="title-blue">TRUSTED BY</span>{" "}
            <span className="title-orange">COMPANIES LIKE</span>
          </h2>
        </div>
        <div className="service-logo">
          <LogoSection />
        </div>
      </section>

      <section className="why-choose-us">
        <h2 id="service-section">
          <span className="title-blue">WHY CHOOSE</span>{" "}
          <span className="title-orange">US</span>
        </h2>
        <p>We Are Here to HELP You Grow Your Business Exponentially</p>

        <div className="why-choose-boxes">
          <WhychooseBox
            whychooseimg={BestImg}
            whychoosetitle="BEST IN INDUSTRY"
            alttxt="BEST IN INDUSTRY"
            whychoosedesc="Equipping ourselves with in-depth knowledge and an intense passion to grow, our skills evolve into ones that exceed the expectations of our clients."
          />
          <WhychooseBox
            whychooseimg={StaffImg}
            whychoosetitle="PROFESSIONAL STAFF"
            alttxt="PROFESSIONAL STAFF"
            whychoosedesc="With the best experts and professionals in the industry, we aim to provide the best quality services that will leave you beyond satisfied."
          />
          <WhychooseBox
            whychooseimg={ReliableImg}
            whychoosetitle="RELIABLE AND TRUSTABLE"
            alttxt="RELIABLE AND TRUSTABLE"
            whychoosedesc="Experience and passion work wonders with a genuine willingness to provide the best to our clients. We take responsibility for our clients satisfaction."
          />
          <WhychooseBox
            whychooseimg={AwardImg}
            whychoosetitle="AWARD WINNING"
            alttxt="AWARD WINNING"
            whychoosedesc=" Gold Partner Award from SHARP ( New Smart Office Automation ), Best Seller Mono For The Year Award at the NSOA Channel Meet from SHARP, Best Award from Al Hayat Printing Press LLC"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeView;
