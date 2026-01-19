import React from "react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button on the top right corner, enter your email or use Google authentication, and complete your profile information.",
  },
  {
    question: "How can I post a job?",
    answer:
      "Once logged in, navigate to 'Add a Job', fill in the job details including title, description, and budget, then submit. Your job will be listed immediately.",
  },
  {
    question: "How do I accept a task?",
    answer:
      "Browse available jobs under 'All Jobs'. Click on a job you are interested in and select 'Accept Task'. The job will be added to your 'My Accepted Tasks' section.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes! FreeLance MarketPlace uses Firebase authentication and secure storage to ensure your data is safe. We do not share your personal information without consent.",
  },
  {
    question: "Can I edit or delete a job I posted?",
    answer:
      "Absolutely. Go to 'My Added Jobs', select the job you want to modify, and you will see options to edit or delete the listing.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "You can reach out to our support team via the 'Contact' page. We respond promptly to all queries and provide guidance for any issues you encounter.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background py-24 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Frequently <span className="text-primary">Asked Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using the platform, managing jobs,
            and ensuring your security.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 group"
            >
              <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {faq.question}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-16 text-center bg-secondary/30 rounded-lg p-8 border border-border max-w-2xl mx-auto">
          <h3 className="text-lg font-medium text-foreground mb-2">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
