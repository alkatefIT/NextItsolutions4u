"use client";

import dynamic from "next/dynamic";

const WebDev = dynamic(() => import("./WebDev"), { ssr: false });

export default function WebDevPage() {
  return <WebDev />;
}
