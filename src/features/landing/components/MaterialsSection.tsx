import { MaterialsData } from "@/types/landing.types";

interface MaterialsSectionProps {
  data: MaterialsData;
}

export const MaterialsSection = ({ data }: MaterialsSectionProps) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      


      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* النصف الأيسر: النصوص */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
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

        {/* النصف الأيمن: مجموعة الصور (Collage) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
          
          {/* الشكل الرمادي الخلفي */}
          <div className="absolute top-0 right-0 w-3/4 h-[90%] bg-gray-50 rounded-tl-[60px] rounded-bl-[60px] -z-10 translate-x-8 -translate-y-8"></div>

          {/* توزيع الصور الثلاث */}
          <div className="flex gap-4 md:gap-6 h-[450px] md:h-[550px] relative z-10">
            
            {/* العمود الأيسر من الصور (يحتوي على صورتين) */}
            <div className="flex flex-col gap-4 md:gap-6 w-5/12 pt-12">
              {/* الصورة العلوية (مربعة تقريباً) */}
              <div className="h-2/5 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                <img 
                  src={data.image1Url} 
                  alt="Material 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* الصورة السفلية (أطول قليلاً) */}
              <div className="h-3/5 rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                <img 
                  src={data.image2Url} 
                  alt="Material 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* العمود الأيمن (يحتوي على صورة واحدة كبيرة) */}
            <div className="w-7/12 rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src={data.image3Url} 
                alt="Material 3" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};