import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  CalendarCheck, 
  ArrowRight, 
  X, 
  ShieldCheck, 
  Star, 
  Loader2, 
  CheckCircle2 
} from 'lucide-react';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <section className="py-20 px-6 bg-[#F0FDFA]">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Card Container */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0F766E] to-[#022C22] overflow-hidden shadow-2xl shadow-teal-900/30">
            
            {/* Background Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#99F6E4" />
              </svg>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FACC15] rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#99F6E4] rounded-full blur-[80px] opacity-30"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10 text-center md:text-left">
              
              {/* Left: Text Content */}
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  Still letting mosquitoes inside?
                </h2>
                <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-8">
                  Protect your home today. Get a custom fit that lasts for years, installs in minutes, and keeps your family 100% safe.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* Primary Button - TRIGGERS MODAL */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center cursor-pointer justify-center gap-2 bg-[#FACC15] hover:bg-[#EAB308] text-[#022C22] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-yellow-400/50 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <CalendarCheck size={20} />
                    Book Free Measurement
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Secondary Button */}
                  <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 cursor-pointer">
                    <Phone size={20} />
                    Call: +91 9176831815
                  </button>
                </div>
              </div>

              {/* Right: Visual Element */}
              <div className="hidden lg:block relative">
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 border-4 border-[#99F6E4]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-4 border-4 border-[#FACC15]/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                      <span className="block text-4xl font-bold text-white mb-1">100%</span>
                      <span className="text-teal-200 text-sm uppercase tracking-wider">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Trust Footer */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2">✅ No-Obligation Quote</span>
            <span className="flex items-center gap-2">✅ 5-Year Warranty</span>
            <span className="flex items-center gap-2">✅ ISO 9001 Certified</span>
          </div>

        </div>
      </section>

      {/* ======================================================= */}
      {/* ============= ANIMATED MODAL COMPONENT =============== */}
      {/* ======================================================= */}
      {isModalOpen && <QuoteModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

// --- INTERNAL MODAL COMPONENT ---
const QuoteModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#022C22]/80 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-up flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/40 md:bg-gray-100 hover:bg-white md:hover:bg-gray-200 rounded-full transition-all backdrop-blur-sm cursor-pointer"
        >
          <X size={20} className="text-[#022C22]" />
        </button>

        {/* LEFT SIDE: Image & Brand */}
        <div className="w-full md:w-5/12 relative bg-[#022C22] min-h-[220px] md:min-h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
            alt="Beautiful Home View" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#022C22]"></div>
          
          <div className="absolute bottom-0 left-0 p-8 text-white z-10">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-[#FACC15]" />
              <span className="text-xs font-bold text-teal-100 uppercase tracking-widest">Premium Service</span>
            </div>
            <h3 className="text-3xl font-bold leading-tight mb-2">Upgrade your <br/> lifestyle.</h3>
            <div className="flex text-[#FACC15] mt-4 gap-1">
               {[...Array(5)].map((_,i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="w-full md:w-7/12 bg-white p-8 md:p-12 relative">
          {!success ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-[#022C22] mb-2">Schedule a Visit</h2>
                <p className="text-gray-500">Fast, free, and accurate measurements.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Your Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Phone</label>
                    <input required type="tel" placeholder="+91 987..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">City</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 transition-all cursor-pointer appearance-none">
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Delhi</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <button 
                  disabled={loading}
                  className="w-full bg-[#0F766E] hover:bg-[#0D625B] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-xl shadow-teal-900/10 flex items-center justify-center gap-2 group mt-6 cursor-pointer transform active:scale-95"
                >
                  {loading ? <Loader2 size={24} className="animate-spin" /> : (
                    <>
                      Confirm Booking <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                    </>
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-sm animate-bounce-slow">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-extrabold text-[#022C22] mb-3">Booking Confirmed!</h3>
              <p className="text-gray-500 mb-8 max-w-xs mx-auto text-lg">
                Thank you! Our expert will call you within 2 hours to confirm the time.
              </p>
              <button 
                onClick={onClose}
                className="px-10 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.95) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-scale-up { animation: scaleUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounce-slow { animation: bounce 2s infinite; }
      `}</style>
    </div>
  );
};

export default CallToAction;