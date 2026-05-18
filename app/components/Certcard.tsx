'use client';

import { useState, useEffect } from 'react';

interface Certprop {
    title: string,
    issued_by: string,
    date_issued: string,
    image: string,
    pdf?: string,
}

function CertSkeleton() {
    return (
        <div className="border border-border rounded-lg overflow-hidden animate-pulse">
            <div className="p-5">
                <div className="h-5 bg-noel-steel/30 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-noel-steel/20 rounded w-1/3 mb-1"></div>
                <div className="h-4 bg-noel-steel/20 rounded w-1/2 mb-3"></div>
                <div className="h-3 bg-noel-steel/20 rounded w-1/4 mb-1"></div>
                <div className="h-4 bg-noel-steel/20 rounded w-1/3"></div>
            </div>
            <div className="border-t border-border">
                <div className="w-full h-48 bg-noel-steel/20"></div>
            </div>
        </div>
    );
}

export default function Certcard({ title, issued_by, date_issued, image, pdf }: Certprop) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    // Escape key closes modal
    useEffect(() => {
        if (!isModalOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsModalOpen(false);
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isModalOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isModalOpen]);

    return (
        <>
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-md hover:border-noel-teal/40 transition-all duration-300 bg-noel-silver group">
                <div className="p-5">
                    <h2 className="text-lg font-semibold text-foreground mb-4 group-hover:text-noel-teal transition-colors">{title}</h2>

                    <div className="mb-3">
                        <div className="text-noel-teal text-xs font-semibold uppercase tracking-widest mb-1">Issued by</div>
                        <div className="text-foreground/80 text-sm">{issued_by}</div>
                    </div>

                    <div>
                        <div className="text-noel-teal text-xs font-semibold uppercase tracking-widest mb-1">Date Issued</div>
                        <div className="text-foreground/80 text-sm">{date_issued}</div>
                    </div>
                </div>

                <div className="border-t border-border relative">
                    {/* Skeleton shown until image loads */}
                    {!imgLoaded && (
                        <div className="w-full h-48 bg-noel-steel/20 animate-pulse absolute inset-0"></div>
                    )}
                    <div
                        className="w-full h-48 cursor-pointer relative overflow-hidden"
                        onClick={() => setIsModalOpen(true)}
                        title="Click to enlarge"
                    >
                        <img
                            src={image}
                            alt={`${title} certificate`}
                            onLoad={() => setImgLoaded(true)}
                            className={`w-full h-full object-contain bg-noel-silver hover:opacity-90 transition-all duration-300 hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                        {/* Expand icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                            <div className="bg-noel-teal/90 rounded-full p-2">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-screen-xl max-h-screen animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image}
                            alt={`${title} certificate`}
                            className="max-w-5xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />

                        {/* Close button */}
                        <button
                            className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Caption bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 rounded-b-lg px-5 py-3 backdrop-blur-sm">
                            <p className="text-white font-semibold text-sm">{title}</p>
                            <p className="text-white/70 text-xs">{issued_by} · {date_issued}</p>
                        </div>
                    </div>

                    {/* ESC hint */}
                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
                        Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/50 font-mono text-xs">Esc</kbd> to close
                    </p>
                </div>
            )}
        </>
    );
}

export { CertSkeleton };