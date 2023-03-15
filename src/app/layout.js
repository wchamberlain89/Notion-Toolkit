import './globals.css'

export const metadata = {
  title: 'Notion-Toolkit',
  description: 'Notion Widgets',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
