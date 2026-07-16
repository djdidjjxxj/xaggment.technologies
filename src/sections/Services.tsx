import React from 'react';
import { motion } from 'motion/react';
import { Card, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
    {
        title: 'Custom Development',
        description: 'Transform your specific business requirements into high-performance digital reality.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_ff864238-693b-4cd7-ac80-4237c0ef1eca.jpg',
        features: ['Bespoke Web App', 'E-commerce Solutions', 'Enterprise Software']
    },
    {
        title: 'SaaS Prebuilt @ 50,000 /-',
        description: 'Launch your product in record time with our battle-tested, ready-to-scale SaaS architectures.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_f4fd9544-6c02-4f3e-81c3-e0fd0a3b720f.jpg',
        features: ['Quick Deployment', 'Modern UI/UX', 'Full Scalability']
    },
    {
        title: 'AI Automation',
        description: 'Reduce operational costs and increase efficiency with intelligent AI-powered agents.',
        image: 'https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e172f103-bf6a-468d-b861-7592449a5fd7.jpg',
        features: ['Intelligent Bots', 'Workflow Optimization', 'Predictive Analysis']
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                        Features
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        Streamline Business <br className="hidden md:block" /> with our Flexible Options
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <Card className="group overflow-hidden border-none shadow-none bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 h-full flex flex-col transition-all duration-700 hover:bg-slate-100 hover:shadow-2xl">
                                <div className="relative aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-12 border border-slate-100 shadow-sm">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <CardContent className="p-0 flex flex-col flex-1">
                                    <CardTitle className="text-2xl md:text-3xl font-heading font-bold mb-4 text-[#0f172a] tracking-tight leading-tight">{service.title}</CardTitle>
                                    <CardDescription className="text-slate-500 text-lg md:text-xl font-bold mb-10 leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                    <div className="mt-auto space-y-4">
                                        {service.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-4 text-base md:text-lg font-bold text-[#0f172a]">
                                                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
