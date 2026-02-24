export interface Article {
    id: number;
    title: string;
    category: string;
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
        title: "결혼식의 퀄리티를 높여주는 예쁜 웨딩케이크💙",
        excerpt: "퍼플위주로 작업한 심플한 2단 웨딩케이크",
        date: "2019. 05. 08",
        author: "듀엣미니",
        authorImg: "/BlogC.svg"
    },
    {
        id: 2,
        image: "/images/article_workspace_coffee_1771911209733.png",
        category: "CULTURE",
        title: "연휴가 타이밍, 독서 입문 책 5",
        excerpt: "독서의 세계에 온 걸 환영해요",
        date: "2026. 02. 11",
        author: "박주연",
        authorImg: "https://i.pravatar.cc/100?img=5"
    },
    {
        id: 3,
        image: "/images/article_modern_gadgets_1771911232807.png",
        category: "TECH",
        title: "혁신을 이끄는 새로운 오디오 런칭",
        excerpt: "미래 지향적인 디자인과 사운드의 결합",
        date: "2026. 02. 05",
        author: "최재원",
        authorImg: "logo"
    }
];

export const gridArticles: Article[] = [
    // Section 1
    {
        id: 4,
        title: "아이들에게 사랑받는 콩순이케이크👏",
        category: "KIDS",
        image: "/images/duet-mini-kongsuni.jpg",
        excerpt: "두돌을 맞은 꼬마아가씨를 위해 주문해주신 캐릭터케이크",
        date: "2019. 05. 02",
        author: "듀엣미니",
        authorImg: "/BlogC.svg"
    },
    {
        id: 5,
        title: "생화와 과일이 듬뿍 올라간 하트생일케이크💓",
        category: "BIRTHDAY",
        image: "/images/duet-mini-heart-cake.jpg",
        excerpt: "얼그레이 시트에 생화와 달달한 딸기가 안성맞춤인 하트케이크",
        date: "2019. 04. 22",
        author: "듀엣미니",
        authorImg: "/BlogC.svg"
    },
    {
        id: 6,
        title: "드디어 먹어본 제주김만복◡̈",
        category: "TRAVEL",
        image: "/images/article_6_jeju.jpg",
        excerpt: "공항 도착하자마자 달려간 제주 김만복! 이호테우 해변에서 맛보는 포송포송한 계란 김밥.",
        date: "2019. 04. 11",
        author: "듀엣미니",
        authorImg: "/BlogC.svg"
    },
    {
        id: 7,
        title: "인생은 사십부터♥︎ 생일케이크",
        category: "BIRTHDAY",
        image: "/images/duet-mini-40-cake.jpg",
        excerpt: "불혹을 맞이하신 남편분의 생일을 기념하여 주문해주신 숫자케이크",
        date: "2019. 04. 17",
        author: "듀엣미니",
        authorImg: "/BlogC.svg"
    },
    // Section 2
    {
        id: 8,
        title: "다도 입문을 위한 기본 구매 가이드",
        category: "EAT",
        image: "/images/article_minimalist_desk_1771911248411.png",
        excerpt: "어떤 다구로 첫자리를 여느냐가 그날의 맛과 기분을 좌우한다.",
        date: "2026. 02. 18",
        author: "박주연",
        authorImg: "https://i.pravatar.cc/100?img=5"
    },
    {
        id: 9,
        title: "[새로나왔] 2월 1주차 신상 리스트",
        category: "LIFE",
        image: "/images/article_workspace_coffee_1771911209733.png",
        excerpt: "턴테이블과 스파오 조사병단 망토",
        date: "2026. 02. 06",
        author: "BlogChannel",
        authorImg: "logo"
    },
    {
        id: 10,
        title: "공간을 채우는 미니멀 인테리어",
        category: "INTERIOR",
        image: "/images/article_minimalist_desk_1771911248411.png",
        excerpt: "비움으로써 채워지는 아름다움에 대하여",
        date: "2026. 02. 20",
        author: "이지은",
        authorImg: "https://i.pravatar.cc/100?img=1"
    },
    {
        id: 11,
        title: "서울 근교 조용한 카페 투어",
        category: "CAFE",
        image: "/images/article_workspace_coffee_1771911209733.png",
        excerpt: "주말에 떠나기 좋은 아늑한 공간들",
        date: "2026. 02. 15",
        author: "김민수",
        authorImg: "https://i.pravatar.cc/100?img=2"
    },
    // Section 3
    {
        id: 12,
        title: "봄을 기다리는 플라워 클래스",
        category: "HOBBY",
        image: "/images/duet-mini-heart-cake.jpg",
        excerpt: "직접 만드는 계절의 향기",
        date: "2026. 02. 24",
        author: "플로리스트 강",
        authorImg: "https://i.pravatar.cc/100?img=3"
    },
    {
        id: 13,
        title: "매일 한 줄 필사의 즐거움",
        category: "LIFE",
        image: "/images/article_minimalist_desk_1771911248411.png",
        excerpt: "마음을 다스리는 기록의 힘",
        date: "2026. 02. 22",
        author: "정다운",
        authorImg: "https://i.pravatar.cc/100?img=4"
    },
    {
        id: 14,
        title: "홈베이킹 첫걸음: 마들렌 만들기",
        category: "COOK",
        image: "/images/duet-mini-40-cake.jpg",
        excerpt: "집안 가득 퍼지는 달콤한 냄새",
        date: "2026. 02. 19",
        author: "베이커 킴",
        authorImg: "https://i.pravatar.cc/100?img=6"
    },
    {
        id: 15,
        title: "반려식물과 함께하는 일상",
        category: "GARDENING",
        image: "/images/duet-mini-jeju.jpg",
        excerpt: "초록색이 주는 평온함과 생명력",
        date: "2026. 02. 10",
        author: "그린썸",
        authorImg: "https://i.pravatar.cc/100?img=7"
    }
];
