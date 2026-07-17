import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck, Settings, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/utils/whatsapp';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Basic Maintenance',
        price: '₹1,500 - ₹2,500',
        subtitle: '/ Month',
        icon: Wrench,
        features: [
            'Bug Fixes',
            'Website Monitoring',
            'Backup',
            'Security Updates',
            'Minor Design Changes',
            'Performance Optimization',
        ],
    },
    {
        name: 'CMS Maintenance',
        price: '₹2,000 - ₹3,000',
        subtitle: '/ Month',
        icon: Settings,
        popular: true,
        features: [
            'Content Updates',
            'Blog Updates',
            'Image Updates',
            'CMS Maintenance',
            'Security Updates',
            'Backup',
            'Performance Optimization',
        ],
    },
    {
        name: 'Dynamic Maintenance',
        price: '₹3,500 - ₹4,500',
        subtitle: '/ Month',
        icon: ShieldCheck,
        features: [
            'Backend Maintenance',
            'Database Maintenance',
            'Server Monitoring',
            'Security Updates',
            'Backup',
            'Bug Fixes',
            'Performance Optimization',
            'Technical Support',
        ],
    },
];

const WebsiteMaintenanceSection = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900" id="website-maintenance">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Website <span className="text-blue-600">Maintenance</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Keep your website secure, fast, and up-to-date with our reliable maintenance plans.
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
                                            Recommended
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
                                    <Button 
                                        className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 text-white rounded-full py-6"
                                        onClick={() => openWhatsApp(`Hi Xaggment, I am interested in the ${plan.name} for Website Maintenance!`)}
                                    >
                                        Select Plan
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
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-lg w-1/3">Features</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Basic</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">CMS</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Dynamic</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {[
                                    { feature: 'Bug Fixes', basic: true, cms: false, dynamic: true },
                                    { feature: 'Website Monitoring', basic: true, cms: false, dynamic: false },
                                    { feature: 'Server Monitoring', basic: false, cms: false, dynamic: true },
                                    { feature: 'Backup & Security', basic: true, cms: true, dynamic: true },
                                    { feature: 'Performance Optimization', basic: true, cms: true, dynamic: true },
                                    { feature: 'Minor Design Changes', basic: true, cms: false, dynamic: false },
                                    { feature: 'Content & Blog Updates', basic: false, cms: true, dynamic: false },
                                    { feature: 'CMS Maintenance', basic: false, cms: true, dynamic: false },
                                    { feature: 'Backend Maintenance', basic: false, cms: false, dynamic: true },
                                    { feature: 'Database Maintenance', basic: false, cms: false, dynamic: true },
                                    { feature: 'Technical Support', basic: false, cms: false, dynamic: true },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="p-4 pl-6 text-gray-700 dark:text-gray-300 font-medium">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {row.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.cms ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.dynamic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />}
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

export default WebsiteMaintenanceSection;
