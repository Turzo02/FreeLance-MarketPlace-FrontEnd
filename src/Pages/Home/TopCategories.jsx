import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { RiWebhookFill } from "react-icons/ri";
import { motion } from "motion/react";

const categories = [
  {
    title: "Web Development",
    icon: <RiWebhookFill />,
    description:
      "From stunning websites to complex web applications, find the talent you need.",
  },
  {
    title: "Digital Marketing",
    icon: <MdMarkEmailRead />,
    description:
      "Boost your online presence with experts in SEO, social media, and advertising.",
  },
  {
    title: "Graphics & Design",
    icon: <FaHeartPulse />,
    description:
      "Get eye-catching logos, branding, and UI/UX designs that stand out.",
  },
];

const TopCategories = () => {
  return (
    <div>
      <section className="  py-16 md:py-24 font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-500 text-center mb-12 md:mb-16">
            Discover Top Categories
          </h2>

          {/* Responsive Grid for Category Cards (1 column on mobile, 3 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="glassmorphic-card p-8 rounded-2xl shadow-lg 
             transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 
             flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 15,
                  duration: 0.6,
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-indigo-50/70 text-indigo-600 rounded-sm flex items-center justify-center mb-6 text-4xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: 0.2,
                  }}
                >
                  {category.icon}
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {category.title}
                </motion.h3>

                <motion.p
                  className="text-gray-400 text-base leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {category.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategories;
