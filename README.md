# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스입니다.

## 시작하기

```bash
npm install
cp .env.local.example .env.local   # MongoDB Atlas 연결 문자열 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 구조

- `src/data/profile.ts` — 프로필 정보와 링크 목록 (여기를 수정해 내용 변경)
- `src/components/` — ProfileHeader, LinkCard, LinkList, ThemeToggle
- `src/app/api/clicks` — 클릭 수 조회(GET) / 증가(POST `/api/clicks/[id]`)
- `src/lib/mongodb.ts` — MongoDB 연결 (`MONGODB_URI`가 없으면 클릭 집계 없이 동작)
