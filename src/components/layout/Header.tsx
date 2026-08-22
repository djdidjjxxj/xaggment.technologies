import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, ArrowRight } from 'lucide-react';
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
        <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                    "flex items-center justify-between md:justify-start gap-4 md:gap-8 px-5 md:px-8 py-2.5 md:py-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md transition-all duration-300 max-w-5xl w-full",
                    isScrolled ? "py-2 px-5 md:px-7 shadow-lg border-slate-300 bg-white/95" : ""
                )}
            >
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={goHome}
                >
                    <div className="w-7 h-7 bg-[#0a0f1e] rounded-lg flex items-center justify-center text-white font-black text-xs group-hover:scale-105 transition-transform">
                        X
                    </div>
                    <span className="text-base md:text-lg font-bold tracking-tighter uppercase text-[#0a0f1e]">XAGGMENT</span>
                </div>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto" aria-label="Main navigation">
                    {mainNavItems.map((item) => {
                        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={cn(
                                    "text-xs lg:text-sm font-bold transition-colors hover:text-[#0a0f1e]",
                                    isActive ? "text-[#0a0f1e] border-b-2 border-[#0a0f1e] pb-0.5" : "text-slate-600"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right CTA Button */}
                <div className="hidden md:flex items-center">
                    <Link
                        to="/contact"
                        id="nav-start-project-cta"
                        className="bg-[#0a0f1e] hover:bg-black text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md flex items-center gap-1.5"
                    >
                        START A PROJECT
                        <ArrowRight size={13} />
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <Link
                        to="/contact"
                        className="bg-[#0a0f1e] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-full"
                    >
                        START
                    </Link>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors" aria-label="Open menu">
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

                                <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
                                    {mainNavItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-bold text-slate-700 hover:text-[#0a0f1e] transition-colors text-left uppercase tracking-tight"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-[#0a0f1e] text-white font-bold text-center py-3.5 rounded-full text-sm block"
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
