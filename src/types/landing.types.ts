// src/types/landing.types.ts
export interface LandingPageResponse {
  hero: HeroData;
  whyChooseUs: WhyChooseItem[]; // الإضافة الجديدة
  categories: ProductCategory[];   // الإضافة الجديدة
  bestSelling: ProductData[];
  experience: ExperienceData;
  materials: MaterialsData;
  testimonials : TestimonialData[];
} 


export interface HeroData {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

export type ProductCategory = "Chair" | "Beds" | "Sofa" | "Lamp";

export interface ProductData {
  id: string;
  category: ProductCategory;
  title: string;
  price: number;
  rating: number; // عدد النجوم من 1 إلى 5
  imageUrl: string;
}

export interface ExperienceData {
  subtitle: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
}

export interface MaterialsData {
  subtitle: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  image1Url: string; // الصورة العلوية اليسرى
  image2Url: string; // الصورة السفلية اليسرى
  image3Url: string; // الصورة الكبيرة اليمنى
}

export interface TestimonialData {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
  backgroundImageUrl: string; // الإضافة الجديدة: صورة الخلفية للغرفة
  rating: number;
}