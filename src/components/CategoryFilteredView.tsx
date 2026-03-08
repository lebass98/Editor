"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getImagePath } from "@/utils/basePath";
import type { Article } from "@/data/articles";

interface CategoryFilteredViewProps {
    categoryName: string;
    articles: Article[];
}

const TABS = ["전체", "뉴스", "리뷰", "앱"];

export default function CategoryFilteredView({ categoryName, articles }: CategoryFilteredViewProps) {
    const [selectedTab, setSelectedTab] = useState("전체");

    const filteredArticles = selectedTab === "전체"
        ? articles
        : articles.filter(article => article.subCategory === selectedTab);

    return (
        <>
            {/* Category Header */}
            <div className="flex flex-col items-center justify-center mb-16 mt-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter uppercase">
                    {categoryName}
                </h1>

                {/* Sub Navigation */}
                <div className="flex items-center gap-6 text-[15px] font-bold">
                    {TABS.map((tab) => {
                        const isActive = selectedTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`transition-all duration-300 relative pb-1 ${isActive ? "text-orange-500" : "text-zinc-500 hover:text-black"
                                    }`}
                            >
                                {tab}
                                {/* Active Indicator Underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Articles Grid with AnimatePresence */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/article/${article.id}`} className="group flex flex-col h-full bg-transparent">
                                    <div className="relative overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[3/4] object-cover bg-zinc-200 w-full mb-4">
                                        <Image
                                            src={getImagePath(article.image)}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-4 left-4 text-white font-bold text-sm uppercase tracking-widest drop-shadow-md z-10 bg-black/50 px-2 py-1 rounded">
                                            {article.subCategory}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                                    </div>

                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-3 break-keep tracking-tight text-black flex-1">
                                            {article.title}
                                        </h3>
                                        <p className="text-[13px] font-medium leading-relaxed mb-6 break-keep text-zinc-600 line-clamp-2">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 relative text-black border-t border-zinc-100">
                                            <span className="text-[11px] font-medium text-zinc-500">{article.date}</span>
                                            <div className="flex flex-col items-center">
                                                <div className="w-8 h-8 rounded-full overflow-hidden mb-1 shrink-0 border border-black/10 shadow-sm">
                                                    <Image src={getImagePath(article.authorImg)} alt={article.author} width={32} height={32} className="object-cover" />
                                                </div>
                                                <span className="text-[10px] font-bold text-zinc-700">{article.author}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full py-24 text-center text-zinc-500 font-medium"
                        >
                            해당 카테고리에 속한 기사가 없습니다.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
