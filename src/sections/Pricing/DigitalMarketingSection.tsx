import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Megaphone, TrendingUp, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Starter Marketing Plan',
        price: '₹3,599',
        subtitle: '/ Month',
        icon: Megaphone,
        features: [
            'Graphic Design',
            'Banner Design',
            'Social Media Post Design',
            'Reels Creation',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
        ],
        note: 'Advertisement Budget is NOT INCLUDED. The client will pay the advertising budget separately.',
        noteHighlight: 'text-red-500',
    },
    {
        name: 'Professional Marketing Plan',
        price: '₹5,599',
        subtitle: '/ Month',
        icon: TrendingUp,
        popular: true,
        features: [
            'Unlimited Banner Design',
            'Weekly 3–4 Reels',
            'Graphic Design',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
        note: 'Advertisement Budget is INCLUDED in this plan.',
        noteHighlight: 'text-green-500',
    },
];

const DigitalMarketingSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/20" id="digital-marketing">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Digital <span className="text-blue-600">Marketing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Boost your online presence and reach your target audience effectively with our comprehensive digital marketing solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className={`relative h-full flex flex-col p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-600 md:scale-105' : 'hover:-translate-y-2'}`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                                    <plan.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                                        <span className="text-sm text-gray-500 font-medium">{plan.subtitle}</span>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <div className={`mb-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg flex items-start gap-3`}>
                                        <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.noteHighlight}`} />
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Important Note:</h4>
                                            <p className={`text-xs ${plan.noteHighlight} font-semibold`}>{plan.note}</p>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6">
                                        Get Started
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-lg w-1/2">Features</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Starter Plan</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Professional Plan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {[
                                    { feature: 'Graphic Design', starter: true, pro: true },
                                    { feature: 'Banner Design', starter: 'Limited', pro: 'Unlimited' },
                                    { feature: 'Reels Creation', starter: 'Basic', pro: 'Weekly 3–4 Reels' },
                                    { feature: 'Social Media Management', starter: true, pro: true },
                                    { feature: 'Social Media Optimization', starter: true, pro: true },
                                    { feature: 'Google Business Profile Management', starter: true, pro: true },
                                    { feature: 'Search Engine Marketing (SEM)', starter: false, pro: true },
                                    { feature: 'Social Media Marketing (SMM)', starter: false, pro: true },
                                    { feature: 'Advertisement Campaign Management', starter: false, pro: true },
                                    { feature: 'Advertisement Budget Included', starter: false, pro: true },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="p-4 pl-6 text-gray-700 dark:text-gray-300 font-medium">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {typeof row.starter === 'boolean' ? (
                                                row.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                                            ) : (
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{row.starter}</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.pro === 'boolean' ? (
                                                row.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                                            ) : (
                                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{row.pro}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DigitalMarketingSection;
