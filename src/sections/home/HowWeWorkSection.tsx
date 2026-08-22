import React from 'react';
import { motion } from 'motion/react';

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

const HowWeWorkSection: React.FC = () => {
    return (
        <section id="process" className="py-16 md:py-24 px-6 bg-[#0a0f1e] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2"
                    >
                        Our Process
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

                {/* 5 Sleek Process Cards (Zero messy lines cutting text) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div>
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 font-mono font-bold text-sm mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{step.title}</h3>
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
