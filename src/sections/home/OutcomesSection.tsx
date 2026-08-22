import React from 'react';
import { motion } from 'motion/react';
import { Users, Zap, BarChart3, Globe } from 'lucide-react';

const outcomes = [
    {
        icon: Users,
        title: 'More Customers',
        description: 'Create better digital experiences designed to generate enquiries, leads and conversions — not just traffic.',
        accent: 'bg-blue-50 border-blue-100',
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-100',
    },
    {
        icon: Zap,
        title: 'Less Manual Work',
        description: 'Automate repetitive business processes — from lead follow-ups to invoicing — so your team focuses on what matters.',
        accent: 'bg-violet-50 border-violet-100',
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-100',
    },
    {
        icon: BarChart3,
        title: 'Faster Operations',
        description: 'Connect your tools, workflows and data to eliminate bottlenecks and improve business efficiency.',
        accent: 'bg-amber-50 border-amber-100',
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-100',
    },
    {
        icon: Globe,
        title: 'Stronger Digital Presence',
        description: 'Build a modern, credible and high-performing digital presence that positions your business as the obvious choice.',
        accent: 'bg-emerald-50 border-emerald-100',
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-100',
    },
];

const OutcomesSection: React.FC = () => {
    return (
        <section id="outcomes" className="py-20 md:py-28 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-3"
                    >
                        Business outcomes
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-4"
                    >
                        What can Xaggment
                        <br className="hidden md:block" />
                        help you achieve?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-lg mx-auto"
                    >
                        We focus on business outcomes — not just deliverables.
                    </motion.p>
                </div>

                {/* Outcome Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {outcomes.map((outcome, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`${outcome.accent} border rounded-3xl p-8 flex gap-5 hover:shadow-md transition-all duration-500`}
                        >
                            <div className={`${outcome.iconBg} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <outcome.icon size={22} className={outcome.iconColor} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-[#0a0f1e] mb-2 tracking-tight">{outcome.title}</h3>
                                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">{outcome.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OutcomesSection;
