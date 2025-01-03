"use client";

import Image from "next/image";
import emogiStar from "../assets/images/emojistar.png";
import helix2 from "../assets/images/helix2.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 75]);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helix2}
            alt=""
            className="absolute top-6 left-[calc(100%+34px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emogiStar}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
          Get instant access
        </h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="flex flex-col mt-10 gap-2.5 max-w-sm mx-auto sm:flex-row sm:flex-1">
          <input
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]"
            placeholder="your@email.com"
          />
          <button className="h-12 bg-white text-black px-5 rounded-lg">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
