'use client';

import ProjectCard from "../components/ProjectCard";
import { project_details } from "./data/data";

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-12">
  
            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--noel-teal)] mb-10 text-center">
                My Projects
            </h1>

            {/* Project Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 w-full max-w-6xl">
                {project_details.map((proj, index) => (
                    <ProjectCard
                    key={index}
                    title={proj.title}
                    description={proj.description}
                    href={proj.href ?? "#"}
                    image={proj.image ?? ""}
                    />
                ))}
            </div>
            
        </div>
    )
}