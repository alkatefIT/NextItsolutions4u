"use client"; // Required for client-side navigation

import React from "react";
import { useRouter } from "next/navigation"; // Next.js navigation
import "./ItServiceBox.css"; // Ensure this CSS file is in the correct path

const ItServiceBox = ({ title, btn, cname, redirect }) => {
  const router = useRouter(); // Next.js router

  const handleLink = () => {
    router.push(redirect); // Navigate to the given redirect path
  };

  return (
    <div>
      <div className={`services-points ${cname}`}>
        <h4>{title}</h4>
        <button
          className="btn btn-outline-light border-2"
          onClick={handleLink}
        >
          <b>{btn}</b>
        </button>
      </div>
    </div>
  );
};

export default ItServiceBox;
