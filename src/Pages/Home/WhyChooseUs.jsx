import React from "react";
import { Link } from "react-router";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            {/* Left Image Section */}
            <div className="md:w-1/2 w-full order-1 md:order-2">
              <img
                className="w-full h-[500px] sm:h-[580px] md:h-[650px] object-cover rounded-3xl shadow-2xl transition duration-500 
                         hover:shadow-indigo-500/40"
                src="https://i.ibb.co.com/1G38j0Y0/why-choos-us.png"
                alt="Professional Freelance Talent Illustration"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 glassmorphic-card p-8 rounded-2xl shadow-lg">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight  tracking-tight text-indigo-500">
                Why Choose Our Platform?{" "}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 text-center md:text-justify">
                We connect innovative businesses with top-tier freelance talent
                across the globe. Our platform is built on trust, quality, and
                efficiency, ensuring that every project is a success. Whether
                you're looking to hire for a specific skill or find your next
                rewarding project, we provide the tools and community to help
                you achieve your goals. Join us and experience a better way to
                work.
              </p>

              {/* Call to Action Button */}
              <button
                className="mt-8 px-10 py-4 bg-indigo-500 text-white font-bold text-lg rounded-sm shadow-xl 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full sm:w-auto cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
