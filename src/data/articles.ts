export interface Article {
    id: number;
    title: string;
    category: string;
    subCategory: "뉴스" | "리뷰" | "앱";
    image: string;
    excerpt: string;
    date: string;
    author: string;
    authorImg: string;
}

export const heroArticles: Article[] = [
    {
        id: 1,
        image: "/images/duet-mini-cake.jpg",
        category: "WEDDING",
        subCategory: "리뷰",
        title: "결혼식의 퀄리티를 높여주는 예쁜 웨딩케이크💙",
        excerpt: "퍼플위주로 작업한 심플한 2단 웨딩케이크",
        date: "2019. 05. 08",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 2,
        image: "/images/article_workspace_coffee_v2.png",
        category: "CULTURE",
        subCategory: "리뷰",
        title: "연휴가 타이밍, 독서 입문 책 5",
        excerpt: "독서의 세계에 온 걸 환영해요",
        date: "2026. 02. 11",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 3,
        image: "/images/article_modern_gadgets_v2.png",
        category: "TECH",
        subCategory: "뉴스",
        title: "혁신을 이끄는 새로운 오디오 런칭",
        excerpt: "미래 지향적인 디자인과 사운드의 결합",
        date: "2026. 02. 05",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 4,
        image: "/images/hero_lifestyle_tech_magazine_v2.png",
        category: "TECH",
        subCategory: "뉴스",
        title: "CES 2026에서 만난 미래 기술 돋보기",
        excerpt: "우리의 일상을 바꿀 혁신적인 가젯들",
        date: "2026. 02. 26",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    }
];

export const gridArticles: Article[] = [
    // Section 1
    {
        id: 5,
        title: "아이들에게 사랑받는 콩순이케이크👏",
        category: "KIDS",
        subCategory: "리뷰",
        image: "/images/duet-mini-kongsuni.jpg",
        excerpt: "두돌을 맞은 꼬마아가씨를 위해 주문해주신 캐릭터케이크",
        date: "2019. 05. 02",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 6,
        title: "생화와 과일이 듬뿍 올라간 하트생일케이크💓",
        category: "BIRTHDAY",
        subCategory: "리뷰",
        image: "/images/duet-mini-heart-cake.jpg",
        excerpt: "얼그레이 시트에 생화와 달달한 딸기가 안성맞춤인 하트케이크",
        date: "2019. 04. 22",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 7,
        title: "드디어 먹어본 제주김만복◡̈",
        category: "TRAVEL",
        subCategory: "리뷰",
        image: "/images/article_6_jeju.png",
        excerpt: "공항 도착하자마자 달려간 제주 김만복! 이호테우 해변에서 맛보는 포송포송한 계란 김밥.",
        date: "2019. 04. 11",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 8,
        title: "인생은 사십부터♥︎ 생일케이크",
        category: "BIRTHDAY",
        subCategory: "리뷰",
        image: "/images/duet-mini-40-cake.jpg",
        excerpt: "불혹을 맞이하신 남편분의 생일을 기념하여 주문해주신 숫자케이크",
        date: "2019. 04. 17",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    // Section 2
    {
        id: 9,
        title: "다도 입문을 위한 기본 구매 가이드",
        category: "EAT",
        subCategory: "뉴스",
        image: "/images/article_minimalist_desk_v2.png",
        excerpt: "어떤 다구로 첫자리를 여느냐가 그날의 맛과 기분을 좌우한다.",
        date: "2026. 02. 18",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 10,
        title: "[새로나왔] 2월 1주차 신상 리스트",
        category: "LIFE",
        subCategory: "뉴스",
        image: "/images/article_workspace_coffee_v2.png",
        excerpt: "턴테이블과 스파오 조사병단 망토",
        date: "2026. 02. 06",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 11,
        title: "공간을 채우는 미니멀 인테리어",
        category: "INTERIOR",
        subCategory: "리뷰",
        image: "/images/article_minimalist_desk_v2.png",
        excerpt: "비움으로써 채워지는 아름다움에 대하여",
        date: "2026. 02. 20",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 12,
        title: "서울 근교 조용한 카페 투어",
        category: "CAFE",
        subCategory: "앱",
        image: "/images/article_workspace_coffee_v2.png",
        excerpt: "주말에 떠나기 좋은 아늑한 공간들",
        date: "2026. 02. 15",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    // Section 3
    {
        id: 13,
        title: "봄을 기다리는 플라워 클래스",
        category: "HOBBY",
        subCategory: "뉴스",
        image: "/images/duet-mini-heart-cake.jpg",
        excerpt: "직접 만드는 계절의 향기",
        date: "2026. 02. 24",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 14,
        title: "매일 한 줄 필사의 즐거움",
        category: "LIFE",
        subCategory: "앱",
        image: "/images/article_minimalist_desk_v2.png",
        excerpt: "마음을 다스리는 기록의 힘",
        date: "2026. 02. 22",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 15,
        title: "홈베이킹 첫걸음: 마들렌 만들기",
        category: "COOK",
        subCategory: "리뷰",
        image: "/images/duet-mini-40-cake.jpg",
        excerpt: "집안 가득 퍼지는 달콤한 냄새",
        date: "2026. 02. 19",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 16,
        title: "반려식물과 함께하는 일상",
        category: "GARDENING",
        subCategory: "앱",
        image: "/images/duet-mini-jeju.jpg",
        excerpt: "초록색이 주는 평온함과 생명력",
        date: "2026. 02. 10",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    // Section 4
    {
        id: 17,
        title: "2026 봄/여름 트렌드 컬러 가이드",
        category: "STYLE",
        subCategory: "뉴스",
        image: "/images/hero_lifestyle_tech_magazine_v2.png",
        excerpt: "올해의 컬러로 꾸며보는 나만의 공간과 스타일",
        date: "2026. 02. 25",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 18,
        title: "나만 알고 싶은 도쿄의 조용한 골목들",
        category: "TRAVEL",
        subCategory: "리뷰",
        image: "/images/article_workspace_coffee_v2.png",
        excerpt: "번잡함을 벗어나 만나는 도쿄의 진정한 매력",
        date: "2026. 02. 23",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 19,
        title: "비건 입문자를 위한 제철 채소 요리 팁",
        category: "EAT",
        subCategory: "앱",
        image: "/images/article_minimalist_desk_v2.png",
        excerpt: "몸도 마음도 가벼워지는 맛있는 채식 생활",
        date: "2026. 02. 21",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    },
    {
        id: 20,
        title: "주말의 생산성을 높이는 5가지 모닝 루틴",
        category: "LIFE",
        subCategory: "앱",
        image: "/images/article_modern_gadgets_v2.png",
        excerpt: "더 나은 월요일을 준비하는 작은 습관의 힘",
        date: "2026. 02. 19",
        author: "듀엣미니",
        authorImg: "/images/author_duetmini.png"
    }
];

export const allArticles = [...heroArticles, ...gridArticles];
