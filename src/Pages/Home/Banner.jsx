import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router";

const slides = [
  {
    title: "Find Freelance Jobs Easily",
    subtitle:
      "Browse hundreds of freelance tasks and start working on projects that match your skills.",
    ctaText: "Browse Jobs",
    ctaLink: "/allJobs",
  },
  {
    title: "Hire Skilled Freelancers",
    subtitle:
      "Post jobs, review applicants, and collaborate with talented freelancers worldwide.",
    ctaText: "Post a Job",
    ctaLink: "/allJobs",
  },
  {
    title: "Manage Work in One Place",
    subtitle:
      "Track accepted tasks, manage job posts, and stay organized from start to finish.",
    ctaText: "Get Started",
    ctaLink: "/allJobs",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative h-[65vh] overflow-hidden flex items-center justify-center 
bg-linear-to-br from-indigo-50 via-indigo-100 to-indigo-200 
dark:from-indigo-200 dark:via-indigo-400 dark:to-indigo-600"
    >
      {/* Slide Content */}
      <div className="text-center max-w-3xl px-4 transition-all duration-500">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{slides[current].subtitle}</p>

        <Link
          to={slides[current].ctaLink}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-sm shadow-sm bg-indigo-500 text-white font-medium"
        >
          {slides[current].ctaText}
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-sm shadow-sm "
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-sm shadow-sm "
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-indigo-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute -bottom-2 flex flex-col items-center  animate-bounce">
        <ChevronDown size={22} />
        <span className="text-xs">Scroll</span>
      </div>
    </section>
  );
};

export default Banner;
