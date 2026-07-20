import { ExperienceData } from "@/types/landing.types";

interface ExperienceSectionProps {
  data: ExperienceData;
}

export const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* النصف الأيسر: الصورة مع الأشكال الخلفية */}
        <div className="w-full lg:w-1/2 relative">
          {/* الشكل الزخرفي العلوي الأيسر */}
          <div className="absolute -top-10 -left-10 w-3/4 h-[110%] bg-gray-50 rounded-br-[80px] z-0"></div>
          
          {/* الشكل الزخرفي السفلي الأيمن */}
          <div className="absolute top-20 -right-10 w-1/2 h-[90%] bg-gray-50 rounded-tl-[80px] z-0"></div>

          {/* الصورة الرئيسية */}
          <div className="relative z-10 w-full aspect-[4/3] rounded-br-[60px] rounded-tl-[60px] overflow-hidden shadow-2xl">
            {/* في حال لم تقم بإضافة الصورة بعد، سيظهر مربع رمادي كبديل مؤقت */}
            <div className="w-full h-full bg-slate-700">
              <img 
  src={data.imageUrl} 
  alt="Our Experience" 
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </div>

        {/* النصف الأيمن: النصوص */}
        <div className="w-full lg:w-1/2">
          <h4 className="text-orange-500 font-bold tracking-widest text-sm mb-4 uppercase">
            {data.subtitle}
          </h4>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-6 leading-tight max-w-md">
            {data.title}
          </h2>
          
          <p className="text-gray-500 leading-relaxed mb-8 max-w-lg text-[15px]">
            {data.description}
          </p>
          
          <a
            href={data.linkUrl}
            className="inline-flex items-center gap-3 text-orange-500 font-medium hover:text-orange-600 transition-colors text-sm"
          >
            {data.linkText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};