import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";

const articles = [
  {
    id: 2,
    title: "아이들에게 사랑받는 콩순이케이크👏",
    category: "KIDS",
    image: "/images/duet-mini-kongsuni.jpg",
    excerpt: "두돌을 맞은 꼬마아가씨를 위해 주문해주신 캐릭터케이크",
    date: "2019. 05. 02",
    author: "듀엣미니",
    authorImg: "/BlogC.svg"
  },
  {
    id: 3,
    title: "생화와 과일이 듬뿍 올라간 하트생일케이크💓",
    category: "BIRTHDAY",
    image: "/images/duet-mini-heart-cake.jpg",
    excerpt: "얼그레이 시트에 생화와 달달한 딸기가 안성맞춤인 하트케이크",
    date: "2019. 04. 22",
    author: "듀엣미니",
    authorImg: "/BlogC.svg"
  },
  {
    id: 3,
    title: "다도 입문을 위한 기본 구매 가이드",
    category: "EAT",
    image: "/images/article_minimalist_desk_1771911248411.png",
    excerpt: "어떤 다구로 첫자리를 여느냐가 그날의 맛과 기분을 좌우한다.",
    date: "2026. 02. 18",
    author: "박주연",
    authorImg: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 4,
    title: "인생은 사십부터♥︎ 생일케이크",
    category: "BIRTHDAY",
    image: "/images/duet-mini-40-cake.jpg",
    excerpt: "불혹을 맞이하신 남편분의 생일을 기념하여 주문해주신 숫자케이크",
    date: "2019. 04. 17",
    author: "듀엣미니",
    authorImg: "/BlogC.svg"
  },
  {
    id: 5,
    title: "드디어 먹어본 제주김만복◡̈",
    category: "TRAVEL",
    image: "/images/duet-mini-jeju.jpg",
    excerpt: "이호테우 해변에서 맛보는 포송포송한 계란 김밥",
    date: "2019. 04. 11",
    author: "듀엣미니",
    authorImg: "/BlogC.svg"
  },
  {
    id: 6,
    title: "[새로나왔] 2월 1주차 신상 리스트",
    category: "LIFE",
    image: "/images/article_workspace_coffee_1771911209733.png",
    excerpt: "턴테이블과 스파오 조사병단 망토",
    date: "2026. 02. 06",
    author: "BlogChannel",
    authorImg: "logo"
  }
];

export default function ArticleGrid({ theme = 'lime', offset = 0 }: { theme?: 'lime' | 'ivory' | 'black', offset?: number }) {
  // Use a subset of articles
  const displayedArticles = [...articles.slice(offset), ...articles.slice(0, offset)].slice(0, 4);

  const leftArticles = displayedArticles.filter((_, i) => i % 2 === 0);
  const rightArticles = displayedArticles.filter((_, i) => i % 2 === 1);

  const textColor = theme === 'black' ? 'text-white' : 'text-black';
  const subTextColor = theme === 'black' ? 'text-zinc-400' : 'text-zinc-900';

  const renderArticle = (article: typeof articles[0]) => (
    <Link key={article.id} href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
      <div className="relative overflow-hidden aspect-[4/5] object-cover bg-zinc-100 w-full mb-4">
        <Image
          src={getImagePath(article.image)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-widest drop-shadow-md z-10">
          {article.category}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className={`text-2xl md:text-[28px] font-bold leading-tight mb-4 break-keep tracking-tight ${textColor}`}>
          {article.title}
        </h3>
        <p className={`text-[15px] font-medium leading-relaxed break-keep ${subTextColor}`}>
          {article.excerpt}
        </p>
        
        <div className={`flex items-center justify-between pt-4 relative ${textColor}`}>
          <span className="text-[13px] font-medium">{article.date}</span>
          <div className="flex flex-col items-center">
            {article.authorImg === "logo" ? (
              <div className={`w-9 h-9 rounded-full ${theme === 'black' ? 'bg-white text-black' : 'bg-black text-white'} flex items-center justify-center font-bold italic mb-1 shrink-0 text-[8px] border shadow-sm`}>
                BlogChannel
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full overflow-hidden mb-1 shrink-0 border border-black/10 shadow-sm">
                 <Image src={getImagePath(article.authorImg)} alt={article.author} width={36} height={36} className="object-cover" />
              </div>
            )}
            <span className="text-[11px] font-bold">{article.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="p-6 sm:p-8 lg:p-8 w-full min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-16 md:gap-24">
          {leftArticles.map(renderArticle)}
        </div>
        
        {/* Right Column (Staggered) */}
        <div className="flex-1 flex flex-col gap-16 md:gap-24 md:mt-32">
          {rightArticles.map(renderArticle)}
        </div>
      </div>
    </section>
  );
}

