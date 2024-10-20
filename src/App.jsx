import Navbar from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
