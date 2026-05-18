'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const other_pages = [
        { name: "Projects", link: '/projects' },
        { name: "Certificates", link: '/certificates' },
        { name: "Contact Me", link: '/contact' },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="flex h-16 items-center justify-between px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                    >
                        Voltaire Ratilla
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-noel-teal transition-all duration-300 ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {other_pages.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                className="text-xl text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                            >
                                {data.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-noel-teal transition-all duration-300 ${pathname === data.link ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 border-t border-border' : 'max-h-0'}`}>
                    <nav className="flex flex-col px-6 py-4 gap-4 bg-background/95">
                        {other_pages.map((data, index) => (
                            <Link
                                key={index}
                                href={data.link}
                                onClick={() => setMenuOpen(false)}
                                className={`text-lg font-medium transition-colors py-1 border-b border-border/50 ${pathname === data.link ? 'text-noel-teal' : 'text-foreground/80 hover:text-noel-teal'}`}
                            >
                                {data.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}