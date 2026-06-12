import React from 'react';

export default function ServicesPage() {
  return (
    <div className="bg-black">
      {/* Header Section */}
      <div className="relative min-h-[50vh] flex flex-col justify-start overflow-hidden pt-4 md:pt-8">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/img44.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white  leading-tight">
              Premium Services <br /> 
              for <span className="text-[#C5A059]">Every Event</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              From beautiful decor to delicious food, we provide everything you need to make your event unforgettable.
            </p>

            {/* Features Grid */} 
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {/* Feature 1 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/10 group-hover:bg-[#C5A059] transition-all duration-300">
                  <i className="fas fa-th-large text-[#C5A059] group-hover:text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">All Services <br /> In One Place</h3>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/10 group-hover:bg-[#C5A059] transition-all duration-300">
                  <i className="fas fa-user-tie text-[#C5A059] group-hover:text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">Professional <br /> Team</h3>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/10 group-hover:bg-[#C5A059] transition-all duration-300">
                  <i className="fas fa-award text-[#C5A059] group-hover:text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">Quality <br /> You Deserve</h3>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/10 group-hover:bg-[#C5A059] transition-all duration-300">
                  <i className="fas fa-certificate text-[#C5A059] group-hover:text-black text-xl"></i>
                </div>
                <div>
                  <h3 className="text-white text-sm md:text-base font-semibold leading-tight">Satisfaction <br /> Guaranteed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Services Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-[var(--font-playfair)]">
            Our Exclusive Services
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-[#C5A059]"></div>
              <i className="fas fa-gem text-[#C5A059] text-sm"></i>
              <div className="h-[2px] w-12 bg-[#C5A059]"></div>
            </div>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for a perfect event, all under one roof.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((service, index) => (
              <div key={index} className="group  rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border  flex flex-col h-full">
                {/* Image Wrapper */}
                <div className="relative h-36 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-white  mb-1 group-hover:text-[#C5A059] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[12px] leading-snug mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <a href={service.link} className="mt-auto inline-flex items-center text-[#C5A059] font-bold text-[11px] hover:gap-2 transition-all">
                    Book Now <i className="fas fa-arrow-right ml-1 text-[8px]"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#e8cdb0] py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 font-[var(--font-playfair)]">
              Why Choose EventLahore Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/5 group-hover:bg-[#C5A059]/20 transition-all">
                <i className="fas fa-users-cog text-[#C5A059] text-xl"></i>
              </div>
              <div>
                <h4 className="text-black font-bold mb-1 text-base">Experienced Team</h4>
                <p className="text-gray-400 text-sm leading-snug">Skilled professionals for every service.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/5 group-hover:bg-[#C5A059]/20 transition-all">
                <i className="fas fa-award text-[#C5A059] text-xl"></i>
              </div>
              <div>
                <h4 className="text-black font-bold mb-1 text-base">High Quality</h4>
                <p className="text-gray-400 text-sm leading-snug">We ensure the best quality in everything.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/5 group-hover:bg-[#C5A059]/20 transition-all">
                <i className="fas fa-edit text-[#C5A059] text-xl"></i>
              </div>
              <div>
                <h4 className="text-black font-bold mb-1 text-base">Custom Packages</h4>
                <p className="text-gray-400 text-sm leading-snug">Services tailored to your needs and budget.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/5 group-hover:bg-[#C5A059]/20 transition-all">
                <i className="fas fa-shipping-fast text-[#C5A059] text-xl"></i>
              </div>
              <div>
                <h4 className="text-black font-bold mb-1 text-base">On-Time Delivery</h4>
                <p className="text-gray-400 text-sm leading-snug">We value your time and deliver on time.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left group">
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center bg-[#C5A059]/5 group-hover:bg-[#C5A059]/20 transition-all">
                <i className="fas fa-headset text-[#C5A059] text-xl"></i>
              </div>
              <div>
                <h4 className="text-black font-bold mb-1 text-base">24/7 Support</h4>
                <p className="text-gray-400 text-sm leading-snug">Our team is always here to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Decoration",
    description: "Stunning themes and setups tailored to your style and event type.",
    icon: "fas fa-magic",
    image: "/img2.png",
    link: "/services/decor"
  },
  {
    title: "Catering",
    description: "Delicious food with varied menus to delight your guests.",
    icon: "fas fa-utensils",
    image: "/img1.png",
    link: "/services/catering"
  },
  {
    title: "Photography",
    description: "Capture every special moment with our professional photography.",
    icon: "fas fa-camera",
    image: "/img3.png",
    link: "/services/photography"
  },
  {
    title: "DJ & Sound",
    description: "High quality sound systems and DJs to keep the energy high.",
    icon: "fas fa-music",
    image: "/img4.png",
    link: "/services/dj-and-sounds"
  },
  {
    title: "Makeup Artist",
    description: "Professional makeup services for a flawless and perfect look.",
    icon: "fas fa-spa",
    image: "/img5.png",
    link: "/services/makeup"
  },
  {
    title: "Event Planning",
    description: "Full event management from start to finish, stress-free.",
    icon: "fas fa-calendar-check",
    image: "/img6.png",
    link: "/services/planning"
  },
  {
    title: "Furniture Rental",
    description: "Premium furniture to match your event's theme.",
    icon: "fas fa-couch",
    image: "/img7.png",
    link: "/services/furniture"
  },
  {
    title: "Lighting",
    description: "Beautiful lighting options to create the perfect ambience.",
    icon: "fas fa-lightbulb",
    image: "/img24.png",
    link: "/services/lighting"
  },
  {
    title: "Staff & Waiters",
    description: "Trained and professional staff to serve your guests with care.",
    icon: "fas fa-user-friends",
    image: "/img43.png",
    link: "/services/staff"
  },
  {
    title: "Power Backup",
    description: "Reliable generators for uninterrupted power supply.",
    icon: "fas fa-bolt",
    image: "/img42.png",
    link: "/services/power"
  }
];
