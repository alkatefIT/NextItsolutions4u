"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const About = dynamic(() => import("./About"), { ssr: false });

export default function AboutPage() {
  return (
    <div>
      <About/>
    </div>
  );
}
