'use client';

import { useState } from 'react';

interface Certprop {
    title: string,
    issued_by: string,
    date_issued: string,
    image: string,
    pdf?: string,
}

export default function Certcard({ title, issued_by, date_issued, image, pdf }: Certprop) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5">
                    <h2 className="text-lg font-semibold text-foreground mb-4">{title}</h2>
                    
                    <div className="mb-3">
                        <div className="text-noel-teal text-sm font-medium mb-1">Issued by:</div>
                        <div className="text-foreground/80">{issued_by}</div>
                    </div>

                    <div>
                        <div className="text-noel-teal text-sm font-medium mb-1">Date Issued:</div>
                        <div className="text-foreground/80">{date_issued}</div>
                    </div>
                </div>
                
                <div className="border-t border-border">
                    <div 
                        className="w-full h-65 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img 
                            src={image} 
                            alt={`${title} certificate`}
                            className="w-full h-full object-contain bg-noel-silver hover:opacity-90 transition-opacity"
                        />
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div 
                        className="relative max-w-screen-xl max-h-screen"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={image} 
                            alt={`${title} certificate`}
                            className="max-w-5xl max-h-[95vh] object-contain rounded-lg"
                        />
                        
                        <button 
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}