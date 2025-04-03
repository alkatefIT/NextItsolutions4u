"use client";

import dynamic from "next/dynamic";

const Ppc = dynamic(() => import("./Ppc"), { ssr: false });

export default function PpcPage() {
  return <Ppc />;
}