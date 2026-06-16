'use client';

import { useEffect, useState } from 'react';

// Skeleton loader component
function SkeletonBadge() {
    return <span className="px-4 py-2 bg-noel-steel/30 rounded-full animate-pulse w-20 h-8 inline-block"></span>;
}

// Typewriter hook
function useTypewriter(texts: string[], speed = 80, pause = 1800) {
    const [displayed, setDisplayed] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex(c => c + 1), speed);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTextIndex(i => (i + 1) % texts.length);
        }

        setDisplayed(current.slice(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, textIndex, texts, speed, pause]);

    return displayed;
}

export default function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Slight delay so staggered fade-in is visible
        const t = setTimeout(() => setLoaded(true), 50);
        return () => clearTimeout(t);
    }, []);

    const typewriterPhrases = [
        'IT Student',
        'Network Enthusiast',
        'Digital Forensics Learner',
        'Open to Opportunities',
    ];

    const typewriterText = useTypewriter(typewriterPhrases);

    const programming_lang = [
        { name: 'C', level: 'Proficient' },
        { name: 'Java', level: 'Proficient' },
        { name: 'Python', level: 'Familiar' },
        { name: 'TypeScript', level: 'Familiar' },
        { name: 'JavaScript', level: 'Familiar' },
        { name: 'Godot Script', level: 'Familiar' },
        { name: 'SQL', level: 'Proficient' },
    ];

    const skilltech_list = [
        { name: 'Linux', category: 'OS' },
        { name: 'Network Infrastructure', category: 'Networking' },
        { name: 'Virtual Machines', category: 'Virtualization' },
        { name: 'GNS3', category: 'Networking' },
        { name: 'VMware', category: 'Virtualization' },
        { name: 'Digital Forensics', category: 'Security' },
    ];

    const proficient = programming_lang.filter(l => l.level === 'Proficient');
    const familiar = programming_lang.filter(l => l.level === 'Familiar');

    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-12">
            {/* Hero heading */}
            <div className={`text-center mb-10 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h1 className="text-4xl sm:text-5xl font-bold text-noel-teal mb-3">
                    Welcome to My Portfolio
                </h1>
                {/* Typewriter subtitle */}
                <p className="text-xl text-foreground/70 font-mono min-h-[1.75rem]">
                    {typewriterText}
                    <span className="inline-block w-0.5 h-5 bg-noel-teal ml-0.5 animate-pulse align-middle"></span>
                </p>
            </div>

            {/* Profile + Skills grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Profile Card */}
                <div
                    className={`bg-noel-silver border border-border rounded-2xl p-8 shadow-lg transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    <div className="flex flex-col items-center">
                        {/* Avatar */}
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-noel-teal to-noel-mint mb-6 flex items-center justify-center overflow-hidden ring-4 ring-noel-teal/30 shadow-lg">
                            <img
                                src="/voltaire_ratilla.jpg"
                                alt="Voltaire Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h2 className="text-3xl font-bold text-accent-light mb-1">Voltaire Ratilla</h2>
                        <p className="text-noel-teal text-sm font-medium mb-5 uppercase tracking-widest">IT Student · Cebu, Philippines</p>

                        {/* Open to work badge */}
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-noel-success/15 text-noel-success text-sm font-medium mb-6 border border-noel-success/30">
                            <span className="w-2 h-2 rounded-full bg-noel-success animate-pulse"></span>
                            Open to Opportunities
                        </span>

                        <div className="text-left w-full">
                            <h3 className="text-xl font-semibold text-noel-teal mb-3">Introduction</h3>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                Hey there! I'm Voltaire, an IT student with a soft spot for networking, cybersecurity, and building things that actually work. I love getting hands-on — whether that's a Linux setup, a network simulation, or just poking around to see how systems tick.
                            </p>
                            <p className="text-foreground/80 leading-relaxed">
                                Currently brushing up on Linux, Cisco networking, and system administration because the fundamentals always hit different. Looking for a place where I can bring my skills, learn from real challenges, and maybe break a few things responsibly along the way.
                            </p>
                        </div>

                        {/* Resume download */}
                        {/* <a
                            href="/resume.pdf"
                            download
                            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-noel-teal text-noel-black font-semibold rounded-xl hover:bg-noel-teal-bright transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download CV / Resume
                        </a> */}
                    </div>
                </div>

                {/* Skills Card */}
                <div
                    className={`bg-noel-silver border border-border rounded-2xl p-8 shadow-lg transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                >
                    {/* Programming Languages */}
                    <h2 className="text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                        Programming Languages
                    </h2>

                    <div className="mb-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-noel-darksteel mb-2">Proficient</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {loaded
                                ? proficient.map((lang, i) => (
                                    <span key={i} className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium text-sm border border-noel-teal/20">
                                        {lang.name}
                                    </span>
                                ))
                                : [1, 2, 3, 4].map(i => <SkeletonBadge key={i} />)
                            }
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-noel-darksteel mb-2">Familiar</p>
                        <div className="flex flex-wrap gap-2">
                            {loaded
                                ? familiar.map((lang, i) => (
                                    <span key={i} className="px-4 py-2 bg-noel-steel/20 text-foreground/70 rounded-full font-medium text-sm border border-border">
                                        {lang.name}
                                    </span>
                                ))
                                : [1, 2].map(i => <SkeletonBadge key={i} />)
                            }
                        </div>
                    </div>

                    {/* Skills & Technologies */}
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-5 pb-3 border-b border-border">
                        Skills & Technologies
                    </h2>

                    <div className="grid grid-cols-1 gap-2">
                        {loaded
                            ? skilltech_list.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between px-4 py-2.5 bg-noel-teal/10 rounded-lg border border-noel-teal/10 hover:border-noel-teal/30 transition-colors">
                                    <span className="text-foreground/90 font-medium text-sm">{skill.name}</span>
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-noel-teal/20 text-noel-teal font-medium">{skill.category}</span>
                                </div>
                            ))
                            : [1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="h-10 bg-noel-steel/20 rounded-lg animate-pulse"></div>
                            ))
                        }
                    </div>

                    {/* Currently Learning */}
                    <div className="mt-6 p-4 rounded-xl bg-noel-warning/10 border border-noel-warning/25">
                        <p className="text-xs font-semibold uppercase tracking-widest text-noel-warning mb-1">Currently Learning</p>
                        <p className="text-foreground/80 text-sm">Reviewing Linux OS · Cisco Networking Infrastructure · System Administration</p>
                    </div>
                </div>
            </div>
        </div>
    );
}