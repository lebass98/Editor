# The Edit Clone Project 📰

디에디트(https://the-edit.co.kr/) 매거진의 감각적인 UI와 50:50 좌우 분할 스플릿 레이아웃을 클론 코딩한 웹 애플리케이션 화면 구현 저장소입니다. 세련된 고대비 색상과 타이포그래피, 매끄러운 오버레이 메뉴, 그리고 지그재그 그리드 기반의 기사 레이아웃을 반응형으로 구성했습니다.

## 🚀 기술 스택 (Tech Stack)

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Pretendard GOV (로컬 폰트)

## 📌 주요 레이아웃 및 기능

### 1. 전면 개편된 50:50 스플릿 레이아웃 (Split Screen Layout)
- 메인 홈페이지(`page.tsx`)는 스크롤마다 좌우 영역의 역할이 서로 뒤바뀌는 3개의 독특한 섹션으로 구성됩니다.
  - **섹션 1 (Lime)**: [좌] 고정된(Sticky) 히어로 썸네일 / [우] 2단 라임색 스크롤 배너
  - **섹션 2 (Ivory)**: [좌] 흰색 스크롤 배너 / [우] 고정된(Sticky) 히어로 썸네일
  - **섹션 3 (Black)**: [좌] 고정된(Sticky) 히어로 썸네일 / [우] 2단 검은색 스크롤 배너
- 좌우 대조의 직관적이고 세련된 매거진 뷰를 제공합니다.

### 2. 전체 화면 햄버거 메뉴 (Slide-in Menu Overlay)
- 우측 상단 햄버거 메뉴를 클릭 시 우측 50%를 차지하는 전체 화면 슬라이드 오버레이가 등장.
- 내부에는 `TECH`, `EAT`, `STYLE` 등 카테고리별 글로벌 브레드크럼(breadcrumbs) 내비게이션 탑재.

### 3. 지그재그 메이슨리 스타일 그리드 (Staggered Grid)
- 아티클 썸네일 그리드는 이미지 카드 두 열을 번갈아가면서 좌측과 우측의 높이 단차(`mt-32`)를 주도록 설계됨.
- 네온 라임색과 까만 테두리를 지연 없이 깔끔하게 올려 단일 배경에서 카드들이 더 돋보임.

### 4. 하단 앵커형 푸터 (Smart Footer)
- 마지막 섹션을 스크롤 한 뒤 자연스럽게 올라오는 100% Full-Width 하단 푸터 영역.
- 부드러운 전환 효과가 있는 '위로가기(Chevron Up)' 앵커 버튼 탑재.

### 5. 페이지 라우팅 적용
- **홈페이지 (`/`)**: 50/50 3단 매거진 그리드.
- **카테고리 리스트 (`/category/[slug]`)**: 메인 메뉴 클릭를 시 넘어가는 카테고리 갤러리 기사 목록.
- **아티클 상세 문구 (`/article/[id]`)**: 클릭한 기사의 상세 정보와 텍스트를 담은 글 본문 페이지.

## ⚙️ 실행 방법 (Getting Started)

저장소를 클론한 후 패키지를 설치하고 로컬 서버를 가동합니다.

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (localhost:3000)
npm run dev
```

## 📂 주요 폴더 구조 (Folder Structure)

```text
src/
├── app/
│   ├── article/
│   │   └── [id]           # 개별 기사 본문 상세 페이지
│   ├── category/
│   │   └── [slug]         # 개별 카테고리형 갤러리 리스트
│   ├── fonts/             # 로컬 폰트 적용 (Pretendard GOV)
│   ├── layout.tsx         # 글로벌 레이아웃 및 폰트, 메타데이터
│   ├── page.tsx           # 좌우 스플릿의 3단 메인 홈페이지
│   └── globals.css        # 글로벌/테마 스타일링
│
└── components/
    ├── Navbar.tsx         # 전역 Floating 헤더 (로고 & 햄버거 오버레이)
    ├── HeroSection.tsx    # 50vw Sticky 좌/우 파트형 대형 이미지
    ├── ArticleGrid.tsx    # 메이슨리 스타일 2단 기사 카드 모음
    └── Footer.tsx         # Bottom-pinned 푸터 컴포넌트
```

## 🛠 글꼴 정보 적용 규칙
- 가장 굵은 글꼴 스타일을 위해 시스템 전체의 `--font-weight-black`이 `--font-weight-bold`(700)로 수정 적용되어 있습니다. 

---
© THE EDIT CLONE PROJECT.
