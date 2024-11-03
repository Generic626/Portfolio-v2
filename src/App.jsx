import Navbar from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
