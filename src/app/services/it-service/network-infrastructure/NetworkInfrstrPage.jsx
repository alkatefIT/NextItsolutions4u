"use client";

import dynamic from "next/dynamic";

const NetworkInfrstr = dynamic(() => import("./NetworkInfrstr"), { ssr: false });

export default function ITServicePage() {
  return <NetworkInfrstr />;
}
