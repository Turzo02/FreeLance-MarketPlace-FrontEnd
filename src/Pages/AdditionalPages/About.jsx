import React from "react";

const About = () => {
  return (
    <div className="min-h-screen  shadow-sm rounded-sm p-8 md:p-12">
      <div className="max-w-4xl mx-auto  space-y-8">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-500">About FreeLance MarketPlace</h1>

        {/* Overview */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-indigo-500">Our Mission</h2>
          <p className="text-lg">
            FreeLance MarketPlace is designed to connect talented freelancers with clients who need their skills. 
            Our mission is to create a seamless platform where work, collaboration, and communication happen efficiently.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-indigo-500">What We Offer</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Post and manage freelance jobs with ease.</li>
            <li>Discover projects that match your skills.</li>
            <li>Accept tasks and manage your workflow efficiently.</li>
            <li>Secure user authentication and personalized dashboards.</li>
            <li>Responsive design across mobile, tablet, and desktop.</li>
          </ul>
        </section>

        {/* Vision */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-indigo-500">Our Vision</h2>
          <p className="text-lg">
            We aim to empower freelancers by providing them with visibility, opportunities, and a professional space to grow their careers. 
            Clients get access to a reliable pool of talent, simplifying the process of finding the right freelancer for their project.
          </p>
        </section>

        {/* Closing */}
        <section className="text-center">
          <p className="text-lg font-medium">
            Join <span className="text-indigo-500 font-semibold">FreeLance MarketPlace</span>  today and experience a smarter way to connect, collaborate, and succeed!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
