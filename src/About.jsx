import Badge from "./UI/Badge";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary-light text-white h-[80%] w-full flex flex-col lg:flex-row relative"
    >
      {/* Right side section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center h-auto order-2 lg:order-1">
        <div className="flex flex-col w-[80%] rounded-lg p-8">
          <div className="text-2xl font-bold flex mb-4">
            <div className="bg-highlight w-[4px] mr-2" />
            <span>About Me</span>
          </div>
          {/* About me Body */}
          <p>Hello there 👋! My name is Matthew, and I&apos;m a developer.</p>
          <br />
          <p className="text-justify">
            I graduated from Hong Kong Polytechnic University as a Computer
            Science major in 2024. I am currently working at a startup company
            at HKSTP as a Software Engineer. I am deeply interested in Web
            related development.
          </p>
          <br />

          <p className="text-justify">
            I Identify myself as a hardworking, responsible person that is up to
            any task, and is willing to work as a team.
          </p>

          <br />
          {/* Badges */}
          <div className="flex items-center gap-2 bg-white rounded-full w-fit p-2">
            <span className="text-black">My Favourite Tech:</span>
            <Badge text="React" img="/tech/react.png" />
            <Badge text="Tailwind" img="/tech/tailwind.png" />
          </div>
        </div>
      </div>

      {/* Left side image */}
      <div className="bg-white w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 p-4 lg:p-0">
        <motion.img
          // initial={{
          //   opacity: 0,
          //   y: 20,
          // }}
          // whileInView={{
          //   opacity: 1,
          //   y: 0,
          // }}
          // transition={{ duration: 1 }}
          className="object-cover size-full md:size-[90%] lg:size-[80%] rounded-2xl "
          src="/assets/profile.png"
        />
      </div>
    </section>
  );
};

export default About;
