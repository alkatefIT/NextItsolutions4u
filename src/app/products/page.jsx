"use client";

import dynamic from "next/dynamic";

// Lazy load HomeView (won't be pre-rendered on the server)
const Products = dynamic(() => import("./Products"), { ssr: false });

export default function ProductsPage() {
  return (
    <div>
      <Products/>
    </div>
  );
}
