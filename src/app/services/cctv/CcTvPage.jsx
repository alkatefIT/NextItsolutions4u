"use client";

import dynamic from "next/dynamic";

const CcTv = dynamic(() => import("./CcTv"), { ssr: false });

export default function CcTvPage() {
  return <CcTv />;
}
