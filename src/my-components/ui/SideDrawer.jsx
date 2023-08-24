"use client";

import React, { Children, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

function SideDrawer({
  showSidebar,
  setShowSidebar,
  children,
  riseFromWhere = "left",
  visibleAll = false,
  // purpose = "sidebar",
}) {
  // const widths = {
  //   sidebar: "w-[60%] md:w-[40%]",
  //   cart: "w-[40%]"
  // }
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
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/*  -------------- Sidebar ------------------- */}
      {createPortal(
        <div
          ref={sidebarRef}
          className={`${!visibleAll && "lg:hidden"} fixed top-0 ${
            riseFromWhere === "left" ? "left-0" : "right-0"
          } h-full bg-black text-white z-50 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-out ${
            showSidebar ? "w-[70%] md:w-[40%] lg:w-[30%]" : "w-0"
          }`}
        >
          {/* -------------- CLOSING BUTTON ------------ */}
          <span
            className="absolute top-3 right-4 cursor-pointer"
            onClick={() => setShowSidebar(false)}
          >
            <X />
          </span>
          {/* ----------- SIDEBAR CONTENT --------------- */}
          {children}
        </div>,
        document.body
      )}
    </>
  );
}

export default SideDrawer;
