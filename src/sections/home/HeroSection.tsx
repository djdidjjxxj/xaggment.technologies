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
                    Layout:
                      1. Large founder image (78% of content width)
                      2. Handwritten editorial annotation at chest level
                         — no badge, no pill, no container
                         — arrow originates from founder's right shoulder
                      3. Heading clearly separated below the composition
                    ════════════════════════════════════════════════════════════ */}
                <div className="md:hidden w-full flex flex-col items-center px-4">

                    {/* Founder image — large on mobile (78% width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mx-auto"
                        style={{ width: '78%', maxWidth: '320px' }}
                    >
                        <img
                            src={FOUNDER_IMG}
                            alt="Kaustav — Founder & CEO of Xaggment Technologies"
                            className="w-full h-auto object-cover object-top"
                            loading="eager"
                            style={{
                                /*
                                 * Fade starts at 65% so the chest area (annotation zone) is
                                 * fully visible; bottom fades cleanly into the heading below.
                                 */
                                maskImage: 'linear-gradient(to bottom, black 65%, transparent 92%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 92%)',
                            }}
                        />

                        {/*
                         * HANDWRITTEN ANNOTATION
                         * ──────────────────────
                         * Positioned at: top 52% (chest/upper-torso area), left 44%
                         * — well above the fade zone (starts at 65%)
                         * — sits to the right of centre so it doesn't cover the face
                         *
                         * The SVG arrow extends UP and to the LEFT from this anchor point.
                         * It traces a natural curve back toward the founder's right shoulder
                         * (viewer's left: approx top 32%, left 28% of image).
                         *
                         * In annotation-relative coords the SVG spans:
                         *   width 68px, height 80px
                         *   positioned top:-80px left:-68px (upper-left of anchor)
                         *
                         * Arrow path: (8,8) → curve → (58,72)  [shoulder → text]
                         * Arrowhead at (58,72) pointing lower-right
                         */}
                        <div
                            className="absolute z-20"
                            style={{ top: '52%', left: '44%' }}
                        >
                            {/* SVG arrow: shoulder → annotation text */}
                            <motion.svg
                                width="68"
                                height="80"
                                viewBox="0 0 68 80"
                                fill="none"
                                style={{
                                    position: 'absolute',
                                    top: '-80px',
                                    left: '-68px',
                                    overflow: 'visible',
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.55, duration: 0.2 }}
                            >
                                {/* Main curve: from shoulder area (upper-left) to annotation (lower-right) */}
                                <motion.path
                                    d="M 8 8 C 18 28, 38 52, 58 72"
                                    stroke="#0a0f1e"
                                    strokeWidth="1.4"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.7, duration: 0.85, ease: 'easeInOut' }}
                                />
                                {/* Arrowhead at (58, 72) — two short strokes forming a V */}
                                <motion.path
                                    d="M 49 66 L 58 72 L 52 80"
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

                            {/*
                             * Handwritten text
                             * ─────────────────
                             * Font: Caveat (Google Fonts) — elegant editorial handwriting
                             * No background, no border, no pill, no container — just text.
                             * Slight −2° tilt for natural hand-written feel.
                             */}
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    fontFamily: "'Caveat', cursive",
                                    fontSize: 'clamp(16px, 4.8vw, 20px)',
                                    fontWeight: 500,
                                    color: '#0a0f1e',
                                    lineHeight: 1.25,
                                    transform: 'rotate(-2deg)',
                                    transformOrigin: 'top left',
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                    userSelect: 'none',
                                }}
                            >
                                Digital Product &amp;<br />Growth Partner
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* ── Heading — clearly below the founder composition, never overlapping ── */}
                    <div className="w-full text-center mt-10 mb-0">
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
