import React from 'react'
import LogoDisplay from './LogoDisplay'
import Navbar from './NavBar'
import RealtimeDetails from './RealtimeDetails'
import CtaSection from './CtaSection'

function Navigation() {
  return (
    <div className='flex flex-col max-w-[500px] justify-between content-between h-[100vh] px-6 py-2'>
        
        <div className='flex flex-col gap-4'>
          <LogoDisplay/>
          <Navbar />
        </div>
        <div className='flex flex-col gap-6'>
          <RealtimeDetails />
          <CtaSection />
        </div>
    </div>
    

  )
}

export default Navigation