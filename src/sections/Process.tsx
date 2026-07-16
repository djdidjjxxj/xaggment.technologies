import React from 'react';
import { motion } from 'motion/react';

const steps = [
    {
        number: '01',
        title: 'Deep Discovery',
        description: 'We dive deep into your brand, audience, and current bottlenecks to find the perfect leverage points.'
    },
    {
        number: '02',
        title: 'Strategic Blueprint',
        description: 'We design a custom roadmap combining marketing reach with AI automation efficiency.'
    },
    {
        number: '03',
        title: 'Agile Deployment',
        description: 'Our team implements the systems and campaigns with precision, ensuring seamless integration.'
    },
    {
        number: '04',
        title: 'Continuous Scale',
        description: 'We monitor, optimize, and scale your systems to ensure consistent growth and maximum ROI.'
    }
];

const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-blue font-bold uppercase tracking-widest text-sm"
                    >
                        The Workflow
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mt-4 text-brand-dark"
                    >
                        Our Proven Process
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Connector Line (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-200 z-0" />
                            )}

                            <div className="relative z-10 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-3xl font-heading font-black text-brand-blue shadow-lg group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    {step.number}
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
