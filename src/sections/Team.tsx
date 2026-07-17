import React from 'react';
import { motion } from 'motion/react';

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block px-6 py-2 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        The Founder
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        The Mind Behind <br className="hidden md:block" /> Xaggment
                    </motion.h2>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="group relative max-w-sm w-full"
                    >
                        {/* Card — no photo, just elegant typography */}
                        <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-16 flex flex-col items-center text-center shadow-2xl hover:shadow-[0_40px_80px_rgba(0,0,0,0.18)] transition-all duration-700 group-hover:-translate-y-2">
                            {/* Monogram */}
                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:bg-white/15 transition-colors">
                                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">K</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-2">
                                Kaustav
                            </h3>
                            <p className="text-xs font-black text-white/50 uppercase tracking-[0.25em] mb-8">
                                Founder &amp; CEO
                            </p>

                            <div className="w-10 h-[2px] bg-white/20 rounded-full mb-8" />

                            <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">
                                Visionary entrepreneur building the future of digital businesses — one website, one automation, one SaaS at a time.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
