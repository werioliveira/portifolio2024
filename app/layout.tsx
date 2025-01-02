import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfólio Weri Oliveira',
  description: 'Portfólio de desenvolvedor web full stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
          
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <script async src="https://analytic.werioliveira.shop/tracker.js" data-ackee-server="https://analytic.werioliveira.shop" data-ackee-domain-id="72b97b67-2bdf-4db6-93f5-2f725b32c78e"></script>
      </body>
    </html>
  )
}