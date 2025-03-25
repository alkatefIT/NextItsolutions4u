"use client";

import dynamic from "next/dynamic";

const SoftwareDev = dynamic(() => import("./SoftwareDev"), { ssr: false });

export default function SoftwareDevPage() {
  return <SoftwareDev />;
}
