import React from 'react';
import { motion } from 'motion/react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
        question: 'Is domain and hosting included in website packages?',
        answer: 'Yes! All standard website development plans include domain registration assistance, high-speed hosting setup, and SSL security setup for the first year.',
    },
    {
        question: 'How long does a website or web app project take?',
        answer: 'Standard website projects typically take 1 to 2 weeks. Custom web apps and complex SaaS projects take between 3 to 6 weeks depending on requirements and feedback cycles.',
    },
    {
        question: 'Can I request custom features beyond predefined plans?',
        answer: 'Absolutely. We offer tailored development options designed specifically around your exact business requirements, database structures, and third-party API integrations.',
    },
    {
        question: 'Do you offer ongoing maintenance after launch?',
        answer: 'Yes, we provide monthly maintenance plans covering security updates, bug fixes, performance monitoring, content updates, and server maintenance.',
    },
    {
        question: 'How does the payment structure work?',
        answer: 'We typically operate on a milestone basis (e.g., 50% upfront to commence discovery & design, and 50% upon final testing and deployment handover).',
    },
    {
        question: 'What AI automation solutions can you implement?',
        answer: 'We build custom AI chatbots, automated lead qualification systems, automated customer service bots, document processing tools, and workflow integrations between tools like Slack, WhatsApp, CRMs, and email.',
    },
    {
        question: 'Are digital marketing advertisements included in plan pricing?',
        answer: 'Our digital marketing plan fees cover strategy, management, creative design, copy, and optimization. Ad spend itself (paid directly to Meta or Google) is separate and budgeted according to your growth targets.',
    },
    {
        question: 'How do we get started on a project?',
        answer: 'Simply click "Start a Project" or contact us on WhatsApp. We\'ll schedule a brief discovery discussion to understand your needs, outline a scope, and provide a clear quote.',
    },
];

const FAQSection: React.FC = () => {
    return (
        <section id="faq" className="py-20 md:py-28 px-6 bg-slate-50 border-t border-slate-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="eyebrow-label mb-3"
                    >
                        FAQ
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-title mb-4"
                    >
                        Frequently asked questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-text max-w-lg mx-auto"
                    >
                        Everything you need to know about working with Xaggment.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
                >
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-none">
                                <AccordionTrigger className="text-left text-base md:text-lg font-bold text-[#0a0f1e] py-4 hover:no-underline hover:text-blue-600 transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-500 text-sm md:text-base font-medium leading-relaxed pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
