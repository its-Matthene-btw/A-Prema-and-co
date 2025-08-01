import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">A. PREMA & CO</h3>
            <p className="text-gray-300">Advocates & Solicitors you can trust for innovative and effective legal solutions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-300">10-1, Jalan PJS 2D/1, Taman Medan, 46000 Petaling Jaya, Selangor</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: advocprema@gmail.com</p>
            <p className="text-gray-300">Phone: 012 922 8735 / 03 7499 5446</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-[#D4AF37] transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link href="/practice-areas" className="text-gray-300 hover:text-[#D4AF37] transition">Practice Areas</Link></li>
              <li><Link href="/articles" className="text-gray-300 hover:text-[#D4AF37] transition">Articles</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#D4AF37] transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 A. PREMA & CO. All Rights Reserved. | <Link href="#" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;