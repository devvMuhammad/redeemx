"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import navBarMenuArray from "./categories";
function SidebarNavContent({ showSidebar }) {
  return (
    <div
      className={`mt-20 transition-opacity duration-300 ease-in ${
        showSidebar ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ------------- ACTUAL CONTENT GOES HERE --------- */}
      <Accordion className="p-4 border-b-0" type="single" collapsible>
        {navBarMenuArray.map((item) => (
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
  );
}

export default SidebarNavContent;
