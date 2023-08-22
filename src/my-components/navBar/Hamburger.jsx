"use client";
import React, { useState } from "react";
import SidebarNav from "./SidebarNav";

//hamburger will take care of the sidebar navigation
function Hamburger() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <SidebarNav showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <button
        onClick={() => setShowSidebar(true)}
        className="inline-flex items-center justify-center rounded-md font-medium transition-colors lg:hidden"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLineCap="round"
          strokeLineJoin="round"
          class="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </>
  );
}

export default Hamburger;
