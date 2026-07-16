import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-24 px-6 bg-white relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0f172a] rounded-[3rem] md:rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Background Decorative Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 space-y-8">
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest backdrop-blur-sm">
                                <Sparkles size={14} className="text-blue-400" />
                                Ready to elevate?
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                            Let's Scale Your Brand <br className="hidden md:block" /> with Intelligence.
                        </h2>

                        <p className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed text-pretty font-bold">
                            Join the elite circle of founders who are leveraging Xaggment to dominate their industry.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                            <Button
                                size="lg"
                                className="bg-white text-[#0f172a] hover:bg-slate-50 rounded-full px-12 py-8 text-xl font-black h-auto shadow-xl transition-all duration-300 group"
                                onClick={() => window.open('mailto:hello@xaggment.com')}
                            >
                                Get Started Now
                                <ArrowRight size={24} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </div>

                        <p className="text-white/40 text-sm pt-8">
                            Limited availability. We only work with 3 new high-impact brands per month.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
