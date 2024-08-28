import { Social } from './card/socialCard';
import Image from 'next/image'

export function Socials() {
    return (
        <div className="contact flex flex-col min-h-[100dvh]">
            <section id="contact" className="w-full flex-col justify-center items-center md:py-24 lg:py-32">
                <Social href="https://github.com/christophechr" imageUrl="/icons/github.png" altName="GitHub Icon" width={50} height={50}/>
                <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=christophechr&langs_count=8&theme=omni&layout=compact" alt="Github stats"/>

                <Social href="https://linkedin.com/in/christophe-chhor" imageUrl="/icons/linkedin.png" altName="LinkedIn Icon" width={50} height={50}/>

                <Social href="mailto:christophe.chhor.dev@gmail.com" imageUrl="/icons/mail.png" altName="Email Icon" width={50} height={50}/>            
            </section>
        </div>
    )
}
