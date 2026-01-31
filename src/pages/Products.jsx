import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import image1 from "../assets/product5.jpg";
import image2 from "../assets/product9.jpg";
import image3 from "../assets/product6.jpg";
import image4 from "../assets/product7.jpg";
import image5 from "../assets/product8.jpg";

const products = [
  {
    id: 1,
    tag: 'Best Seller',
    category: 'Main Door Systems',
    description: 'Protect your main entrance without blocking the breeze. Our heavy-duty retractable door nets glide smoothly and disappear into a slim cassette when not in use.',
    image: image1, // REMOVED CURLY BRACES
    features: ['Zero-Threshold (No Tripping)', 'Impact Resistant Mesh', 'Child-Safe Lock']
  },
  {
    id: 2,
    tag: 'Most Popular',
    category: 'Invisible Window Grills',
    description: 'Fits directly onto existing window frames. Virtually invisible from 5 feet away.',
    image: image2, // REMOVED CURLY BRACES
    features: ['Fiberglass Mesh', 'Washable', 'Custom Colors']
  },
  {
    id: 3,
    tag: 'Balcony Special',
    category: 'Balcony & Patio Enclosures',
    description: 'Turn your balcony into a safe, bug-free zone for your morning coffee. Our high-tension systems cover large open spaces without sagging.',
    image: image3, // REMOVED CURLY BRACES
    features: ['Weather Proof (Monsoon Safe)', 'Bird Protection', 'UV Resistant']
  },
  {
    id: 4,
    tag: 'Luxury',
    category: 'Pleated Sliding Mesh',
    description: 'Add a touch of elegance with our zigzag pleated mesh. It folds neatly to the side, taking up minimal space while offering a unique modern look.',
    image: image4, // REMOVED CURLY BRACES
    features: ['Smooth Sliding', 'Dust Repellent', 'Decorative Look']
  },
  {
    id: 5,
    tag: 'Tech',
    category: 'Motorised Automation',
    description: 'Control your environment with the touch of a button. Our motorised roller screens integrate with smart home systems for ultimate convenience.',
    image: image5, // REMOVED CURLY BRACES
    features: ['Remote Control', 'Alexa/Google Compatible', 'Silent Motor']
  }
];


const Products = () => {
  return (
    <section className="min-h-screen bg-gray-50 font-sans text-[#022C22] py-24 px-6 md:px-12">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20 pt-16">
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
          <ShieldCheck size={16} className="text-[#0F766E]" />
          <span className="text-[#0F766E] text-xs font-bold tracking-widest uppercase">
            Premium Collection
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Tailored for every <span className="text-[#0F766E]">home.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore our range of custom-fit mosquito shields. Designed to blend in, built to last.
        </p>
      </div>

      {/* HORIZONTAL CARD LIST */}
      <div className="max-w-6xl mx-auto space-y-16">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            
            {/* IMAGE SIDE */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
                <img 
                  src={product.image} 
                  alt={product.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#022C22]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-[#0F766E] shadow-lg flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> {product.tag}
                </div>
              </div>
              
              {/* Decorative blob behind image */}
              <div className={`absolute -z-10 top-10 ${index % 2 !== 0 ? '-right-10' : '-left-10'} w-full h-full bg-[#F0FDFA] rounded-3xl -rotate-3`}></div>
            </div>

            {/* CONTENT SIDE */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{product.category}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-[#0F766E]">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 text-[#0F766E] font-bold text-lg group hover:gap-4 transition-all">
                Learn More <ArrowRight size={20} />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Products;