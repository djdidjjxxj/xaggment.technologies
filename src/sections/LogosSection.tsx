import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

const brands = [
    'minitpe.', 'plóm', 'Daily Objects', 'MURZBAN', 'ceya*', 'Pluto7e', 'Momentz', 'greenfeels', 'STREET 9', 'TWINLEAVES'
];

const LogosSection: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden relative border-y border-slate-50">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Trusted Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-16"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} alt="user" />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                        Trusted by <span className="text-[#0f172a]">1.3L+</span> Founders
                    </p>
                </motion.div>

                {/* Logos (Scrolling effect) */}
                <div className="w-full relative">
                    {/* Faded edges for better look */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex overflow-hidden group">
                        <motion.div
                            animate={{
                                x: [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                            className="flex items-center gap-20 whitespace-nowrap px-10"
                        >
                            {[...brands, ...brands, ...brands].map((brand, i) => (
                                <div
                                    key={i}
                                    className="text-3xl md:text-5xl font-black tracking-tighter text-[#0f172a] opacity-10 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-pointer"
                                >
                                    {brand}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogosSection;
