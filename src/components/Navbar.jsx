import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-[#1a1a2e]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#hero"
                    className="text-2xl font-bold bg-linear-to-r from-[#6c63ff] to-[#a78bfa] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                    onClick={closeMenu}
                >
                    MASUM
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[#c4c4d4] hover:text-white transition-colors duration-300 text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-[#c4c4d4] hover:text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-4 space-y-3 bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-[#1a1a2e]">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="block text-[#c4c4d4] hover:text-white transition-colors duration-300 py-2 text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


