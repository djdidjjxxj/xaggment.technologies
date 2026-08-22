import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '@/utils/whatsapp';

const projects = [
    {
        id: 'trinity-public-school',
        title: 'Trinity Public School',
        client: 'Trinity Public School',
        industry: 'Education',
        url: 'https://trinitypublicschool.org/',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
        tagColor: 'bg-amber-100 text-amber-700',
        challenge: 'A CBSE-affiliated school needed a modern, responsive website to handle online admissions, event updates, notices, and career applications.',
        approach: 'Designed a structured, accessible layout with clear navigation for parents and prospective students. Built fast-loading admissions and event components.',
        built: ['CBSE Affiliated Portal', 'Online Admissions Form', 'Events & Notice Board', 'Career Application Portal', 'FAQ & Contacts'],
    },
    {
        id: 'wet-pets',
        title: 'Wet Pets',
        client: 'Wet Pets',
        industry: 'E-Commerce',
        url: 'https://wetpets.store/',
        image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
        tagColor: 'bg-blue-100 text-blue-700',
        challenge: 'An aquarium store in Kolkata needed a digital presence to showcase ornamental fish and aquariums with direct WhatsApp ordering.',
        approach: 'Created a clean e-commerce catalogue layout for high-visual items paired with instant WhatsApp checkout.',
        built: ['Product Catalogue', 'WhatsApp Order Flow', 'Category Browsing', 'Local Search SEO', 'Mobile First Layout'],
    },
    {
        id: 'north-point-tours',
        title: 'North Point Tours & Travels',
        client: 'North Point Tours & Travels',
        industry: 'Travel & Tourism',
        url: 'https://www.northpointtour.com/',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        tagColor: 'bg-emerald-100 text-emerald-700',
        challenge: 'A premium tour agency needed a high-converting showcase for custom tour packages, hotel listings, and car rentals.',
        approach: 'Focused on rich visual package cards, itinerary breakdown, and easy booking enquiry triggers.',
        built: ['Customized Tour Packages', 'Hotel & Homestay Listings', 'Car Rental Booking Flow', 'Upcoming Tour Calendar', 'Customer Enquiry Flow'],
    },
];

const WorkPage: React.FC = () => {
    const [booting, setBooting] = useState(true);
    const [progress, setProgress] = useState(0);

    // Short branded boot animation (~0.9s)
    useEffect(() => {
        const controls = animate(0, 100, {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (latest) => setProgress(Math.round(latest)),
            onComplete: () => setBooting(false),
        });

        window.scrollTo(0, 0);
        return () => controls.stop();
    }, []);

    return (
        <>
            <Helmet>
                <title>Portfolio &amp; Case Studies | Xaggment Technologies</title>
                <meta name="description" content="Explore real projects built by Xaggment Technologies for real clients in education, e-commerce, and travel." />
                <link rel="canonical" href="https://kaustav-exe.github.io/xaggment.technologies/work" />
            </Helmet>

            {/* Branded Route Boot Sequence */}
            <AnimatePresence>
                {booting && (
                    <motion.div
                        key="work-boot"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[#0a0f1e] text-white flex flex-col items-center justify-center p-6"
                    >
                        <div className="text-center space-y-4 max-w-xs">
                            <div className="w-10 h-10 bg-white text-[#0a0f1e] font-black text-sm rounded-xl flex items-center justify-center mx-auto shadow-lg">
                                X
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                                XAGGMENT / WORK
                            </p>
                            <div className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-blue-400">
                                {String(progress).padStart(3, '0')}%
                            </div>
                            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                                <div
                                    className="h-full bg-blue-500 transition-all duration-75"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="pt-24 pb-20 md:pt-32 md:pb-24 px-6 bg-white min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="eyebrow-label mb-2 inline-block"
                        >
                            Case Studies &amp; Portfolio
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-heading font-bold text-[#0a0f1e] mb-4 tracking-tight"
                        >
                            Proof, not promises.
                            <br />
                            Here is what we've built.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text text-sm md:text-base"
                        >
                            Every project here represents a real business, a real challenge, and a real digital system built by Xaggment.
                        </motion.p>
                    </div>

                    {/* Curated Compact Case Studies */}
                    <div className="space-y-12 md:space-y-16">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6 }}
                                className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0 shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Compact Image */}
                                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-slate-200">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.tagColor}`}>
                                        {project.industry}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <p className="eyebrow-label mb-0.5">{project.client}</p>
                                        <h2 className="text-xl md:text-2xl font-heading font-bold text-[#0a0f1e] mb-4">{project.title}</h2>

                                        <div className="space-y-3 mb-5">
                                            <div>
                                                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">The Challenge</h3>
                                                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">The Approach</h3>
                                                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed">{project.approach}</p>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">What We Built</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                {project.built.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                                                        <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between flex-wrap gap-3">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 bg-[#0a0f1e] text-white hover:bg-blue-600 font-bold px-5 py-2.5 rounded-full text-xs transition-colors shadow-sm"
                                        >
                                            <span>Visit Live Website</span>
                                            <ExternalLink size={13} />
                                        </a>
                                        <button
                                            onClick={() => openWhatsApp(`Hi Xaggment! I saw your work on ${project.title} and want something similar.`)}
                                            className="text-xs font-bold text-slate-500 hover:text-[#0a0f1e] transition-colors"
                                        >
                                            Need something similar? →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center bg-[#0a0f1e] text-white rounded-3xl p-8 md:p-12">
                        <h2 className="text-xl md:text-3xl font-heading font-bold mb-3">Have a project in mind?</h2>
                        <p className="text-white/60 text-xs md:text-base max-w-md mx-auto mb-6 font-medium">
                            Let's discuss how we can build something custom for your business.
                        </p>
                        <Link to="/contact" className="cta-secondary bg-white text-[#0a0f1e] hover:bg-slate-100 inline-flex items-center gap-2">
                            <span>START A PROJECT</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkPage;
