import { useState } from "react";

function Explorer({ activeFile, setActiveFile, selectedLanguages, setSelectedLanguages }) {
  const [open, setOpen] = useState({ projects: true, languages: true });

  const Item = ({ file, label, onClick }) => (
    <li
      className={`cursor-pointer px-2 py-1 rounded ${activeFile === file ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
      onClick={onClick || (() => setActiveFile(file))}
    >
      {label || file}
    </li>
  );

  const addLang = (lang) => {
    setActiveFile("Projects/index.tsx"); // ensure Projects grid is visible
    setSelectedLanguages((prev) => (prev.includes(lang) ? prev : [...prev, lang]));
  };

  return (
    <aside className="w-64 bg-[#252526] border-r border-black/30 text-sm">
      <div className="h-9 flex items-center px-3 text-gray-300 text-xs border-b border-black/30">EXPLORER</div>
      <div className="p-2">
        <ul className="space-y-1">
          <Item file="AboutMe.jsx" label="AboutMe.jsx" />

          {/* Skills single */}
          <Item file="Skills.json" label="Skills.json" />

          {/* Projects root */}
          <li
            className="cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-gray-300 hover:bg-[#2f2f34] select-none"
            onClick={() => setOpen((s) => ({ ...s, projects: !s.projects }))}
          >
            <span>{open.projects ? "▾" : "▸"}</span> Projects
          </li>
          {open.projects && (
            <ul className="ml-5 space-y-1">
              <Item file="Projects/index.tsx" label="index.tsx (All)" />
              {/* Languages folder */}
              <li
                className="cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-gray-300 hover:bg-[#2f2f34] select-none"
                onClick={() => setOpen((s) => ({ ...s, languages: !s.languages }))}
              >
                <span>{open.languages ? "▾" : "▸"}</span> Languages
              </li>
              {open.languages && (
                <ul className="ml-5 space-y-1">
                  <Item file="Projects/React.tsx" label="React.tsx" onClick={() => addLang("React")} />
                  <Item file="Projects/TypeScript.ts" label="TypeScript.ts" onClick={() => addLang("TypeScript")} />
                  <Item file="Projects/Flutter.dart" label="Flutter.dart" onClick={() => addLang("Flutter")} />
                  <Item file="Projects/Node.js" label="Node.js" onClick={() => addLang("Node.js")} />
                </ul>
              )}
            </ul>
          )}

          {/* Experience */}
          <Item file="Experience.md" label="Experience.md" />

          {/* Contact */}
          <Item file="Contact.tsx" label="Contact.tsx" />
        </ul>
      </div>
    </aside>
  );
}

export default Explorer;
