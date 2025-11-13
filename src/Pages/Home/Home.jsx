import React, { Suspense } from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import WhyChooseUs from './WhyChooseUs';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import axios from 'axios';

const latestJobsPromise = axios
  .get('https://freelance-marketplace-api-server-smoky.vercel.app/latest_jobs')
  .then((res) => res.data);


const Home = () => {
    return (
        <div className='section'>
            <Banner></Banner>
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
            <LatestJobs latestJobsPromise={latestJobsPromise}></LatestJobs>
            </Suspense>
            <TopCategories></TopCategories>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;