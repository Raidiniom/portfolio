'use client';

import CertCard from "../components/CertCard";
import { certificate_details } from "./data/data";

export default function Certificates() {
    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-12">

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--noel-teal)] mb-10 text-center">
                Certificates
            </h1>

            <div className="grid gap-8 w-full max-w-6xl grid-cols-[repeat(auto-fit,minmax(500px,1fr))]">
                {certificate_details.map((cert, index) => (
                    <CertCard 
                        key={index}
                        title={cert.title}
                        image={cert.image}
                    />
                ))}
            </div>
            
        </div>
    )
}