import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Generate static params for categories
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

const mockRelated = [
  {
    id: 2,
    title: "[새로나왔] 1월 2주차 신상 리스트",
    category: "TECH",
    image: "/images/article_modern_gadgets_1771911232807.png",
    excerpt: "두꺼운 티셔츠부터 도깨비 방망이까지",
    date: "2026. 01. 15",
    author: "BlogChannel",
    authorImg: "logo"
  },
  {
    id: 3,
    title: "애플 AI가 구글 제미나이와 손 잡은 이유",
    category: "TECH",
    image: "/images/article_workspace_coffee_1771911209733.png",
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
    author: "이주형",
    authorImg: "https://i.pravatar.cc/100?img=9"
  },
  {
    id: 5,
    title: "[새로나왔] 1월 1주차 신상 리스트",
    category: "TECH",
    image: "/images/article_minimalist_desk_1771911248411.png",
    excerpt: "새해에도 돌아온 새로나왔",
    date: "2026. 01. 05",
    author: "BlogChannel",
    authorImg: "logo"
  }
];

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black">
      <Navbar theme="light" />

      {/* 50/50 Split Section */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Left Fixed Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 bg-black overflow-hidden">
          <Image
            src={getImagePath("/images/duet-mini-cake.jpg")}
            alt="Duet Mini Wedding Cake"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>

        {/* Right Scrollable Content */}
        <div className="w-full lg:w-1/2 bg-[#fcfcfc] text-black relative z-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">

          {/* Header Block (Takes full viewport height to match split view) */}
          <div className="w-full relative flex flex-col justify-center px-8 lg:px-16 xl:px-24 min-h-[50vh] lg:min-h-screen pb-16 pt-32 lg:pt-0">
            <div className="text-sm font-bold tracking-widest text-black mb-6 uppercase">
              WEDDING
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.3] tracking-tight text-black mb-8 break-keep">
              <span className="border-b-[5px] border-black pb-1 leading-[1.5]">결혼식의 퀄리티를</span><br className="hidden md:block" />
              <span className="border-b-[5px] border-black pb-1 leading-[1.5] mt-4 md:mt-0 inline-block">높여주는 예쁜 웨딩케이크💙</span>
            </h1>

            <p className="text-[16px] font-bold text-black mb-12 lg:mb-16">
              퍼플위주로 작업한 심플한 2단 웨딩케이크
            </p>

            <div className="text-[13px] font-bold text-black">
              2019. 05. 08
            </div>

            {/* Author Badge Pinned Bottom Right of this header block */}
            <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-black/10 shadow-sm flex items-center justify-center bg-white">
                <Image src={getImagePath("/BlogC.svg")} alt="듀엣미니" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-[12px] font-bold text-black">듀엣미니</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="px-8 lg:px-16 xl:px-24 pb-16 text-black text-[15px] leading-[1.6] tracking-tight break-keep">
            <p className="mb-8">
              안녕하세요:) 듀엣미니입니다! 가게오픈하느라 신경쓸게 한두가지가 아니어서 너무 정신없다보니 블로그에 약간 소홀했었는데요😭
            </p>

            <p className="mb-12">
              오픈관련 포스팅에 앞서 지난 주말 주문해주셨던 웨딩케이크 포스팅을 먼저 올립니다😬 #웨딩케이크
            </p>

            <div className="my-16 flex justify-center border-y border-black py-8">
              <h2 className="text-2xl font-bold text-center text-purple-600 italic">
                퍼플그린으로 완성된<br />
                심플한 2단 웨딩케이크
              </h2>
            </div>
            
            <p className="mb-8">
              신부님께서 특별히 퍼플그린으로 해달라고 요청하셔서 퍼플위주로 작업한 심플한 2단 웨딩케이크입니다💓 금요일에 꽃집에가서 직접 골라온 싱싱한 꽃들!
            </p>

            <figure className="mb-12 relative w-full bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <Image src={getImagePath("/images/duet-mini-cake.jpg")} alt="Duet Mini Wedding Cake" width={800} height={600} className="w-full h-auto object-contain" />
            </figure>

            <p className="mb-8">
              열심히 작업중인 저 흐흐... 완성! 넘 이쁘죠? 포장도 까다로운 2단케이크지만 꼼꼼히 포장해서 결혼식장까지 배송 후 세팅까지 완료☺️
            </p>

            <p className="mb-8">
              결혼식장도 너무 이쁘고❣️ 신랑 신부도 너무 선남선녀였어요😍 결혼 넘넘 축하드리고 주문해주셔서 감사합니다😖
            </p>

            <p className="mb-16">
              '듀엣미니케이크'는 늘 신선한 재료와 최고급 생화를 사용합니다.<br/><br/>
              ✔️kakao ID. 듀엣미니<br/>
              ✔️베이킹클래스.원데이클래스 진행중
            </p>

            {/* About Author Section inside the right panel */}
            <div className="mt-20 pt-10 border-t border-zinc-200">
              <div className="text-[13px] font-bold mb-6 uppercase tracking-wider">ABOUT AUTHOR</div>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full border border-zinc-200 shrink-0 flex items-center justify-center overflow-hidden bg-white">
                  <Image src={getImagePath("/BlogC.svg")} alt="듀엣미니" width={40} height={40} className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-[15px] mb-2 text-black">듀엣미니</div>
                  <div className="text-[13px] text-zinc-600 leading-relaxed font-medium break-keep">
                    수제 케이크 전문점. 늘 신선한 재료와 최고급 생화를 사용하여 소중한 날의 퀄리티를 한 층 더 높여드립니다.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Related Articles Section */}
      <section className="w-full px-6 md:px-12 lg:px-16 py-16 lg:py-24 bg-[#fcfcfc]">
        <h2 className="text-xl font-bold mb-10 text-black">관련 기사</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mockRelated.map((article) => (
            <Link key={article.id} href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
              <div className="relative overflow-hidden aspect-[4/5] object-cover bg-zinc-200 w-full mb-4 group-hover:bg-zinc-300 transition-colors">
                <Image
                  src={getImagePath(article.image)}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-widest drop-shadow-md z-10">
                  {article.category}
                </div>
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
      </section>

      <Footer />
    </div>
  );
}
