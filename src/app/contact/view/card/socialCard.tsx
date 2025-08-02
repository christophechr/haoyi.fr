import Image from 'next/image'

export function Social(props: {href: string, imageUrl: string, altName: string, width: number, height: number}) {
    return (
        <a 
            href={props.href} 
            className="flex justify-center items-center hover:scale-110 transition-transform duration-200" 
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image 
                src={props.imageUrl} 
                alt={props.altName} 
                width={props.width} 
                height={props.height}
                className="drop-shadow-sm hover:drop-shadow-md transition-all duration-200"
            />
        </a>
    )
}