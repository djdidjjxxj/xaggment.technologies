import React from 'react';
import * as motion from 'motion/react-client';
import type { Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Trinity Public School',
        client: 'Trinity Public School',
        industry: 'Education',
        challenge: 'Modern CBSE school presence with digital admissions, events and career portal.',
        built: 'School portal, online admissions, notice board, career portal.',
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
        challenge: 'Aquarium store in Kolkata needing product catalogue with WhatsApp ordering.',
        built: 'E-commerce store, product catalogue, WhatsApp checkout.',
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
        challenge: 'Tour agency website showcasing custom packages and booking flow.',
        built: 'Tour package catalogue, homestay listings, booking flow.',
        url: 'https://www.northpointtour.com/',
        tagColor: 'bg-emerald-100 text-emerald-700',
        gradientFrom: 'hsl(150, 70%, 40%)',
        gradientTo: 'hsl(120, 60%, 35%)',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75&auto=format&fit=crop',
    },
];

const getCardVariants = (isEven: boolean): Variants => ({
    offscreen: {
        y: 60,
        opacity: 0,
        rotate: isEven ? -4 : 4,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        rotate: isEven ? -1 : 1,
        transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 0.8,
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
            <div
                className="absolute inset-0 rounded-2xl opacity-15 -z-10 blur-xl"
                style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                aria-hidden="true"
            />

            <motion.div
                variants={variants}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                whileHover={{ rotate: 0, y: -2, transition: { duration: 0.2 } }}
            >
                {/* Image Aspect ratio scaled down for compactness */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                        src={image}
                        alt={`${client} website`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColor}`}>
                        {industry}
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{client}</p>
                        <h3 className="text-base font-bold text-[#0a0f1e] mb-2 leading-snug">{title}</h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3 line-clamp-2">{challenge}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-slate-600 truncate max-w-[170px]">{built}</span>
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex-shrink-0"
                            aria-label={`Visit ${client} website`}
                        >
                            Live site
                            <ExternalLink size={12} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const SelectedWorkSection: React.FC = () => {
    return (
        <section id="work" className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-2"
                    >
                        Selected work
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-3"
                    >
                        Real businesses. Real results.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-md mx-auto text-sm md:text-base"
                    >
                        Here is what we've built for real clients — websites that are live, working and growing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} index={idx} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Link
                        to="/work"
                        id="selected-work-view-all"
                        className="inline-flex items-center gap-2 bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 text-xs shadow-md"
                    >
                        <span>VIEW ALL WORK</span>
                        <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default SelectedWorkSection;
