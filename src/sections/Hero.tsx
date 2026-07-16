import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen pt-8 md:pt-10 pb-10 flex flex-col items-center bg-white overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} 
            />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center w-full flex-1 justify-center">
                {/* Founder Image (Shifted even higher) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-[260px] md:max-w-[400px] flex justify-center z-20"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                    }}
                >
                    <img
                        src="https://miaoda-conversation-file.s3cdn.medo.dev/user-bghxre74m4g0/conv-bgi1ft5zxukg/20260507/file-bgmqrr3jpjwg.png"
                        alt="Founder"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Hero Headline (Corrected Proportions & Full Sentence Glow) */}
                <div className="text-center w-full z-30 -mt-20 md:-mt-32 px-4 flex flex-col items-center">
                    <motion.h1
                        className="text-[13vw] md:text-[6.2vw] font-heading font-medium tracking-tighter leading-[1.05] mb-6 md:mb-10 inline-block text-[#0a0f1e] whitespace-nowrap"
                        style={{
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
                        }}
                    >
                        {"Build your Startup".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.1, delay: index * 0.05 }}
                                style={{
                                    textShadow: '0 0 15px white, 0 0 10px white, 0 0 5px white'
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        {"with Xaggment".split("").map((char, index) => (
                            <motion.span
                                key={index + 20}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{ duration: 0.1, delay: (index + 20) * 0.05 }}
                                style={{
                                    textShadow: '0 0 15px white, 0 0 10px white, 0 0 5px white'
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Dual Action Buttons (Made smaller and more refined) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-4 md:mt-8"
                    >
                        <Button
                            size="lg"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="sketch-btn-pro bg-[#000] text-white hover:bg-slate-900 px-8 py-4 md:px-10 md:py-5 text-sm md:text-lg font-bold h-auto shadow-xl transition-all w-[200px] md:w-auto"
                        >
                            Let's Explore
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                            className="sketch-btn-pro contact-btn-fix bg-white text-black border-2 border-black px-8 py-4 md:px-10 md:py-5 text-sm md:text-lg font-bold h-auto shadow-sm transition-all w-[200px] md:w-auto"
                        >
                            Contact Us
                        </Button>
                    </motion.div>

                    {/* Trusted Badge (Matching reference) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="mt-10 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-500 font-medium text-sm md:text-lg">
                            Trusted by <span className="text-blue-600 font-bold">1.3L+</span> Audience
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
