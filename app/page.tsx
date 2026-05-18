'use client';

export default function Home() {
    const programming_lang = [
        'C',
        'Java',
        'Python',
        'Typescript',
        'Javascript',
        'SQL',
    ]

    const skilltech_list = [
        'Linux',
        'Network Infrastructure',
        'Virtual Machines',
        'GNS3',
        'VMware',
        'Digital Forensics',
    ]

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
                            <div className="w-68 h-68 rounded-full bg-gradient-to-br from-noel-teal to-noel-mint mb-6 flex items-center justify-center overflow-hidden">
                                <img 
                                    src="/voltaire_ratilla.jpg" 
                                    alt="Voltaire Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            <h2 className="text-3xl font-bold text-accent-light mb-4">Voltaire Ratilla</h2>
                            
                            <div className="text-left w-full">
                                <h3 className="text-xl font-semibold text-noel-teal mb-3">Introduction:</h3>
                                <p className="text-foreground/90 leading-relaxed">
                                    Great Tidings! 
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
                            {programming_lang.map((data, index) => (
                                <span key={index} className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                    {data}
                                </span>
                            ))}
                        </div>

                        {/* Additional Skills Section */}
                        <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                            Skills & Technologies
                        </h2>
                        
                        <div className="flex flex-wrap gap-3">
                            <div className="flex flex-wrap gap-3 mb-8">
                                {skilltech_list.map((data, index) => (
                                    <span key={index} className="px-4 py-2 bg-noel-teal/20 text-noel-teal rounded-full font-medium">
                                        {data}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}