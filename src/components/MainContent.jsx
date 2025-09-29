import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function MainContent({ activeFile }) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {activeFile === "AboutMe.jsx" && <AboutMe />}
      {activeFile === "PortfolioSite.jsx" && <Projects filter="portfolio" />}
      {activeFile === "DiscordBot.ts" && <Projects filter="discord" />}
      {activeFile === "CoupleApp.dart" && <Projects filter="couple" />}
      {activeFile === "Experience.md" && <Experience />}
      {activeFile === "Skills.json" && <Skills />}
      {activeFile === "Contact.tsx" && <Contact />}
    </main>
  );
}

export default MainContent;
