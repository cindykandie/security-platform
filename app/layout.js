import './globals.css'
import { Inter } from 'next/font/google'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDesktop, faCog, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import Navigation from './components/Navigation';

library.add(faDesktop, faCog, faAddressCard);


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Security platform',
  description: 'The security app is a comprehensive platform designed to enhance security measures and monitoring capabilities for various environments. It provides real-time surveillance and management of connected devices, offering users an array of features to ensure safety and protection.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex items-center justify-between m-auto lg:w-[1200px]'>
        <div className='lg:w-[20%]'>
            <Navigation />
          </div>
          <div className='lg:w-[80%]'>
            {children}
          </div>
          
        </main>
      
        </body>
    </html>
  )
}
