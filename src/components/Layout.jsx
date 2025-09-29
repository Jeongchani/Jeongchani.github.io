import { useState, useEffect } from "react";
import Explorer from "./Explorer";
import MainContent from "./MainContent";

function Layout() {
  const [activeFile, setActiveFile] = useState("AboutMe.jsx");
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // 다른 페이지로 이동하면 언어 탭 초기화
  useEffect(() => {
    if (activeFile !== "Projects/index.tsx" && selectedLanguages.length) {
      setSelectedLanguages([]);
    }
  }, [activeFile]);

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-gray-200 font-mono">
      {/* Explorer */}
      <Explorer
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        selectedLanguages={selectedLanguages}
        setSelectedLanguages={setSelectedLanguages}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar: VS Code 스타일 탭 */}
        <div className="h-9 bg-[#2d2d2d] border-b border-black/30 flex items-stretch px-3 text-xs text-gray-300 overflow-x-auto">
          <div className="mr-4 flex items-center">portfolio</div>
          <div className="opacity-60 mr-2 flex items-center">{activeFile}</div>

          {/* 누적 언어 탭들 */}
          <div className="flex items-stretch gap-[1px]">
            {selectedLanguages.map((lang) => (
              <div
                key={lang}
                className="h-full inline-flex items-center gap-2 px-3 border border-white/10 border-b-0 bg-[#1f1f1f] hover:bg-[#232323]"
              >
                <span className="whitespace-nowrap">{lang}</span>
                <button
                  className="opacity-70 hover:opacity-100"
                  onClick={() => {
                    setSelectedLanguages((prev) => prev.filter((x) => x !== lang));
                  }}
                  title={`Close ${lang}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <MainContent
          activeFile={activeFile}
          selectedLanguages={selectedLanguages}
        />

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
