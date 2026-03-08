import { getImagePath } from "@/utils/basePath";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryFilteredView from "@/components/CategoryFilteredView";
import { allArticles } from "@/data/articles";

// Generate static params for categories
export function generateStaticParams() {
  return [
    { slug: 'tech' },
    { slug: 'eat' },
    { slug: 'style' },
    { slug: 'culture' },
    { slug: 'life' },
    { slug: 'wedding' },
    { slug: 'kids' },
    { slug: 'birthday' },
    { slug: 'travel' },
    { slug: 'interior' },
    { slug: 'cafe' },
    { slug: 'hobby' },
    { slug: 'cook' },
    { slug: 'gardening' },
  ];
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.toUpperCase();

  // Filter articles by the current category route
  const categoryArticles = allArticles.filter(
    (article) => article.category === categoryName
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-black">
      <Navbar theme="light" />

      <main className="pt-32 pb-16 px-6 sm:px-8 lg:px-12 w-full max-w-[1600px] mx-auto min-h-screen">
        <CategoryFilteredView
          categoryName={categoryName}
          articles={categoryArticles}
        />
      </main>

      <Footer />
    </div>
  );
}
