"use client"; // Ensures client-side rendering

import Image from "next/image";
import "../../app/home/Home2.css"
import { useRouter } from "next/navigation";

const ServicesBox = ({ img, desc, title, redirect, alttxt }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(redirect); // Navigate to the provided URL
  };

  return (
    <div className="services-box p-3">
      <div>
        {/* Optimized Next.js Image */}
        <Image className="mt-2" src={img} width={100} height={100} alt={alttxt} />

        {/* Title & Description */}
        <h4 className="mt-4">{title}</h4>
        <p className="mt-4">{desc}</p>

        {/* Learn More Button */}
        <button onClick={handleButtonClick} className="btn btn-success rounded-4 mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServicesBox;
