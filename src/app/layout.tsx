// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "المنصة الرائعة | الرئيسية",
  description: "تم بناء هذا الموقع باستخدام معمارية Next.js المتقدمة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 
        flex & flex-col & min-h-screen: 
        هذه الكلاسات تضمن أن الـ Footer سيبقى دائماً في أسفل الشاشة حتى لو كان المحتوى قصيراً 
      */}
      <body className="antialiased bg-gray-50 flex flex-col min-h-screen text-gray-900">
        <Navbar />
        
        {/* المحتوى المتغير (مثل صفحة الـ Landing Page أو شاشة التحميل) سيتم عرضه هنا */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}