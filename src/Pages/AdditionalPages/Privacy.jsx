import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen p-8 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8 ">
        <h1 className="text-4xl font-bold text-center    mb-4">
          Privacy & Terms
        </h1>

        {/* Introduction */}
        <section className="space-y-2">
          <p className="text-lg">
            At <span className="font-semibold   ">FreeLance MarketPlace</span>, your privacy and data security are our top priorities. 
            By using our platform, you agree to our terms of service and privacy practices outlined below.
          </p>
        </section>

        {/* Privacy Policy */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold   ">Privacy Policy</h2>
          <p className="text-lg">
            We collect only the necessary information to provide a seamless experience for our users. This includes registration details, 
            job postings, and task management data. We do not share your personal information with third parties without your consent.
          </p>
          <p className="text-lg">
            Security measures are in place to protect your data, including encrypted connections and secure authentication.
          </p>
        </section>

        {/* Terms of Service */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold   ">Terms of Service</h2>
          <p className="text-lg">
            Users are expected to provide accurate information when creating accounts and posting jobs. Freelancers and clients must communicate 
            respectfully and honor agreed terms for project completion and payment.
          </p>
          <p className="text-lg">
            FreeLance MarketPlace reserves the right to remove any content or user accounts that violate our policies. Continued misuse may result 
            in account suspension or termination.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold   ">User Responsibilities</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Maintain confidentiality of your login credentials.</li>
            <li>Respect intellectual property rights of others.</li>
            <li>Provide truthful information in profiles, job posts, and communications.</li>
            <li>Follow ethical practices in hiring and task completion.</li>
          </ul>
        </section>

        {/* Closing */}
        <section className="text-center mt-4">
          <p className="text-lg">
            By using <span className="font-semibold   ">FreeLance MarketPlace</span>, you acknowledge and agree to these policies.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
