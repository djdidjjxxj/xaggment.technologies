import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Package, Layers, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/utils/whatsapp';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Basic Combo',
        price: '₹6,999',
        subtitle: '/ Month',
        icon: Package,
        websiteServices: [
            'Basic Website Maintenance',
            'Regular Website Updates',
            'Technical Support',
        ],
        marketingServices: [
            'Graphic Design',
            'Banner Design',
            'Social Media Post Design',
            'Reels Creation',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
        ],
    },
    {
        name: 'Standard Combo',
        price: '₹9,999',
        subtitle: '/ Month',
        icon: Layers,
        popular: true,
        websiteServices: [
            'Website Maintenance',
            'Regular Website Updates',
            'Technical Support',
        ],
        marketingServices: [
            'Graphic Design',
            'Unlimited Banner Design',
            'Weekly Reels',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
    },
    {
        name: 'Premium Combo',
        price: '₹11,999',
        subtitle: '/ Month',
        icon: Diamond,
        websiteServices: [
            'Unlimited Website Changes',
            'Unlimited Content Updates',
            'Website Maintenance',
            'Priority Technical Support',
        ],
        marketingServices: [
            'Unlimited Banner Design',
            'Weekly Reels',
            'Social Media Management',
            'Social Media Optimization',
            'Google Business Profile Management',
            'Search Engine Marketing (SEM)',
            'Social Media Marketing (SMM)',
            'Advertisement Campaign Management',
        ],
    },
];

const ComboPlansSection = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900" id="combo-plans">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Combo <span className="text-blue-600">Plans</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Get the best of both worlds with our integrated Website and Digital Marketing combo plans. Save more, grow faster.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className={`relative h-full flex flex-col p-8 bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-xl border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-blue-600 md:scale-105 bg-white dark:bg-gray-800' : 'hover:-translate-y-2'}`}>
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
                                        <span className="text-3xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                                        <span className="text-sm text-gray-500 font-medium">{plan.subtitle}</span>
                                    </div>
                                </div>
                                
                                <div className="flex-grow space-y-6 mb-8">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Website Services</h4>
                                        <ul className="space-y-3">
                                            {plan.websiteServices.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">Marketing Services</h4>
                                        <ul className="space-y-3">
                                            {plan.marketingServices.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-tight">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <Button 
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6"
                                        onClick={() => openWhatsApp(`Hi Xaggment, I am interested in the ${plan.name}!`)}
                                    >
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
                    className="max-w-5xl mx-auto overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-lg w-1/4">Features</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center w-1/4">Basic Combo</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center w-1/4">Standard Combo</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center w-1/4">Premium Combo</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                                    <td colSpan={4} className="p-4 pl-6 text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider">Website Services</td>
                                </tr>
                                {[
                                    { feature: 'Basic Maintenance', basic: true, standard: true, premium: true },
                                    { feature: 'Regular Website Updates', basic: true, standard: true, premium: true },
                                    { feature: 'Technical Support', basic: true, standard: true, premium: 'Priority' },
                                    { feature: 'Unlimited Changes', basic: false, standard: false, premium: true },
                                    { feature: 'Unlimited Content Updates', basic: false, standard: false, premium: true },
                                ].map((row, i) => (
                                    <tr key={`web-${i}`} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="p-4 pl-6 text-gray-700 dark:text-gray-300 font-medium text-sm">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {typeof row.basic === 'boolean' ? (row.basic ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-blue-600">{row.basic}</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.standard === 'boolean' ? (row.standard ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-blue-600">{row.standard}</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.premium === 'boolean' ? (row.premium ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-blue-600">{row.premium}</span>}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-gray-50/50 dark:bg-gray-800/30">
                                    <td colSpan={4} className="p-4 pl-6 text-gray-900 dark:text-white font-bold text-sm uppercase tracking-wider">Marketing Services</td>
                                </tr>
                                {[
                                    { feature: 'Graphic Design', basic: true, standard: true, premium: true },
                                    { feature: 'Banner Design', basic: 'Limited', standard: 'Unlimited', premium: 'Unlimited' },
                                    { feature: 'Reels Creation', basic: 'Standard', standard: 'Weekly', premium: 'Weekly' },
                                    { feature: 'Social Media Management', basic: true, standard: true, premium: true },
                                    { feature: 'Social Media Optimization', basic: true, standard: true, premium: true },
                                    { feature: 'Google Business Profile', basic: true, standard: true, premium: true },
                                    { feature: 'Search Engine Marketing', basic: false, standard: true, premium: true },
                                    { feature: 'Social Media Marketing', basic: false, standard: true, premium: true },
                                    { feature: 'Ad Campaign Management', basic: false, standard: true, premium: true },
                                ].map((row, i) => (
                                    <tr key={`mkt-${i}`} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="p-4 pl-6 text-gray-700 dark:text-gray-300 font-medium text-sm">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {typeof row.basic === 'boolean' ? (row.basic ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{row.basic}</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.standard === 'boolean' ? (row.standard ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{row.standard}</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            {typeof row.premium === 'boolean' ? (row.premium ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-gray-300 dark:text-gray-600 mx-auto" />) : <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{row.premium}</span>}
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

export default ComboPlansSection;
