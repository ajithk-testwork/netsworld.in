import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Ruler, Hammer, Moon } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Contact Us",
      description: "Fill the form or give us a call. We respond within 1 hour to schedule your visit.",
      icon: <PhoneCall size={24} />,
      align: "left"
    },
    {
      id: 2,
      title: "Free Measurement",
      description: "Our expert visits your home with laser tools to get the perfect fit. No obligation.",
      icon: <Ruler size={24} />,
      align: "right"
    },
    {
      id: 3,
      title: "Custom Installation",
      description: "We manufacture your nets and install them in under 60 minutes with zero mess.",
      icon: <Hammer size={24} />,
      align: "left"
    },
    {
      id: 4,
      title: "Peaceful Sleep",
      description: "Enjoy fresh air without the bite. Your home is now a 100% mosquito-free zone.",
      icon: <Moon size={24} />,
      align: "right"
    }
  ];

  return (
    <section className="py-24 bg-[#F0FDFA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F766E] font-bold tracking-wider uppercase text-sm"
          >
            Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#022C22] mt-2"
          >
            From Call to Comfort in 24 Hrs
          </motion.h2>
        </div>

        <div className="relative">
          
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-teal-100 rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-[#0F766E] to-[#99F6E4] rounded-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center ${step.align === 'right' ? 'md:flex-row-reverse' : ''} gap-8 relative`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: step.align === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex-1 w-full md:w-auto ${step.align === 'left' ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}
                >
                  <h3 className="text-2xl font-bold text-[#0F766E] mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>

                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#FACC15] shadow-lg shadow-teal-900/10 z-10"
                >
                  <div className="text-[#0F766E]">
                    {step.icon}
                  </div>
                </motion.div>

                <div className="hidden md:block flex-1"></div>

              </div>
            ))}
          </div>

        </div>

       

      </div>
    </section>
  );
};

export default HowItWorks;