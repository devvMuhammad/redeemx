"use client";
import React, { useEffect, useRef } from "react";

function SidebarNav({ showSidebar, setShowSidebar }) {
  const sidebarRef = useRef();
  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    const closeSidebarOnOutsideClick = (e) => {
      if (showSidebar && sidebarElement && !sidebarElement.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    document.addEventListener("click", closeSidebarOnOutsideClick);
    return () => {
      document.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [showSidebar]);
  return (
    <>
      {/* Darkish overlay */}
      {showSidebar && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-0 left-0 h-full bg-black z-50 transition-all duration-300 ease-in ${
          showSidebar ? "w-1/3 border-r-[1px] border-solid border-white" : "w-0"
        }`}
      >
        <h1
          className={`transition-opacity duration-300 ease-in ${
            showSidebar ? "opacity-100" : "opacity-0"
          }`}
        >
          Content
        </h1>
      </div>
    </>
  );
}

export default SidebarNav;
