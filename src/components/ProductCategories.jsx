import React from 'react';
import { ArrowRight } from 'lucide-react';
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Window Shields",
      subtitle: "Velcro & Magnetic",
      image: product1,
      desc: "Invisible protection for every window size."
    },
    {
      id: 2,
      title: "Door Systems",
      subtitle: "Sliding & Pleated",
      image: product2,
      desc: "Walk-through freedom without the bugs."
    },
    {
      id: 3,
      title: "Balcony Wrap",
      subtitle: "Full Coverage",
      image: product3,
      desc: "Turn your balcony into a safe lounge."
    },
    {
      id: 4,
      title: "Royal Bed Nets",
      subtitle: "Canopy Style",
      image: product4,
      desc: "Sleep peaceful. Elegant bedroom safety."
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#0F766E] font-bold tracking-wider uppercase text-sm">
              Our Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#022C22] mt-2">
              Protection for every corner.
            </h2>
          </div>
          <button className="hidden md:flex items-center cursor-pointer gap-2 text-[#0F766E] font-bold hover:text-[#0D625B] transition-colors group">
            View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500"
            >
              
              {/* 1. Glow Border Effect (using Ring) */}
              <div className="absolute inset-0 z-20 rounded-3xl border-2 border-transparent group-hover:border-[#FACC15] transition-colors duration-500 pointer-events-none"></div>

              {/* 2. Image Zoom Animation */}
              <div className="absolute inset-0 w-full h-full bg-gray-900">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Gradient Overlay (Dark at bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#022C22] via-[#022C22]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end h-full">
                
                {/* Text that moves up slightly on hover */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-[#022C22] bg-[#FACC15] rounded-full">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-teal-100/80 text-sm mb-4 line-clamp-2">
                    {cat.desc}
                  </p>
                </div>

                {/* 3. CTA Slide-in Animation */}
                <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500 ease-out">
                  <button className="flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                    Explore Details <ArrowRight size={18} className="text-[#FACC15]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button (Only visible on small screens) */}
        <div className="mt-8 md:hidden text-center">
          <button className="bg-white border border-teal-200 text-[#0F766E] px-6 py-3 rounded-xl font-bold shadow-sm w-full">
             View Full Catalog
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;