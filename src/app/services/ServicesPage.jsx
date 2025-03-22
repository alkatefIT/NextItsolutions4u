// app/services/ServicesPage.jsx
"use client";

import dynamic from "next/dynamic";

const Services = dynamic(() => import("./Services"), { ssr: false });

export default function ServicesPage() {
  return <Services />;
}
