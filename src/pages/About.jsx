import React from 'react';
import { Shield, Users, Award, Target, Microscope, Leaf, Wind, Quote } from 'lucide-react';
import image1 from "../assets/aboutImg1.jpg";
import image2 from "../assets/aboutImg2.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-white font-sans text-[#022C22] overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-50/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-28">
          <div className="inline-flex items-center gap-2 bg-white border border-teal-100 px-5 py-2 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0F766E]"></span>
            </span>
            <span className="text-[#0F766E] text-xs font-bold tracking-[0.2em] uppercase">
              Est. 2015 • Chennai
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Safety should be <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#2DD4BF]">
              felt, not seen.
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
            NetsWorld started with a simple frustration: why do safety solutions have to be ugly? We engineer mosquito protection that honors your architecture while providing an impenetrable barrier.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 w-4/5">
              <img 
                src={image1}
                alt="Modern Architecture" 
                className="rounded-[2.5rem] shadow-2xl shadow-teal-900/20 border-4 border-white rotate-[-3deg] hover:rotate-0 transition-all duration-700 aspect-square object-cover"
              />
            </div>
            <div className="absolute top-1/4 right-0 w-3/5 z-20">
              <img 
                src={image2}
                alt="Luxury Interior View" 
                className="rounded-[2.5rem] shadow-2xl shadow-black/20 border-4 border-white rotate-[3deg] hover:rotate-0 transition-all duration-700 aspect-[4/5] object-cover" 
              />
            </div>
            
            <div className="absolute -bottom-6 left-10 z-30 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="bg-[#FACC15] p-3 rounded-full text-[#022C22]">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-extrabold text-2xl text-[#022C22]">10+</p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Years of R&D</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Core Principles</h3>
              <p className="text-gray-500">Built on a foundation of engineering excellence and customer obsession.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Safety First", desc: "Aerospace-grade T6 aluminum & high-tension mesh." },
                { icon: Target, title: "Zero Gaps", desc: "Laser-measured frames for a hermetic 100% seal." },
                { icon: Users, title: "White Glove", desc: "Uniformed staff, shoe covers, and dust-free drilling." },
                { icon: Leaf, title: "Eco Friendly", desc: "100% recyclable materials and PVC-free production." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-100 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] mb-4 group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-[#022C22]">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="bg-[#022C22] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E] rounded-full blur-[100px] opacity-50"></div>
            
            <div className="relative z-10 text-center mb-16">
              <span className="text-[#FACC15] font-bold tracking-widest uppercase text-sm mb-2 block">Innovation</span>
              <h3 className="text-3xl md:text-4xl font-extrabold">The Science of Invisibility</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300">
                <Microscope className="text-[#FACC15] mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3">0.2mm Nano-Fiber</h4>
                <p className="text-teal-100/80 text-sm leading-relaxed">
                  Thinner than a human hair but stronger than steel. Our fiber vanishes against the light.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300">
                <Wind className="text-[#FACC15] mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3">Hi-Flow Weave</h4>
                <p className="text-teal-100/80 text-sm leading-relaxed">
                  Hexagonal weave allows <span className="text-white font-bold">94% airflow</span>, keeping your home naturally cool.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300">
                <Award className="text-[#FACC15] mb-6" size={32} />
                <h4 className="text-xl font-bold mb-3">Weather Shield</h4>
                <p className="text-teal-100/80 text-sm leading-relaxed">
                  Hydrophobic coating repels dust and rain. Self-cleaning technology for easy maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24 flex flex-col items-center text-center">
           <div className="bg-teal-50 p-4 rounded-full mb-6 text-[#0F766E]">
             <Quote size={32} fill="currentColor" />
           </div>
           <blockquote className="max-w-4xl mx-auto">
             <p className="text-3xl md:text-4xl font-medium leading-tight text-[#022C22] mb-10 font-serif">
               "We realized people didn't hate nets; they hated how nets <span className="italic text-[#0F766E]">looked</span>. Our job was to make protection disappear, so you can enjoy the sunset without the bite."
             </p>
           </blockquote>
        </div>

        <div className="border-y border-gray-100 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center md:divide-x md:divide-gray-100">
            {[
              { num: '15k+', label: 'Windows Secured' },
              { num: '24h', label: 'Install Time' },
              { num: '12', label: 'Cities Covered' },
              { num: '4.9', label: 'Google Rating' }
            ].map((stat, idx) => (
              <div key={idx} className={idx === 3 ? "border-none" : ""}>
                <p className="text-4xl md:text-5xl font-extrabold text-[#022C22] mb-2">{stat.num}</p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;