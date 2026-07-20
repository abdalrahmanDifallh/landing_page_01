'use client';

import { useRef, useCallback } from 'react';
import { TestimonialData } from "@/types/landing.types";

interface TestimonialsSectionProps {
  testimonials: TestimonialData[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

 const scroll = useCallback((direction: "left" | "right") => {
  const slider = sliderRef.current;
  if (!slider) return;

  const cards = Array.from(
    slider.querySelectorAll(':scope > div')
  ) as HTMLElement[];
  if (!cards.length) return;

  const isRTL = getComputedStyle(slider).direction === 'rtl';
  const effectiveDirection = isRTL
    ? (direction === "left" ? "right" : "left")
    : direction;

  const currentScroll = slider.scrollLeft;

  // نلاقي أقرب كارد للموضع الحالي
  let currentIndex = cards.findIndex(
    (card) => card.offsetLeft >= currentScroll - 10
  );
  if (currentIndex === -1) currentIndex = 0;

  const nextIndex =
    effectiveDirection === "left"
      ? Math.max(0, currentIndex - 1)
      : Math.min(cards.length - 1, currentIndex + 1);

  cards[nextIndex].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}, []);

  return (
    
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Testimonials</p>
          <h2 className="text-4xl font-bold text-[#1e1e1e]">Our Client Reviews</h2>
        </div>

        <div className="relative">
          
          {/* سهم اليسار */}
          <button 
            type="button"
            onClick={() => { console.log('click');
               scroll('left'); }}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-orange-50 hover:text-orange-500 transition-all active:scale-95 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider */}
          <div 
            ref={sliderRef}
            className="flex gap-6 pb-12 pt-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex flex-col items-center relative"
              >
                <div className="w-full h-[360px] rounded-[2rem] overflow-hidden shadow-sm bg-gray-100">
                  <img 
                    src={testimonial.backgroundImageUrl} 
                    alt="Room Background" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-[85%] bg-white rounded-3xl p-6 px-6 shadow-[0_20px_40px_rgb(0,0,0,0.08)] relative z-10 -mt-24 text-center">
                  
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-20 h-20 rounded-full border-[6px] border-white shadow-sm overflow-hidden bg-gray-100">
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="pt-10">
                    <h3 className="text-lg font-bold text-[#1e1e1e] mb-1">{testimonial.name}</h3>
                    <p className="text-xs text-gray-400 mb-4">{testimonial.role}</p>
                    
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-6 h-[65px] overflow-hidden">
                      "{testimonial.content}"
                    </p>

                    <div className="flex justify-center gap-1 text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">
                          {i < testimonial.rating ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* سهم اليمين */}
          <button 
            type="button"
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center z-30 hover:bg-orange-50 hover:text-orange-500 transition-all active:scale-95 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
};