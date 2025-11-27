'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const path = usePathname();
    const pageLinks = [
        {href: "/", label: "Home"},
        {href: "/projects", label: "My Projects"},
        {href: "/certificates", label: "Certificates"},
    ];

    return (
        <header
            className="
            w-full sticky top-0 z-40
            backdrop-blur-xl
            bg-gradient-to-r from-[#f3f6f8]/80 to-[#e1e7ea]/70
            dark:from-[#14171a]/80 dark:to-[#0a0d0f]/60
            border-b border-[var(--border)]
            shadow-[0_2px_6px_rgba(0,0,0,0.08)]
            "
            >
            <div className="mx-auto flex justify-center items-center gap-8 py-6 px-6">
                {pageLinks.map((p) => {
                    const active =
                    path === p.href ||
                    (p.href !== '/' && path?.startsWith(p.href));

                    return (
                    <Link
                        key={p.href}
                        href={p.href}
                        className={`
                        text-lg md:text-xl px-3 py-1.5 rounded-lg font-medium
                        transition-all duration-200

                        ${
                            active
                            ? `
                                text-[var(--accent)]
                                bg-[var(--accent-light)]/30
                                shadow-[0_0_6px_rgba(91,164,159,0.4)]
                            `
                            : `
                                text-[var(--foreground)]
                                hover:text-[var(--accent)]
                                hover:bg-[var(--accent-light)]/10
                            `
                        }
                        `}
                    >
                        {p.label}
                    </Link>
                    );
                })}
            </div>
        </header>
    )
}