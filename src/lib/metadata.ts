import type { Metadata } from 'next'

// You can create specific metadata for individual pages
export function generatePageMetadata({
  title,
  description,
  image,
  url,
}: {
  title?: string
  description?: string
  image?: string
  url?: string
}): Metadata {
  const defaultTitle = 'Christophe CHHOR - Software Engineering Student'
  const defaultDescription = 'Portfolio showcasing projects in React, Next.js, C++, Java, and Node.js. Software Engineering Student at Epitech Paris.'
  const defaultImage = '/haoyi.jpg'
  
  return {
    title: title || defaultTitle,
    description: description || defaultDescription,
    openGraph: {
      title: title || defaultTitle,
      description: description || defaultDescription,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title || defaultTitle,
        },
      ],
      url: url,
    },
    twitter: {
      card: 'summary_large_image',
      title: title || defaultTitle,
      description: description || defaultDescription,
      images: [image || defaultImage],
    },
  }
}
