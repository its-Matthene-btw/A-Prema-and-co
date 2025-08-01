import Image from 'next/image';
import Link from 'next/link';

// This component will eventually receive params like { params: { slug: 'some-article-slug' } }
// For now, we'll hardcode the content.
const SingleArticlePage = () => {
  return (
    <main>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center fade-in">
          <Link href="/articles" className="text-gray-500 hover:text-[#D4AF37] transition mb-4 inline-block">&larr; Back to All Articles</Link>
          <p className="text-lg font-semibold text-[#D4AF37] tracking-wider">PROPERTY LAW</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a192f] mt-2 mb-6">Navigating Sale and Purchase Agreements in 2025</h1>
          <div className="flex justify-center items-center space-x-4 text-gray-500">
            <div className="flex items-center space-x-2">
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Prema Arunasalam" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
              <Link href="/our-team" className="font-semibold text-[#0a192f] hover:text-[#D4AF37]">Prema Arunasalam</Link>
            </div>
            <span className="text-gray-300">|</span>
            <span>July 26, 2025</span>
            <span className="text-gray-300">|</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 md:pb-20">
        <div className="container mx-auto px-6 max-w-6xl fade-in">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80" alt="Signing a property agreement" width={1200} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 article-content text-gray-600">
              <p>The Sale and Purchase Agreement (SPA) is arguably the most crucial document in any property transaction. It is a legally binding contract that outlines the terms and conditions agreed upon by both the buyer and the seller. While it may seem like a standard document, the details within can have significant long-term implications. In the dynamic property market of 2025, understanding these nuances is more important than ever.</p>
              <p>At its core, the SPA details everything from the property's price and payment schedule to the date of possession and liabilities of both parties. It serves as a comprehensive roadmap for the entire transaction, ensuring clarity and protecting the interests of everyone involved.</p>
              
              <h2>Key Clauses to Scrutinize</h2>
              <p>While every clause in the SPA deserves attention, some carry more weight and potential for dispute. Here are a few critical areas every buyer and seller should carefully review:</p>
              <ul>
                <li><strong>Conditions Precedent:</strong> These are conditions that must be met for the agreement to become fully binding. Most commonly, this involves the buyer successfully obtaining a loan from a financial institution. Ensure the timeframe provided is realistic.</li>
                <li><strong>Vacant Possession:</strong> This clause specifies the date on which the seller must deliver the property to the buyer, free from occupants and belongings. It also details the process and penalties for delays.</li>
                <li><strong>Defect Liability Period:</strong> For new developments, this is a crucial clause. It defines a period (typically 24 months) during which the developer is responsible for rectifying any defects in the property.</li>
              </ul>

              <blockquote>"A well-drafted SPA is the foundation of a smooth property transaction. Ambiguity is the enemy of certainty, and in property law, certainty is paramount."</blockquote>
              
              <h2>Common Pitfalls and How to Avoid Them</h2>
              <p>Many disputes arise from overlooking seemingly minor details in the SPA. A common issue is the list of fixtures and fittings. What one party assumes is included (e.g., air-conditioning units, custom cabinetry), the other may intend to remove. It is vital to have an explicit inventory appended to the SPA to avoid such disagreements.</p>
              <p>Another area of concern is the calculation of late payment interest and other penalties. These clauses should be fair and clearly understood. Seeking legal advice is not just a formality; it is a necessary step to ensure your rights are protected and you are not exposed to undue risk. An experienced conveyancing lawyer can identify red flags and negotiate amendments that safeguard your interests.</p>
            </div>
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Author and Share sections would go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
        <div className="relative container mx-auto px-6 py-20 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help With a Property Transaction?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our team is ready to assist you with your legal needs. Schedule a consultation today.</p>
          <Link href="/contact" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#0a192f] font-bold px-8 py-3 rounded-md text-lg transition duration-300 inline-block">Schedule a Consultation</Link>
        </div>
      </section>
    </main>
  );
};

export default SingleArticlePage;