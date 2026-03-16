"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/utils/basePath";
import { allArticles, Article } from "@/data/articles";
import { getAuthor } from "@/data/authors";
import { ArticleCardSkeleton } from "./Skeleton";

export default function SearchResultView() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX demonstration of skeletons
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
    article.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search Header */}
      <div className="flex flex-col items-center justify-center mb-24 mt-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight flex items-center gap-2 flex-wrap justify-center">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-sm">{query}</span>
          <span className="text-black">에 대한 검색 결과 :</span>
          <span className="bg-[#ccff00] text-black px-3 py-1 rounded-sm">{filteredArticles.length}</span>
          <span className="text-black">개</span>
        </h1>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i}>
                <ArticleCardSkeleton />
              </div>
            ))
          ) : filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              const authorData = getAuthor(article.author);
              return (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/article/${article.id}`} className="group flex flex-row md:flex-col gap-4 md:gap-0 h-auto md:h-full bg-transparent items-start md:items-stretch border-b border-zinc-100 dark:border-zinc-800 md:border-0 pb-6 md:pb-0">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[317/423] md:aspect-[4/5] bg-zinc-100 dark:bg-zinc-800 w-[40%] md:w-full shrink-0">
                      <Image
                        src={getImagePath(article.image)}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      {/* PC Category Overlay */}
                      <div className="absolute bottom-4 left-4 z-10 hidden md:block">
                        <span className="text-white font-bold text-[11px] uppercase tracking-widest bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none hidden md:block" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 py-1 md:py-0">
                      {/* Mobile Category */}
                      <div className="text-[12px] font-bold text-black dark:text-white uppercase tracking-wider mb-1 md:hidden">
                        {article.category}
                      </div>

                      <h3 className="text-lg md:text-[22px] font-bold leading-tight mb-2 md:mb-3 break-keep tracking-tight text-black dark:text-white line-clamp-2 md:line-clamp-none md:min-h-[3.25rem]">
                        {article.title}
                      </h3>
                      
                      <p className="text-[14px] font-medium leading-relaxed mb-4 md:mb-6 break-keep text-zinc-500 dark:text-zinc-400 line-clamp-2 text-sm">
                        {article.excerpt}
                      </p>

                      <div className="text-[13px] font-bold text-black dark:text-zinc-400 mb-auto md:hidden">
                        {article.date}
                      </div>

                      {/* Desktop Footer */}
                      <div className="hidden md:flex items-center justify-between mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <span className="text-[13px] font-bold text-zinc-400">{article.date}</span>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col items-end">
                              <Image 
                                src={getImagePath("/BlogC.svg")} 
                                alt="The Edit" 
                                width={40} 
                                height={16} 
                                className="h-3 w-auto object-contain brightness-0 dark:invert opacity-80 mb-0.5" 
                              />
                              <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-300">디에디트</span>
                          </div>
                          <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700">
                            <Image 
                              src={getImagePath(authorData.image)} 
                              alt={authorData.name} 
                              width={36} 
                              height={36} 
                              className="object-cover" 
                            />
                          </div>
                        </div>
                      </div>

                      {/* Mobile Author Logo */}
                      <div className="flex justify-end mt-4 md:hidden">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center mb-1">
                            <Image 
                              src={getImagePath("/BlogC.svg")} 
                              alt="The Edit" 
                              width={32} 
                              height={12} 
                              className="w-7 h-auto object-contain invert dark:invert-0" 
                            />
                          </div>
                          <span className="text-[10px] font-bold text-black dark:text-white">디에디트</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="col-span-full py-32 text-center">
              <p className="text-zinc-400 text-lg font-medium">검색 결과가 없습니다.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
