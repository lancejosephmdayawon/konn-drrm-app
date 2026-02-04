import './globals.css'

export const metadata = {
  title: 'Konn Commercial Building Emergency Guide',
  description: 'A quick-reference guide outlining safety procedures and emergency protocols for the Konn Commercial Building to ensure the safety of occupants during incidents.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}