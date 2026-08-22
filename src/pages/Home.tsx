import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/sections/home/HeroSection';
import TrustStrip from '@/sections/home/TrustStrip';
import WhatWeDoSection from '@/sections/home/WhatWeDoSection';
import OutcomesSection from '@/sections/home/OutcomesSection';
import SelectedWorkSection from '@/sections/home/SelectedWorkSection';
import HowWeWorkSection from '@/sections/home/HowWeWorkSection';
import PricingPreviewSection from '@/sections/home/PricingPreviewSection';
import WhyXaggmentSection from '@/sections/home/WhyXaggmentSection';
import FAQSection from '@/sections/home/FAQSection';
import FinalCTASection from '@/sections/home/FinalCTASection';

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Xaggment Technologies | Web Development, Software, AI &amp; Digital Growth</title>
                <meta name="description" content="Xaggment Technologies is your digital product and growth partner — building websites, software, SaaS, AI automation and delivering digital marketing for ambitious businesses." />
            </Helmet>

            <main className="min-h-screen bg-white text-[#0a0f1e]">
                {/* 01 Hero */}
                <HeroSection />

                {/* 02 Selected Clients / Trust */}
                <TrustStrip />

                {/* 03 What We Do */}
                <WhatWeDoSection />

                {/* 04 Business Outcomes */}
                <OutcomesSection />

                {/* 05 Selected Work (Motion Ref #2 spring scroll animation) */}
                <SelectedWorkSection />

                {/* 06 How We Work */}
                <HowWeWorkSection />

                {/* 07 Pricing Snapshot (Motion Ref #1 shared layout tab animation) */}
                <PricingPreviewSection />

                {/* 08 Why Xaggment / Founder Trust */}
                <WhyXaggmentSection />

                {/* 09 FAQ */}
                <FAQSection />

                {/* 10 Final CTA */}
                <FinalCTASection />
            </main>
        </>
    );
};

export default Home;
