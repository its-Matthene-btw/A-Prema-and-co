"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';

const AboutPage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1500&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Our Story, Your Advantage</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Discover the people and principles that define A. Prema & Co.</p>
          </AnimatedSection>
        </section>

        {/* Journey Section */}
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

        {/* Founder Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0a192f]">Meet The Founder</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
            </AnimatedSection>
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="Prema Arunasalam - Founder of A. Prema & Co" width={400} height={500} className="w-full h-auto max-w-sm object-cover" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold text-[#0a192f]">Prema Arunasalam</h3>
                <p className="text-xl text-[#D4AF37] font-medium mb-6">LL.M (Malaya), LLB (Hons) MMU, LLB (UOL)</p>
                <div className="space-y-4 text-gray-600">
                  <p>Prema Arunasalam is the founder of A. Prema & Co. She began her journey as a legal clerk in Messrs. A.G. Kalidas & Co, gaining valuable experience in litigation matters.</p>
                  <p>She completed her LLB (Hons) at Multimedia University and later pursued her LL.M at University of Malaya. Prema did her pupillage under Mr A.G Kalidas, where she handled a variety of cases including civil litigation, family law, and conveyancing matters.</p>
                  <p>Prema is a person who believes in carrying high ethical standards and integrity of the profession. Her approach combines legal expertise with genuine care for clients' wellbeing, ensuring they feel supported throughout their legal journey.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Partner Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0a192f]">Meet Our Partner</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
            </AnimatedSection>
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 order-last md:order-first">
                <h3 className="text-3xl font-bold text-[#0a192f]">Ms Laviania Pathmanathan</h3>
                <p className="text-xl text-[#D4AF37] font-medium mb-6">LLB (Hons) (UKM), LLM (UM)</p>
                <div className="space-y-4 text-gray-600">
                  <p>Ms Laviania Pathmanathan graduated from the National University of Malaysia with an LLB (Hons) and later obtained her LLM from University of Malaya. Being a polyglot fluent in English, Bahasa Malaysia, Tamil, and Hindi, she connects well with clients from diverse backgrounds.</p>
                  <p>She began her legal career at Messrs. Sreenevasan Young & Aminuddin, specializing in civil litigation. She later ran her own firm, gaining extensive experience before joining A Prema & Co on 1st February 2025 as a Partner.</p>
                  <p>Ms Laviania is known for her meticulous approach and her dedication to ensuring justice is served. Her passion for advocating for the underprivileged aligns perfectly with the firm's mission.</p>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-center order-first md:order-last">
                <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Ms Laviania Pathmanathan - Partner at A. Prema & Co" width={500} height={500} className="w-full h-auto max-w-sm object-cover" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Talent Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#0a192f]">Nurturing Future Talent</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
            </AnimatedSection>
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Prakash Ravi - Chambering student at A. Prema & Co" width={400} height={500} className="w-full h-auto max-w-sm object-cover" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-3xl font-bold text-[#0a192f]">Prakash Ravi</h3>
                <p className="text-xl text-[#D4AF37] font-medium mb-6">Chambering Student</p>
                <div className="space-y-4 text-gray-600">
                  <p>Prakash Ravi is currently undergoing his pupillage at A. Prema & Co, where he is gaining hands-on experience in various legal matters under the guidance of our senior lawyers.</p>
                  <p>During his pupillage, Prakash has demonstrated exceptional dedication and a keen interest in civil litigation. He assists with legal research, drafting documents, and client consultations, showing great promise in his legal career.</p>
                  <p>His enthusiasm and commitment to the profession make him a valuable addition to our team as we invest in the next generation of legal professionals.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find a solution? Let's talk.</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our team is ready to assist you with your legal needs. Schedule a consultation today.</p>
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

export default AboutPage;