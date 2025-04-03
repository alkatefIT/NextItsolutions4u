"use client";

import dynamic from "next/dynamic";

const SearchEngine = dynamic(() => import("./SearchEngine"), { ssr: false });

export default function SearchEnginePage() {
  return <SearchEngine />;
}