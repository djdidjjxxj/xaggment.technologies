import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
    {
        id: '1',
        title: 'Why I Started Xaggment — A Founder\'s Honest Story',
        excerpt: 'Most agencies sell you a dream. I started Xaggment because I was tired of watching small businesses get overcharged for average work. Here\'s the raw truth about why we exist and what we\'re actually building.',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'July 2025',
        readTime: '5 min read',
        category: 'Founder Thoughts',
    },
    {
        id: '2',
        title: 'The ₹30,000 Website vs the ₹3 Lakh Website — What Actually Differs?',
        excerpt: 'I\'ve seen both ends of the spectrum. A client once paid ₹3 lakhs for a website that crashed in 2 weeks. Another paid ₹30,000 and scaled to 10,000 monthly visitors. The difference isn\'t the price — here\'s what it really is.',
        thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'June 2025',
        readTime: '7 min read',
        category: 'Web Development',
    },
    {
        id: '3',
        title: 'AI Automation Is Not the Future — It\'s Already Happening to Your Competitors',
        excerpt: 'While you\'re manually replying to leads, your competitor\'s AI bot has already qualified them, sent a proposal, and followed up twice. I\'ll show you exactly what automation looks like in 2025 for small businesses.',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'May 2025',
        readTime: '6 min read',
        category: 'AI & Automation',
    },
];

const InsightsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Insights &amp; Articles | Xaggment Technologies</title>
                <meta name="description" content="Read unfiltered articles on web development, business automation, AI, and startup growth written by Kaustav." />
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
                            Insights &amp; Blog
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="section-title mb-6"
                        >
                            Thoughts from the founder
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="body-text"
                        >
                            Unfiltered insights on web technology, business automation, digital growth, and building modern companies.
                        </motion.p>
                    </div>

                    {/* Blog Post Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {posts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col group"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#0a0f1e]">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-7 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        <span>{post.author}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                                    </div>

                                    <h2 className="font-heading font-bold text-xl text-[#0a0f1e] mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-[#0a0f1e] group-hover:text-blue-600 group-hover:gap-3 transition-all"
                                    >
                                        Read Article
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InsightsPage;
