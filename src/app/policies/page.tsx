export default function Page() {
    return (
        <div className="policies min-h-screen bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Last updated: August 2, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                About This Website
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                This is a personal portfolio website showcasing my projects, skills, and professional experience. 
                                It&apos;s designed to be simple and respects your privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                What Information We Collect
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                                This website collects minimal information:
                            </p>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 ml-4">
                                <li>No personal information is stored or collected directly</li>
                                <li>No cookies are used for tracking</li>
                                <li>GitHub Stats are displayed using public GitHub API data</li>
                                <li>Basic web server logs may be kept by the hosting provider</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                External Links
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                This website links to external platforms like GitHub, LinkedIn, and email. 
                                These platforms have their own privacy policies that govern how they handle your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                Contact
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                If you have any questions about this privacy policy, feel free to contact me at{" "}
                                <a 
                                    href="mailto:christophe.chhor.dev@gmail.com" 
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    christophe.chhor.dev@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}