"use client";

import dynamic from "next/dynamic";

const ContentMarketing = dynamic(() => import("./ContentMarketing"), { ssr: false });

export default function ContentMarketingPage() {
  return <ContentMarketing />;
}
