import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Star, 
  X, 
  Loader2, 
  CheckCircle2, 
  Menu, 
  User, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import hero from "../assets/hero.jpg"



const QuoteModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSuccess(true); }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:items-center md:justify-center p-0 md:p-6 font-sans">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#022C22]/80 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-5xl md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row animate-scale-up z-10 h-full md:h-auto overflow-y-auto md:overflow-hidden">
        
        {/* MOBILE STICKY CLOSE BUTTON */}
        <div className="sticky top-0 right-0 flex justify-end p-4 z-50 md:absolute md:top-6 md:right-6 bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <button 
            onClick={onClose} 
            className="p-2 bg-white md:bg-white/80 border border-gray-100 shadow-md md:border-none md:shadow-none hover:bg-gray-100 rounded-full transition-all duration-200 group"
          >
            <X size={24} className="text-gray-500 group-hover:text-red-500 transition-colors"/>
          </button>
        </div>

        {/* LEFT SIDE (Visual Sidebar) */}
        <div className="w-full md:w-5/12 relative bg-[#0F766E] min-h-[180px] md:min-h-full shrink-0">
          <img src={hero} className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-50" alt="Interior"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#0F766E]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white z-10 w-full">
            <div className="flex items-center gap-2 mb-2 md:mb-4 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
              <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}</div>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-90">Premium Service</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-1 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Invisible Protection.
            </h3>
            <p className="hidden md:block text-teal-100 text-sm leading-relaxed opacity-90">
              Join 10,000+ homeowners who chose modern luxury.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="flex-1 p-6 md:p-12 bg-white">
          {!success ? (
            <div className="animate-fade-in max-w-lg mx-auto md:max-w-none">
              <div className="mb-6 md:mb-8">
                <span className="text-[10px] md:text-xs font-bold text-[#0F766E] tracking-widest uppercase mb-1 block">Free Site Measurement</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#022C22]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get your quote</h2>
                <p className="text-gray-400 text-sm mt-1">Fast callback. Zero hidden charges.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0F766E]"><User size={18} /></div>
                  <input required type="text" placeholder="Full Name" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0F766E]/20 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0F766E]"><Phone size={18} /></div>
                    <input required type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0F766E]/20 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"/>
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0F766E]"><Mail size={18} /></div>
                    <input required type="email" placeholder="Email Address" className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0F766E]/20 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-4 outline-none transition-all font-medium text-gray-700 placeholder:text-gray-400"/>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0F766E] transition-colors"><MapPin size={18} /></div>
                  <select className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0F766E]/20 rounded-xl md:rounded-2xl py-3 md:py-4 pl-12 pr-10 outline-none transition-all font-medium text-gray-700 cursor-pointer appearance-none">
                    <option value="" disabled selected>Select Product</option>
                    <option>Main Door System</option>
                    <option>Invisible Grill</option>
                    <option>Balcony Enclosure</option>
                    <option>Pleated Mesh</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ArrowRight size={16} className="rotate-90"/>
                  </div>
                </div>

                <button 
                  disabled={loading} 
                  className="w-full bg-[#052621] hover:bg-[#0F766E] text-white py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <>Book Site Visit <ArrowRight size={20}/></>}
                </button>
                <p className="text-center text-[10px] text-gray-400">*Professional team will contact you in 24h.</p>
              </form>
            </div>
          ) : (
            <div className="py-12 md:h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 border border-green-100">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#022C22] mb-3">Request Received!</h3>
              <p className="text-gray-500 mb-8 max-w-xs mx-auto">We'll call you shortly to schedule your free measurement.</p>
              <button onClick={onClose} className="w-full md:w-auto px-10 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all">Done</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isQuoteOpen ? 'hidden' : 'unset';
  }, [isQuoteOpen]);

  return (
    <>
      

      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        
        
        <div className="absolute inset-0 z-0">
          <img src={hero} alt="Modern Minimalist Interior" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

       
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 pt-20">
          
          {/* LEFT TEXT */}
          <div className="w-full md:w-3/5 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-sm">
              <ShieldCheck size={16} className="text-teal-400" />
              <span className="text-xs font-bold tracking-widest text-white uppercase">Invisible Protection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
              Keep the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">View.</span> <br />
              Block the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">Bugs.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed font-medium">Enjoy 100% airflow and zero mosquitoes with our premium invisible grills. Designed for modern luxury homes.</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="group cursor-pointer relative px-8 py-4 bg-[#0F766E] text-white rounded-full font-bold text-lg shadow-lg shadow-teal-900/50 hover:bg-[#0D625B] hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden">
                <span className="relative z-10">Book Free Visit</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">{[1,2,3,4].map(i => (<img key={i} className="w-10 h-10 rounded-full border-2 border-gray-800" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />))}</div>
              <div className="text-sm font-semibold text-gray-300">
                <div className="flex text-yellow-400 mb-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}</div>
                Trusted by 500+ Owners
              </div>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="hidden md:block w-2/5 relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-500/30 rounded-full filter blur-[80px] animate-pulse"></div>
             <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
               <div className="flex justify-between items-start mb-6">
                 <div>
                   <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Current Status</p>
                   <h3 className="text-2xl font-bold text-white">Mosquito Free</h3>
                 </div>
                 <div className="bg-teal-500/20 p-2 rounded-full text-teal-400"><ShieldCheck size={24} /></div>
               </div>
               <div className="space-y-4">
                 {['High Visibility', 'Rust Proof Mesh', 'Child Safe'].map((feat, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10"><CheckCircle2 size={16} className="text-teal-400" /></div>
                     <span className="font-medium text-gray-200">{feat}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-60">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"><div className="w-1 h-2 bg-white rounded-full"></div></div>
        </div>
      </section>

      {isQuoteOpen && <QuoteModal onClose={() => setIsQuoteOpen(false)} />}
      
      <style>{`
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-up { animation: scaleUp 0.3s ease-out forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Hero;