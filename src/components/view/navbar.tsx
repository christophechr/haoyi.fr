'use client';

import { CodeIcon } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        
        // Just smooth scroll to element without updating URL
        const element = document.getElementById(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                <Link 
                    href="#projects" 
                    className="text-sm font-medium hover:underline underline-offset-4" 
                    onClick={(e) => handleAnchorClick(e, 'projects')}
                    prefetch={false}
                >
                    Projects
                </Link>
                <Link 
                    href="#skills" 
                    className="text-sm font-medium hover:underline underline-offset-4" 
                    onClick={(e) => handleAnchorClick(e, 'skills')}
                    prefetch={false}
                >
                    Skills
                </Link>
                <Link 
                    href="#contact" 
                    className="text-sm font-medium hover:underline underline-offset-4" 
                    onClick={(e) => handleAnchorClick(e, 'contact')}
                    prefetch={false}
                >
                    Contact
                </Link>
            </nav>
      </header>
    )
}