import Link from 'next/link';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/homeimg.png")', 
            backgroundColor: '#050505' 
          }}
        >
          {/* Lightened overlays for better image visibility while keeping text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto pt-20">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <h1 className="text-5xl font-bold mb-6 tracking-tight leading-[1.05]">
              Lahore's Most Trusted <br />
              <span className="text-[#d4af37]">Event Booking Platform</span>
            </h1>
            <p className="text-xl  text-gray-300 mb-16 max-w-2xl leading-relaxed">
              Find the perfect venue and the best services <br className="hidden md:block" />
              for your special moments.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 mb-20">
              {[
                { icon: 'fa-crown', label: 'Best Venues' },
                { icon: 'fa-shield-halved', label: 'Premium Services' },
                { icon: 'fa-calendar-check', label: 'Easy Booking' },
                { icon: 'fa-wallet', label: 'Best Prices' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-sm group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                    <i className={`fa-solid ${f.icon}`}></i>
                  </div>
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-white transition-colors">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Bar - Moved outside max-w-4xl to allow full expansion */}
          <div className="w-full max-w-7xl bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/5 p-1.5 rounded-[40px] flex flex-wrap lg:flex-nowrap items-center gap-1 shadow-2xl">
            
            {/* Location */}
            <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer rounded-[30px] group">
              <span className="text-[#d4af37] text-2xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-location-dot"></i></span>
              <div className="text-left">
                <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-500 font-black mb-0.5">Select Location</label>
                <div className="text-sm font-black text-white">All Lahore</div>
              </div>
            </div>
            
            {/* Event Type */}
            <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer rounded-[30px] group">
              <span className="text-[#d4af37] text-2xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-sliders"></i></span>
              <div className="text-left">
                <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-500 font-black mb-0.5">Event Type</label>
                <div className="text-sm font-black text-white">All Types</div>
              </div>
            </div>

            {/* Event Date */}
            <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer rounded-[30px] group">
              <span className="text-[#d4af37] text-2xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-calendar-days"></i></span>
              <div className="text-left">
                <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-500 font-black mb-0.5">Event Date</label>
                <div className="text-sm font-black text-white">Select Date</div>
              </div>
            </div>

            {/* Guest Count */}
            <div className="flex-1 min-w-[200px] flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer rounded-[30px] group">
              <span className="text-[#d4af37] text-2xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-users"></i></span>
              <div className="text-left">
                <label className="block text-[9px] uppercase tracking-[0.15em] text-gray-500 font-black mb-0.5">Guest Count</label>
                <div className="text-sm font-black text-white">Guests</div>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full lg:w-auto bg-[#c5a059] text-black px-10 py-5 rounded-[35px] font-black text-xs uppercase tracking-[0.2em] flex flex-col items-center justify-center transition-all shadow-[0_10px_30px_rgba(197,160,89,0.3)] hover:bg-[#d4af37] hover:scale-[1.02] active:scale-95 m-1 min-w-[180px]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-magnifying-glass text-sm"></i>
                <span>Search Now</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Venues Section */}
      <section className="py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#d4af37] tracking-tight">Featured Venues</h2>
            <p className="text-gray-400 text-base font-medium">Explore our handpicked top venues in Lahore for your next grand event.</p>
          </div>
          <Link href="/venues" className="text-[#d4af37] font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group border border-[#d4af37]/30 px-5 py-2.5 rounded-full hover:bg-[#d4af37] hover:text-black transition-all">
            View All Venues <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Royal Swiss Lahore", price: "350,000", rating: "4.8", reviews: "120", tag: "Popular", location: "DHA, Lahore" },
            { title: "Emporium Mall Marquee", price: "280,000", rating: "4.7", reviews: "85", tag: "Best Seller", location: "Johar Town, Lahore" },
            { title: "PC Hotel Lahore", price: "450,000", rating: "4.6", reviews: "210", tag: "Luxury", location: "Gulberg, Lahore" },
            { title: "Zainab Farmhouse", price: "200,000", rating: "4.9", reviews: "64", tag: "Farmhouse", location: "Bedian Road, Lahore" },
          ].map((venue, i) => (
            <div key={i} className="group bg-[#0a0a0a] rounded-[24px] overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#d4af37]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="relative h-56 bg-[#111] overflow-hidden">
                <img src={`/hall${i+1}.png`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={venue.title} />
                <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-[9px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest shadow-xl">
                  {venue.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-xl group-hover:text-[#d4af37] transition-colors">{venue.title}</h3>
                  <div className="flex items-center gap-1.5 text-[#d4af37] text-xs font-black shrink-0">
                    <i className="fa-solid fa-star"></i> <span>{venue.rating} <span className="text-gray-500 font-medium">({venue.reviews})</span></span>
                  </div>
                </div>
                <p className="text-gray-500 text-[11px] mb-4 font-semibold tracking-wide flex items-center gap-1">📍 {venue.location}</p>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xl font-black text-[#d4af37]">Rs. {venue.price} <span className="text-[10px] text-gray-500 font-normal uppercase tracking-tighter">/ Event</span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className=" bg-[#050505] px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37] tracking-tight">Our Top Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">We provide premium end-to-end services to make your event planning seamless and memorable.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "Catering", desc: "Delicious Food", icon: 'fa-utensils', img: '/img1.png' },
              { name: "Decoration", desc: "Beautiful Setup", icon: 'fa-wand-magic-sparkles', img: '/img2.png' },
              { name: "Photography", desc: "Capture Moments", icon: 'fa-camera', img: '/img3.png' },
              { name: "DJ & Sound", desc: "Music & Entertainment", icon: 'fa-music', img: '/img4.png' },
              { name: "Makeup Artist", desc: "Bridal & Party Makeup", icon: 'fa-palette', img: '/img5.png' },
              { name: "More Services", desc: "Everything You Need", icon: 'fa-plus', img: '/img6.png' },
            ].map((service, i) => (
              <div key={i} className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col cursor-pointer shadow-lg">
                {/* Image Section */}
                <div className="h-44 w-full overflow-hidden">
                  <img src={service.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt={service.name} />
                </div>

                {/* Content Section */}
                <div className="p-5 flex items-center gap-4">
                  <div className="text-[#d4af37] text-2xl w-10 flex justify-center">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-base text-white group-hover:text-[#d4af37] transition-colors">{service.name}</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#d4af37] tracking-tight">Popular Packages</h2>
            <p className="text-gray-400 text-base font-medium">Choose from our most popular event packages</p>
          </div>
          <Link href="/packages" className="text-[#d4af37] font-bold text-xs uppercase tracking-[0.1em] flex items-center gap-2 group border border-[#d4af37]/30 px-5 py-2 rounded-lg hover:bg-[#d4af37] hover:text-black transition-all">
            View All Packages <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            { title: "Wedding Package", price: "999,000", type: "Full Wedding Event", img: "/img7.png", features: ["Venue", "Photography", "DJ & Sound", "Decor"] },
            { title: "Birthday Package", price: "149,000", type: "Birthday Celebration", img: "/img8.png", features: ["Venue", "Decoration", "DJ & Sound", "Makeup"] },
            { title: "Corporate Package", price: "299,000", type: "Corporate Events", img: "/img9.png", features: ["Venue", "Decoration", "Photography", "Bai Recog"] },
          ].map((pkg, i) => (
            <div key={i} className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 flex flex-col md:flex-row lg:flex-col xl:flex-row h-full">
              {/* Image Section */}
              <div className="w-full md:w-2/5 lg:w-full xl:w-2/5 min-h-[200px] overflow-hidden">
                <img src={pkg.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" alt={pkg.title} />
              </div>

              {/* Details Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">{pkg.title}</h3>
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-2">{pkg.type}</p>
                  <div className="text-lg font-black text-[#d4af37] mb-4">Rs. {pkg.price}</div>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                    {pkg.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                        <span className="text-[#d4af37] text-[10px]"><i className="fa-solid fa-check"></i></span> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-2.5 bg-transparent border border-[#d4af37]/40 text-[#d4af37] font-bold text-[10px] uppercase tracking-widest rounded-lg hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-10 text-white tracking-tight">
          Why Choose <span className="text-[#d4af37]">EventLahore?</span>
        </h2>
        
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
          {/* Stats Grid */}
          <div className="flex flex-wrap md:flex-nowrap gap-8 flex-1">
            {[
              { val: "1000+", label: "Happy Clients", icon: 'fa-users' },
              { val: "500+", label: "Events Completed", icon: 'fa-calendar-check' },
              { val: "50+", label: "Venues Listed", icon: 'fa-building-columns' },
              { val: "24/7", label: "Customer Support", icon: 'fa-clock' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-[#d4af37] text-xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tight">{stat.val}</span>
                  <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Offer Card */}
          <div className="w-full lg:w-auto bg-[#0a0a0a] rounded-2xl p-6 border border-[#d4af37]/20 flex items-center gap-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 blur-3xl rounded-full"></div>
            <div className="text-[#d4af37] text-4xl">
              <i className="fa-solid fa-gift"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">Get Best Deals</h3>
              <p className="text-[10px] text-gray-500 font-medium">Book early and get<br />amazing discounts</p>
            </div>
            <button className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shrink-0">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
    </div>
  );
}
