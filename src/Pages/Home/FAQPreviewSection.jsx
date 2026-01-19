import { Link } from "react-router"; // or "react-router-dom"
import { ChevronRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need an account to browse jobs?",
    answer:
      "You can browse all public job listings without an account. To post or accept jobs, login is required.",
  },
  {
    question: "How do freelancers accept a job?",
    answer:
      "Freelancers can accept available jobs directly from the job details page after logging in.",
  },
  {
    question: "Can I edit or delete my posted jobs?",
    answer:
      "Yes. You can fully manage your posted jobs from the My Added Jobs section.",
  },
  {
    question: "Is this platform free to use?",
    answer:
      "Yes. Creating an account, browsing jobs, and posting work is currently free.",
  },
];

const FAQPreviewSection = () => {
  return (
    <section className="bg-background py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quick answers to common questions to help you get started with our platform.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group"
            >
              <h3 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-lg group"
          >
            View all FAQs
            <ChevronRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-200" 
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQPreviewSection;
