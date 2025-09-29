import { useEffect, useRef, useState } from "react";

function AboutMe() {
  const [running, setRunning] = useState(false);
  const [lines, setLines] = useState([]);
  const timerRef = useRef(null);

  const script = [
    "$ npm run info",
    "> vite v5.0 | dev server ready",
    "> Rendering <AboutMe /> ...",
    "name: Jeong Chan",
    "role: Frontend Developer",
    "interests: [Interactive UI, Portfolio polish, Flutter toys]",
    "status: OK ✔"
  ];

  useEffect(() => {
    if (!running) return;
    setLines([]);
    let i = 0;
    function step() {
      setLines((prev) => [...prev, script[i]]);
      i += 1;
      if (i < script.length) {
        timerRef.current = window.setTimeout(step, 350);
      } else {
        timerRef.current = null;
      }
    }
    timerRef.current = window.setTimeout(step, 250);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [running]);

  return (
    <div className="relative">
      {/* Header with a play/debug button (green) */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base font-semibold tracking-tight">About Me</h1>
        <button
          type="button"
          onClick={() => setRunning((v) => !v)}
          title={running ? "Stop debug" : "Run debug"}
          className="relative inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 text-xs hover:bg-emerald-500/25 transition"
          style={{ marginRight: "0.25rem" }}
        >
          {/* Play/Debug icon */}
          <span className="inline-block h-5 w-5 rounded-full bg-emerald-500/90 flex items-center justify-center shadow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </span>
          <span className="text-emerald-200/90">{running ? "Stop" : "Debug"}</span>
        </button>
      </div>

      {/* Code-looking intro (still readable) */}
      <div className="text-sm leading-relaxed rounded border border-black/20 overflow-x-auto">
        <pre className="bg-[#1b1b1f] p-4">
{`const name = "Jeong Chan"; 
const role = "Frontend Developer";
const interests = ["Interactive UI", "Portfolio polish", "Flutter toys"];

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

      {/* Terminal-like output */}
      <div className="mt-4 rounded border border-emerald-500/30 bg-black/85 text-emerald-300 font-mono text-xs p-3 shadow-inner">
        <div className="opacity-70 pb-1">TERMINAL • debug</div>
        <div className="space-y-1">
          {lines.map((ln, idx) => (
            <div key={idx} className="whitespace-pre-wrap">{ln}</div>
          ))}
          {!running && lines.length === 0 && (
            <div className="opacity-50">click <span className="text-emerald-400">Debug</span> to run…</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
