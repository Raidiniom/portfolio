'use client';

import Certcard from "../components/Certcard";
import { certificate_details } from "./data/data";

export default function Certificates() {
    return (
        <>
            {/* Page Title Header */}
            <div className="text-center pt-10 pb-4 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-noel-teal mb-3">Certificates</h1>
                <p className="text-black text-lg max-w-xl mx-auto">
                    Credentials and achievements I've earned along the way.
                </p>
            </div>

            {certificate_details.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center py-24 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-noel-teal/10 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-noel-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">No certificates yet</h2>
                    <p className="text-foreground/60 max-w-sm">Certificates will appear here once they're added. Check back soon!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {certificate_details.map((cert, index) => (
                        <Certcard
                            key={index}
                            title={cert.title}
                            issued_by={cert.issued_by}
                            date_issued={cert.date_issued}
                            image={cert.image}
                        />
                    ))}
                </div>
            )}
        </>
    );
}