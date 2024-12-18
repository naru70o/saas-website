"use client";

import HumbergerMenu from "@/ui/HumbergerMenu";
import Image from "next/image";
import navLogo from "../assets/images/logosaas.png";
import { useState } from "react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {!isOpen && (
            <>
              <div className="relative">
                <div>
                  <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                  <Image
                    src={navLogo}
                    alt="Saas logo"
                    className="h-12 w-12 relative"
                  />
                </div>
              </div>
              {/* icon */}
              <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
                <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </>
          )}

          {/* Message */}

          <nav
            className={`hidden sm:flex items-center transition-all duration-150 text-white gap-6 `}
          >
            <a
              href="#"
              className="opacity-60 hover:opacity-100  transition-all duration-150 text-white hover:text-opacity-100"
            >
              Home
            </a>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#"
              className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-black/70 hover:text-black transition-all duration-150 bg-white rounded-md px-4 py-2 hover:text-opacity-100 "
            >
              Get for free
            </a>
          </nav>

          {/*  */}
          {isOpen && (
            <>
              <div className="bg-white/20 backdrop-blur-3xl h-screen overflow-hidden w-screen sm:hidden relative z-1">
                <div className="absolute top-0 right-0 m-4">
                  <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <nav
                  className={`flex flex-col items-center transition-all duration-150 text-white gap-6 h-full w-full mt-[50%]`}
                >
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
                  >
                    Updates
                  </a>
                  <a
                    href="#"
                    className="opacity-60 hover:opacity-100 transition-all duration-150 text-white hover:text-opacity-100"
                  >
                    Customers
                  </a>
                  <a
                    href="#"
                    className="text-black/70 hover:text-black transition-all duration-150 bg-white rounded-md px-4 py-2 hover:text-opacity-100 "
                  >
                    Get for free
                  </a>
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
/*
${
              isOpen
                ? "flex flex-col backdrop-blur-sm bg-[#f87bff53] h-screen overflow-hidden w-screen "
                : ""
            }
*/
