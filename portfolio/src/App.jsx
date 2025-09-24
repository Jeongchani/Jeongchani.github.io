import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Career from "./pages/Career/Career";
import Experience from "./pages/Experience/Experience";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/career" element={<Career />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
