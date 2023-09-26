import './globals.css'
import { Inter } from 'next/font/google'
import { hamburger } from '@/assets/icons'
import { headerLogo } from '@/assets/images'
import { navLinks } from '@/constants'

import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Waitlist',
  description: 'Landing page for nike store for shoes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="w-full py-8 z-10 padding-x absolute">
      <nav className="flex justify-between items-center max-container">
         <a href='/'>
          <Image src={headerLogo} alt='logo'  className="md:w-[130px] md:h-[29px] w-[70px]" />
        </a>
        <ul className="max-md:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='text-lg bg-primary px-7 py-4 text-slate-900 border leading-none rounded-md shadow-3xl'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
         <div className='hidden max-md:block'>
          <Image
            src={hamburger}
            alt='hamburger menu'
            width={25}
            height={25}
            className='whitespace-nowrap'
          />
        </div>
      </nav>
    </header>
      {children}
      </body>
    </html>
  )
}
