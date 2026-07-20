import { WhyChooseItem } from "@/types/landing.types";

interface WhyChooseUsProps {
  features: WhyChooseItem[];
}

export const WhyChooseUsSection = ({ features }: WhyChooseUsProps) => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      {/* 
        استخدام Grid مقسم إلى 4 أعمدة في الشاشات الكبيرة:
        العمود الأول للعنوان، والثلاثة الباقية للمميزات.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        
        {/* العنوان الرئيسي على اليسار */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#1e1e1e] leading-tight">
            Why <br /> Choosing Us
          </h2>
        </div>

        {/* أعمدة المميزات الثلاثة على اليمين */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col">
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">
                {feature.title}
              </h3>
              
              <p className="text-[#6b6b6b] leading-relaxed mb-6 text-sm">
                {feature.description}
              </p>
              
              {/* رابط More Info مع السهم */}
              <a
                href={feature.linkUrl}
                className="text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium flex items-center gap-3 mt-auto"
              >
                {feature.linkText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};