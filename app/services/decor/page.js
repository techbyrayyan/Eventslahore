'use client';

export default function DecorationPage() {
  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">
      {/* Edge-to-Edge Premium Hero Section with Seamless Blended Background */}
      <section className="relative w-full bg-[#000] text-white overflow-hidden flex items-start border-b border-white/5">
        
        {/* Full-bleed Background Image with Elegant Gradient Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img48.png" 
            alt="Stunning Event Decoration" 
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Desktop Overlay: Solid black on the left, fading to completely transparent before reaching the right side */}
          <div 
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(to right, #000 0%, #000 40%, rgba(0, 0, 0, 0.75) 55%, rgba(0, 0, 0, 0) 75%)'
            }}
          ></div>
          {/* Mobile Overlay: Vertical fade to ensure legibility */}
          <div 
            className="absolute inset-0 block md:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.85) 70%, #000 100%)'
            }}
          ></div>
        </div>

        {/* Content Container (z-10 overlaying the background image) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:pl-16 lg:pl-24 pb-16 md:pb-20 text-center md:text-left">
          <div className="max-w-[580px] w-full mx-auto md:mx-0">
            
            {/* Top Text with lines */}
            <div className="flex items-center md:justify-start gap-4 mt-10">
              <div className="h-[1px] w-12 sm:w-16 bg-[#d4af37]"></div>
              <span className="text-[#d4af37] font-medium tracking-wide text-sm sm:text-base">We Decorate Dreams</span>
              <div className="h-[1px] w-12 sm:w-16 bg-[#d4af37]"></div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-playfair font-medium leading-[1.15] tracking-tight text-white mb-6">
              Stunning Decorations <br className="hidden sm:block" />
              for <span className="text-[#d4af37]">Unforgettable Events</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed font-medium">
              From elegant weddings to lively celebrations, <br className="hidden md:block" />
              our decoration services bring your vision to life <br className="hidden md:block" />
              with creativity, perfection, and style.
            </p>
            
            {/* Icons Grid */}
            <div className="grid grid-cols-4 mt-8 md:mt-12">
              
              {/* Icon 1: Creative Designs */}
              <div className="flex flex-col items-center md:items-start">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m14.31 8 5.74 9.94"/>
                  <path d="M9.69 8h11.48"/>
                  <path d="m7.38 12 5.74-9.94"/>
                  <path d="M9.69 16 3.95 6.06"/>
                  <path d="M14.31 16H2.83"/>
                  <path d="m16.62 12-5.74 9.94"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Creative<br/>Designs</span>
              </div>

              {/* Icon 2: Premium Flowers */}
              <div className="flex flex-col items-center md:items-start">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12"/>
                  <path d="M12 12a4 4 0 0 1 4-4c1.5 0 2.5 1 2.5 2.5S17.5 13 16 13h-4"/>
                  <path d="M12 12a4 4 0 0 0-4-4c-1.5 0-2.5 1-2.5 2.5S6.5 13 8 13h4"/>
                  <path d="M12 12a4 4 0 0 1-4 4c-1.5 0-2.5-1-2.5-2.5S6.5 11 8 11h4"/>
                  <path d="M12 12a4 4 0 0 0 4 4c1.5 0 2.5-1 2.5-2.5S17.5 11 16 11h-4"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Premium<br/>Flowers</span>
              </div>

              {/* Icon 3: Themed Setups */}
              <div className="flex flex-col items-center md:items-start">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/>
                  <path d="M9 18h6"/>
                  <path d="M10 22h4"/>
                  <path d="M12 14v4"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Themed<br/>Setups</span>
              </div>

              {/* Icon 4: Quality Assurance */}
              <div className="flex flex-col items-center md:items-start">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Quality<br/>Assurance</span>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Our Decoration Services Section */}
      <section className="py-20 bg-[#FAF8F5] text-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
              Our Decoration Services
            </h2>
            
            {/* Elegant Separator */}
            <div className="flex justify-center items-center my-4 w-full max-w-[200px] mx-auto opacity-70">
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2 h-2 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
            </div>
            
            <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
              We offer a complete range of decoration services to make your event look extraordinary.
            </p>
          </div>

          {/* Cards Grid - 6 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            
            {/* Card 1: Wedding Decoration */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="14" r="4"/>
                    <circle cx="16" cy="14" r="4"/>
                    <path d="M10.83 11.17a4 4 0 0 0 2.34 5.66"/>
                    <path d="M10.83 16.83a4 4 0 0 0 2.34-5.66"/>
                    <path d="M8 10l1-2 1 2"/>
                    <path d="M16 10l1-2 1 2"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Wedding<br />Decoration</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img49.png" alt="Wedding Decoration" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Elegant and royal wedding setups tailored to your dream day.
              </p>
            </div>

            {/* Card 2: Stage Decoration */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20h20"/>
                    <path d="M4 20v-6"/>
                    <path d="M20 20v-6"/>
                    <path d="M4 10c2-3 5-4 8-4s6 1 8 4"/>
                    <path d="M8 6V4"/>
                    <path d="M16 6V4"/>
                    <path d="M12 6v4"/>
                    <circle cx="12" cy="14" r="2"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Stage<br />Decoration</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img50.png" alt="Stage Decoration" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Beautifully designed stages that become the center of attraction.
              </p>
            </div>

            {/* Card 3: Mandap Decoration */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12"/>
                    <path d="M2 20h20"/>
                    <path d="M4 8h16"/>
                    <path d="M8 8v4"/>
                    <path d="M16 8v4"/>
                    <path d="M12 4v4"/>
                    <path d="M10 20v-4"/>
                    <path d="M14 20v-4"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Mandap<br />Decoration</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img51.png" alt="Mandap Decoration" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Traditional or modern mandaps with stunning floral & fabric work.
              </p>
            </div>

            {/* Card 4: Entrance Decoration */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 22h14"/>
                    <path d="M6 22V10a6 6 0 0 1 12 0v12"/>
                    <path d="M8 22V10a4 4 0 0 1 8 0v12"/>
                    <path d="M2 14h4"/>
                    <path d="M18 14h4"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Entrance<br />Decoration</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img52.png" alt="Entrance Decoration" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Grand and welcoming entrances that create the perfect first impression.
              </p>
            </div>

            {/* Card 5: Table & Chair Decor */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12h8"/>
                    <path d="M6 12v8"/>
                    <path d="M18 12v8"/>
                    <path d="M4 14h2"/>
                    <path d="M18 14h2"/>
                    <path d="M8 12v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <path d="M10 10V6"/>
                    <path d="M14 10V6"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Table &<br />Chair Decor</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img53.png" alt="Table and Chair Decor" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Designer table settings and chair decor to match your theme.
              </p>
            </div>

            {/* Card 6: Lighting & Ambience */}
            <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
              <div className="flex items-center gap-3 mb-4 w-full px-2">
                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v6"/>
                    <path d="M8 8v3"/>
                    <path d="M16 8v3"/>
                    <path d="M5 11h14"/>
                    <path d="M12 8h-4"/>
                    <path d="M12 8h4"/>
                    <circle cx="5" cy="13" r="2"/>
                    <circle cx="12" cy="13" r="2"/>
                    <circle cx="19" cy="13" r="2"/>
                    <path d="M12 15v3"/>
                    <path d="M8 11L6 8"/>
                    <path d="M16 11l2-3"/>
                  </svg>
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Lighting &<br />Ambience</h3>
              </div>
              <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0">
                <img src="/img54.png" alt="Lighting and Ambience" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                Perfect lighting and ambience to enhance the mood of your event.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Themes & Styles We Create Section */}
      <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
              Themes & Styles We Create
            </h2>
            
            {/* Elegant Separator */}
            <div className="flex justify-center items-center my-4 w-full max-w-[200px] mx-auto opacity-80">
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2 h-2 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
            </div>
          </div>

          {/* Grid - 6 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
            
            {/* Card 1: Royal */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img55.png" alt="Royal Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

            {/* Card 2: Classic */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img56.png" alt="Classic Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

            {/* Card 3: Modern */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img57.png" alt="Modern Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

            {/* Card 4: Floral */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img58.png" alt="Floral Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

            {/* Card 5: Rustic */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img59.png" alt="Rustic Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

            {/* Card 6: Contemporary */}
            <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
              <img src="/img60.png" alt="Contemporary Theme" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose EventLahore Decoration Section */}
      <section className="py-20 bg-[#FAF8F5] text-black border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
              Why Choose <span className="text-[#d4af37]">EventLahore</span> Decoration?
            </h2>
            
            {/* Elegant Separator */}
            <div className="flex justify-center items-center my-4 w-full max-w-[200px] mx-auto opacity-70">
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2 h-2 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
            </div>
          </div>

          {/* 6 Grid columns with vertical borders on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            
            {/* Item 1: Creative & Unique Designs */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Creative & Unique Designs</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">We bring fresh ideas and creativity to make your event one of a kind.</p>
            </div>

            {/* Item 2: High Quality Materials */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">High Quality Materials</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">We use premium quality flowers, fabrics and decor items.</p>
            </div>

            {/* Item 3: Experienced Team */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Experienced Team</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Our skilled team ensures flawless execution and attention to detail.</p>
            </div>

            {/* Item 4: On-Time Setup */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <circle cx="16" cy="16" r="4"/>
                <line x1="16" y1="14" x2="16" y2="16"/>
                <line x1="16" y1="16" x2="17.5" y2="17.5"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">On-Time Setup</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">We value your time and ensure everything is ready on schedule.</p>
            </div>

            {/* Item 5: Customized Packages */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Customized Packages</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Flexible decoration packages that fit your needs and budget.</p>
            </div>

            {/* Item 6: 100% Satisfaction */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-none">
              <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
              </svg>
              <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">100% Satisfaction</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Your satisfaction is our priority. We make your moments unforgettable.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Decoration Process Section */}
      <section className="py-20 bg-[#171716] text-white border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
              Our Decoration Process
            </h2>
            
            {/* Elegant Separator */}
            <div className="flex justify-center items-center my-4 w-full max-w-[200px] mx-auto opacity-80">
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2 h-2 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Desktop Horizontal Dashed Line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] border-t border-dashed border-[#d4af37]/50"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4">
              
              {/* Step 1 */}
              <div className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                  {/* Icon */}
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  {/* Badge */}
                  <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">1</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Consultation</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">We understand your vision, theme and preferences.</p>
              </div>

              {/* Step 2 */}
              <div className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                  <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">2</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Planning & Design</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">Our team creates a custom design for your event.</p>
              </div>

              {/* Step 3 */}
              <div className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 11h8"/>
                    <path d="M8 15h8"/>
                    <path d="M16 2v4"/>
                    <path d="M8 2v4"/>
                    <rect width="16" height="18" x="4" y="4" rx="2"/>
                  </svg>
                  <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">3</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Selection</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">You review and confirm the design and details.</p>
              </div>

              {/* Step 4 */}
              <div className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">4</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Setup & Execution</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">We setup everything beautifully and on time.</p>
              </div>

              {/* Step 5 */}
              <div className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">5</div>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Event Perfection</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">Enjoy your event while we take care of the rest.</p>
              </div>

            </div>
          </div>
          
          {/* CTA Banner */}
          <div className="mt-20 border border-[#d4af37]/30 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/img49.png')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
            
            <div className="relative z-10 px-6 sm:px-12 py-10 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="max-w-xs">
                  <h3 className="text-2xl sm:text-3xl font-playfair font-semibold text-white leading-tight">
                    Let's Decorate Your <br className="hidden sm:block" />
                    <span className="text-[#d4af37]">Next Big Moment!</span>
                  </h3>
                </div>
                <div className="hidden md:block w-[1px] h-20 bg-white/20 shrink-0"></div>
                <p className="text-gray-300 text-sm max-w-[300px] leading-relaxed">
                  From intimate gatherings to grand celebrations, we turn your ideas into breathtaking decorated realities.
                </p>
              </div>
              
              <div className="flex flex-col items-center lg:items-end gap-4 shrink-0 w-full lg:w-auto">
                <button className="w-full lg:w-auto bg-[#c59d3e] hover:bg-[#b08d38] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Get a Free Quote</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
                <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-gray-300 mt-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+92 300 1234567</span>
                  </div>
                  <div className="w-[1px] h-4 bg-gray-600 hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                    <span>www.eventlahore.com</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
