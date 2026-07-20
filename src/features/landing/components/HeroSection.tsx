import { HeroData } from "@/types/landing.types";

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white pt-20"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >

      
      {/* طبقة التظليل الداكنة الأساسية */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* المحتوى الرئيسي للقسم */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Make Your Interior More <br /> Minimalistic & Modern
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
          {data.subtitle}
        </p>

        <div className="flex items-center justify-between w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-full p-2 shadow-lg">
          <input 
            type="text" 
            placeholder={data.searchPlaceholder} 
            className="bg-transparent text-white placeholder-gray-300 px-6 w-full focus:outline-none text-sm md:text-base"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors rounded-full p-3 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* الإضافة الجديدة: التدرج الأبيض المتلاشي في الأسفل */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none"></div>
    </section>
  );
};