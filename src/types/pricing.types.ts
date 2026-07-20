// src/types/pricing.types.ts

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean; // خيار لتحديد الباقة الأكثر طلباً
}