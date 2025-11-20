'use client';

import Link from "next/link";

interface CertCardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
}

export default function CertCard({ title, description, href, image }: CertCardProps) {
    return (
        <Link href={href}>
            {/*  */}
        </Link>
    )
}