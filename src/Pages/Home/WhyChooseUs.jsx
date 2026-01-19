import React from "react";
import { ShieldCheck, Zap, Users, Headset, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Your money is held safely in escrow until you approve the work. No surprises, just peace of mind."
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Post a job and receive competitive bids within minutes. Our streamlined process saves you time."
  },
  {
    icon: Users,
    title: "Vetted Talent",
    description: "Access a global pool of verified professionals. Check portfolios and reviews before you hire."
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description: "Our dedicated support team is here to help you solve any issues, anytime, anywhere."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: Visual Composition --- */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                alt="Team Collaboration" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Card 1: Protection */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-card border border-border p-5 rounded-xl shadow-xl flex items-center gap-4 max-w-xs z-10"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-foreground">100% Protected</h4>
                <p className="text-xs text-muted-foreground">Payment release on approval</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Verified Badge */}
            <motion.div 
               initial={{ y: -20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.5 }}
               className="absolute -top-6 -left-6 md:left-10 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg shadow-primary/30 flex items-center gap-3 z-10"
            >
               <CheckCircle size={20} className="text-white" />
               <div>
                  <p className="font-bold text-sm">Verified Freelancers</p>
                  <p className="text-[10px] opacity-90">ID Checked & Skill Tested</p>
               </div>
            </motion.div>

            {/* Decorative Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>


          {/* --- RIGHT SIDE: Content --- */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Why <span className="text-primary">Businesses</span> Choose Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just connect you with freelancers; we provide the infrastructure 
                for successful projects. Here is why thousands of companies trust us.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-5 p-4 rounded-xl hover:bg-card hover:shadow-sm border border-border transition-all duration-300 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <feature.icon size={26} strokeWidth={2} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="mt-4 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all active:scale-95">
              Learn More About Us
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
