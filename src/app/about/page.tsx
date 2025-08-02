"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import { getAboutPage } from '@/sanity/lib/sanity';
import SanityImage from '@/app/components/SanityImage';
import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';

// Types remain the same
type AboutPageData = {
  founderSectionTitle: string;
  founder: Advocate;
  partnerSectionTitle: string;
  partner: Advocate;
  talentSectionTitle: string;
  talent: Advocate;
};

type Advocate = {
  name: string;
  position: string;
  qualifications: string;
  image: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  bio: TypedObject[];
};

const AboutPage = () => {
  const [data, setData] = useState<AboutPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const pageData = await getAboutPage();
        setData(pageData);
      } catch (error) {
        console.error("Failed to fetch About Page data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main>
        {/* Hero Section (Hardcoded) */}
        <section className="relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1500&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Our Story, Your Advantage</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Discover the people and principles that define A. Prema & Co.</p>
          </AnimatedSection>
        </section>

        {/* --- FIX: Restored Hardcoded Journey Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0a192f]">Our Journey</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
            </AnimatedSection>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gray-200 -translate-x-1/2"></div>
              
              <AnimatedSection className="relative pl-12 md:pl-0 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                      <p className="text-[#D4AF37] font-semibold mb-2 text-left md:text-right">2018</p>
                      <h3 className="text-2xl font-bold text-[#0a192f] text-left md:text-right">Firm Founded</h3>
                      <p className="text-gray-600 mt-2 text-left md:text-right">A. Prema & Co began its journey in Taman Medan, Petaling Jaya, with a mission to help individuals and businesses handle their legal matters with confidence.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white -translate-x-1/2"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="relative pl-12 md:pl-0 mb-12">
                <div className="md:flex items-center">
                  <div className="hidden md:block md:w-1/2"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                      <p className="text-[#D4AF37] font-semibold mb-2">2025</p>
                      <h3 className="text-2xl font-bold text-[#0a192f]">Welcoming a Partner</h3>
                      <p className="text-gray-600 mt-2">To broaden our scope of litigation, Ms. Laviania Pathmanathan joined the firm as a Partner, bringing vast experience and a passion for fighting for the common man.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white -translate-x-1/2"></div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="relative pl-12 md:pl-0 mb-12">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                      <p className="text-[#D4AF37] font-semibold mb-2 text-left md:text-right">Today</p>
                      <h3 className="text-2xl font-bold text-[#0a192f] text-left md:text-right">Continuing Our Mission</h3>
                      <p className="text-gray-600 mt-2 text-left md:text-right">We continue to grow, driven by a strong belief in doing things right with passion, care, and results that matter for our clients.</p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-white -translate-x-1/2"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        {/* --- End of Restored Section --- */}

        {/* Dynamic Sections */}
        {loading ? (
          <div className="text-center py-20">Loading Team Profiles...</div>
        ) : !data ? (
          <div className="text-center py-20">Failed to load team profiles.</div>
        ) : (
          <>
            {/* Founder Section */}
            {data.founder && (
              <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#0a192f]">{data.founderSectionTitle}</h2>
                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
                  </AnimatedSection>
                  <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                      <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                        <SanityImage image={data.founder.image} alt={data.founder.name} className="w-full h-auto max-w-sm object-cover" />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-3xl font-bold text-[#0a192f]">{data.founder.name}</h3>
                      <p className="text-xl text-[#D4AF37] font-medium mb-6">{data.founder.qualifications}</p>
                      <div className="prose max-w-none text-gray-600">
                        <PortableText value={data.founder.bio} />
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            )}

            {/* Partner Section */}
            {data.partner && (
              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#0a192f]">{data.partnerSectionTitle}</h2>
                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
                  </AnimatedSection>
                  <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-3 order-last md:order-first">
                      <h3 className="text-3xl font-bold text-[#0a192f]">{data.partner.name}</h3>
                      <p className="text-xl text-[#D4AF37] font-medium mb-6">{data.partner.qualifications}</p>
                      <div className="prose max-w-none text-gray-600">
                        <PortableText value={data.partner.bio} />
                      </div>
                    </div>
                    <div className="md:col-span-2 flex justify-center order-first md:order-last">
                      <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                        <SanityImage image={data.partner.image} alt={data.partner.name} className="w-full h-auto max-w-sm object-cover" />
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            )}

            {/* Talent Section */}
            {data.talent && (
              <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#0a192f]">{data.talentSectionTitle}</h2>
                    <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
                  </AnimatedSection>
                  <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2 flex justify-center">
                      <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                        <SanityImage image={data.talent.image} alt={data.talent.name} className="w-full h-auto max-w-sm object-cover" />
                      </div>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-3xl font-bold text-[#0a192f]">{data.talent.name}</h3>
                      <p className="text-xl text-[#D4AF37] font-medium mb-6">{data.talent.position}</p>
                      <div className="prose max-w-none text-gray-600">
                        <PortableText value={data.talent.bio} />
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            )}
          </>
        )}

        {/* CTA Section (Hardcoded) */}
        <section className="relative text-white" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find a solution? Let&apos;s talk.</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our team is ready to assist you with your legal needs. Schedule a consultation today.</p>
            <Link href="/contact" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#0a192f] font-bold px-8 py-3 rounded-md text-lg transition duration-300 inline-block">Schedule a Consultation</Link>
          </AnimatedSection>
        </section>
      </main>

      {/* Styles (including animations) */}
      <style jsx global>{`
        .prose {
          --tw-prose-body: #4a5568; /* text-gray-700 */
          --tw-prose-headings: #0a192f;
        }
        .tilt-card {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .tilt-card:hover {
            transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default AboutPage;