import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [phase, setPhase] = useState<'logo' | 'reveal' | 'done'>('logo');

    useEffect(() => {
        // Phase 1: Show X logo (0 → 1s)
        const t1 = setTimeout(() => setPhase('reveal'), 1200);
        // Phase 2: Panels split open (1.2s → 2.5s), then call onComplete
        const t2 = setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 100);
        }, 2600);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onComplete]);

    // Easing for the panel reveal
    const ease = [0.76, 0, 0.24, 1] as const;
    const revealDuration = 0.9;
    const revealDelay = 0.05;

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

                    {/* ── CENTER logo (shown during logo phase, fades before reveal) ── */}
                    <AnimatePresence>
                        {phase === 'logo' && (
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.08 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* X mark */}
                                <div className="relative mb-6">
                                    <svg
                                        width="72"
                                        height="72"
                                        viewBox="0 0 72 72"
                                        fill="none"
                                        className="drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                    >
                                        {/* White diamond bg */}
                                        <rect
                                            x="9"
                                            y="9"
                                            width="54"
                                            height="54"
                                            rx="14"
                                            fill="white"
                                            fillOpacity="0.08"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeOpacity="0.2"
                                        />
                                        {/* X strokes */}
                                        <line x1="22" y1="22" x2="50" y2="50" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
                                        <line x1="50" y1="22" x2="22" y2="50" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                <motion.span
                                    className="text-white text-3xl md:text-4xl font-black tracking-[-0.04em] uppercase"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25, duration: 0.5 }}
                                >
                                    XAGGMENT
                                </motion.span>

                                <motion.span
                                    className="text-white/40 text-xs uppercase tracking-[0.3em] mt-2 font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.55, duration: 0.5 }}
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
