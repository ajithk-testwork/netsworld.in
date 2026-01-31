import React, { useState, useRef } from 'react';
import { ChevronsLeftRight, XCircle, CheckCircle2 } from 'lucide-react';
import slideImage from "../assets/slideImg.jpg"; 

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header - Scaled down for better flow */}
        <div className="text-center mb-10">
          <span className="text-[#0F766E] font-bold tracking-widest uppercase text-[10px] bg-[#0F766E]/10 px-3 py-1.5 rounded-full">
            Visual Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#022C22] mt-4 tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            The Invisible Shield<span className="text-[#0F766E]">.</span>
          </h2>
        </div>

        {/* Slider Container - Size decreased for better user experience */}
        <div 
          ref={containerRef}
          className="relative w-full h-[350px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl cursor-col-resize group select-none touch-none border-4 border-white ring-1 ring-gray-100"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* AFTER IMAGE (Invisible side) */}
          <div className="absolute inset-0 bg-gray-50">
            <img
              src={slideImage}
              alt="Invisible Shield View"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* BEFORE IMAGE (Mesh side) */}
          <div 
             className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-10"
             style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={slideImage}
              alt="Old Mesh View"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.8) contrast(1.1)' }}
            />
            
            {/* Grid Pattern Effect */}
            <div 
              className="absolute inset-0 w-full h-full opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0,0,0,0.6) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0,0,0,0.6) 1px, transparent 1px)
                `,
                backgroundSize: '4px 4px' 
              }}
            ></div>
          </div>

          {/* Updated Handle - Smaller and cleaner */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
              <ChevronsLeftRight className="text-[#022C22]" size={20} />
            </div>
          </div>

          {/* Label: Old Mesh - Styled like your reference image */}
          <div 
            className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md z-20 border border-gray-100 transition-all duration-500"
            style={{ opacity: sliderPosition < 15 ? 0 : 1 }}
          >
            <div className="bg-red-50 p-1 rounded-full">
              <XCircle className="text-red-500" size={16} />
            </div>
            <span className="font-bold text-[#022C22] text-xs">Old Mesh</span>
          </div>

          {/* Label: Invisible Shield - Styled like your reference image */}
          <div 
            className="absolute bottom-6 right-6 bg-[#052621] px-4 py-2 rounded-full flex items-center gap-2 shadow-md z-20 transition-all duration-500 border border-white/10"
            style={{ opacity: sliderPosition > 85 ? 0 : 1 }}
          >
            <span className="font-bold text-white text-xs">Invisible Shield</span>
            <div className="bg-yellow-400 p-0.5 rounded-full">
              <CheckCircle2 className="text-[#052621]" size={14} strokeWidth={3} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;