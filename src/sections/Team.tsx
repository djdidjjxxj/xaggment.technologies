import React from 'react';
import { motion } from 'motion/react';

const teamRoles = [
    {
        id: '1',
        initial: 'K',
        title: 'Kaustav',
        role: 'Founder & CEO',
        desc: 'Visionary entrepreneur building the future of digital businesses — one automation at a time.',
        delay: 0.1
    },
    {
        id: '2',
        initial: 'UI',
        title: 'Design Team',
        role: 'UI/UX & Creative',
        desc: 'Crafting pixel-perfect, conversion-optimized interfaces that leave a lasting impression.',
        delay: 0.2
    },
    {
        id: '3',
        initial: '</>',
        title: 'Engineering Team',
        role: 'Web & SaaS Development',
        desc: 'Building robust, scalable architectures and blazing-fast web applications.',
        delay: 0.3
    },
    {
        id: '4',
        initial: 'AI',
        title: 'Automation Team',
        role: 'AI & Automations',
        desc: 'Developing intelligent agents and workflows to put your business on autopilot.',
        delay: 0.4
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 px-6 bg-white overflow-hidden relative">
            {/* Animated Background Elements */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" 
            />
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[120px]" 
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-6 py-2 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6"
                    >
                        Core Team
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        The Minds Behind <br className="hidden md:block" /> Xaggment
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {teamRoles.map((member) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: member.delay, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative w-full h-full"
                        >
                            {/* Floating animation wrapper */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: member.delay }}
                                className="h-full"
                            >
                                <div className="h-full bg-[#0f172a] rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center shadow-xl hover:shadow-[0_40px_80px_rgba(37,99,235,0.15)] transition-all duration-500 group-hover:-translate-y-4 overflow-hidden relative">
                                    
                                    {/* Hover gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                                    {/* Monogram */}
                                    <motion.div 
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.8, type: "spring" }}
                                        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors z-10"
                                    >
                                        <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                            {member.initial}
                                        </span>
                                    </motion.div>

                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight mb-2 z-10 group-hover:text-blue-200 transition-colors">
                                        {member.title}
                                    </h3>
                                    <p className="text-[10px] md:text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-6 z-10">
                                        {member.role}
                                    </p>

                                    <div className="w-10 h-[2px] bg-white/20 rounded-full mb-6 z-10 group-hover:w-20 group-hover:bg-blue-400 transition-all duration-500" />

                                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-medium z-10 mt-auto">
                                        {member.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
