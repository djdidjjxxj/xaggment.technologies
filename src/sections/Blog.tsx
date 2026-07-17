import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Unique blogs written from Kaustav's perspective as Founder
const posts = [
    {
        id: '1',
        title: 'Why I Started Xaggment — A Founder\'s Honest Story',
        excerpt: 'Most agencies sell you a dream. I started Xaggment because I was tired of watching small businesses get overcharged for average work. Here\'s the raw truth about why we exist and what we\'re actually building.',
        thumbnail_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'July 2025',
        readTime: '5 min read',
    },
    {
        id: '2',
        title: 'The ₹30,000 Website vs the ₹3 Lakh Website — What Actually Differs?',
        excerpt: 'I\'ve seen both ends of the spectrum. A client once paid ₹3 lakhs for a website that crashed in 2 weeks. Another paid ₹30,000 and scaled to 10,000 monthly visitors. The difference isn\'t the price — here\'s what it really is.',
        thumbnail_url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'June 2025',
        readTime: '7 min read',
    },
    {
        id: '3',
        title: 'AI Automation Is Not the Future — It\'s Already Happening to Your Competitors',
        excerpt: 'While you\'re manually replying to leads, your competitor\'s AI bot has already qualified them, sent a proposal, and followed up twice. I\'ll show you exactly what automation looks like in 2025 for small businesses.',
        thumbnail_url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        date: 'May 2025',
        readTime: '6 min read',
    }
];

const Blog: React.FC = () => {
    return (
        <section id="blog" className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block px-6 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        Founder's Desk
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Thoughts from <br className="hidden md:block" /> the Founder
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-slate-500 text-lg font-medium max-w-xl mx-auto"
                    >
                        Unfiltered insights on business, tech, and growth — written by Kaustav himself.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Link to={`/blog/${post.id}`}>
                                <Card className="group overflow-hidden border-none shadow-none bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 h-full flex flex-col transition-all duration-700 hover:shadow-2xl hover:-translate-y-3">
                                    <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 border border-slate-100">
                                        <img
                                            src={post.thumbnail_url}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                    <CardContent className="p-0 flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            <span>{post.author}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{post.date}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <CardTitle className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                                            {post.title}
                                        </CardTitle>
                                        <CardDescription className="text-slate-500 text-base md:text-lg font-medium line-clamp-3 mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </CardDescription>
                                        <div className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm md:text-base group-hover:gap-4 transition-all duration-300">
                                            Read Article
                                            <span>→</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
