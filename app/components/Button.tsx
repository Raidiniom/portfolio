'use client';

export default function Button() {
    return (
        <button className="
        px-4 py-2 rounded-lg font-medium
        bg-[var(--noel-teal)] text-white
        shadow-[0_2px_6px_var(--noel-shadow-light)]
        hover:bg-[var(--noel-teal-bright)]
        transition-all duration-200
        ">
            Button
        </button>
    )
}