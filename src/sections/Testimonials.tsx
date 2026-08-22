import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const realProof = [
    {
        title: 'Trinity Public School',
        type: 'Education Portal',
        proof: 'Online admissions system, event board and career portal live at trinitypublicschool.org',
    },
    {
        title: 'Wet Pets Kolkata',
        type: 'E-Commerce Store',
        proof: 'Ornamental fish & aquarium catalogue with WhatsApp order flow live at wetpets.store',
    },
    {
        title: 'North Point Tours',
        type: 'Travel & Tourism',
        proof: 'Custom tour package listings and hotel booking flow live at northpointtour.com',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 px-6 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="eyebrow-label mb-2 block">Real proof</span>
                    <h2 className="section-title">Built for real businesses</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {realProof.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-1">{item.type}</span>
                            <h3 className="font-bold text-[#0a0f1e] text-xl mb-2">{item.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                {item.proof}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
