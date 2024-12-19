"use client";
import HumbergerMenu from "@/ui/HumbergerMenu";
import Image from "next/image";
import { useState } from "react";
import navLogo from "../assets/images/logosaas.png";
import { motion, AnimatePresence } from "framer-motion";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <>
            <div className="relative">
              <div>
                <div
                  className={`absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md `}
                ></div>
                <Image
                  src={navLogo}
                  alt="Saas logo"
                  className={`h-12 w-12 relative ${isOpen ? "hidden" : ""}`}
                />
              </div>
            </div>
            {/* icon */}
            <div
              className={`border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden  ${
                isOpen ? "hidden" : ""
              }`}
            >
              <HumbergerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </>

          {/* big screens nav */}

          <nav
            className={`hidden sm:flex items-center transition-all duration-150 text-white gap-6`}
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

          {/* mobile nav */}
          {/*  */}
          {isOpen && (
            <AnimatePresence>
              <motion.div
                className={`bg-[#f87aff62] inset-0 backdrop-blur-xl h-screen overflow-hidden w-screen sm:hidden relative ${
                  isOpen ? "visible" : "hidden"
                }`}
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: -100, opacity: 0 }}
              >
                <div className="absolute top-0 right-0 m-2">
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
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};
