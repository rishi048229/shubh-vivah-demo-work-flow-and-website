import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Horoscope from './components/Horoscope';
import WhyUs from './components/WhyUs';
import PreviousEvents from './components/PreviousEvents';
import AboutUs from './components/AboutUs';
import AppDownload from './components/AppDownload';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Horoscope />
            <WhyUs />
            <PreviousEvents />
            <AboutUs />
            <AppDownload />
        </>
    );
};

export default LandingPage;
