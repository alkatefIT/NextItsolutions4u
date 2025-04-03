"use client";

import FormModal from "@/components/FormModal/FormModal";
import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy load HomeView (won't be pre-rendered on the server)
const HomeView = dynamic(() => import("./home/HomeView"), { ssr: false });

export default function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <FormModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <HomeView />
    </div>
  );
}
