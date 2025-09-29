// Category-based, long-form skill details for vertical cards
// Fill in your own summaries/highlights/links as you like.
export const skillsDetails = {
  Frontend: [
    {
      name: "React",
      icon: "⚛️",
      summary: "상태 설계와 컴포넌트 분리, 커스텀 훅으로 복잡도 관리. 포트폴리오에서 탐색기/필터/상태바 등 UI를 React로 구축.",
      highlights: ["커스텀 훅 (스크롤/필터/탭)", "코드 스플리팅 & lazy", "프러덕션 빌드 최적화"],
      links: [{ label: "Portfolio", href: "https://jeongchani.github.io" }]
    },
    {
      name: "Tailwind CSS",
      icon: "🌬️",
      summary: "디자인 시스템처럼 토큰화된 유틸 클래스로 일관성 있게 구성. 다크 테마와 카드/탭 등 컴포넌트 스타일 정립.",
      highlights: ["반응형 그리드", "다크 테마", "재사용 가능한 유틸 패턴"]
    },
    {
      name: "TypeScript",
      icon: "🟦",
      summary: "점진적 도입 경험. 타입 안전성으로 리팩터링 안정성 향상.",
      highlights: ["유틸 타입", "제네릭 함수", "타입 가드"]
    }
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "🟩",
      summary: "간단한 API와 유틸 서버 제작. 프론트 실험용 백엔드 신속 구축.",
      highlights: ["Express 서버", "REST API", "미들웨어 구성"]
    },
    {
      name: "Express",
      icon: "🟢",
      summary: "라우팅, 에러 처리, 간단한 인증 흐름 설계 경험.",
      highlights: ["라우트 모듈화", "에러 핸들러", "CORS/보안 헤더"]
    }
  ],
  Server: [
    {
      name: "Docker (basics)",
      icon: "🐳",
      summary: "개발 환경 고정 및 간단한 서비스 컨테이너화.",
      highlights: ["Dockerfile 최적화", "멀티스테이지 빌드(기초)"]
    }
  ],
  Mobile: [
    {
      name: "Flutter",
      icon: "🧩",
      summary: "작은 위젯 앱 프로토타입. 상태관리와 라우팅 기초.",
      highlights: ["Widget 트리 설계", "상태관리(Provider 기초)"]
    }
  ],
  DevOps: [
    {
      name: "GitHub Pages",
      icon: "📄",
      summary: "정적 사이트 배포. Vite base 설정과 경로 이슈 해결 경험.",
      highlights: ["빌드/배포 자동화", "경로(base) 처리"]
    },
    {
      name: "GitHub Actions",
      icon: "🤖",
      summary: "간단한 CI/CD 파이프라인 구성.",
      highlights: ["빌드/테스트", "Pages 배포 워크플로"]
    }
  ],
  Tools: [
    {
      name: "VS Code",
      icon: "🧰",
      summary: "개발 환경 최적화(단축키/익스텐션/디버깅)",
      highlights: ["멀티커서/리팩터링", "ESLint/Prettier"]
    },
    {
      name: "pnpm",
      icon: "📦",
      summary: "모노레포/프로젝트 관리에 유용. 빠른 설치와 저장공간 효율.",
      highlights: ["워크스페이스", "lockfile 관리"]
    },
    {
      name: "Figma",
      icon: "🎨",
      summary: "와이어프레임/프로토타입 수준에서 협업 경험.",
      highlights: ["컴포넌트/오토 레이아웃", "디자인 토큰 기초"]
    }
  ]
};
