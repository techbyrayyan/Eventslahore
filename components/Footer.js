import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white pt-32 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand & Socials */}
          <div className="flex flex-col gap-10">
            <div>
              <Link href="/">
                <img src="/logo.png" alt="EventLahore Logo" className="h-20 w-auto mb-6 object-contain" />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
                We make your special moments more special with our premium venues and top-class services.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { name: 'FB', icon: 'f' },
                { name: 'IG', icon: 'i' },
                { name: 'TW', icon: 't' },
                { name: 'YT', icon: 'y' }
              ].map((s) => (
                <div key={s.name} className="w-11 h-11 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer shadow-lg group">
                  <span className="text-sm font-bold group-hover:scale-110 transition-transform uppercase">{s.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-10 text-white tracking-tight border-b border-[#d4af37]/30 pb-4 inline-block pr-8">Quick Links</h3>
            <ul className="flex flex-col gap-5 text-gray-500 text-sm font-semibold">
              <li><Link href="/" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link href="/venues" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Venues</Link></li>
              <li><Link href="/wedding-packages" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Packages</Link></li>
              <li><Link href="/services" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link href="/about" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-10 text-white tracking-tight border-b border-[#d4af37]/30 pb-4 inline-block pr-8">Our Services</h3>
            <ul className="flex flex-col gap-5 text-gray-500 text-sm font-semibold">
              <li><Link href="/services/catering" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Catering</Link></li>
              <li><Link href="/services/decor" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Decoration</Link></li>
              <li><Link href="/services/photography" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Photography</Link></li>
              <li><Link href="/services/dj-and-sounds" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">DJ & Sound</Link></li>
              <li><Link href="/services" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">Makeup Artist</Link></li>
              <li><Link href="/services" className="hover:text-[#d4af37] transition-all hover:translate-x-1 inline-block">All Services</Link></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-xl font-bold mb-8 text-white tracking-tight">Contact Us</h3>
              <div className="flex flex-col gap-6 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center border border-white/5 group-hover:border-[#d4af37]/30 transition-all">📞</span>
                  <span className="group-hover:text-white transition-colors">+92 300 1234567</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center border border-white/5 group-hover:border-[#d4af37]/30 transition-all">✉</span>
                  <span className="group-hover:text-white transition-colors">info@eventlahore.com</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center border border-white/5 group-hover:border-[#d4af37]/30 transition-all">📍</span>
                  <span className="group-hover:text-white transition-colors">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-5 text-white uppercase tracking-widest">Subscribe Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-[#0a0a0a] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-[#d4af37]/50 transition-all placeholder:text-gray-600"
                />
                <button className="bg-[#d4af37] text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]">
                  <span className="text-xl font-black">➤</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} EventLahore. All Rights Reserved.
          </p>
          <div className="flex gap-10 text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black">
             <Link href="/support" className="hover:text-[#d4af37] transition-all">Help Center</Link>
             <Link href="/terms" className="hover:text-[#d4af37] transition-all">Terms & Conditions</Link>
             <Link href="/privacy" className="hover:text-[#d4af37] transition-all">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
