"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { getImagePath } from "@/utils/basePath";

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
              alt="BlogChannel"
              width={200}
              height={40}
              className={`w-auto h-8 sm:h-9 object-contain drop-shadow-sm ${isLight ? "invert" : ""}`}
              priority
            />
          </Link>

          {/* Menu Toggle - Pinned Top Right */}
          <button
            onClick={() => setIsOpen(true)}
            className={`pointer-events-auto p-2 ${textColor} drop-shadow-sm transition-transform active:scale-95`}
            aria-label="Open Menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-900 transition-transform hover:rotate-90 duration-300"
              aria-label="Close Menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>


          {/* Main Links */}
          <nav className="flex flex-col gap-6 text-3xl font-bold mt-4 uppercase text-[#111]">
            <Link href="/category" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              ALL
            </Link>
            <Link href="/category/tech" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              TECH
            </Link>
            <Link href="/category/eat" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              EAT
            </Link>
            <Link href="/category/style" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              STYLE
            </Link>
            <Link href="/category/culture" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              CULTURE
            </Link>
            <Link href="/category/life" onClick={() => setIsOpen(false)} className="hover:text-black/60 transition-colors w-fit">
              LIFE
            </Link>
          </nav>

          {/* Bottom Links */}
        </div>
      </div>
    </>
  );
}
