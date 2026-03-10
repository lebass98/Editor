"use client";

import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/basePath";
import { motion } from "framer-motion";

export default function AnimatedArticleContent({ data }: { data: any }) {
    return (
        <div className="w-full lg:w-1/2 bg-[#fcfcfc] text-black relative z-10 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
            {/* Header Block with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full relative flex flex-col justify-center px-8 lg:px-[30px] xl:px-[30px] lg:min-h-screen pb-16 pt-6 lg:pt-0 bg-[#3a3939] lg:bg-transparent text-white lg:text-black"
            >
                <div className="text-sm font-bold tracking-widest text-white/80 lg:text-black mb-6 uppercase">
                    {data.category}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[5vw] font-bold leading-[1.3] tracking-tight text-white lg:text-black mb-8 break-keep">
                    <span className="border-b-[5px] border-white lg:border-black leading-[1.3]">{data.title.line1}</span><br className="hidden md:block" />
                    <span className="border-b-[5px] border-white lg:border-black leading-[1.3] mt-4 md:mt-0 inline-block">{data.title.line2}</span>
                    {data.title.line3 && (
                        <>
                            <br className="hidden md:block" />
                            <span className="border-b-[5px] border-white lg:border-black leading-[1.3] mt-4 md:mt-0 inline-block">{data.title.line3}</span>
                        </>
                    )}
                </h1>

                <p className="text-[16px] font-bold text-white/90 lg:text-black mb-12 lg:mb-16">
                    {data.excerpt}
                </p>

                <div className="text-[13px] font-bold text-white/80 lg:text-black">
                    {data.date}
                </div>

                {/* Author Badge Pinned Bottom Right of this header block */}
                <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-[30px] flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-white/20 lg:border-black/10 shadow-sm flex items-center justify-center bg-white">
                        <Image src={getImagePath(data.authorImg)} alt={data.author} width={32} height={32} className="object-contain" />
                    </div>
                    <span className="text-[12px] font-bold text-white lg:text-black">{data.author}</span>
                </div>
            </motion.div>

            {/* Body Content with Staggered Animations */}
            <div className="mt-12 pb-16 text-black text-[16px] leading-[1.6] tracking-tight break-keep flex flex-col">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body1}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mb-12 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body2}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="my-16 flex justify-center border-y border-black py-8 mx-3 lg:mx-[30px] xl:mx-[30px]"
                >
                    <h2 className={`text-2xl font-bold text-center ${data.h2color} italic`}>
                        {data.h2.line1}<br />
                        {data.h2.line2}
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body3}
                </motion.p>

                <motion.figure
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 relative w-full lg:w-auto bg-zinc-100 lg:rounded-lg lg:border lg:border-zinc-200 lg:shadow-sm lg:mx-[30px] xl:mx-[30px] overflow-hidden"
                >
                    <Image src={getImagePath(data.figureImage)} alt={data.title.line1} width={800} height={600} className="w-full h-auto object-contain" />
                </motion.figure>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body4}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    className="mb-8 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body5}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    className="mb-16 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    {data.body6}<br /><br />
                    {data.body7.split('\n').map((line: string, i: number) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </motion.p>

                {/* About Author Section inside the right panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-20 pt-10 border-t border-zinc-200 px-3 lg:px-[30px] xl:px-[30px]"
                >
                    <div className="text-[13px] font-bold mb-6 uppercase tracking-wider">ABOUT AUTHOR</div>
                    <div className="flex items-start gap-5">
                        <div className="w-16 h-16 rounded-full border border-zinc-200 shrink-0 flex items-center justify-center overflow-hidden bg-white">
                            <Image src={getImagePath("/images/author_duetmini.png")} alt="듀엣미니" width={40} height={40} className="object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <div className="font-bold text-[15px] mb-2 text-black">듀엣미니</div>
                            <div className="text-[13px] text-zinc-600 leading-relaxed font-medium break-keep">
                                수제 케이크 전문점. 늘 신선한 재료와 최고급 생화를 사용하여 소중한 날의 퀄리티를 한 층 더 높여드립니다.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
