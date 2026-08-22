import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Zap, Clock, ShieldCheck } from 'lucide-react';

const outcomes = [
    {
        icon: Users,
        title: 'More Customers',
        description: 'Create better digital experiences designed to generate enquiries, qualified leads and real business conversions.',
        badge: 'Acquisition',
    },
    {
        icon: Zap,
        title: 'Less Manual Work',
        description: 'Automate repetitive administrative tasks, lead qualification and data entry so your team focuses on growth.',
        badge: 'Efficiency',
    },
    {
        icon: Clock,
        title: 'Faster Operations',
        description: 'Accelerate turnaround times with instant AI responses, automated notifications and streamlined digital systems.',
        badge: 'Speed',
    },
    {
        icon: ShieldCheck,
        title: 'Stronger Digital Presence',
        description: 'Build long-term brand credibility, rank on Google search and convert visitor trust into sustainable revenue.',
        badge: 'Reputation',
    },
];

const OutcomesSection: React.FC = () => {
    const [activeMobileSlide, setActiveMobileSlide] = useState(0);

    // Slow auto-scroll loop for mobile view slider (cycles every 5 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMobileSlide(prev => (prev + 1) % outcomes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="outcomes" className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-2"
                    >
                        Business Outcomes
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-3"
                    >
                        What can Xaggment help you achieve?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-md mx-auto text-sm md:text-base"
                    >
                        We focus on business outcomes — not just technical deliverables.
                    </motion.p>
                </div>

                {/* ── DESKTOP GRID (4 Cards) ── */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-200 hover:shadow-md transition-all"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                                    {item.badge}
                                </span>
                                <h3 className="font-bold text-[#0a0f1e] text-xl mb-2">{item.title}</h3>
                                <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── MOBILE SLOW SLIDER WITH PAGINATION DOTS (Picture 4 fix) ── */}
                <div className="block md:hidden">
                    <div className="relative overflow-hidden min-h-[260px]">
                        <AnimatePresence mode="wait">
                            {outcomes.map((item, idx) => {
                                if (idx !== activeMobileSlide) return null;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -40 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm min-h-[240px]"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                                    <item.icon size={22} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                                                    {item.badge}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-[#0a0f1e] text-lg mb-2">{item.title}</h3>
                                            <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots for Mobile Outcomes Slider */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                        {outcomes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveMobileSlide(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    activeMobileSlide === idx ? 'w-6 bg-[#0a0f1e]' : 'w-2 bg-slate-300'
                                }`}
                                aria-label={`Go to outcome slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OutcomesSection;
