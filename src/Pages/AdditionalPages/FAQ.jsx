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
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center    mb-4">
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border sm:rounded-sm shadow-sm p-4 space-y-2"
          >
            <h2 className="text-2xl font-semibold   ">
              {faq.question}
            </h2>
            <p className=" text-lg">{faq.answer}</p>
          </div>
        ))}
    
      </div>
    </div>
  );
};

export default FAQ;
