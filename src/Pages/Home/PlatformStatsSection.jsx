import { Briefcase, Users, CheckCircle, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Active Users",
  },
  {
    icon: Briefcase,
    value: "3.5K+",
    label: "Jobs Posted",
  },
  {
    icon: CheckCircle,
    value: "9K+",
    label: "Tasks Completed",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Success Rate",
  },
];

const PlatformStatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3   ">
            Platform in Numbers
          </h2>
          <p className="  max-w-2xl mx-auto">
            A quick look at the growth and activity of our freelance marketplace.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 border     rounded-sm shadow-sm text-center hover:translate-y-[-4px] transition"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm    text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-3xl font-bold mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm  ">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlatformStatsSection;
