"use client";

import dynamic from "next/dynamic";

const SocialMedia = dynamic(() => import("./SocialMedia"), { ssr: false });

export default function SocialMediaPage() {
  return <SocialMedia />;
}
