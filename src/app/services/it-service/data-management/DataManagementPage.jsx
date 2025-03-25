"use client";

import dynamic from "next/dynamic";

const DataManagement = dynamic(() => import("./DataManagement"), { ssr: false });

export default function DataManagementPage() {
  return <DataManagement />;
}
