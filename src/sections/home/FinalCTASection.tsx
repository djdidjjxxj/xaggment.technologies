import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const FinalCTASection: React.FC = () => {
    return (
        <section id="cta" className="py-20 md:py-28 px-6 bg-white relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0f1e] rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Background accents */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

                    <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                        <span className="inline-block text-xs font-black uppercase tracking-widest text-white/50 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                            Ready to start?
                        </span>

                        <h2 className="text-3xl md:text-6xl font-heading font-bold tracking-tight leading-tight">
                            Ready to build something great together?
                        </h2>

                        <p className="text-white/60 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            Tell us what you're trying to build, improve or automate. We'll help you map out the right solution and timeline.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                to="/contact"
                                id="final-cta-start-project"
                                className="inline-flex items-center gap-2 bg-white text-[#0a0f1e] hover:bg-slate-100 font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-xl hover:gap-4 w-full sm:w-auto justify-center"
                            >
                                Start a Project
                                <ArrowRight size={16} />
                            </Link>
                            <button
                                onClick={() => openWhatsApp('Hi Xaggment! I want to discuss a project.')}
                                id="final-cta-whatsapp"
                                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:border-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm w-full sm:w-auto justify-center"
                            >
                                <MessageCircle size={16} />
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTASection;
