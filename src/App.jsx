import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skill from "./sections/Skill";
import Experience from "./sections/Experience";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;

