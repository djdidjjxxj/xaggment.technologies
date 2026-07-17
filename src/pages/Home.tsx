import React from 'react';
import Hero from '@/sections/Hero';
import LogosSection from '@/sections/LogosSection';
import Services from '@/sections/Services';
import Portfolio from '@/sections/Portfolio';
import Team from '@/sections/Team';
import Blog from '@/sections/Blog';
import Roadmap from '@/sections/Roadmap';
import Testimonials from '@/sections/Testimonials';

// Pricing sections
import WebsiteDevelopmentSection from '@/sections/Pricing/WebsiteDevelopmentSection';
import WebsiteMaintenanceSection from '@/sections/Pricing/WebsiteMaintenanceSection';
import DigitalMarketingSection from '@/sections/Pricing/DigitalMarketingSection';
import ComboPlansSection from '@/sections/Pricing/ComboPlansSection';
import CustomDevelopmentSection from '@/sections/Pricing/CustomDevelopmentSection';
import WhyChooseUsSection from '@/sections/Pricing/WhyChooseUsSection';
import FAQSection from '@/sections/Pricing/FAQSection';
import CTASection from '@/sections/Pricing/CTASection';

const SectionDivider: React.FC<{ label: string; sublabel: string }> = ({ label, sublabel }) => (
    <div id={label.toLowerCase().replace(/\s+/g, '-')} className="py-10 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center gap-6">
            <div className="flex-shrink-0">
                <div className="w-1 h-12 bg-blue-600 rounded-full" />
            </div>
            <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 mb-0.5">{sublabel}</p>
                <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] tracking-tight">{label}</h3>
            </div>
        </div>
    </div>
);

const Home: React.FC = () => {
    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            <Hero />
            <LogosSection />
            <Services />
            <Portfolio />

            {/* ── DEVELOPMENT PRICING ── */}
            <SectionDivider label="Website Development Plans" sublabel="Pricing · Development" />
            <WebsiteDevelopmentSection />

            <SectionDivider label="Website Maintenance Plans" sublabel="Pricing · Maintenance" />
            <WebsiteMaintenanceSection />

            {/* ── MARKETING PRICING ── */}
            <SectionDivider label="Digital Marketing Plans" sublabel="Pricing · Marketing" />
            <DigitalMarketingSection />

            {/* ── COMBO PLANS ── */}
            <SectionDivider label="Combo Plans" sublabel="Pricing · Best Value" />
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
