"use client";

import dynamic from "next/dynamic";

const Certificate = dynamic(() => import("./Certificate"), { ssr: false });

export default function CertificatePage() {
  return <Certificate />;
}
