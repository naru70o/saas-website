import MenuIcon from "../../assets/icons/menu.svg";
import MenuIconClose from "../../assets/icons/menuClose.svg";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (show: boolean) => void;
}

export const HumbergerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
    >
      {isOpen ? (
        <MenuIconClose className="text-white" />
      ) : (
        <MenuIcon className="text-white" />
      )}
    </div>
  );
};
