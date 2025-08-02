"use client";

import AnimatedSection from '@/app/components/AnimatedSection';
import ContactForm from '@/app/components/ContactForm';
import FaqAccordion from '@/app/components/FaqAccordion';

const ContactPage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="relative text-white"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Get In Touch</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">We are here to listen and provide the expert legal guidance you need. Reach out today.</p>
          </AnimatedSection>
        </section>

        {/* Office Details Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Our Office</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection className="space-y-8">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#D4AF37] text-2xl mr-6 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a192f] mb-1">Address</h4>
                    <p className="text-gray-600">10-1, Jalan PJS 2D/1, Taman Medan, 46000 Petaling Jaya, Selangor</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-[#D4AF37] text-2xl mr-6 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a192f] mb-1">Phone</h4>
                    <p className="text-gray-600">012 922 8735 / 03 7499 5446</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-[#D4AF37] text-2xl mr-6 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a192f] mb-1">Email</h4>
                    <p className="text-gray-600">advocprema@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-[#D4AF37] text-2xl mr-6 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a192f] mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-share-alt text-[#D4AF37] text-2xl mr-6 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-xl text-[#0a192f] mb-2">Connect With Us</h4>
                    <div className="flex items-center space-x-4 mt-2">
                      <a href="#" target="_blank" aria-label="Facebook" className="text-gray-500 hover:text-[#0a192f] transition-colors duration-300">
                        <i className="fab fa-facebook-square text-3xl"></i>
                      </a>
                      <a href="https://wa.me/60129228735" target="_blank" aria-label="WhatsApp" className="text-gray-500 hover:text-green-500 transition-colors duration-300">
                        <i className="fab fa-whatsapp-square text-3xl"></i>
                      </a>
                      <a href="mailto:advocprema@gmail.com" aria-label="Email" className="text-gray-500 hover:text-[#D4AF37] transition-colors duration-300">
                        <i className="fas fa-envelope-square text-3xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection className="rounded-lg shadow-xl overflow-hidden tilt-card h-[500px]" delay="0.2s">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=10-1,%20Jalan%20PJS%202D/1,%20Taman%20Medan,%2046000%20Petaling%20Jaya,%20Selangor&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  style={{ filter: 'grayscale(0.8) contrast(1.2) opacity(0.8)' }}
                ></iframe>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Send Message Section */}
        <section className="py-20 bg-gray-50">
          <AnimatedSection className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Send Us A Message</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Have a question or want to schedule a consultation? Fill out the form below.</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </AnimatedSection>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            </AnimatedSection>
            <FaqAccordion />
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
            transform: perspective(1000px) rotateX(2deg) rotateY(2deg) scale(1.02);
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
        /* FAQ Accordion Styling */
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ContactPage;