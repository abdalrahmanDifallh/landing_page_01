// src/app/page.tsx
import { getLandingPageData } from "@/services/landing.service";
import { HeroSection } from "@/features/landing/components/HeroSection";
import { WhyChooseUsSection } from "@/features/landing/components/WhyChooseUsSection";
import { BestSellingSection } from "@/features/landing/components/BestSellingSection"; 
import { ExperienceSection } from "@/features/landing/components/ExperienceSection"; 
import { MaterialsSection } from "@/features/landing/components/MaterialsSection"; // الاستيراد
import { TestimonialsSection } from "@/features/landing/components/TestimonialsSection";
export default async function Home() {
  // 1. جلب البيانات من الـ Service (محاكاة الـ API)
  const landingData = await getLandingPageData();

  // 2. تمرير البيانات إلى المكونات
  return (
    <main className="min-h-screen bg-white" >
      <HeroSection data={landingData.hero} />
      <WhyChooseUsSection features={landingData.whyChooseUs} />
      <BestSellingSection 
        categories={landingData.categories} 
        products={landingData.bestSelling} 
      />
      <ExperienceSection data={landingData.experience} />
      <MaterialsSection data={landingData.materials} />
      <TestimonialsSection testimonials={landingData.testimonials} />
    </main>
  );
}