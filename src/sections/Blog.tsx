import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { supabase } from '@/db/supabase';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    thumbnail_url: string;
    author: string;
    published_at: string;
}

const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('published_at', { ascending: false });

            if (!error && data) {
                setPosts(data);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <section id="blog" className="py-24 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block px-6 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        Insights
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Latest from <br className="hidden md:block" /> Our Blog
                    </motion.h2>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[500px] bg-white animate-pulse rounded-[3rem]" />
                        ))}
                    </div>
                ) : (
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
                                                <span>{format(new Date(post.published_at), 'MMM dd, yyyy')}</span>
                                            </div>
                                            <CardTitle className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                                                {post.title}
                                            </CardTitle>
                                            <CardDescription className="text-slate-500 text-lg md:text-xl font-bold line-clamp-3 mb-6 leading-relaxed">
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
                )}
            </div>
        </section>
    );
};

export default Blog;
