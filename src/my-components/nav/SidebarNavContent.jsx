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
    <div className="flex flex-col justify-center p-4 mt-10">
      <p className="font-bold text-xl sm:text-2xl text-center border-b-2 border-solid border-white w-full pb-2">
        Categories
      </p>
      <div
        className={`mt-10 transition-opacity duration-300 ease-in ${
          showSidebar ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ------------- ACTUAL CONTENT GOES HERE --------- */}

        <Accordion className="border-b-0" type="single" collapsible>
          {navBarMenuArray.map((item) => (
            <AccordionItem key={item.title} value={`${item.title}`}>
              <AccordionTrigger className="text-lg -xl font-extrabold">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="text-left text-xl flex flex-col gap-2 ml-2">
                  {item.menu.map((menuItem) => (
                    <Link
                      key={menuItem}
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
  );
}

export default SidebarNavContent;
