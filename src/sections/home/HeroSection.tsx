import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

// Word-by-word animation (prevents mid-word line breaks on mobile)
const line1Words = ['Build', 'Digital', 'Systems'];
const line2Words = ['That', 'Grow', 'Businesses'];

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

    return (
        <motion.section
            ref={heroRef}
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="relative pt-20 md:pt-24 bg-white overflow-hidden flex flex-col items-center"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}
                aria-hidden="true"
            />

            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center px-4">

                {/* ── FOUNDER IMAGE + BADGE + ARROW (Desktop layout) ── */}
                <div className="relative flex justify-center w-full">

                    {/*
                      DESKTOP ONLY:
                      Badge + pencil-sketch arrow at CHEST level (top-[50%]), to the right of the image.
                      Arrow is in a flex row to the LEFT of the badge — never inside it.
                    */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:flex absolute top-[50%] right-[4%] lg:right-[10%] z-30 items-center gap-2"
                    >
                        {/*
                          Small pencil-sketch SVG arrow:
                          - Clearly OUTSIDE and to the left of the badge
                          - Curves naturally, points RIGHT toward the badge
                          - Feels like a tiny hand-drawn label arrow
                        */}
                        <motion.svg
                            width="44"
                            height="32"
                            viewBox="0 0 44 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#0a0f1e] flex-shrink-0"
                        >
                            {/* Organic curve from bottom-left to top-right, arrowhead pointing right */}
                            <motion.path
                                d="M 4 26 C 8 14, 22 6, 36 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.9, duration: 0.8, ease: 'easeInOut' }}
                            />
                            {/* Arrowhead at (36, 14) pointing right */}
                            <motion.path
                                d="M 28 8 L 36 14 L 28 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: 1.6, duration: 0.2 }}
                            />
                        </motion.svg>

                        {/* Badge pill — arrow points at this from the left */}
                        <div className="bg-white border-2 border-[#0a0f1e] rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                <span className="text-xs font-semibold text-[#0a0f1e] tracking-tight">
                                    Digital Product &amp; Growth Partner
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Image — centered, fades at waist so heading overlaps */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-44 sm:w-52 md:w-64 lg:w-72"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 88%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 88%)',
                        }}
                    >
                        <img
                            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                            alt="Kaustav — Founder & CEO of Xaggment Technologies"
                            className="w-full h-auto object-cover object-top"
                            loading="eager"
                        />
                    </motion.div>
                </div>

                {/* MOBILE ONLY: Badge shown inline below image, clean and centered */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex md:hidden items-center gap-2 mb-4 -mt-2"
                >
                    <div className="bg-white border-2 border-[#0a0f1e] rounded-full px-4 py-2 shadow-md whitespace-nowrap">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                            <span className="text-xs font-semibold text-[#0a0f1e] tracking-tight">
                                Digital Product &amp; Growth Partner
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* ── HEADING (word-by-word — prevents mid-word breaks on mobile) ── */}
                <div className="text-center w-full -mt-10 md:-mt-16 lg:-mt-20 relative z-20 pb-8 md:pb-12">
                    <h1 className="sr-only">Build Digital Systems That Grow Businesses</h1>

                    {/* Line 1 — word by word */}
                    <div
                        className="flex flex-wrap justify-center gap-x-[0.25em] mb-0"
                        aria-hidden="true"
                    >
                        {line1Words.map((word, i) => (
                            <motion.span
                                key={`l1-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + i * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12]"
                                style={{
                                    color: '#0a0f1e',
                                    textShadow: '0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,0.8)',
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    {/* Line 2 — word by word */}
                    <div
                        className="flex flex-wrap justify-center gap-x-[0.25em] mb-7"
                        aria-hidden="true"
                    >
                        {line2Words.map((word, i) => (
                            <motion.span
                                key={`l2-${i}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + i * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12]"
                                style={{
                                    color: '#0a0f1e',
                                    textShadow: '0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,0.8)',
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-base text-slate-500 font-normal max-w-lg mx-auto mb-8 leading-relaxed"
                    >
                        Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

                    {/* WhatsApp shortcut */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.25, duration: 0.4 }}
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
