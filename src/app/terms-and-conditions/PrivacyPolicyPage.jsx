"use client";

import dynamic from "next/dynamic";

const TermsConditions = dynamic(() => import("./TermsConditions"), { ssr: false });

export default function TermsConditionsPage() {
  return <TermsConditions />;
}
