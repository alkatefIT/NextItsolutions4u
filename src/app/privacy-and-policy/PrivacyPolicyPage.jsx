"use client";

import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("./PrivacyPolicy"), { ssr: false });

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
