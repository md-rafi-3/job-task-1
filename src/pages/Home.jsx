import React from 'react';
import BlogSection from '../components/DynamicTable';
import Hero from '../components/Banner';
import ServicesSection from '../components/ServicesSection';
import LatestWorksMarquee from '../components/LatestWorksMarquee';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ServicesSection></ServicesSection>
            {/* <BlogSection></BlogSection> */}
            <LatestWorksMarquee></LatestWorksMarquee>

        </div>
    );
};

export default Home;