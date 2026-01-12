import { Hash } from "lucide-react";
import { Link } from "react-router";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Firebase",
  "UI / UX Design",
  "Tailwind CSS",
  "Next.js",
  "Python",
  "Data Entry",
  "WordPress",
  "Graphic Design",
  "Digital Marketing",
];

const PopularSkillsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3   ">
            Popular Skills
          </h2>
          <p className="  max-w-2xl mx-auto">
            Explore trending skills and find jobs that match your expertise.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Link
              key={index}
              to={`/allJobs?skill=${encodeURIComponent(skill)}`}
              className="inline-flex items-center gap-2 px-4 py-2 border     rounded-sm shadow-sm text-sm font-medium
                         hover:   hover:text-white transition"
            >
              <Hash size={14} />
              {skill}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSkillsSection;
