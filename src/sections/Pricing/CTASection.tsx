import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, PhoneCall, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { openWhatsApp } from '@/utils/whatsapp';

const CTASection = () => {
    return (
        <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-900/20" id="contact">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
                <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-t from-cyan-50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-full opacity-50 blur-3xl mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 p-8 md:p-16 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Business</span> Together
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                            Grow your business with modern websites, powerful software, and result-driven digital marketing.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button 
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-blue-500/25 transition-all group"
                                onClick={() => openWhatsApp('Hi Xaggment, I want to start a new project.')}
                            >
                                <CalendarCheck className="w-5 h-5 mr-2" />
                                Get Free Consultation
                            </Button>
                            
                            <Button 
                                variant="outline" 
                                className="w-full sm:w-auto border-2 border-gray-200 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-6 rounded-full text-lg transition-all"
                                onClick={() => openWhatsApp('Hi Xaggment, I want to schedule a free consultation.')}
                            >
                                <MessageSquare className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                                Request a Quote
                            </Button>

                            <Button 
                                variant="ghost" 
                                className="w-full sm:w-auto hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-8 py-6 rounded-full text-lg font-semibold transition-all group"
                                onClick={() => openWhatsApp('Hi Xaggment, I would like to see some of your case studies.')}
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
