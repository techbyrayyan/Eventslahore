import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-stretch bg-black overflow-hidden">
        {/* Right Side Image with Fade-to-Black on the Left */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div 
            className="w-full md:w-3/4 h-full relative"
            style={{
              backgroundImage: 'url("/img15.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
            }}
          >
            {/* Smooth gradient fade from black (left) to transparent (right) */}
            <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex items-center">
          <div className="w-full pl-14 md:pl-20">
            <div className="max-w-xl">
              {/* "ABOUT US" Label with Gold Line */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#d4af37] tracking-[0.3em] font-bold text-xs md:text-sm uppercase">About Us</span>
                <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              </div>

              {/* Main Title - All Caps to match image */}
              <h1 className="text-5xl mb-10 leading-[1.15] text-white uppercase tracking-wider ">
                We Make Every <br />
                Moment <br />
                <span className="text-[#d4af37]">Extra ordinary</span>
              </h1>

              {/* Description Text */}
              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-12 max-w-md font-light">
                EventLahore is Pakistan's most trusted platform to book 
                marriage halls, marquees, farmhouses & all event services 
                - all in one place, with zero direct contact with hall owners.
              </p>

              {/* CTA Button */}
              <button className="group flex items-center gap-4 border border-[#d4af37] px-8 py-3 rounded-sm transition-all duration-300 hover:bg-[#d4af37]/10">
                <span className="text-[#d4af37] font-semibold tracking-[0.2em] text-xs uppercase">Our Story</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-[#d4af37] transform transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="w-full max-w-[1400px] mx-auto px-14 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Side: Featured Image with Gold Border */}
            <div className="w-full lg:w-[45%] relative group">
              <div className="absolute -inset-1.5 border border-[#d4af37]/60 rounded-[2rem] z-0"></div>
              <div className="relative z-10 overflow-hidden rounded-[1.8rem]">
                <img 
                  src="/img17.png" 
                  alt="Premium Event Setup" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Side: Content and Service Grid */}
            <div className="w-full lg:w-[55%]">
              {/* Heading Section */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-6 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] tracking-[0.3em] font-bold text-xs uppercase">Who We Are</span>
                <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white leading-tight">
                Your One-Stop Destination <br />
                for All Events in Lahore
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 font-light">
                At EventLahore, we connect you with every small & large venue 
                in Lahore — while providing complete event services under 
                one trusted platform. From planning to perfection, we handle 
                everything so you can relax and enjoy your special moments.
              </p>

              {/* Service Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: 'fa-calendar-check', title: 'All Halls &', subtitle: 'Marquees' },
                  { icon: 'fa-house', title: 'Farmhouses', subtitle: '& Lawns' },
                  { icon: 'fa-utensils', title: 'Catering', subtitle: 'Services' },
                  { icon: 'fa-wand-magic-sparkles', title: 'Decoration', subtitle: '& Themes' },
                  { icon: 'fa-music', title: 'DJ, Lighting', subtitle: '& Audio' },
                  { icon: 'fa-clipboard-list', title: 'End-to-End', subtitle: 'Management' },
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-[#0f0f0f] border border-[#ad7a44] p-6 rounded-2xl flex flex-col items-center text-center group hover:border-[#d4af37]/20 transition-all duration-300"
                  >
                    <div className="mb-4 text-[#d4af37] text-3xl transition-transform duration-300 group-hover:scale-110">
                      <i className={`fa-solid ${service.icon}`}></i>
                    </div>
                    <h4 className="text-white text-sm font-semibold tracking-wide leading-tight">
                      {service.title} <br /> 
                      <span className="opacity-80 font-medium">{service.subtitle}</span>
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#d4af37]/10 to-transparent blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[1400px] mx-auto px-14 md:px-20 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <span className="text-[#d4af37] tracking-[0.3em] font-bold text-xs uppercase">Why Choose EventLahore?</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Trusted by Thousands, Chosen for Excellence
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Stats Box */}
            <div className="flex-grow bg-[#0c0c0c] border border-white/5 rounded-3xl p-10 flex flex-wrap md:flex-nowrap justify-around items-center gap-8">
              {[
                { icon: 'fa-building', value: '500+', label: 'Venues Listed' },
                { icon: 'fa-gears', value: '50+', label: 'Services Offered' },
                { icon: 'fa-users', value: '10,000+', label: 'Happy Customers' },
                { icon: 'fa-shield-halved', value: '100%', label: 'Secure Booking' },
              ].map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center px-4 flex-1">
                    <div className="text-[#d4af37] text-4xl mb-6">
                      <i className={`fa-solid ${stat.icon}`}></i>
                    </div>
                    <div className="text-white text-4xl md:text-5xl font-bold mb-2 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block h-24 w-[1px] bg-white/10"></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Our Promise Box */}
            <div className="w-full xl:w-[400px] bg-[#0c0c0c] border border-[#ad7a44]/30 rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#d4af37] text-xl">✨</span>
                <h3 className="text-[#d4af37] text-2xl font-serif">Our Promise</h3>
              </div>

              <ul className="space-y-5">
                {[
                  'No direct contact with hall owners',
                  'Book everything through EventLahore',
                  'Transparent pricing & packages',
                  '24/7 customer support',
                  'Customizable services as you need'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 text-[#d4af37] bg-[#d4af37]/10 w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-colors group-hover:bg-[#d4af37] group-hover:text-black">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <span className="text-gray-300 text-sm font-light leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Wavy background decoration */}
        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[150%] bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] rotate-12 opacity-10"></div>
          <svg className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 text-[#d4af37]/10" viewBox="0 0 100 100">
            <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M0,60 Q25,35 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          </svg>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-14 md:px-20 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <span className="text-[#d4af37] tracking-[0.3em] font-bold text-xs uppercase">How It Works</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Steps Section */}
            <div className="flex-grow w-full">
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 relative">
                {/* Connecting Dotted Line (Desktop) */}
                <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] border-t-2 border-dotted border-[#d4af37]/30 hidden md:block"></div>

                {[
                  { num: '01', icon: 'fa-magnifying-glass', title: 'Search Venue', desc: 'Browse halls, marquees & farmhouses' },
                  { num: '02', icon: 'fa-calendar-days', title: 'Select Date', desc: 'Choose your date & check availability' },
                  { num: '03', icon: 'fa-clipboard-list', title: 'Customize Services', desc: 'Add catering, decor, DJ & more' },
                  { num: '04', icon: 'fa-circle-check', title: 'Confirm & Relax', desc: 'We handle everything — you enjoy!' },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center relative z-10 flex-1 min-w-[150px]">
                    {/* Icon Circle */}
                    <div className="w-20 h-20 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#0a0a0a] mb-6 group hover:bg-[#d4af37] transition-all duration-500">
                      <i className={`fa-solid ${step.icon} text-[#d4af37] text-2xl group-hover:text-black transition-colors duration-300`}></i>
                    </div>
                    {/* Step Number */}
                    <div className="text-[#d4af37] text-xl font-serif mb-2 tracking-widest">{step.num}</div>
                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold mb-3 tracking-wide">{step.title}</h3>
                    {/* Description */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[180px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Section */}
            <div className="w-full lg:w-[350px] shrink-0">
              <div className="relative">
                {/* Subtle glow behind phone */}
                <div className="absolute inset-0 bg-[#d4af37]/10 blur-[100px] rounded-full"></div>
                <img 
                  src="/img20.png" 
                  alt="EventLahore App" 
                  className="w-full h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden bg-black">
        {/* Background Image on the left */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] z-0">
          <img 
            src="/img19.png" 
            alt="Event Atmosphere" 
            className="w-full h-full object-cover object-left"
          />
          {/* Strong gradient to transition from image (left) to solid black (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-14 md:px-20 relative z-10">
          <div className="max-w-xl ml-auto">
            {/* Top Ornate Icon */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
              <div className="text-[#d4af37] text-3xl">
                <i className="fa-solid fa-crown"></i>
              </div>
              <div className="h-[1px] w-12 bg-[#d4af37]"></div>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 uppercase tracking-wide leading-tight">
              Ready to Plan Your <br />
              <span className="text-[#d4af37]">Perfect Event?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Join thousands of happy customers who trust EventLahore 
              for their special moments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6">
              <button className="flex items-center gap-3 bg-[#d4af37] text-black px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:bg-[#c5a059]">
                <i className="fa-solid fa-calendar-check"></i>
                Book Your Event Now
              </button>
              <button className="flex items-center gap-3 border border-[#d4af37] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#d4af37]/10">
                <i className="fa-solid fa-comments"></i>
                Chat With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
