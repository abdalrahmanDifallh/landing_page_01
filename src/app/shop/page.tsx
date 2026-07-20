import { Footer } from "@/components/layout/Footer";

export default function ShopPage() {
  // بيانات وهمية للمنتجات لعرضها في المتجر
  const products = [
    { id: 1, name: "Sakarias Armchair", price: 392, category: "Chair", img: "/testi-bg-2.jpg" },
    { id: 2, name: "Baltsar Chair", price: 299, category: "Chair", img: "/chair-2.png" },
    { id: 3, name: "Anjay Chair", price: 519, category: "Chair", img: "/chair-3.png" },
    { id: 4, name: "Nyantuy Chair", price: 921, category: "Chair", img: "/chair-4.png" },
    { id: 5, name: "Modern Sofa", price: 1200, category: "Sofa", img: "/testi-bg-3.jpg" },
    { id: 6, name: "King Size Bed", price: 899, category: "Beds", img: "/testi-bg-3.jpg" },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f7f8]">
      {/* خلفية داكنة علوية لدعم شريط التصفح (Navbar) */}
      <div className="bg-[#1e1e1e] h-32 w-full absolute top-0 left-0 z-0"></div>

      <div className="flex-grow max-w-7xl mx-auto px-6 w-full relative z-10 pt-48 pb-24">
        
        {/* عنوان الصفحة */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Products</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e]">Shop Our Collection</h1>
        </div>

        {/* تخطيط المتجر: قسم جانبي للفلاتر + شبكة المنتجات */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* الشريط الجانبي (Sidebar) - الفلاتر */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#1e1e1e] mb-5">Categories</h3>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-orange-500 cursor-pointer" defaultChecked /> Chair
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-orange-500 cursor-pointer" defaultChecked /> Beds
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-orange-500 cursor-pointer" defaultChecked /> Sofa
                  </label>
                </li>
                <li>
                  <label className="flex items-center gap-3 cursor-pointer hover:text-orange-500 transition-colors">
                    <input type="checkbox" className="w-4 h-4 accent-orange-500 cursor-pointer" /> Lamp
                  </label>
                </li>
              </ul>

              <div className="border-t border-gray-100 my-6"></div>

              <h3 className="text-lg font-bold text-[#1e1e1e] mb-5">Price Range</h3>
              <input type="range" className="w-full accent-orange-500" min="0" max="2000" defaultValue="1500" />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>
          </div>

          {/* شبكة المنتجات (Grid) */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-3xl p-6 relative flex flex-col transition-transform hover:-translate-y-2 duration-300 shadow-sm border border-gray-50">
                <div className="h-48 mb-6 bg-gray-50 rounded-2xl flex items-center justify-center p-4">
                  <img 
  src={product.img} 
  alt={product.name} 
  className="max-h-full object-contain drop-shadow-xl" 
/>
                </div>
                
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">{product.category}</div>
                <h3 className="text-lg font-bold text-[#1e1e1e] mb-4">{product.name}</h3>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-xl font-bold text-[#1e1e1e]">
                    <span className="text-sm mr-1">$</span>{product.price}
                  </div>
                  <button className="w-10 h-10 bg-[#0d1b2a] hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      
    </main>
  );
}