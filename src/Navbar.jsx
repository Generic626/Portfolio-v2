import { Link } from "react-scroll";
import Logo from "./UI/Logo";

const Navbar = () => {
  return (
    <nav className="z-10 text-md fixed bg-primary h-[65px] top-0 w-full flex items-center justify-between p-4">
      {/* Logo */}
      <a href="#hero">
        <Logo />
      </a>
      {/* Nav Items */}
      <ul className="hidden lg:flex gap-8 uppercase">
        <Link to="about" smooth={true} offset={-80} duration={500}>
          <li className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150">
            About Me
          </li>
        </Link>

        <Link to="experience" smooth={true} offset={-80} duration={500}>
          <li className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150">
            Career
          </li>
        </Link>

        <Link to="projects" smooth={true} offset={-70} duration={500}>
          <li className="text-zinc-400 cursor-pointer hover:text-zinc-200 ease-in duration-150">
            Projects
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
