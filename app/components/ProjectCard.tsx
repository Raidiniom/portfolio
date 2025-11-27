'use client';

import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
}

export default function ProjectCard({ title, description, href, image }: CardProps) {
    return (
        <Link href={href}>
            <div className="w-full h-auto bg-[var(--noel-silver)] border border-[var(--noel-darksteel)] 
            shadow-[12px_17px_51px_var(--noel-shadow-dark)] backdrop-blur-sm rounded-[12px] flex flex-col 
            overflow-hidden cursor-pointer select-none transition-transform duration-500 
            hover:border-[var(--noel-black)] hover:scale-105 active:scale-95 active:rotate-[1.7deg]">
                
                {image && (
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-40 object-cover"
                    />
                )}

                <div className="p-4 flex flex-col items-center text-center flex-1">
                    <h1 className="font-bold text-lg text-[var(--noel-teal)]">{title}</h1>
                    <p className="text-sm text-[var(--noel-darksteel)] mt-2">{description}</p>
                </div>
            </div>
        </Link>
    )
}
