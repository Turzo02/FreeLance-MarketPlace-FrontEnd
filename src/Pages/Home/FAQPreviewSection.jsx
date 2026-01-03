import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-indigo-500">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions before getting started.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-5 border border-indigo-400 rounded-sm shadow-sm"
            >
              <h3 className="font-semibold mb-1">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-8">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-indigo-500 font-medium hover:underline"
          >
            View all FAQs
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQPreviewSection;
