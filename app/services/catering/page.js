'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function CateringPage() {
  const [activeTab, setActiveTab] = useState('traditional');
  const [guestCount, setGuestCount] = useState(200);
  const [menuPreferences, setMenuPreferences] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const menuCategories = {
    traditional: {
      title: "Traditional Pakistani",
      subtitle: "Authentic royal flavors of Lahore crafted with traditional spices and shahi touch.",
      items: [
        { name: "Premium Mutton Biryani", desc: "Long-grain aged Basmati rice layered with succulent pieces of mutton, infused with saffron and aromatic spices.", type: "Main" },
        { name: "Shahi Chicken Qorma", desc: "Rich Mughlai-style gravy cooked in yogurt, caramelized onions, almonds, and traditional spices.", type: "Main" },
        { name: "Reshmi Kabab (Live)", desc: "Mouth-melting minced chicken skewers marinated in cream, cheese, and mild spices, grilled over live charcoal.", type: "Live Station" },
        { name: "Mutton Seekh Kabab", desc: "Traditional minced mutton skewers seasoned with herbs, green chilies, and hand-ground spices.", type: "Live Station" },
        { name: "Roghan-i-Naan & Sheermal", desc: "Fluffy, tandoor-baked flatbreads brushed with pure ghee and sprinkled with sesame seeds.", type: "Bread" },
        { name: "Shahi Kheer & Gajar Halwa", desc: "Slow-cooked saffron rice pudding topped with silver leaves and crushed pistachios, paired with rich carrot dessert.", type: "Dessert" },
      ]
    },
    bbq: {
      title: "Charcoal Live BBQ & Fusion",
      subtitle: "Sizzling live stations preparing fresh and hot grills directly for your guests.",
      items: [
        { name: "Chicken Boti & Malai Boti", desc: "Tender chicken chunks marinated in yogurt, cream, lemon, and spices, grilled to absolute perfection.", type: "Live Grill" },
        { name: "Sajji / Lamb Leg Roast", desc: "Traditional Balochi-style slow-roasted whole lamb leg, spiced with special home ground herbs.", type: "Live Station" },
        { name: "Tawa Fish (Lahori)", desc: "Fresh fish fillets coated in a crispy gram flour batter, pan-fried live with traditional Lahori hot spices.", type: "Live Station" },
        { name: "Grilled Herb Chicken", desc: "Juicy breast fillets marinated in olive oil, fresh rosemary, garlic, and cracked black pepper.", type: "Fusion" },
        { name: "Sizzling Garlic Prawns", desc: "Fresh prawns tossed on hot iron tawa with garlic butter, green onions, and sweet-chili glaze.", type: "Fusion" },
        { name: "Kashmiri Chai & Hot Jalebi", desc: "Traditional pink tea topped with crushed almonds, served alongside piping-hot, crispy live-fried Jalebis.", type: "Dessert" }
      ]
    },
    continental: {
      title: "Continental & Fine Dining",
      subtitle: "Sophisticated Western and Asian fusion dishes presented with contemporary plating.",
      items: [
        { name: "Premium Beef Stroganoff", desc: "Tender strips of beef sautéed with mushrooms in a rich sour cream sauce, served over buttered rice.", type: "Main" },
        { name: "Tuscan Garlic Chicken", desc: "Pan-seared chicken breast in a creamy parmesan sauce with sun-dried tomatoes and fresh spinach.", type: "Main" },
        { name: "Fettuccine Alfredo", desc: "Rich and creamy pasta tossed with pure butter, parmesan cheese, and grilled chicken strips.", type: "Pasta" },
        { name: "Live Stir-Fry & Noodles", desc: "Assorted vegetables and choice of meat tossed in a hot wok with sweet and savory sauces.", type: "Live Station" },
        { name: "Gourmet Salad Bar", desc: "A selection of fresh greens, Greek salad, Russian salad, Caesar salad with custom dressings.", type: "Starters" },
        { name: "Fudge Brownie & Cheese Cake", desc: "Warm Belgian chocolate brownie served with vanilla ice cream, and luxury New York-style strawberry cheesecake.", type: "Dessert" }
      ]
    }
  };

  const servicePackages = [
    {
      title: "Royal Wedding Buffet",
      price: "1,200",
      description: "Our signature high-end buffet with complete live cooking stations and royal table service.",
      features: [
        "10+ Premium Dishes",
        "2 Live BBQ Stations",
        "Royal Table Setup & Crockery",
        "Trained Uniformed Waiters",
        "Dedicated Catering Manager",
        "Complimentary Soft Drinks & Water"
      ],
      popular: true
    },
    {
      title: "Corporate High-Tea & Seminar",
      price: "850",
      description: "Sophisticated bite-sized appetizers and premium hot beverages tailored for business events.",
      features: [
        "6 Appetizer Varieties",
        "Premium Kashmiri & Green Tea",
        "Live Espresso & Coffee Bar",
        "Sleek & Professional Presentation",
        "Corporate Uniformed Service",
        "Fresh Juices & Mocktails"
      ],
      popular: false
    },
    {
      title: "Premium Private Celebration",
      price: "1,000",
      description: "Intimate and personalized dining experience perfect for birthdays, mehndi, or anniversaries.",
      features: [
        "8 Custom Selected Dishes",
        "1 Live Fry/Grill Station",
        "Theme-Matching Buffet Decor",
        "Professional Service Staff",
        "Custom Cake Presentation Setup",
        "Fresh Mint Margaritas"
      ],
      popular: false
    }
  ];

  const handlePreferenceToggle = (pref) => {
    if (menuPreferences.includes(pref)) {
      setMenuPreferences(menuPreferences.filter(p => p !== pref));
    } else {
      setMenuPreferences([...menuPreferences, pref]);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="bg-[#000] text-white min-h-screen font-sans">
      
      {/* Edge-to-Edge Premium Hero Section with Seamless Blended Background */}
      <section className="relative w-full bg-[#000] text-white overflow-hidden min-h-[600px] md:h-[650px] lg:h-[700px] flex items-start border-b border-white/5">
        
        {/* Full-bleed Background Image with Elegant Gradient Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img44.png" 
            alt="Delicious Catering Buffet Table" 
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Desktop Overlay: Solid black on the left, fading to completely transparent before reaching the right side to preserve original colors */}
          <div 
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(to right, #000 0%, #000 35%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0) 70%)'
            }}
          ></div>
          {/* Mobile Overlay: Vertical fade to ensure legibility while keeping the top image colorful and vibrant */}
          <div 
            className="absolute inset-0 block md:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.75) 80%)'
            }}
          ></div>
        </div>

        {/* Content Container (z-10 overlaying the background image) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:pl-16 lg:pl-24 pb-16 md:pb-20">
          <div className="max-w-[520px] w-full">
            
            {/* Title - Playfair Serif, exact wording, sizing, and line height */}
            <h1 className="text-5xl font-playfair font-medium leading-[1.1] tracking-tight text-white mt-10 mb-6">
              Delicious <span className="text-[#d4af37]">Catering</span> <br />
              for Every Occasion
            </h1>
            
            {/* Diamond Separator Ornament - Exact matches for spacing, height, gold borders */}
            <div className="flex items-center my-6 w-full max-w-[340px]">
              <div className="h-[1px] flex-grow bg-[#d4af37]/60"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2.5 h-2.5 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]/60"></div>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base mb-10 leading-relaxed font-medium">
              From intimate gatherings to grand celebrations, our catering services bring people together with exceptional food and impeccable service.
            </p>

            {/* Feature List - Pure Vertical Alignment with Gold Outline Circles & Icons */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-base shrink-0 bg-black/40 backdrop-blur-sm">
                  <i className="fa-solid fa-bell-concierge"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">Hygienic & Safe Food</h3>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium leading-tight">Prepared with the highest standards of hygiene.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-base shrink-0 bg-black/40 backdrop-blur-sm">
                  <i className="fa-solid fa-carrot"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">Fresh Ingredients</h3>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium leading-tight">We use only the freshest and finest ingredients.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-base shrink-0 bg-black/40 backdrop-blur-sm">
                  <i className="fa-solid fa-user-tie"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm font-bold leading-tight">Experienced Chefs</h3>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium leading-tight">Our professional chefs craft every dish to perfection.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Catering Services Section */}
      <section className="py-20 bg-[#FAF8F5] text-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
              Our Catering Services
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
              We offer a complete range of catering solutions tailored to your event type, guest count and preferences.
            </p>
          </div>

          {/* Cards Grid - 6 columns on desktop, beautifully responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            
            {/* Card 1: Buffet Catering */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 46h48" />
                <path d="M12 46c0-11 9-20 20-20s20 9 20 20" />
                <path d="M32 26v-6" />
                <circle cx="32" cy="17" r="3" />
                <path d="M18 46a14 14 0 0 1 28 0" opacity="0.3" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Buffet Catering</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Wide variety of dishes in a perfect buffet setup.</p>
            </div>

            {/* Card 2: Plated Catering */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="32" cy="32" r="16" />
                <circle cx="32" cy="32" r="10" strokeDasharray="2 2" opacity="0.5" />
                <path d="M12 20v10a2 2 0 0 0 2 2h2v12" />
                <path d="M14 20v10" />
                <path d="M18 20v10" />
                <path d="M48 20v12c0 2 2 2 2 2h2v10" />
                <path d="M52 20c1 0 2 1 2 3v9h-4Z" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Plated Catering</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Elegant plated service for a premium experience.</p>
            </div>

            {/* Card 3: Live BBQ Stations */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 32c0 8.8 7.2 16 16 16s16-7.2 16-16H16z" />
                <path d="M12 32h40" />
                <path d="M24 48l-6 10" />
                <path d="M40 48l6 10" />
                <path d="M32 48v10" />
                <path d="M26 24c0-4 2-4 2-8" />
                <path d="M32 24c0-4 2-4 2-8" />
                <path d="M38 24c0-4 2-4 2-8" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Live BBQ Stations</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Mouth-watering BBQ with live cooking experience.</p>
            </div>

            {/* Card 4: Dessert & Sweets */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="36" width="36" height="14" rx="2" />
                <rect x="20" y="24" width="24" height="12" rx="2" />
                <path d="M26 24v-6" />
                <path d="M32 24v-6" />
                <path d="M38 24v-6" />
                <path d="M26 15c.5-1-.5-3 0-3s.5 2 0 3z" />
                <path d="M32 15c.5-1-.5-3 0-3s.5 2 0 3z" />
                <path d="M38 15c.5-1-.5-3 0-3s.5 2 0 3z" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Dessert & Sweets</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Delicious desserts and traditional sweet options.</p>
            </div>

            {/* Card 5: Beverages */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 22l4 24a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l4-24" />
                <path d="M18 22h28" />
                <path d="M34 22l6-10h6" />
                <circle cx="32" cy="34" r="3" opacity="0.5" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Beverages</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Refreshing drinks, mocktails & custom options.</p>
            </div>

            {/* Card 6: Special Menus */}
            <div className="bg-white rounded-2xl p-6 border border-[#f0e6d2] shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 44h40" />
                <path d="M16 44c0-9 7.2-16 16-16s16 7 16 16" />
                <circle cx="32" cy="23" r="3" />
                <path d="M26 44l-4 6h20l-4-6" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Special Menus</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Customized menus for weddings, birthdays & more.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Tailored Menus Section with Same Elegant Blended Design */}
      <section className="relative w-full bg-[#000] text-white overflow-hidden min-h-[500px] md:h-[550px] lg:h-[600px] flex items-center border-b border-white/5">
        
        {/* Full-bleed Background Image with Elegant Gradient Fade */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/img46.png" 
            alt="Tailored Gourmet Catering Dinner Table" 
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Desktop Overlay: Solid black on the left, fading to completely transparent before reaching the right side to preserve original colors */}
          <div 
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(to right, #000 0%, #000 35%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0) 70%)'
            }}
          ></div>
          {/* Mobile Overlay: Vertical fade to ensure legibility while keeping the top image colorful and vibrant */}
          <div 
            className="absolute inset-0 block md:hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.75) 80%)'
            }}
          ></div>
        </div>

        {/* Content Container (z-10 overlaying the background image) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:pl-16 lg:pl-24 py-16 md:py-20">
          <div className="max-w-[520px] w-full">
            
            {/* Title - Playfair Serif, exact matches for casing and coloring */}
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-playfair font-medium leading-[1.15] tracking-tight text-white mb-6">
              Tailored Menus for <br />
              <span className="text-[#d4af37]">Every Taste</span>
            </h2>
            
            {/* Diamond Separator Ornament - Same elegant styling */}
            <div className="flex items-center my-6 w-full max-w-[340px]">
              <div className="h-[1px] flex-grow bg-[#d4af37]/60"></div>
              <div className="mx-3 text-[#d4af37] rotate-45 border border-[#d4af37] w-2.5 h-2.5 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#d4af37]"></div>
              </div>
              <div className="h-[1px] flex-grow bg-[#d4af37]/60"></div>
            </div>

            {/* Description Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed font-medium">
              Whether you prefer traditional, continental, or fusion cuisine, we customize every menu to match your theme and guests' preferences.
            </p>

            {/* Feature List with Elegant Circular Gold Checkmark Icons */}
            <div className="space-y-4">
              
              {/* Feature 1 */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-white text-sm md:text-base font-semibold">Customizable Menus</span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-white text-sm md:text-base font-semibold">Multi-Cuisine Options</span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-white text-sm md:text-base font-semibold">Dietary Preferences (Veg, Non-Veg, Vegan)</span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#d4af37] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-white text-sm md:text-base font-semibold">Kids, Corporate & Special Menus</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose EventLahore Catering Section */}
      <section className="py-20 bg-[#FAF8F5] text-black border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#111] mb-4">
              Why Choose <span className="text-[#d4af37]">EventLahore</span> Catering?
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
            
            {/* Item 1: Expert Chefs */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 28c0-6 3-10 8-12c1-4 5-6 10-4c4-4 10-1 10 4c4 2 6 6 6 12Z" />
                <path d="M20 28h24v6H20z" />
                <path d="M23 34v4a9 9 0 0 0 18 0v-4" />
                <circle cx="28" cy="38" r="1.5" fill="currentColor" />
                <circle cx="36" cy="38" r="1.5" fill="currentColor" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Expert Chefs</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">Skilled and experienced chefs ensure the best taste and quality.</p>
            </div>

            {/* Item 2: Fresh Ingredients */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 36c0 11 9 20 20 20s20-9 20-20H12z" />
                <path d="M8 36h48" />
                <path d="M24 24c0 4 4 8 8 8s4-8 4-12" />
                <path d="M28 20c-3 1-5 4-5 8" />
                <path d="M38 22c0 4-2 6-6 8" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Fresh Ingredients</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">We use only the freshest and highest quality ingredients.</p>
            </div>

            {/* Item 3: Customized Menus */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="20" y="16" width="24" height="34" rx="3" />
                <path d="M28 16V12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
                <path d="M26 26l3 3l5-5" />
                <path d="M26 36l3 3l5-5" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Customized Menus</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">Menus tailored to your taste, theme and guest preferences.</p>
            </div>

            {/* Item 4: Hygienic & Safe */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 10s16 4 16 14c0 14-16 26-16 26S16 38 16 24c0-10 16-14 16-14z" />
                <path d="M25 28l5 5l10-10" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Hygienic & Safe</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">We follow strict hygiene standards to ensure safe food.</p>
            </div>

            {/* Item 5: Professional Service */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-b-0 lg:border-r">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 34c0-8.8 7.2-16 16-16s16 7.2 16 16" />
                <path d="M12 34h40" />
                <circle cx="32" cy="15" r="3" />
                <path d="M10 44h36a4 4 0 0 0 4-4" />
                <path d="M20 44l-4 6" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Professional Service</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">Trained staff and flawless service for a premium experience.</p>
            </div>

            {/* Item 6: Affordable Pricing */}
            <div className="px-6 py-8 text-center flex flex-col items-center border-b border-gray-200/60 lg:border-none">
              <svg className="mx-auto w-14 h-14 text-[#d4af37] mb-4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="24" width="36" height="26" rx="3" />
                <circle cx="40" cy="37" r="3" />
                <path d="M20 24v-6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6" />
                <path d="M24 16v-4h12" />
              </svg>
              <h3 className="text-base font-playfair font-bold text-[#111] mb-2 leading-snug">Affordable Pricing</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">Best quality catering at competitive and transparent prices.</p>
            </div>

          </div>
        </div>
      </section>
      {/* Contact Quick Info Section */}
      <section className="relative w-full bg-[#000] text-white overflow-hidden min-h-[500px] md:h-[550px] lg:h-[600px] flex items-center border-b border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
    <img src="/img47.png" alt="Contact background" className="w-50% h-50%"  />
    {/* Desktop overlay: solid black left fading to transparent */}
    <div className="absolute inset-0 hidden md:block" style={{background: 'linear-gradient(to right, #000 0%, #000 35%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0) 70%)'}}></div>
    {/* Mobile overlay */}
    <div className="absolute inset-0 block md:hidden" style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 80%)'}}></div>
  </div>
  {/* Content (left side) */}
  <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:pl-16 lg:pl-24 py-16 md:py-20 text-left">
    <h2 className="text-3xl sm:text-4xl font-playfair font-medium text-white mb-6">Let's Make Your Event Delicious!</h2>
    <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-[400px]">
    Book our catering services today and treat your guests with the best food.
    </p>
    {/* No phone or email displayed as requested */}
  </div>
</section>
</div>
  );
}
