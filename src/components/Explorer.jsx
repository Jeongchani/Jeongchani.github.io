import { useState } from "react";

function Explorer({ activeFile, setActiveFile }) {
  const [open, setOpen] = useState({ projects: true, skills: true });

  const Item = ({ file, label }) => (
    <li
      className={`cursor-pointer px-2 py-1 rounded ${activeFile === file ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
      onClick={() => setActiveFile(file)}
    >
      {label || file}
    </li>
  );

  return (
    <aside className="w-64 bg-[#252526] border-r border-black/30 text-sm">
      <div className="h-9 flex items-center px-3 text-gray-300 text-xs border-b border-black/30">EXPLORER</div>
      <div className="p-2">
        <ul className="space-y-1">
          <Item file="AboutMe.jsx" label="AboutMe.jsx" />


          {/* Skills */}
          <li
            className="cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-gray-300 hover:bg-[#2f2f34] select-none mt-1"
            onClick={() => setOpen((s) => ({ ...s, skills: !s.skills }))}
          >
            <span>{open.skills ? "▾" : "▸"}</span> Skills
          </li>
          {open.skills && (
            <ul className="ml-5 space-y-1">
              <Item file="Skills.json" label="Skills.json (All)" />
              <Item file="Skills/Frontend.md" label="Frontend.md" />
              <Item file="Skills/Backend.md" label="Backend.md" />
              <Item file="Skills/Server.md" label="Server.md" />
              <Item file="Skills/Mobile.md" label="Mobile.md" />
              <Item file="Skills/DevOps.md" label="DevOps.md" />
              <Item file="Skills/Tools.md" label="Tools.md" />
            </ul>
          )}

          {/* Projects */}
          <li
            className="cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-gray-300 hover:bg-[#2f2f34] select-none"
            onClick={() => setOpen((s) => ({ ...s, projects: !s.projects }))}
          >
            <span>{open.projects ? "▾" : "▸"}</span> Projects
          </li>
          {open.projects && (
            <ul className="ml-5 space-y-1">
              <Item file="Projects/index.tsx" label="index.tsx (All)" />
              <Item file="Projects/React.tsx" label="React.tsx" />
              <Item file="Projects/TypeScript.ts" label="TypeScript.ts" />
              <Item file="Projects/Python.py" label="Python.py" />
              <Item file="Projects/Node.js" label="Node.js" />
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
