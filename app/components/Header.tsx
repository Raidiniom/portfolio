'use client';

import Link from "next/link";

export default function Header() {

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center space-x-8">
                        <Link 
                            href="/" 
                            className="text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                        >
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        
                        <Link 
                            href="/projects" 
                            className="text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        
                        <Link 
                            href="/certificates" 
                            className="text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                        >
                            Certificates
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                        </Link>

                        <Link 
                            href="/contact" 
                            className="text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                        >
                            Contact Me
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}