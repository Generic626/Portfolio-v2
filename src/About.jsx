import Badge from "./UI/Badge";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary-light text-white h-[80%] w-full flex flex-col lg:flex-row relative"
    >
      {/* Left side image */}
      <div className="bg-backdrop-white w-full lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
        <img
          className="object-cover size-full md:size-[90%] lg:size-[80%] rounded-2xl "
          src="/profile.png"
        />
      </div>

      {/* Right side section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="flex flex-col w-[80%] ">
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
          <div className="flex gap-2">
            <Badge text="react" img="/react.png" />
            <Badge text="tailwind" img="/tailwind.png" />
            <Badge text="mongoDB" img="/mongo.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
