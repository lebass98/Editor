import { getImagePath } from "@/utils/basePath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryFilteredView from "@/components/CategoryFilteredView";
import { allArticles } from "@/data/articles";

export default function CategoryRootPage() {
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-black">
            <Navbar theme="light" />

            <main className="pt-32 pb-16 px-6 sm:px-8 lg:px-12 w-full max-w-[1600px] mx-auto min-h-screen">
                <CategoryFilteredView
                    categoryName="ALL PORTFOLIO"
                    articles={allArticles}
                />
            </main>

            <Footer />
        </div>
    );
}
