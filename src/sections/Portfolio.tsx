import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProjects = [
    {
        title: 'Trinity Public School',
        description: 'CBSE affiliated school website with online admissions, events, FAQs, and career portal — built for a modern educational experience.',
        url: 'https://trinitypublicschool.org/',
        image: 'https://trinitypublicschool.org/wp-content/uploads/2024/01/trinity-banner.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
        tag: 'Education',
        tagColor: 'bg-amber-100 text-amber-700',
    },
    {
        title: 'Wet Pets',
        description: 'Aquarium store in Kolkata offering exotic ornamental fish, aquariums, and accessories — with product catalogue and WhatsApp ordering.',
        url: 'https://wetpets.store/',
        image: 'https://wetpets.store/wp-content/uploads/2024/wetpets-banner.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80',
        tag: 'E-Commerce',
        tagColor: 'bg-blue-100 text-blue-700',
    },
    {
        title: 'North Point Tours & Travels',
        description: 'Premium tour & travel agency website with customized tour packages, hotel/homestay listings, car rentals, and upcoming tour calendars.',
        url: 'https://www.northpointtour.com/',
        image: 'https://www.northpointtour.com/images/banner.jpg',
        fallbackImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        tag: 'Travel',
        tagColor: 'bg-green-100 text-green-700',
    },
];

const moreProjects = [
    {
        title: 'Lal Sweets',
        description: 'E-commerce website for a traditional sweets store.',
        url: '#',
        fallbackImage: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
        tag: 'E-Commerce',
        tagColor: 'bg-rose-100 text-rose-700',
    },
    {
        title: 'Kirtilals',
        description: 'Luxury jewellery store with premium UX for high-end buyers.',
        url: '#',
        fallbackImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
        tag: 'Luxury',
        tagColor: 'bg-yellow-100 text-yellow-700',
    },
    {
        title: 'Tradescribe',
        description: 'AI-powered trading journal and analytics platform.',
        url: '#',
        fallbackImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
        tag: 'FinTech',
        tagColor: 'bg-purple-100 text-purple-700',
    },
];

const ProjectCard: React.FC<{
    title: string;
    description: string;
    url: string;
    image?: string;
    fallbackImage: string;
    tag: string;
    tagColor: string;
    large?: boolean;
}> = ({ title, description, url, image, fallbackImage, tag, tagColor, large }) => {
    const [imgSrc, setImgSrc] = useState(image || fallbackImage);

    return (
        <a
            href={url !== '#' ? url : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block ${url !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
        >
            <div className={`relative ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'} rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 md:mb-8 border border-slate-100 shadow-md group-hover:shadow-2xl transition-all duration-700`}>
                <img
                    src={imgSrc}
                    alt={title}
                    onError={() => setImgSrc(fallbackImage)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {url !== '#' && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-xl">
                            <ExternalLink size={20} className="text-[#0f172a]" />
                        </div>
                    </div>
                )}
            </div>
            <div className="px-2">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${tagColor}`}>{tag}</div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-[#0f172a] tracking-tight leading-tight mb-2">{title}</h3>
                <p className="text-slate-500 text-base font-medium leading-relaxed">{description}</p>
            </div>
        </a>
    );
};

const Portfolio: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="portfolio" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                        Social Presence
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Turning Visions Into <br className="hidden md:block" /> Digital Reality
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg md:text-xl font-medium mt-4 max-w-2xl mx-auto"
                    >
                        Real businesses. Real results. Here's what we've built.
                    </motion.p>
                </div>

                {/* Featured 3 Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>

                {/* See More / Show Less */}
                <div className="mt-12 text-center">
                    <Button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-[#0f172a] hover:bg-black text-white px-8 py-4 rounded-2xl font-bold h-auto text-sm flex items-center gap-2 mx-auto"
                    >
                        {showMore ? (
                            <><ChevronUp size={18} /> Show Less</>
                        ) : (
                            <><ChevronDown size={18} /> See More Work</>
                        )}
                    </Button>
                </div>

                {/* More Projects (hidden initially) */}
                <AnimatePresence>
                    {showMore && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mt-12">
                                {moreProjects.map((project, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    >
                                        <ProjectCard {...project} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Portfolio;
