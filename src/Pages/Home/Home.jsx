import React from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import WhyChooseUs from './WhyChooseUs';

const latestJobsPromise = fetch("http://localhost:5000/latest_jobs").then(res => res.json());
const Home = () => {
    return (
        <div className='section'>
            <Banner></Banner>
            <LatestJobs latestJobsPromise={latestJobsPromise}></LatestJobs>
            <TopCategories></TopCategories>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;