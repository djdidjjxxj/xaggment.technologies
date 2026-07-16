import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const Founder: React.FC = () => {
    return (
        <section id="founder" className="py-24 px-6 bg-brand-dark text-white overflow-hidden relative">
            {/* Decorative Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img
                                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3cb0feee-f2a4-4d9c-ac21-369a82052eba.jpg"
                                alt="Founder of Xaggment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 p-8 bg-brand-teal rounded-2xl shadow-xl hidden md:block">
                            <Quote size={48} className="text-white/40" />
                            <p className="text-xl font-heading font-medium mt-4 max-w-[250px]">
                                "Technology should serve the brand, not the other way around."
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-teal font-bold uppercase tracking-widest text-sm"
                        >
                            The Visionary
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-heading font-bold"
                        >
                            Building the Future, <br /> One Automation at a Time.
                        </motion.h2>
                        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                            <p>
                                As the founder of Xaggment Technologies, my mission is to bridge the gap between complex AI technology and real-world business growth.
                            </p>
                            <p>
                                We started Xaggment with a simple belief: that every brand, regardless of its size, deserves access to the same elite-level automation and marketing strategies used by global giants.
                            </p>
                            <p>
                                Today, we help startups and creators scale with precision, removing the friction of manual work and replacing it with intelligent systems that grow while you sleep.
                            </p>
                        </div>

                        <div className="pt-8 flex items-center gap-6">
                            <div>
                                <h4 className="text-2xl font-bold">Xaggment</h4>
                                <p className="text-brand-teal font-semibold">Founder & CEO</p>
                            </div>
                            <div className="h-12 w-[2px] bg-white/10" />
                            <div className="flex gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">50+</div>
                                    <p className="text-xs text-slate-400 uppercase">Brands Scaled</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">1M+</div>
                                    <p className="text-xs text-slate-400 uppercase">Hours Saved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
