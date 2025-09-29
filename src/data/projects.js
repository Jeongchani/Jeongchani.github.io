// src/data/projects.js
// required: id, title, period, stack[], desc
// optional: tags[], link, repo, image
export const projects = [
  {
    id: "portfolio",
    title: "Portfolio Site (VS Code Theme)",
    period: "2025",
    stack: ["React", "Vite", "Tailwind"],
    tags: ["web", "ui"],
    desc: "VS Code 스타일 레이아웃(Explorer + Main)로 만든 개인 포트폴리오.",
    link: "https://jeongchani.github.io/",
    repo: "https://github.com/jeongchani/jeongchani.github.io",
    image: "/assets/portfolio.png" // public/assets/portfolio.png 에 파일 두기
  },
  {
    id: "todobar",
    title: "TodoBar",
    period: "2025",
    stack: ["TypeScript", "React"],
    tags: ["productivity"],
    desc: "상단 바에서 바로 할 일 관리하는 실험작.",
    link: "",
    repo: "",
    image: "/assets/todobar.png" // 지금 레포에 이미 있는 파일 예시
  },
  {
    id: "discord",
    title: "Discord Bot Monorepo",
    period: "2024–2025",
    stack: ["TypeScript", "Node.js"],
    tags: ["bot", "discord.js"],
    desc: "모듈형 멀티 봇(뮤직/모드/유틸)을 모노레포로 관리.",
    link: "",
    repo: "",
    image: "/assets/discord-bot.png"
  },
  {
    id: "couple",
    title: "Couple Widget App",
    period: "2025",
    stack: ["Flutter"],
    tags: ["mobile"],
    desc: "커플용 가벼운 홈 위젯 앱 프로토타입.",
    link: "",
    repo: "",
    image: "/assets/couple-app.png"
  }
];
