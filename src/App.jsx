import Navbar from "./Navbar";
import { Hero } from "./Hero";
import About from "./About";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
