import React from "react";
import "./ItService.css";
// import Whatsapp from '../components/Whatsapp'
import { Button } from "react-bootstrap";
import IT from "../../../assets/it-service.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ItServiceBox from "@/components/IT-Service-Box/ItServiceBox";

const ItService = () => {
    const router = useRouter();

    const handleContact = () => {
      router.push("/contact"); // Next.js navigation
    };

  return (
    <div>
      {/* <Whatsapp/> */}

      <div className="container mt-4">
        <h1>
          <span className="title-blue">
            Unleash Your Business Potential with Cutting-Edge
          </span>{" "}
          <span className="title-orange">IT Services in UAE</span>
        </h1>
      </div>

      <div className="it-service-top">
        <div className="it-service-img">
          <Image src={IT} alt="IT Services" />
        </div>
        <div className="it-service-content">
          <h3>
            <span className="title-blue">
              {" "}
              Empowering businesses across the UAE with innovative technology
              solutions.
            </span>
          </h3>
          <p>
            Boost Efficiency and Productivity: Streamline operations, automate
            tasks, and unlock new growth opportunities with our managed IT
            services.
          </p>
          <p>
            Enhance Security and Compliance: Safeguard your data with robust
            cybersecurity solutions and ensure compliance with UAE regulations.
          </p>
          <p>
            Optimize your Cloud Strategy: Leverage the power of the cloud to
            scale your infrastructure, improve flexibility, and reduce costs.
          </p>
          <p>
            Empower your Workforce: Equip your team with the latest tools and
            technologies to collaborate effectively and drive innovation.
          </p>
          <Button onClick={handleContact} variant="primary">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="all-service-points d-flex justify-content-center flex-wrap gap-3 mt-5">
        <ItServiceBox cname="i1"  title='Cloud Computing' btn='View' redirect={'it-service/cloud-computing'}/>
            <ItServiceBox cname="i2" title='Cybersecurity' btn='View' redirect={'it-service/cyber-security'}/>
            <ItServiceBox cname="i3" title='Network Infrastructure' redirect={'it-service/network-infrastructure'} btn='View'/>
            <ItServiceBox cname="i4" title='Software Development' redirect={'it-service/software-development'} btn='View'/>
            <ItServiceBox cname="i5" title='Data Management' redirect={'it-service/data-management'} btn='View'/>
            <ItServiceBox cname="i6" title='Business Intelligence ' redirect={'it-service/business-intelligence'} btn='View'/>
            <ItServiceBox cname="i7"title='IT Consulting' redirect={'it-service/it-consulting'} btn='View'/>
      
      </div>
    </div>
  );
};

export default ItService;
