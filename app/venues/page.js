'use client';
import Link from 'next/link';

export default function VenuesPage() {
  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/img16.png")',
            backgroundColor: '#050505'
          }}
        >
          {/* Multi-layered overlays for that premium look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto pt-24">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <h1 className="text-5xl  font-bold mb-6 tracking-tight leading-[1.1]">
              Find The Perfect Venue <br />
              for Your <span className="text-[#d4af37]">Special Event</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-medium">
              Explore top-rated marriage halls, marquees, <br className="hidden md:block" />
              farmhouses and more in Lahore.
            </p>

            {/* Features Row */}
            <div className="flex flex-nowrap items-center gap-x-4 md:gap-x-8 lg:gap-x-12 mb-16 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-2">
              {[
                { icon: 'fa-lock', label: 'Best Venues' },
                { icon: 'fa-circle-check', label: 'Verified & Trusted' },
                { icon: 'fa-sliders', label: 'All Event Types' },
                { icon: 'fa-tag', label: 'Best Guarantee' },
                { icon: 'fa-clock', label: '24/7 Support' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 whitespace-nowrap flex-shrink-0">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-[10px] md:text-xs">
                    <i className={`fa-solid ${f.icon}`}></i>
                  </div>
                  <span className="text-[10px] md:text-[11px] lg:text-xs font-bold tracking-widest uppercase text-gray-200">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Search Bar */}
          <div className="w-full max-w-7xl bg-white backdrop-blur-md rounded-3xl md:rounded-[55px] flex flex-wrap mb-6 lg:flex-nowrap items-center gap-0 shadow-2xl p-1.5 border border-white/20 overflow-hidden">

            {/* Location */}
            <div className="flex-1 min-w-[160px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50/80 transition-colors cursor-pointer rounded-l-3xl md:rounded-l-[45px] group border-r border-gray-100">
              <span className="text-[#b08d57] text-xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-location-dot"></i></span>
              <div className="text-left">
                <label className="block text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-black mb-0.5">Select Location</label>
                <div className="text-xs md:text-sm font-black text-gray-800 whitespace-nowrap">All Lahore</div>
              </div>
            </div>

            {/* Venue Type */}
            <div className="flex-1 min-w-[160px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50/80 transition-colors cursor-pointer group border-r border-gray-100">
              <span className="text-[#b08d57] text-xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-hotel"></i></span>
              <div className="text-left">
                <label className="block text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-black mb-0.5">Venue Type</label>
                <div className="text-xs md:text-sm font-black text-gray-800 flex items-center gap-2 whitespace-nowrap">
                  All Types <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Event Type */}
            <div className="flex-1 min-w-[160px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50/80 transition-colors cursor-pointer group border-r border-gray-100">
              <span className="text-[#b08d57] text-xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-calendar-check"></i></span>
              <div className="text-left">
                <label className="block text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-black mb-0.5">Event Type</label>
                <div className="text-xs md:text-sm font-black text-gray-800 flex items-center gap-2 whitespace-nowrap">
                  All Events <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Event Date */}
            <div className="flex-1 min-w-[160px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50/80 transition-colors cursor-pointer group border-r border-gray-100">
              <span className="text-[#b08d57] text-xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-calendar-days"></i></span>
              <div className="text-left">
                <label className="block text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-black mb-0.5">Event Date</label>
                <div className="text-xs md:text-sm font-black text-gray-800 flex items-center gap-2 whitespace-nowrap">
                  Select Date <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Guest Count */}
            <div className="flex-1 min-w-[160px] flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50/80 transition-colors cursor-pointer lg:rounded-none group border-r-0 lg:border-r border-gray-100">
              <span className="text-[#b08d57] text-xl group-hover:scale-110 transition-transform"><i className="fa-solid fa-user"></i></span>
              <div className="text-left">
                <label className="block text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-gray-400 font-black mb-0.5">Guest Count</label>
                <div className="text-xs md:text-sm font-black text-gray-800 flex items-center gap-2 whitespace-nowrap">
                  Guests <i className="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="p-1 w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-[#b08d57] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-[40px] font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-lg hover:bg-[#9a7b4c] hover:scale-[1.02] active:scale-95 min-w-[180px]">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>Search Venues</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left Column: Venue Grid */}
            <div className="flex-grow lg:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-2">Popular Venues in Lahore</h2>
                  <p className="text-gray-500 font-medium">Discover and book from our handpicked venues</p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 border-r pr-4 border-gray-100">
                    <button className="p-2 bg-gray-100 text-gray-900 rounded-lg"><i className="fa-solid fa-grid-2"></i></button>
                    <button className="p-2 text-gray-400 hover:text-gray-900"><i className="fa-solid fa-list"></i></button>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                    <span>Sort by:</span>
                    <select className="bg-transparent border-0 focus:ring-0 text-gray-900 font-black cursor-pointer">
                      <option>Popularity</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid of Venue Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { name: "Royal Swiss Lahore", loc: "DHA, Lahore", price: "350,000", guests: "500 - 1000", type: "Indoor", rating: "4.8", reviews: "120", tag: "Popular", img: "/hall1.png" },
                  { name: "Emporium Mall Marquee", loc: "Johar Town, Lahore", price: "280,000", guests: "300 - 800", type: "Indoor", rating: "4.7", reviews: "98", tag: "Best Seller", img: "/hall2.png" },
                  { name: "PC Hotel Lahore", loc: "Gulberg, Lahore", price: "450,000", guests: "200 - 600", type: "Indoor", rating: "4.6", reviews: "87", tag: "Luxury", img: "/hall3.png" },
                  { name: "Zainab Farmhouse", loc: "Bedian Road, Lahore", price: "200,000", guests: "150 - 500", type: "Outdoor", rating: "4.9", reviews: "75", tag: "Farmhouse", img: "/hall4.png" },
                  { name: "Dream Marquee", loc: "Lake City, Lahore", price: "260,000", guests: "300 - 1000", type: "Indoor", rating: "4.6", reviews: "64", tag: "Marquee", img: "/img18.png" },
                  { name: "Lahore Palace", loc: "Model Town, Lahore", price: "320,000", guests: "200 - 700", type: "Indoor", rating: "4.5", reviews: "58", tag: "Popular", img: "/img21.png" },
                  { name: "Grand Hall DHA", loc: "DHA Phase 5, Lahore", price: "180,000", guests: "100 - 400", type: "Indoor", rating: "4.7", reviews: "42", tag: "Best Seller", img: "/homeimg.png" },
                  { name: "The Nishat Banquet", loc: "Shadman, Lahore", price: "240,000", guests: "150 - 500", type: "Indoor", rating: "4.6", reviews: "42", tag: "Luxury", img: "/img15.png" },
                  { name: "Green Acres Farmhouse", loc: "Raiwind Road, Lahore", price: "160,000", guests: "100 - 300", type: "Outdoor", rating: "4.8", reviews: "36", tag: "Farmhouse", img: "/img17.png" },
                ].map((venue, i) => (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#d4af37]/20 transition-all duration-500">
                    <div className="relative h-40 overflow-hidden"> 
                      <img src={venue.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={venue.name} />
                      <div className="absolute top-3 left-3 bg-[#d4af37] text-black text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-widest shadow-xl">
                        {venue.tag}
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-red-500 cursor-pointer transition-all">
                        <i className="fa-regular fa-heart text-[10px]"></i>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-3">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold text-base text-gray-900 group-hover:text-[#d4af37] transition-colors leading-tight">{venue.name}</h3>
                          <div className="flex items-center gap-1 text-[#d4af37] text-[10px] font-black shrink-0">
                            <i className="fa-solid fa-star"></i> <span>{venue.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-[10px] font-semibold tracking-wide flex items-center gap-1"><i className="fa-solid fa-location-dot text-[#d4af37] text-[9px]"></i> {venue.loc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 py-3 border-y border-gray-50">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 text-[9px]"><i className="fa-solid fa-users"></i></div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-700">{venue.guests}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center text-gray-400 text-[9px]"><i className="fa-solid fa-building"></i></div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-700">{venue.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-1">
                        <div className="flex flex-col">
                          <span className="text-[7px] uppercase font-black text-gray-400 tracking-wider">Starting from</span>
                          <span className="text-sm font-black text-[#d4af37]">Rs. {venue.price}</span>
                        </div>
                        <button className="px-3 py-1.5 bg-transparent border border-[#d4af37]/30 text-[#d4af37] text-[8px] font-black uppercase tracking-widest rounded-lg hover:bg-[#d4af37] hover:text-black transition-all">Details</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Filter Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Filter Card */}
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-xl shadow-gray-200/40">
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Filter Venues</h3>

                  {/* Price Range */}
                  <div className="mb-8">
                    <label className="block text-xs font-black uppercase tracking-[0.15em] text-gray-900 mb-6">Price Range</label>
                    <div className="px-2">
                      <div className="h-1.5 w-full bg-gray-100 rounded-full relative mb-4">
                        <div className="absolute h-full bg-[#d4af37] left-10 right-20 rounded-full"></div>
                        <div className="absolute w-5 h-5 bg-white border-4 border-[#d4af37] rounded-full top-1/2 -translate-y-1/2 left-10 shadow-lg cursor-pointer"></div>
                        <div className="absolute w-5 h-5 bg-white border-4 border-[#d4af37] rounded-full top-1/2 -translate-y-1/2 right-20 shadow-lg cursor-pointer"></div>
                      </div>
                      <div className="flex justify-between text-[11px] font-bold text-gray-400">
                        <span>Rs. 50,000</span>
                        <span>Rs. 500,000+</span>
                      </div>
                    </div>
                  </div>

                  {/* Venue Type */}
                  <div className="mb-8">
                    <label className="block text-xs font-black uppercase tracking-[0.15em] text-gray-900 mb-4">Venue Type</label>
                    <div className="space-y-3">
                      {['All Types', 'Marriage Halls', 'Marquees', 'Farmhouses', 'Banquet Halls'].map((type, i) => (
                        <label key={i} className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" defaultChecked={i === 0} />
                          <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Event Type */}
                  <div className="mb-8">
                    <label className="block text-xs font-black uppercase tracking-[0.15em] text-gray-900 mb-4">Event Type</label>
                    <div className="space-y-3">
                      {['All Events', 'Wedding', 'Engagement', 'Birthday Party', 'Corporate Event', 'Other Functions'].map((type, i) => (
                        <label key={i} className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" defaultChecked={i === 0} />
                          <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div className="mb-8">
                    <label className="block text-xs font-black uppercase tracking-[0.15em] text-gray-900 mb-4">Guest Count</label>
                    <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-[#d4af37] focus:border-0 outline-none">
                      <option>Select Guests</option>
                      <option>100 - 300</option>
                      <option>300 - 500</option>
                      <option>500 - 1000</option>
                      <option>1000+</option>
                    </select>
                  </div>

                  {/* Amenities */}
                  <div className="mb-10">
                    <label className="block text-xs font-black uppercase tracking-[0.15em] text-gray-900 mb-4">Amenities</label>
                    <div className="space-y-3">
                      {['Parking', 'Air Conditioned', 'Bridal Room', 'Catering Available', 'Outdoor Space'].map((item, i) => (
                        <label key={i} className="flex items-center gap-3 group cursor-pointer">
                          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]" />
                          <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                        </label>
                      ))}
                      <button className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest mt-2 flex items-center gap-2">Show More <i className="fa-solid fa-chevron-down"></i></button>
                    </div>
                  </div>

                  <button className="w-full bg-[#b08d57] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#b08d57]/20 hover:bg-[#9a7b4c] transition-all mb-4">Apply Filters</button>
                  <button className="w-full py-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-gray-900 transition-all flex items-center justify-center gap-2">
                    <i className="fa-solid fa-rotate-right text-[8px]"></i> Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With EventLahore Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6 tracking-tight">Why Book With EventLahore?</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
            {[
              { icon: 'fa-shield-halved', title: 'Verified Venues', desc: 'All venues are verified and trusted' },
              { icon: 'fa-hand-holding-dollar', title: 'Best Price Guarantee', desc: 'We ensure you get the best prices' },
              { icon: 'fa-briefcase-medical', title: 'Full Service Support', desc: 'We provide all services you need' },
              { icon: 'fa-calendar-check', title: 'Easy Booking', desc: 'Book your event in just a few clicks' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#fcf8e8] border border-[#d4af37]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-white text-xl shadow-lg">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                </div>
                <h3 className="text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[180px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
