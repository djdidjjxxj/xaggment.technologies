import React from 'react';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

// ── Verified real projects only ────────────────────────────────────────────────
const projects = [
    {
        title: 'Trinity Public School',
        client: 'Trinity Public School',
        industry: 'Education',
        challenge: 'A CBSE-affiliated school needed a modern online presence with digital admissions, event listings and a career portal.',
        built: 'Full school website with online admissions, events management, gallery, FAQs and career portal.',
        url: 'https://trinitypublicschool.org/',
        tagColor: 'bg-amber-100 text-amber-700',
        gradientFrom: 'hsl(40, 90%, 55%)',
        gradientTo: 'hsl(25, 95%, 50%)',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75&auto=format&fit=crop',
    },
    {
        title: 'Wet Pets',
        client: 'Wet Pets',
        industry: 'E-Commerce',
        challenge: 'An aquarium store in Kolkata needed a product catalogue with WhatsApp ordering for ornamental fish and accessories.',
        built: 'E-commerce store with product catalogue, WhatsApp ordering flow and Kolkata-specific SEO.',
        url: 'https://wetpets.store/',
        tagColor: 'bg-blue-100 text-blue-700',
        gradientFrom: 'hsl(210, 90%, 50%)',
        gradientTo: 'hsl(190, 85%, 45%)',
        image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=600&q=75&auto=format&fit=crop',
    },
    {
        title: 'North Point Tours',
        client: 'North Point Tours & Travels',
        industry: 'Travel',
        challenge: 'A premium tour & travel agency needed a website to showcase customized packages, hotel listings and upcoming tours.',
        built: 'Travel website with tour packages, hotel/homestay listings, car rental options and upcoming tour calendar.',
        url: 'https://www.northpointtour.com/',
        tagColor: 'bg-emerald-100 text-emerald-700',
        gradientFrom: 'hsl(150, 70%, 40%)',
        gradientTo: 'hsl(120, 60%, 35%)',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75&auto=format&fit=crop',
    },
];

const getCardVariants = (isEven: boolean): Variants => ({
    offscreen: {
        y: 120,
        opacity: 0,
        rotate: isEven ? -8 : 8,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: isEven ? -1.5 : 1.5,
        transition: {
            type: 'spring',
            bounce: 0.35,
            duration: 0.9,
        },
    },
});

interface ProjectCardProps {
    title: string;
    client: string;
    industry: string;
    challenge: string;
    built: string;
    url: string;
    tagColor: string;
    gradientFrom: string;
    gradientTo: string;
    image: string;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title, client, industry, challenge, built, url, tagColor, gradientFrom, gradientTo, image, index,
}) => {
    const isEven = index % 2 === 0;
    const variants = getCardVariants(isEven);

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
        >
            {/* Colored background splash (adapted from Motion Ref #2) */}
            <div
                className="absolute inset-0 rounded-3xl opacity-20 -z-10 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                aria-hidden="true"
            />

            <motion.div
                variants={variants}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 group"
                whileHover={{ rotate: 0, scale: 1.01, transition: { duration: 0.3 } }}
            >
                {/* Project Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                        src={image}
                        alt={`${client} website`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tagColor}`}>
                        {industry}
                    </div>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-slate-50"
                        aria-label={`Visit ${client} website`}
                    >
                        <ExternalLink size={15} className="text-[#0a0f1e]" />
                    </a>
                </div>

                {/* Project Details */}
                <div className="p-7 md:p-8">
                    <p className="eyebrow-label mb-1">{client}</p>
                    <h3 className="card-title mb-4">{title}</h3>

                    <div className="space-y-3 mb-6">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Challenge</p>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{challenge}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">What we built</p>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">{built}</p>
                        </div>
                    </div>

                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0a0f1e] hover:gap-4 transition-all duration-300"
                        aria-label={`View ${client} live website`}
                    >
                        View live site
                        <ExternalLink size={14} />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

const SelectedWorkSection: React.FC = () => {
    return (
        <section id="work" className="py-20 md:py-28 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-3"
                    >
                        Selected work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-4"
                    >
                        Real businesses.
                        <br className="hidden md:block" /> Real results.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-lg mx-auto"
                    >
                        Here's what we've built for real clients — websites that are live, working and growing.
                    </motion.p>
                </div>

                {/* Project Cards with scroll animation from Motion Reference #2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} index={idx} />
                    ))}
                </div>

                {/* View all CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/work"
                        id="selected-work-view-all"
                        className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-sm hover:gap-4 shadow-lg"
                    >
                        View All Work
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SelectedWorkSection;
