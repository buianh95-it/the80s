import './styles.css'
import React, { useState, useEffect } from 'react'

const ShowcaseGallery = () => {
  const [activePic1, setActivePic1] = useState(false)
  const [activePic2, setActivePic2] = useState(false)
  const [activePic3, setActivePic3] = useState(false)
  const [activePic4, setActivePic4] = useState(false)
  const [activePic5, setActivePic5] = useState(false)

  useEffect(() => {
    const showCaseInterval = setInterval(() => {
      setActivePic1(!activePic1)
      setActivePic2(false)
      setActivePic3(false)
      setActivePic4(false)
      setActivePic5(false)
      if (activePic1) {
        setActivePic2(true)
        setActivePic1(false)
        setActivePic3(false)
        setActivePic4(false)
        setActivePic5(false)
      }
      if (activePic2) {
        setActivePic3(true)
        setActivePic1(false)
        setActivePic2(false)
        setActivePic4(false)
        setActivePic5(false)
      }
      if (activePic3) {
        setActivePic4(true)
        setActivePic1(false)
        setActivePic2(false)
        setActivePic3(false)
        setActivePic5(false)
      }
      if (activePic4) {
        setActivePic5(true)
        setActivePic1(false)
        setActivePic2(false)
        setActivePic3(false)
        setActivePic4(false)
      }
    }, 3000)
    return () => clearInterval(showCaseInterval)
  }, [activePic1, activePic2, activePic3, activePic4, activePic5])

  return (
    <section className='showcaseGallery'>
      <div className='appWrap'>
        <div className='container'>
          <div
            className={`panel ${activePic1 ? 'active' : ''}`}
            style={{
              backgroundImage: `url('/images/slider/showcase-1.jpg')`,
            }}
            onClick={() => {
              setActivePic1(!activePic1)
              setActivePic2(false)
              setActivePic3(false)
              setActivePic4(false)
              setActivePic5(false)
            }}
          ></div>

          <div
            className={`panel ${activePic2 ? 'active' : ''}`}
            style={{
              backgroundImage: `url('/images/slider/showcase-2.jpg')`,
            }}
            onClick={() => {
              setActivePic2(!activePic2)
              setActivePic1(false)
              setActivePic3(false)
              setActivePic4(false)
              setActivePic5(false)
            }}
          ></div>

          <div
            className={`panel ${activePic3 ? 'active' : ''}`}
            style={{
              backgroundImage: `url('/images/slider/showcase-3.jpg')`,
            }}
            onClick={(e) => {
              setActivePic3(!activePic3)
              setActivePic1(false)
              setActivePic2(false)
              setActivePic4(false)
              setActivePic5(false)
            }}
          ></div>

          <div
            className={`panel ${activePic4 ? 'active' : ''}`}
            style={{
              backgroundImage: `url('/images/slider/showcase-4.jpg')`,
            }}
            onClick={(e) => {
              setActivePic4(!activePic4)
              setActivePic1(false)
              setActivePic2(false)
              setActivePic3(false)
              setActivePic5(false)
            }}
          ></div>

          <div
            className={`panel ${activePic5 ? 'active' : ''}`}
            style={{
              backgroundImage: `url('/images/slider/showcase-5.jpg')`,
            }}
            onClick={(e) => {
              setActivePic5(!activePic5)
              setActivePic1(false)
              setActivePic2(false)
              setActivePic3(false)
              setActivePic4(false)
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseGallery
