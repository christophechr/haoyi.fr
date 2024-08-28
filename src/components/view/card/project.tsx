import Link from 'next/link'
import Image from 'next/image'

export function Project(props: { imgSrc: string, width: number, height: number, alt: string, projectName: string, shortDesc: string, href: string, hrefProvider: string} ) {
    return (
        <div className="rounded-lg border bg-background p-4">
        <Image
            src={props.imgSrc}
            width={props.width}
            height={props.height}
            alt={props.alt}
            className= {props.projectName + " mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"}
        />
        <div className="mt-4 space-y-2">
            <h3 className="text-xl font-bold">{props.projectName}</h3>
            <p className="text-muted-foreground">
                {props.shortDesc}
            </p>
            <div className="flex gap-2">
                <Link
                    href={props.href}
                    className={props.projectName + " inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"}
                    prefetch={false}
                >
                {props.hrefProvider}
                </Link>
            </div>
        </div>
    </div>
    )
}