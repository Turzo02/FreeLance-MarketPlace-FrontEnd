import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Frontend Developer",
    review:
      "This platform helped me find consistent freelance work without the usual chaos. The workflow is clean and easy to manage.",
  },
  {
    name: "Rohan Das",
    role: "Startup Founder",
    review:
      "Posting jobs and managing freelancers here is straightforward. I like how organized everything feels.",
  },
  {
    name: "Mehedi Hasan",
    role: "UI / UX Designer",
    review:
      "I accepted my first task within a day. The dashboard makes tracking work very simple.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3   ">
            What People Say
          </h2>
          <p className="  max-w-xl mx-auto">
            Real experiences from freelancers and clients using the platform.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border     rounded-sm shadow-sm hover:translate-y-[-4px] transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4   ">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm   mb-4">
                “{item.review}”
              </p>

              {/* User */}
              <div className="border-t pt-3">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs  ">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
