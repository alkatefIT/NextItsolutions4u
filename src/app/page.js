"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const HomeView = dynamic(() => import("./home/HomeView"), { ssr: false });

export default function Home() {
  return (
    <div>
      <HomeView />
    </div>
  );
}
