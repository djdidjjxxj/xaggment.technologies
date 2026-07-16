import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Server, Layout, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
    {
        name: 'Basic Website',
        price: '₹6,999',
        subtitle: 'Up to 5 Pages',
        icon: Layout,
        features: [
            'Up to 5 Website Pages',
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Business Layout',
            'Contact Form',
            'Social Media Integration',
            'Google Map Integration',
            'Mobile Friendly Design',
            'Cross Browser Compatibility',
            'Basic Security Setup',
            'Clean & Optimized Code',
        ],
        extra: 'Additional Pages: ₹1,000 per page',
        additionalCharges: ['Domain Registration', 'Hosting (If Required)'],
    },
    {
        name: 'Standard Website (CMS)',
        price: '₹1,500',
        subtitle: 'per page',
        icon: Server,
        popular: true,
        features: [
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Layout',
            'CMS Integration',
            'Easy Content Management',
            'Easy Content Editing',
            'Blog Management',
            'Image & Content Updates',
            'Mobile Friendly Design',
            'Cross Browser Compatibility',
            'Basic Security',
        ],
        extra: 'CMS Integration: ₹2,500',
        additionalCharges: ['CMS Subscription Charges are separate.'],
    },
    {
        name: 'Dynamic Website',
        price: '₹1,500',
        subtitle: 'per page',
        icon: Database,
        features: [
            'Modern UI/UX Design',
            'Fully Responsive Design',
            'SEO-Friendly Structure',
            'Fast Loading Website',
            'Professional Layout',
            'Backend Development',
            'Database Integration',
            'Authentication System',
            'Admin Dashboard',
            'User Management',
            'API Integration',
            'Server Configuration',
            'Secure Database',
            'Mobile Friendly',
            'Cross Browser Compatibility',
        ],
        extra: 'Backend Development Charges: ₹3,500 – ₹5,000',
        additionalCharges: ['Domain Registration', 'Hosting Charges', 'Server Charges (If Required)'],
    },
];

const WebsiteDevelopmentSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/20" id="website-development">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Website <span className="text-blue-600">Development</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Choose the perfect website plan for your business. From basic informative sites to fully dynamic web applications.
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
                                        <span className="text-sm text-gray-500 font-medium">({plan.subtitle})</span>
                                    </div>
                                    <p className="text-sm font-semibold text-blue-600 mt-2">{plan.extra}</p>
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
                                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Additional Charges:</h4>
                                        <ul className="space-y-1">
                                            {plan.additionalCharges.map((charge, i) => (
                                                <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                                                    {charge}
                                                </li>
                                            ))}
                                        </ul>
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
                    className="max-w-5xl mx-auto overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-lg w-1/3">Features</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Basic Website</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Standard (CMS)</th>
                                    <th className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white font-bold text-center">Dynamic Website</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {[
                                    { feature: 'Modern UI/UX Design', basic: true, standard: true, dynamic: true },
                                    { feature: 'Fully Responsive', basic: true, standard: true, dynamic: true },
                                    { feature: 'SEO-Friendly Structure', basic: true, standard: true, dynamic: true },
                                    { feature: 'Contact Form', basic: true, standard: true, dynamic: true },
                                    { feature: 'CMS Integration', basic: false, standard: true, dynamic: false },
                                    { feature: 'Easy Content Management', basic: false, standard: true, dynamic: false },
                                    { feature: 'Backend Development', basic: false, standard: false, dynamic: true },
                                    { feature: 'Database & Auth System', basic: false, standard: false, dynamic: true },
                                    { feature: 'Admin Dashboard', basic: false, standard: false, dynamic: true },
                                    { feature: 'API Integration', basic: false, standard: false, dynamic: true },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                                        <td className="p-4 pl-6 text-gray-700 dark:text-gray-300 font-medium">{row.feature}</td>
                                        <td className="p-4 text-center">
                                            {row.basic ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />}
                                        </td>
                                        <td className="p-4 text-center">
                                            {row.standard ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />}
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

export default WebsiteDevelopmentSection;
