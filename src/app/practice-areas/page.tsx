"use client";

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/app/components/AnimatedSection';

const PracticeAreasPage = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          className="relative text-white"
          style={{
            backgroundImage: "url(&#39;https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=1500&amp;q=80&#39;)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Comprehensive Legal Expertise</h1>
            <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Dedicated representation across a wide spectrum of legal fields. Find your solution here.</p>
          </AnimatedSection>
        </section>

        {/* Areas of Law Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a192f] mb-4">Our Areas of Law</h2>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection><Link href="#area-criminal" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-gavel"></i></div><h3 className="text-xl font-bold text-[#0a192f]">CRIMINAL DEFENSE</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.1s"><Link href="#area-family" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-users"></i></div><h3 className="text-xl font-bold text-[#0a192f]">FAMILY MATTERS</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.2s"><Link href="#area-accident" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-car-crash"></i></div><h3 className="text-xl font-bold text-[#0a192f]">ACCIDENT & DISABILITY CLAIMS</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.3s"><Link href="#area-conveyancing" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-home"></i></div><h3 className="text-xl font-bold text-[#0a192f]">CONVEYANCING</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.4s"><Link href="#area-civil" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-balance-scale-right"></i></div><h3 className="text-xl font-bold text-[#0a192f]">LITIGATION OF CIVIL MATTERS</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.5s"><Link href="#area-medical" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-user-md"></i></div><h3 className="text-xl font-bold text-[#0a192f]">MEDICAL NEGLIGENCE</h3></Link></AnimatedSection>
              <AnimatedSection><Link href="#area-probate" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-file-signature"></i></div><h3 className="text-xl font-bold text-[#0a192f]">PROBATE, TRUSTS & WILL</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.1s"><Link href="#area-banking" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-landmark"></i></div><h3 className="text-xl font-bold text-[#0a192f]">BANKING CORPORATE LITIGATION</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.2s"><Link href="#area-bankruptcy" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-folder-open"></i></div><h3 className="text-xl font-bold text-[#0a192f]">BANKRUPTCY & WINDING UP</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.3s"><Link href="#area-employment" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-briefcase"></i></div><h3 className="text-xl font-bold text-[#0a192f]">EMPLOYMENT LAW</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.4s"><Link href="#area-immigration" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-passport"></i></div><h3 className="text-xl font-bold text-[#0a192f]">IMMIGRATION</h3></Link></AnimatedSection>
              <AnimatedSection delay="0.5s"><Link href="#area-general" className="practice-card bg-gray-50 p-8 rounded-lg hover:shadow-xl transition duration-300 text-center block"><div className="practice-icon text-4xl text-[#0a192f] mb-4"><i className="fas fa-book-reader"></i></div><h3 className="text-xl font-bold text-[#0a192f]">GENERAL LITIGATION</h3></Link></AnimatedSection>
            </div>
          </div>
        </section>

        {/* Detailed Sections Start Here */}
        <section id="area-criminal" className="py-20 bg-gray-50 scroll-mt-24">
          <AnimatedSection className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Criminal Defense</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                <p className="text-gray-600 mb-6">Facing criminal charges can be a daunting experience. Our strategic criminal defense team is dedicated to protecting your rights at every stage of the legal process. We provide robust representation from investigation and bail applications through to trial and appeals.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Bail & Remand Proceedings</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Trial Representation in Magistrates&#39;, Sessions&#39;, &amp; High Court</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Appeals to Higher Courts</span></li>
                </ul>
              </div>
              <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=870" alt="Criminal Defense" width={870} height={580} className="w-full h-auto" />
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section id="area-family" className="py-20 bg-white scroll-mt-24">
          <AnimatedSection className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:order-last">
                <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Family Matters</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                <p className="text-gray-600 mb-6">We handle sensitive family law issues with compassion and discretion. Our goal is to achieve amicable resolutions that protect the interests of you and your loved ones, specializing in divorce, custody, and adoption matters.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Divorce & Annulment Proceedings</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Child Custody, Care, and Control</span></li>
                  <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Adoption and Guardianship</span></li>
                </ul>
              </div>
              <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1711989691590-c9510a936e93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Family Matters" width={1170} height={780} className="w-full h-auto" />
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section id="area-accident" className="py-20 bg-gray-50 scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Accident & Disability Claims</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">If you&#39;ve been injured due to negligence, we are here to help you secure the compensation you deserve. We manage all aspects of personal injury claims, from motor vehicle accidents to workplace injuries, ensuring your focus remains on recovery.</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Motor Vehicle Accident Claims</span></li>
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Workplace Injury and SOCSO Claims</span></li>
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Public Liability and Slip-and-Fall Cases</span></li>
                        </ul>
                    </div>
                    <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1713623311317-d3c43a4be4cf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Accident & Disability" width={1074} height={716} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-conveyancing" className="py-20 bg-white scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Conveyancing</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Our real estate team provides comprehensive conveyancing services for a smooth and secure property transaction process. We assist both individuals and corporations in the buying, selling, and leasing of residential and commercial properties.</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Sale and Purchase Agreements</span></li>
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Lease and Tenancy Agreements</span></li>
                            <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Property Financing and Loan Documentation</span></li>
                        </ul>
                    </div>
                    <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=870" alt="Conveyancing" width={870} height={580} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>
        
        <section id="area-civil" className="py-20 bg-gray-50 scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Litigation of Civil Matters</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">We represent clients in a broad range of civil disputes. Our litigators are adept at negotiation, mediation, and trial advocacy, committed to resolving conflicts efficiently while protecting your legal and commercial interests.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Contractual and Commercial Disputes</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Debt Recovery and Enforcement</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Land and Property Disputes</span></li>
                        </ul>
                    </div>
                    <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Civil Litigation" width={1170} height={780} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-medical" className="py-20 bg-white scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Medical Negligence</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Holding medical professionals accountable requires specialized expertise. We meticulously investigate claims of medical malpractice, from misdiagnosis to surgical errors, to secure justice and fair compensation for victims and their families.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Surgical and Treatment Errors</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Misdiagnosis or Delayed Diagnosis</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Birth Injury and Obstetric Claims</span></li>
                        </ul>
                    </div>
                    <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1563932127565-699eeea1e17a?q=80&w=782&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Medical Negligence" width={782} height={1173} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-probate" className="py-20 bg-gray-50 scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Probate, Trusts & Will</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Planning for the future is essential. We provide comprehensive estate planning services, including will drafting, trust creation, and administration of estates through probate, ensuring your assets are distributed according to your wishes.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Will Writing and Estate Planning</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Application for Grant of Probate</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Creation and Administration of Trusts</span></li>
                        </ul>
                    </div>
                    <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=870" alt="Probate & Will" width={870} height={580} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-banking" className="py-20 bg-white scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Banking Corporate Litigation</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Our firm represents financial institutions and corporations in complex disputes. We have extensive experience in litigation involving loan defaults, foreclosures, securities, and regulatory compliance, offering strategic and effective legal solutions.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Foreclosure and Recovery Proceedings</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Corporate and Shareholder Disputes</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Financial Services and Regulatory Litigation</span></li>
                        </ul>
                    </div>
                    <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1443962481408-7b8e3a0a3ddf?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banking Litigation" width={1088} height={725} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>
        
        <section id="area-bankruptcy" className="py-20 bg-gray-50 scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Bankruptcy & Winding Up</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">We advise both creditors and debtors on insolvency matters. Our services include initiating bankruptcy proceedings, handling corporate winding-up petitions, and advising on debt restructuring to navigate financial distress effectively.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Personal Bankruptcy Petitions</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Corporate Winding-Up and Liquidation</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Debt Restructuring and Corporate Rescue</span></li>
                        </ul>
                    </div>
                    <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1528747310874-b78b2322ffc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bankruptcy" width={1170} height={780} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-employment" className="py-20 bg-white scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Employment Law</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">We advise both employers and employees on all facets of employment law. From contract drafting to resolving disputes over unfair dismissal or workplace discrimination, we provide practical and commercially sound advice.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Unfair and Wrongful Dismissal Claims</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Employment Contracts and Handbooks</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Industrial Relations and Trade Disputes</span></li>
                        </ul>
                    </div>
                    <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=870" alt="Employment Law" width={870} height={580} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>
        
        <section id="area-immigration" className="py-20 bg-gray-50 scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">Immigration</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Navigating immigration law can be complex. We assist individuals and businesses with visa applications, work permits, and residency status, ensuring compliance with all legal requirements for a smooth transition.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Work Permit and Employment Pass Applications</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Permanent Residency Applications</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Citizenship and Naturalization</span></li>
                        </ul>
                    </div>
                    <div className="tilt-card shadow-xl rounded-lg overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1576078361289-d7c4da40e7cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Immigration" width={1170} height={780} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section id="area-general" className="py-20 bg-white scroll-mt-24">
            <AnimatedSection className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:order-last">
                        <h3 className="text-3xl font-bold text-[#0a192f] mb-4">General Litigation</h3>
                        <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                        <p className="text-gray-600 mb-6">Our versatile litigation team is equipped to handle a wide array of legal disputes not covered by specialized categories. We provide determined advocacy and strategic counsel to achieve favorable outcomes in any legal challenge.</p>
                        <ul className="space-y-3 text-gray-600">
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Defamation and Libel Cases</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Intellectual Property Disputes</span></li>
                           <li className="flex items-start"><i className="fas fa-check-circle text-[#D4AF37] mt-1 mr-3"></i><span>Administrative and Public Law</span></li>
                        </ul>
                    </div>
                    <div className="md:order-first tilt-card shadow-xl rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="General Litigation" width={2070} height={1380} className="w-full h-auto"/>
                    </div>
                </div>
            </AnimatedSection>
        </section>

        <section className="relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 bg-[#0a192f] opacity-80"></div>
          <AnimatedSection className="relative container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find a solution? Let&#39;s talk.</h2>
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
        /* Offset for fixed header */
        .scroll-mt-24 {
            scroll-margin-top: 6rem; /* 96px */
        }
      `}</style>
    </>
  );
};

export default PracticeAreasPage;