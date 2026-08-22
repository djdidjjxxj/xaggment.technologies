import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Send, MessageCircle, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const projectTypes = [
    'Website',
    'E-Commerce',
    'Web App / SaaS',
    'Custom Software',
    'AI Automation',
    'Digital Marketing',
    'Not Sure',
];

const budgetRanges = [
    '₹10k – ₹25k',
    '₹25k – ₹50k',
    '₹50k – ₹1 Lakh',
    '₹1 Lakh+',
    'Not Sure',
];

const timelines = [
    'ASAP (< 2 weeks)',
    '1 Month',
    '1 – 3 Months',
    'Flexible',
];

const ContactPage: React.FC = () => {
    const [selectedType, setSelectedType] = useState<string>('Website');
    const [selectedBudget, setSelectedBudget] = useState<string>('₹25k – ₹50k');
    const [selectedTimeline, setSelectedTimeline] = useState<string>('1 Month');

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        details: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Hi Xaggment!%0A%0A*Project Enquiry*%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Phone:* ${form.phone}%0A*Looking for:* ${selectedType}%0A*Budget:* ${selectedBudget}%0A*Timeline:* ${selectedTimeline}%0A%0A*Project Details:*%0A${form.details}`;
        window.open(`https://wa.me/916290322713?text=${text}`, '_blank');
        setSubmitted(true);
    };

    return (
        <>
            <Helmet>
                <title>Start a Project / Contact | Xaggment Technologies</title>
                <meta name="description" content="Enquire about your project with Xaggment Technologies — websites, software, AI automation and digital growth." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="eyebrow-label mb-3 inline-block"
                        >
                            Project Enquiry
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Let's build something great.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text"
                        >
                            Tell us what you're trying to build, improve or automate. We'll help you map out the right strategy.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left Column: Form */}
                        <div className="lg:col-span-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12">
                            {submitted ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0a0f1e]">Enquiry Received!</h2>
                                    <p className="text-slate-500 font-medium max-w-md mx-auto">
                                        We have redirected your details to WhatsApp. We will connect with you shortly!
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-xs font-bold text-blue-600 hover:underline"
                                    >
                                        Submit another enquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* What do you need? */}
                                    <div>
                                        <label className="eyebrow-label mb-3 block">1. What do you need help with?</label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {projectTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setSelectedType(type)}
                                                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                                                        selectedType === type
                                                            ? 'bg-[#0a0f1e] text-white shadow-sm'
                                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                                                    }`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Estimated Budget */}
                                    <div>
                                        <label className="eyebrow-label mb-3 block">2. Estimated Budget</label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {budgetRanges.map((budget) => (
                                                <button
                                                    key={budget}
                                                    type="button"
                                                    onClick={() => setSelectedBudget(budget)}
                                                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                                                        selectedBudget === budget
                                                            ? 'bg-[#0a0f1e] text-white shadow-sm'
                                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                                                    }`}
                                                >
                                                    {budget}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div>
                                        <label className="eyebrow-label mb-3 block">3. Expected Timeline</label>
                                        <div className="flex flex-wrap gap-2.5">
                                            {timelines.map((time) => (
                                                <button
                                                    key={time}
                                                    type="button"
                                                    onClick={() => setSelectedTimeline(time)}
                                                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                                                        selectedTimeline === time
                                                            ? 'bg-[#0a0f1e] text-white shadow-sm'
                                                            : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400'
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Contact Information */}
                                    <div className="space-y-4 pt-4 border-t border-slate-200/60">
                                        <label className="eyebrow-label block">4. Your Contact Details</label>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Your Name *"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#0a0f1e] text-sm font-medium transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="Phone / WhatsApp Number *"
                                                    value={form.phone}
                                                    onChange={e => setForm({ ...form, phone: e.target.value })}
                                                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#0a0f1e] text-sm font-medium transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address *"
                                                value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#0a0f1e] text-sm font-medium transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us a bit about your project or business goals..."
                                                value={form.details}
                                                onChange={e => setForm({ ...form, details: e.target.value })}
                                                className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-[#0a0f1e] text-sm font-medium transition-colors resize-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                        <button
                                            type="submit"
                                            className="cta-primary flex-1 inline-flex items-center justify-center gap-2 py-4"
                                        >
                                            <Send size={16} />
                                            Start a Project via WhatsApp
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* Right Column: Direct Info & "Not sure" Path */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Direct Contact Card */}
                            <div className="bg-[#0a0f1e] text-white rounded-[2.5rem] p-8 space-y-6">
                                <h3 className="text-xl font-bold font-heading">Direct Contact</h3>

                                <div className="space-y-4 text-sm font-medium">
                                    <div className="flex items-center gap-3">
                                        <Mail size={18} className="text-blue-400" />
                                        <a href="mailto:hello@xaggment.com" className="hover:underline">hello@xaggment.com</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={18} className="text-emerald-400" />
                                        <a href="tel:+916290322713" className="hover:underline">+91 62903 22713</a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Kolkata, West Bengal, India</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <button
                                        onClick={() => openWhatsApp("Hi Xaggment! I'd like to quickly chat about a project.")}
                                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-2xl text-xs flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <MessageCircle size={16} />
                                        Chat Directly on WhatsApp
                                    </button>
                                </div>
                            </div>

                            {/* "Not sure what you need?" Path */}
                            <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 space-y-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Non-Technical?</span>
                                <h3 className="text-lg font-bold text-[#0a0f1e]">Not sure what you need?</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    Tell us about your business problem and we'll help identify the right solution — whether it's a simple website, automation, or marketing strategy.
                                </p>
                                <button
                                    onClick={() => openWhatsApp("Hi Xaggment! I'm not sure what technology solution I need. Can we schedule a quick call?")}
                                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:underline"
                                >
                                    Book a Free Consultation →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
