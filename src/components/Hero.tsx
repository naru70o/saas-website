import Image from "next/image";
import ArrowWicon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
export const Hero = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42,#200D42,#4F21A1,#A46EDB)] py-[72px] text-white overflow-clip-webkit">
      {/* cicle */}
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black -translate-x-1/2 left-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_62%,#9560EB)] top-[calc(100%-96px)] md:top-[calc(100%-180px)] sm:top-[calc(100%-300px)] z-0 hidden"></div>
      {/* content */}
      <div className="container relative ">
        {/* vertion link */}
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="text-white border py-1 px-2 inline-flex gap-3 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text bg-[-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="flex gap-1 items-center">
              <span>Read More</span>
              <ArrowWicon />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-bold sm:text-9xl text-center inline-flex tracking-tight ">
              One Task <br />
              at a Time
            </h1>
            <Image
              src={cursorImage}
              height="200"
              width="200"
              alt="cursor-imag"
              className="absolute right-[476px] top-[108px] sm:inline hidden"
            />
            <Image
              src={messageImage}
              height="200"
              width="200"
              alt="message-image"
              className="absolute left-[496px] top-[56px] hidden sm:inline"
            />
          </div>
        </div>
        <p className="text-center text-2xl mt-8 max-w-md mx-auto">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex justify-center mt-8">
          <button className="text-black py-3 px-5 bg-white  rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
