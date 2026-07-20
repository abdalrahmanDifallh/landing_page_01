'use client';

import { useState, useRef } from "react";
import { ProductData, ProductCategory } from "@/types/landing.types";

interface BestSellingSectionProps {
  categories: ProductCategory[];
  products: ProductData[];
}

export const BestSellingSection = ({ categories, products }: BestSellingSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(categories[0]);
  
  // 1. تعريف المرجع (Ref) للوصول إلى حاوية المنتجات
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(product => product.category === activeCategory);

  // 2. دالة التمرير عند الضغط على الأزرار
  // دالة التمرير المُحسنة
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // إذا كان الاتجاه يساراً نمرر بالسالب، وإذا يميناً بالموجب
      const scrollAmount = direction === "left" ? -350 : 350; 
      
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-24 bg-[#f7f7f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center text-[#1e1e1e] mb-8">
          Best Selling Product
        </h2>

        {/* أزرار التنقل (Tabs) */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-200/50 p-1.5 rounded-full flex gap-2 overflow-x-auto hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category 
                    ? "bg-white text-[#1e1e1e] shadow-sm" 
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* الحاوية الرئيسية للمنتجات مع أزرار التمرير */}
        <div className="relative group">
          
          {/* زر التمرير لليسار (ربطناه بدالة التمرير) */}
          <button 
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-transform active:scale-95"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* 
            3. حاوية المنتجات:
            - flex: لجعلها في صف واحد
            - overflow-x-auto: لتفعيل التمرير الأفقي
            - snap-x: لجعل البطاقات تقف في مكانها بدقة عند التمرير
            - scrollbar-hide: كلاس مخصص لإخفاء شريط التمرير
          */}
          <div 
            ref={scrollRef}
            className="flex gap-8 pt-16 pb-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // لدعم متصفحات فايرفوكس القديمة
          >
            {filteredProducts.map((product) => (
              // min-w-[280px]: نمنع البطاقات من الانضغاط ونعطيها عرضاً ثابتاً
              <div 
                key={product.id} 
                className="min-w-[280px] md:min-w-[300px] shrink-0 snap-start bg-white rounded-3xl p-6 relative flex flex-col transition-transform hover:-translate-y-2 duration-300 shadow-sm cursor-pointer"
              >
                {/* صورة المنتج */}
                <div className="-mt-24 mb-6 h-48 flex justify-center items-end relative">
                  <div className="w-full h-full bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.title} 
                      className="max-h-full object-contain drop-shadow-2xl"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                  </div>
                </div>

                <div className="text-gray-400 text-sm mb-1">{product.category}</div>
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">{product.title}</h3>
                
                {/* النجوم */}
                <div className="flex gap-1 mb-8 text-orange-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < product.rating ? '★' : '☆'}</span>
                  ))}
                </div>

                {/* السعر وزر الإضافة */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-2xl font-bold text-[#1e1e1e]">
                    <span className="text-sm mr-1">$</span>{product.price}
                  </div>
                  <button className="w-10 h-10 bg-[#0d1b2a] hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* زر التمرير لليمين (ربطناه بدالة التمرير) */}
          <button 
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center z-10 hover:bg-gray-50 transition-transform active:scale-95"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* رابط عرض الكل */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 transition-colors">
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
};