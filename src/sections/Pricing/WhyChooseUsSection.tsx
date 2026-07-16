import React from 'react';
import { motion } from 'motion/react';
import { Palette, Smartphone, Search, Zap, Code2, ShieldCheck, HeadphonesIcon, TrendingUp, Handshake, Gem } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
    { name: 'Modern UI/UX', icon: Palette, description: 'Stunning, user-centric designs that captivate your audience.' },
    { name: 'Responsive Design', icon: Smartphone, description: 'Flawless experiences across all devices and screen sizes.' },
    { name: 'SEO Friendly Development', icon: Search, description: 'Built-in optimization to help you rank higher on search engines.' },
    { name: 'Fast Performance & Loading', icon: Zap, description: 'Lightning-fast load times for better user retention and SEO.' },
    { name: 'Clean Code', icon: Code2, description: 'Well-structured, maintainable, and bug-free codebases.' },
    { name: 'Scalable Architecture', icon: TrendingUp, description: 'Solutions that grow seamlessly with your business.' },
    { name: 'Professional Support', icon: HeadphonesIcon, description: 'Dedicated technical support whenever you need it.' },
    { name: 'Secure Development', icon: ShieldCheck, description: 'Robust security measures to protect your data and users.' },
    { name: 'Custom Solutions', icon: Gem, description: 'Tailor-made software to solve your unique business challenges.' },
    { name: 'Transparent Pricing', icon: Handshake, description: 'No hidden fees. Clear deliverables for every plan.' },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/20" id="why-choose-us">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Why Choose <span className="text-blue-600">Xaggment Technologies</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        We don't just build websites; we build digital experiences that drive growth and success for your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card className="p-6 h-full bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.name}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
