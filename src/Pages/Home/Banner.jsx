import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="section px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Content Section */}
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight  tracking-tight">
              Reliable Freelance
              <br className="hidden sm:block" />
              <span className="text-indigo-500">Marketplace</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-xl mx-auto md:mx-0 text-center md:text-justify">
              Find top-tier freelance talent or discover exciting new job
              opportunities with ease and confidence. Secure your next project
              or your next career step here.
            </p>

            {/* Call to Action Button */}
            <button
              className="mt-8 px-10 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-xl 
                         hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-[1.02] 
                         focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75 w-full sm:w-auto cursor-pointer"     >
              View Opportunities
            </button>           

          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full order-1 md:order-2">
            <img
              className="w-full h-72 sm:h-96 md:h-[450px] object-cover rounded-3xl shadow-2xl transition duration-500 
                         hover:shadow-indigo-500/40"
              src="https://i.ibb.co.com/QvQrhm2Q/404.png"
              alt="Professional Freelance Talent Illustration"
     
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
