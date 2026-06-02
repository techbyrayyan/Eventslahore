'use client';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-start px-6 md:px-16 lg:px-24 pt-4 md:pt-8 pb-12 overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
          style={{ 
            backgroundImage: 'url("/img28.png")', 
            backgroundColor: '#050505' 
          }}
        >
          {/* Multi-layered overlays for depth and premium feel */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto ">
          <div className="max-w-4xl">
            <span className="text-[#d4af37] text-sm font-black uppercase tracking-[0.4em] mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl font-bold  tracking-tight leading-[1.1] mt-6">
              We're Here to Help You <br />
              <span className="text-[#d4af37]">Plan The Perfect Event</span>
            </h1>
            <p className="text-lg  text-white mb-10 mt-6 max-w-2xl ">
              Have a question, need assistance, or ready to book your event? <br className="hidden md:block" />
              Get in touch with our team anytime.
            </p>

            {/* Features Row - Exact Match to Design */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              {[
                { icon: 'fa-clock', title: 'Quick Response', desc: 'We reply within 24 hours' },
                { icon: 'fa-headset', title: 'Expert Support', desc: 'Our team is here to help' },
                { icon: 'fa-shield', title: 'Hassle Free', desc: 'Simple & Smooth Process' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group cursor-default">
                  <div className="w-16 h-16 rounded-2xl border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-2xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shadow-xl shadow-[#d4af37]/5 bg-black/20 backdrop-blur-sm">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">{item.title}</h3>
                    <p className="text-sm text-white/70 font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content Section - 3 Column Layout */}
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Get In Touch</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-1 bg-[#b08d57] rounded-full"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#b08d57]"></div>
                  <div className="h-[1px] w-24 bg-[#b08d57]/30"></div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Whether you're planning a wedding, birthday, corporate event or any special occasion — we're just a message away.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: 'fa-phone', title: 'Call Us', val: '+92 300 1234567', sub: 'Mon - Sun (10:00 AM - 8:00 PM)' },
                  { icon: 'fa-whatsapp', title: 'WhatsApp', val: '+92 300 1234567', sub: 'Chat with us on WhatsApp', color: 'bg-[#25D366]' },
                  { icon: 'fa-envelope', title: 'Email Us', val: 'info@eventlahore.com', sub: 'We\'ll reply as soon as possible' },
                  { icon: 'fa-location-dot', title: 'Visit Our Office', val: '123, Main Boulevard, Gulberg, Lahore, Pakistan', sub: '' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 hover:border-[#b08d57]/20 hover:shadow-lg transition-all group bg-white shadow-sm">
                    <div className={`w-12 h-12 rounded-full ${item.color || 'bg-[#b08d57]'} flex items-center justify-center text-white text-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                      <p className="text-[15px] font-bold text-gray-900 truncate">{item.val}</p>
                      {item.sub && <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Column: Image */}
            <div className="lg:col-span-5 px-4 h-full">
              <div className="relative h-[650px] w-full rounded-[40px] overflow-hidden shadow-2xl group">
                <img 
                  src="/img29.png" 
                  alt="Luxury Event Decor" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-1 bg-[#b08d57] rounded-full"></div>
                  <div className="w-2 h-2 rotate-45 bg-[#b08d57]"></div>
                  <div className="h-[1px] w-32 bg-[#b08d57]/30"></div>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-900 placeholder:text-gray-500" />
                  <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-900 placeholder:text-gray-500" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-900 placeholder:text-gray-500" />
                  <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-700">
                    <option className="text-gray-500">Event Type</option>
                    <option>Wedding</option>
                    <option>Birthday</option>
                    <option>Corporate</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-700" />
                  </div>
                  <input type="number" placeholder="Guest Count" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all text-gray-900 placeholder:text-gray-500" />
                </div>

                <textarea rows="6" placeholder="Your Message" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-[#b08d57] transition-all resize-none text-gray-900 placeholder:text-gray-500"></textarea>

                <button type="submit" className="w-full bg-[#b08d57] text-white py-5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 hover:bg-[#9a7b4c] transition-all shadow-lg shadow-[#b08d57]/20 group">
                  Send Message 
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xs"></i>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium pt-4">
                  <i className="fa-solid fa-shield-halved text-[#b08d57]"></i>
                  We respect your privacy. Your information is safe with us.
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-black tracking-[0.2em] font-serif text-2xl md:text-3xl uppercase mb-4">
              All Services Under One Roof
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light">
              We provide everything you need to make your event unforgettable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { title: 'Decoration', desc: 'Stunning themes and beautiful setups.', img: '/img22.png' },
              { title: 'Catering', desc: 'Delicious menu with top quality service.', img: '/img23.png' },
              { title: 'Light & Sound', desc: 'High quality sound and lighting systems.', img: '/img24.png' },
              { title: 'Photography', desc: 'Capture your moments beautifully.', img: '/img25.png' },
              { title: 'Makeup Artist', desc: 'Professional makeup for your special day.', img: '/img26.png' },
              { title: 'Transport', desc: 'Luxury cars and valet parking services.', img: '/img27.png' },
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 border border-white/10 group-hover:border-[#d4af37]/50 transition-all duration-500">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content */}
                <div className="mt-2">
                  <h3 className="text-black text-sm font-bold uppercase tracking-widest mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-[11px] leading-relaxed max-w-[150px] mx-auto opacity-80">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-[#0a0a0a] rounded-[40px] overflow-hidden relative border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="p-8 md:p-12 lg:p-16 space-y-6 relative z-10">
                <span className="text-[#d4af37] text-xs md:text-sm font-black uppercase tracking-[0.3em] block">
                  Need help planning your event?
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white leading-[1.2]">
                  Let Our Experts Plan <br className="hidden md:block" /> Your Dream Event
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
                  From venue to decor, catering to entertainment – we handle everything so you can enjoy your special day.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/book-now" className="bg-[#b08d57] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-[#9a7b4c] transition-all group text-sm md:text-base">
                    Book Now <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                  <Link href="/venues" className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-sm md:text-base">
                    Explore Venues
                  </Link>
                </div>
              </div>
              
              {/* Right Image Container */}
              <div className="h-full min-h-[350px] lg:min-h-full relative overflow-hidden">
                <img 
                  src="/img30.png" 
                  alt="Dream Event Setup" 
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                />
                {/* Gradient overlap for smooth transition */}
                <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent hidden lg:block"></div>
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar Section */}
      <section className="py-16 bg-[#fcfcfc] border-t border-gray-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
            {[
              { icon: 'fa-shield-halved', title: 'Verified Venues', desc: 'All venues are verified and trusted' },
              { icon: 'fa-tags', title: 'Best Price Guarantee', desc: 'We ensure you get the best prices' },
              { icon: 'fa-user-slash', title: 'No Owner Contact', desc: 'We connect you only with EventLahore' },
              { icon: 'fa-headset', title: 'Full Service Support', desc: 'We provide all services you need' },
              { icon: 'fa-calendar-check', title: 'Easy Booking', desc: 'Book your event in just a few clicks' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-default">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-[#d4af37] text-xl shadow-xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 flex-shrink-0 border border-white/5">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-[13px] font-black text-gray-900 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
