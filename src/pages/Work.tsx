import React from 'react';
import { motion } from 'motion/react';
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
        challenge: 'A CBSE-affiliated school needed a modern, responsive website to handle online admissions, event updates, announcements, and career applications in a clean educational format.',
        approach: 'Designed a structured, accessible layout with clear navigation for parents, students, and prospective staff. Built fast-loading admissions and event components.',
        built: ['CBSE Affiliated School Portal', 'Online Admissions Form', 'Events & Notice Board', 'Career Application Section', 'FAQ & Contacts'],
    },
    {
        id: 'wet-pets',
        title: 'Wet Pets',
        client: 'Wet Pets',
        industry: 'E-Commerce',
        url: 'https://wetpets.store/',
        image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
        tagColor: 'bg-blue-100 text-blue-700',
        challenge: 'An aquarium store in Kolkata needed a digital presence to showcase exotic ornamental fish, aquariums, and accessories, with direct WhatsApp order placing.',
        approach: 'Created an engaging e-commerce catalogue layout tailored for high-visual products, paired with a direct WhatsApp order button for quick customer conversion.',
        built: ['Product Catalogue', 'WhatsApp Order Flow', 'Category Browsing', 'Local Search Optimization', 'Responsive Mobile Layout'],
    },
    {
        id: 'north-point-tours',
        title: 'North Point Tours & Travels',
        client: 'North Point Tours & Travels',
        industry: 'Travel & Tourism',
        url: 'https://www.northpointtour.com/',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        tagColor: 'bg-emerald-100 text-emerald-700',
        challenge: 'A premium tour agency needed a high-converting showcase for custom tour packages, hotel listings, car rentals, and upcoming tour calendars.',
        approach: 'Focused on rich visual storytelling, package details, itinerary breakdown, and easy booking enquiry triggers across mobile and desktop.',
        built: ['Customized Tour Packages', 'Hotel & Homestay Listings', 'Car Rental Booking Flow', 'Upcoming Tour Calendar', 'Customer Enquiry System'],
    },
];

const WorkPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio & Case Studies | Xaggment Technologies</title>
                <meta name="description" content="Explore real projects built by Xaggment Technologies for real clients in education, e-commerce, travel, and software." />
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
                            Our Portfolio
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Proof, not promises.
                            <br />
                            Here is what we've built.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text"
                        >
                            Every project here represents a real business, a real challenge, and a real digital system built by Xaggment.
                        </motion.p>
                    </div>

                    {/* Case Studies */}
                    <div className="space-y-16 md:space-y-24">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7 }}
                                className="bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-sm"
                            >
                                {/* Project Image */}
                                <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[480px]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${project.tagColor}`}>
                                        {project.industry}
                                    </div>
                                </div>

                                {/* Case Study Content */}
                                <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <p className="eyebrow-label mb-1">{project.client}</p>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#0a0f1e] mb-6">{project.title}</h2>

                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">The Challenge</h3>
                                                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">The Approach</h3>
                                                <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">{project.approach}</p>
                                            </div>
                                        </div>

                                        <div className="mb-8">
                                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">What We Built</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {project.built.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-[#0a0f1e] text-white hover:bg-black font-bold px-6 py-3 rounded-full text-xs transition-all"
                                        >
                                            Visit Live Website
                                            <ExternalLink size={14} />
                                        </a>
                                        <button
                                            onClick={() => openWhatsApp(`Hi Xaggment! I saw your work on ${project.title} and want something similar for my business.`)}
                                            className="text-xs font-bold text-slate-500 hover:text-[#0a0f1e] transition-colors"
                                        >
                                            Need something similar? →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-20 text-center bg-[#0a0f1e] text-white rounded-3xl p-10 md:p-14">
                        <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">Have a project in mind?</h2>
                        <p className="text-white/60 text-base max-w-lg mx-auto mb-8 font-medium">
                            Let's discuss how we can build something custom for your business.
                        </p>
                        <Link to="/contact" className="cta-secondary bg-white text-[#0a0f1e] hover:bg-slate-100 inline-flex items-center gap-2">
                            Start a Project
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkPage;
