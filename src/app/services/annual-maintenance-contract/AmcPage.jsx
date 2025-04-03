"use client";

import dynamic from "next/dynamic";

const Amc = dynamic(() => import("./Amc"), { ssr: false });

export default function AmcPage() {
  return <Amc />;
}
