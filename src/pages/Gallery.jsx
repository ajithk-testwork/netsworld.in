import React from 'react';
import { Camera, ArrowUpRight, Maximize2 } from 'lucide-react';

import door1 from "../assets/Gallery/door1.jpg";
import door2 from "../assets/Gallery/door2.jpg";
import door3 from "../assets/Gallery/door3.jpg";
import door4 from "../assets/Gallery/door4.jpg";
import door5 from "../assets/Gallery/door5.jpg";
import door6 from "../assets/Gallery/door6.jpg";
import window1 from "../assets/Gallery/window1.jpg";
import window2 from "../assets/Gallery/window2.jpg";
import window3 from "../assets/Gallery/window3.jpg";
import window4 from "../assets/Gallery/window4.jpg";
import window5 from "../assets/Gallery/window5.jpg";
import window6 from "../assets/Gallery/window6.jpg";
import slider1 from "../assets/Gallery/slider1.jpg";
import slider2 from "../assets/Gallery/slider2.jpg";
import slider3 from "../assets/Gallery/slider3.jpg";
import slider4 from "../assets/Gallery/slider4.jpg";

const Gallery = () => {

  const windowImages = [window1, window2, window3, window4, window5, window6];
  const doorImages = [door1, door2, door3, door4, door5, door6];
  const sliderImages = [slider1, slider2, slider3, slider4];

  const GalleryCard = ({ src, category, index }) => (
    <div className="group relative h-80 w-full overflow-hidden rounded-[1.5rem] bg-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/20">
      
      <img 
        src={src} 
        alt={`${category} ${index + 1}`} 
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <div className="absolute top-4 right-4 translate-x-10 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
          <Maximize2 size={18} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FACC15] mb-1">Project {index + 1}</p>
              <h4 className="text-lg font-bold text-white leading-none">{category}</h4>
            </div>
            <ArrowUpRight className="text-white opacity-80" size={24} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="min-h-screen bg-gray-50 py-24 px-6 md:px-12 font-sans text-[#022C22] relative">
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-24 pt-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full mb-8 shadow-sm animate-fade-in">
          <Camera size={18} className="text-[#0F766E]" />
          <span className="text-[#0F766E] text-xs font-bold tracking-[0.2em] uppercase">
            Installation Gallery
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
          Crafted for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#14B8A6]">Perfection.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          A curated showcase of our finest installations. From sleek modern apartments to traditional villas, see how we blend safety with style.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        
        <div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 border-b border-gray-200 pb-6">
            <span className="text-6xl font-black text-gray-200 leading-none -mb-2">01</span>
            <div>
              <h3 className="text-3xl font-bold text-[#022C22]">Windows</h3>
              <p className="text-gray-500 text-sm">Invisible grills & custom fit screens</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowImages.map((img, idx) => (
              <GalleryCard key={`win-${idx}`} src={img} category="Window Installation" index={idx} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 border-b border-gray-200 pb-6">
            <span className="text-6xl font-black text-gray-200 leading-none -mb-2">02</span>
            <div>
              <h3 className="text-3xl font-bold text-[#022C22]">Doors</h3>
              <p className="text-gray-500 text-sm">Main entrance & balcony doors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorImages.map((img, idx) => (
              <GalleryCard key={`door-${idx}`} src={img} category="Door System" index={idx} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 border-b border-gray-200 pb-6">
            <span className="text-6xl font-black text-gray-200 leading-none -mb-2">03</span>
            <div>
              <h3 className="text-3xl font-bold text-[#022C22]">Sliding Systems</h3>
              <p className="text-gray-500 text-sm">Large span pleated & rolling mesh</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sliderImages.map((img, idx) => (
              <GalleryCard key={`slider-${idx}`} src={img} category="Sliding Mesh" index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Gallery;