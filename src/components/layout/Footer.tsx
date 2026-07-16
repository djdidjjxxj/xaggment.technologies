import React from 'react';
import { motion } from 'motion/react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white pt-24 pb-12 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Left Column: Contact & Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <p className="text-slate-400 font-bold text-lg">Contact us at</p>
                            <a
                                href="mailto:hello@xaggment.com"
                                className="text-3xl md:text-4xl font-black text-[#0f172a] hover:opacity-70 transition-opacity"
                            >
                                hello@xaggment.com
                            </a>
                        </div>

                        <div className="relative max-w-md group">
                            <div className="flex items-center p-2 rounded-full border border-slate-200 bg-white shadow-sm focus-within:border-slate-400 transition-all">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-1 bg-transparent px-6 py-3 outline-none text-slate-600 font-medium placeholder:text-slate-300"
                                />
                                <button className="bg-[#000] text-white px-8 py-3 rounded-full font-black text-sm hover:scale-[0.98] transition-transform">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-12"
                    >
                        <div className="space-y-6">
                            <h4 className="text-slate-400 font-black text-sm uppercase tracking-widest">Links</h4>
                            <ul className="space-y-4">
                                {['Home', 'Prebuilt', 'Customized', 'About Us', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <button className="text-[#0f172a] font-bold hover:opacity-50 transition-opacity">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-slate-400 font-black text-sm uppercase tracking-widest">More Resources</h4>
                            <ul className="space-y-4">
                                {['Blogs', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map((item) => (
                                    <li key={item}>
                                        <button className="text-[#0f172a] font-bold hover:opacity-50 transition-opacity">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Large Watermark Text */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="relative mt-20 pt-10 border-t border-slate-50 flex justify-center overflow-hidden"
                >
                    <h2 className="text-[12vw] font-black text-[#0f172a]/[0.03] tracking-[-0.05em] leading-none select-none uppercase pointer-events-none">
                        Xaggment
                    </h2>
                </motion.div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-300 uppercase tracking-widest">
                    <p>© 2026 Xaggment Technologies. All rights reserved.</p>
                    <div className="flex gap-8">
                        <button className="hover:text-slate-500 transition-colors">Privacy Policy</button>
                        <button className="hover:text-slate-500 transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
