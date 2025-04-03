"use client";

import dynamic from "next/dynamic";

const TelecomSolution = dynamic(() => import("./TelecomSolutions"), { ssr: false });

export default function TelecomSolutionPage() {
  return <TelecomSolution />;
}
