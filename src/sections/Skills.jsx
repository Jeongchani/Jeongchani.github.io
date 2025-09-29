// src/sections/Skills.jsx
import { skills } from "../data/skills";
import { SKILL_COLORS } from "../data/skillColors";

const ORDER = ["Languages", "Frontend", "Backend", "Server & Security", "DevOps"];
const LABELS = {
  Languages: "언어 (Languages)",
  Frontend: "프론트엔드 (Frontend)",
  Backend: "백엔드 (Backend)",
  "Server & Security": "서버 · 보안 (Server & Security)",
  DevOps: "데브옵스 (DevOps)"
};

function getReadableText(bgHex) {
  const hex = (bgHex || "").replace("#","");
  const full = hex.length === 3 ? hex.split("").map(c => c + c).join("") : hex;
  const r = parseInt(full.substring(0,2), 16) || 0;
  const g = parseInt(full.substring(2,4), 16) || 0;
  const b = parseInt(full.substring(4,6), 16) || 0;
  const l = (0.299*r + 0.587*g + 0.114*b) / 255;
  return l > 0.6 ? "#111111" : "#FFFFFF";
}

function ColorPill({ name }) {
  const bg = SKILL_COLORS[name] || "#3f3f46";
  const fg = getReadableText(bg);
  const style = { backgroundColor: bg, color: fg, borderColor: fg + "22" };
  return (
    <div className="inline-flex items-center rounded-2xl border px-3 py-1.5 text-xs font-medium shadow-sm" style={style}>
      {name}
    </div>
  );
}

function CategoryGrid({ title, items }) {
  return (
    <section className="mb-6">
      <h3 className="text-sm font-semibold mb-2 opacity-90">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((name) => <ColorPill key={name} name={name} />)}
      </div>
    </section>
  );
}

export default function Skills() {
  const ordered = ORDER.filter((k) => skills[k]).concat(
    Object.keys(skills).filter((k) => !ORDER.includes(k))
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        {ordered.map((cat) => (
          <CategoryGrid key={cat} title={LABELS[cat] || cat} items={skills[cat]} />
        ))}
      </div>
    </div>
  );
}
