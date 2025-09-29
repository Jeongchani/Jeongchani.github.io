import { useState } from "react";

function Explorer({ activeFile, setActiveFile }) {
  const [open, setOpen] = useState({ projects: true });

  return (
    <aside className="w-64 bg-[#252526] border-r border-black/30 text-sm">
      <div className="h-9 flex items-center px-3 text-gray-300 text-xs border-b border-black/30">EXPLORER</div>
      <div className="p-2">
        <ul className="space-y-1">
          <li
            className={`cursor-pointer px-2 py-1 rounded ${activeFile === "AboutMe.jsx" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
            onClick={() => setActiveFile("AboutMe.jsx")}
          >
            AboutMe.jsx
          </li>
          <li
            className="cursor-pointer px-2 py-1 rounded flex items-center gap-2 text-gray-300 hover:bg-[#2f2f34]"
            onClick={() => setOpen((s) => ({ ...s, projects: !s.projects }))}
          >
            <span>{open.projects ? "▾" : "▸"}</span> Projects
          </li>
          {open.projects && (
            <ul className="ml-5 space-y-1">
              <li
                className={`cursor-pointer px-2 py-1 rounded ${activeFile === "PortfolioSite.jsx" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
                onClick={() => setActiveFile("PortfolioSite.jsx")}
              >
                PortfolioSite.jsx
              </li>
              <li
                className={`cursor-pointer px-2 py-1 rounded ${activeFile === "DiscordBot.ts" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
                onClick={() => setActiveFile("DiscordBot.ts")}
              >
                DiscordBot.ts
              </li>
              <li
                className={`cursor-pointer px-2 py-1 rounded ${activeFile === "CoupleApp.dart" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
                onClick={() => setActiveFile("CoupleApp.dart")}
              >
                CoupleApp.dart
              </li>
            </ul>
          )}
          <li
            className={`cursor-pointer px-2 py-1 rounded ${activeFile === "Experience.md" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
            onClick={() => setActiveFile("Experience.md")}
          >
            Experience.md
          </li>
          <li
            className={`cursor-pointer px-2 py-1 rounded ${activeFile === "Skills.json" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
            onClick={() => setActiveFile("Skills.json")}
          >
            Skills.json
          </li>
          <li
            className={`cursor-pointer px-2 py-1 rounded ${activeFile === "Contact.tsx" ? "bg-[#37373d] text-[#a8d1ff]" : "hover:bg-[#2f2f34]"}`}
            onClick={() => setActiveFile("Contact.tsx")}
          >
            Contact.tsx
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Explorer;
