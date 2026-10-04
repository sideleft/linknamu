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
  name: "강형우",
  bio: "바이브코딩 연습중",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/",
    description: "코드 저장소",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://velog.io/",
    description: "개발 기록",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/",
    description: "일상 공유",
  },
];
