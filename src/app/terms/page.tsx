export default function Page() {
    return (
        <div className="terms min-h-screen bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 py-16 max-w-3xl">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                            Terms of Use
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400">
                            Last updated: August 2, 2025
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                Welcome
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                Welcome to my portfolio website! By visiting this site, you agree to these simple terms. 
                                This is a personal website to showcase my work and skills.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                What You Can Do
                            </h2>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 ml-4">
                                <li>Browse and view all content on this website</li>
                                <li>Contact me through the provided links</li>
                                <li>Share links to this website</li>
                                <li>Use this site for reference about my work and skills</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                Please Don&apos;t
                            </h2>
                            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1 ml-4">
                                <li>Copy or reproduce the content without permission</li>
                                <li>Use any content for commercial purposes</li>
                                <li>Attempt to harm or disrupt the website</li>
                                <li>Misrepresent yourself when contacting me</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                Disclaimer
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                This website is provided &quot;as is&quot; for informational purposes. 
                                While I try to keep everything accurate and up-to-date, I can&apos;t guarantee that all information is always current or complete.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                                Questions?
                            </h2>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                If you have any questions about these terms, feel free to reach out at{" "}
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