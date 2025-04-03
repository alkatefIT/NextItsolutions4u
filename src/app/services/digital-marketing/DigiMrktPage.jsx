"use client";

import dynamic from "next/dynamic";

const DigiMrkt = dynamic(() => import("./DigiMrkt"), { ssr: false });

export default function DigiMrktPage() {
  return <DigiMrkt />;
}
