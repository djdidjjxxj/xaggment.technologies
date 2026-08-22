import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, HeartHandshake, Zap } from 'lucide-react';
import Roadmap from '@/sections/Roadmap';

const values = [
    {
        icon: Target,
        title: 'Business Outcome Focus',
        description: 'We measure success by business results — enquiries, leads, time saved, and revenue — not vanity metrics.',
    },
    {
        icon: ShieldCheck,
        title: 'Honest Communication',
        description: 'No inflated claims, no fake testimonials, no hidden costs. We tell you clearly what works and what doesn\'t.',
    },
    {
        icon: HeartHandshake,
        title: 'Long-Term Partnership',
        description: 'We don\'t just deploy code and walk away. We support, optimize and help your digital systems evolve.',
    },
    {
        icon: Zap,
        title: 'Practical AI & Tech',
        description: 'We use AI and modern technology where it genuinely saves time or money, avoiding technology for technology\'s sake.',
    },
];

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Xaggment Technologies</title>
                <meta name="description" content="Learn about Xaggment Technologies — our mission, founder vision, business principles and company roadmap." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="eyebrow-label mb-3 inline-block"
                        >
                            About Xaggment
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Your digital product &amp;
                            <br />
                            growth partner
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text"
                        >
                            We started Xaggment Technologies to help ambitious businesses build modern websites, scale software, integrate AI automation, and achieve sustainable digital growth.
                        </motion.p>
                    </div>

                    {/* Founder Story */}
                    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-14 mb-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-5 flex justify-center">
                                <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-slate-200 shadow-md">
                                    <img
                                        src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                                        alt="Kaustav — Founder & CEO"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:col-span-7 space-y-4">
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Founder &amp; Vision</span>
                                <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#0a0f1e]">
                                    "Technology should solve business problems, not add complexity."
                                </h2>
                                <p className="text-slate-600 font-medium text-base leading-relaxed">
                                    Hi, I'm Kaustav, Founder &amp; CEO of Xaggment Technologies.
                                </p>
                                <p className="text-slate-600 font-medium text-base leading-relaxed">
                                    We started Xaggment after seeing too many business owners get frustrated by agencies that deliver overcomplicated tech stack jargon without delivering measurable business outcomes.
                                </p>
                                <p className="text-slate-600 font-medium text-base leading-relaxed">
                                    Our philosophy is straightforward: build reliable digital systems, automate repetitive operations, and drive ongoing growth. No fluff, no fabricated claims — just honest, high-quality work.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Core Principles */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <span className="eyebrow-label mb-2 block">Our values</span>
                            <h2 className="section-title">How we operate</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {values.map((v, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                        <v.icon size={22} />
                                    </div>
                                    <h3 className="font-bold text-[#0a0f1e] text-xl mb-2">{v.title}</h3>
                                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{v.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Company Roadmap (Moved from homepage) */}
                    <div className="mb-20 border-t border-slate-100 pt-16">
                        <Roadmap />
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-[#0a0f1e] text-white rounded-3xl p-10 md:p-14">
                        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Ready to work with Xaggment?</h2>
                        <p className="text-white/60 text-base max-w-lg mx-auto mb-8 font-medium">
                            Let's discuss your project goals and how we can help you achieve them.
                        </p>
                        <Link to="/contact" className="cta-secondary bg-white text-[#0a0f1e] hover:bg-slate-100 inline-flex items-center gap-2">
                            Start a Project
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
