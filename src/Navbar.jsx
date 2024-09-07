const Navbar = () => {
  return (
    <nav className="z-10 text-md fixed bg-primary h-[65px] top-0 w-full flex items-center justify-between p-4">
      {/* Logo */}
      <span className="border-[2px] border-white px-4 py-2 font-bold">
        MATTHEW.DEV
      </span>
      {/* Nav Items */}
      <div className="hidden md:flex gap-8 uppercase">
        <span className="text-zinc-400 cursor-pointer">About Me</span>
        <span className="text-zinc-400 cursor-pointer">Skill Set</span>
        <span className="text-zinc-400 cursor-pointer">Experience</span>
        <span className="text-zinc-400 cursor-pointer">Past Projects</span>
        <span className="text-zinc-400 cursor-pointer">Let&apos;s Connect</span>
      </div>
      {/* Some kind of button */}
      {/* <button className="hidden md:inline bg-primary-dark rounded-md py-2 px-4">
        Get My Resume
      </button> */}
    </nav>
  );
};

export default Navbar;
