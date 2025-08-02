"use client";

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import { getAllArticles, getAllCategories } from '@/sanity/lib/sanity';
import SanityImage from '@/app/components/SanityImage';

// Define TypeScript types for our data
type Article = {
  _id: string;
  title: string;
  slug: string;
  featuredMedia: {
    mediaType: 'Image' | 'Video Embed';
    image?: {
      asset: {
        _ref: string;
        url: string;
      };
      alt?: string;
    };
    videoUrl?: string;
  };
  excerpt: string;
  publishedAt: string;
  author: { name: string };
  categories: { title: string }[];
};

type Category = {
  _id: string;
  title: string;
};

// A reusable Article Card component for better organization
const ArticleCard = ({ article }: { article: Article }) => {
  const cardImage = article.featuredMedia?.image;

  return (
    <AnimatedSection>
      <Link href={`/articles/${article.slug}`} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
        <div className="overflow-hidden relative">
          {cardImage ? (
            <SanityImage 
              image={cardImage} 
              alt={cardImage.alt || article.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
          )}
          {article.featuredMedia?.mediaType === 'Video Embed' && (
             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <svg className="w-12 h-12 text-white opacity-90 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
             </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-[#D4AF37] font-semibold mb-2">{article.categories?.[0]?.title?.toUpperCase() || 'UNCATEGORIZED'}</p>
          <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors flex-grow">{article.title}</h3>
          <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">{article.excerpt}</p>
          <div className="border-t border-gray-200 pt-3 mt-auto text-xs text-gray-500 flex justify-between items-center">
            <span>By {article.author?.name || 'Unknown Author'}</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ARTICLES_PER_PAGE = 6;

  // Fetch all articles and categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesData, categoriesData] = await Promise.all([
          getAllArticles(),
          getAllCategories()
        ]);
        setArticles(articlesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        if (selectedCategory === 'All Topics') return true;
        return article.categories?.some(cat => cat.title === selectedCategory);
      })
      .filter(article => {
        return article.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [articles, selectedCategory, searchTerm]);

  // Pagination logic
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="relative text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1500&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Legal Insights & Articles</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Explore our collection of articles for expert analysis on a wide range of legal topics and current events.</p>
          </AnimatedSection>
        </section>

        {/* Filter Bar Section */}
        <section className="py-6 border-b border-gray-200 sticky top-[72px] z-40 backdrop-blur-sm bg-white/80">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-wrap items-center gap-2 hidden md:flex">
                <button
                  onClick={() => { setSelectedCategory('All Topics'); setCurrentPage(1); }}
                  className={`${selectedCategory === 'All Topics' ? 'bg-[#0a192f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} px-4 py-2 rounded-md text-sm font-semibold transition`}
                >
                  All Topics
                </button>
                {categories.map(cat => (
                  <button
                    key={cat._id}
                    onClick={() => { setSelectedCategory(cat.title); setCurrentPage(1); }}
                    className={`${selectedCategory === cat.title ? 'bg-[#0a192f] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} px-4 py-2 rounded-md text-sm font-semibold transition`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
              <div className="relative flex-grow md:flex-grow-0 md:w-72">
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition"
                />
                <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white min-h-[50vh]">
          <div className="container mx-auto px-6">
            {loading ? (
              <div className="text-center text-gray-500">Loading articles...</div>
            ) : paginatedArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map(article => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-16">
                <h3 className="text-2xl font-bold mb-2 text-[#0a192f]">No Articles Found</h3>
                <p>Please try adjusting your search or filter settings.</p>
              </div>
            )}
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <AnimatedSection className="mt-16 flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  &laquo; Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border rounded-md ${currentPage === page ? 'border-[#0a192f] bg-[#0a192f] text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next &raquo;
                </button>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
    </>
  );
}