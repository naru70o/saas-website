import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-xl text-white/70">
          Trusted by the worlds most inovative companies
        </h2>
        <div className="overflow-hidden mt-9 relative">
          <div className="flex justify-between gap-16 mx-auto before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-[20px] after:w-[20px] before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))]">
            {images.map(({ src, alt }) => {
              return (
                <Image
                  src={src}
                  alt={alt}
                  key={alt}
                  className="flex-none h-8 w-auto"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
