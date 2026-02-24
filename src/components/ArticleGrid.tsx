import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import { Article } from "@/data/articles";

export default function ArticleGrid({
  theme = 'lime',
  articles = []
}: {
  theme?: 'lime' | 'ivory' | 'black',
  articles: Article[]
}) {
  const leftArticles = articles.filter((_, i) => i % 2 === 0);
  const rightArticles = articles.filter((_, i) => i % 2 === 1);

  const textColor = theme === 'black' ? 'text-white' : 'text-black';
  const subTextColor = theme === 'black' ? 'text-zinc-400' : 'text-zinc-900';

  const renderArticle = (article: Article) => (
    <Link key={article.id} href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
      <div className="relative overflow-hidden aspect-[4/5] object-cover bg-zinc-100 w-full mb-4">
        <Image
          src={getImagePath(article.image)}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-[10px] font-mono z-20">
          ID: {article.id}
        </div> */}
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


