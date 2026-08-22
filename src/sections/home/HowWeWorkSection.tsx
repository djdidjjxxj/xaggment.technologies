import React from 'react';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'We listen first. Understand your business goals, challenges and what success looks like.',
    },
    {
        number: '02',
        title: 'Plan',
        description: 'We scope the project — technology, timeline, milestones and clear deliverables.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Design, development and integrations. We keep you updated throughout key decisions.',
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Testing, deployment and handover. Everything is live, working and delivered.',
    },
    {
        number: '05',
        title: 'Grow',
        description: 'Maintenance, optimization and digital growth. Long-term partner beyond launch.',
    },
];

const stepVariants: Variants = {
    offscreen: (i: number) => ({
        y: 40,
        opacity: 0,
        rotate: i % 2 === 0 ? -2 : 2,
    }),
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            bounce: 0.25,
            duration: 0.7,
        },
    },
};

const HowWeWorkSection: React.FC = () => {
    return (
        <section id="process" className="py-16 md:py-24 px-6 bg-[#0a0f1e] overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-widest text-white/40 mb-2"
                    >
                        Our process
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-white mb-3"
                    >
                        From idea to launch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-sm md:text-base text-white/50 font-medium max-w-md mx-auto"
                    >
                        A clear, structured process that keeps projects on track and on budget.
                    </motion.p>
                </div>

                {/* Steps Grid with Spring Motion & Progress Line */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                    {/* Animated Progress Line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-white/10 -z-0" aria-hidden="true">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full bg-blue-500 origin-left"
                        />
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stepVariants}
                            className="relative z-10"
                        >
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 h-full hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-3xl font-black text-blue-400/30 group-hover:text-blue-400 transition-colors leading-none mb-3 font-mono">
                                    {step.number}
                                </div>
                                <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">{step.title}</h3>
                                <p className="text-xs text-white/50 font-medium leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;
