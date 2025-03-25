"use client";

import dynamic from "next/dynamic";

const ItConsulting = dynamic(() => import("./ItConsulting"), { ssr: false });

export default function ItConsultingPage() {
  return <ItConsulting />;
}
