import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Globe, Megaphone, Layers, Bot, Code2 } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

interface PricingCategory {
    id: string;
    label: string;
    icon: React.ElementType;
    startingFrom: string | null;
    isCustom: boolean;
    tagline: string;
    description: string;
    highlights: string[];
    ctaLabel: string;
    ctaLink: string | null;
    ctaAction: (() => void) | null;
}

const pricingCategories: PricingCategory[] = [
    {
        id: 'website',
        label: 'Website',
        icon: Globe,
        startingFrom: '₹6,999',
        isCustom: false,
        tagline: 'High-converting business websites',
        description: 'Websites designed for credibility, speed and lead generation. From landing pages to full multi-page corporate portals.',
        highlights: ['Mobile-first responsive layout', 'SEO-friendly architecture', 'Fast load speed (<1.5s)', 'Contact / WhatsApp lead integration'],
        ctaLabel: 'View Website Plans',
        ctaLink: '/pricing',
        ctaAction: null,
    },
    {
        id: 'marketing',
        label: 'Marketing',
        icon: Megaphone,
        startingFrom: '₹3,599/mo',
        isCustom: false,
        tagline: 'SEO and digital growth management',
        description: 'Ongoing digital marketing — SEO, social media, content strategy, and conversion optimization to grow your business.',
        highlights: ['Search Engine Optimization (SEO)', 'Social media management', 'Content creation & copy', 'Monthly analytics report'],
        ctaLabel: 'View Marketing Plans',
        ctaLink: '/pricing',
        ctaAction: null,
    },
    {
        id: 'combo',
        label: 'Combo Package',
        icon: Layers,
        startingFrom: '₹9,999',
        isCustom: false,
        tagline: 'Website + 1 Month Marketing & SEO',
        description: 'The ultimate growth starter package — complete custom website development bundled with 1 month of digital marketing & local SEO.',
        highlights: ['5-Page Business Website', '1 Month Marketing & Local SEO', 'Google Business Profile setup', 'Priority support & maintenance'],
        ctaLabel: 'View Combo Plans',
        ctaLink: '/pricing',
        ctaAction: null,
    },
    {
        id: 'automation',
        label: 'Automation',
        icon: Bot,
        startingFrom: null,
        isCustom: true,
        tagline: 'AI agents & workflow automation',
        description: 'AI chatbots, lead qualification workflows, and CRM integrations built around your specific business operations.',
        highlights: ['AI chatbots & assistants', 'Workflow & API integrations', 'Automated lead qualification', 'CRM & email automation'],
        ctaLabel: 'Discuss Automation',
        ctaLink: null,
        ctaAction: () => openWhatsApp("Hi Xaggment! I'm interested in AI automation for my business. Can we discuss options?"),
    },
    {
        id: 'software',
        label: 'Software',
        icon: Code2,
        startingFrom: null,
        isCustom: true,
        tagline: 'Custom software & SaaS products',
        description: 'Custom web applications, client portals, internal dashboards, and scalable SaaS platforms built to your specifications.',
        highlights: ['Custom web applications', 'Internal tools & dashboards', 'SaaS product development', 'Database & API engineering'],
        ctaLabel: 'Discuss Software Project',
        ctaLink: null,
        ctaAction: () => openWhatsApp("Hi Xaggment! I have a custom software project I'd like to discuss."),
    },
];

const PricingPreviewSection: React.FC = () => {
    const [selectedCat, setSelectedCat] = useState<PricingCategory>(pricingCategories[0]);

    return (
        <section id="pricing-preview" className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-2"
                    >
                        Pricing
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-3"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-md mx-auto text-sm md:text-base"
                    >
                        Straightforward pricing with zero hidden fees. Select a category below to explore.
                    </motion.p>
                </div>

                {/* Segmented Category Selector (Xaggment UI, no emojis, no circles) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200/80 overflow-hidden">
                        {/* Tab Bar */}
                        <div className="p-2 bg-slate-100/70 border-b border-slate-200/60 overflow-x-auto scrollbar-none">
                            <div className="flex gap-1 min-w-[500px] md:min-w-0">
                                {pricingCategories.map((cat) => {
                                    const isSelected = cat.id === selectedCat.id;
                                    const Icon = cat.icon;
                                    return (
                                        <button
                                            key={cat.id}
                                            onClick={() => setSelectedCat(cat)}
                                            className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-2xl text-xs font-bold transition-colors select-none ${
                                                isSelected ? 'text-[#0a0f1e]' : 'text-slate-500 hover:text-slate-800'
                                            }`}
                                            role="tab"
                                            aria-selected={isSelected}
                                        >
                                            {isSelected && (
                                                <motion.div
                                                    layoutId="pricing-category-pill"
                                                    className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-200/80 -z-0"
                                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                                                />
                                            )}
                                            <Icon size={14} className={`relative z-10 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                                            <span className="relative z-10">{cat.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Animated Content (AnimatePresence mode="wait" - 0.2s fast transition) */}
                        <div className="p-6 md:p-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedCat.id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                >
                                    {/* Price Header */}
                                    <div className="mb-5 pb-5 border-b border-slate-100">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                                            {selectedCat.isCustom ? 'Pricing Model' : 'Starting from'}
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl md:text-5xl font-black tracking-tighter text-[#0a0f1e]">
                                                {selectedCat.isCustom ? 'Custom Quote' : selectedCat.startingFrom}
                                            </span>
                                            {!selectedCat.isCustom && (
                                                <span className="text-slate-400 font-semibold text-xs">+ GST</span>
                                            )}
                                        </div>
                                        <p className="text-slate-600 font-bold text-xs md:text-sm mt-1">{selectedCat.tagline}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-5">
                                        {selectedCat.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mb-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Deliverables</p>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {selectedCat.highlights.map((h, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    {selectedCat.ctaLink ? (
                                        <Link
                                            to={selectedCat.ctaLink}
                                            id={`pricing-cta-${selectedCat.id}`}
                                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-xs hover:gap-3 shadow-md"
                                        >
                                            <span>{selectedCat.ctaLabel}</span>
                                            <ArrowRight size={14} />
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={selectedCat.ctaAction ?? undefined}
                                            id={`pricing-cta-${selectedCat.id}`}
                                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-xs hover:gap-3 shadow-md"
                                        >
                                            <MessageCircle size={14} className="text-emerald-400" />
                                            <span>{selectedCat.ctaLabel}</span>
                                        </button>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* View full pricing page */}
                <div className="mt-8 text-center">
                    <Link
                        to="/pricing"
                        id="pricing-preview-view-all"
                        className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-500 hover:text-[#0a0f1e] transition-colors"
                    >
                        <span>View complete pricing breakdown &amp; comparison tables</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PricingPreviewSection;
