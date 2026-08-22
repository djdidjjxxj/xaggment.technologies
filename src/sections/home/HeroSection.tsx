import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const line1Words = ['Build', 'Digital', 'Systems'];
const line2Words = ['That', 'Grow', 'Businesses'];

const FOUNDER_IMG =
    'https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png';

// ─── Word-by-word animated heading ────────────────────────────────────────────
// Using words (not letters) prevents mid-word line breaks on small screens.
const AnimatedHeading: React.FC<{ startDelay?: number }> = ({ startDelay = 0.3 }) => (
    <>
        <h1 className="sr-only">Build Digital Systems That Grow Businesses</h1>

        {/* Line 1 */}
        <div className="flex flex-wrap justify-center gap-x-[0.22em]" aria-hidden="true">
            {line1Words.map((word, i) => (
                <motion.span
                    key={`l1-${i}`}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.48, delay: startDelay + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block font-bold tracking-tight leading-[1.14]"
                    style={{
                        fontSize: 'clamp(2rem, 9.5vw, 4.5rem)',
                        color: '#0a0f1e',
                        textShadow: '0 0 22px rgba(255,255,255,1), 0 0 44px rgba(255,255,255,0.85)',
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </div>

        {/* Line 2 */}
        <div className="flex flex-wrap justify-center gap-x-[0.22em] mb-7" aria-hidden="true">
            {line2Words.map((word, i) => (
                <motion.span
                    key={`l2-${i}`}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.48, delay: startDelay + 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block font-bold tracking-tight leading-[1.14]"
                    style={{
                        fontSize: 'clamp(2rem, 9.5vw, 4.5rem)',
                        color: '#0a0f1e',
                        textShadow: '0 0 22px rgba(255,255,255,1), 0 0 44px rgba(255,255,255,0.85)',
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    </>
);

// ─── Shared CTAs ───────────────────────────────────────────────────────────────
const CTAs: React.FC<{ delay?: number }> = ({ delay = 1.05 }) => (
    <div className="text-center w-full px-4 pb-8 md:pb-12">
        <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-slate-500 max-w-lg mx-auto mb-8 leading-relaxed"
        >
            Websites, software, SaaS, AI automation and digital growth for ambitious businesses.
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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

        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
            onClick={() => openWhatsApp('Hi Xaggment! I want to discuss a project.')}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={13} className="text-emerald-500" />
            Or chat with us on WhatsApp
        </motion.button>
    </div>
);

// ══════════════════════════════════════════════════════════════════════════════
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
            className="relative pt-20 md:pt-24 bg-white overflow-x-hidden flex flex-col items-center"
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}
                aria-hidden="true"
            />

            <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center">

                {/* ════════════════════════════════════════════════════════════
                    MOBILE HERO  (visible only below md breakpoint)
                    ════════════════════════════════════════════════════════════
                    Layout: flex ROW
                      Left  (60%): Founder image
                      Right (40%): Handwritten annotation beside the image
                                   — NOT on top of the body
                      Below: Heading pulled up with -mt to close the gap
                    ════════════════════════════════════════════════════════════ */}
                <div className="md:hidden w-full flex flex-col items-center px-3">

                    {/* ── Flex row: Image | Annotation ── */}
                    <div className="flex items-start justify-center w-full gap-0">

                        {/* LEFT: Founder image — 60% of the row */}
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                            className="relative flex-shrink-0"
                            style={{ width: '60%' }}
                        >
                            <img
                                src={FOUNDER_IMG}
                                alt="Kaustav — Founder & CEO of Xaggment Technologies"
                                className="w-full h-auto object-cover object-top"
                                loading="eager"
                                style={{
                                    maskImage: 'linear-gradient(to bottom, black 62%, transparent 90%)',
                                    WebkitMaskImage: 'linear-gradient(to bottom, black 62%, transparent 90%)',
                                }}
                            />

                            {/*
                              Arrow SVG — originates from founder's right shoulder
                              (which is viewer's LEFT shoulder = left side of image,
                               ~40% from top, ~68% from left edge of image).
                              Arrow curves from that shoulder point outward to the RIGHT,
                              into the annotation div beside the image.
                              SVG has overflow:visible so it crosses the image boundary.
                            */}
                            <motion.svg
                                width="52"
                                height="42"
                                viewBox="0 0 52 42"
                                fill="none"
                                style={{
                                    position: 'absolute',
                                    top: '33%',
                                    right: '-40px',
                                    overflow: 'visible',
                                    zIndex: 20,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                {/* Curve from left (inside image, shoulder area) to right (annotation) */}
                                <motion.path
                                    d="M 4 30 C 12 16, 28 8, 48 16"
                                    stroke="#0a0f1e"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: 'easeInOut' }}
                                />
                                {/* Arrowhead at (48, 16) pointing right */}
                                <motion.path
                                    d="M 40 9 L 48 16 L 40 22"
                                    stroke="#0a0f1e"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 0.22 }}
                                />
                            </motion.svg>
                        </motion.div>

                        {/*
                          RIGHT: Handwritten annotation
                          paddingTop pushes text down to chest level beside the image.
                          Using 30vw ≈ ~40% of the image height (image width ≈ 60vw, aspect ~3:4 → height ~80vw; 30vw = 37.5%).
                          Text appears beside the chest area, arrow arrives from the left (image shoulder).
                        */}
                        <div
                            className="flex-1 z-20"
                            style={{ paddingTop: '30vw', paddingLeft: '10px' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    fontFamily: "'Caveat', cursive",
                                    fontSize: 'clamp(15px, 4.5vw, 19px)',
                                    fontWeight: 500,
                                    color: '#0a0f1e',
                                    lineHeight: 1.25,
                                    transform: 'rotate(-2deg)',
                                    transformOrigin: 'left top',
                                    display: 'inline-block',
                                    userSelect: 'none',
                                }}
                            >
                                Digital Product &amp;<br />Growth Partner
                            </motion.div>
                        </div>
                    </div>

                    {/*
                      Heading — negative margin closes the gap between
                      the faded image bottom and the heading.
                      -mt-14 pulls it up into the image fade zone.
                    */}
                    <div className="w-full text-center -mt-14 mb-0">
                        <AnimatedHeading startDelay={0.4} />
                    </div>
                </div>


                {/* ════════════════════════════════════════════════════════════
                    DESKTOP HERO  (hidden on mobile, visible from md up)
                    ════════════════════════════════════════════════════════════
                    Preserved composition:
                      — Badge + pencil arrow at chest level, right of founder
                      — Founder image centred, fades at waist
                      — Heading overlaps founder from waist down
                    ════════════════════════════════════════════════════════════ */}
                <div className="hidden md:flex flex-col items-center w-full">

                    {/* Desktop founder + badge/arrow */}
                    <div className="relative flex justify-center w-full">

                        {/* Badge pill + pencil arrow — chest level, right side */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="flex absolute top-[50%] right-[4%] lg:right-[10%] z-30 items-center gap-2"
                        >
                            {/* Pencil-sketch arrow pointing right toward badge */}
                            <motion.svg
                                width="44"
                                height="32"
                                viewBox="0 0 44 32"
                                fill="none"
                                className="text-[#0a0f1e] flex-shrink-0"
                            >
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

                            {/* Badge pill */}
                            <div className="bg-white border-2 border-[#0a0f1e] rounded-full px-4 py-2 shadow-lg whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                                    <span className="text-xs font-semibold text-[#0a0f1e] tracking-tight">
                                        Digital Product &amp; Growth Partner
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Desktop founder image */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative md:w-64 lg:w-72"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 50%, transparent 88%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 88%)',
                            }}
                        >
                            <img
                                src={FOUNDER_IMG}
                                alt="Kaustav — Founder & CEO of Xaggment Technologies"
                                className="w-full h-auto object-cover object-top"
                                loading="eager"
                            />
                        </motion.div>
                    </div>

                    {/* Desktop heading — overlaps founder from waist area */}
                    <div className="w-full text-center -mt-16 lg:-mt-20 mb-0">
                        <AnimatedHeading startDelay={0.3} />
                    </div>
                </div>

                {/* ════════════════════════════════════════════════════════════
                    SHARED: Subtext + CTAs
                    ════════════════════════════════════════════════════════════ */}
                <CTAs delay={1.05} />

            </div>
        </motion.section>
    );
};

export default HeroSection;
