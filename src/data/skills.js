// JSON처럼 보여주기 좋은 단순 맵 구조
export const skills = {
  Frontend: ["React", "Vite", "Tailwind", "TypeScript"],
  Mobile: ["Flutter"],
  Server: ["Node.js", "Express"],
  DevOps: ["GitHub Pages", "GitHub Actions", "Docker (basics)"],
  Tools: ["VS Code", "pnpm", "Figma"]
};

/*
// 나중에 숙련도/연차/아이콘 등 확장하려면 이런 형태로 바꿔도 됨
export const skills = {
  Frontend: [
    { name: "React", level: 4, years: 2, icon: "react" },
    { name: "Tailwind", level: 4, years: 2, icon: "tailwind" },
    { name: "TypeScript", level: 3, years: 1.5, icon: "typescript" }
  ],
  // ...
};
*/
