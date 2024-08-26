import Image from 'next/image'

export function Skill(props: {skillName: string, imageUrl: string, altName: string, desc: string, width: number, height: number}) {
    return (
        <div className="rounded-lg border bg-background p-4">
            <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <Image src={props.imageUrl} alt={props.altName} width={props.width} height={props.height}/>
                </div>
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{props.skillName}</h3>
                    <p className="text-muted-foreground text-center">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}