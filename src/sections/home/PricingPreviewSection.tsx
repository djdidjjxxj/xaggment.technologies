import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

// ── Pricing data for each tab ──────────────────────────────────────────────────
interface PricingTab {
    id: string;
    label: string;
    icon: string;
    startingFrom: string | null;
    isCustom: boolean;
    tagline: string;
    description: string;
    highlights: string[];
    ctaLabel: string;
    ctaLink: string | null;
    ctaAction: (() => void) | null;
}

const pricingTabs: PricingTab[] = [
    {
        id: 'website',
        label: 'Website',
        icon: '🌐',
        startingFrom: '₹6,999',
        isCustom: false,
        tagline: 'Professional websites that convert',
        description: 'Websites designed for credibility, speed and conversion. From simple landing pages to full multi-page business sites.',
        highlights: ['Mobile-first responsive design', 'SEO optimized', 'Fast loading', 'Contact / WhatsApp integration'],
        ctaLabel: 'View Website Plans',
        ctaLink: '/pricing',
        ctaAction: null,
    },
    {
        id: 'marketing',
        label: 'Marketing',
        icon: '📣',
        startingFrom: '₹3,599/mo',
        isCustom: false,
        tagline: 'SEO and digital growth support',
        description: 'Ongoing digital marketing — SEO, social media, content and conversion optimization to grow your online presence.',
        highlights: ['Search Engine Optimization', 'Social media management', 'Content creation', 'Monthly performance reports'],
        ctaLabel: 'View Marketing Plans',
        ctaLink: '/pricing',
        ctaAction: null,
    },
    {
        id: 'automation',
        label: 'Automation',
        icon: '🤖',
        startingFrom: null,
        isCustom: true,
        tagline: 'AI workflows built around your business',
        description: 'AI agents, workflow automation and business integrations designed around your specific operations and tools.',
        highlights: ['AI chatbots and assistants', 'Workflow automation', 'CRM and lead management', 'System integrations'],
        ctaLabel: 'Discuss Automation',
        ctaLink: null,
        ctaAction: () => openWhatsApp("Hi Xaggment! I'm interested in AI automation for my business. Can we discuss options?"),
    },
    {
        id: 'software',
        label: 'Software',
        icon: '💻',
        startingFrom: null,
        isCustom: true,
        tagline: 'Scalable software and SaaS products',
        description: 'Custom software, internal dashboards, client portals and SaaS products built for your specific requirements.',
        highlights: ['Custom web applications', 'Internal tools and dashboards', 'SaaS product development', 'API integrations'],
        ctaLabel: 'Discuss Your Project',
        ctaLink: null,
        ctaAction: () => openWhatsApp("Hi Xaggment! I have a custom software development project I'd like to discuss."),
    },
];

// ── Shared layout underline style ─────────────────────────────────────────────
const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    background: '#0a0f1e',
    borderRadius: 2,
};

const PricingPreviewSection: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<PricingTab>(pricingTabs[0]);

    return (
        <section id="pricing-preview" className="py-20 md:py-28 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-3"
                    >
                        Pricing
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-4"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-lg mx-auto"
                    >
                        Straightforward pricing with no hidden fees. Full plans available on the pricing page.
                    </motion.p>
                </div>

                {/* Pricing Tabs — Motion Reference #1 implementation */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        {/* Tab Navigation */}
                        <nav className="border-b border-slate-100 bg-white" role="tablist" aria-label="Pricing categories">
                            <ul className="flex" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {pricingTabs.map((tab) => (
                                    <motion.li
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={tab.id === selectedTab.id}
                                        aria-controls={`pricing-panel-${tab.id}`}
                                        id={`pricing-tab-${tab.id}`}
                                        initial={false}
                                        animate={{
                                            backgroundColor: tab.id === selectedTab.id ? 'rgba(10,15,30,0.04)' : 'rgba(0,0,0,0)',
                                        }}
                                        style={{
                                            flex: 1,
                                            position: 'relative',
                                            cursor: 'pointer',
                                            padding: '14px 8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 2,
                                            userSelect: 'none',
                                            borderRight: '1px solid #f1f5f9',
                                        }}
                                        onClick={() => setSelectedTab(tab)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedTab(tab); }}
                                        tabIndex={0}
                                    >
                                        <span className="text-base md:text-lg leading-none" aria-hidden="true">{tab.icon}</span>
                                        <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest leading-none ${tab.id === selectedTab.id ? 'text-[#0a0f1e]' : 'text-slate-400'}`}>
                                            {tab.label}
                                        </span>

                                        {/* Animated shared underline — layoutId from Motion Reference #1 */}
                                        {tab.id === selectedTab.id && (
                                            <motion.div
                                                style={underlineStyle}
                                                layoutId="pricing-underline"
                                                id="pricing-underline"
                                            />
                                        )}
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* Tab Content — AnimatePresence mode="wait" from Motion Reference #1 */}
                        <div className="p-8 md:p-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTab.id}
                                    id={`pricing-panel-${selectedTab.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`pricing-tab-${selectedTab.id}`}
                                    initial={{ y: 12, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -12, opacity: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                >
                                    {/* Price */}
                                    <div className="mb-6">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                                            {selectedTab.isCustom ? 'Pricing' : 'Starting from'}
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl md:text-5xl font-black tracking-tighter text-[#0a0f1e]">
                                                {selectedTab.isCustom ? 'Custom' : selectedTab.startingFrom}
                                            </span>
                                            {!selectedTab.isCustom && (
                                                <span className="text-slate-400 font-semibold text-sm">+ GST</span>
                                            )}
                                        </div>
                                        <p className="text-slate-500 font-semibold text-sm mt-1">{selectedTab.tagline}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed mb-6">
                                        {selectedTab.description}
                                    </p>

                                    {/* Highlights */}
                                    <ul className="space-y-2.5 mb-8">
                                        {selectedTab.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                                                <div className="w-5 h-5 rounded-full bg-[#0a0f1e]/8 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0a0f1e]" />
                                                </div>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    {selectedTab.ctaLink ? (
                                        <Link
                                            to={selectedTab.ctaLink}
                                            id={`pricing-cta-${selectedTab.id}`}
                                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-black text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm hover:gap-4"
                                        >
                                            {selectedTab.ctaLabel}
                                            <ArrowRight size={15} />
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={selectedTab.ctaAction ?? undefined}
                                            id={`pricing-cta-${selectedTab.id}`}
                                            className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-black text-white font-bold px-6 py-3 rounded-full transition-all duration-300 text-sm hover:gap-4"
                                        >
                                            <MessageCircle size={15} />
                                            {selectedTab.ctaLabel}
                                        </button>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* View full pricing CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <Link
                        to="/pricing"
                        id="pricing-preview-view-all"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0a0f1e] transition-colors hover:gap-4 duration-300"
                    >
                        View full pricing &amp; plan details
                        <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPreviewSection;
