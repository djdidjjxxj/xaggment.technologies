import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
    Check, X, ChevronDown, Globe, Settings, Database,
    Wrench, ShieldCheck, BarChart2, Zap, Star, Code2,
    Layers, HeartHandshake, TrendingUp, Phone, Mail, ArrowRight,
    Megaphone, Rocket, Package, Crown, Cpu, HelpCircle,
    MonitorSmartphone, Search, Lock, Headphones, Target, DollarSign
} from 'lucide-react';

/* ─────────────────────── SHARED ─────────────────────── */

const SectionBadge: React.FC<{ label: string }> = ({ label }) => (
    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 mb-4">
        {label}
    </span>
);

const CheckIcon = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
        <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
    </span>
);
const CrossIcon = () => (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
    </span>
);

const ComparisonTable: React.FC<{
    headers: string[];
    rows: { feature: string; values: boolean[] }[];
    highlight?: number;
}> = ({ headers, rows, highlight }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-14 max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-xl"
    >
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                    <tr className="bg-slate-900">
                        <th className="p-5 text-white font-semibold text-sm w-2/5">Feature Comparison</th>
                        {headers.map((h, i) => (
                            <th
                                key={h}
                                className={`p-5 text-center text-sm font-bold ${i === highlight ? 'text-blue-300' : 'text-white/70'}`}
                            >
                                {h}
                                {i === highlight && (
                                    <div className="text-xs font-normal text-blue-400 mt-0.5">★ Popular</div>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr
                            key={i}
                            className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} hover:bg-blue-50/30 transition-colors`}
                        >
                            <td className="p-4 pl-6 text-slate-700 font-medium text-sm">{row.feature}</td>
                            {row.values.map((v, j) => (
                                <td key={j} className="p-4 text-center">
                                    {v ? <CheckIcon /> : <CrossIcon />}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
);

/* ─────────────────────── 1. WEBSITE DEVELOPMENT ─────────────────────── */

const webDevPlans = [
    {
        name: 'Basic Website',
        price: '₹6,999',
        priceSub: 'Up to 5 Pages',
        extra: 'Additional Pages: ₹1,000/page',
        icon: Globe,
        color: 'from-slate-600 to-slate-800',
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
        features: [
            'Up to 5 Website Pages',
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Business Layout',
            'Contact Form',
            'Social Media Integration',
            'Google Map Integration',
            'Mobile Friendly Design',
            'Cross Browser Compatibility',
            'Basic Security Setup',
            'Clean & Optimized Code',
        ],
        charges: ['Domain Registration', 'Hosting (If Required)'],
    },
    {
        name: 'Standard Website',
        badge: 'CMS',
        price: '₹1,500',
        priceSub: 'per page',
        extra: 'CMS Integration: ₹2,500',
        extraNote: 'CMS Subscription charges are separate.',
        icon: Settings,
        color: 'from-blue-600 to-blue-800',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        popular: true,
        features: [
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Layout',
            'CMS Integration',
            'Easy Content Management',
            'Easy Content Editing',
            'Blog Management',
            'Image & Content Updates',
            'Mobile Friendly Design',
            'Cross Browser Compatibility',
            'Basic Security',
        ],
        charges: ['CMS Subscription Charges are separate'],
    },
    {
        name: 'Dynamic Website',
        price: '₹1,500',
        priceSub: 'per page',
        extra: 'Backend Charges: ₹3,500 – ₹5,000',
        extraNote: 'Depends on complexity & backend requirements.',
        icon: Database,
        color: 'from-violet-600 to-violet-800',
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        features: [
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Layout',
            'Backend Development',
            'Database Integration',
            'Authentication System',
            'Admin Dashboard',
            'User Management',
            'API Integration',
            'Server Configuration',
            'Secure Database',
            'Mobile Friendly',
            'Cross Browser Compatibility',
        ],
        charges: ['Domain Registration', 'Hosting Charges', 'Server Charges (If Required)'],
    },
];

const webDevTableRows = [
    { feature: 'Modern UI/UX Design', values: [true, true, true] },
    { feature: 'Fully Responsive Design', values: [true, true, true] },
    { feature: 'SEO-Friendly Structure', values: [true, true, true] },
    { feature: 'Fast Loading Website', values: [true, true, true] },
    { feature: 'Contact Form', values: [true, true, true] },
    { feature: 'Social Media Integration', values: [true, true, true] },
    { feature: 'Google Map Integration', values: [true, false, false] },
    { feature: 'Basic Security Setup', values: [true, true, true] },
    { feature: 'CMS Integration', values: [false, true, false] },
    { feature: 'Easy Content Management', values: [false, true, false] },
    { feature: 'Blog Management', values: [false, true, false] },
    { feature: 'Backend Development', values: [false, false, true] },
    { feature: 'Database Integration', values: [false, false, true] },
    { feature: 'Authentication System', values: [false, false, true] },
    { feature: 'Admin Dashboard', values: [false, false, true] },
    { feature: 'User Management', values: [false, false, true] },
    { feature: 'API Integration', values: [false, false, true] },
];

/* ─────────────────────── 2. WEBSITE MAINTENANCE ─────────────────────── */

const maintPlans = [
    {
        name: 'Basic Maintenance',
        priceRange: '₹1,500 – ₹2,500',
        priceSub: '/ Month',
        icon: Wrench,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
        features: [
            'Bug Fixes',
            'Website Monitoring',
            'Backup',
            'Security Updates',
            'Minor Design Changes',
            'Performance Optimization',
        ],
    },
    {
        name: 'CMS Maintenance',
        priceRange: '₹2,000 – ₹3,000',
        priceSub: '/ Month',
        icon: Settings,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        popular: true,
        features: [
            'Content Updates',
            'Blog Updates',
            'Image Updates',
            'CMS Maintenance',
            'Security Updates',
            'Backup',
            'Performance Optimization',
        ],
    },
    {
        name: 'Dynamic Maintenance',
        priceRange: '₹3,500 – ₹4,500',
        priceSub: '/ Month',
        icon: ShieldCheck,
        iconBg: 'bg-violet-100',
        iconColor: 'text-violet-600',
        features: [
            'Backend Maintenance',
            'Database Maintenance',
            'Server Monitoring',
            'Security Updates',
            'Backup',
            'Bug Fixes',
            'Performance Optimization',
            'Technical Support',
        ],
    },
];

const maintTableRows = [
    { feature: 'Bug Fixes', values: [true, false, true] },
    { feature: 'Website Monitoring', values: [true, false, false] },
    { feature: 'Server Monitoring', values: [false, false, true] },
    { feature: 'Security Updates', values: [true, true, true] },
    { feature: 'Backup', values: [true, true, true] },
    { feature: 'Performance Optimization', values: [true, true, true] },
    { feature: 'Minor Design Changes', values: [true, false, false] },
    { feature: 'Content & Blog Updates', values: [false, true, false] },
    { feature: 'CMS Maintenance', values: [false, true, false] },
    { feature: 'Backend Maintenance', values: [false, false, true] },
    { feature: 'Database Maintenance', values: [false, false, true] },
    { feature: 'Technical Support', values: [false, false, true] },
];

/* ─────────────────────── 3. DIGITAL MARKETING ─────────────────────── */

const mktPlans = [
    {
        name: 'Starter Marketing',
        price: '₹3,599',
        priceSub: '/ Month',
        icon: Megaphone,
        iconBg: 'bg-orange-100',
        iconColor: 'text-orange-600',
        note: '⚠️ Advertisement Budget is NOT INCLUDED. Client pays separately.',
        noteColor: 'bg-orange-50 border-orange-200 text-orange-700',
        features: [
            'Graphic Design',
            'Banner Design',
            'Social Media Post Design',
            'Reels Creation',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
        ],
    },
    {
        name: 'Professional Marketing',
        price: '₹5,599',
        priceSub: '/ Month',
        icon: Rocket,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        popular: true,
        note: '✅ Advertisement Budget is INCLUDED in this plan.',
        noteColor: 'bg-green-50 border-green-200 text-green-700',
        features: [
            'Unlimited Banner Design',
            'Weekly 3–4 Reels',
            'Graphic Design',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
    },
];

const mktTableRows = [
    { feature: 'Graphic Design', values: [true, true] },
    { feature: 'Banner Design', values: [true, false] },
    { feature: 'Unlimited Banner Design', values: [false, true] },
    { feature: 'Social Media Post Design', values: [true, true] },
    { feature: 'Reels Creation', values: [true, false] },
    { feature: 'Weekly 3–4 Reels', values: [false, true] },
    { feature: 'Social Media Management', values: [true, true] },
    { feature: 'Social Media Optimization', values: [true, true] },
    { feature: 'Google Business Profile', values: [true, true] },
    { feature: 'Search Engine Marketing (SEM)', values: [false, true] },
    { feature: 'Social Media Marketing (SMM)', values: [false, true] },
    { feature: 'Ad Campaign Management', values: [false, true] },
    { feature: 'Advertisement Budget Included', values: [false, true] },
];

/* ─────────────────────── 4. COMBO PLANS ─────────────────────── */

const comboPlans = [
    {
        name: 'Basic Combo',
        price: '₹6,999',
        priceSub: '/ Month',
        icon: Package,
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
        websiteFeatures: [
            'Basic Website Maintenance',
            'Regular Website Updates',
            'Technical Support',
        ],
        marketingFeatures: [
            'Graphic Design',
            'Banner Design',
            'Social Media Post Design',
            'Reels Creation',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
        ],
    },
    {
        name: 'Standard Combo',
        price: '₹9,999',
        priceSub: '/ Month',
        icon: Star,
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        popular: true,
        websiteFeatures: [
            'Website Maintenance',
            'Regular Website Updates',
            'Technical Support',
        ],
        marketingFeatures: [
            'Graphic Design',
            'Unlimited Banner Design',
            'Weekly Reels',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
    },
    {
        name: 'Premium Combo',
        price: '₹11,999',
        priceSub: '/ Month',
        icon: Crown,
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-600',
        websiteFeatures: [
            'Unlimited Website Changes',
            'Unlimited Content Updates',
            'Website Maintenance',
            'Priority Technical Support',
        ],
        marketingFeatures: [
            'Unlimited Banner Design',
            'Weekly Reels',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
    },
];

const comboTableRows = [
    { feature: 'Basic Website Maintenance', values: [true, true, true] },
    { feature: 'Unlimited Website Changes', values: [false, false, true] },
    { feature: 'Unlimited Content Updates', values: [false, false, true] },
    { feature: 'Priority Technical Support', values: [false, false, true] },
    { feature: 'Regular Website Updates', values: [true, true, true] },
    { feature: 'Social Media Management', values: [true, true, true] },
    { feature: 'Google Business Profile', values: [true, true, true] },
    { feature: 'Graphic Design', values: [true, true, true] },
    { feature: 'Unlimited Banner Design', values: [false, true, true] },
    { feature: 'Weekly Reels', values: [false, true, true] },
    { feature: 'Search Engine Marketing (SEM)', values: [false, true, true] },
    { feature: 'Social Media Marketing (SMM)', values: [false, true, true] },
    { feature: 'Ad Campaign Management', values: [false, true, true] },
];

/* ─────────────────────── 5. CUSTOM DEV ─────────────────────── */

const customServices = [
    'Custom Business Websites', 'ERP Systems', 'CRM Systems',
    'Finance Management Software', 'Inventory Management',
    'School & College Management', 'Hospital Management',
    'Booking Systems', 'Automation Software', 'API Integrations',
    'Dashboard Development', 'Mobile App Backend',
    'Admin Panels', 'Custom Web Applications',
];

/* ─────────────────────── 6. WHY CHOOSE US ─────────────────────── */

const whyFeatures = [
    { icon: MonitorSmartphone, title: 'Modern UI/UX', desc: 'Beautiful, intuitive interfaces that users love.' },
    { icon: Layers, title: 'Responsive Design', desc: 'Perfectly optimized for all devices and screen sizes.' },
    { icon: Search, title: 'SEO Friendly', desc: 'Built from the ground up to rank on search engines.' },
    { icon: Zap, title: 'Fast Performance', desc: 'Lightning-fast load times that keep users engaged.' },
    { icon: Lock, title: 'Secure Development', desc: 'Security-first practices to protect your data and users.' },
    { icon: Headphones, title: 'Professional Support', desc: 'Dedicated team available to help you every step.' },
    { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Architecture that grows with your business needs.' },
    { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden fees — what you see is what you pay.' },
    { icon: Code2, title: 'Clean Code', desc: 'Maintainable, well-structured code that stands the test of time.' },
    { icon: Target, title: 'Business Focused', desc: 'Every decision made with your business goals in mind.' },
];

/* ─────────────────────── 8. FAQ ─────────────────────── */

const faqs = [
    {
        q: 'Which website plan is best for my business?',
        a: 'For small businesses needing a simple presence, the Basic Website is ideal. If you want to manage your own content, choose Standard (CMS). For e-commerce, portals, or complex apps, go for Dynamic Website.',
    },
    {
        q: 'Can I upgrade my website plan later?',
        a: 'Absolutely! You can upgrade from Basic → Standard → Dynamic at any time. We will migrate your existing website and add new features seamlessly.',
    },
    {
        q: 'Is domain registration included in the price?',
        a: 'Domain registration is listed as an additional charge. Pricing varies by domain extension (.com, .in, etc.). We will guide you through the process.',
    },
    {
        q: 'Is hosting included in the package?',
        a: 'Hosting is not included in the base development price but can be arranged. We offer managed hosting solutions. For Dynamic websites, server charges apply separately.',
    },
    {
        q: 'Is the advertisement budget included in marketing plans?',
        a: 'For the Starter Plan (₹3,599/month), the ad budget is NOT included — the client pays this separately. For the Professional Plan (₹5,599/month), the ad budget IS included.',
    },
    {
        q: 'Can I request custom features not listed in the plans?',
        a: 'Yes! We specialize in custom development. Contact us for a personalized quote. We build ERP, CRM, booking systems, finance software, and much more.',
    },
    {
        q: 'Do you provide monthly maintenance after launch?',
        a: 'Yes, we offer three maintenance tiers — Basic (₹1,500–₹2,500/month), CMS (₹2,000–₹3,000/month), and Dynamic (₹3,500–₹4,500/month) — each tailored to your website type.',
    },
    {
        q: 'How long does website development take?',
        a: 'Basic websites take 5–10 business days. CMS websites take 10–15 days. Dynamic websites with complex backends may take 3–6 weeks depending on scope.',
    },
    {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI, bank transfer (NEFT/IMPS/RTGS), and online payments. We typically require 50% advance before starting and the remaining 50% upon completion.',
    },
];

/* ─────────────────────── PLAN CARD COMPONENT ─────────────────────── */

const PlanCard: React.FC<{
    name: string;
    badge?: string;
    price: string;
    priceSub: string;
    extra?: string;
    extraNote?: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    popular?: boolean;
    features: string[];
    charges?: string[];
    note?: string;
    noteColor?: string;
    accentCol?: string;
    delay?: number;
    onContact: () => void;
}> = ({ name, badge, price, priceSub, extra, extraNote, icon: Icon, iconBg, iconColor, popular, features, charges, note, noteColor, accentCol = 'blue', delay = 0, onContact }) => (
    <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="h-full"
    >
        <div className={`relative h-full flex flex-col bg-white rounded-2xl border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${popular ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2' : 'border-slate-200 hover:-translate-y-1'}`}>
            {popular && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
            )}
            {popular && (
                <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</span>
                </div>
            )}
            <div className="p-7 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl ${iconBg}`}>
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">{name}</h3>
                        {badge && <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{badge}</span>}
                    </div>
                </div>

                <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
                        <span className="text-sm text-slate-500 font-medium">{priceSub}</span>
                    </div>
                    {extra && <p className="text-sm font-semibold text-blue-600 mt-1.5">{extra}</p>}
                    {extraNote && <p className="text-xs text-slate-400 mt-0.5">{extraNote}</p>}
                </div>

                <ul className="space-y-2.5 flex-grow mb-5">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                            <span className="text-slate-600 text-sm leading-snug">{f}</span>
                        </li>
                    ))}
                </ul>

                {charges && charges.length > 0 && (
                    <div className="mb-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs font-bold text-slate-700 mb-1.5">Additional Charges:</p>
                        <ul className="space-y-1">
                            {charges.map((c, i) => (
                                <li key={i} className="text-xs text-slate-500 flex items-center gap-1.5">
                                    <div className="w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {note && (
                    <div className={`mb-4 p-3 rounded-xl border text-xs font-semibold ${noteColor}`}>
                        {note}
                    </div>
                )}
            </div>

            <div className="px-7 pb-7 mt-auto">
                <button
                    onClick={onContact}
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 hover:shadow-blue-300' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                >
                    Get Started →
                </button>
            </div>
        </div>
    </motion.div>
);

/* ─────────────────────── COMBO CARD ─────────────────────── */

const ComboCard: React.FC<{
    plan: typeof comboPlans[0];
    delay?: number;
    onContact: () => void;
}> = ({ plan, delay = 0, onContact }) => {
    const Icon = plan.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="h-full"
        >
            <div className={`relative h-full flex flex-col bg-white rounded-2xl border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-offset-2' : 'border-slate-200 hover:-translate-y-1'}`}>
                {plan.popular && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />}
                {plan.popular && (
                    <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Best Value</span>
                    </div>
                )}
                <div className="p-7 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-5">
                        <div className={`p-2.5 rounded-xl ${plan.iconBg}`}>
                            <Icon className={`w-6 h-6 ${plan.iconColor}`} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    </div>
                    <div className="mb-5 pb-5 border-b border-slate-100">
                        <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                        <span className="text-sm text-slate-500 font-medium ml-1">{plan.priceSub}</span>
                    </div>

                    <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">🌐 Website Services</p>
                        <ul className="space-y-2 mb-5">
                            {plan.websiteFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">{f}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">📣 Marketing Services</p>
                        <ul className="space-y-2">
                            {plan.marketingFeatures.map((f, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                    <span className="text-slate-600 text-sm">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="px-7 pb-7">
                    <button
                        onClick={onContact}
                        className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-200 ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                    >
                        Get Started →
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

/* ─────────────────────── FAQ ITEM ─────────────────────── */

const FAQItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
        >
            <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(!open)}
            >
                <span className="font-semibold text-slate-800 pr-4 text-sm leading-snug">{q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="px-5 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ─────────────────────── SECTION WRAPPER ─────────────────────── */

const Section: React.FC<{ id: string; bg?: string; children: React.ReactNode }> = ({ id, bg = 'bg-white', children }) => (
    <section id={id} className={`py-24 ${bg}`}>
        <div className="container mx-auto px-4 max-w-7xl">{children}</div>
    </section>
);

const SectionHeader: React.FC<{ badge: string; title: string; titleSpan: string; sub: string }> = ({ badge, title, titleSpan, sub }) => (
    <div className="text-center mb-16">
        <SectionBadge label={badge} />
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
        >
            {title} <span className="text-blue-600">{titleSpan}</span>
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
        >
            {sub}
        </motion.p>
    </div>
);

/* ─────────────────────── MAIN PAGE ─────────────────────── */

const Pricing: React.FC = () => {
    const scrollToContact = () => {
        document.getElementById('pricing-cta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Helmet>
                <title>Pricing | Xaggment Technologies</title>
                <meta name="description" content="Transparent pricing for website development, digital marketing, maintenance, and custom software solutions — Xaggment Technologies." />
            </Helmet>

            {/* ── HERO ── */}
            <section className="relative pt-36 pb-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #06b6d4 0%, transparent 50%)' }} />
                <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <span className="inline-block bg-white/10 backdrop-blur text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 mb-6">
                            Transparent & Honest Pricing
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
                    >
                        Simple,{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Transparent
                        </span>
                        {' '}Pricing
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10"
                    >
                        No hidden fees. No surprises. Every plan designed to deliver maximum value for your business.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            onClick={scrollToContact}
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40"
                        >
                            Get Free Consultation
                        </button>
                        <a
                            href="tel:+91"
                            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" /> Call Us Now
                        </a>
                    </motion.div>
                </div>

                {/* Scroll-to nav pills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mt-14 px-4"
                >
                    {[
                        ['Website Dev', 'website-development'],
                        ['Maintenance', 'website-maintenance'],
                        ['Digital Marketing', 'digital-marketing'],
                        ['Combo Plans', 'combo-plans'],
                        ['Custom Dev', 'custom-development'],
                        ['FAQ', 'pricing-faq'],
                    ].map(([label, id]) => (
                        <button
                            key={id}
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-xs font-semibold text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-full transition-all duration-200 bg-white/5 hover:bg-white/10"
                        >
                            {label}
                        </button>
                    ))}
                </motion.div>
            </section>

            {/* ── 1. WEBSITE DEVELOPMENT ── */}
            <Section id="website-development" bg="bg-slate-50">
                <SectionHeader
                    badge="Website Development"
                    title="Website"
                    titleSpan="Development Plans"
                    sub="From simple business pages to full-stack dynamic applications — we have a plan for every need and budget."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
                    {webDevPlans.map((p, i) => (
                        <PlanCard
                            key={p.name}
                            {...p}
                            delay={i * 0.1}
                            onContact={scrollToContact}
                        />
                    ))}
                </div>
                <ComparisonTable
                    headers={['Basic Website', 'Standard (CMS)', 'Dynamic Website']}
                    rows={webDevTableRows}
                    highlight={1}
                />
            </Section>

            {/* ── 2. MAINTENANCE ── */}
            <Section id="website-maintenance" bg="bg-white">
                <SectionHeader
                    badge="Website Maintenance"
                    title="Keep Your Website"
                    titleSpan="Running Smoothly"
                    sub="Reliable monthly maintenance plans to ensure your website stays secure, fast, and always up-to-date."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
                    {maintPlans.map((p, i) => (
                        <PlanCard
                            key={p.name}
                            name={p.name}
                            price={p.priceRange}
                            priceSub={p.priceSub}
                            icon={p.icon}
                            iconBg={p.iconBg}
                            iconColor={p.iconColor}
                            popular={p.popular}
                            features={p.features}
                            delay={i * 0.1}
                            onContact={scrollToContact}
                        />
                    ))}
                </div>
                <ComparisonTable
                    headers={['Basic', 'CMS', 'Dynamic']}
                    rows={maintTableRows}
                    highlight={1}
                />
            </Section>

            {/* ── 3. DIGITAL MARKETING ── */}
            <Section id="digital-marketing" bg="bg-slate-50">
                <SectionHeader
                    badge="Digital Marketing"
                    title="Grow Your Business"
                    titleSpan="Online"
                    sub="Result-driven digital marketing plans to increase your visibility, engagement, and revenue."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
                    {mktPlans.map((p, i) => (
                        <PlanCard
                            key={p.name}
                            {...p}
                            delay={i * 0.15}
                            onContact={scrollToContact}
                        />
                    ))}
                </div>
                <ComparisonTable
                    headers={['Starter Plan', 'Professional Plan']}
                    rows={mktTableRows}
                    highlight={1}
                />
            </Section>

            {/* ── 4. COMBO PLANS ── */}
            <Section id="combo-plans" bg="bg-white">
                <SectionHeader
                    badge="Combo Plans"
                    title="Website + Marketing"
                    titleSpan="Bundle Deals"
                    sub="Save more by combining website maintenance and digital marketing into one powerful monthly plan."
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
                    {comboPlans.map((p, i) => (
                        <ComboCard
                            key={p.name}
                            plan={p}
                            delay={i * 0.1}
                            onContact={scrollToContact}
                        />
                    ))}
                </div>
                <ComparisonTable
                    headers={['Basic Combo', 'Standard Combo', 'Premium Combo']}
                    rows={comboTableRows}
                    highlight={1}
                />
            </Section>

            {/* ── 5. CUSTOM DEVELOPMENT ── */}
            <Section id="custom-development" bg="bg-gradient-to-br from-slate-900 to-blue-950">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <span className="inline-block bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20 mb-5">
                                Custom Development
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                                Need a <span className="text-cyan-400">Custom</span> Solution?
                            </h2>
                            <p className="text-blue-100/70 text-lg mb-8 leading-relaxed">
                                If your project requires custom features, APIs, dashboards, ERP, CRM, inventory systems, finance software, booking systems, automation, or any other tailored solution — contact us for a personalized quotation.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={scrollToContact}
                                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-900/40"
                                >
                                    Request Custom Quote <ArrowRight className="w-4 h-4" />
                                </button>
                                <a
                                    href="mailto:hello@xaggment.com"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
                                >
                                    <Mail className="w-4 h-4" /> Email Us
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 grid grid-cols-2 gap-3"
                        >
                            {customServices.map((s, i) => (
                                <motion.div
                                    key={s}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 rounded-xl transition-colors cursor-default"
                                >
                                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" strokeWidth={3} />
                                    <span className="text-white/80 text-sm font-medium leading-tight">{s}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ── 6. WHY CHOOSE US ── */}
            <Section id="why-choose-us" bg="bg-slate-50">
                <SectionHeader
                    badge="Why Xaggment"
                    title="Why Choose"
                    titleSpan="Xaggment Technologies"
                    sub="We are committed to delivering world-class digital solutions with complete transparency and professionalism."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                    {whyFeatures.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-3 transition-colors">
                                    <Icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm mb-1">{f.title}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            {/* ── 8. FAQ ── */}
            <Section id="pricing-faq" bg="bg-white">
                <SectionHeader
                    badge="FAQ"
                    title="Frequently Asked"
                    titleSpan="Questions"
                    sub="Got questions? We've got clear answers. If you need more info, just reach out."
                />
                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                    ))}
                </div>
            </Section>

            {/* ── 9. CTA ── */}
            <section id="pricing-cta" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 0% 100%, #ffffff 0%, transparent 50%)' }} />
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/30 mb-6">
                            Ready to Get Started?
                        </span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                            Let's Build Your Business Together
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Grow your business with modern websites, powerful software, and result-driven digital marketing.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a
                                href="tel:+91"
                                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-xl flex items-center gap-2 text-sm"
                            >
                                <Phone className="w-4 h-4" /> Get Free Consultation
                            </a>
                            <a
                                href="mailto:hello@xaggment.com"
                                className="bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 text-sm backdrop-blur"
                            >
                                <Mail className="w-4 h-4" /> Request a Quote
                            </a>
                            <a
                                href="https://wa.me/91"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 text-sm shadow-lg"
                            >
                                <HeartHandshake className="w-4 h-4" /> Contact Us
                            </a>
                        </div>
                        <p className="mt-8 text-white/60 text-sm">
                            📧 hello@xaggment.com &nbsp;|&nbsp; Response within 24 hours
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Pricing;
