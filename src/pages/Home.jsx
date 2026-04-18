import React from 'react';
import Button from '../components/Button';
import HeroSection from '../components/Home/HeroSection';
import SwiperSection from '../components/Home/SwiperSection';
import FeatureGrid from '../components/Home/FeatureGrid';
import FeatureSections from '../components/Home/FeatureSections';
import CTA from '../components/Home/CTA';

const Home = () => {
    return (
        <div className='bg-violet-50'>
            {/* <h1 className='text-6xl font-bold text-center my-10'>Home Page</h1> */}
            <div>
                <HeroSection/>
            </div>
            <div className='my-4'>
                <SwiperSection/>
            </div>
            <div className='w-11/12 mx-auto'>
                <FeatureGrid/>
            </div>
            <div className='w-11/12 mx-auto'>
                <FeatureSections/>
            </div>
            <div className='w-11/12 mx-auto my-4 bg-pink-50'>
                <CTA/>
            </div>
        </div>
    );
};

export default Home;