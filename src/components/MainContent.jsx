import AboutMe from "../sections/AboutMe";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

const projMap = {
  "Projects/index.tsx": null,   // show all
  "Projects/React.tsx": "React",
  "Projects/TypeScript.ts": "TypeScript",
  "Projects/Python.py": "Python",
  "Projects/Node.js": "Node.js",
};

const skillsMap = {
  "Skills/Frontend.md": "Frontend",
  "Skills/Backend.md": "Backend",
  "Skills/Server.md": "Server",
  "Skills/Mobile.md": "Mobile",
  "Skills/DevOps.md": "DevOps",
  "Skills/Tools.md": "Tools",
};

function MainContent({ activeFile }) {
  const projFilter = Object.prototype.hasOwnProperty.call(projMap, activeFile) ? projMap[activeFile] : undefined;
  const skillFilter = Object.prototype.hasOwnProperty.call(skillsMap, activeFile) ? skillsMap[activeFile] : undefined;

  return (
    <main className="flex-1 overflow-y-auto p-6">
      {activeFile === "AboutMe.jsx" && <AboutMe />}

      {activeFile === "Skills.json" && <Skills />}
      {skillFilter !== undefined && <Skills filter={skillFilter} />}

      {projFilter !== undefined && <Projects filter={projFilter} />}
      {activeFile === "Experience.md" && <Experience />}

      {activeFile === "Contact.tsx" && <Contact />}
    </main>
  );
}

export default MainContent;
