import React, { Suspense } from "react";
import axios from "axios";

// Components
import Banner from "./Banner";
import LatestJobs from "./LatestJobs";
import TopCategories from "./TopCategories";
import WhyChooseUs from "./WhyChooseUs";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import PopularSkillsSection from "./PopularSkillsSection";
import TestimonialsSection from "./TestimonialsSection";
import PlatformStatsSection from "./PlatformStatsSection";
import FAQPreviewSection from "./FAQPreviewSection";
import JobCardSkeleton from "../../Components/CardSkeleton/JobCardSkeleton";

// Prefetch data pattern
const latestJobsPromise = axios
  .get("https://freelance-marketplace-api-server-smoky.vercel.app/latest_jobs")
  .then((res) => res.data);

const Home = () => {
  return (
    <div className="min-h-screen  bg-background text-foreground transition-colors duration-300">
      <title>Homepage</title>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-20">
        <Banner />
        <TopCategories />


        <section className="bg-background py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Latest <span className="text-primary">Opportunities</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Freshly posted jobs tailored for your skills. Apply now and
                start working.
              </p>
            </div>

            <Suspense
              fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <JobCardSkeleton key={index} />
                    ))}
                </div>
              }
            >
              <LatestJobs latestJobsPromise={latestJobsPromise} />
            </Suspense>
          </div>
        </section>
        <WhyChooseUs />
        <PopularSkillsSection />

        <PlatformStatsSection />

        <TestimonialsSection />

        <FAQPreviewSection />
      </div>
    </div>
  );
};

export default Home;
