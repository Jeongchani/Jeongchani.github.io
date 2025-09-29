import { skills } from "../data/skills";

function Skills() {
  // JSON처럼 포맷팅해서 코드블록에 뿌리기
  const jsonText = JSON.stringify(skills, null, 2);

  return (
    <div className="text-sm">
      <pre className="bg-[#1b1b1f] p-4 rounded border border-black/20 overflow-x-auto">
        {jsonText}
      </pre>
    </div>
  );
}

export default Skills;
