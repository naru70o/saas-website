import Instaicon from "../assets/icons/insta.svg";
import Xsocial from "../assets/icons/x-social.svg";
import Tiktokicon from "../assets/icons/tiktok.svg";
import Youtubeicon from "../assets/icons/youtube.svg";
export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2024 Your Company, Inc. All rights reserved
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <Instaicon />
            <Xsocial />
            <Tiktokicon />
            <Youtubeicon />
          </div>
        </div>
      </div>
    </footer>
  );
};
