import React from 'react';
import { ShieldCheck, Wind, Home, Wrench, CheckCircle2 } from 'lucide-react';
import Image from "../assets/whyUs2.jpg";
 
const WhyUs = () => {
  const features = [
    {
      id: 1,
      icon: <ShieldCheck size={28} />,
      title: "100% Mosquito Proof",
      desc: "Micro-mesh technology so fine, not even the smallest insects can pass through."
    },
    {
      id: 2,
      icon: <Wind size={28} />,
      title: "Unblocked Airflow",
      desc: "Enjoy the evening breeze. Our nets allow 90% natural air circulation."
    },
    {
      id: 3,
      icon: <Home size={28} />,
      title: "Invisible Aesthetics",
      desc: "Designed to disappear. It blends perfectly with your window frames."
    },
    {
      id: 4,
      icon: <Wrench size={28} />,
      title: "Zero-Mess Installation",
      desc: "No drilling dust, no noise. Our team installs a full home in under 2 hours."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
         
          <div className="relative order-2 lg:order-1">
            
           
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/10 border-8 border-white z-10">
              <img 
                src={Image} 
                alt="Modern safe home" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#022C22]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl text-white">
                  <p className="font-bold text-2xl mb-1">5 Year Warranty</p>
                  <p className="text-teal-50 text-sm opacity-90">On all mesh and frames. No questions asked.</p>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-12 -left-12 w-64 h-64 opacity-30">
               <div className="grid grid-cols-6 gap-4">
                 {[...Array(36)].map((_, i) => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"></div>
                 ))}
               </div>
            </div>
            
            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#FACC15]/20 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 lg:order-2">
            
            <div className="mb-10">
              <span className="text-[#0F766E] font-bold tracking-wider uppercase text-sm bg-teal-50 px-3 py-1 rounded-full">
                The NetsWorld Standard
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#022C22] mt-4 leading-tight">
                Designed for the <br/>
                <span className="relative inline-block">
                  Modern Home
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FACC15]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101.5 0.999986 198 2.49999" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                </span>
              </h2>
              <p className="text-gray-500 mt-6 text-lg">
                We re-engineered the mosquito net to be invisible, durable, and breathable. It’s protection you can’t see, but you’ll definitely feel.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((item) => (
                <div 
                  key={item.id} 
                  className="group flex gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-[#F0FDFA] hover:shadow-lg hover:shadow-teal-900/5 cursor-default border border-transparent hover:border-teal-100"
                >
                  <div className="shrink-0 w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-[#022C22] mb-1 flex items-center gap-2">
                      {item.title}
                      <CheckCircle2 size={18} className="text-[#FACC15] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-gray-500 leading-relaxed group-hover:text-teal-800/80 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;