'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  { 
    name: "Rayyan Ansari", 
    comment: "EventLahore made our wedding unforgettable, Everything was perfectly organized!", 
    rating: 5,
    img: "/img12.jpg"
  },
  { 
    name: "Saif Kaleem", 
    comment: "Best platform for booking venues and services. Highly recommended!", 
    rating: 5,
    img: "/img13.jpeg"
  },
  { 
    name: "Qamar Abbas", 
    comment: "Amazing experience! Great service, beautiful decor and delicious food.", 
    rating: 5,
    img: "/img14.png"
  },
  { 
    name: "Zainab Raza", 
    comment: "Truly professional team. They handled our corporate event with great care.", 
    rating: 5,
    img: "/img10.png"
  },
  { 
    name: "Hamza Ali", 
    comment: "Highly impressed with the venue options and the ease of booking. 5 stars!", 
    rating: 5,
    img: "/img11.png"
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight text-white">
        What Our <span className="text-[#d4af37]">Clients Say</span>
      </h2>

      <div className="relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ 
            transform: `translateX(calc(-${activeIndex * (100 / 3.3)}%))` 
          }}
        >
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className="min-w-full md:min-w-[calc(33.333%-1rem)] bg-[#0a0a0a] p-6 rounded-xl border border-white/5 text-left relative group transition-all duration-300"
            >
              {/* Top Row: Avatar, Name, and Stars */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#d4af37] transition-all">
                    <Image src={item.img} width={56} height={56} className="w-full h-full object-cover" alt={item.name} />
                  </div>
                  <h4 className="font-bold text-base text-white">{item.name}</h4>
                </div>
                <div className="text-[#d4af37] text-sm flex gap-0.5">
                  {[...Array(4)].map((_, j) => <i key={j} className="fa-solid fa-star"></i>)}
                </div>
              </div>

              {/* Second Row: Small Rating Stars */}
              <div className="ml-16 mb-4 text-[#d4af37] text-[10px] flex gap-0.5">
                {[...Array(5)].map((_, j) => <i key={j} className="fa-solid fa-star"></i>)}
              </div>
              
              {/* Third Row: Review Text */}
              <div className="ml-16">
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-[#d4af37] w-4' : 'bg-gray-800'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
