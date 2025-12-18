'use client';

export default function Home() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center px-4 py-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-noel-teal mb-10 text-center">
                    Welcome to My Portfolio
                </h1>

                {/* Profile Picture and Details container */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Profile Picture container */}
                    <div className="bg-noel-silver border border-border rounded-2xl p-8 shadow-lg">
                        <div className="flex flex-col items-center">
                            {/* Profile Image */}
                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-noel-teal to-noel-mint mb-6 flex items-center justify-center overflow-hidden">
                                <img 
                                    src="/profile.jpg" 
                                    alt="Voltaire Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <h2 className="text-3xl font-bold text-foreground mb-4">Voltaire</h2>
                            
                            <div className="text-left w-full">
                                <h3 className="text-xl font-semibold text-noel-teal mb-3">Introduction:</h3>
                                <p className="text-foreground/90 leading-relaxed">
                                    Hello! I'm Voltaire, a passionate developer who loves exploring technologies, 
                                    both old and new! I enjoy creating elegant solutions to complex problems 
                                    and continuously learning in the ever-evolving tech landscape.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Details container */}
                    <div className="bg-noel-silver border border-border rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                            Programming Languages
                        </h2>
                        
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                C
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Java
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Python
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                TypeScript
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                JavaScript
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                SQL
                            </span>
                        </div>

                        {/* Additional Skills Section */}
                        <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                            Skills & Technologies
                        </h2>
                        
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Next.js
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                React
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Tailwind CSS
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Node.js
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Git
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                REST APIs
                            </span>
                            <span className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                Linux
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}