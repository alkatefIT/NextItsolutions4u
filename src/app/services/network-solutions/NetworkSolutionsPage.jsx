"use client";

import dynamic from "next/dynamic";

const NetworkSolutions = dynamic(() => import("./NetworkSolutions"), { ssr: false });

export default function NetworkSolutionsPage() {
  return <NetworkSolutions />;
}