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

const mockPosts = [
    {
        id: '1',
        title: 'Building Scalable AI Automation Workflows',
        excerpt: 'Learn how to integrate AI agents into your business processes to save time, reduce error rates, and streamline operation efficiency.',
        content: 'AI is redefining how businesses operate. From automating customer support to optimizing supply chain logistics, intelligent agents can handle complex tasks faster and with lower error rates than traditional manual workflows.\n\nBy leveraging tools like LangChain, custom GPT agents, and workflow builders like Make or n8n, developers can design autonomous workflows that orchestrate tasks across multiple APIs.\n\nIn this article, we outline the exact step-by-step process of designing, testing, and deploying custom AI agent scripts in production environments.',
        thumbnail_url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        published_at: new Date().toISOString()
    },
    {
        id: '2',
        title: 'The Future of SaaS in 2026',
        excerpt: 'An in-depth look at emerging software architectures, microservices, and how prebuilt platforms can accelerate your startup launch.',
        content: 'In 2026, software development is highly commoditized. Building a startup from scratch no longer takes months; instead, founders are utilizing robust prebuilt boilerplate architectures and templates to launch within days.\n\nThis article reviews the main architectural styles used by modern fast-scaling startups, including Next.js, serverless database adapters, and unified identity backends. We highlight how to select the best tech stack for rapid product development.',
        thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
        author: 'Alex Johnson',
        published_at: new Date(Date.now() - 86400000 * 2).toISOString()
    },
    {
        id: '3',
        title: 'A Beginners Guide to Creator Growth',
        excerpt: 'Discover the marketing channels, design languages, and content pipelines that successful creators use to scale their reach rapidly.',
        content: 'Scaling an online audience requires consistency and structured workflows. The creators who succeed are those who treat their platform like a product development cycle.\n\nFrom automated rendering of vertical video reels to high-converting landing pages, this guide explores the essential stack of growth tools, SEO best practices, and distribution strategies that you can implement starting today.',
        thumbnail_url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
        author: 'Sarah Smith',
        published_at: new Date(Date.now() - 86400000 * 5).toISOString()
    }
];

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (!error && data) {
                    setPost(data);
                } else {
                    const localMock = mockPosts.find(p => p.id === id);
                    setPost(localMock || null);
                }
            } catch (err) {
                console.warn('Supabase fetch failed, using local mock blog detail', err);
                const localMock = mockPosts.find(p => p.id === id);
                setPost(localMock || null);
            } finally {
                setLoading(false);
            }
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
