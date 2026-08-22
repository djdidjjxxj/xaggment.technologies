import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── Verified client portfolio only ──────────────────────────────────────────
const verifiedClients = [
    { name: 'Trinity Public School', category: 'Education', url: 'https://trinitypublicschool.org/' },
    { name: 'Wet Pets', category: 'E-Commerce', url: 'https://wetpets.store/' },
    { name: 'North Point Tours', category: 'Travel & Tourism', url: 'https://www.northpointtour.com/' },
];

const TrustStrip: React.FC = () => {
    return (
        <section className="py-8 md:py-12 bg-slate-50 border-y border-slate-100" aria-label="Selected clients">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-emerald-600" />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                            Selected Clients &amp; Live Projects
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 md:gap-10">
                        {verifiedClients.map((client, i) => (
                            <a
                                key={i}
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0a0f1e] hover:text-blue-600 transition-colors group"
                            >
                                <span>{client.name}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-500">
                                    ({client.category})
                                </span>
                                <ArrowUpRight size={13} className="text-slate-400 group-hover:text-blue-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustStrip;
