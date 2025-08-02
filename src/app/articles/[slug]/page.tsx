import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import { getArticleBySlug } from '@/sanity/lib/sanity';
import SanityImage from '@/app/components/SanityImage';
import { ArticlePortableText } from '@/app/components/ArticlePortableText';

// Helper function for video embed URLs
const getEmbedUrl = (url: string | undefined): string => {
    if (!url) return '';
    
    try {
        const youtubeMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}?modestbranding=1&rel=0`;
        }

        const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/);
        if (vimeoMatch) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`;
        }

        return url;
    } catch {
        return '';
    }
};

// Date formatting
const formatDate = (dateString: string): string => {
    try {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch {
        return dateString;
    }
};

export async function generateMetadata({
    params 
}: { 
    params: { slug: string } 
}): Promise<Metadata> {
    const article = await getArticleBySlug(params.slug);
    if (!article) return { title: 'Not Found' };

    const featuredImage = article.featuredMedia?.mediaType === 'Image' 
        ? article.featuredMedia.image.asset.url 
        : null;

    return {
        title: `${article.title} | A. Prema & Co`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: featuredImage ? [featuredImage] : [],
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [article.author.name],
        },
    };
}

interface ArticlePageProps {
    params: {
        slug: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const article = await getArticleBySlug(params.slug);
    if (!article) notFound();

    const readingTime = Math.ceil(JSON.stringify(article.body).length / 5 / 250);
    const primaryCategory = article.categories?.[0]?.title?.toUpperCase() || 'ARTICLE';

    return (
        <main className="bg-white">
            {/* Article Header */}
            <section className="pt-28 pb-8 md:pt-36 md:pb-12">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    <div className="text-center">
                        <Link 
                            href="/articles" 
                            className="inline-flex items-center text-sm text-gray-500 hover:text-[#D4AF37] transition-colors mb-4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to All Articles
                        </Link>
                        
                        <span className="inline-block text-xs font-semibold text-[#D4AF37] tracking-wider uppercase mb-2">
                            {primaryCategory}
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-[#0a192f] mt-2 mb-6 leading-tight">
                            {article.title}
                        </h1>
                        
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                                <SanityImage 
                                    image={article.author.image} 
                                    alt={article.author.name} 
                                    className="w-8 h-8 rounded-full object-cover" 
                                />
                                <Link 
                                    href={`/our-team/${article.author.slug}`} 
                                    className="font-medium text-[#0a192f] hover:text-[#D4AF37]"
                                >
                                    {article.author.name}
                                </Link>
                            </div>
                            <span className="text-gray-300 hidden sm:inline">•</span>
                            <time dateTime={article.publishedAt}>
                                {formatDate(article.publishedAt)}
                            </time>
                            <span className="text-gray-300 hidden sm:inline">•</span>
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Media */}
            {article.featuredMedia && (
                <section className="pb-8 md:pb-12">
                    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                        {article.featuredMedia.mediaType === 'Image' ? (
                            <div className="rounded-sm overflow-hidden shadow-md">
                                <SanityImage 
                                    image={article.featuredMedia.image} 
                                    alt={article.featuredMedia.image.alt || article.title}
                                    className="w-full h-auto object-cover"
                                />
                                {article.featuredMedia.image.caption && (
                                    <p className="text-xs text-gray-500 mt-2 px-2">
                                        {article.featuredMedia.image.caption}
                                    </p>
                                )}
                            </div>
                        ) : article.featuredMedia.mediaType === 'Video Embed' && article.featuredMedia.videoUrl ? (
                            <div className="relative pb-[56.25%] rounded-sm overflow-hidden shadow-md bg-black">
                                <iframe 
                                    src={getEmbedUrl(article.featuredMedia.videoUrl)} 
                                    title={`Video: ${article.title}`}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        ) : null}
                    </div>
                </section>
            )}

            {/* Article Content */}
            <section className="pb-16 md:pb-24">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <article className="prose prose-lg max-w-none">
                        <ArticlePortableText value={article.body} />
                    </article>
                </div>
            </section>
        </main>
    );
}