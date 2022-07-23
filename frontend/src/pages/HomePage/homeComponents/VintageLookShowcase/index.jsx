import React, { useState } from 'react'
import './style.css'
const VintageLookShowcase = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <section style={{ margin: '30px 0' }} className='VintageLookShowcase'>
      <div className='vintageWrap'>
        <div
          className={'vintage-item' + (isHover ? ' inactive' : '')}
          style={{ backgroundImage: `url('/images/slider/vintage-1.jpg')`, objectFit: 'cover' }}
          onMouseOver={() => {
            setIsHover(true)
          }}
          onMouseLeave={(e) => {
            setIsHover(false)
          }}
        >
          <h2>Let's show</h2>
        </div>
        <div
          className={'vintage-item' + (isHover ? ' inactive' : '')}
          style={{ backgroundImage: `url('/images/slider/vintage-2.jpg')`, objectFit: 'cover' }}
          onMouseOver={() => {
            setIsHover(true)
          }}
          onMouseLeave={(e) => {
            setIsHover(false)
          }}
        >
          <h2>Our</h2>
        </div>
        <div
          className={'vintage-item' + (isHover ? ' inactive' : '')}
          style={{ backgroundImage: `url('/images/slider/vintage-3.jpg')`, objectFit: 'cover' }}
          onMouseOver={() => {
            setIsHover(true)
          }}
          onMouseLeave={(e) => {
            setIsHover(false)
          }}
        >
          <h2>Vintage</h2>
        </div>
        <div
          className={'vintage-item' + (isHover ? ' inactive' : '')}
          style={{ backgroundImage: `url('/images/slider/vintage-4.jpg')`, objectFit: 'cover' }}
          onMouseOver={() => {
            setIsHover(true)
          }}
          onMouseLeave={(e) => {
            setIsHover(false)
          }}
        >
          <h2>Look</h2>
        </div>
      </div>
    </section>
  )
}

export default VintageLookShowcase
