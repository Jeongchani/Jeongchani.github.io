import { useEffect, useRef, useState } from "react";

function AboutMe() {
  const [running, setRunning] = useState(false);
  const [lines, setLines] = useState([]);
  const timerRef = useRef(null);

  // ⬇️ 여기 값만 코드에서 수정하면 됨 (실제 입력 UI 없음)
  const name = "Jeong Chan";
  const role = "Frontend Developer";
  const interests = ["Interactive UI", "Portfolio polish", "Flutter toys"];
  const introLines = [
    `Hello, I'm ${name} 👋`,
    "I build playful UIs and practical tools.",
    "Focused on React + Tailwind; exploring Flutter for mobile.",
  ];

  const getScript = () => ([
    "$ npm run info",
    "> vite v5.0 | dev server ready",
    "> Rendering <AboutMe /> ...",
    `name: ${name}`,
    `role: ${role}`,
    `interests: [${interests.join(", ")}]`,
    "— output —",
    ...introLines.map((t) => `> ${t}`),
    "status: OK ✔",
  ]);

  useEffect(() => {
    if (!running) return;
    const script = getScript();
    setLines([]);
    let i = 0;
    function step() {
      setLines((prev) => [...prev, script[i]]);
      i += 1;
      if (i < script.length) timerRef.current = window.setTimeout(step, 350);
      else timerRef.current = null;
    }
    timerRef.current = window.setTimeout(step, 250);
    return () => timerRef.current && window.clearTimeout(timerRef.current);
  }, [running]);

  return (
    <div className="relative">
      {/* Header + Debug 버튼 (터미널 스타일은 그대로) */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base font-semibold tracking-tight">About Me</h1>
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          aria-pressed={running}
          aria-label={running ? "Stop debug" : "Start debug"}
          className="relative inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-xs hover:bg-emerald-500/25 transition"
        >
          <span className="inline-flex h-5 w-5 rounded-full bg-emerald-500/90 items-center justify-center shadow">
            {running ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
          <span className="text-emerald-200/90">{running ? "Stop" : "Debug"}</span>
        </button>
      </div>

      {/* 위: 코드 블록 (코드로 '입력된' 값 표시) */}
      <div className="text-sm leading-relaxed rounded border border-black/20 overflow-x-auto">
        <pre className="bg-[#1b1b1f] p-4 whitespace-pre-wrap">
{`const name = "${name}"; 
const role = "${role}";
const interests = ["${interests[0]}", "${interests[1]}", "${interests[2]}"];

function AboutMe() {
  return (
    <>
      <h1>Hello, I'm {name} 👋</h1>
      <p>I build playful UIs and practical tools.</p>
      <p>Focused on React + Tailwind; exploring Flutter for mobile.</p>
    </>
  )
}`}
        </pre>
      </div>

      {/* 아래: 터미널 (초록색 스타일 유지, 위 소개도 출력) */}
      <div className="mt-4 rounded border border-emerald-500/30 bg-black/85 text-emerald-300 font-mono text-xs p-3 shadow-inner">
        <div className="opacity-70 pb-1">TERMINAL • debug</div>
        <div className="space-y-1">
          {lines.map((ln, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{ln}</div>
          ))}
          {!running && lines.length === 0 && (
            <div className="opacity-50">
              click <span className="text-emerald-400">Debug</span> to run…
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

