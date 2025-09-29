import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function MainContent({ activeFile, selectedLanguages }) {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      {activeFile === "AboutMe.jsx" && <AboutMe />}

      {activeFile === "Skills.json" && <Skills />}

      {activeFile === "Projects/index.tsx" && <Projects filters={selectedLanguages} />}
      
      {activeFile === "Experience.md" && <Experience />}

      {activeFile === "Contact.tsx" && <Contact />}
    </main>
  );
}

export default MainContent;
