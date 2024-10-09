import Image from 'next/image'

export function Skill(props: {skillName: string, skillUrl: string, imageUrl: string, altName: string, desc: string, width: number, height: number}) {
    return (
        <div className="rounded-lg border bg-background p-4">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <a href={props.skillUrl}>
                        <Image src={props.imageUrl} alt={props.altName} width={props.width} height={props.height}/>
                    </a>
                </div>
                <div className="mt-4 text-center">
                    <a href={props.skillUrl}>
                        <h3 className="text-xl font-bold">{props.skillName}</h3>
                    </a>
                    <p className="text-muted-foreground text-center">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}