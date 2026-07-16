import React from 'react';
import { motion } from 'motion/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Which website plan is best for my business?",
        answer: "If you need a simple online presence, the Basic plan is ideal. If you want to update content yourself, choose the Standard (CMS) plan. For complex features like user logins, dashboards, or custom databases, the Dynamic Website plan is required."
    },
    {
        question: "Can I upgrade my website later?",
        answer: "Absolutely! Our scalable architecture allows you to start with a Basic or CMS website and upgrade to a Dynamic Website with custom features as your business grows."
    },
    {
        question: "Is domain included?",
        answer: "Domain registration is not included in our base development pricing as costs vary significantly based on the domain extension (.com, .in, etc.). However, we can assist you in purchasing and configuring it."
    },
    {
        question: "Is hosting included?",
        answer: "Hosting is generally separate unless specified in a specific combo plan. We offer reliable hosting solutions or can deploy your website on your preferred server."
    },
    {
        question: "Are advertisements included?",
        answer: "Our Starter Marketing Plan does not include the advertisement budget. The Professional Marketing Plan does include an advertisement budget, which we manage to maximize your ROI."
    },
    {
        question: "Can I request custom features?",
        answer: "Yes. If our standard plans don't cover your needs, please check our Custom Development section to request a personalized quotation for custom web applications, APIs, or specialized software."
    },
    {
        question: "Do you provide monthly maintenance?",
        answer: "Yes, we offer comprehensive monthly maintenance plans ranging from basic updates and bug fixes to full server monitoring and dedicated technical support."
    },
    {
        question: "How long does development take?",
        answer: "A basic website typically takes 1-2 weeks. CMS websites take 2-4 weeks, and dynamic websites or custom applications can take 4-12 weeks depending on the complexity of the requirements."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers (NEFT/RTGS/IMPS), UPI, and major credit/debit cards. Development projects usually follow a milestone-based payment structure."
    }
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-white dark:bg-gray-900" id="faq">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
                    >
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Got questions? We've got answers. If you have some other questions, feel free to contact us.
                    </motion.p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem 
                                    key={index} 
                                    value={`item-${index}`}
                                    className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-lg px-6"
                                >
                                    <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-5">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-5">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
