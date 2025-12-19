'use client';

import Certcard from "../components/Certcard";
import { certificate_details } from "./data/data";

export default function Certificates() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {certificate_details.map((cert, index) => (
                <Certcard key={index} 
                    title={cert.title} 
                    issued_by={cert.issued_by} 
                    date_issued={cert.date_issued}
                    image={cert.image} />
            ))}
        </div>
    )
}