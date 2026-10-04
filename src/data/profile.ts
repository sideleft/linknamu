export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description?: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export const profile: Profile = {
  name: "강 형 우",
  bio: "개발은 못하는 일개 관리자. 그래도 바이브 코딩은 해야지",
  image: "/boy.png",
};

// 보여 주기용 더미 링크 — 실제 주소는 나중에 채운다.
export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/",
    description: "코드 저장소",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    description: "경력 소개",
  },
  {
    id: "blog",
    title: "Blog",
    url: "https://velog.io/",
    description: "개발 기록",
  },
];
