"use client";

import dynamic from "next/dynamic";

const Branding = dynamic(() => import("./Branding"), { ssr: false });

export default function BrandingPage() {
  return <Branding />;
}
