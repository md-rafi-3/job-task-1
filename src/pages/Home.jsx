import React from 'react';
import BlogSection from '../components/DynamicTable';
import Hero from '../components/Banner';
import ServicesSection from '../components/ServicesSection';
import LatestWorksMarquee from '../components/LatestWorksMarquee';
import WhyChooseSection from '../components/WhyChooseSection';
import StatsCountUp from '../components/StatsSection';
import ReviewsSection from '../components/Review';
import VideoSection from '../components/VideoSection';
import HowItWorks from '../components/HowItWorks';
import PodcastSection from '../components/PodcastSection';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServicesSection></ServicesSection>
            <LatestWorksMarquee></LatestWorksMarquee>
            <WhyChooseSection></WhyChooseSection>
            <VideoSection></VideoSection>
            <HowItWorks></HowItWorks>
            <StatsCountUp></StatsCountUp>
            <ReviewsSection></ReviewsSection>
            <BlogSection></BlogSection>
            <PodcastSection></PodcastSection>

        </div>
    );
};

export default Home;