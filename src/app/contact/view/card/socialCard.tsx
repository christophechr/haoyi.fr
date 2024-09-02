import Image from 'next/image'

export function Social(props: {href: string, imageUrl: string, altName: string, width: number, height: number}) {
    return (
        <a href={props.href} className="text-sm font-medium" target="_blank">
            <Image src={props.imageUrl} alt={props.altName} width={props.width} height={props.height}/>
        </a>
    )
}