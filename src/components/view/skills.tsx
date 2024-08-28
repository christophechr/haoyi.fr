import React from 'react'
import {Skill} from './card/skill'

export function Skills() {
    return (
        <section id="skills" className="w-full py-12 flex justify-center items-center md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are some of the technologies and tools I{"'"}m proficient with.
                </p>
            </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
                <Skill skillName="React" imageUrl="/icons/react.png" altName="React Icon" desc="A JavaScript library for building user interfaces." width={50} height={50}/>
                <Skill skillName="Next.js" imageUrl="/icons/nextjs.png" altName="Next.js Icon" desc="A React framework for building server-rendered applications." width={50} height={50}/>
                <Skill skillName="C++" imageUrl="/icons/cplusplus.png" altName="C++ Icon" desc="A React framework for building server-rendered applications." width={50} height={50}/>
                <Skill skillName="Java" imageUrl="/icons/java.png" altName="Java Icon" desc="Object-oriented programming language suitable for apps and backend development." width={50} height={50}/>
                <Skill skillName="Node.js" imageUrl="/icons/nodejs.png" altName="Node.js Icon" desc="A JavaScript runtime built on Chrome's V8 JavaScript engine." width={50} height={50}/>
            </div>
        </div>
        </section>
    )
}