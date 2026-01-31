import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Seawoods",
    text: "Absolutely life-changing. We can finally leave our balcony doors open in the evenings. You literally cannot see the net unless you're inches away. Worth every rupee.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Bangalore, Indiranagar",
    text: "The installation team was done in 45 minutes. No dust, no noise. The magnetic mesh for our main door is genius. My kids run in and out and it snaps shut perfectly.",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Delhi, GK-1",
    text: "I was worried it would look ugly on my modern windows. I was wrong. It's practically invisible. It actually makes the windows look cleaner. Highly recommended!",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune, Kothrud",
    text: "Sleep peacefully is right. Not a single mosquito since getting these installed. The airflow is perfect, doesn't feel stuffy at all. 5/5 stars.",
  },
  {
    id: 5,
    name: "Neha Gupta",
    location: "Hyderabad, Jubilee Hills",
    text: "Premium quality. You can feel the difference in the mesh material compared to local vendors. The frame color matched my windows exactly.",
  }
];

// A single testimonial card component for reusability within the loop
const TestimonialCard = ({ data }) => (
  <div className="relative w-[350px] md:w-[450px] p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-teal-100 shadow-lg shadow-teal-900/5 mx-4 flex-shrink-0 hover:border-[#FACC15] transition-colors group overflow-hidden">
    
    {/* Decorative giant quote icon in background */}
    <div className="absolute -top-2 -left-2 text-teal-50 opacity-50 z-0 group-hover:text-yellow-50/50 transition-colors">
      <Quote size={80} strokeWidth={1} fill="currentColor" />
    </div>
    
    <div className="relative z-10">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-[#FACC15]" fill="currentColor" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg text-[#022C22] font-medium leading-relaxed italic mb-6">
        "{data.text}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        {/* Simple Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#99F6E4] flex items-center justify-center text-white font-bold text-xl">
          {data.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-[#022C22]">{data.name}</h4>
          <p className="text-sm text-teal-600/70">{data.location}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F0FDFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
           <span className="text-[#0F766E] font-bold tracking-wider uppercase text-sm">
              Trusted Homes
            </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#022C22] mt-2">
            Over 5,000+ Peaceful Nights
          </h2>
        </div>
      </div>

      {/* ================= SCROLLING TRACK ================= */}
      {/* The container hides overflow. The inner track holds duplicated content and animates. */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#F0FDFA] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#F0FDFA] after:to-transparent">
        <div className="flex animate-scroll hover:pause py-4">
           {/* We map the data TWICE. 
             The animation moves the track 50% to the left.
             Once it hits 50%, it snaps back to 0%, creating a seamless loop.
           */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </div>
      </div>

      {/* Custom CSS for the infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 5 - 2rem * 5)); } /* Width + Margin * Count */
        }
        /* Slightly faster on mobile */
        @media (min-width: 768px) {
           @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-450px * 5 - 2rem * 5)); }
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;