
export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* خلفية داكنة علوية لدعم شريط التصفح ذو النصوص البيضاء */}
      <div className="bg-[#1e1e1e] h-32 w-full absolute top-0 left-0 z-0"></div>
      
      <div className="flex-grow max-w-3xl mx-auto px-6 w-full relative z-10 pt-48 pb-24">
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Our Story</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] mb-10">About Panto</h1>
        
        <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
          <p>
            At Panto, we believe that furniture is more than just functional pieces in a room. It is an expression of your style, a foundation for your comfort, and a key element in making a house feel like a home.
          </p>
          <p>
            Our journey started with a simple mission: to provide high-quality, minimalist, and modern furniture that is accessible to everyone. We carefully select our materials and work with passionate designers to bring you pieces that stand the test of time.
          </p>
          <p>
            Whether you are furnishing a new apartment or just looking for that perfect statement chair, our curated collections are designed to inspire and transform your spaces effortlessly.
          </p>
        </div>
      </div>
      
      
    </main>
  );
}