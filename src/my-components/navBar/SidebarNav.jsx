"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import navBarMenu from "./categories";
import { X } from "lucide-react";

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
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-black opacity-80 z-40"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/*  -------------- Sidebar ------------------- */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-0 left-0 h-full bg-black z-50 overflow-x-hidden overflow-y-auto transition-all duration-300 ease-in ${
          showSidebar
            ? "w-[60%] sm:w-1/3 border-r-[1px] border-solid border-white"
            : "w-0"
        }`}
      >
        {/* ----------- SIDEBAR CONTENT --------------- */}
        <div
          className={`mt-20 transition-opacity duration-300 ease-in ${
            showSidebar ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* -------------- CLOSING BUTTON ------------ */}
          <span
            className="absolute top-3 right-4 cursor-pointer"
            onClick={() => setShowSidebar(false)}
          >
            <X />
          </span>
          {/* ------------- ACTUAL CONTENT GOES HERE --------- */}
          <Accordion className="p-4 border-b-0" type="single" collapsible>
            {navBarMenu.map((item) => (
              <AccordionItem value={`${item.title}`}>
                <AccordionTrigger className="text-2xl font-bold">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="text-center text-xl flex flex-col gap-2  ">
                    {item.menu.map((menuItem) => (
                      <Link
                        className="hover:underline"
                        href={`/${menuItem.toLowerCase().split(" ").join("")}`}
                      >
                        {menuItem}
                      </Link>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default SidebarNav;
