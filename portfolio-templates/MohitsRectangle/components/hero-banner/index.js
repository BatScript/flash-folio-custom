import { Staatliches } from 'next/font/google'
import PortfolioHeader from '../header'
import Card from '../common/card'
import { HandIndex } from 'react-bootstrap-icons'

import { useState } from 'react'
const staatliches = Staatliches({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

const PortfolioHeroBanner = ({ portfolioSchema }) => {
  const { name = '', jobProfile = '', profileContent = [] } = portfolioSchema
  const [activeIndex, setActiveIndex] = useState(0)
  const handleTabClick = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className={`tw-h-full tw-flex tw-flex-col`}>
      {/* <PortfolioHeader /> */}
      <Card
        type={'border'}
        className={`tw-m-3 tw-lg:tw-m-8 tw-h-full tw-p-5 tw-flex tw-flex-col tw-lg:tw-flex-row tw-justify-between`}
      >
        <div className="tw-flex tw-flex-col tw-justify-between">
          <div className="">
            <p>Hi, My name is</p>
            <p
              className={`tw-text-8xl tw-m-0 tw-uppercase tw-tracking-wider ${staatliches.className}`}
            >
              {name}
            </p>
            <p className="tw-text-right">{jobProfile}</p>
          </div>
          <div>
            <ul>
              {profileContent?.map((val, index) => {
                return (
                  <li className="tw-py-1 tw-flex">
                    <span
                      className="hover-link"
                      onClick={() => handleTabClick(index)}
                    >
                      {val?.linkLabel}
                    </span>
                    <span className="tw-transform tw--rotate-90 tw-ml-2">
                      {activeIndex === index && <HandIndex />}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="tw-mt-auto tw-overflow-scroll hide-scrollbar tw-lg:tw-max-h-100 tw-max-h-80 tw-max-w-lg">
          {profileContent?.map((val, index) => {
            return (
              activeIndex === index && (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="mb-2 tw-min-h-full"
                  id={val?.linkUrl}
                  dangerouslySetInnerHTML={{ __html: val?.content }}
                />
              )
            )
          })}
        </div>
      </Card>
    </div>
  )
}

export default PortfolioHeroBanner
