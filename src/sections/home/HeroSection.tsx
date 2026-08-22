import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

// Split heading into individual characters for letter-by-letter animation
const line1 = 'Build Digital Systems';
const line2 = 'That Grow Businesses';

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
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}
                aria-hidden="true"
            />

            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">

                {/* ── FOUNDER IMAGE + FLOATING BADGE ── */}
                <div className="relative flex justify-center w-full">
                    {/* Badge above/beside the founder — top right of image */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-[8%] right-[5%] md:right-[12%] z-30 flex items-center gap-2"
                    >
                        {/* Pencil-sketched curved arrow (black, pointing down-left toward badge) */}
                        <motion.svg
                            width="52"
                            height="44"
                            viewBox="0 0 52 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#0a0f1e] flex-shrink-0 -mr-2"
                            initial={{ opacity: 0, pathLength: 0 }}
                            animate={{ opacity: 1, pathLength: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <motion.path
                                d="M 46 4 C 42 12, 28 16, 16 30 M 16 30 L 10 22 M 16 30 L 22 36"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
                            />
                        </motion.svg>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.55, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white border-2 border-[#0a0f1e] rounded-full px-4 py-2 shadow-md whitespace-nowrap"
                        >
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                <span className="text-xs font-semibold text-[#0a0f1e] tracking-tight">
                                    Digital Product &amp; Growth Partner
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Founder Image — moderate size, fading bottom so heading overlaps naturally */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-52 sm:w-60 md:w-72 lg:w-80"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 90%)',
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

                {/* ── HEADING — overlaps from hand area, black with white glow, letter-by-letter animation ── */}
                <div className="text-center w-full px-4 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 relative z-20 pb-8 md:pb-12">
                    <h1 className="sr-only">Build Digital Systems That Grow Businesses</h1>

                    {/* Line 1 */}
                    <div
                        className="flex flex-wrap justify-center text-[9.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-6xl font-bold tracking-tight leading-[1.15] mb-1"
                        aria-hidden="true"
                    >
                        {line1.split('').map((char, i) => (
                            <motion.span
                                key={`l1-${i}`}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.3 + i * 0.022,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="inline-block"
                                style={{
                                    color: '#0a0f1e',
                                    textShadow: '0 0 18px rgba(255,255,255,0.9), 0 0 36px rgba(255,255,255,0.6), 0 2px 6px rgba(255,255,255,0.4)',
                                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Line 2 */}
                    <div
                        className="flex flex-wrap justify-center text-[9.5vw] sm:text-[7vw] md:text-[5.5vw] lg:text-6xl font-bold tracking-tight leading-[1.15] mb-8"
                        aria-hidden="true"
                    >
                        {line2.split('').map((char, i) => (
                            <motion.span
                                key={`l2-${i}`}
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.3 + (line1.length + i) * 0.022,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="inline-block"
                                style={{
                                    color: '#0a0f1e',
                                    textShadow: '0 0 18px rgba(255,255,255,0.9), 0 0 36px rgba(255,255,255,0.6), 0 2px 6px rgba(255,255,255,0.4)',
                                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Sub-description */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-sm md:text-base text-slate-500 font-normal max-w-lg mx-auto mb-8 leading-relaxed"
                    >
                        Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                        transition={{ delay: 1.45, duration: 0.4 }}
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
