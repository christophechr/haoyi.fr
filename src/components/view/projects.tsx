import Link from 'next/link';

export function Projects() {
    return (
        <section id="projects" className="w-full py-12 flex justify-center items-center md:py-24 lg:py-32 bg-muted ">
          <div className="container px-4 md:px-6 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Check out some of the web applications I've built to showcase my skills.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border bg-background p-4">
                <img
                  src="/projects/LeAREAMVP.png"
                  width="550"
                  height="310"
                  alt="LeAREA"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">LeAREA</h3>
                  <p className="text-muted-foreground">
                    A school web project that aims to connect APIs and interact between them.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/christophechr/LeAREA"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-background p-4">
                <img
                  src="/projects/R-TYPE.png"
                  width="550"
                  height="310"
                  alt="RTYPE"
                  className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">RTYPE</h3>
                  <p className="text-muted-foreground">
                    A web application that allows users to track their fitness goals and progress.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/Codrux2200/Rtype"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}