import { skills } from "../data/skills";
import { skillsDetails } from "../data/skillsDetails";
import { SKILL_COLORS } from "../data/skillColors";

function getReadableText(bgHex) {
  // Expect '#RRGGBB' or '#RGB'; default to white
  const hex = (bgHex || "").replace("#","");
  const full = hex.length === 3 ? hex.split("").map(c => c + c).join("") : hex;
  const r = parseInt(full.substring(0,2), 16) || 0;
  const g = parseInt(full.substring(2,4), 16) || 0;
  const b = parseInt(full.substring(4,6), 16) || 0;
  // luminance
  const l = (0.299*r + 0.587*g + 0.114*b) / 255;
  return l > 0.6 ? "#111111" : "#FFFFFF";
}

function ColorPill({ name }) {
  const bg = SKILL_COLORS[name] || "#3f3f46"; // slate-700 fallback
  const fg = getReadableText(bg);
  const style = { backgroundColor: bg, color: fg, borderColor: fg + "22" };
  return (
    <div
      className="inline-flex items-center rounded-2xl border px-3 py-1.5 text-xs font-medium shadow-sm"
      style={style}
      title={name}
    >
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

function DetailCard({ name, summary, highlights = [], links = [] }) {
  const bg = SKILL_COLORS[name] || "#3f3f46";
  const fg = getReadableText(bg);
  return (
    <div className="rounded-xl border border-white/10 bg-[#1f1f23] overflow-hidden">
      <div className="px-4 py-2" style={{ backgroundColor: bg, color: fg }}>
        <span className="text-sm font-semibold">{name}</span>
      </div>
      <div className="p-4 space-y-3">
        {summary && <p className="text-sm text-gray-200">{summary}</p>}
        {highlights.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 rounded bg-[#2f2f36] border border-white/10 hover:bg-[#34343c]">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Skills({ filter }) {
  // All view -> color pill grid by category
  if (!filter) {
    const categories = Object.keys(skills);
    return (
      <div>
        <h2 className="text-lg font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {categories.map((cat) => (
            <CategoryGrid key={cat} title={cat} items={skills[cat]} />
          ))}
        </div>
      </div>
    );
  }

  // Category view -> vertical detail cards with colored headers
  const detailList = skillsDetails[filter] || [];
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills — {filter}</h2>
      {detailList.length === 0 ? (
        <p className="text-sm text-gray-400">아직 {filter} 카테고리에 상세 내용이 없어요. <code>src/data/skillsDetails.js</code>에서 내용을 채워주세요.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {detailList.map((item) => (
            <DetailCard key={item.name} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
