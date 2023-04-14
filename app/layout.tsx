
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dog from './components/dog/Dog'
import './globals.css'

import { Noto_Sans } from 'next/font/google'


const font = Noto_Sans({ subsets: ['latin'],weight:['100','200','300','400','500','600','700','800'] })


export const metadata = {
  title: 'Jin Teaching',
  description: 'for teaching',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`bg-black min-h-screen flex items-center flex-col ${font.className} justify-between`}>
          <Navbar/>
          <Dog/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
