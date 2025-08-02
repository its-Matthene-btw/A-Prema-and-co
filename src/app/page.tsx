"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';
import ContactForm from '@/app/components/ContactForm';
import { getFeaturedAdvocates } from '@/sanity/lib/sanity';
import SanityImage from '@/app/components/SanityImage';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUsers,
  faUserMd,
  faCarCrash,
  faGavel,
  faBriefcase,
  faUserTie,
  faHandsHelping,
  faTrophy,
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';

interface Advocate {
  _id: string;
  name: string;
  position: string;
  image: {
    asset: {
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  slug: { current: string };
}

export default function Home() {
  const [featuredAdvocates, setFeaturedAdvocates] = useState<Advocate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAdvocates() {
      try {
        const advocates = await getFeaturedAdvocates();
        setFeaturedAdvocates(advocates);
      } catch (err: unknown) {
        console.error("Failed to load advocates:", err);
        setError("Could not load team profiles. Please check the connection or try again later.");
      } finally {
        setLoading(false);
      }
    }
    loadAdvocates();
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="hero-content-wrapper flex flex-col md:flex-row min-h-screen items-stretch">
            <div className="relative md:w-3/5 text-white px-8 pb-8 pt-24 md:p-16 flex flex-col justify-center">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-oswald mb-6">
                  Innovative, fresh and effective problem-solving.
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-300 font-montserrat">
                  We help individuals and businesses handle their legal matters with confidence.
                </p>
                <Link href="/practice-areas" className="bg-[#D4AF37] hover:bg-[#c19e30] text-black font-bold py-4 px-8 rounded-md text-lg transition duration-300 inline-block font-oswald uppercase tracking-wider">
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="md:hidden w-4/5 mx-auto h-px bg-[#D4AF37] my-8 opacity-50"></div>
            <div className="relative md:w-2/5 right-content-panel py-16 md:py-0 md:h-auto min-h-[50vh]">
              <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-[#D4AF37] opacity-50"></div>
              <Image 
                src="/2.png" 
                alt="Statue of Lady Justice" 
                width={500} 
                height={800} 
                className="lady-justice-image" 
                priority 
              />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Handling Your Legal Matters With Confidence Since 2018</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            </AnimatedSection>
            <AnimatedSection className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <p className="text-lg mb-6">A. Prema & Co began its journey in 2018 with the vision to provide quality legal services to the community. Founded by Prema Arunasalam, the firm has grown steadily, adding Ms. Laviania Pathmanathan as a partner this year.</p>
                <p className="text-lg mb-6">Our firm is located at 10-1, Jalan PJS 2D/1, Taman Medan, 46000 Petaling Jaya, Selangor, where we serve clients with dedication and professionalism.</p>
                <p className="text-lg">We believe in building lasting relationships with our clients by providing personalized attention and tailored legal solutions for each unique situation.</p>
              </div>
              <div className="md:w-1/2 shadow-xl rounded-lg overflow-hidden tilt-card">
                <Image 
                  src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Law Office" 
                  width={1170} 
                  height={780} 
                  className="w-full h-auto" 
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Our Core Values</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-md text-center tilt-card">
                <div className="text-5xl text-[#D4AF37] mb-6">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a192f] mb-4">All About &quot;YOU&quot;</h3>
                <p className="text-gray-600">We will assist you in all legal way by listing the best solution for you. Your needs and objectives are at the center of everything we do.</p>
              </AnimatedSection>
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-md text-center tilt-card" delay="0.2s">
                <div className="text-5xl text-[#D4AF37] mb-6">
                  <FontAwesomeIcon icon={faHandsHelping} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a192f] mb-4">We &quot;Walk the Talk&quot;</h3>
                <p className="text-gray-600">We represent words with action. Our commitments are backed by diligent work and measurable results that you can count on.</p>
              </AnimatedSection>
              <AnimatedSection className="bg-white p-8 rounded-lg shadow-md text-center tilt-card" delay="0.4s">
                <div className="text-5xl text-[#D4AF37] mb-6">
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
                <h3 className="text-2xl font-bold text-[#0a192f] mb-4">Driven by Results</h3>
                <p className="text-gray-600">A strong belief in doing things right with passion, care, and results that matter. We measure our success by your satisfaction.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Practice Areas Section */}
        <section id="practice" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Our Practice Areas</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer comprehensive legal services across various practice areas to meet your diverse needs.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faHome} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">CONVEYANCING</h3>
                  <p className="text-gray-600">Expert handling of property transactions including sales, purchases, and mortgages with meticulous attention to detail.</p>
              </AnimatedSection>
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300" delay="0.1s">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">FAMILY MATTERS</h3>
                  <p className="text-gray-600">Compassionate representation in divorce, child custody, and other sensitive family law matters.</p>
              </AnimatedSection>
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300" delay="0.2s">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faUserMd} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">MEDICAL NEGLIGENCE</h3>
                  <p className="text-gray-600">Assertive advocacy for victims of medical malpractice to secure fair compensation.</p>
              </AnimatedSection>
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300" delay="0.3s">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faCarCrash} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">ACCIDENT CLAIMS</h3>
                  <p className="text-gray-600">Tenacious pursuit of compensation for victims of motor vehicle and workplace accidents.</p>
              </AnimatedSection>
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300" delay="0.4s">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faGavel} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">CRIMINAL DEFENSE</h3>
                  <p className="text-gray-600">Strategic defense for criminal charges at all levels, protecting your rights throughout the legal process.</p>
              </AnimatedSection>
              <AnimatedSection className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-lg transition duration-300" delay="0.5s">
                  <div className="practice-icon text-4xl text-[#0a192f] mb-4">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3">CORPORATE LITIGATION</h3>
                  <p className="text-gray-600">Effective representation in business disputes, contract enforcement, and commercial litigation.</p>
              </AnimatedSection>
            </div>
            <AnimatedSection className="text-center mt-12">
              <Link href="/practice-areas" className="inline-block border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 rounded-md text-lg transition duration-300">View All Practice Areas</Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Our People, Your Advocates</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet our dedicated team of legal professionals committed to serving your needs.</p>
            </AnimatedSection>
            
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md h-96 animate-pulse"></div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">
                <p className="font-bold">An Error Occurred</p>
                <p>{error}</p>
              </div>
            ) : featuredAdvocates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredAdvocates.map((advocate, index) => (
                  <AnimatedSection 
                    key={advocate._id}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                    delay={`${index * 0.2}s`}
                  >
                    <div className="overflow-hidden">
                      <SanityImage
                        image={advocate.image}
                        alt={advocate.name}
                        className="w-full h-72 object-cover transition-transform duration-300 hover:scale-105"
                        width={advocate.image.asset.metadata.dimensions.width}
                        height={advocate.image.asset.metadata.dimensions.height}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0a192f] mb-2">{advocate.name}</h3>
                      <p className="text-[#D4AF37]">{advocate.position}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 bg-gray-100 p-4 rounded-lg">
                <p>No featured team profiles are available at this time.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find a solution? Let&apos;s talk.</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Our team is ready to assist you with your legal needs. Schedule a consultation today.</p>
            <Link href="/contact" className="bg-[#D4AF37] hover:bg-yellow-400 text-[#0a192f] font-bold px-8 py-3 rounded-md text-lg transition duration-300 inline-block">Schedule a Consultation</Link>
          </AnimatedSection>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Contact Us</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get in touch with our team for expert legal advice and representation.</p>
            </AnimatedSection>
            <div className="flex flex-col lg:flex-row gap-12">
              <AnimatedSection className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Get in Touch</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-[#D4AF37] text-xl mr-4 mt-1">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0a192f]">Address</h4>
                        <p className="text-gray-600">10-1, Jalan PJS 2D/1, Taman Medan, 46000 Petaling Jaya, Selangor</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-[#D4AF37] text-xl mr-4 mt-1">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0a192f]">Email</h4>
                        <p className="text-gray-600">advocprema@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-[#D4AF37] text-xl mr-4 mt-1">
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0a192f]">Phone</h4>
                        <p className="text-gray-600">012 922 8735 / 03 7499 5446</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-[#D4AF37] text-xl mr-4 mt-1">
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0a192f]">Hours</h4>
                        <p className="text-gray-600">Mon - Fri, 9:00 AM - 5:30 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded mr-4">
                        <Image src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.waze.com/ul?ll=3.0789,101.6382&navigate=yes" alt="QR Code" width={96} height={96} className="w-24 h-24" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#0a192f] mb-2">Scan for Waze Directions</h4>
                        <p className="text-gray-600">Scan this QR code with your smartphone to get directions to our office.</p>
                      </div>
                    </div>
                  </div>
              </AnimatedSection>
              <AnimatedSection className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-[#0a192f] mb-6">Send Us a Message</h3>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
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
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(13, 16, 24, 0.90);
            z-index: 1;
        }
        .hero-content-wrapper {
            position: relative;
            z-index: 2;
        }
        .right-content-panel {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(30, 30, 30, 0.6);
            box-shadow: inset 5px 0 15px -5px rgba(0,0,0,0.5);
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .lady-justice-image {
            animation: float 6s ease-in-out infinite;
            max-width: 80%;
            height: auto;
            filter: drop-shadow(0 0 1rem rgba(0,0,0,0.5));
        }
        .practice-icon {
            transition: all 0.3s ease;
        }
        .practice-card:hover .practice-icon {
            transform: translateY(-5px) scale(1.1);
            color: #D4AF37;
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
}