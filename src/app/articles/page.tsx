"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';

const ArticlesPage = () => {
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
        <section className="py-6 bg-white border-b border-gray-200 sticky top-[72px] z-40 backdrop-blur-sm bg-white/80">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-wrap items-center gap-2 hidden md:flex">
                <button className="bg-[#0a192f] text-white px-4 py-2 rounded-md text-sm font-semibold">All Topics</button>
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition">Property Law</button>
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition">Civil Litigation</button>
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition">Criminal Defense</button>
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-semibold transition">Corporate Law</button>
              </div>
              <div className="relative flex-grow md:flex-grow-0 md:w-72">
                <input type="search" placeholder="Search articles..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition" />
                <i className="fas fa-search absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection>
                <Link href="/articles/navigating-sale-and-purchase-agreements-in-2025" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800" alt="Article on property law" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">PROPERTY LAW</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">Navigating Sale and Purchase Agreements in 2025</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">Discover the key clauses and potential pitfalls to be aware of when buying or selling property in the current market.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Prema Arunasalam</span>
                      <span>July 26, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              <AnimatedSection delay="0.1s">
                <Link href="/articles/importance-of-early-mediation-in-contract-disputes" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800" alt="Article on civil litigation" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">CIVIL LITIGATION</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">The Importance of Early Mediation in Contract Disputes</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">Learn how engaging in mediation at an early stage can save time, reduce costs, and preserve business relationships.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Ms Laviania P.</span>
                      <span>July 22, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              <AnimatedSection delay="0.2s">
                <Link href="/articles/understanding-your-rights-during-a-police-investigation" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1519099430339-a68d14a51e5e?auto=format&fit=crop&w=800" alt="Article on criminal defense" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">CRIMINAL DEFENSE</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">Understanding Your Rights During a Police Investigation</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">A critical overview of the fundamental rights every citizen should be aware of when interacting with law enforcement.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Prema Arunasalam</span>
                      <span>July 15, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              <AnimatedSection>
                <Link href="/articles/constructive-dismissal-what-employees-need-to-know" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800" alt="Article on Employment Law" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">EMPLOYMENT LAW</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">Constructive Dismissal: What Employees Need to Know</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">Are you being forced to resign? Understand the legal concept of constructive dismissal and what steps you can take.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Ms Laviania P.</span>
                      <span>July 10, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              <AnimatedSection delay="0.1s">
                <Link href="/articles/directors-duties-and-liabilities-in-malaysia" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1549421213-2d23c1044325?auto=format&fit=crop&w=800" alt="Article on corporate law" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">CORPORATE LAW</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">Directors' Duties and Liabilities in Malaysia</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">A primer for new and experienced company directors on their legal obligations under the Companies Act 2016.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Prema Arunasalam</span>
                      <span>July 05, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              <AnimatedSection delay="0.2s">
                <Link href="/articles/the-process-of-filing-for-divorce-in-malaysia" className="block bg-gray-50 rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1542317543-c24a7f45903b?auto=format&fit=crop&w=800" alt="Article on family law" width={800} height={450} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#D4AF37] font-semibold mb-2">FAMILY LAW</p>
                    <h3 className="text-xl font-bold text-[#0a192f] mb-3 group-hover:text-[#D4AF37] transition-colors">The Process of Filing for Divorce in Malaysia</h3>
                    <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">An overview of the legal steps involved in both joint and single divorce petitions, from filing to decree absolute.</p>
                    <div className="border-t border-gray-200 pt-3 mt-3 text-xs text-gray-500 flex justify-between items-center">
                      <span>By Prema Arunasalam</span>
                      <span>June 28, 2025</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            </div>
            
            <AnimatedSection className="mt-16 flex justify-center items-center space-x-2">
              <Link href="#" className="px-4 py-2 border border-gray-300 text-gray-500 rounded-md hover:bg-gray-100">&laquo; Previous</Link>
              <Link href="#" className="px-4 py-2 border border-[#0a192f] bg-[#0a192f] text-white rounded-md">1</Link>
              <Link href="#" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">2</Link>
              <Link href="#" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">3</Link>
              <Link href="#" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">Next &raquo;</Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Legal Question?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">If you're facing a legal issue, don't navigate it alone. Our team is ready to provide the expert guidance you need.</p>
            <Link href="/contact" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#0a192f] font-bold px-8 py-3 rounded-md text-lg transition duration-300 inline-block">Schedule a Consultation</Link>
          </AnimatedSection>
        </section>
      </main>

      <style jsx global>{`
        body {
            font-family: 'Poppins', sans-serif;
            color: #333333;
            overflow-x: hidden;
        }
        h1, h2, h3, h4, .font-playfair {
            font-family: 'Playfair Display', serif;
        }
        .gold-underline {
            position: relative;
            display: inline-block;
        }
        .gold-underline:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #D4AF37;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s ease-out;
        }
        .gold-underline:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
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
        .nav-link {
            position: relative;
        }
        .nav-link:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #D4AF37;
            transition: width 0.3s ease;
        }
        .nav-link:hover:after {
            width: 100%;
        }
      `}</style>
    </>
  );
};

export default ArticlesPage;