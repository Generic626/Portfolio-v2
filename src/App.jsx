import Navbar from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
