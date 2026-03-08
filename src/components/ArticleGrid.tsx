"use client";

import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import { Article } from "@/data/articles";
import { motion } from "framer-motion";

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
    <motion.div
      key={article.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-full"
    >
      <Link href={`/article/${article.id}`} className="group flex flex-row md:flex-col gap-6 md:gap-0 h-auto md:h-full bg-transparent items-start md:items-stretch">
        <div className="relative overflow-hidden aspect-[4/5] object-cover bg-zinc-100 w-[40%] md:w-full shrink-0 md:mb-4">
          <Image
            src={getImagePath(article.image)}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {/* Mobile Badge */}
          <div className="absolute bottom-3 left-3 flex gap-2 z-10 md:hidden">
            <div className="text-white font-medium text-[10px] uppercase tracking-widest drop-shadow-md bg-black/50 px-1.5 py-0.5 rounded-sm">
              {article.category}
            </div>
          </div>
          {/* PC Badges */}
          <div className="absolute bottom-4 left-4 hidden md:flex gap-2 z-10">
            <div className="text-white font-medium text-[10px] uppercase tracking-widest drop-shadow-md bg-black/50 px-1.5 py-0.5 rounded-sm">
              {article.category}
            </div>
            <div className="text-white font-medium text-[10px] uppercase tracking-widest drop-shadow-md bg-orange-500/80 px-1.5 py-0.5 rounded-sm">
              {article.subCategory === "뉴스" ? "NEWS" : article.subCategory === "리뷰" ? "REVIEW" : "APP"}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="flex flex-col flex-1 py-1 md:py-0">
          <div className="text-orange-500 font-bold text-[10px] uppercase tracking-widest mb-2 md:hidden">
            {article.subCategory === "뉴스" ? "NEWS" : article.subCategory === "리뷰" ? "REVIEW" : "APP"}
          </div>
          <h3 className={`text-xl md:text-[28px] font-bold leading-tight mb-3 md:mb-4 break-keep tracking-tight ${textColor} line-clamp-2 md:line-clamp-none`}>
            {article.title}
          </h3>
          <p className={`text-[14px] md:text-[15px] font-medium leading-relaxed break-keep ${subTextColor} line-clamp-2 md:line-clamp-none mb-4 md:mb-0`}>
            {article.excerpt}
          </p>

          <div className={`flex items-center justify-between mt-auto pt-4 border-t md:border-t-0 border-white/10 md:relative ${textColor}`}>
            <span className="text-[12px] md:text-[13px] font-medium opacity-60 md:opacity-100">{article.date}</span>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden mb-1 shrink-0 border border-black/10 shadow-sm">
                <Image src={getImagePath(article.authorImg)} alt={article.author} width={36} height={36} className="object-cover" />
              </div>
              <span className="text-[10px] md:text-[11px] font-bold">{article.author}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section className="p-4 sm:p-8 lg:p-8 w-full min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-10">
          {leftArticles.map(renderArticle)}
        </div>

        {/* Right Column (Staggered) */}
        <div className="flex-1 flex flex-col gap-10 md:mt-32">
          {rightArticles.map(renderArticle)}
        </div>
      </div>
    </section>
  );
}


