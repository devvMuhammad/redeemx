"use client";
import React, { Children, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import Portal from "./Portal";

function SideDrawer({
  showSidebar,
  setShowSidebar,
  children,
  riseFromWhere = "left",
  visibleAll = false,
}) {
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

      {/*  -------------- Sidebar ------------------- */}

      <Portal>
        {showSidebar && (
          <div
            className={`${
              !visibleAll && "lg:hidden"
            } fixed top-0 left-0 backdrop-blur-sm  w-full h-full bg-black/50  z-40`}
            onClick={() => setShowSidebar(false)}
          ></div>
        )}
        <div
          ref={sidebarRef}
          className={`${!visibleAll && "lg:hidden"} fixed top-0 ${
            riseFromWhere === "left" ? "left-0" : "right-0"
          } h-full bg-black text-white z-50 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-out ${
            showSidebar ? "w-[60%] sm:w-[55%] md:w-[40%] lg:w-[30%]" : "w-0"
          }`}
        >
          {/* -------------- CLOSING BUTTON ------------ */}
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={() => setShowSidebar(false)}
          >
            <X />
          </span>
          {/* ----------- SIDEBAR CONTENT --------------- */}
          {children}
        </div>
      </Portal>
    </>
  );
}

export default SideDrawer;
