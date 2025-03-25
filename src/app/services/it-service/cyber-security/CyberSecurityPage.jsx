// app/services/ServicesPage.jsx
"use client";

import dynamic from "next/dynamic";

const CyberSecurity = dynamic(() => import("./CyberSecurity"), { ssr: false });

export default function CyberSecurityPage() {
  return <CyberSecurity />;
}
