import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Bot, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
    {
        id: 'build',
        title: 'BUILD',
        subtitle: 'Websites, Web Apps & SaaS',
        description: 'From high-converting business websites to scalable web applications and SaaS platforms built with modern tech stacks.',
        icon: Code2,
        badge: 'Engineering',
        color: 'from-blue-600 to-indigo-600',
        borderColor: 'border-blue-200',
        bgColor: 'bg-blue-50/50',
        accentText: 'text-blue-600',
        deliverables: [
            'Mobile-first business websites',
            'Scalable React/TypeScript web apps',
            'E-commerce & WhatsApp stores',
            'Custom internal software & APIs',
        ],
        ctaPath: '/services/web-development',
    },
    {
        id: 'automate',
        title: 'AUTOMATE',
        subtitle: 'AI Agents & Operations',
        description: 'Eliminate repetitive manual tasks, qualify leads automatically, and streamline business operations with custom AI agents.',
        icon: Bot,
        badge: 'AI & Workflows',
        color: 'from-violet-600 to-purple-600',
        borderColor: 'border-violet-200',
        bgColor: 'bg-violet-50/50',
        accentText: 'text-violet-600',
        deliverables: [
            '24/7 AI chatbots & support bots',
            'Automated lead qualification agents',
            'CRM, Slack & email integrations',
            'Document & workflow automation',
        ],
        ctaPath: '/services/ai-automation',
    },
    {
        id: 'grow',
        title: 'GROW',
        subtitle: 'SEO & Performance Marketing',
        description: 'Drive high-intent traffic, rank on Google search, and optimize customer acquisition channels for long-term growth.',
        icon: TrendingUp,
        badge: 'Digital Marketing',
        color: 'from-emerald-600 to-teal-600',
        borderColor: 'border-emerald-200',
        bgColor: 'bg-emerald-50/50',
        accentText: 'text-emerald-600',
        deliverables: [
            'Search Engine Optimization (SEO)',
            'Google Business Profile ranking',
            'Social media content strategy',
            'Conversion Rate Optimization (CRO)',
        ],
        ctaPath: '/services/digital-marketing',
    },
];

const WhatWeDoSection: React.FC = () => {
    const [activeMobileSlide, setActiveMobileSlide] = useState(0);

    // Auto-scroll loop for mobile view slider (cycles every 3.5s)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMobileSlide(prev => (prev + 1) % pillars.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="services" className="py-20 md:py-28 px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
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
                        Three pillars of digital growth
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-lg mx-auto"
                    >
                        We combine product engineering, AI automation, and performance marketing under one roof.
                    </motion.p>
                </div>

                {/* ── DESKTOP GRID (3 Columns) ── */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-2xl ${pillar.bgColor} flex items-center justify-center ${pillar.accentText}`}>
                                            <Icon size={24} />
                                        </div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${pillar.bgColor} ${pillar.accentText}`}>
                                            {pillar.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black font-heading tracking-tight text-[#0a0f1e] mb-1">
                                        {pillar.title}
                                    </h3>
                                    <p className={`text-xs font-bold ${pillar.accentText} uppercase tracking-wider mb-4`}>
                                        {pillar.subtitle}
                                    </p>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>

                                    <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-6">
                                        {pillar.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                <CheckCircle2 size={14} className={pillar.accentText} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={pillar.ctaPath}
                                    className="inline-flex items-center justify-between text-xs font-bold text-[#0a0f1e] group-hover:text-blue-600 transition-colors pt-4 border-t border-slate-100"
                                >
                                    <span>Learn more about {pillar.title}</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── MOBILE SLIDER WITH 3 DOTS & AUTO SCROLL LOOP ── */}
                <div className="block md:hidden">
                    <div className="relative overflow-hidden min-h-[420px]">
                        <AnimatePresence mode="wait">
                            {pillars.map((pillar, idx) => {
                                if (idx !== activeMobileSlide) return null;
                                const Icon = pillar.icon;
                                return (
                                    <motion.div
                                        key={pillar.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md flex flex-col justify-between min-h-[400px]"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`w-11 h-11 rounded-2xl ${pillar.bgColor} flex items-center justify-center ${pillar.accentText}`}>
                                                    <Icon size={22} />
                                                </div>
                                                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${pillar.bgColor} ${pillar.accentText}`}>
                                                    {pillar.badge}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-black font-heading tracking-tight text-[#0a0f1e] mb-1">
                                                {pillar.title}
                                            </h3>
                                            <p className={`text-xs font-bold ${pillar.accentText} uppercase tracking-wider mb-3`}>
                                                {pillar.subtitle}
                                            </p>
                                            <p className="text-slate-500 text-xs font-medium leading-relaxed mb-4">
                                                {pillar.description}
                                            </p>

                                            <ul className="space-y-2 mb-4 border-t border-slate-100 pt-4">
                                                {pillar.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                        <CheckCircle2 size={13} className={pillar.accentText} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link
                                            to={pillar.ctaPath}
                                            className="inline-flex items-center justify-between text-xs font-bold text-[#0a0f1e] pt-3 border-t border-slate-100"
                                        >
                                            <span>Explore {pillar.title} Services</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* 3 Interactive Pagination Dots */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {pillars.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveMobileSlide(idx)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    activeMobileSlide === idx ? 'w-8 bg-[#0a0f1e]' : 'w-2.5 bg-slate-300'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Link to /services */}
                <div className="mt-12 text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-600 hover:text-[#0a0f1e] transition-colors"
                    >
                        <span>View all service deliverables &amp; capabilities</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
