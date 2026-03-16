# The Edit Clone Project 📰

디에디트(https://the-edit.co.kr/) 매거진의 감각적인 UI와 50:50 좌우 분할 스플릿 레이아웃을 클론 코딩한 웹 애플리케이션입니다.

- **GitHub Repository**: [https://github.com/lebass98/Editor](https://github.com/lebass98/Editor)
- **Live Demo**: [https://lebass98.github.io/Editor/](https://lebass98.github.io/Editor/)

## 🚀 최신 업데이트 및 주요 기능 (New Features)

최근 업데이트를 통해 단순한 클론 코딩을 넘어, 실제 블로그 운영이 가능한 수준의 기능을 대거 확충했습니다.

### 1. Markdown 기반 기사 관리 시스템
코드를 수정하지 않고도 글을 올릴 수 있는 환경을 구축했습니다.
- **데이터 소스 분리**: `src/content/articles/` 폴더에 `.md` 파일을 생성하는 것만으로 새로운 글 게시 가능.
- **Frontmatter 지원**: 제목, 날짜, 카테고리, 저자 등의 메타데이터를 마크다운 상단에서 관리.
- **자동 파싱**: `gray-matter`를 사용하여 마크다운 콘텐츠를 HTML로 변환하여 렌더링.

### 2. 다크 모드 & 라이트 모드 지원
사용자 환경에 맞춘 최적화된 시각적 경험을 제공합니다.
- **테마 토글**: 헤더 상단의 아이콘을 통해 즉시 테마 전환 가능.
- **시스템 감지**: OS 설정에 따른 자동 테마 적용 및 설정 기억(Local Storage).
- **디자인 최적화**: 모든 컴포넌트(그리드, 상세 페이지, 메뉴)에 다크 모드 전용 스타일 적용.

### 3. 지능형 SEO 및 읽기 시간 측정
검색 엔진 최적화와 사용자 편의 기능을 자동화했습니다.
- **자동 SEO 배포**: 각 기사의 제목과 요약을 기반으로 meta tag 및 OpenGraph 태그 자동 생성.
- **Reading Time 측정**: 본문의 길이를 분석하여 'n분 읽기' 정보를 기사 상단에 표시.

### 4. 다중 작성자(Author) 및 프로필 시스템
여러 명의 에디터가 협업하는 환경을 고려했습니다.
- **작성자 DB**: `src/data/authors.ts`에서 각 에디터의 프로필(이미지, 소개글, SNS) 통합 관리.
- **동적 프로필 매핑**: 기사 작성자 이름에 맞춰 에디터 정보 자동 표시.

### 5. Skeleton 로딩 UI
콘텐츠 로딩 시의 시각적 공백을 채우는 세련된 로딩 상태를 구현했습니다.
- **스켈레톤 카드**: 검색 결과나 목록 로드 시 부드러운 애니메이션 박스 표시.

---

## 📌 주요 레이아웃 가이드

### 1. 50:50 스플릿 레이아웃
- 메인 홈페이지(`page.tsx`)는 스크롤마다 좌우 영역의 역할이 서로 뒤바뀌는 섹션들로 구성됩니다.
- 한쪽은 고정(Sticky), 다른 한쪽은 스크롤되는 감각적인 경험을 제공합니다.

### 2. 전체 화면 햄버거 메뉴 및 검색
- 우측 상단 메뉴 클릭 시 검색창이 포함된 전체 화면 슬라이드 오버레이가 등장합니다.
- 모바일 환경에서도 최적화된 가로형 검색 결과 레이아웃을 지원합니다.

---

## ⚙️ 개발 및 설정 가이드

### 실행 방법
```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

### 새로운 글 작성하기 (Markdown)
1. `src/content/articles/` 폴더로 이동합니다.
2. `[파일명].md` 파일을 생성합니다.
3. 아래 형식에 맞춰 내용을 작성합니다.

```markdown
---
id: 100
title: "글 제목"
category: "TECH"
date: "2026. 03. 16"
author: "duetmini"
excerpt: "내용 요약"
heroImage: "/images/hero.jpg"
---
본문 내용을 이곳에 작성하세요.
```

### 새로운 작성자 추가하기
1. `src/data/authors.ts` 파일을 엽니다.
2. `authors` 객체에 새로운 작성자 정보를 추가합니다.

---

## 📂 폴더 구조
- `src/app/`: Next.js App Router 기반 페이지 구성
- `src/components/`: 재사용 가능한 UI 컴포넌트 (Navbar, Grid, Skeleton 등)
- `src/content/`: 실제 마크다운 기사 데이터
- `src/data/`: 작성자 및 기존 고정 기사 데이터
- `src/utils/`: 마크다운 파서 및 이미지 경로 처리 유틸리티

---
© THE EDIT CLONE PROJECT.
