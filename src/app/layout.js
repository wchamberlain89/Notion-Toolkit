import './globals.css'
import SessionProvider from './components/SessionProvider'
export const metadata = {
  title: 'Notion-Toolkit',
  description: 'Notion Widgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
