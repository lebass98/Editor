import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";

const heroes = [
// ... (I'll just replace the component block to be safe)
  {
    id: 1,
    image: "/images/hero_lifestyle_tech_magazine_1771911195246.png",
    category: "LIFE",
    title: "[새로나왔] 2월 4주차 신상 리스트",
    excerpt: "이케아 고양이 수납기부터 당근 녹음기 펜까지",
    date: "2026. 02. 23"
  },
  {
    id: 2,
    image: "/images/article_workspace_coffee_1771911209733.png",
    category: "CULTURE",
    title: "연휴가 타이밍, 독서 입문 책 5",
    excerpt: "독서의 세계에 온 걸 환영해요",
    date: "2026. 02. 11"
  },
  {
    id: 3,
    image: "/images/article_modern_gadgets_1771911232807.png",
    category: "TECH",
    title: "혁신을 이끄는 새로운 오디오 런칭",
    excerpt: "미래 지향적인 디자인과 사운드의 결합",
    date: "2026. 02. 05"
  }
];

export default function HeroSection({ index = 0 }: { index?: number }) {
  const data = heroes[index] || heroes[0];

  return (
    <Link href={`/article/${data.id}`} className="relative w-full h-full overflow-hidden bg-black text-white group cursor-pointer block">
      <Image
        src={getImagePath(data.image)}
        alt={data.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      <div className="absolute bottom-0 left-0 p-6 md:p-10 lg:p-12 w-full">
        <div className="mb-3 font-bold uppercase tracking-widest text-xs md:text-sm">
          {data.category}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg break-keep w-[80%]">
          {data.title}
        </h1>
        <p className="text-zinc-300 text-sm md:text-base mb-6 drop-shadow-md">
          {data.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 relative">
          <div className="text-xs text-zinc-300">
            {data.date}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold italic mb-1 border border-white/20 shadow-sm text-[10px]">
              BlogChannel
            </div>
            <span className="text-[10px] font-bold">BlogChannel</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
