import React from 'react';
import { motion } from 'motion/react';
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const projects = [
    {
        title: 'Lal Sweets Ecom Website',
        description: 'Modern sweets store with responsive design for smooth shopping.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff864238-693b-4cd7-ac80-4237c0ef1eca.jpg'
    },
    {
        title: 'Kirtilals : Luxury Website',
        description: 'Premium diamond-jewellery store with elegant UX for luxury buyers.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_99544192-480c-4ed3-b273-6bceba1a1b6e.jpg'
    },
    {
        title: 'Tradescribe: Trading Platform',
        description: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f4fd9544-6c02-4f3e-81c3-e0fd0a3b720f.jpg'
    }
];

const Portfolio: React.FC = () => {
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Card className="group overflow-hidden border-none shadow-none h-full flex flex-col bg-transparent">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-8 md:mb-12 border border-slate-100 shadow-md group-hover:shadow-2xl transition-all duration-700">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <CardContent className="p-0">
                                    <CardTitle className="text-2xl md:text-3xl font-heading font-bold mb-4 md:mb-6 text-[#0f172a] tracking-tight leading-tight">{project.title}</CardTitle>
                                    <CardDescription className="text-slate-500 text-lg md:text-2xl font-bold leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
