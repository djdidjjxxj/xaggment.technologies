import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import WebsiteDevelopmentSection from '@/sections/Pricing/WebsiteDevelopmentSection';
import WebsiteMaintenanceSection from '@/sections/Pricing/WebsiteMaintenanceSection';
import DigitalMarketingSection from '@/sections/Pricing/DigitalMarketingSection';
import ComboPlansSection from '@/sections/Pricing/ComboPlansSection';
import CustomDevelopmentSection from '@/sections/Pricing/CustomDevelopmentSection';
import WhyChooseUsSection from '@/sections/Pricing/WhyChooseUsSection';
import FAQSection from '@/sections/Pricing/FAQSection';
import CTASection from '@/sections/Pricing/CTASection';

const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Pricing | Xaggment Technologies</title>
                <meta name="description" content="Explore transparent and competitive pricing for Website Development, Digital Marketing, and Custom Software Solutions at Xaggment Technologies." />
            </Helmet>

            <main className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-12">
                {/* Page Header */}
                <section className="py-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
                        >
                            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Pricing</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                        >
                            Simple, predictable pricing for world-class digital solutions. Choose the perfect plan to grow your business today.
                        </motion.p>
                    </div>
                </section>

                {/* Sections container with staggered entrance */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <WebsiteDevelopmentSection />
                    <WebsiteMaintenanceSection />
                    <DigitalMarketingSection />
                    <ComboPlansSection />
                    <CustomDevelopmentSection />
                    <WhyChooseUsSection />
                    <FAQSection />
                    <CTASection />
                </motion.div>
            </main>
        </>
    );
};

export default Pricing;
