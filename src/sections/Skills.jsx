import { skills } from "../data/skills";

const ICONS = {
  React: "⚛️",
  "TypeScript": "🟦",
  "Tailwind": "🌬️",
  "Node.js": "🟩",
  Express: "🟢",
  Flutter: "🧩",
  Docker: "🐳",
  "GitHub Pages": "📄",
  "GitHub Actions": "🤖",
  "VS Code": "🧰",
  pnpm: "📦",
  Figma: "🎨"
};

function Pill({ name }) {
  const icon = ICONS[name] || "🔧";
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1f1f23] px-3 py-1.5 text-xs">
      <span className="text-base leading-none">{icon}</span>
      <span className="text-gray-200">{name}</span>
    </div>
  );
}

function Category({ title, items }) {
  return (
    <section className="mb-5">
      <h3 className="text-sm font-semibold mb-2 opacity-90">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((name) => <Pill key={name} name={name} />)}
      </div>
    </section>
  );
}

function Skills({ filter }) {
  const categories = Object.keys(skills);

  if (filter && skills[filter]) {
    return <Category title={filter} items={skills[filter]} />;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Skills</h2>
      <div className="space-y-4">
        {categories.map((cat) => (
          <Category key={cat} title={cat} items={skills[cat]} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
