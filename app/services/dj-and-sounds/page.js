'use client';

export default function DJSoundsPage() {
    return (
        <div className="bg-[#000] text-white min-h-screen font-sans">
            {/* Edge-to-Edge Premium Hero Section with Seamless Blended Background */}
            <section className="relative w-full bg-[#000] text-white overflow-hidden flex items-start border-b border-white/5">

                {/* Full-bleed Background Image with Elegant Gradient Fade */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img67.png"
                        alt="DJ & Sound Solutions"
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
                            <span className="text-[#d4af37] font-medium tracking-wide text-sm sm:text-base italic font-serif">Feel the Beat. Elevate the Vibe.</span>
                            <div className="h-[1px] w-12 sm:w-16 bg-[#d4af37]"></div>
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-playfair font-medium leading-[1.15] tracking-tight text-white mb-6 mt-4">
                            DJ & Sound Solutions <br className="hidden sm:block" />
                            for <span className="text-[#d4af37]">Unforgettable Events</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed font-medium max-w-[450px] mx-auto md:mx-0">
                            From weddings to corporate events, we deliver powerful sound, energetic beats, and an unmatched audio experience.
                        </p>

                        {/* Icons Grid */}
                        <div className="grid grid-cols-4 mt-8 md:mt-12 gap-2 sm:gap-4">

                            {/* Icon 1: High Quality Sound */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">High Quality<br />Sound</span>
                            </div>

                            {/* Icon 2: Professional DJs */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                                    <circle cx="8" cy="12" r="3" />
                                    <circle cx="16" cy="12" r="3" />
                                    <line x1="8" y1="12" x2="8" y2="12.01" />
                                    <line x1="16" y1="12" x2="16" y2="12.01" />
                                    <path d="M12 8v8" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Professional<br />DJs</span>
                            </div>

                            {/* Icon 3: Latest Equipment */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
                                    <circle cx="12" cy="14" r="4" />
                                    <circle cx="12" cy="6" r="1.5" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Latest<br />Equipment</span>
                            </div>

                            {/* Icon 4: Customized Playlists */}
                            <div className="flex flex-col items-center md:items-start">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#d4af37] mb-3 mx-auto md:mx-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 12h3l3-7 5 14 4-9 3 5h2" />
                                </svg>
                                <span className="text-white text-xs sm:text-sm font-medium leading-tight md:text-left text-center">Customized<br />Playlists</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* Our DJ Services Section */}
            <section className="py-20 bg-[#e8cdb0] text-black relative">
                {/* Decorative Top Corners (Optional, based on image) */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top left, #d4af37 0%, transparent 70%)' }}></div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #d4af37 0%, transparent 70%)' }}></div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[38px] font-playfair font-bold text-[#1a1a1a] mb-4">
                            Our DJ & Sound Services
                        </h2>
                        
                        {/* Elegant Separator */}
                        <div className="flex justify-center items-center my-4 w-full max-w-[100px] mx-auto">
                            <div className="mx-3 text-[#d4af37] rotate-45 bg-[#d4af37] w-2 h-2"></div>
                        </div>

                        <p className="text-[#333] max-w-2xl mx-auto text-sm md:text-base font-medium mt-4">
                            Tailored sound and entertainment solutions to match every event style and size.
                        </p>
                    </div>

                    {/* Cards Grid - 6 columns on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

                        {/* Card 1: Wedding DJ */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            {/* Image Top */}
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img68.png" alt="Wedding DJ" className="w-full h-full object-cover" />
                            </div>
                            {/* Content Bottom */}
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* Wedding Rings Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <circle cx="8" cy="14" r="5" />
                                        <circle cx="16" cy="14" r="5" />
                                        <path d="M5.5 10.5L8 5l2.5 5.5" />
                                        <path d="M13.5 10.5L16 5l2.5 5.5" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">Wedding DJ</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    Make your big day unforgettable with our energetic and professional DJ services.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Corporate Events */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img69.png" alt="Corporate Events" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* People Team Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">Corporate Events</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    Professional DJs and sound setup for corporate gatherings, launches, and parties.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Private Parties */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img70.png" alt="Private Parties" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* Party Popper Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <path d="M5.8 11.3 2 22l10.7-3.79" />
                                        <path d="M4 3h.01" />
                                        <path d="M22 8h.01" />
                                        <path d="M15 2h.01" />
                                        <path d="M22 20h.01" />
                                        <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                                        <path d="m22 13-.82-.33c-.86-.39-1.87.15-2.15 1.07v0a1.97 1.97 0 0 1-2.11 1.35l-.06-.01a1.97 1.97 0 0 0-2.31 1.55l-.25 1.3" />
                                        <path d="m14.4 14.4-8.1-8.1" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">Private Parties</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    From birthdays to anniversaries, we bring the perfect beats to your celebration.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Live Performances */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img71.png" alt="Live Performances" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* Music Notes Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <path d="M9 18V5l12-2v13" />
                                        <circle cx="6" cy="18" r="3" />
                                        <circle cx="18" cy="16" r="3" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">Live Performances</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    High-quality sound support for live bands, artists, and stage performances.
                                </p>
                            </div>
                        </div>

                        {/* Card 5: MC & Hosting */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img72.png" alt="MC & Hosting" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* Microphone Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                        <line x1="12" y1="19" x2="12" y2="22" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">MC & Hosting</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    Our MCs keep the energy high and the event flowing seamlessly.
                                </p>
                            </div>
                        </div>

                        {/* Card 6: Sound & Lighting Setup */}
                        <div className="flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(212,175,55,0.2)] transition-shadow duration-300 bg-gradient-to-b from-[#fdfbf6] to-[#f6e5be]">
                            <div className="w-full h-32 sm:h-28 xl:h-32 relative">
                                <img src="/img73.png" alt="Sound & Lighting Setup" className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-grow items-start text-left">
                                <div className="w-8 h-8 mb-3 text-[#bc8e2b]">
                                    {/* Equalizer/Bars Icon */}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                        <rect x="4" y="10" width="4" height="10" rx="1" />
                                        <rect x="10" y="4" width="4" height="16" rx="1" />
                                        <rect x="16" y="14" width="4" height="6" rx="1" />
                                    </svg>
                                </div>
                                <h3 className="text-[15px] sm:text-base font-playfair font-bold text-[#111] mb-2">Sound & Lighting Setup</h3>
                                <p className="text-[#4a4a4a] text-[13px] leading-relaxed">
                                    Complete sound and lighting solutions for a stunning and immersive experience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Professional Equipment Section */}
            <section className="py-20 bg-gradient-to-b from-[#2a1b0a] to-[#120a02] text-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[38px] font-playfair font-bold text-white mb-4">
                            Our <span className="text-[#d4af37]">Professional</span> Equipment
                        </h2>
                        
                        {/* Elegant Separator */}
                        <div className="flex justify-center items-center my-4 w-full max-w-[120px] mx-auto">
                            <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
                            <div className="mx-2 text-[#d4af37] rotate-45 bg-[#d4af37] w-2.5 h-2.5"></div>
                            <div className="h-[1px] flex-grow bg-[#d4af37]"></div>
                        </div>
                    </div>

                    {/* 5 Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">

                        {/* Card 1: Premium Speakers */}
                        <div className="flex flex-col rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg">
                            <div className="w-full h-48 sm:h-56 relative">
                                <img src="/img74.png" alt="Premium Speakers" className="w-full h-full object-cover" />
                            </div>
                            
                        </div>

                        {/* Card 2: DJ Consoles */}
                        <div className="flex flex-col rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg">
                            <div className="w-full h-48 sm:h-56 relative">
                                <img src="/img75.png" alt="DJ Consoles" className="w-full h-full object-cover" />
                            </div>
                           
                        </div>

                        {/* Card 3: Wireless Microphones */}
                        <div className="flex flex-col rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg">
                            <div className="w-full h-48 sm:h-56 relative">
                                <img src="/img78.png" alt="Wireless Microphones" className="w-full h-full object-cover" />
                            </div>
                            
                        </div>

                        {/* Card 4: Mixers */}
                        <div className="flex flex-col rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg">
                            <div className="w-full h-48 sm:h-56 relative">
                                <img src="/img77.png" alt="Mixers" className="w-full h-full object-cover" />
                            </div>
                            
                        </div>

                        {/* Card 5: Stage Lighting */}
                        <div className="flex flex-col rounded-xl overflow-hidden border border-[#d4af37]/60 shadow-lg">
                            <div className="w-full h-48 sm:h-56 relative">
                                <img src="/img76.png" alt="Stage Lighting" className="w-full h-full object-cover" />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

            {/* Why Choose EventLahore Sound Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-[#fbf4e6] to-[#f4e2c2] text-black border-t border-[#d4af37]/30 relative">
                <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-12">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-playfair font-bold text-[#111] mb-2">
                            Why Choose <span className="text-[#c18f29]">EventLahore</span> for DJ & Sounds?
                        </h2>
                    </div>

                    {/* 6 Grid columns with vertical dividers */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#c18f29]/30">

                        {/* Item 1 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* DJ Person Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M19 8l-1.5 3L15 12l2.5 1L19 16l1.5-3L23 12l-2.5-1z"></path>
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">Experienced DJs</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">Skilled and professional DJs with experience in all types of events.</p>
                        </div>

                        {/* Item 2 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* Diamond Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 3h12l4 6-10 13L2 9Z" />
                                <path d="M11 3 8 9l4 13 4-13-3-6" />
                                <path d="M2 9h20" />
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">Crystal Clear Sound</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">High-quality audio equipment for the best sound experience.</p>
                        </div>

                        {/* Item 3 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* Custom Playlists Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="13.5" r="2.5" />
                                <path d="M11 13.5V6l6 2v4" />
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">Custom Playlists</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">We play what you love. Customized playlists as per your taste.</p>
                        </div>

                        {/* Item 4 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* Clock Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">On-Time Setup</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">We ensure timely setup and sound check for a smooth event.</p>
                        </div>

                        {/* Item 5 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* Affordable Packages (Hand + Coin) Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M12 5v6" />
                                <path d="M10 7h4" />
                                <path d="M21 16c-1.3-.8-3.1-1.3-4.5-1.5-.7-.1-1.4.3-1.6 1-.2.8.2 1.5 1 1.6 2 .3 3.6 1.4 3.6 1.4L17 21H7s-4-2-4-5 3-7 3-7" />
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">Affordable Packages</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">Flexible packages that fit your needs and budget.</p>
                        </div>

                        {/* Item 6 */}
                        <div className="px-4 py-8 sm:py-4 text-center flex flex-col items-center">
                            {/* 100% Satisfaction (Thumbs Up + Star) Icon */}
                            <svg className="mx-auto w-12 h-12 text-[#c18f29] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                                <polygon points="12 2 13.5 5.5 17 6 14.5 8.5 15 12 12 10.5 9 12 9.5 8.5 7 6 10.5 5.5" />
                            </svg>
                            <h3 className="text-[15px] font-playfair font-bold text-[#111] mb-2">100% Satisfaction</h3>
                            <p className="text-[#4a4a4a] text-[13px] leading-relaxed">Your happiness is our priority. We guarantee an amazing experience.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our DJ & Sound Process Section */}
            <section className="py-20 bg-gradient-to-b from-[#1a1005] to-[#2a1a08] text-white relative">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top left, #d4af37 0%, transparent 70%)' }}></div>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #d4af37 0%, transparent 70%)' }}></div>

                <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-playfair font-bold text-white mb-2">
                            Our DJ & Sound Process
                        </h2>
                    </div>

                    {/* 5 Steps Timeline */}
                    <div className="relative mb-20 max-w-5xl mx-auto">
                        {/* Connecting Dotted Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] border-t-2 border-dotted border-[#d4af37]/50 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                            
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center border-4 border-[#2a1a08] z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 top-0 w-7 h-7 bg-[#d4af37] text-[#111] font-bold rounded-full border-2 border-[#2a1a08] flex items-center justify-center text-sm z-20 shadow-md">1</div>
                                </div>
                                <h3 className="text-[15px] font-playfair font-bold text-white mb-2">Consultation</h3>
                                <p className="text-[#b0b0b0] text-[13px] leading-relaxed max-w-[180px]">We discuss your event details and requirements.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center border-4 border-[#2a1a08] z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                            <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                                            <path d="M9 14l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 top-0 w-7 h-7 bg-[#d4af37] text-[#111] font-bold rounded-full border-2 border-[#2a1a08] flex items-center justify-center text-sm z-20 shadow-md">2</div>
                                </div>
                                <h3 className="text-[15px] font-playfair font-bold text-white mb-2">Plan & Customize</h3>
                                <p className="text-[#b0b0b0] text-[13px] leading-relaxed max-w-[180px]">We plan the music, sound setup, and special requests.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center border-4 border-[#2a1a08] z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <rect x="6" y="2" width="12" height="20" rx="2" ry="2" />
                                            <circle cx="12" cy="14" r="4" />
                                            <circle cx="12" cy="6" r="1.5" />
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 top-0 w-7 h-7 bg-[#d4af37] text-[#111] font-bold rounded-full border-2 border-[#2a1a08] flex items-center justify-center text-sm z-20 shadow-md">3</div>
                                </div>
                                <h3 className="text-[15px] font-playfair font-bold text-white mb-2">Setup</h3>
                                <p className="text-[#b0b0b0] text-[13px] leading-relaxed max-w-[180px]">Our team arrives on time and sets up the complete system.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center border-4 border-[#2a1a08] z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                            <circle cx="12" cy="15" r="2" />
                                            <path d="M14 15v-3h2" />
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 top-0 w-7 h-7 bg-[#d4af37] text-[#111] font-bold rounded-full border-2 border-[#2a1a08] flex items-center justify-center text-sm z-20 shadow-md">4</div>
                                </div>
                                <h3 className="text-[15px] font-playfair font-bold text-white mb-2">Event Time</h3>
                                <p className="text-[#b0b0b0] text-[13px] leading-relaxed max-w-[180px]">We make your event lively with the perfect beats.</p>
                            </div>

                            {/* Step 5 */}
                            <div className="flex flex-col items-center text-center relative group">
                                <div className="relative w-24 h-24 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37] to-[#aa8022] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center border-4 border-[#2a1a08] z-10 group-hover:scale-110 transition-transform duration-300">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                        </svg>
                                    </div>
                                    <div className="absolute -right-2 top-0 w-7 h-7 bg-[#d4af37] text-[#111] font-bold rounded-full border-2 border-[#2a1a08] flex items-center justify-center text-sm z-20 shadow-md">5</div>
                                </div>
                                <h3 className="text-[15px] font-playfair font-bold text-white mb-2">Support</h3>
                                <p className="text-[#b0b0b0] text-[13px] leading-relaxed max-w-[180px]">Our team is always there to assist you.</p>
                            </div>

                        </div>
                    </div>

                    {/* Banner Section */}
                    <div className="relative w-full rounded-xl border border-[#d4af37]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden bg-[#120a03] flex flex-col md:flex-row">
                        
                        {/* Left Side Image */}
                        <div className="w-full md:w-[45%] h-64 md:h-auto relative">
                            <img src="/img79.png" alt="Party Event" className="w-full h-full object-cover object-center" />
                            {/* Gradient fade into the right side */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#120a03]/50 to-[#120a03] hidden md:block"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#120a03]/50 to-[#120a03] md:hidden"></div>
                        </div>

                        {/* Right Side Content */}
                        <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center">
                            
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                <div className="text-left max-w-md">
                                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white leading-tight mb-2">
                                        Let's Make Your Event <br />
                                        <span className="text-[#d4af37]">Sound Amazing!</span>
                                    </h2>
                                    <p className="text-[#b0b0b0] text-sm leading-relaxed mb-4 lg:mb-0">
                                        Book our DJ & sound services today <br className="hidden lg:block"/>
                                        and create memories that last forever.
                                    </p>
                                </div>

                                <div className="flex flex-col items-start lg:items-end gap-6 shrink-0">
                                    <button className="bg-gradient-to-r from-[#d4af37] to-[#b08d38] hover:from-[#e5c158] hover:to-[#c59d3e] text-[#111] font-semibold py-3.5 px-8 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto">
                                        <span>Get a Free Quote</span>
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </button>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[13px] text-gray-300 w-full sm:w-auto">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            <span>+92 300 1234567</span>
                                        </div>
                                        <div className="hidden sm:block w-[1px] h-4 bg-gray-600"></div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
                                            <span>www.eventlahore.com</span>
                                        </div>
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
