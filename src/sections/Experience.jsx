import { experience, highlights } from "../data/experience";

function Experience() {
  // 데이터 → 마크다운 문자열로 변환해서 코드블록 느낌 유지
  const md = `## Experience (Extracurricular)
${experience.map((e) => `- ${e.date} ${e.org} — ${e.detail}`).join("\n")}

## Highlights
${highlights.map((h) => `- ${h}`).join("\n")}
`;

  return (
    <article className="max-w-none">
      <pre className="bg-[#1b1b1f] p-4 rounded border border-black/20 overflow-x-auto text-sm whitespace-pre-wrap">
        {md}
      </pre>
    </article>
  );
}

export default Experience;
