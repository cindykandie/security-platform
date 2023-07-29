import Image from 'next/image'
import Navigation from './components/Navigation'
import HeaderSection from './components/HeaderSection'
import Benefits from './components/Benefits'
import VideoNav from './components/VideoNav'

export default function Home() {
  return (
    <div className='flex'>
          
          <div>
            <HeaderSection/>
            <Benefits />
            <VideoNav />
          </div>
      
    </div>
  )
}
