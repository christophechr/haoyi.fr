import Image from 'next/image'

export function Profile() {
    return (
        <section id="hero" className="w-full py-12 flex justify-center items-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Christophe CHHOR</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Software Engineering Student at Epitech Paris
                  </p>
                </div>
              </div>
            <Image
                src="/haoyi.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
            </div>
          </div>
        </section>
    )
}