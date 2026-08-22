import React from 'react';
import { motion } from 'motion/react';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'We listen first. Understand your business, goals, challenges and what success actually looks like for you.',
    },
    {
        number: '02',
        title: 'Plan',
        description: 'We scope the project — technology, timeline, milestones and clear deliverables. No surprises.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Design, development and integrations. We keep you updated throughout and involve you in key decisions.',
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Testing, deployment and handover. We make sure everything is live, working and properly handed over.',
    },
    {
        number: '05',
        title: 'Grow',
        description: 'Maintenance, optimization and digital growth. We remain a long-term partner beyond the launch.',
    },
];

const HowWeWorkSection: React.FC = () => {
    return (
        <section id="process" className="py-20 md:py-28 px-6 bg-[#0a0f1e] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-widest text-white/40 mb-3"
                    >
                        Our process
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-bold tracking-tight leading-[1.15] text-white mb-4"
                    >
                        From idea to launch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-lg text-white/50 font-medium leading-relaxed max-w-lg mx-auto"
                    >
                        A clear, structured process that reduces uncertainty and keeps projects on track.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative group"
                        >
                            {/* Connector line for desktop */}
                            {idx < steps.length - 1 && (
                                <div
                                    className="hidden lg:block absolute top-8 left-[calc(100%+0.75rem)] w-6 h-px bg-white/10"
                                    aria-hidden="true"
                                />
                            )}

                            <div className="bg-white/5 border border-white/8 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300">
                                <div className="text-4xl font-black text-white/10 leading-none mb-4 tracking-tighter">
                                    {step.number}
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                                <p className="text-sm text-white/50 font-medium leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;
