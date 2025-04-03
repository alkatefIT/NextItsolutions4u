"use client";

import dynamic from "next/dynamic";

const RentalService = dynamic(() => import("./RentalService"), { ssr: false });

export default function RentalServicePage() {
  return <RentalService />;
}