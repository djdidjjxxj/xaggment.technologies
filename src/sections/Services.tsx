import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/utils/whatsapp';
import { X, Send, Bot, Zap, Brain, ArrowRight } from 'lucide-react';

// ── Custom Development Enquiry Modal ──────────────────────────────────────────
const CustomDevModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [form, setForm] = useState({ name: '', phone: '', email: '', description: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hi Xaggment! I have a custom development enquiry.%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A%0A*Project Details:*%0A${form.description}%0A%0APlease get back to me!`;
        window.open(`https://wa.me/916290322713?text=${msg}`, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-[2rem] p-8 md:p-10 w-full max-w-lg shadow-2xl z-10"
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        Custom Development Enquiry
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#0f172a] tracking-tight">Let's Build Something Extraordinary</h3>
                    <p className="text-slate-500 mt-2 text-sm">Fill in your details and we'll connect with you on WhatsApp instantly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Your Name *</label>
                            <input
                                required
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                placeholder="Raj Sharma"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Phone Number *</label>
                            <input
                                required
                                value={form.phone}
                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Email Address</label>
                        <input
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="raj@company.com"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Project Description *</label>
                        <textarea
                            required
                            value={form.description}
                            onChange={e => setForm({ ...form, description: e.target.value })}
                            placeholder="Tell us about your project — what do you want to build? What problem does it solve? Any specific features?"
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium transition-all resize-none"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-[#0f172a] hover:bg-black text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 h-auto"
                    >
                        <Send size={16} />
                        Send Enquiry via WhatsApp
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};

// ── AI Automation Info Modal ──────────────────────────────────────────────────
const AIModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const features = [
        { icon: Bot, title: 'Intelligent Chatbots', desc: 'AI-powered bots that handle customer queries 24/7, reducing support costs by up to 70%.' },
        { icon: Zap, title: 'Workflow Automation', desc: 'Automate repetitive tasks across your business — from data entry to invoice processing.' },
        { icon: Brain, title: 'Predictive Analytics', desc: 'Leverage AI to forecast trends, customer behavior, and business outcomes before they happen.' },
        { icon: ArrowRight, title: 'CRM & Lead Management', desc: 'Automated lead scoring, follow-ups, and nurturing sequences that convert more prospects.' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-[#0f172a] rounded-[2rem] p-8 md:p-10 w-full max-w-2xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                >
                    <X size={18} />
                </button>

                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        AI Automation Services
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                        Let AI Work While<br />You Sleep
                    </h3>
                    <p className="text-white/60 mt-3 text-sm md:text-base">Intelligent automation solutions that reduce costs, eliminate errors, and accelerate growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {features.map((f, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                                <f.icon size={20} className="text-blue-400" />
                            </div>
                            <h4 className="font-bold text-white mb-1.5">{f.title}</h4>
                            <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-600 rounded-2xl p-5 flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
                        <p className="text-white font-bold">Ready to automate your business?</p>
                        <p className="text-white/70 text-sm">Get a free consultation and automation audit.</p>
                    </div>
                    <Button
                        onClick={() => { openWhatsApp("Hi Xaggment! I'm interested in AI Automation for my business. Can we discuss the options?"); onClose(); }}
                        className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl h-auto whitespace-nowrap"
                    >
                        Discuss My Project →
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

// ── Combo Offer Banner ────────────────────────────────────────────────────────
const ComboOfferBanner: React.FC = () => {
    const offers = [
        '🔥 Website + Marketing Combo starting ₹6,999/mo',
        '⚡ SaaS Prebuilt — Starting from ₹30,000',
        '🤖 AI Automation — Custom Pricing',
        '🎯 Standard Combo: Website + Full Digital Marketing @ ₹9,999/mo',
        '💎 Premium Combo: Everything Unlimited @ ₹11,999/mo',
        '🌐 Custom Development — Request a Quote',
    ];

    return (
        <div className="w-full bg-[#0f172a] py-4 overflow-hidden relative">
            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: [0, -2400] }}
                    transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 28, ease: 'linear' } }}
                    className="flex items-center gap-12 whitespace-nowrap px-8"
                >
                    {[...offers, ...offers, ...offers].map((offer, i) => (
                        <span key={i} className="text-sm md:text-base font-bold text-white/80 hover:text-white transition-colors cursor-default flex items-center gap-2">
                            {offer}
                            <span className="text-white/20 mx-2">•</span>
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

// ── Main Services Section ─────────────────────────────────────────────────────
const services = [
    {
        id: 'custom',
        title: 'Custom Development',
        description: 'Transform your specific business requirements into high-performance digital reality.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff864238-693b-4cd7-ac80-4237c0ef1eca.jpg',
        features: ['Bespoke Web App', 'E-commerce Solutions', 'Enterprise Software'],
        cta: 'Enquire Now',
        ctaSecondary: 'Learn More',
    },
    {
        id: 'saas',
        title: 'SaaS Prebuilt @ Starting from 30,000 /-',
        description: 'Launch your product in record time with our battle-tested, ready-to-scale SaaS architectures.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f4fd9544-6c02-4f3e-81c3-e0fd0a3b720f.jpg',
        features: ['Quick Deployment', 'Modern UI/UX', 'Full Scalability'],
        cta: 'Enquire Now',
    },
    {
        id: 'ai',
        title: 'AI Automation',
        description: 'Reduce operational costs and increase efficiency with intelligent AI-powered agents.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e172f103-bf6a-468d-b861-7592449a5fd7.jpg',
        features: ['Intelligent Bots', 'Workflow Optimization', 'Predictive Analysis'],
        cta: 'Explore More',
    }
];

const Services: React.FC = () => {
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [showAIModal, setShowAIModal] = useState(false);

    const handleCTA = (serviceId: string) => {
        if (serviceId === 'custom') {
            setShowCustomModal(true);
        } else if (serviceId === 'ai') {
            setShowAIModal(true);
        } else if (serviceId === 'saas') {
            openWhatsApp("Hi Xaggment! I'm interested in a SaaS Prebuilt solution. Can you share more details and pricing?");
        }
    };

    return (
        <>
            <AnimatePresence>
                {showCustomModal && <CustomDevModal onClose={() => setShowCustomModal(false)} />}
                {showAIModal && <AIModal onClose={() => setShowAIModal(false)} />}
            </AnimatePresence>

            <section id="services" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                            Features
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                        >
                            Streamline Business <br className="hidden md:block" /> with our Flexible Options
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="h-full"
                            >
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                                    className="h-full"
                                >
                                    <Card className="group overflow-hidden border-none shadow-none bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 h-full flex flex-col transition-all duration-500 hover:bg-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                                        <div className="relative aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 border border-slate-100 shadow-sm">
                                            <motion.img
                                                whileHover={{ scale: 1.15 }}
                                                transition={{ duration: 0.8 }}
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-1000"
                                            />
                                        </div>
                                    <CardContent className="p-0 flex flex-col flex-1">
                                        <CardTitle className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#0f172a] tracking-tight leading-tight">{service.title}</CardTitle>
                                        <CardDescription className="text-slate-500 text-lg md:text-xl font-bold mb-10 leading-relaxed">
                                            {service.description}
                                        </CardDescription>
                                        <div className="mt-auto space-y-4">
                                            {service.features.map((f, i) => (
                                                <div key={i} className="flex items-center gap-4 text-base md:text-lg font-bold text-[#0f172a]">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                        <Button
                                            onClick={() => handleCTA(service.id)}
                                            className="mt-8 w-full bg-[#0f172a] hover:bg-black text-white rounded-2xl py-5 font-bold h-auto transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
                                        >
                                            {service.cta}
                                        </Button>
                                    </CardContent>
                                </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Combo Offer Sliding Banner — right after service cards */}
            <ComboOfferBanner />
        </>
    );
};

export default Services;
