import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    // Scroll zoom & fade effect
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

    return (
        <motion.section
            ref={heroRef}
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative pt-20 md:pt-24 pb-12 md:pb-20 px-6 bg-white overflow-hidden flex flex-col items-center"
        >
            {/* Subtle background grid pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '36px 36px'
                }}
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">

                {/* ── FOUNDER VISUAL & PENCIL-SKETCHED CURVED ARROW BADGE (Picture 1 & 4) ── */}
                <div className="relative w-full max-w-sm md:max-w-md flex flex-col md:flex-row items-center justify-center mb-6 md:mb-10">
                    {/* Centered Founder Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-44 sm:w-52 md:w-60 aspect-[4/5] overflow-hidden rounded-3xl"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)'
                        }}
                    >
                        <img
                            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                            alt="Kaustav — Founder & CEO of Xaggment Technologies"
                            className="w-full h-full object-cover object-top"
                            loading="eager"
                        />
                    </motion.div>

                    {/* "Digital Product & Growth Partner" Badge Box (Positioned HIGHER up) */}
                    <div className="mt-3 md:mt-0 md:absolute md:left-[calc(50%+60px)] md:top-[22%] z-20 flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white border-2 border-[#0a0f1e] rounded-full px-4 py-2 shadow-lg whitespace-nowrap"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs md:text-sm font-semibold text-[#0a0f1e] tracking-tight">
                                    Digital Product &amp; Growth Partner
                                </span>
                            </div>
                        </motion.div>

                        {/* Hand-Drawn Pencil-Sketched Curved Arrow (Picture 1 style) */}
                        <motion.svg
                            width="65"
                            height="50"
                            viewBox="0 0 65 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden md:block text-rose-500 -ml-8 -mt-1 pointer-events-none"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ delay: 0.8, duration: 0.7 }}
                        >
                            {/* Curved pencil sketch stroke */}
                            <path
                                d="M 5 45 C 20 40, 45 35, 42 12 M 34 20 L 42 12 L 48 22"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>
                    </div>
                </div>

                {/* ── MAIN HEADING (Picture 3 typography style & sizing) ── */}
                <div className="text-center w-full max-w-4xl px-4 mt-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[#0a0f1e] leading-[1.2] mb-6"
                    >
                        Build Digital Systems <br />
                        That Grow <span className="font-semibold text-slate-900 underline decoration-blue-500/40 decoration-wavy underline-offset-8">Businesses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-base text-slate-500 font-normal max-w-lg mx-auto mb-8 leading-relaxed"
                    >
                        Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
                    </motion.p>

                    {/* Dual CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
                    >
                        <Link
                            to="/contact"
                            id="hero-start-project-cta"
                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 text-xs md:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto justify-center group"
                        >
                            <span>START A PROJECT</span>
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/work"
                            id="hero-view-work-cta"
                            className="inline-flex items-center gap-2 bg-white text-[#0a0f1e] border border-slate-300 font-bold px-7 py-3 rounded-full transition-all duration-300 text-xs md:text-sm hover:bg-[#0a0f1e] hover:text-white hover:border-[#0a0f1e] w-full sm:w-auto justify-center"
                        >
                            VIEW OUR WORK
                        </Link>
                    </motion.div>

                    {/* Direct WhatsApp Option */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        onClick={() => openWhatsApp('Hi Xaggment! I want to discuss a project.')}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={13} className="text-emerald-500" />
                        Or chat with us on WhatsApp
                    </motion.button>
                </div>

            </div>
        </motion.section>
    );
};

export default HeroSection;
