// src/app/pricing/page.tsx
import { getPricingPlans } from "@/services/pricing.service";
import { PricingSection } from "@/features/pricing/components/PricingSection";

export default async function PricingPage() {
  // جلب البيانات من الخادم
  const plans = await getPricingPlans();

  // تمرير البيانات للمكون
  return (
    <div className="min-h-screen bg-gray-50 pt-10">
      <PricingSection plans={plans} />
    </div>
  );
}