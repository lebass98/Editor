import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleGrid from "@/components/ArticleGrid";
import Footer from "@/components/Footer";
import { gridArticles } from "@/data/articles";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ccff00] selection:text-black relative flex flex-col">
      <Navbar />

      {/* SECTION 1: Hero Left, Grid Right (Black) */}
      <section className="flex flex-col lg:flex-row w-full bg-black text-white">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 border-b lg:border-r lg:border-b-0 border-white/10">
          <HeroSection index={0} />
        </div>

        <div className="w-full lg:w-1/2 bg-black text-white relative z-10 min-h-screen">
          <ArticleGrid theme="black" articles={gridArticles.slice(0, 4)} />
        </div>
      </section>

      {/* SECTION 2: Grid Left (Ivory), Hero Right */}
      <section className="flex flex-col lg:flex-row w-full bg-[#fcfcfc] text-black">
        <div className="w-full lg:w-1/2 bg-[#fcfcfc] text-black relative z-10 min-h-screen order-2 lg:order-1">
          <ArticleGrid theme="ivory" articles={gridArticles.slice(4, 8)} />
        </div>

        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 order-1 lg:order-2">
          <HeroSection index={1} />
        </div>
      </section>

      {/* SECTION 3: Hero Left, Grid Right (Black) */}
      <section className="flex flex-col lg:flex-row w-full bg-black text-white">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 border-b lg:border-r lg:border-b-0 border-white/10">
          <HeroSection index={2} />
        </div>

        <div className="w-full lg:w-1/2 bg-black text-white relative z-10 min-h-screen">
          <ArticleGrid theme="black" articles={gridArticles.slice(8, 12)} />
        </div>
      </section>

      {/* SECTION 4: Grid Left (Ivory), Hero Right */}
      <section className="flex flex-col lg:flex-row w-full bg-[#fcfcfc] text-black">
        <div className="w-full lg:w-1/2 bg-[#fcfcfc] text-black relative z-10 min-h-screen order-2 lg:order-1">
          <ArticleGrid theme="ivory" articles={gridArticles.slice(12, 16)} />
        </div>

        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky top-0 relative shrink-0 z-0 order-1 lg:order-2">
          <HeroSection index={3} />
        </div>
      </section>

      <Footer />
    </div>
  );
}


