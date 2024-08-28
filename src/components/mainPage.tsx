import { Profile } from "./view/profile"
import { Projects } from "./view/projects"
import { Skills } from "./view/skills"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">


      <main className="flex-1">
        <Profile />

        <Projects />

        <Skills />

      </main>
    </div>
  )
}


