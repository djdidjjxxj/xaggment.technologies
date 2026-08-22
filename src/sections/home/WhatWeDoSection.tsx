import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Bot, TrendingUp, ArrowRight } from 'lucide-react';

const pillars = [
    {
        id: 'build',
        label: 'BUILD',
        icon: Code2,
        color: 'bg-blue-50 text-blue-600',
        iconBg: 'bg-blue-100',
        description: 'Websites, web apps, software, e-commerce and digital products built for credibility, performance and conversion.',
        items: ['Custom Websites', 'Web Applications', 'E-commerce', 'SaaS Products', 'Software Development'],
        link: '/services/web-development',
    },
    {
        id: 'automate',
        label: 'AUTOMATE',
        icon: Bot,
        color: 'bg-violet-50 text-violet-600',
        iconBg: 'bg-violet-100',
        description: 'AI agents, workflows, integrations and business automation that reduce manual work and operational costs.',
        items: ['AI Chatbots', 'Workflow Automation', 'System Integrations', 'CRM Automation', 'Lead Management'],
        link: '/services/ai-automation',
    },
    {
        id: 'grow',
        label: 'GROW',
        icon: TrendingUp,
        color: 'bg-emerald-50 text-emerald-600',
        iconBg: 'bg-emerald-100',
        description: 'SEO, digital marketing, conversion optimization and ongoing growth support for your online presence.',
        items: ['Search Engine Optimization', 'Social Media Marketing', 'Content Strategy', 'Conversion Optimization', 'Analytics'],
        link: '/services/digital-marketing',
    },
];

const WhatWeDoSection: React.FC = () => {
    return (
        <section id="services" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14 md:mb-18">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-3"
                    >
                        What we do
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-4"
                    >
                        Three ways we help
                        <br className="hidden md:block" />
                        your business grow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-xl mx-auto"
                    >
                        We combine technology and strategy to help businesses build better, automate smarter, and grow faster.
                    </motion.p>
                </div>

                {/* Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={`${pillar.color} rounded-3xl p-8 h-full flex flex-col group hover:shadow-lg transition-all duration-500`}>
                                <div className={`${pillar.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                                    <pillar.icon size={22} />
                                </div>
                                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-60">{pillar.label}</p>
                                <p className="text-[#0a0f1e] font-medium text-base leading-relaxed mb-6 flex-1">
                                    {pillar.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {pillar.items.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#0a0f1e]/70">
                                            <div className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Link
                        to="/services"
                        id="what-we-do-explore-services"
                        className="inline-flex items-center gap-2 text-[#0a0f1e] font-bold text-sm hover:gap-4 transition-all duration-300"
                    >
                        Explore all services
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
