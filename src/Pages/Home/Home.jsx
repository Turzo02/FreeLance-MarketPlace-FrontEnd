import React, { Suspense } from "react";
import Banner from "./Banner";
import LatestJobs from "./LatestJobs";
import TopCategories from "./TopCategories";
import WhyChooseUs from "./WhyChooseUs";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import PopularSkillsSection from "./PopularSkillsSection";
import TestimonialsSection from "./TestimonialsSection";
import PlatformStatsSection from "./PlatformStatsSection";
import PartnersSection from "./PartnersSection";
import FAQPreviewSection from "./FAQPreviewSection";

const latestJobsPromise = axios
  .get("https://freelance-marketplace-api-server-smoky.vercel.app/latest_jobs")
  .then((res) => res.data);

const Home = () => {
  return (
    <div className="section">
      <title>Homepage</title>

      <Banner />


      <Suspense fallback={<LoadingSpinner />}>
        <LatestJobs latestJobsPromise={latestJobsPromise} />
      </Suspense>

      <PopularSkillsSection />

      <TopCategories />

      <TestimonialsSection />

      <PlatformStatsSection />

      <PartnersSection />

      <WhyChooseUs />

      <FAQPreviewSection />
    </div>
  );
};

export default Home;
