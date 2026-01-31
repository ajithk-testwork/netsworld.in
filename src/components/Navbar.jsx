import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // New state for Popup
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isSolid = !isHome || scrolled;

  // --- SCROLL LOGIC ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- HELPER: SCROLL TO TOP & CLOSE MENU ---
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // --- STYLES ---
  const navTextColor = isSolid ? 'text-[#022C22]' : 'text-white';
  const navHoverColor = isSolid ? 'hover:text-[#0F766E]' : 'hover:text-teal-300';
  const logoMainColor = isSolid ? 'text-[#0F766E]' : 'text-white';
  const logoSubColor = isSolid ? 'text-[#022C22]' : 'text-gray-300';
  const burgerColor = isSolid ? 'text-[#022C22] bg-gray-100' : 'text-white bg-white/20';
  const ctaBtnStyle = isSolid 
    ? 'bg-[#0F766E] text-white hover:bg-[#0D625B]' 
    : 'bg-white text-[#0F766E] hover:bg-gray-100';

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ease-in-out ${
          isSolid 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* === LOGO === */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group select-none"
            onClick={handleNavClick}
          >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');`}</style>

            <div className="flex flex-col items-start justify-center">
              <div className="relative flex items-baseline leading-none">
                <span 
                  className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-500 ${logoMainColor}`}
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  NETS<span className={logoSubColor}>WORLD</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FACC15] ml-1 mb-1 shadow-sm animate-pulse"></span>
              </div>
              <span 
                className={`text-[10px] font-bold uppercase tracking-[0.3em] pl-0.5 transition-colors duration-500 ${logoSubColor}`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Insect Screens
              </span>
            </div>
          </Link>

          {/* === DESKTOP LINKS === */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} 
                onClick={handleNavClick}
                className={`${navTextColor} font-medium text-sm tracking-wide ${navHoverColor} transition-colors relative group`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isSolid ? 'bg-[#0F766E]' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* === CTA BUTTON === */}
          <div className="hidden md:block">
            <button 
              onClick={() => setShowPopup(true)} // Open Popup
              className={`px-6 py-3 cursor-pointer rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg ${ctaBtnStyle}`}
            >
              Get a Free Quote
            </button>
          </div>

          {/* === MOBILE BURGER === */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg backdrop-blur-md transition-colors ${burgerColor}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* === MOBILE MENU === */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4 md:hidden">
            {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-lg font-medium text-[#022C22] py-2 border-b border-gray-50"
                onClick={handleNavClick}
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); setShowPopup(true); }} 
              className="w-full bg-[#0F766E] text-white py-3 rounded-xl font-bold mt-2"
            >
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* === INTEGRATED QUOTE POPUP === */}
     {showPopup && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
    {/* Animated Backdrop */}
    <div 
      className="absolute inset-0 bg-[#022C22]/80 backdrop-blur-md transition-opacity duration-500"
      onClick={() => setShowPopup(false)}
    ></div>

    {/* Modal Box */}
    <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
      
      {/* Visual Accent Sidebar (Desktop only) */}
      <div className="hidden md:flex w-1/3 bg-[#0F766E] p-8 flex-col justify-between text-white">
        <div>
          <div className="w-12 h-1 w-full bg-yellow-400 mb-4 rounded-full"></div>
          <h3 className="text-xl font-bold leading-tight">Expert Protection.</h3>
        </div>
        <p className="text-xs text-teal-100 opacity-80">
          Trusted by 5000+ homeowners for premium insect screen solutions.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 sm:p-10">
        {/* Close Icon */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-5 right-5 p-2 rounded-xl hover:bg-gray-100 transition-all text-gray-400 hover:text-red-500 group"
        >
          <X size={22} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-black text-[#022C22] tracking-tight mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Get a Quote<span className="text-[#0F766E]">.</span>
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Complete the form and our specialist will contact you shortly.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1 ml-1 group-focus-within:text-[#0F766E] transition-colors">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="e.g. Alex Johnson" 
              className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-[#0F766E] focus:bg-white transition-all text-gray-700"
            />
          </div>

          {/* Phone Input */}
          <div className="group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1 ml-1 group-focus-within:text-[#0F766E] transition-colors">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              className="w-full px-5 py-3.5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-[#0F766E] focus:bg-white transition-all text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="group relative w-full bg-[#022C22] hover:bg-[#0F766E] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-teal-900/10 flex items-center justify-center gap-2 overflow-hidden"
            onClick={() => {
              // Add your submit logic here
              setShowPopup(false);
            }}
          >
            <span className="relative z-10">Send My Request</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-[#0F766E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          <p className="text-[10px] text-center text-gray-400 pt-2">
            By clicking submit, you agree to our <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </form>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;