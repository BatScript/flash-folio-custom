import { Oxanium } from 'next/font/google'
import dynamic from 'next/dynamic'
import AOS from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import PortfolioHeroBanner from '../components/hero-banner'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
})

const oxanium = Oxanium({
  weight: ['200', '400', '300', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})
const PortfolioContainer = ({ data }) => {
  useEffect(() => {
    AOS.init({
      offset: 50
    })
  }, [])
  return (
    <div
      className={`tw-relative portfolio-bg tw-h-screen ${oxanium.className}`}
    >
      <PortfolioHeroBanner portfolioSchema={data} />
      <AnimatedCursor
        outerSize={35}
        outerStyle={{
          background: '#DAFFFB',
          mixBlendMode: 'difference'
        }}
        innerStyle={{
          background: '#001c30'
        }}
      />
    </div>
  )
}

export default PortfolioContainer
