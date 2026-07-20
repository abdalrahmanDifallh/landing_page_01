// src/services/pricing.service.ts
import { PricingPlan } from "../types/pricing.types";

export const getPricingPlans = async (): Promise<PricingPlan[]> => {
  // محاكاة الاتصال بقاعدة البيانات
  await new Promise((resolve) => setTimeout(resolve, 600));

  return [
    {
      id: "1",
      name: "الأساسية",
      price: "مجاناً",
      description: "مثالية للمشاريع الصغيرة والبدايات.",
      features: ["مستخدم واحد", "5 مشاريع", "دعم مجتمعي"],
    },
    {
      id: "2",
      name: "الاحترافية",
      price: "$29 / شهر",
      description: "للفرق الصغيرة التي تحتاج ميزات متقدمة.",
      features: ["5 مستخدمين", "مشاريع غير محدودة", "دعم فني 24/7"],
      isPopular: true,
    },
    {
      id: "3",
      name: "الشركات",
      price: "$99 / شهر",
      description: "مخصصة للمؤسسات ذات الاحتياجات العالية.",
      features: ["عدد لا محدود من المستخدمين", "خوادم مخصصة", "مدير حسابات شخصي"],
    }
  ];
};