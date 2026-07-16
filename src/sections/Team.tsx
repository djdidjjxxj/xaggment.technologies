import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { supabase } from '@/db/supabase';

interface Member {
    id: string;
    name: string;
    role: string;
    image_url: string;
}

const mockMembers = [
    {
        id: '1',
        name: 'Kaustav',
        role: 'Founder & CEO',
        image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: '2',
        name: 'Alex Johnson',
        role: 'Lead Architect',
        image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: '3',
        name: 'Sarah Smith',
        role: 'UI/UX Director',
        image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: '4',
        name: 'David Lee',
        role: 'Digital Marketing Lead',
        image_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop'
    }
];

const Team: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const { data, error } = await supabase
                    .from('team_members')
                    .select('*')
                    .order('order_index', { ascending: true });

                if (!error && data && data.length > 0) {
                    setMembers(data);
                } else {
                    setMembers(mockMembers);
                }
            } catch (err) {
                console.warn('Supabase fetch failed, using fallback mock team data', err);
                setMembers(mockMembers);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    return (
        <section id="team" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block px-6 py-2 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
                        Our Team
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Team Behind <br className="hidden md:block" /> Wonders
                    </motion.h2>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-[4/5] bg-slate-100 animate-pulse rounded-[3rem]" />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10">
                        {members.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="group relative"
                            >
                                <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700 bg-slate-50 border border-slate-100">
                                    <img
                                        src={member.image_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />

                                    {/* Floating Glassmorphism Label (Exactly Matching Reference Image 1) */}
                                    <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-6 md:right-6 bg-white/80 backdrop-blur-2xl p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl text-center border border-white/50 group-hover:-translate-y-3 transition-transform duration-500">
                                        <h4 className="text-lg font-heading font-bold text-[#0f172a] leading-none mb-1">{member.name}</h4>
                                        <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Team;
