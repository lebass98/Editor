"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 px-6 sm:px-12 lg:px-16 w-full border-t border-zinc-900 relative z-30">
      <div className="max-w-[1600px] mx-auto flex flex-col items-start relative">
        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] md:text-sm font-bold tracking-wider uppercase mb-10">
          <Link href="/" className="hover:underline">ABOUT</Link>
          <span className="text-zinc-700 font-light text-[10px]">|</span>
          <Link href="/" className="hover:underline">EDITORS</Link>
          <span className="text-zinc-700 font-light text-[10px]">|</span>
          <Link href="/" className="hover:underline">NEWSLETTER</Link>
          <span className="text-zinc-700 font-light text-[10px]">|</span>
          <Link href="/" className="hover:underline">INSTAGRAM</Link>
          <span className="text-zinc-700 font-light text-[10px]">|</span>
          <Link href="/" className="hover:underline">TEFF</Link>
        </div>

        <Link href="/" className="mb-8">
          <Image 
            src="/BlogChannel.svg" 
            alt="BlogChannel" 
            width={280} 
            height={55} 
            className="w-auto h-12 md:h-16 object-contain" 
          />
        </Link>
        
        <div className="space-y-1.5 text-[11px] md:text-sm text-zinc-400 font-medium tracking-tight mb-8">
          <p>
            광고 제휴 문의 <span className="mx-2 text-zinc-700 font-light">|</span> hello@the-edit.co.kr
          </p>
          <p>
            보도자료 <span className="mx-2 text-zinc-700 font-light">|</span> press@the-edit.co.kr
          </p>
        </div>

        <div className="text-[10px] md:text-xs text-zinc-500 font-medium tracking-tight uppercase">
          서울시 강남구 도산대로94길 19 진영빌딩 2층 ©BlogChannel. ALL RIGHTS RESERVED.
        </div>

        <button 
          onClick={scrollToTop}
          className="absolute right-0 bottom-0 bg-white text-black p-3 rounded-full hover:bg-zinc-200 transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}
