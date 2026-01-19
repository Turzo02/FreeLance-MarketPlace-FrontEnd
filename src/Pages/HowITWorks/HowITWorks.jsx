import { UserPlus, Search, Briefcase, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={28} />,
    title: "Create an Account",
    description:
      "Sign up using email or Google authentication. Once logged in, you can post jobs, accept tasks, and manage your work securely.",
  },
  {
    icon: <Search size={28} />,
    title: "Explore Jobs",
    description:
      "Browse all available freelance jobs posted by clients. View job details and choose tasks that match your skills.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Post or Accept Work",
    description:
      "Clients can post jobs with full details. Freelancers can accept tasks and track them from their dashboard.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Manage & Complete Tasks",
    description:
      "Manage accepted tasks, track progress, and stay organized using personalized dashboards and protected routes.",
  },
];

const HowITWorks = () => {
  return (
    <section className="bg-background px-4 py-12 md:py-16 min-h-screen flex  items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
            How It Works
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            A simple and transparent workflow designed to connect freelancers
            and clients with ease.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:border-primary/50 transition duration-300"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-medium mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground">
            Freelance MarketPlace keeps everything simple, secure, and fully
            responsive so you can focus on getting work done.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowITWorks;
