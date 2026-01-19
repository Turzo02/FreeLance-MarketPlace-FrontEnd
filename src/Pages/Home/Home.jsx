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

// Prefetch data pattern
const latestJobsPromise = axios
  .get("https://freelance-marketplace-api-server-smoky.vercel.app/latest_jobs")
  .then((res) => res.data);

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <title>Homepage</title>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        
        <section c>
          <Banner />
        </section>

        {/* Latest Jobs with Suspense */}
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner />
          </div>
        }>
          <LatestJobs latestJobsPromise={latestJobsPromise} />
        </Suspense>

        <PopularSkillsSection />
        
        <TopCategories />
        
        <WhyChooseUs />
        
        <PlatformStatsSection />
        
        <TestimonialsSection />
        
        
        <FAQPreviewSection />
        
      </div>
    </div>
  );
};

export default Home;
