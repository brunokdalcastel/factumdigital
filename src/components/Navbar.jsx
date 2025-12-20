import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { clsx } from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'Operação', href: '#process' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed w-full z-50 transition-all duration-300',
                scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2 group">
                    <ShieldCheck className="w-8 h-8 text-gold hover:text-white transition-colors duration-300" />
                    <span className="text-2xl font-bold text-text-light tracking-wider">
                        FACTUM <span className="text-gold">DIGITAL</span>
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-text-dim hover:text-secondary transition-colors duration-300 text-sm font-medium uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-text-light hover:text-secondary transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-primary-light border-t border-white/10 shadow-xl"
                >
                    <div className="flex flex-col py-4 px-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-text-dim hover:text-secondary transition-colors block py-2 text-sm font-medium uppercase tracking-widest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
