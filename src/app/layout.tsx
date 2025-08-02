// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { DM_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Navbar } from '@/components/view/navbar'
import { Footer } from '@/components/view/footer'
import type { Metadata } from 'next'

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Christophe CHHOR - Software Engineering Student',
  description: 'Portfolio of Christophe CHHOR, Software Engineering Student at Epitech Paris. Showcasing projects in React, Next.js, C++, Java, and Node.js.',
  keywords: ['Christophe CHHOR', 'Software Engineer', 'Epitech', 'React', 'Next.js', 'C++', 'Java', 'Portfolio'],
  authors: [{ name: 'Christophe CHHOR', url: 'https://github.com/christophechr' }],
  creator: 'Christophe CHHOR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://haoyi.fr', // Replace with your actual domain
    siteName: 'Christophe CHHOR Portfolio',
    title: 'Christophe CHHOR - Software Engineering Student',
    description: 'Portfolio showcasing projects in React, Next.js, C++, Java, and Node.js. Software Engineering Student at Epitech Paris.',
    images: [
      {
        url: '/haoyi.jpg', // Your profile image
        width: 1200,
        height: 630,
        alt: 'Christophe CHHOR - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christophe CHHOR - Software Engineering Student',
    description: 'Portfolio showcasing projects in React, Next.js, C++, Java, and Node.js.',
    images: ['/haoyi.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}