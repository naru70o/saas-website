import Image from "next/image";
import navLogo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={navLogo}
              alt="Saas logo"
              className="h-12 w-12 relative"
            />
          </div>
          {/* icon */}
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          {/* Message */}
          <nav className="hidden sm:flex items-center text-white gap-6">
            <a
              href="#"
              className="opacity-60 text-white hover:text-opacity-100"
            >
              Home
            </a>
            <a
              href="#"
              className="opacity-60 text-white hover:text-opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="opacity-60 text-white hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="opacity-60 text-white hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#"
              className="opacity-60 text-white hover:text-opacity-100"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-black bg-white rounded-md px-4 py-2 hover:text-opacity-100"
            >
              Get for free
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
