'use client';

interface ButtonProps {
    label: string;
    onClick? : () => void;
}

export default function Button({label, onClick}: ButtonProps) {
    return (
        <button className="
        px-4 py-2 rounded-lg font-medium
        bg-[var(--noel-teal)] text-white
        shadow-[0_2px_6px_var(--noel-shadow-light)]
        hover:bg-[var(--noel-teal-bright)]
        transition-all duration-200
        "

        onClick={onClick}
        >
            {label}
        </button>
    )
}