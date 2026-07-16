import React from 'react';
import Hero from '@/sections/Hero';
import LogosSection from '@/sections/LogosSection';
import Services from '@/sections/Services';
import Portfolio from '@/sections/Portfolio';
import Team from '@/sections/Team';
import Blog from '@/sections/Blog';
import Roadmap from '@/sections/Roadmap';
import Testimonials from '@/sections/Testimonials';

// Pricing sections added to Home Page
import WebsiteDevelopmentSection from '@/sections/Pricing/WebsiteDevelopmentSection';
import WebsiteMaintenanceSection from '@/sections/Pricing/WebsiteMaintenanceSection';
import DigitalMarketingSection from '@/sections/Pricing/DigitalMarketingSection';
import ComboPlansSection from '@/sections/Pricing/ComboPlansSection';
import CustomDevelopmentSection from '@/sections/Pricing/CustomDevelopmentSection';
import WhyChooseUsSection from '@/sections/Pricing/WhyChooseUsSection';
import FAQSection from '@/sections/Pricing/FAQSection';
import CTASection from '@/sections/Pricing/CTASection';

const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Hero />
            <LogosSection />
            <Services />
            <Portfolio />
            
            {/* Embedded Pricing and quotation sections */}
            <WebsiteDevelopmentSection />
            <WebsiteMaintenanceSection />
            <DigitalMarketingSection />
            <ComboPlansSection />
            <CustomDevelopmentSection />
            <WhyChooseUsSection />
            <FAQSection />
            
            <Team />
            <Blog />
            <Roadmap />
            <Testimonials />
            <CTASection />
        </main>
    );
};

export default Home;

