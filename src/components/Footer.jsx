import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  
  // Helper to ensure page opens at the top when navigating from footer
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#022C22] text-white pt-20 pb-10 border-t border-teal-900/50 font-sans relative overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F766E]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info (Matched to Navbar) */}
          <div className="space-y-6">
            <Link to="/" onClick={handleScrollTop} className="group select-none block">
              <style>{`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');`}</style>
              
              {/* LOGO RECREATED */}
              <div className="flex flex-col items-start justify-center">
                <div className="relative flex items-baseline leading-none">
                  <span 
                    className="text-3xl font-black tracking-tighter text-white"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    NETS<span className="text-gray-400">WORLD</span>
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FACC15] ml-1 mb-1 shadow-sm"></span>
                </div>
                <span 
                  className="text-[10px] font-bold uppercase tracking-[0.3em] pl-0.5 text-gray-400"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Insect Screens
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium invisible mosquito protection for modern homes. Breathable, durable, and designed to blend seamlessly with your architecture.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0F766E] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    onClick={handleScrollTop}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#FACC15] hover:pl-2 transition-all duration-300 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 transition-all text-[#FACC15]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              {['Main Door Systems', 'Invisible Window Grills', 'Balcony Enclosures', 'Pleated Mesh', 'Motorised Automation'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products"
                    onClick={handleScrollTop}
                    className="block text-gray-400 hover:text-white hover:underline decoration-[#FACC15] underline-offset-4 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Get in Touch
            </h3>
            <ul className="space-y-5 text-sm mb-8">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-[#0F766E] mt-0.5 shrink-0" />
                <span>Shop No. 148, Gandhi street, Mookamika Nagar<br />Chennai - 600122, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-[#0F766E] shrink-0" />
                <span className="text-white font-semibold">+91 91768 31815</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-[#0F766E] shrink-0" />
                <a href="mailto:hello@netsworld.in" className="hover:text-white transition-colors">
                  netsworldoffcial@gmail.com
                </a>
              </li>
            </ul>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919176831815" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-green-900/20 hover:-translate-y-1 group"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Nets World Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" onClick={handleScrollTop} className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={handleScrollTop} className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" onClick={handleScrollTop} className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;