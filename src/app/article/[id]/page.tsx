import Image from "next/image";
import Link from "next/link";
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
            src="/images/hero_lifestyle_tech_magazine_1771911195246.png"
            alt="Hero Left Image"
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
              TECH
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.3] tracking-tight text-black mb-8 break-keep">
              <span className="border-b-[5px] border-black pb-1 leading-[1.5]">아이폰 폴드는 정말</span><br className="hidden md:block"/>
              <span className="border-b-[5px] border-black pb-1 leading-[1.5] mt-4 md:mt-0 inline-block">이렇게 나올까?</span>
            </h1>
            
            <p className="text-[16px] font-bold text-black mb-12 lg:mb-16">
              3D 프린터로 목업을 만들어봤다
            </p>
            
            <div className="text-[13px] font-bold text-black">
              2026. 01. 28
            </div>

            {/* Author Badge Pinned Bottom Right of this header block */}
            <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-black/10 shadow-sm">
                <Image src="https://i.pravatar.cc/100?img=9" alt="이주형" width={48} height={48} className="object-cover" />
              </div>
              <span className="text-[12px] font-bold text-black">이주형</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="px-8 lg:px-16 xl:px-24 pb-16 text-black text-[15px] leading-[2.2] tracking-tight break-keep">
            <p className="mb-8">
              안녕하세요, 오랜 아이폰 유져 이주형입니다. 올해 개인적으로 가장 큰 기대를 하고 있는 제품이 바로 폴더블 아이폰(가제 '아이폰 폴드')입니다. 개인적으로 폴더블에 늘 관심이 있었지만, 애플이 쳐둔 울타리 밖을 나가는 걸 심히 귀찮아하는 자로서 200만 원 넘는 갤럭시 폴드를 구매해 잘 활용할 수 있다는 자신이 없었거든요.
            </p>
            
            <p className="mb-12">
              그렇다면 이 아이폰 폴드는 어떻게 나오게 될까요? 지금까지의 루머를 토대로 3D 프린트한 목업도 만들어보면서 다양한 방면에서 예상해 보았습니다.
            </p>

            <div className="my-16 flex justify-center border-y border-black py-8">
              <h2 className="text-2xl font-bold text-center text-orange-500 italic">
                아이폰 폴드의 필수 조건<br/>
                주름 없는 폴더블 디스플레이
              </h2>
            </div>
            
            <figure className="mb-12 relative w-full aspect-video bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
               <Image src="/images/article_modern_gadgets_1771911232807.png" alt="Folding Mechanism Mockup" fill className="object-cover" />
            </figure>

            <p className="mb-8">
              많은 루머에 따르면, 아이폰 폴드가 여태껏 출시하지 않은 가장 큰 이유는 바로 폴더블 디스플레이의 주름입니다. 우리가 모두 폴더블 폰의 주름에 대해 어떻게 생각하는지와는 별개로, 애플은 아이폰 폴드가 출시되려면 이 주름이 없어져야만 한다는 입장을 내부적으로 고수해왔다는 이야기가 계속해서 들려왔거든요.
            </p>

            <p className="mb-8">
              주름이 문제가 될 부분은 크게 두 가지입니다. 바로 눈에 보이는 것과 화면을 만질 때 주름이 느껴진다는 것이죠. 작년에 출시한 갤럭시 Z 폴드 7도 첫 갤럭시 폴드와 비교하면 주름이 획기적으로 줄어들긴 했지만, 여전히 주름은 적게나마 있었습니다. 제가 갤럭시 Z 폴드 7이나 얼마 전 출시한 Z 트라이폴드를 만져봤을 때, 육안의 주름은 확실히 눈에 띄지 않을 정도로 줄었지만 여전히 손으로 화면을 만졌을 때 느껴졌으니까요.
            </p>
            
            <p className="mb-16">
              하지만 올해 CES에서 삼성디스플레이가 주름이 없는 폴더블 OLED 시제품을 선보였죠. 기존의 폴더블 화면에서 주름이 발생한 것은 여러 번 접고 펼 때 특정 라인에만 압력이 가해지면서 주름이 깊어지는 것인데, 주름 없는 폴더블 OLED는 경첩 부분에 레이저로 조그만 홈을 여럿 파내어 응력을 완화하는 구조를 띄고 있습니다.
            </p>

            {/* About Author Section inside the right panel */}
            <div className="mt-20 pt-10 border-t border-zinc-200">
              <div className="text-[13px] font-bold mb-6 uppercase tracking-wider">ABOUT AUTHOR</div>
              <div className="flex items-start gap-5">
                <Image src="https://i.pravatar.cc/100?img=9" alt="이주형" width={64} height={64} className="rounded-full w-16 h-16 object-cover border border-zinc-200 shrink-0" />
                <div className="flex flex-col">
                  <div className="font-bold text-[15px] mb-2 text-black">이주형</div>
                  <div className="text-[13px] text-zinc-600 leading-relaxed font-medium break-keep">
                    테크에 대한 기사만 10년 넘게 쓴 글쟁이. 사실 그 외에도 관심있는 게 너무 많아서 탈입니다.
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
              <div className="relative overflow-hidden aspect-square object-cover bg-zinc-200 w-full mb-4">
                <Image
                  src={article.image}
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
                         <Image src={article.authorImg} alt={article.author} width={32} height={32} className="object-cover" />
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
