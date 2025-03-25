"use client";

import dynamic from "next/dynamic";

const BusinessIntelgnc= dynamic(() => import("./BusinessIntelgnc"), { ssr: false });

export default function BusinessIntelgncPage() {
  return <BusinessIntelgnc/>;
}
