import React from 'react';
import Banner from './Banner';
import LatestJobs from './LatestJobs';
import TopCategories from './TopCategories';
import WhyChooseUs from './WhyChooseUs';
const Home = () => {
    return (
        <div className='section'>
            {/* Homepage Added */}
            <Banner></Banner>
            <LatestJobs></LatestJobs>
            <TopCategories></TopCategories>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;