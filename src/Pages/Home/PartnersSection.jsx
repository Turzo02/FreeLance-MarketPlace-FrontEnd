const partners = [
  "Google",
  "Firebase",
  "Stripe",
  "GitHub",
  "Vercel",
  "Netlify",
  "Figma",
  "Slack",
];

const PartnersSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3   ">
            Trusted By Tools & Partners
          </h2>
          <p className="  max-w-xl mx-auto">
            We work with modern platforms and tools freelancers already trust.
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
          {partners.map((name, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 border     rounded-sm shadow-sm
                          font-medium text-sm
                         hover:    hover:   transition"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
