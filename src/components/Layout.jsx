import { useState } from "react";
import Explorer from "./Explorer";
import MainContent from "./MainContent";

function Layout() {
  const [activeFile, setActiveFile] = useState("AboutMe.jsx");

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-gray-200 font-mono">
      {/* Explorer (Left) */}
      <Explorer activeFile={activeFile} setActiveFile={setActiveFile} />

      {/* Main (Right) */}
      <div className="flex-1 flex flex-col">
        {/* Minimal top bar to suggest tabs vibe without functionality */}
        <div className="h-9 bg-[#2d2d2d] border-b border-black/30 flex items-center px-3 text-xs text-gray-300">
          <div className="mr-4">portfolio</div>
          <div className="opacity-60">/{'{'}activeFile{'}'}</div>
        </div>
        <MainContent activeFile={activeFile} />
        {/* Status bar */}
        <div className="h-8 bg-[#2d2d2d] border-t border-black/30 flex items-center justify-between px-3 text-xs text-gray-300">
          <div>Ln 1, Col 1</div>
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>LF</span>
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
