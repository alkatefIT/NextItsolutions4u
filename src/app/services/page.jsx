"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const Services = dynamic(() => import("./Services"), { ssr: false });

export default function ServicesPage() {
  return (
    <div>
      <Services />
    </div>
  );
}
