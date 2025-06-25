import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maria Silva - Links | Criadora de Conteúdo Digital",
  description: "Todos os meus links em um só lugar. Siga-me nas redes sociais e acesse meus conteúdos exclusivos.",
  keywords: "links, redes sociais, conteúdo digital, instagram, youtube, blog",
  authors: [{ name: "Maria Silva" }],
  openGraph: {
    title: "Maria Silva - Links",
    description: "Todos os meus links em um só lugar",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Silva - Links",
    description: "Todos os meus links em um só lugar",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
