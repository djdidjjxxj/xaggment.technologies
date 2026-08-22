import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'logo' | 'reveal' | 'done'>('logo');

    useEffect(() => {
        // Check if this is the first visit this session
        const hasSeenLoader = sessionStorage.getItem('xaggment-loader-seen');

        if (hasSeenLoader) {
            // Skip full animation on repeat visits — just show briefly
            const t1 = setTimeout(() => setPhase('reveal'), 300);
            const t2 = setTimeout(() => {
                setPhase('done');
                setTimeout(onComplete, 100);
            }, 900);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        } else {
            sessionStorage.setItem('xaggment-loader-seen', 'true');
            // Phase 1: Show X logo (0 → 0.8s)
            const t1 = setTimeout(() => setPhase('reveal'), 800);
            // Phase 2: Panels split open (0.8s → 1.5s), then call onComplete
            const t2 = setTimeout(() => {
                setPhase('done');
                setTimeout(onComplete, 100);
            }, 1600);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        }
    }, [onComplete]);

    // Easing for the panel reveal
    const ease = [0.76, 0, 0.24, 1] as const;
    const revealDuration = 0.7;
    const revealDelay = 0.04;

    return (
        <AnimatePresence>
            {phase !== 'done' && (
                <motion.div
                    className="fixed inset-0 z-[200] overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    {/* ── TOP triangle (slides UP) ────────────────────── */}
                    <motion.div
                        className="absolute inset-0 bg-[#0a0f1e]"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
                        animate={phase === 'reveal' ? { y: '-100%' } : { y: 0 }}
                        initial={{ y: 0 }}
                        transition={{ duration: revealDuration, ease, delay: revealDelay * 0 }}
                    />

                    {/* ── BOTTOM triangle (slides DOWN) ───────────────── */}
                    <motion.div
                        className="absolute inset-0 bg-[#0a0f1e]"
                        style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
                        animate={phase === 'reveal' ? { y: '100%' } : { y: 0 }}
                        initial={{ y: 0 }}
                        transition={{ duration: revealDuration, ease, delay: revealDelay * 1 }}
                    />

                    {/* ── LEFT triangle (slides LEFT) ─────────────────── */}
                    <motion.div
                        className="absolute inset-0 bg-[#0a0f1e]"
                        style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
                        animate={phase === 'reveal' ? { x: '-100%' } : { x: 0 }}
                        initial={{ x: 0 }}
                        transition={{ duration: revealDuration, ease, delay: revealDelay * 1 }}
                    />

                    {/* ── RIGHT triangle (slides RIGHT) ───────────────── */}
                    <motion.div
                        className="absolute inset-0 bg-[#0a0f1e]"
                        style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
                        animate={phase === 'reveal' ? { x: '100%' } : { x: 0 }}
                        initial={{ x: 0 }}
                        transition={{ duration: revealDuration, ease, delay: revealDelay * 0 }}
                    />

                    {/* ── CENTER logo ── */}
                    <AnimatePresence>
                        {phase === 'logo' && (
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.08 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* X mark */}
                                <div className="relative mb-5">
                                    <svg
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        className="drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    >
                                        <rect
                                            x="8"
                                            y="8"
                                            width="48"
                                            height="48"
                                            rx="12"
                                            fill="white"
                                            fillOpacity="0.08"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeOpacity="0.2"
                                        />
                                        <line x1="20" y1="20" x2="44" y2="44" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                        <line x1="44" y1="20" x2="20" y2="44" stroke="white" strokeWidth="5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                <motion.span
                                    className="text-white text-2xl md:text-3xl font-black tracking-[-0.04em] uppercase"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                >
                                    XAGGMENT
                                </motion.span>

                                <motion.span
                                    className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-1.5 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                >
                                    Technologies
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
