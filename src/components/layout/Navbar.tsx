import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* الشعار */}
        <div className="text-3xl font-bold tracking-wide">
          <Link href="/">AbdCode</Link>
        </div>

        {/* روابط المنتصف */}
        <div className="hidden md:flex items-center gap-12 text-sm font-medium">
          <div className="relative group py-2">
  {/* الزر الرئيسي */}
  <button className="hover:text-gray-300 transition flex items-center gap-1 cursor-pointer">
    Furniture
    {/* السهم يدور عند تمرير الماوس */}
    <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  </button>

  {/* القائمة المنسدلة (مخفية افتراضياً وتظهر عند تمرير الماوس) */}
  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
    <ul className="py-2 text-sm font-medium text-gray-600">
      <li>
        <Link href="/shop" className="block px-5 py-2.5 hover:bg-orange-50 hover:text-orange-500 transition-colors">
          Chairs
        </Link>
      </li>
      <li>
        <Link href="/shop" className="block px-5 py-2.5 hover:bg-orange-50 hover:text-orange-500 transition-colors">
          Beds
        </Link>
      </li>
      <li>
        <Link href="/shop" className="block px-5 py-2.5 hover:bg-orange-50 hover:text-orange-500 transition-colors">
          Sofas
        </Link>
      </li>
      <li>
        <Link href="/shop" className="block px-5 py-2.5 hover:bg-orange-50 hover:text-orange-500 transition-colors">
          Lamps
        </Link>
      </li>
    </ul>
  </div>
</div>
          <Link href="/shop" className="hover:text-gray-300 transition">Shop</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About Us</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </div>

        {/* أيقونة السلة (Cart) */}
        <div className="relative cursor-pointer">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            0
          </span>
        </div>
      </div>
    </nav>
  );
};