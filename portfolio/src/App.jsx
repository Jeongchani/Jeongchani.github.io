import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Career from "./sections/Career";
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
        <Projects />
        <Career />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
