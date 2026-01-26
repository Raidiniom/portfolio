'use client';

import Link from "next/link";

export default function Header() {
    const other_pages = [
        {name: "Projects", link: '/projects'},
        {name: "Certificates", link: '/certificates'},
        {name: "Contact Me", link: '/contact'},
    ]   

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
                <div className="flex h-16 items-center justify-between px-6">
                    <Link 
                        href="/" 
                        className="text-2xl text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                    >
                        Voltaire Ratilla
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    <div className="flex items-center space-x-8">
                        {other_pages.map((data, index) => (
                            <Link 
                                key={index}
                                href={data.link} 
                                className="text-xl text-foreground/90 hover:text-noel-teal transition-colors font-medium relative group"
                            >
                                {data.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-noel-teal group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}