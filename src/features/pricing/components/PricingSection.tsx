// src/features/pricing/components/PricingSection.tsx
import { PricingPlan } from "@/types/pricing.types";

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection = ({ plans }: PricingSectionProps) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">خطط الأسعار</h1>
      <p className="text-gray-600 mb-12">اختر الباقة التي تناسب حجم أعمالك</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`p-8 rounded-2xl border ${
              plan.isPopular ? 'border-blue-600 shadow-lg relative' : 'border-gray-200 bg-white'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                الأكثر طلباً
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-3xl font-extrabold text-blue-600 mb-4">{plan.price}</div>
            <p className="text-gray-500 mb-6">{plan.description}</p>
            
            <ul className="text-right space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700 flex items-center gap-2">
                  <span className="text-blue-500">✓</span> {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-lg font-medium transition ${
              plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}>
              اشترك الآن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};