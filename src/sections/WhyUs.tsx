import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Heart, Target } from 'lucide-react';

const reasons = [
    {
        icon: Shield,
        title: 'High Trust Partnerships',
        description: 'We prioritize long-term relationships over quick wins. Your success is our reputation.'
    },
    {
        icon: Zap,
        title: 'AI-First Approach',
        description: 'We don\'t just use AI; we build systems that integrate it into the core of your operations.'
    },
    {
        icon: Target,
        title: 'Precision Execution',
        description: 'Every campaign and automation is tested and refined for maximum impact and ROI.'
    },
    {
        icon: Heart,
        title: 'Creator Centric',
        description: 'We understand the unique needs of modern creators and build tools specifically for them.'
    }
];

const WhyUs: React.FC = () => {
    return (
        <section id="why-us" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-purple font-bold uppercase tracking-widest text-sm"
                        >
                            The Xaggment Advantage
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-heading font-bold mt-4 text-brand-dark leading-tight"
                        >
                            Why Million-Dollar <br /> Brands Choose Us
                        </motion.h2>
                        <p className="text-slate-500 mt-6 text-lg max-w-lg leading-relaxed">
                            We provide the elite-level strategy and execution that traditional agencies lack. Our focus is on building sustainable growth through technology.
                        </p>

                        <div className="mt-12 space-y-8">
                            {reasons.map((reason, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-purple shadow-sm">
                                        <reason.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-brand-dark">{reason.title}</h4>
                                        <p className="text-slate-500 mt-1">{reason.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 absolute -inset-4 -z-10 animate-pulse" />
                        <img
                            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8708f272-3f5e-4939-8a70-9893ef70dbff.jpg"
                            alt="Premium Workspace"
                            className="rounded-[3rem] shadow-2xl w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
