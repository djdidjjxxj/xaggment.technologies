import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Bot, X } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const SocialFloating: React.FC = () => {
    const [showXaggModal, setShowXaggModal] = useState(false);

    return (
        <>
            {/* ── LEFT SIDE SOCIALS (Facebook, Instagram) ──────────────────── */}
            <div className="fixed bottom-6 left-4 md:left-6 z-40 flex flex-col gap-2.5 pointer-events-auto">
                {/* Facebook */}
                <motion.a
                    href="https://www.facebook.com/xaggmenttechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-11 h-11 md:w-12 md:h-12 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-center text-slate-700 shadow-lg hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-105 transition-all duration-300 group"
                    aria-label="Visit Xaggment Facebook Page"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                    href="https://www.instagram.com/xaggment"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.95, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-11 h-11 md:w-12 md:h-12 bg-white border border-slate-200/90 rounded-2xl flex items-center justify-center text-slate-700 shadow-lg hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 group"
                    aria-label="Visit Xaggment Instagram Profile"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </motion.a>
            </div>

            {/* ── RIGHT SIDE CONTACTS (WhatsApp, XAGG AI) ──────────────────── */}
            <div className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col gap-2.5 pointer-events-auto items-end">
                {/* XAGG AI Placeholder */}
                <motion.button
                    onClick={() => setShowXaggModal(true)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.95, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-11 h-11 md:w-12 md:h-12 bg-[#0a0f1e] text-white rounded-2xl flex flex-col items-center justify-center shadow-xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 group relative"
                    aria-label="XAGG AI Assistant — Coming Soon"
                >
                    <Bot size={18} />
                    <span className="text-[8px] font-black tracking-widest leading-none mt-0.5">XAGG</span>

                    {/* Coming Soon indicator badge */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-white animate-pulse" />
                </motion.button>

                {/* WhatsApp */}
                <motion.button
                    onClick={() => openWhatsApp('Hi Xaggment, I found your website and want to know more about your services!')}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-11 h-11 md:w-12 md:h-12 bg-[#25d366] text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
                    aria-label="Chat with us on WhatsApp"
                >
                    <MessageCircle size={22} />
                </motion.button>
            </div>

            {/* ── XAGG AI COMING SOON MODAL ────────────────────────────────── */}
            <AnimatePresence>
                {showXaggModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowXaggModal(false)}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 pointer-events-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 16 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 16 }}
                            onClick={e => e.stopPropagation()}
                            className="bg-white border border-slate-200 rounded-3xl p-8 max-w-sm w-full shadow-2xl relative text-center"
                        >
                            <button
                                onClick={() => setShowXaggModal(false)}
                                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
                                aria-label="Close"
                            >
                                <X size={18} />
                            </button>

                            <div className="w-14 h-14 bg-[#0a0f1e] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Bot size={28} />
                            </div>

                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-2 border border-blue-100">
                                AI Assistant — In Development
                            </span>

                            <h3 className="text-xl font-heading font-bold text-[#0a0f1e] mb-2">
                                Meet XAGG AI
                            </h3>

                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                                We are currently engineering XAGG — our autonomous AI assistant designed to answer project queries and provide instant estimates 24/7.
                            </p>

                            <button
                                onClick={() => {
                                    setShowXaggModal(false);
                                    openWhatsApp("Hi Xaggment! I'm interested in learning more about your XAGG AI assistant.");
                                }}
                                className="w-full bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold py-3 rounded-2xl text-xs transition-colors"
                            >
                                Enquire via WhatsApp
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SocialFloating;
