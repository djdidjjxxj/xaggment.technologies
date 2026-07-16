import React from 'react';
import { motion } from 'motion/react';
import { Code, Terminal, MonitorSmartphone, Database, Cpu, LayoutTemplate } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
    { name: 'Custom Business Websites', icon: LayoutTemplate },
    { name: 'ERP Systems', icon: Database },
    { name: 'CRM Systems', icon: MonitorSmartphone },
    { name: 'Finance Management Software', icon: Terminal },
    { name: 'Inventory Management', icon: Code },
    { name: 'School & College Management', icon: Cpu },
    { name: 'Hospital Management', icon: Database },
    { name: 'Booking Systems', icon: MonitorSmartphone },
    { name: 'Automation Software', icon: Terminal },
    { name: 'API Integrations', icon: Code },
    { name: 'Dashboard Development', icon: LayoutTemplate },
    { name: 'Mobile App Backend', icon: Cpu },
    { name: 'Admin Panels', icon: LayoutTemplate },
    { name: 'Custom Web Applications', icon: Code },
];

const CustomDevelopmentSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-blue-900" id="custom-development">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute top-1/2 -right-24 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Need a Custom Solution?
                        </h2>
                        <h3 className="text-xl md:text-2xl text-blue-200 mb-6">
                            Need something unique?
                        </h3>
                        <p className="text-lg text-blue-100 mb-12">
                            If your project requires custom features, APIs, dashboards, ERP, CRM, inventory systems, finance software, booking systems, automation, or any other custom solution, contact us for a personalized quotation.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {services.map((service, index) => (
                            <span 
                                key={index}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm text-sm font-medium hover:bg-white/20 transition-colors"
                            >
                                <service.icon className="w-4 h-4 mr-2 text-cyan-400" />
                                {service.name}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all">
                            Request Custom Quote
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomDevelopmentSection;
