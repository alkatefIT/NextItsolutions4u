"use client";

import dynamic from "next/dynamic";

const Cctv = dynamic(() => import("./Cctv"), { ssr: false });

export default function CctvPage() {
  return <Cctv />;
}
