import { projects } from "../data/projects";

function Projects({ filter }) {
  let list;
  if (!filter) {
    list = projects;
  } else {
    const key = String(filter).toLowerCase();
    list = projects.filter(p => {
      const hay = [...(p.stack || []), ...(p.tags || [])].map(x => String(x).toLowerCase());
      return hay.some(x => x.includes(key));
    });
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Projects {filter ? `— ${filter}` : ""}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p) => (
          <a
            key={p.id}
            href={p.link || p.repo || "#"}
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg border border-white/10 bg-[#1f1f23] hover:bg-[#232329] transition overflow-hidden"
          >
            <div className="h-32 bg-[#2a2a31] flex items-center justify-center text-xs opacity-70 overflow-hidden">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <span>Screenshot Placeholder</span>
              )}
            </div>
            <div className="p-3 space-y-2">
              <div className="text-sm font-semibold">{p.title}</div>
              <div className="text-xs text-gray-400">{p.period}</div>
              <p className="text-xs text-gray-300 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1 pt-1">
                {p.stack?.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-[#2f2f36] text-gray-300 border border-white/10">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
