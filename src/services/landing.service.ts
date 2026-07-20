// src/services/landing.service.ts
import { LandingPageResponse } from "../types/landing.types";

export const getLandingPageData = async (): Promise<LandingPageResponse> => {
  // محاكاة تأخير الشبكة (API Latency) لمدة 800 جزء من الثانية
  await new Promise((resolve) => setTimeout(resolve, 800));

  // إرجاع البيانات الوهمية (Mock Data) المطابقة للـ Type
  return {
    // تحديث كائن hero فقط داخل دالة getLandingPageData
    hero: {
      title: "Make Your Interior More Minimalistic & Modern",
      subtitle:
        "Turn your room with panto into a lot more minimalist and modern with ease and speed",
      searchPlaceholder: "Search furniture",
    },
    // أضف المصفوفة التالية داخل الكائن المُرجع (return)
    whyChooseUs: [
      {
        id: "1",
        title: "Luxury facilities",
        description:
          "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
        linkText: "More Info",
        linkUrl: "#",
      },
      {
        id: "2",
        title: "Affordable Price",
        description:
          "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
        linkText: "More Info",
        linkUrl: "#",
      },
      {
        id: "3",
        title: "Many Choices",
        description:
          "We provide many unique work space choices so that you can choose the workspace to your liking.",
        linkText: "More Info",
        linkUrl: "#",
      },
    ],
    // أضف هذه البيانات داخل كائن الإرجاع (return) في دالة getLandingPageData
  categories: ["Chair", "Beds", "Sofa", "Lamp"],
  // src/services/landing.service.ts
bestSelling: [
  { id: "1", category: "Chair", title: "Sakarias Armchair", price: 392, rating: 5, imageUrl: "/chair-1.jpg" },
  { id: "2", category: "Chair", title: "Baltsar Chair", price: 299, rating: 5, imageUrl: "/chair-2.png" },
  { id: "3", category: "Chair", title: "Anjay Chair", price: 519, rating: 5, imageUrl: "/chair-2.png" },
  { id: "4", category: "Chair", title: "Nyantuy Chair", price: 921, rating: 5, imageUrl: "/chair-3.png" },
  { id: "5", category: "Chair", title: "Woody Chair", price: 210, rating: 4, imageUrl: "/chair-4.png" }, // منتج إضافي لتفعيل التمرير
  { id: "6", category: "Chair", title: "Classic Chair", price: 310, rating: 5, imageUrl: "/chair-2.png" }, // منتج إضافي لتفعيل التمرير
  { id: "7", category: "Sofa", title: "Modern Comfort Sofa", price: 1200, rating: 4, imageUrl: "/chair-2.png" },
  { id: "8", category: "Beds", title: "King Size Bed", price: 899, rating: 5, imageUrl: "/chair-2.png" },
  { id: "9", category: "Lamp", title: "Minimalist Lamp", price: 120, rating: 4, imageUrl: "/chair-2.png" }
],
// أضف هذا الكائن داخل كائن الإرجاع (return)
experience: {
  subtitle: "EXPERIENCES",
  title: "We Provide You The Best Experience",
  description: "You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials",
  linkText: "More Info",
  linkUrl: "#",
  imageUrl: "/experience.PNG",
},
// أضف هذا الكائن داخل كائن الإرجاع (return)
materials: {
  subtitle: "MATERIALS",
  title: "Very Serious Materials For Making Furniture",
  description: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
  linkText: "More Info",
  linkUrl: "#",
  image1Url: "/material-1.PNG", 
  image2Url: "/material-2.PNG", 
  image3Url: "/material-3.PNG", 
},

testimonials: [
  {
    id: "1", name: "Bang Upin", role: "Pedagang Asongan",
    content: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    avatarUrl: "https://i.pravatar.cc/150?u=12", backgroundImageUrl: "/testi-bg-1.jpg", rating: 5,
  },
  {
    id: "2", name: "Ibuk Sukijan", role: "Ibu Rumah Tangga",
    content: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    avatarUrl: "https://i.pravatar.cc/150?u=33", backgroundImageUrl: "/testi-bg-2.jpg", rating: 4,
  },
  {
    id: "3", name: "Mpok Ina", role: "Karyawan Swasta",
    content: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    avatarUrl: "https://i.pravatar.cc/150?u=25", backgroundImageUrl: "/testi-bg-3.jpg", rating: 5,
  },
  {
    id: "4", name: "Ahmad Doe", role: "Designer",
    content: "Pengalaman berbelanja furnitur terbaik yang pernah saya rasakan. Kualitas nomor satu!",
    avatarUrl: "https://i.pravatar.cc/150?u=12", backgroundImageUrl: "/testi-bg-1.jpg", rating: 5,
  },
  {
    id: "5", name: "Sarah Lee", role: "Architect",
    content: "Panto makes finding minimal and modern furniture so easy. Highly recommended!",
    avatarUrl: "https://i.pravatar.cc/150?u=25", backgroundImageUrl: "/testi-bg-2.jpg", rating: 4,
  },
  {
    id: "6", name: "John Smith", role: "Developer",
    content: "Great quality materials and very affordable prices compared to other brands.",
    avatarUrl: "https://i.pravatar.cc/150?u=33", backgroundImageUrl: "/testi-bg-3.jpg", rating: 5,
  }
],

  };
};
