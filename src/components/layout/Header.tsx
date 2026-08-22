import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, ArrowRight, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const mainNavItems = [
    { name: 'Services', path: '/services' },
    { name: 'Work', path: '/work' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goHome = () => {
        setIsOpen(false);
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between md:justify-start gap-4 md:gap-8 px-5 md:px-7 py-2.5 rounded-full bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md transition-all duration-300 max-w-5xl w-full",
                    isScrolled ? "py-2 px-5 md:px-6 shadow-xl border-slate-300/90 bg-white/95" : ""
                )}
            >
                {/* Logo */}
                <div
                    className="flex items-center gap-2.5 cursor-pointer group select-none"
                    onClick={goHome}
                >
                    <div className="w-8 h-8 bg-[#0a0f1e] rounded-xl flex items-center justify-center text-white font-black text-xs group-hover:scale-105 group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                        X
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm md:text-base font-black tracking-tighter uppercase text-[#0a0f1e] leading-none">XAGGMENT</span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 leading-tight">Technologies</span>
                    </div>
                </div>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-1 mx-auto relative bg-slate-100/60 p-1 rounded-full border border-slate-200/50" aria-label="Main navigation">
                    {mainNavItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={cn(
                                    "relative text-xs font-bold px-4 py-1.5 rounded-full transition-colors duration-200 select-none",
                                    isActive ? "text-[#0a0f1e]" : "text-slate-500 hover:text-[#0a0f1e]"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav-pill"
                                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/60 -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Right CTA Button */}
                <div className="hidden md:flex items-center">
                    <Link
                        to="/contact"
                        id="nav-start-project-cta"
                        className="bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-1.5 group"
                    >
                        <span>START A PROJECT</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <Link
                        to="/contact"
                        className="bg-[#0a0f1e] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-full"
                    >
                        START
                    </Link>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors" aria-label="Open menu">
                                <Menu className="w-5 h-5 text-slate-800" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] bg-white border-none p-8 flex flex-col justify-between">
                            <div>
                                <SheetHeader className="mb-8">
                                    <SheetTitle className="text-left flex items-center gap-2">
                                        <div
                                            className="w-7 h-7 bg-[#0a0f1e] rounded-lg flex items-center justify-center text-white font-black text-xs cursor-pointer"
                                            onClick={goHome}
                                        >
                                            X
                                        </div>
                                        <span
                                            className="text-lg font-bold tracking-tighter uppercase text-[#0a0f1e] cursor-pointer"
                                            onClick={goHome}
                                        >
                                            XAGGMENT
                                        </span>
                                    </SheetTitle>
                                </SheetHeader>

                                <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                                    {mainNavItems.map((item, idx) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 + 0.1 }}
                                        >
                                            <Link
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "text-base font-bold transition-colors text-left block py-2 px-3 rounded-xl",
                                                    location.pathname === item.path ? "bg-slate-100 text-[#0a0f1e]" : "text-slate-600 hover:text-[#0a0f1e]"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-[#0a0f1e] hover:bg-blue-600 text-white font-bold text-center py-3.5 rounded-full text-sm block transition-colors"
                                >
                                    START A PROJECT
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
