import Link from "next/link"

import { Profile } from "./view/profile"
import { Projects } from "./view/projects"
import { Skills } from "./view/skills"

export function FrontComponent() {
  return (
    <div className="flex flex-col min-h-[100dvh]">


      <main className="flex-1">
        <Profile />

        <Projects />

        <Skills />

      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Christophe CHHOR. All rights reserved.</p>

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/policies" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}


