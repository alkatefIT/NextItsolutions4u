"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function ContactPage() {
  return (
    <div>
      <Contact/>
    </div>
  );
}
