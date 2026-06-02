'use client';
import Link from 'next/link';

export default function BirthdayVanuePage() {
  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/img31.png")',
            backgroundColor: '#050505'
          }}
        >
          {/* Multi-layered overlays for that premium look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 tracking-tight leading-[1.1] text-[#d4af37]">
              Birthday Venues
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-medium">
              Make every birthday unforgettable!<br />
              Explore the best birthday venues in Lahore<br />
              perfect for your special celebrations.
            </p>

            {/* Features Row - matching the image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
              {/* Feature 1 */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-2xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">All-in-One Service</h3>
                  <p className="text-[11px] font-bold text-gray-400 tracking-wide">Venue, Catering, Décor & More</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-2xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Best Price Guarantee</h3>
                  <p className="text-[11px] font-bold text-gray-400 tracking-wide">Get the best deals only at EventLahore</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-2xl group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <i className="fa-solid fa-calendar-check"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Hassle Free Booking</h3>
                  <p className="text-[11px] font-bold text-gray-400 tracking-wide">Book online in few simple steps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Top Birthday Venues Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">Our Top Birthday Venues</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
              <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 font-medium">
              Discover the most exquisite venues for your birthday celebration. From luxury halls to charming outdoor spaces.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column: Filter Sidebar */}
            <div className="lg:w-[22%]">
              <div className="sticky top-24 bg-[#111] rounded-[24px] p-6 border border-white/5 shadow-2xl">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-3">
                    <i className="fa-solid fa-sliders text-[#d4af37] text-sm"></i> Filter
                  </h3>
                  <button className="text-[10px] font-black text-gray-500 uppercase tracking-widest hover:text-[#d4af37] transition-colors">Reset</button>
                </div>

                {/* Venue Type */}
                <div className="mb-6">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-4">Venue Type</label>
                  <div className="space-y-3">
                    {['Theme Halls', 'Outdoor Fun', 'Fun Zones', 'Kids Clubs'].map((type, i) => (
                      <label key={i} className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer appearance-none w-4 h-4 rounded border border-white/10 checked:bg-[#d4af37] checked:border-[#d4af37] transition-all cursor-pointer" defaultChecked={i === 0} />
                          <i className="fa-solid fa-check absolute text-[8px] text-black opacity-0 peer-checked:opacity-100 left-1/2 -translate-x-1/2 transition-opacity pointer-events-none"></i>
                        </div>
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Capacity */}
                <div className="mb-6">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-4">Capacity</label>
                  <div className="px-1">
                    <div className="h-1 w-full bg-white/5 rounded-full relative mb-3">
                      <div className="absolute h-full bg-[#d4af37] left-0 right-1/4 rounded-full"></div>
                      <div className="absolute w-4 h-4 bg-white border-2 border-[#d4af37] rounded-full top-1/2 -translate-y-1/2 left-[75%] shadow-xl cursor-pointer"></div>
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-gray-500">
                      <span>50</span>
                      <span>1000+</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <label className="block text-[9px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-4">Price</label>
                  <div className="space-y-2.5">
                    {['Under 50k', '50k - 100k', '100k - 200k'].map((range, i) => (
                      <label key={i} className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative flex items-center">
                          <input type="radio" name="price" className="peer appearance-none w-4 h-4 rounded-full border border-white/10 checked:border-[#d4af37] transition-all cursor-pointer" />
                          <div className="absolute w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 peer-checked:opacity-100 left-1/2 -translate-x-1/2 transition-opacity pointer-events-none"></div>
                        </div>
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">PKR {range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-[#d4af37] text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#c4a132] transition-all">Apply</button>
              </div>
            </div>

            {/* Right Column: Venue Grid */}
            <div className="lg:w-[78%] flex flex-col">
              {/* Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 bg-[#111] p-4 rounded-2xl border border-white/5">
                <div className="text-gray-400 font-bold text-xs">
                  Showing <span className="text-white">1-8</span> of <span className="text-white">75</span> Venues
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Sort:</span>
                  <select className="bg-black border border-white/10 text-white text-[10px] font-bold rounded-lg px-3 py-1.5 outline-none cursor-pointer">
                    <option>Popularity</option>
                    <option>Price</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { name: "Kids Wonderland", loc: "DHA, Lahore", price: "45,000", guests: "50-150", type: "Fun Zone", img: "/img32.png" },
                  { name: "Birthday Moments", loc: "Gulberg, Lahore", price: "80,000", guests: "100-250", type: "Boutique Hall", img: "/img33.png" },
                  { name: "Magic Moments", loc: "Johar Town, Lahore", price: "65,000", guests: "80-200", type: "Party Arena", img: "/img34.png" },
                  { name: "Party Garden", loc: "Bedian Road, Lahore", price: "55,000", guests: "100-300", type: "Outdoor Fun", img: "/img35.png" },
                  { name: "Kids Castle", loc: "Model Town, Lahore", price: "95,000", guests: "150-350", type: "Theme Hall", img: "/img36.png" },
                  { name: "Balloon Bay", loc: "Bahria Town, Lahore", price: "85,000", guests: "100-250", type: "Celebration Suite", img: "/img37.png" },
                  { name: "Candyland Arena", loc: "Canal Bank, Lahore", price: "75,000", guests: "80-180", type: "Themed Space", img: "/img38.png" },
                  { name: "Joyful Junction", loc: "Defence Road, Lahore", price: "60,000", guests: "50-150", type: "Kids Club", img: "/img39.png" },
                ].map((venue, i) => (
                  <div key={i} className="group bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col h-full">
                    <div className="h-44 bg-gray-900 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                      <img src={venue.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={venue.name} />
                      <div className="absolute top-3 left-3 z-20">
                        <span className="bg-[#d4af37] text-black text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-lg">Featured</span>
                      </div>
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#d4af37] transition-colors">{venue.name}</h3>
                      <p className="text-gray-500 text-xs mb-3 flex items-center gap-2">
                        <i className="fa-solid fa-location-dot text-[#d4af37] text-[10px]"></i> {venue.loc}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 mb-4">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-black text-gray-500 tracking-wider mb-0.5">Capacity</span>
                          <span className="text-[11px] font-bold text-gray-300 flex items-center gap-1"><i className="fa-solid fa-users text-[9px]"></i> {venue.guests}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-black text-gray-500 tracking-wider mb-0.5">Type</span>
                          <span className="text-[11px] font-bold text-gray-300 flex items-center gap-1"><i className="fa-solid fa-building text-[9px]"></i> {venue.type}</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto flex justify-between items-center pt-1">
                        <div className="flex flex-col">
                          <span className="text-[7px] uppercase font-black text-gray-500 tracking-widest leading-none">Starting from</span>
                          <span className="text-base font-black text-[#d4af37]">Rs. {venue.price}</span>
                        </div>
                        <button className="px-3 py-2 bg-transparent border border-[#d4af37]/40 text-[#d4af37] text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-[#d4af37] hover:text-black transition-all">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features Section - matching the image */}
      <section className="py-12 bg-black ">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="bg-black rounded-[24px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-gray-100">
              {/* Feature 1 */}
              <div className="flex items-center gap-5 lg:px-6 py-6 lg:py-0 first:pt-0 lg:first:pt-0 last:pb-0 lg:last:pb-0">
                <div className="w-14 h-14 rounded-full bg-[#fcf8e8] flex items-center justify-center text-[#d4af37] text-2xl flex-shrink-0">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">Unmatched Variety</h3>
                  <p className="text-[11px] font-medium text-gray-500 leading-relaxed">Choose from Lahore's best venues all in one place.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-5 lg:px-6 py-6 lg:py-0">
                <div className="w-14 h-14 rounded-full bg-[#fcf8e8] flex items-center justify-center text-[#d4af37] text-2xl flex-shrink-0">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">Everything You Need</h3>
                  <p className="text-[11px] font-medium text-gray-500 leading-relaxed">Catering, Décor, Entertainment & more - we've got it all.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-5 lg:px-6 py-6 lg:py-0">
                <div className="w-14 h-14 rounded-full bg-[#fcf8e8] flex items-center justify-center text-[#d4af37] text-2xl flex-shrink-0">
                  <i className="fa-solid fa-users-viewfinder"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">Trusted by Thousands</h3>
                  <p className="text-[11px] font-medium text-gray-500 leading-relaxed">Join countless happy customers who celebrated with us.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-5 lg:px-6 py-6 lg:py-0">
                <div className="w-14 h-14 rounded-full bg-[#fcf8e8] flex items-center justify-center text-[#d4af37] text-2xl flex-shrink-0">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h3 className="text-sm font-black text-white mb-1 uppercase tracking-tight">24/7 Support</h3>
                  <p className="text-[11px] font-medium text-gray-500 leading-relaxed">Our team is always here to help you plan the perfect event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
