import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Search, Star, Zap } from "lucide-react";
import { Link } from "react-router"; // or 'react-router-dom'

// Slider Data: Different freelancer personas
const slides = [
  {
    id: 1,
    role: "Web Developers",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    badge: "Top Rated",
    stat: "100% Job Success"
  },
  {
    id: 2,
    role: "UI/UX Designers",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070",
    badge: "Creative",
    stat: "5.0 Rating"
  },
  {
    id: 3,
    role: "Digital Marketers",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
    badge: "Trending",
    stat: "24h Delivery"
  }
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-20 lg:pt-24 lg:pb-32 transition-colors duration-300">
      
      {/* Background Decor: Animated Blobs (Theme Color) */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT SIDE: Content --- */}
          <div className="max-w-2xl">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <Zap size={16} className="fill-current" />
              <span>The #1 Marketplace for Talent</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-[1.15]"
            >
              Find the perfect <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60">
                Freelance Services
              </span>
              <br /> for your business
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              Connect with expert freelancers in seconds. From web development to marketing, 
              find the right talent to scale your project today.
            </motion.p>


            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 text-sm font-medium text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" /> Verified Pros
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={18} className="text-primary" /> Secure Payment
              </span>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Animated Slider --- */}
          <div className="relative h-[400px] lg:h-[500px] w-full hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                {/* Main Image Card */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-border bg-muted">
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].role}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  
                  {/* Slide Text Content */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full inline-block mb-2 border border-white/10">
                      {slides[currentSlide].badge}
                    </p>
                    <h3 className="text-2xl font-bold">{slides[currentSlide].role}</h3>
                  </div>
                </div>

                {/* Floating Glass Card 1: Job Success */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-10 -left-6 bg-card/80 backdrop-blur-xl border border-border p-4 rounded-xl shadow-lg flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Status</p>
                    <p className="text-sm font-bold text-foreground">{slides[currentSlide].stat}</p>
                  </div>
                </motion.div>

                {/* Floating Glass Card 2: Rating */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-20 -right-6 bg-card/80 backdrop-blur-xl border border-border p-4 rounded-xl shadow-lg flex items-center gap-3 z-20"
                >
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="user" />
                        </div>
                      ))}
                   </div>
                   <div className="flex flex-col">
                      <div className="flex items-center text-yellow-500">
                         <Star size={14} fill="currentColor" />
                         <span className="text-sm font-bold ml-1 text-foreground">5.0</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Trusted by 12k+</span>
                   </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
