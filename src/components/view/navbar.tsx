import { CodeIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="navbar px-4 lg:px-6 h-14 flex items-center">
            <Link href="/" className="flex items-center justify-center" prefetch={false}>
                <CodeIcon className="h-6 w-6" />
               <span className="sr-only">Haoyi</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Home
                </Link>
                <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Skills
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
      </header>
    )
}