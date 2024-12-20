import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (    
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {currentYear} Christophe CHHOR. All rights reserved.</p> 

        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/policies" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    )
}