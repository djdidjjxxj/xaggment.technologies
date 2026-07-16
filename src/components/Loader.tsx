import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Wait for exit animation
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark overflow-hidden"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    {/* Top Left to Bottom Right bar */}
                    <motion.div
                        className="absolute h-[200%] w-[15%] bg-brand-blue"
                        initial={{ rotate: 45, x: '-150%', y: '-150%' }}
                        animate={{ x: '0%', y: '0%' }}
                        exit={{ x: '-150%', y: '-150%' }}
                        transition={{ duration: 1, ease: "circOut" }}
                    />

                    {/* Top Right to Bottom Left bar */}
                    <motion.div
                        className="absolute h-[200%] w-[15%] bg-brand-purple"
                        initial={{ rotate: -45, x: '150%', y: '-150%' }}
                        animate={{ x: '0%', y: '0%' }}
                        exit={{ x: '150%', y: '-150%' }}
                        transition={{ duration: 1, ease: "circOut", delay: 0.1 }}
                    />

                    <motion.div
                        className="relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-tighter">
                            X<span className="text-brand-teal">aggment</span>
                        </h1>
                        <motion.p
                            className="text-white/60 text-center mt-4 tracking-widest uppercase text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            Future of Automation
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
