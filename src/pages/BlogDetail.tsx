import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { supabase } from '@/db/supabase';
import { format } from 'date-fns';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    thumbnail_url: string;
    author: string;
    published_at: string;
}

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .eq('id', id)
                .single();

            if (!error && data) {
                setPost(data);
            }
            setLoading(false);
        };

        fetchPost();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
                <Button onClick={() => navigate('/')}>Return Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pt-40 pb-24">
            <article className="max-w-4xl mx-auto px-6">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="mb-12 group hover:bg-slate-50 rounded-full pl-2"
                >
                    <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-blue-600" />
                            {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-blue-600" />
                            {format(new Date(post.published_at), 'MMMM dd, yyyy')}
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-heading font-black mb-12 tracking-tight leading-[0.95] text-brand-dark">
                        {post.title}
                    </h1>

                    <div className="aspect-video w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-slate-100">
                        <img
                            src={post.thumbnail_url}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-xl prose-slate max-w-none">
                        <p className="text-2xl font-bold text-slate-600 mb-8 italic leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="text-slate-700 leading-relaxed font-medium space-y-6">
                            {post.content.split('\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </article>
        </div>
    );
};

export default BlogDetail;
