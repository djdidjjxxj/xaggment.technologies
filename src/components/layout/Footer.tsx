import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0a0f1e] text-white pt-20 pb-10 px-6 relative overflow-hidden border-t border-white/10" aria-label="Site footer">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-white text-[#0a0f1e] rounded-lg flex items-center justify-center font-black text-sm">
                                X
                            </div>
                            <span className="text-xl font-bold tracking-tighter uppercase text-white">XAGGMENT</span>
                        </div>
                        <p className="text-white/60 text-sm font-medium leading-relaxed max-w-sm">
                            Digital product &amp; growth partner for ambitious businesses. We build websites, software, SaaS platforms, AI automation, and digital marketing strategies that deliver real business outcomes.
                        </p>
                        <div className="pt-2 flex items-center gap-4 text-xs font-bold text-white/50">
                            <span>Kolkata, India</span>
                            <span>•</span>
                            <button
                                onClick={() => openWhatsApp('Hi Xaggment!')}
                                className="text-emerald-400 hover:underline"
                            >
                                WhatsApp Support
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Explore</h4>
                        <ul className="space-y-2.5 text-sm font-medium text-white/70">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/work" className="hover:text-white transition-colors">Work / Portfolio</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/insights" className="hover:text-white transition-colors">Insights &amp; Blog</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Services</h4>
                        <ul className="space-y-2.5 text-sm font-medium text-white/70">
                            <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
                            <li><Link to="/services/software-development" className="hover:text-white transition-colors">Software &amp; SaaS</Link></li>
                            <li><Link to="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
                            <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Custom Development</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Legal &amp; Contact</h4>
                        <ul className="space-y-2.5 text-sm font-medium text-white/70">
                            <li><Link to="/contact" className="hover:text-white transition-colors font-bold text-white">Start a Project →</Link></li>
                            <li><a href="mailto:hello@xaggment.com" className="hover:text-white transition-colors">hello@xaggment.com</a></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-white/40">
                    <p>© {new Date().getFullYear()} Xaggment Technologies. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
