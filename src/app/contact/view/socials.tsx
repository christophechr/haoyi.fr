import { Social } from './card/socialCard';
import Image from 'next/image'

export function Socials() {
    return (
        <div className="contact min-h-[100dvh] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <section id="contact" className="w-full py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Let&apos;s Connect
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology.
                            </p>
                        </div>
                    </div>

                    {/* Social Links Grid */}
                    <div className="flex justify-center items-center mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl">
                            <div className="group">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-slate-200 dark:border-slate-700">
                                    <Social 
                                        href="https://github.com/christophechr" 
                                        imageUrl="/icons/github.png" 
                                        altName="GitHub Icon" 
                                        width={64} 
                                        height={64}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">GitHub</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">View my projects</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-slate-200 dark:border-slate-700">
                                    <Social 
                                        href="https://linkedin.com/in/christophe-chhor" 
                                        imageUrl="/icons/linkedin.png" 
                                        altName="LinkedIn Icon" 
                                        width={64} 
                                        height={64}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">LinkedIn</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Professional network</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-slate-200 dark:border-slate-700">
                                    <Social 
                                        href="mailto:christophe.chhor.dev@gmail.com" 
                                        imageUrl="/icons/mail.png" 
                                        altName="Email Icon" 
                                        width={64} 
                                        height={64}
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="font-semibold text-slate-900 dark:text-slate-100">Email</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Send me a message</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GitHub Stats Section */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                GitHub Activity
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                My most used programming languages
                            </p>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-200 dark:border-slate-700 max-w-2xl w-full">
                            <div className="flex justify-center">
                                <img 
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=christophechr&langs_count=8&theme=omni&layout=compact&border_radius=10" 
                                    alt="GitHub programming languages statistics" 
                                    className="rounded-lg max-w-full h-auto"
                                    width={500} 
                                    height={310} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
