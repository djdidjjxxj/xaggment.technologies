import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '@/db/supabase';
import { CheckCircle2, CircleDashed, Clock, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface Milestone {
    id: string;
    title: string;
    description: string;
    status: 'completed' | 'in_progress' | 'planned';
    period: string;
    order_index: number;
}

const Roadmap: React.FC = () => {
    const [milestones, setMilestones] = useState<Milestone[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

    useEffect(() => {
        const fetchMilestones = async () => {
            const { data, error } = await supabase
                .from('roadmap_milestones')
                .select('*')
                .order('order_index', { ascending: true });

            if (!error && data) {
                setMilestones(data);
            }
            setLoading(false);
        };

        fetchMilestones();
    }, []);

    const getStatusIcon = (status: Milestone['status']) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="text-green-500 w-6 h-6" />;
            case 'in_progress': return <CircleDashed className="text-blue-500 w-6 h-6 animate-spin-slow" />;
            case 'planned': return <Clock className="text-slate-400 w-6 h-6" />;
        }
    };

    const getStatusColor = (status: Milestone['status']) => {
        switch (status) {
            case 'completed': return 'bg-green-50 border-green-100 text-green-700';
            case 'in_progress': return 'bg-blue-50 border-blue-100 text-blue-700';
            case 'planned': return 'bg-slate-50 border-slate-100 text-slate-700';
        }
    };

    return (
        <section id="roadmap" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                        Our Journey
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Interactive Roadmap
                    </motion.h2>
                </div>

                {loading ? (
                    <div className="space-y-8 max-w-4xl mx-auto">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-32 bg-slate-100 animate-pulse rounded-3xl" />
                        ))}
                    </div>
                ) : (
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12">
                            {milestones.map((milestone, idx) => (
                                <motion.div
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={cn(
                                        "relative flex items-center gap-8 md:gap-0 cursor-pointer group",
                                        idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    )}
                                    onClick={() => setSelectedMilestone(milestone)}
                                >
                                    <div className="absolute left-[20px] md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 z-10 hidden md:block group-hover:scale-150 transition-transform duration-500 shadow-xl" />

                                    <div className={cn(
                                        "md:w-1/2 px-8 flex",
                                        idx % 2 === 0 ? "justify-start md:text-right" : "justify-end md:text-left"
                                    )}>
                                        <span className="text-xl font-bold text-slate-400 uppercase tracking-tighter">
                                            {milestone.period}
                                        </span>
                                    </div>

                                    <div className="md:w-1/2 px-4 md:px-8">
                                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-[10px] font-bold uppercase text-blue-600">Click for details</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-4">
                                                {getStatusIcon(milestone.status)}
                                                <span className={cn(
                                                    "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border",
                                                    getStatusColor(milestone.status)
                                                )}>
                                                    {milestone.status.replace('_', ' ')}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-heading font-bold mb-2 text-[#0f172a] group-hover:text-blue-600 transition-colors">
                                                {milestone.title}
                                            </h3>
                                            <p className="text-slate-500 font-bold leading-relaxed line-clamp-2">
                                                {milestone.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                <Dialog open={!!selectedMilestone} onOpenChange={() => setSelectedMilestone(null)}>
                    <DialogContent className="max-w-xl rounded-[2.5rem] p-10 border-none">
                        {selectedMilestone && (
                            <>
                                <DialogHeader className="mb-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        {getStatusIcon(selectedMilestone.status)}
                                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                            {selectedMilestone.period}
                                        </span>
                                    </div>
                                    <DialogTitle className="text-3xl font-heading font-bold text-[#0f172a] tracking-tight">
                                        {selectedMilestone.title}
                                    </DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="text-xl font-bold text-slate-500 leading-relaxed">
                                    {selectedMilestone.description}
                                </DialogDescription>
                                <div className="mt-8">
                                    <span className={cn(
                                        "px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border",
                                        getStatusColor(selectedMilestone.status)
                                    )}>
                                        Status: {selectedMilestone.status.replace('_', ' ')}
                                    </span>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Roadmap;
