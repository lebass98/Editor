import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static params for categories
export function generateStaticParams() {
  return [
    { slug: 'tech' },
    { slug: 'eat' },
    { slug: 'style' },
    { slug: 'culture' },
    { slug: 'life' },
  ];
}

const mockSubCategories = ["전체", "뉴스", "리뷰", "앱"];

const mockArticles = [
  {
    id: 1,
    title: "아이폰 폴드는 정말 이렇게 나올까?",
    category: "TECH",
    image: "/images/article_workspace_coffee_1771911209733.png",
    excerpt: "3D 프린터로 목업을 만들어봤다",
    date: "2026. 01. 28",
    author: "이주영",
    authorImg: "https://i.pravatar.cc/100?img=9"
  },
  {
    id: 2,
    title: "[새로나왔] 1월 2주차 신상 리스트",
    category: "TECH",
    image: "/images/article_modern_gadgets_1771911232807.png",
    excerpt: "투명구 티셔츠부터 도깨비 방망이까지",
    date: "2026. 01. 15",
    author: "BlogChannel",
    authorImg: "logo"
  },
  {
    id: 3,
    title: "애플 AI가 구글 제미나이와 손 잡은 이유",
    category: "TECH",
    image: "/images/article_minimalist_desk_1771911248411.png",
    excerpt: "결국 이렇게 될 줄은 알았습니다",
    date: "2026. 01. 14",
    author: "최호섭",
    authorImg: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 4,
    title: "탐난다, CES 2026 신박템 리스트 9",
    category: "TECH",
    image: "/images/hero_lifestyle_tech_magazine_1771911195246.png",
    excerpt: "로봇에서 시작해서 로봇으로 끝났다",
    date: "2026. 01. 09",
    author: "이주영",
    authorImg: "https://i.pravatar.cc/100?img=9"
  }
];

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.toUpperCase();

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-black">
      <Navbar theme="light" />
      
      <main className="pt-32 pb-16 px-6 sm:px-8 lg:px-12 w-full max-w-[1600px] mx-auto min-h-screen">
        {/* Category Header */}
        <div className="flex flex-col items-center justify-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            {categoryName}
          </h1>
          
          {/* Sub Navigation */}
          <div className="flex items-center gap-6 text-[15px] font-bold">
            {mockSubCategories.map((sub, index) => (
              <button 
                key={sub}
                className={`transition-colors ${
                  index === 1 
                    ? "text-orange-500 border-b-2 border-orange-500 pb-1" 
                    : "text-zinc-900 hover:text-black/60 pb-1 border-b-2 border-transparent"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mockArticles.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[3/4] object-cover bg-zinc-200 w-full mb-4">
                <Image
                  src={getImagePath(article.image)}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-widest drop-shadow-md z-10">
                  {article.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-3 break-keep tracking-tight text-black">
                  {article.title}
                </h3>
                <p className="text-[13px] font-medium leading-relaxed mb-6 break-keep text-zinc-600">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 relative text-black">
                  <span className="text-[11px] font-medium text-zinc-500">{article.date}</span>
                  <div className="flex flex-col items-center">
                    {article.authorImg === "logo" ? (
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold italic mb-1 shrink-0 text-[7px] border shadow-sm tracking-tighter">
                        BlogChannel
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full overflow-hidden mb-1 shrink-0 border border-black/10 shadow-sm">
                         <Image src={getImagePath(article.authorImg)} alt={article.author} width={32} height={32} className="object-cover" />
                      </div>
                    )}
                    <span className="text-[10px] font-bold text-zinc-700">{article.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
