import React from 'react';
import Hero from '@/sections/Hero';
import LogosSection from '@/sections/LogosSection';
import Services from '@/sections/Services';
import Portfolio from '@/sections/Portfolio';
import Team from '@/sections/Team';
import Blog from '@/sections/Blog';
import Roadmap from '@/sections/Roadmap';
import Testimonials from '@/sections/Testimonials';
import CTA from '@/sections/CTA';

const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <LogosSection />
            <Services />
            <Portfolio />
            <Team />
            <Blog />
            <Roadmap />
            <Testimonials />
            <CTA />
        </main>
    );
};

export default Home;
