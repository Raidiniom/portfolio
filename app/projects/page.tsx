'use client';

import Projcard, { ProjSkeleton } from "../components/Projcard";
import { project_details } from "./data/data";

export default function Projects() {
    return (
        <>
            {/* Page Header */}
            <div className="text-center pt-10 pb-4 px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-noel-teal mb-3">Projects</h1>
                <p className="text-foreground/70 text-lg max-w-xl mx-auto">
                    A collection of things I've built, explored, and learned from.
                </p>
            </div>

            {project_details.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center py-24 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-noel-teal/10 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-noel-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2">No projects yet</h2>
                    <p className="text-foreground/60 max-w-sm">Projects will appear here once they're added. Check back soon!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {project_details.map((proj, index) => (
                        <Projcard
                            key={index}
                            title={proj.title}
                            description={proj.description}
                            screenshot={proj.screenshot}
                            link={proj.link}
                        />
                    ))}
                </div>
            )}
        </>
    );
}