'use client';

import Projcard from "../components/Projcard";
import { project_details } from "./data/data";

export default function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {project_details.map((proj, index) => (
                    <Projcard key={index} 
                        title={proj.title} 
                            description={proj.description}
                            screenshot={proj.screenshot}
                            link={proj.link} />
                ))}
            </div>
        </>
    )
}