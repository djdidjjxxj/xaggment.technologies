import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const wordsLine1 = ['WE', 'BUILD', 'DIGITAL', 'SYSTEMS'];
const wordsLine2 = ['THAT', 'GROW', 'BUSINESSES'];

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    // Scroll zoom animation setup
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

    return (
        <motion.section
            ref={heroRef}
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative min-h-[90vh] md:min-h-screen pt-20 md:pt-24 pb-8 flex flex-col items-center bg-white overflow-hidden"
        >
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

                {/* Founder Visual & Arrow Composition */}
                <div className="relative w-full max-w-[240px] md:max-w-[340px] flex justify-center z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full flex justify-center"
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

                    {/* Editorial Arrow & Digital Partner Badge (Conversational Composition) */}
                    <div className="absolute -bottom-2 -right-8 md:-right-24 z-30 flex items-center gap-2">
                        {/* Animated SVG Arrow */}
                        <motion.svg
                            width="50"
                            height="35"
                            viewBox="0 0 50 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden sm:block text-[#0a0f1e]"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <path
                                d="M5 25 C 20 5, 35 30, 45 10 M 35 12 L 45 10 L 43 20"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </motion.svg>

                        {/* Conversational Pill */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0f1e] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg border border-white/10"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Digital Product &amp; Growth Partner
                        </motion.div>
                    </div>
                </div>

                {/* Hero Headline (Staggered Black & White Color-Graded Typography) */}
                <div className="text-center w-full z-30 -mt-8 md:-mt-12 px-4 flex flex-col items-center">
                    <h1 className="sr-only">
                        We Build Digital Systems That Grow Businesses
                    </h1>

                    <div className="text-[10vw] md:text-[5.5vw] font-heading font-black tracking-tighter leading-[1.02] mb-3 md:mb-5 text-[#0a0f1e] flex flex-wrap justify-center gap-x-[0.25em] select-none" aria-hidden="true">
                        {/* Line 1 */}
                        <div className="flex flex-wrap justify-center gap-x-[0.25em]">
                            {wordsLine1.map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + idx * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="inline-block"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>

                        {/* Line 2 with Black + White Gradient/Highlight styling */}
                        <div className="flex flex-wrap justify-center gap-x-[0.25em] w-full">
                            {wordsLine2.map((word, idx) => (
                                <motion.span
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.5 + idx * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={
                                        word === 'BUSINESSES'
                                            ? 'inline-block bg-[#0a0f1e] text-white px-3 py-0.5 rounded-2xl shadow-md'
                                            : 'inline-block text-slate-800'
                                    }
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-lg text-slate-500 font-medium max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed"
                    >
                        Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
                    </motion.p>

                    {/* Dual CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
                    >
                        <Link
                            to="/contact"
                            id="hero-start-project-cta"
                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-xs md:text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center group"
                        >
                            <span>START A PROJECT</span>
                            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/work"
                            id="hero-view-work-cta"
                            className="inline-flex items-center gap-2 bg-white text-[#0a0f1e] border-2 border-[#0a0f1e] font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-xs md:text-sm hover:bg-[#0a0f1e] hover:text-white w-full sm:w-auto justify-center"
                        >
                            VIEW OUR WORK
                        </Link>
                    </motion.div>

                    {/* Direct WhatsApp trigger */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
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
