import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Menu, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Prebuilt', href: 'services' },
    { name: 'Customized', href: 'custom-development' },
    { name: 'Pricing', href: 'website-development' },
    { name: 'About Us', href: 'team' },
    { name: 'Contact Us', href: 'contact' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (href: string, isRoute?: boolean) => {
        setIsOpen(false);
        if (isRoute) {
            navigate(href);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (location.pathname !== '/') {
                // Navigate home first, then wait for DOM to render before scrolling
                navigate('/');
                // Poll until the section exists, up to 2s
                let attempts = 0;
                const poll = setInterval(() => {
                    const el = document.getElementById(href);
                    if (el) {
                        clearInterval(poll);
                        const offset = 100;
                        const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: pos, behavior: 'smooth' });
                    }
                    if (++attempts > 20) clearInterval(poll);
                }, 100);
            } else {
                scrollToSection(href);
            }
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                    "flex items-center gap-4 md:gap-12 px-6 md:px-10 py-2.5 md:py-3 sketch-pill-animated bg-white shadow-sm transition-all duration-500",
                    isScrolled ? "py-2 px-6 md:px-8 shadow-md border-slate-200" : ""
                )}
            >
                {/* Desktop Left Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    <button
                        onClick={() => handleNavigation('services')}
                        className="text-xs lg:text-sm font-bold text-slate-700 hover:text-black transition-colors"
                    >
                        Prebuilt
                    </button>
                    <button
                        onClick={() => handleNavigation('custom-development')}
                        className="text-xs lg:text-sm font-bold text-slate-700 hover:text-black transition-colors"
                    >
                        Customized
                    </button>
                    <button
                        onClick={() => handleNavigation('website-development')}
                        className="text-xs lg:text-sm font-bold text-slate-700 hover:text-black transition-colors"
                    >
                        Pricing
                    </button>
                </div>

                {/* Logo (Centered) */}
                <div
                    className="flex items-center gap-2 md:gap-3 cursor-pointer"
                    onClick={() => handleNavigation('/', true)}
                >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0f172a] rounded-lg flex items-center justify-center text-white font-black text-[10px] md:text-xs leading-none">
                        X
                    </div>
                    <span className="text-sm md:text-xl font-bold tracking-tighter uppercase text-[#0f172a]">XAGGMENT</span>
                </div>

                {/* Desktop Right Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    <button
                        onClick={() => handleNavigation('team')}
                        className="text-xs lg:text-sm font-bold text-slate-700 hover:text-black transition-colors whitespace-nowrap"
                    >
                        About Us
                    </button>
                    <button
                        onClick={() => handleNavigation('contact')}
                        className="text-xs lg:text-sm font-bold text-slate-700 hover:text-black transition-colors whitespace-nowrap"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="p-1 hover:bg-slate-50 rounded-full transition-colors">
                                <Menu className="w-5 h-5 text-slate-700" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[280px] bg-white border-none rounded-r-3xl p-8">
                            <SheetHeader className="mb-8">
                                <SheetTitle className="text-left flex items-center gap-2">
                                    <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center text-white font-black text-sm">
                                        X
                                    </div>
                                    <span className="text-xl font-black italic tracking-tighter uppercase text-[#0f172a]">XAGGMENT</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href, item.isRoute)}
                                        className="text-lg font-bold text-slate-500 hover:text-[#0f172a] transition-all text-left uppercase tracking-tight"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </header>
    );
};

export default Header;
