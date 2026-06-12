import React from 'react';

const HowItWorksPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img16.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Main Title */}
          <h1 className="text-6xl font-serif mb-8 text-white uppercase tracking-[0.05em] leading-none">
            How It <span className="text-[#d4af37]">Works</span>
          </h1>

          {/* Subtitle */}
          <h3 className="text-[#d4af37] text-2xl md:text-3xl font-serif mb-8 tracking-wide italic font-medium">
            Book Any Event, Anywhere in Lahore
          </h3>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            EventLahore makes it simple to plan your perfect event. <br className="hidden md:block" />
            Choose your venue, select services, and leave the rest to us.
          </p>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-6  text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-[#d4af37] tracking-[0.2em] font-serif text-2xl md:text-3xl uppercase mb-6">
              Simple Steps to Your Perfect Event
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1.5px] w-16 bg-[#d4af37]"></div>
              <div className="text-[#d4af37] text-xl">❧</div>
              <div className="h-[1.5px] w-16 bg-[#d4af37]"></div>
            </div>
          </div>

          {/* Steps Container */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12 relative mb-20">
            {[
              { num: '01', icon: 'fa-user', title: 'Create Account', desc: 'Sign up / Login to your EventLahore account.' },
              { num: '02', icon: 'fa-building', title: 'Choose Venue', desc: 'Browse and select from marriage halls, marquees, or farmhouses.' },
              { num: '03', icon: 'fa-clipboard-list', title: 'Select Services', desc: 'Pick the services you need - decoration, catering, photography & more.' },
              { num: '04', icon: 'fa-calendar-days', title: 'Pick Date & Time', desc: 'Choose your event date, time, and customize your package.' },
              { num: '05', icon: 'fa-credit-card', title: 'Confirm Booking', desc: 'Make secure payment and get your booking confirmed.' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 min-w-[200px] relative group">
                {/* Connecting Line (Desktop) */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-[40px] left-[65%] w-[70%] h-[2px] border-t-2 border-dotted border-[#d4af37]/40 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[#d4af37] text-[10px]">▶</div>
                  </div>
                )}
                
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full border border-[#d4af37] flex items-center justify-center mb-8 relative z-10 bg-black group-hover:bg-[#d4af37] transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <i className={`fa-solid ${step.icon} text-white text-3xl group-hover:text-black transition-colors duration-300`}></i>
                </div>

                {/* Step Number */}
                <div className="text-[#d4af37] text-2xl font-serif mb-4">{step.num}</div>
                
                {/* Title */}
                <h3 className="text-[#d4af37] text-sm md:text-base font-bold uppercase tracking-wider mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <button className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-3  rounded-lg font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500">
            Get Started Now
          </button>
        </div>
      </section>
      {/* Venues We Offer Section */}
      <section className="py-24 bg-[#f9f7f2]">
        <div className="w-full max-w-[1400px] mx-auto px-10 text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-[#d4af37] tracking-[0.2em] font-serif text-2xl md:text-3xl uppercase mb-6">
              Venues We Offer
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1.5px] w-16 bg-[#d4af37]"></div>
              <div className="text-[#d4af37] text-xl">❧</div>
              <div className="h-[1.5px] w-16 bg-[#d4af37]"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">
              From luxury halls to elegant marquees and beautiful farmhouses – <br />
              EventLahore has it all.
            </p>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Marriage Halls', 
                desc: 'Find the perfect hall for your dream event.', 
                img: '/img21.png' 
              },
              { 
                title: 'Marquees', 
                desc: 'Elegant marquees for large gatherings and celebrations.', 
                img: '/img18.png' 
              },
              { 
                title: 'Farmhouses', 
                desc: 'Spacious farmhouses for a private and premium experience.', 
                img: '/hall4.png' 
              },
            ].map((venue, index) => (
              <div key={index} className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                {/* Background Image */}
                <img 
                  src={venue.img} 
                  alt={venue.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Bottom Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-left flex justify-between items-end">
                  <div className="max-w-[70%]">
                    <h3 className="text-[#d4af37] text-lg font-bold uppercase tracking-wider mb-2">
                      {venue.title}
                    </h3>
                    <p className="text-white text-sm leading-relaxed opacity-90">
                      {venue.desc}
                    </p>
                  </div>
                  
                  {/* Arrow Button */}
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-black text-xl transition-transform duration-300 group-hover:translate-x-2">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* All Services Section */}
      <section className="py-24 bg-black">
        <div className="w-full max-w-[1400px] mx-auto px-6 text-center">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-[#d4af37] tracking-[0.2em] font-serif text-2xl md:text-3xl uppercase mb-4">
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
                  <h3 className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-2">
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
      {/* Final CTA Section */}
      <section className="relative h-[450px] flex items-center overflow-hidden bg-black mt-24">
        {/* Background Image on the left */}
        <div className="absolute inset-y-0 left-0 w-full md:w-1/2 z-0">
          <img 
            src="/img22.png" 
            alt="Event Atmosphere" 
            className="w-full h-full object-cover object-left"
          />
          {/* Gradient to blend image with black background on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-black"></div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-14 md:px-20 relative z-10">
          <div className="max-w-2xl ml-auto text-center">
            {/* Heading */}
            <h2 className="text-[#d4af37] text-2xl md:text-3xl font-serif tracking-[0.2em] mb-4 uppercase">
              Ready to Plan Your Event?
            </h2>
            
            {/* Ornament */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              <div className="text-[#d4af37] text-xl">❧</div>
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
            </div>

            <p className="text-white text-sm md:text-base font-light mb-8 tracking-wide">
              Book your dream venue and services in just a few clicks.
            </p>

            {/* Book Now Button */}
            <button className="bg-[#f3cc8a] text-black px-10 py-3 rounded-md font-bold text-sm uppercase tracking-widest flex items-center gap-3 mx-auto transition-all duration-300 hover:bg-[#d4af37] hover:scale-105 mb-12">
              Book Now
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            {/* Bottom Value Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-8">
              {[
                { icon: 'fa-building-circle-check', text: 'Best Venues in Lahore' },
                { icon: 'fa-briefcase', text: 'All Services in One Place' },
                { icon: 'fa-shield-halved', text: 'Secure Booking & Payment' },
                { icon: 'fa-headset', text: '24/7 Customer Support' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="text-[#d4af37] text-xl">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span className="text-white text-[10px] md:text-xs font-light tracking-wide max-w-[100px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
