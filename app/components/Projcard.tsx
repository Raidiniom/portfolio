'use client';

import { useState } from 'react';

interface Projprop {
    title: string,
    description: string,
    screenshot: string,
    link: string,
}

function ProjSkeleton() {
    return (
        <div className="border border-border rounded-lg overflow-hidden bg-noel-silver animate-pulse">
            <div className="w-full h-56 bg-noel-steel/30"></div>
            <div className="p-5 text-center">
                <div className="h-6 bg-noel-steel/30 rounded w-2/3 mx-auto mb-3"></div>
                <div className="h-4 bg-noel-steel/20 rounded w-full mb-2"></div>
                <div className="h-4 bg-noel-steel/20 rounded w-4/5 mx-auto mb-5"></div>
                <div className="h-9 bg-noel-steel/20 rounded-lg w-36 mx-auto"></div>
            </div>
        </div>
    );
}

export default function Projcard({ title, description, screenshot, link }: Projprop) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className="border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-noel-teal/40 transition-all duration-300 bg-noel-silver group">
            {/* Screenshot with hover overlay */}
            <div className="relative w-full h-56 overflow-hidden">
                {!imgLoaded && (
                    <div className="absolute inset-0 bg-noel-steel/30 animate-pulse"></div>
                )}
                <img
                    src={screenshot}
                    alt={`${title} project`}
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Teal gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-noel-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium line-clamp-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {description}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-noel-teal transition-colors">{title}</h2>

                <p className="text-foreground/70 mb-5 line-clamp-2 leading-relaxed text-sm">
                    {description}
                </p>

                {/* Repository Link — fixed: uses text-foreground so visible in both modes */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-foreground border border-border rounded-lg hover:bg-noel-teal hover:text-noel-black hover:border-noel-teal transition-all duration-200 font-medium text-sm"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Repository
                </a>
            </div>
        </div>
    );
}

export { ProjSkeleton };