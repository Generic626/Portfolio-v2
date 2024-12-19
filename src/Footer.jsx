import { BsGithub } from "react-icons/bs";
import Logo from "./UI/Logo";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section className="bg-footer p-8 flex justify-center">
      <div className="w-[80%] h-[200px] flex flex-col justify-center items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-4 justify-center items-center mt-6">
          <BsGithub
            className="size-[30px] cursor-pointer text-zinc-400 hover:text-white ease-linear duration-150"
            onClick={() => {
              handleSocialOnClick("https://github.com/Generic626");
            }}
          />
          <FaLinkedin
            className="size-[30px] cursor-pointer text-zinc-400 hover:text-white ease-linear duration-150"
            onClick={() => {
              handleSocialOnClick(
                "https://www.linkedin.com/in/matthew-tze-ken-fung-01736b270/"
              );
            }}
          />
        </div>

        {/* Footer Row */}
        <div className="flex justify-center items-center gap-4">
          {/* Logo */}
          <a href="#hero">
            <Logo />
          </a>
          {/* Divider */}
          <div className="h-full border-r border-white"></div>
          {/* Trademark */}
          <span className="text-zinc-400 text-sm">
            2024 Matthew Fung © All rights reserved
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
