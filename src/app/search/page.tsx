import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchResultView from "@/components/SearchResultView";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-black">
      <Navbar theme="light" />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-16 w-full max-w-[1800px] mx-auto min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-zinc-400 animate-pulse font-medium text-lg">검색 중...</div>
          </div>
        }>
          <SearchResultView />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
