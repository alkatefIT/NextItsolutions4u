"use client";

import dynamic from "next/dynamic";

const CloudComputing = dynamic(() => import("./CloudComputing"), { ssr: false });

export default function CloudComputingPage() {
  return <CloudComputing />;
}
