import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* خلفية داكنة علوية */}
      <div className="bg-[#1e1e1e] h-32 w-full absolute top-0 left-0 z-0"></div>
      
      <div className="flex-grow max-w-7xl mx-auto px-6 w-full relative z-10 pt-48 pb-24 flex flex-col lg:flex-row gap-16">
        
        {/* معلومات التواصل */}
        <div className="lg:w-1/2">
          <p className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
          <h1 className="text-4xl font-bold text-[#1e1e1e] mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Have a question about our products, shipping, or returns? We're here to help! Fill out the form and our team will get back to you as soon as possible.
          </p>
          
          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">support@panto.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+1 (234) 567-890</p>
              </div>
            </div>
          </div>
        </div>

        {/* نموذج المراسلة */}
        <div className="lg:w-1/2 bg-white border border-gray-100 p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
          <form className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-orange-500 focus:outline-none transition-all" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-orange-500 focus:outline-none transition-all" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={5} className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-orange-500 focus:outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-xl transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>

      </div>
      
      
    </main>
  );
}