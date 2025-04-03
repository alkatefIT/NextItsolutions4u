"use client";

import Image from "next/image";
import telecomImg from "../../../assets/telecom.webp";
import CTA from "@/components/CTA/CTA";
import "./Telecom.css";

export default function Telecom() {
  return (
    <div>
      <div className="container telecom-container">
        <h1 className="mt-5">
          <span className="title-blue">Business Connectivity Transformed:</span>
          <span className="title-orange"> Al Katef IT Solutions</span>
        </h1>

        <div className="telecom-img d-flex justify-content-center align-items-center">
          <Image
            src={telecomImg}
            className="object-fit-cover"
            alt="Telecom Solutions"
            priority
          />
        </div>

        <p>
          Al Katef IT Solutions welcomes you as your trusted partner in
          revolutionizing business connectivity across the UAE. Strategically
          headquartered in Musaffah, Abu Dhabi, we serve clients throughout the
          Emirates with tailored IT solutions, meticulously designed to meet the
          diverse needs of modern enterprises.
        </p>

        <h2>
          <span className="title-blue">Customized Telecom Infrastructure:</span>
        </h2>
        <p>
          A thorough analysis of your requirements is conducted by our expert
          team to design and deploy customized solutions ensuring seamless
          communication experiences. From small-scale setups to enterprise-level
          deployments, comprehensive coverage is provided.
        </p>

        <h2>
          <span className="title-blue">Unified Communication Platforms:</span>
        </h2>
        <p>
          Communication across your organization is simplified with unified
          communication platforms. Voice, video, messaging, and conferencing are
          seamlessly integrated into a single, intuitive interface accessible
          from any device. Integration into existing workflows fosters efficient
          collaboration and decision-making.
        </p>

        <h2>
          <span className="title-blue">Secure Networking Solutions:</span>
        </h2>
        <p>
          Prioritizing the protection of your data and privacy, comprehensive
          networking solutions including robust firewalls, intrusion detection
          systems, and encryption protocols are provided. Trust is ensured in
          the security of your communications across the UAE.
        </p>

        <h2>
          <span className="title-blue">Scalable Cloud Solutions:</span>
        </h2>
        <p>
          Leveraging the power of the cloud to drive agility and scalability in
          your IT infrastructure, flexibility and cost-effectiveness are
          offered. Resource scaling according to business needs, be it
          application hosting, data storage, or remote access solutions, is
          facilitated across the UAE.
        </p>

        <h2>
          <span className="title-blue">Dedicated Support Across the UAE:</span>
        </h2>
        <p>
          Exceptional customer support is provided to clients across the UAE,
          with the office strategically positioned in Abu Dhabi. A dedicated
          support team is available 24/7 to address any technical issues or
          concerns, ensuring uninterrupted operations for your business.
        </p>

        <CTA/>
      </div>
    </div>
  );
}
