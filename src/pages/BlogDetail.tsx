import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
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

const mockPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Why I Started Xaggment — A Founder\'s Honest Story',
        excerpt: 'Most agencies sell you a dream. I started Xaggment because I was tired of watching small businesses get overcharged for average work. Here\'s the raw truth about why we exist and what we\'re actually building.',
        content: 'Most agencies sell you a dream. I started Xaggment Technologies because I was tired of watching small business owners and founders get overcharged for average work and overcomplicated tech jargon.\n\nOur philosophy is simple: build reliable digital systems, automate repetitive operations, and drive ongoing growth. No fluff, no fabricated claims — just honest, high-quality work.\n\nWhen you work with Xaggment, you get a real partner invested in your bottom line. We prioritize business outcomes — leads, revenue, and efficiency — over vanity metrics.',
        thumbnail_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        published_at: '2025-07-15T10:00:00.000Z'
    },
    {
        id: '2',
        title: 'The ₹30,000 Website vs the ₹3 Lakh Website — What Actually Differs?',
        excerpt: 'I\'ve seen both ends of the spectrum. A client once paid ₹3 lakhs for a website that crashed in 2 weeks. Another paid ₹30,000 and scaled to 10,000 monthly visitors. The difference isn\'t the price — here\'s what it really is.',
        content: 'I\'ve seen both ends of the spectrum in web development. A client once paid ₹3 lakhs to a traditional agency for a bloated website that crashed under initial traffic. Another client paid ₹30,000 for a clean, optimized web setup and scaled to 10,000 monthly visitors.\n\nThe difference isn\'t the price tag — it is the architecture, optimization, and conversion strategy behind the build.\n\nKey factors that determine real website value:\n1. Mobile Responsiveness & Speed Optimization\n2. Clear Conversion Funnels & Contact Flow\n3. Clean Code & Fast Server Infrastructure\n4. Search Engine Accessibility & SEO Structure',
        thumbnail_url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        published_at: '2025-06-20T10:00:00.000Z'
    },
    {
        id: '3',
        title: 'AI Automation Is Not the Future — It\'s Already Happening to Your Competitors',
        excerpt: 'While you\'re manually replying to leads, your competitor\'s AI bot has already qualified them, sent a proposal, and followed up twice. I\'ll show you exactly what automation looks like in 2025 for small businesses.',
        content: 'Artificial Intelligence and business automation are no longer future possibilities — they are active operational advantages being deployed today.\n\nWhile traditional businesses spend hours manually copying lead information or drafting routine replies, automated workflows handle lead qualification, instantly send WhatsApp proposals, and route qualified opportunities to calendars.\n\nAt Xaggment, we design custom AI agents and workflow automations that integrate directly with existing tools like CRMs, WhatsApp, email, and databases to cut manual work and accelerate response times.',
        thumbnail_url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
        author: 'Kaustav',
        published_at: '2025-05-10T10:00:00.000Z'
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
            <Helmet>
                <title>{`${post.title} | Xaggment Technologies`}</title>
                <meta name="description" content={post.excerpt} />
                <meta property="og:title" content={`${post.title} | Xaggment Technologies`} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.thumbnail_url} />
                <meta property="og:type" content="article" />
                <link rel="canonical" href={`https://kaustav-exe.github.io/xaggment.technologies/insights/${post.id}`} />
            </Helmet>
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
