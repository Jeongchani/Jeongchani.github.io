import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects } from "../data/projects";

/* 필터 */
function matchesAny(project, filters) {
  if (!filters || filters.length === 0) return true;
  const hay = [...(project.stack || []), ...(project.tags || [])].map(String).map(s => s.toLowerCase());
  return filters.some(f => hay.some(h => h.includes(String(f).toLowerCase())));
}

/* 링크 버튼 */
function ExternalLinkButton({ href, className = "" }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={"inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded border border-white/15 hover:bg-white/5 " + className}
      title="Open link"
    >
      <span>Link</span>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
        <path d="M5 5h5V3H3v7h2V5z"></path>
      </svg>
    </a>
  );
}

/* 타이핑 인 */
function TypingIn({ text = "", speed = 12, className = "" }) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return <p className={className + " text-sm text-gray-300 whitespace-pre-wrap"}>{shown}</p>;
}

/* 타이핑 아웃 */
function TypingOut({ text = "", speed = 8, className = "" }) {
  const [shown, setShown] = useState(text);
  useEffect(() => {
    setShown(text);
    if (!text) return;
    let i = text.length;
    const id = setInterval(() => {
      i -= 1;
      setShown(text.slice(0, Math.max(0, i)));
      if (i <= 0) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return <p className={className + " text-xs text-gray-300 whitespace-pre-wrap"}>{shown}</p>;
}

/* 상세 배너: 썸네일 → 상세 교차 페이드(깜빡임 방지) */
function DetailBanner({ active }) {
  const thumb = active.image;
  const big = active.imageDetail || active.image;
  const [ready, setReady] = useState(big === thumb); // 동일 소스면 바로 ready

  useEffect(() => {
    setReady(big === thumb);
    if (big && big !== thumb) {
      const img = new Image();
      img.src = big;
      img.onload = () => setReady(true);
    }
  }, [big, thumb]);

  return (
    <motion.div layoutId={`image-${active.id}`} className="relative h-48 sm:h-56 bg-[#2a2a31] overflow-hidden">
      {/* 썸네일 먼저 */}
      <img
        src={thumb}
        alt={active.title}
        className={"absolute inset-0 h-full w-full object-cover transition-opacity duration-200 " + (ready ? "opacity-0" : "opacity-100")}
      />
      {/* 상세(로드되면 교차 페이드로 등장) */}
      <img
        src={big}
        alt={active.title}
        className={"absolute inset-0 h-full w-full object-cover transition-opacity duration-200 " + (ready ? "opacity-100" : "opacity-0")}
      />
    </motion.div>
  );
}

export default function Projects({ filters = [] }) {
  const list = useMemo(() => projects.filter(p => matchesAny(p, filters)), [filters]);
  const [activeId, setActiveId] = useState(null);
  const [erasingId, setErasingId] = useState(null);
  const active = useMemo(() => projects.find(p => p.id === activeId) || null, [activeId]);

  const open = (id) => {
    setErasingId(id);              // 카드 본문 타이핑 아웃
    setActiveId(id);               // 지연 없이 즉시 모달 전환 시작 → 끊김 최소화
  };
  const close = () => {
    setActiveId(null);
    setErasingId(null);
  };

  return (
    <div className="relative">
      {/* 헤더 유지 */}
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <span>Projects{filters?.length ? ` — ${filters.join(", ")}` : ""}</span>
        {active && (<><span className="opacity-50">/</span><span className="opacity-90">Project — {active.title}</span></>)}
      </h2>

      <LayoutGroup id="projects">
        {/* 그리드는 접지 말고, 활성화 중일 때만 살짝 희미하게(깜빡임/밀림 방지) */}
        <div className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-4 " + (active ? "opacity-20 pointer-events-none" : "opacity-100")}>
          {list.map((p) => (
            <motion.article
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => open(p.id)}
              className="group rounded-lg border border-white/10 bg-[#1f1f23] hover:bg-[#232329] transition overflow-hidden cursor-pointer"
              transition={{ layout: { duration: 0.28, ease: [0.22, 0.61, 0.36, 1] } }}
            >
              <motion.div layoutId={`image-${p.id}`} className="h-32 bg-[#2a2a31] overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-xs opacity-70">Screenshot</div>
                )}
              </motion.div>

              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <motion.h3 layoutId={`title-${p.id}`} className="text-sm font-semibold">
                    {p.title}
                  </motion.h3>
                  <ExternalLinkButton href={p.link || p.repo} />
                </div>
                <div className="text-xs text-gray-400">{p.period}</div>

                {erasingId === p.id ? (
                  <TypingOut text={p.desc || ""} />
                ) : (
                  <p className="text-xs text-gray-300 line-clamp-2">{p.desc}</p>
                )}

                <div className="flex flex-wrap gap-1 pt-1">
                  {p.stack?.map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-[#2f2f36] text-gray-300 border border-white/10">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* 모달: 배경 ‘완전 투명’(검은 딤 없음). 카드가 그 자리에서 커진 착시 유지 */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50"
              // 딤 완전 제거
              initial={false}
              animate={{}}
              exit={{}}
              onClick={close}
            >
              <motion.article
                layoutId={`card-${active.id}`}
                onClick={(e) => e.stopPropagation()}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[min(960px,calc(100%-32px))] max-h-[min(88vh,900px)]
                           rounded-lg border border-white/10 bg-[#1f1f23] overflow-hidden shadow-2xl"
                transition={{ type: "spring", mass: 0.6, stiffness: 210, damping: 24 }}
              >
                {/* 우상단: 링크 + 닫기 */}
                <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                  {(active.link || active.repo) && (
                    <ExternalLinkButton href={active.link || active.repo} className="!text-xs" />
                  )}
                  <button
                    onClick={close}
                    className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/15 bg-[#2a2a31] hover:bg-[#34343c]"
                    aria-label="Close"
                    title="Close"
                  >
                    ×
                  </button>
                </div>

                {/* 검은 플래시 방지용 배너 프리로드 + 교차 페이드 */}
                <DetailBanner active={active} />

                <div className="p-4 sm:p-5 space-y-3 overflow-auto max-h-[calc(min(88vh,900px)-12rem)]">
                  <motion.h3 layoutId={`title-${active.id}`} className="text-base font-semibold">
                    {active.title}
                  </motion.h3>

                  <TypingIn text={active.longDesc || active.desc || ""} />

                  <div className="grid gap-2 md:grid-cols-2">
                    <InfoBlock label="Period" value={active.period || "-"} />
                    <InfoBlock label="Stack" value={(active.stack || []).join(" · ") || "-"} />
                  </div>

                  {active.highlights?.length ? (
                    <div>
                      <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Highlights</div>
                      <ul className="list-disc list-inside text-sm text-gray-200 space-y-1">
                        {active.highlights.map((h, i) => <li key={i}>{h}</li>)}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

/* 작은 정보 블럭 */
function InfoBlock({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#202026] p-3 text-sm">
      <div className="text-[11px] uppercase tracking-widest opacity-70 mb-1">{label}</div>
      <div className="text-gray-200">{value}</div>
    </div>
  );
}
