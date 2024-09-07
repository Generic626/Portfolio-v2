import { useEffect } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { GoDownload } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #051931 65%, ${color})`;

  const handleSocialOnClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="h-full w-full p-4 flex flex-col justify-center items-center"
    >
      {/* Avatar Image */}

      <div className="border-[4px] border-white rounded-[50%] w-[200px] h-[200px] bg-highlight flex justify-center items-center">
        <img src="/avatar.png" />
      </div>

      {/* Title */}
      <div className="text-center mt-4">
        <h1 className="text-4xl md:text-6xl mt-4 font-normal">
          My Name is Matthew
        </h1>
        <h2 className="text-xl md:text-2xl mt-2 md:mt-4 font-thin">
          And I&apos;m a developer
        </h2>
        {/* Get Resume */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ y: 3 }}
          className="inline bg-primary-dark rounded-full py-2 px-4 mt-4 shadow-lg"
        >
          <div className="flex justify-center items-center gap-2">
            <span>Get My Resume</span>
            <GoDownload />
          </div>
        </motion.button>
        {/* Social Icons */}
        <div className="flex gap-4 justify-center items-center mt-8">
          <BsGithub
            className="size-[35px] cursor-pointer"
            onClick={() => {
              handleSocialOnClick("https://github.com/Generic626");
            }}
          />
          <FaLinkedin
            className="size-[35px] cursor-pointer"
            onClick={() => {
              handleSocialOnClick(
                "https://www.linkedin.com/in/matthew-tze-ken-fung-01736b270/"
              );
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};
