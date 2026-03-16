export interface Author {
    id: string;
    name: string;
    image: string;
    role: string;
    bio: string;
    social?: {
        instagram?: string;
        twitter?: string;
    };
}

export const authors: Record<string, Author> = {
    "duetmini": {
        id: "duetmini",
        name: "듀엣미니",
        image: "/images/author_duetmini.png",
        role: "수제 케이크 전문점",
        bio: "늘 신선한 재료와 최고급 생화를 사용하여 소중한 날의 퀄리티를 한 층 더 높여드립니다.",
        social: {
            instagram: "duetmini"
        }
    },
    "editor_k": {
        id: "editor_k",
        name: "에디터 K",
        image: "/images/author_editor_k.png", // This might not exist yet, I'll use a placeholder if needed
        role: "테크 전문 에디터",
        bio: "최신 가젯과 기술 트렌드를 깊이 있게 분석하고 전달합니다.",
        social: {
            twitter: "editor_k"
        }
    }
};

export function getAuthor(id: string): Author {
    return authors[id] || authors["duetmini"];
}
