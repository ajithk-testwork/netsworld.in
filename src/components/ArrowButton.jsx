import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ArrowButton = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Scroll Progress (0 to 100)
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // 2. Logic to Show/Hide Buttons
      if (totalScroll > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }

      if ((window.innerHeight + totalScroll) >= document.documentElement.scrollHeight - 50) {
        setShowBottom(false);
      } else {
        setShowBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  // Calculate Dash Offset for SVG Circle
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - scrollProgress * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
      
      {/* === SCROLL TO TOP BUTTON (With Progress Ring) === */}
      <div 
        className={`relative transition-all duration-500 transform ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        {/* SVG Progress Ring */}
        <svg className="transform -rotate-90 w-14 h-14 absolute -top-[5px] -left-[5px] pointer-events-none">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-[#0F766E] transition-all duration-100 ease-out"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>

        <button
          onClick={scrollToTop}
          className="relative z-10 cursor-pointer w-12 h-12 bg-white/80 backdrop-blur-md text-[#022C22] rounded-full shadow-lg shadow-teal-900/20 flex items-center justify-center border border-white hover:bg-[#0F766E] hover:text-white hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* === SCROLL TO BOTTOM BUTTON (Glassmorphism & Pulse) === */}
      <button
        onClick={scrollToBottom}
        className={`w-12 h-12 bg-[#022C22]/90 backdrop-blur-md cursor-pointer text-[#FACC15] rounded-full shadow-xl shadow-teal-900/30 flex items-center justify-center hover:bg-[#0F766E] hover:scale-110 transition-all duration-300 transform ${
          showBottom ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to bottom"
      >
        {/* Pulse Effect Behind */}
        <span className="absolute inset-0 rounded-full bg-[#FACC15] opacity-20 animate-ping"></span>
        <ArrowDown size={20} className="relative z-10 animate-bounce-slow" />
      </button>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>

    </div>
  );
};

export default ArrowButton;