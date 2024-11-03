import Logo from "./UI/Logo";

const Navbar = () => {
  return (
    <nav className="z-10 text-md fixed bg-primary h-[65px] top-0 w-full flex items-center justify-between p-4">
      {/* Logo */}
      <a href="#hero">
        <Logo />
      </a>
      {/* Nav Items */}
      <div className="hidden lg:flex gap-8 uppercase">
        <a
          href="#about"
          className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150"
        >
          About Me
        </a>
        <a
          href="#experience"
          className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150"
        >
          Career
        </a>
        <a
          href="#projects"
          className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150"
        >
          Projects
        </a>
        <a className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150">
          Let&apos;s Connect
        </a>
      </div>
      {/* Some kind of button */}
      {/* <button className="hidden md:inline bg-primary-dark rounded-md py-2 px-4">
        Get My Resume
      </button> */}
    </nav>
  );
};

export default Navbar;
