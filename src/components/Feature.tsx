"use client";

import React, { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent`;

  useEffect(() => {
    const changeMousePosition = (e: MouseEvent) => {
      // console.log(border);
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();

      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };
    window.addEventListener("mousemove", changeMousePosition);
    return () => {
      window.removeEventListener("mousemove", changeMousePosition);
    };
  }, [offsetX, offsetY]);
  return (
    <div
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
      key={title}
    >
      <motion.div
        className="inset-0 absolute border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
        ref={border}
      ></motion.div>
      <div className="inline-flex bg-white text-black h-14 w-14  justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-5 font-bold">{title}</h3>
      <p className="text-white/70 mt-2">{description}</p>
    </div>
  );
};
