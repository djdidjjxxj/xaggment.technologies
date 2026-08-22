import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-[92vh] md:min-h-screen pt-24 md:pt-16 pb-10 flex flex-col items-center bg-white overflow-hidden">
            {/* Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
                aria-hidden="true"
            />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center w-full flex-1 justify-center">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Digital Product &amp; Growth Partner
                </motion.div>

                {/* Founder Image */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="relative w-full max-w-[220px] md:max-w-[340px] flex justify-center z-20"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                    }}
                >
                    <img
                        src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                        alt="Kaustav — Founder & CEO of Xaggment Technologies"
                        className="w-full h-auto object-contain"
                        loading="eager"
                    />
                </motion.div>

                {/* Hero Headline */}
                <div className="text-center w-full z-30 -mt-16 md:-mt-24 px-4 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="text-[11vw] md:text-[5.8vw] font-heading font-bold tracking-tighter leading-[1.02] mb-4 md:mb-6 text-[#0a0f1e]"
                        style={{ filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.9))' }}
                    >
                        We Build Digital Systems
                        <br />
                        <span className="relative">
                            That Grow Businesses
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                        className="text-base md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
                    >
                        Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/contact"
                            id="hero-start-project-cta"
                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                        >
                            Start a Project
                            <ArrowRight size={16} />
                        </Link>
                        <Link
                            to="/work"
                            id="hero-view-work-cta"
                            className="inline-flex items-center gap-2 bg-white text-[#0a0f1e] border-2 border-[#0a0f1e] font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm hover:bg-[#0a0f1e] hover:text-white w-full sm:w-auto justify-center"
                        >
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* WhatsApp hint */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        onClick={() => openWhatsApp('Hi Xaggment! I want to discuss a project.')}
                        className="mt-5 inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors font-medium"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={13} />
                        Or chat with us on WhatsApp
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
