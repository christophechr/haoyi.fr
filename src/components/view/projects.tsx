import Link from 'next/link';
import { Project } from './card/project';

export function Projects() {
    return (
        <section id="projects" className="w-full py-12 flex justify-center items-center md:py-24 lg:py-32 bg-muted ">
          <div className="container px-4 md:px-6 w-full">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the project I have participated during my bachelor degree.
                </p>
              </div>
            </div>
            <div className="w-full mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <Project imgSrc='/projects/LeAREAMVP.png' width={550} height={310} alt='LeAREA' projectName='LeAREA' 
              shortDesc='A school web project that aims to connect APIs and interact between them.' href='https://github.com/christophechr/LeAREA' hrefProvider='GitHub'/>
              
              <Project imgSrc='/projects/R-TYPE.png' width={550} height={310} alt='R-TYPE' projectName='R-TYPE' 
              shortDesc='A 2D online video game, made in C++, developping the challenge of the network in video games' href='https://github.com/Codrux2200/Rtype' hrefProvider='GitHub'/>
            </div>
          </div>
        </section>
    )
}