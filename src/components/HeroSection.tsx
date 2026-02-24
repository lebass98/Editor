import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import { heroArticles } from "@/data/articles";

export default function HeroSection({ index = 0 }: { index?: number }) {
  const data = heroArticles[index] || heroArticles[0];

  return (
    <Link href={`/article/${data.id}`} className="relative w-full h-full overflow-hidden bg-black text-white group cursor-pointer block">
      <Image
        src={getImagePath(data.image)}
        alt={data.title}
        fill
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-80"
        priority
      />
      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md text-white px-3 py-1 text-xs font-mono z-20 rounded-full border border-white/30">
        ID: {data.id}
      </div>
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
            {data.authorImg === "logo" ? (
              <div className={`w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold italic mb-1 border border-white/20 shadow-sm text-[10px]`}>
                BlogChannel
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full overflow-hidden mb-1 border border-white/20 shadow-sm">
                <Image src={getImagePath(data.authorImg)} alt={data.author} width={40} height={40} className="object-cover" />
              </div>
            )}
            <span className="text-[10px] font-bold">{data.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
