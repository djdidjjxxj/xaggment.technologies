import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 4000);
            setEmail('');
        }
    };

    return (
        <footer className="bg-white text-[#0a0f1e] pt-20 pb-10 px-6 relative overflow-hidden border-t border-slate-100" aria-label="Site footer">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
                    {/* Left Column: Direct Contact & Newsletter */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="space-y-3">
                            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Direct Contact</p>
                            <a
                                href="mailto:hello@xaggment.com"
                                className="text-2xl md:text-4xl font-heading font-black text-[#0a0f1e] hover:text-blue-600 transition-colors block tracking-tight"
                            >
                                hello@xaggment.com
                            </a>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-md">
                                Digital product &amp; growth partner. We build websites, software, SaaS platforms, AI automation, and digital growth strategies for ambitious businesses.
                            </p>
                        </div>

                        {/* Newsletter Input */}
                        <div className="max-w-md">
                            <p className="text-xs font-bold text-slate-500 mb-2">Subscribe to Xaggment Insights</p>
                            {subscribed ? (
                                <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-2xl text-xs font-bold border border-emerald-100">
                                    <CheckCircle2 size={16} />
                                    <span>Thank you for subscribing!</span>
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="flex items-center p-1.5 rounded-full border border-slate-200 bg-slate-50 shadow-sm focus-within:border-[#0a0f1e] focus-within:bg-white transition-all">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address..."
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="flex-1 bg-transparent px-4 py-2 outline-none text-slate-700 text-xs font-medium placeholder:text-slate-400"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#0a0f1e] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                                    >
                                        <span>Subscribe</span>
                                        <Send size={12} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right Columns: Links */}
                    <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Column 1: Navigation */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Explore</h4>
                            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
                                <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
                                <li><Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
                                <li><Link to="/work" className="hover:text-blue-600 transition-colors">Work / Portfolio</Link></li>
                                <li><Link to="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link></li>
                                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                                <li><Link to="/insights" className="hover:text-blue-600 transition-colors">Insights &amp; Blog</Link></li>
                            </ul>
                        </div>

                        {/* Column 2: Services */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Services</h4>
                            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
                                <li><Link to="/services/web-development" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                                <li><Link to="/services/software-development" className="hover:text-blue-600 transition-colors">Software &amp; SaaS</Link></li>
                                <li><Link to="/services/ai-automation" className="hover:text-blue-600 transition-colors">AI Automation</Link></li>
                                <li><Link to="/services/digital-marketing" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
                                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Custom Development</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Legal & Support */}
                        <div className="space-y-4 col-span-2 sm:col-span-1">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Legal &amp; Support</h4>
                            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
                                <li>
                                    <Link to="/contact" className="text-blue-600 hover:underline flex items-center gap-1 font-bold">
                                        <span>Start a Project</span>
                                        <ArrowRight size={12} />
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => openWhatsApp('Hi Xaggment!')} className="text-emerald-600 hover:underline font-bold">
                                        WhatsApp Chat
                                    </button>
                                </li>
                                <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms &amp; Conditions</Link></li>
                                <li><Link to="/refund-policy" className="hover:text-blue-600 transition-colors">Refund Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── ANIMATED DUAL-SIDE WATERMARK TEXT (XAGG from Left, MENT from Right) ── */}
                <div className="relative pt-6 border-t border-slate-100 flex justify-center items-center overflow-hidden">
                    <div className="text-[14vw] font-black text-[#0a0f1e]/[0.03] tracking-[-0.05em] leading-none select-none uppercase pointer-events-none flex items-center justify-center">
                        <motion.span
                            initial={{ x: -160, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block"
                        >
                            XAGG
                        </motion.span>
                        <motion.span
                            initial={{ x: 160, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block"
                        >
                            MENT
                        </motion.span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
                    <p>© {new Date().getFullYear()} Xaggment Technologies. All rights reserved. Kolkata, India.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-slate-800 transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-slate-800 transition-colors">Terms</Link>
                        <Link to="/refund-policy" className="hover:text-slate-800 transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
