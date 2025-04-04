"use client";

import dynamic from "next/dynamic";

const AppDev = dynamic(() => import("./AppDev"), { ssr: false });

export default function AppDevPage() {
  return <AppDev />;
}
