"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Sun, Moon } from "lucide-react";
import { getImagePath } from "@/utils/basePath";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we've scrolled more than 100px and are scrolling down, hide
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // If we are scrolling up, show
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isLight = theme === "light";
  const textColor = isLight ? "text-black" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 pointer-events-none p-6 md:p-8 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        style={{ background: 'linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)' }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo - Pinned Top Left */}
          <Link href="/" className="pointer-events-auto">
            <Image
              src={getImagePath("/BlogC.svg")}
              alt="듀엣미니"
              width={200}
              height={40}
              className={`w-auto h-8 sm:h-9 object-contain drop-shadow-sm ${isLight ? "invert" : ""}`}
              priority
            />
          </Link>
          {/* Right Side Buttons */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={`p-2 ${textColor} drop-shadow-sm transition-transform active:scale-95`}
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />)}
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 ${textColor} drop-shadow-sm transition-transform active:scale-95`}
              aria-label="Open Menu"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          backgroundColor: resolvedTheme === "dark" ? "rgba(24, 24, 27, 0.95)" : "rgba(255, 255, 255, 0.9)"
        }}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-900 dark:text-zinc-100 transition-transform hover:rotate-90 duration-300"
              aria-label="Close Menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-12 mt-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                  setIsOpen(false);
                }
              }}
              className="relative flex items-center border-b-[2.5px] border-black dark:border-white pb-2"
            >
              <Search className="h-6 w-6 text-black dark:text-white mr-4 shrink-0" />
              <input
                type="text"
                placeholder="검색어 입력"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xl font-medium outline-none placeholder-zinc-400 text-black dark:text-white py-1"
              />
            </form>
          </div>


          {/* Main Links */}
          <nav className="flex flex-col gap-6 text-3xl font-bold mt-4 uppercase text-[#111] dark:text-[#eee]">
            {["ALL", "TECH", "EAT", "STYLE", "CULTURE", "LIFE"].map((cat) => (
              <Link
                key={cat}
                href={cat === "ALL" ? "/category" : `/category/${cat.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-500 transition-colors w-fit"
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Footer of Menu */}
          <div className="mt-auto pt-12 pb-8 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">INSTA</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold">YTUBE</span>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
              © 2026 THE EDIT. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
