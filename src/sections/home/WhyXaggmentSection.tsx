import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { UserCheck, Layers, Eye, Target, HeartHandshake, ArrowRight } from 'lucide-react';

const principles = [
    {
        icon: UserCheck,
        title: 'Founder-Led & Accountable',
        description: 'Direct communication with leadership. No games, no account manager games, total accountability.',
    },
    {
        icon: Layers,
        title: 'One Partner for Strategy & Tech',
        description: 'Design, code, automation and marketing under one roof. No fragmented agency handoffs.',
    },
    {
        icon: Eye,
        title: 'Transparent Scope & Pricing',
        description: 'Clear deliverables, fixed pricing options and honest timelines with zero hidden costs.',
    },
    {
        icon: Target,
        title: 'Business-First Mindset',
        description: 'We prioritize ROI, customer acquisition and operational efficiency over technical jargon.',
    },
    {
        icon: HeartHandshake,
        title: 'Long-Term Support',
        description: 'We don\'t disappear after launch. Ongoing support, maintenance and growth strategies.',
    },
];

const WhyXaggmentSection: React.FC = () => {
    return (
        <section id="why-xaggment" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Heading & Founder Trust */}
                    <div className="lg:col-span-5">
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="eyebrow-label mb-3"
                        >
                            Why Xaggment
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Why ambitious businesses choose us
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="body-text mb-8"
                        >
                            We act as an extension of your team. Our focus is delivering real digital products that solve operational problems and drive revenue.
                        </motion.p>

                        {/* Founder mini card */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex items-center gap-5"
                        >
                            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-200 flex-shrink-0">
                                <img
                                    src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                                    alt="Kaustav"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#0a0f1e] text-base">Kaustav</h3>
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Founder &amp; CEO</p>
                                <p className="text-xs text-slate-600 font-medium italic">
                                    "We build what actually works for your business bottom line."
                                </p>
                            </div>
                        </motion.div>

                        <div className="mt-8">
                            <Link
                                to="/about"
                                id="why-xaggment-about-link"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#0a0f1e] hover:gap-4 transition-all duration-300"
                            >
                                Learn more about Xaggment
                                <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: 5 Principles */}
                    <div className="lg:col-span-7 space-y-4">
                        {principles.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-300 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0a0f1e] flex-shrink-0 mt-0.5 shadow-sm">
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#0a0f1e] text-base mb-1">{item.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyXaggmentSection;
