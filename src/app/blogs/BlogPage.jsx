"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const Blogs = dynamic(() => import("./Blogs"), { ssr: false });

export default function BlogPage() {
  return (
    <div>
      <Blogs/>
    </div>
  );
}
