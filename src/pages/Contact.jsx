import React from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import image from "../assets/aboutImg1.jpg";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen font-sans text-[#022C22] py-24 px-6 md:px-12 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={image}
          alt="Modern Interior Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#022C22]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#022C22]/50 to-[#022C22]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-16">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <MessageSquare size={16} className="text-[#FACC15]" />
            <span className="text-[#FACC15] text-xs font-bold tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
            Ready to upgrade your <span className="text-[#FACC15]">view?</span>
          </h2>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto">
            Book a free measurement today. Our experts will visit your home, show you samples, and provide an instant quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <div className="space-y-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/10 border border-teal-50 hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] mb-4 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-gray-500 text-sm mb-2">Mon-Sat from 9am to 7pm</p>
                <a href="tel:+919876543210" className="text-[#022C22] font-bold text-lg hover:text-[#0F766E] transition-colors">
                  +91 91768 31815
                </a>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/10 border border-teal-50 hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] mb-4 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Email Support</h4>
                <p className="text-gray-500 text-sm mb-2">We reply within 2 hours</p>
                <a href="mailto:hello@shieldnet.in" className="text-[#022C22] font-bold text-lg hover:text-[#0F766E] transition-colors">
                  netsworldoffcial@gmail.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-xl shadow-black/10 border border-teal-50 hover:-translate-y-1 transition-transform duration-300 group md:col-span-2 flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] shrink-0 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Experience Center</h4>
                  <p className="text-gray-500 text-sm">
                    Shop No. 148, Gandhi street, Mookamika Nagar<br />
                    Chennai - 600122, Tamil Nadu
                  </p>
                </div>
                <div className="md:ml-auto">
                  <button className="text-[#0F766E] font-bold text-sm underline underline-offset-4 hover:text-[#022C22]">
                    Get Directions
                  </button>
                </div>
              </div>

            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white p-8 rounded-3xl relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="font-bold text-xl mb-6">Why book a free visit?</h4>
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#FACC15]" />
                     <span className="text-gray-200">Exact laser measurements (No gaps)</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#FACC15]" />
                     <span className="text-gray-200">See mesh samples in your own light</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <CheckCircle2 size={20} className="text-[#FACC15]" />
                     <span className="text-gray-200">Get an exact all-inclusive quote</span>
                   </li>
                 </ul>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#FACC15] rounded-full blur-[60px] opacity-20"></div>
            </div>

          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/20 border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">Book a Free Measurement</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and we'll call you shortly.</p>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Interested In</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all appearance-none cursor-pointer">
                  <option>Main Door Nets</option>
                  <option>Window Invisible Grills</option>
                  <option>Balcony Enclosure</option>
                  <option>Pleated Mesh</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message (Optional)</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#022C22] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#0F766E] transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group">
                Send Request <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Your data is safe. We never spam.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;