import { Profile } from "./view/profile"
import { Projects } from "./view/projects"
import { Skills } from "./view/skills"
import { Socials } from "../app/contact/view/socials"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Profile />

        <Projects />

        <Skills />

        <Socials />

      </main>
    </div>
  )
}


