import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Bot, TrendingUp, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const serviceCategories = [
    {
        id: 'web-development',
        title: 'Web & Software Development',
        pillar: 'BUILD',
        description: 'From high-converting business websites to scalable web applications, SaaS platforms, and enterprise software.',
        icon: Code2,
        services: [
            {
                name: 'Business Websites',
                desc: 'Custom, fast-loading, mobile-first websites designed to build trust and convert visitors into clients.',
                price: 'From ₹6,999',
            },
            {
                name: 'Web Applications & SaaS',
                desc: 'Scalable web apps, client portals, SaaS architectures, and internal dashboards built with React, Node, and TypeScript.',
                price: 'Custom / From ₹30,000',
            },
            {
                name: 'E-Commerce Solutions',
                desc: 'Online stores with product catalogues, payment gateway integration, WhatsApp ordering, and inventory setup.',
                price: 'From ₹12,999',
            },
            {
                name: 'Custom Software & APIs',
                desc: 'Tailored software systems, database design, REST/GraphQL APIs, and custom integrations.',
                price: 'Custom quote',
            },
        ],
    },
    {
        id: 'ai-automation',
        title: 'AI & Business Automation',
        pillar: 'AUTOMATE',
        description: 'Eliminate repetitive manual tasks, accelerate lead processing, and streamline operations with intelligent AI workflows.',
        icon: Bot,
        services: [
            {
                name: 'AI Chatbots & Assistants',
                desc: '24/7 intelligent bots for customer support, lead capture, FAQs, and instant query resolution.',
                price: 'Custom quote',
            },
            {
                name: 'Workflow & API Automation',
                desc: 'Connect your CRMs, email, Slack, WhatsApp, and databases to automate data entry and lead management.',
                price: 'Custom quote',
            },
            {
                name: 'Lead Qualification Agents',
                desc: 'Automated AI flows that screen leads, ask qualifying questions, and direct qualified prospects to your calendar.',
                price: 'Custom quote',
            },
        ],
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing & Growth',
        pillar: 'GROW',
        description: 'Data-driven SEO, performance marketing, content strategy, and ongoing digital growth management.',
        icon: TrendingUp,
        services: [
            {
                name: 'Search Engine Optimization (SEO)',
                desc: 'Technical SEO, keyword strategy, Google Business Profile optimization, and local search visibility.',
                price: 'From ₹3,599/month',
            },
            {
                name: 'Social Media & Content Strategy',
                desc: 'Strategic content creation, social media management, brand positioning, and audience engagement.',
                price: 'From ₹4,999/month',
            },
            {
                name: 'Conversion Rate Optimization (CRO)',
                desc: 'Landing page redesigns, UX improvements, A/B testing, and conversion funnel optimization.',
                price: 'Included / Custom',
            },
        ],
    },
];

const ServicesPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        const subService = pathSegments[pathSegments.length - 1];
        if (subService && subService !== 'services') {
            let targetId = subService;
            if (subService === 'software-development' || subService === 'app-development') {
                targetId = 'web-development';
            }
            const el = document.getElementById(targetId);
            if (el) {
                setTimeout(() => {
                    const offset = 100;
                    const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: pos, behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname]);

    return (
        <>
            <Helmet>
                <title>Services | Xaggment Technologies — Build, Automate, Grow</title>
                <meta name="description" content="Explore Xaggment's full range of services: Web Development, Web Apps, SaaS, AI Automation, and Digital Marketing." />
            </Helmet>

            <div className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="eyebrow-label mb-3 inline-block"
                        >
                            Our Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Build digital systems.
                            <br />
                            Automate work. Grow revenue.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text"
                        >
                            We offer comprehensive digital product and growth services structured around three pillars: Build, Automate, and Grow.
                        </motion.p>
                    </div>

                    {/* Service Categories */}
                    <div className="space-y-20">
                        {serviceCategories.map((cat, idx) => (
                            <motion.div
                                key={cat.id}
                                id={cat.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-200">
                                    <div>
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2 block">
                                            Pillar: {cat.pillar}
                                        </span>
                                        <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#0a0f1e]">{cat.title}</h2>
                                        <p className="text-slate-500 font-medium text-base mt-2 max-w-2xl">{cat.description}</p>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0a0f1e] flex-shrink-0 shadow-sm">
                                        <cat.icon size={26} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {cat.services.map((item, i) => (
                                        <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="font-bold text-[#0a0f1e] text-lg">{item.name}</h3>
                                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">{item.desc}</p>
                                            <button
                                                onClick={() => openWhatsApp(`Hi Xaggment! I want to enquire about ${item.name}.`)}
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a0f1e] hover:text-blue-600 transition-colors"
                                            >
                                                Enquire via WhatsApp
                                                <ArrowRight size={13} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center bg-[#0a0f1e] text-white rounded-3xl p-10 md:p-14">
                        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Not sure which service you need?</h2>
                        <p className="text-white/60 text-base max-w-lg mx-auto mb-8 font-medium">
                            Tell us about your business problem and we'll help identify the right approach.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="cta-secondary bg-white text-[#0a0f1e] hover:bg-slate-100">
                                Book a Free Consultation
                            </Link>
                            <button
                                onClick={() => openWhatsApp("Hi Xaggment! I'm not sure what service I need, can you guide me?")}
                                className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white"
                            >
                                <MessageCircle size={16} />
                                Chat on WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
