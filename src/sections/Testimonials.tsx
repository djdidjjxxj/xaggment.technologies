import React from 'react';
import { motion } from 'motion/react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "CEO, TechFlow",
        content: "Xaggment transformed our vision into a reality. Their attention to detail and innovative approach is unmatched.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
        name: "Sarah Chen",
        role: "Founder, GreenScale",
        content: "The dynamic blog and roadmap features they implemented have significantly boosted our user engagement. Highly recommend!",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Michael Smith",
        role: "CTO, CloudNine",
        content: "Fast, reliable, and aesthetically brilliant. Working with Xaggment was the best decision for our startup's digital presence.",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
        name: "Emily Davis",
        role: "Marketing Director, Bloom",
        content: "Their creative solutions and technical expertise helped us scale our platform effortlessly. Exceptional service!",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                        Testimonials
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold mt-4 text-[#0f172a] tracking-tight leading-[1.2]"
                    >
                        What our clients say
                    </motion.h2>
                </div>

                <div className="relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="h-full"
                                    >
                                        <Card className="h-full border-none shadow-none bg-slate-50 rounded-[2.5rem] p-10 group hover:bg-slate-100 transition-all duration-500">
                                            <CardContent className="p-0 flex flex-col h-full">
                                                <div className="mb-6">
                                                    <Quote className="w-10 h-10 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
                                                </div>

                                                <p className="text-xl font-bold text-slate-600 mb-8 leading-relaxed flex-1 italic">
                                                    "{testimonial.content}"
                                                </p>

                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-heading font-bold text-[#0f172a] leading-none mb-1">{testimonial.name}</h4>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1 mt-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-slate-100 hover:bg-slate-50 transition-colors" />
                            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-slate-100 hover:bg-slate-50 transition-colors" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
