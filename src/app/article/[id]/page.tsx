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

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white text-black bg-[#fcfcfc]">
      <Navbar theme="light" />
      
      <main className="pt-32 pb-24 w-full">
        <article className="max-w-4xl mx-auto px-6 sm:px-8">
          {/* Article Header */}
          <header className="mb-12 md:mb-16 text-center">
            <div className="text-sm font-bold tracking-widest text-zinc-500 mb-6">
              TECH
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight text-zinc-900 mb-8 break-keep">
              아이폰 폴드는 정말 이렇게 나올까?
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-500 font-medium mb-10">
              3D 프린터로 목업을 만들어봤다
            </p>

            <div className="flex items-center justify-center gap-4 text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200">
                  <Image src="https://i.pravatar.cc/100?img=9" alt="이주영" width={40} height={40} className="object-cover" />
                </div>
                <span className="font-bold text-black">이주영</span>
              </div>
              <span className="text-zinc-300">|</span>
              <span>2026. 01. 28</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] bg-zinc-100 mb-16 rounded-xl overflow-hidden">
             <Image
                src="/images/article_workspace_coffee_1771911209733.png"
                alt="Hero"
                fill
                className="object-cover"
                priority
              />
          </div>

          {/* Article Body Content */}
          <div className="prose prose-lg md:prose-xl prose-zinc mx-auto break-keep">
            <p className="font-medium text-zinc-800 leading-relaxed tracking-tight">
              올해 안으로 등장할 줄 알았던 애플의 첫 폴더블 스마트폰, 가칭 &lsquo;아이폰 폴드&rsquo;에 대한 루머가 계속해서 쏟아지고 있습니다. 과연 애플은 갤럭시 Z 폴드와 같은 인폴딩 방식을 택할까요, 아니면 전혀 새로운 형태의 폼팩터를 선보이게 될까요? 
            </p>

            <p className="text-zinc-700 leading-relaxed tracking-tight mt-6">
              BlogChannel에서는 그동안 유출된 도면과 특허 자료를 바탕으로 직접 3D 프린터를 이용해 실제 크기의 목업(Mock-up)을 제작해보았습니다. 손에 쥐었을 때의 첫인상은 매우 묵직하고 단단했습니다. 기존 아이폰 15 프로 맥스의 티타늄 프레임 디자인 언어를 그대로 차용하면서도, 힌지 부분의 두께를 최소화하여 그립감을 크게 향상시킨 것이 특징입니다.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-black tracking-tight">놀라운 두께와 힌지 메커니즘</h2>

            <p className="text-zinc-700 leading-relaxed tracking-tight">
              특히 주목해야 할 점은 힌지의 물방울 메커니즘입니다. 화면을 접었을 때 완전히 밀착되는 것은 물론, 펼쳤을 때 주름이 거의 보이지 않게 처리하는 기술적 난제를 애플 특유의 방식으로 해결해 낸 것으로 보입니다. 이번 기사에서는 목업을 통해 예상해 본 아이폰 폴드의 사용성과 디자인, 그리고 시장에 미칠 파급력에 대해 심도 있게 다뤄보겠습니다.
            </p>
          </div>
          
        </article>
      </main>

      <Footer />
    </div>
  );
}
