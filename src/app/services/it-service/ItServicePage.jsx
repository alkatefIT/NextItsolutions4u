// app/services/ServicesPage.jsx
"use client";

import dynamic from "next/dynamic";

const ItServices = dynamic(() => import("./ItService"), { ssr: false });

export default function ITServicePage() {
  return <ItServices />;
}
