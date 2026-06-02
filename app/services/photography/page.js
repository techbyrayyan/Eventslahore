'use client';

export default function PhotographyPage() {
    return (
        <div className="bg-[#000] text-white min-h-screen font-sans">
            {/* Edge-to-Edge Premium Hero Section with Seamless Blended Background */}
            <section className="relative w-full bg-[#000] text-white overflow-hidden flex items-start border-b border-white/5">

                {/* Full-bleed Background Image with Elegant Gradient Fade */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img61.png"
                        alt="Professional Photography"
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
                            <span className="text-[#d4af37] font-medium tracking-wide text-sm sm:text-base">We Capture Memories</span>
                            <div className="h-[1px] w-12 sm:w-16 bg-[#d4af37]"></div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-playfair font-medium leading-[1.15] tracking-tight text-white mb-6">
                            Professional Photography <br className="hidden sm:block" />
                            for <span className="text-[#d4af37]">Every Occasion</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed font-medium">
                            Our professional photography services ensure every <br className="hidden md:block" />
                            beautiful moment is captured with creativity, <br className="hidden md:block" />
                            precision, and perfection.
                        </p>

                        {/* Icons Grid */}
                        <div className="grid grid-cols-4 mt-8 md:mt-12">

                            {/* Icon 1: High Quality Equipment */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                    <circle cx="12" cy="13" r="3" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">High Quality<br />Equipment</span>
                            </div>

                            {/* Icon 2: Experienced Photographers */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M19 8l-1.5 3L15 12l2.5 1L19 16l1.5-3L23 12l-2.5-1z" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Experienced<br />Photographers</span>
                            </div>

                            {/* Icon 3: Creative Storytelling */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                                    <line x1="7" y1="2" x2="7" y2="22" />
                                    <line x1="17" y1="2" x2="17" y2="22" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <line x1="2" y1="7" x2="7" y2="7" />
                                    <line x1="2" y1="17" x2="7" y2="17" />
                                    <line x1="17" y1="17" x2="22" y2="17" />
                                    <line x1="17" y1="7" x2="22" y2="7" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Creative<br />Storytelling</span>
                            </div>

                            {/* Icon 4: Timeless Memories */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Timeless<br />Memories</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Our Photography Services Section */}
            <section className="py-20 bg-[#FAF8F5] text-black">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
                            Our Photography Services
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
                            We offer a complete range of photography and videography services to capture your moments perfectly.
                        </p>
                    </div>

                    {/* Cards Grid - 6 columns on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

                        {/* Card 1: Wedding Photography */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="8" cy="14" r="4" />
                                        <circle cx="16" cy="14" r="4" />
                                        <path d="M10.83 11.17a4 4 0 0 0 2.34 5.66" />
                                        <path d="M10.83 16.83a4 4 0 0 0 2.34-5.66" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Wedding<br />Photography</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img62.png" alt="Wedding Photography" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Beautiful, candid, and traditional coverage of your special day.
                            </p>
                        </div>

                        {/* Card 2: Cinematic Video */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="23 7 16 12 23 17 23 7" />
                                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Cinematic<br />Videography</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img57.png" alt="Cinematic Videography" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Movie-like highlight reels and full event documentary films.
                            </p>
                        </div>

                        {/* Card 3: Pre-Wedding Shoots */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 20V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12" />
                                        <path d="M2 20h20" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Pre-Wedding<br />Shoots</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img63.png" alt="Pre-Wedding Shoots" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Romantic outdoor and indoor couple photography sessions.
                            </p>
                        </div>

                        {/* Card 4: Corporate Events */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Corporate<br />Events</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img64.png" alt="Corporate Events" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Professional coverage for galas, seminars, and company parties.
                            </p>
                        </div>

                        {/* Card 5: Portraits */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Fashion &<br />Portraits</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img65.png" alt="Portraits" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Studio and location shoots for personal branding and fashion.
                            </p>
                        </div>

                        {/* Card 6: Birthday Shoots */}
                        <div className="bg-white rounded-xl p-4 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full items-center">
                            <div className="flex items-center gap-3 mb-4 w-full px-2">
                                <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                    <svg className="w-full h-full text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z" />
                                        <path d="M12 7v14" />
                                        <path d="M12 7l4-4" />
                                        <path d="M12 7l-4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-[13px] md:text-sm font-bold text-[#111] leading-tight text-left">Canded<br />Photography</h3>
                            </div>
                            <div className="w-full aspect-square rounded-lg overflow-hidden mb-4 shrink-0 bg-gray-200">
                                <img src="/img25.png" alt="Birthday Parties" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed text-center mt-auto">
                                Fun and vibrant photography for birthdays of all ages.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Photography Portfolio Section */}
            <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
                            Our Photography <span className="text-[#d4af37]">Portfolio</span>
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

                    {/* Grid - 5 columns on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">

                        {/* Card 1 */}
                        <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
                            <img src="/img52.png" alt="Photography Portfolio 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Card 2 */}
                        <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
                            <img src="/img62.png" alt="Photography Portfolio 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Card 3 */}
                        <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
                            <img src="/img48.png" alt="Photography Portfolio 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Card 4 */}
                        <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
                            <img src="/img7.png" alt="Photography Portfolio 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                        {/* Card 5 */}
                        <div className="group relative rounded-xl overflow-hidden border border-[#d4af37] transition-all duration-300 aspect-[4/5]">
                            <img src="/img54.png" alt="Photography Portfolio 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose EventLahore Photography Section */}
            <section className="py-20 bg-[#FAF8F5] text-black border-t border-black/5">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
                            Why Choose <span className="text-[#d4af37]">EventLahore</span> Photography?
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

                        {/* Item 1 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                <circle cx="12" cy="13" r="3" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Latest Gear</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">We use top-tier cameras and drones for high-resolution results.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M19 8l-1.5 3L15 12l2.5 1L19 16l1.5-3L23 12l-2.5-1z" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Expert Team</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Our photographers are skilled in capturing authentic emotions.</p>
                        </div>

                        {/* Item 3 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Cinematic Edits</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Professional color grading and video editing for a movie-like feel.</p>
                        </div>

                        {/* Item 4 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <circle cx="16" cy="16" r="4" />
                                <line x1="16" y1="14" x2="16" y2="16" />
                                <line x1="16" y1="16" x2="17.5" y2="17.5" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Fast Delivery</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Timely delivery of your edited photos and videos without delays.</p>
                        </div>

                        {/* Item 5 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                <line x1="12" y1="22.08" x2="12" y2="12" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">Tailored Packages</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">Customized photography and video packages that fit your budget.</p>
                        </div>

                        {/* Item 6 */}
                        <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-none">
                            <svg className="mx-auto w-12 h-12 text-[#d4af37] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                            </svg>
                            <h3 className="text-sm sm:text-base font-bold text-[#111] mb-3 leading-snug">100% Satisfaction</h3>
                            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[180px]">We guarantee stunning visuals that you will cherish forever.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Photography Process Section */}
            <section className="py-20 bg-[#171716] text-white border-t border-white/5 relative">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
                            Our Photography Process
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
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">We discuss your event details, style, and requirements.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="relative text-center flex flex-col items-center">
                                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                        <path d="m15 5 4 4" />
                                    </svg>
                                    <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">2</div>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Planning & Concept</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">We plan the shoot structure, lighting, and timeline.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative text-center flex flex-col items-center">
                                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                                        <circle cx="12" cy="13" r="3" />
                                    </svg>
                                    <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">3</div>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">The Shoot</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">Our team captures all important moments discreetly.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="relative text-center flex flex-col items-center">
                                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                                        <line x1="7" y1="2" x2="7" y2="22" />
                                        <line x1="17" y1="2" x2="17" y2="22" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <line x1="2" y1="7" x2="7" y2="7" />
                                        <line x1="2" y1="17" x2="7" y2="17" />
                                        <line x1="17" y1="17" x2="22" y2="17" />
                                        <line x1="17" y1="7" x2="22" y2="7" />
                                    </svg>
                                    <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">4</div>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Post-Production</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">We meticulously edit, color grade, and refine the media.</p>
                            </div>

                            {/* Step 5 */}
                            <div className="relative text-center flex flex-col items-center">
                                <div className="relative z-10 w-20 h-20 rounded-full border border-[#d4af37] bg-black flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <div className="absolute -right-2 top-0 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center text-xs font-bold border-2 border-black">5</div>
                                </div>
                                <h3 className="text-base font-bold text-white mb-2">Final Delivery</h3>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-[200px] mx-auto">You receive your beautifully curated albums and videos.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Final CTA Edge-to-Edge Banner */}
            <section className="relative w-full border-t border-white/5 bg-black py-8 md:py-10 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 flex">
                    {/* Image on the left half */}
                    <div className="w-full md:w-[50%] lg:w-[45%] h-full relative">
                        <img src="/img25.png" alt="Photography Camera" className="w-full h-full object-cover object-left" />
                        {/* Gradient to blend seamlessly into the black background on the right */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black"></div>
                        {/* Mobile overlay to ensure text readability if it stacks */}
                        <div className="absolute inset-0 bg-black/60 md:hidden"></div>
                    </div>
                    {/* Solid black on the right half */}
                    <div className="hidden md:block md:w-[50%] lg:w-[55%] h-full bg-black"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 flex flex-col lg:flex-row items-center lg:items-center justify-end gap-8 lg:gap-16">

                    <div className="max-w-md text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-playfair font-semibold text-white mb-3 leading-tight">
                            Let's Capture Your <br />
                            <span className="text-[#d4af37]">Beautiful Moments!</span>
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Book our professional photography services today<br className="hidden sm:block" />
                            and cherish your memories forever.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 items-center lg:items-start shrink-0">
                        <button className="bg-[#c59d3e] hover:bg-[#b08d38] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                            <span>Book Your Shoot Now</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span>+92 300 1234567</span>
                            </div>
                            <div className="w-[1px] h-4 bg-gray-600"></div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                                <span>www.eventlahore.com</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
