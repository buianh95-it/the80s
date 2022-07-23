import React from 'react'
import { Carousel, Image } from 'antd'

const contentStyle = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#333',
}

const SliderShowcase = () => {
  return (
    <section className='SliderShowcase'>
      <div className='mainSlideShow'>
        <Carousel autoplay>
          <div>
            <h3 className='mainSlideShow--responsiveImg' style={contentStyle}>
              <Image
                style={{ objectFit: 'cover' }}
                preview={false}
                width={'100%'}
                src='/images/slider/slider-1.jpg'
              />
            </h3>
          </div>
          <div>
            <h3 className='mainSlideShow--responsiveImg' style={contentStyle}>
              <Image
                style={{ objectFit: 'scale-down' }}
                preview={false}
                width={'100%'}
                src='/images/slider/slider-2.png'
              />
            </h3>
          </div>
          <div>
            <h3 className='mainSlideShow--responsiveImg' style={contentStyle}>
              <Image
                style={{ objectFit: 'scale-down' }}
                preview={false}
                width={'100%'}
                src='/images/slider/slider-3.jpg'
              />
            </h3>
          </div>
          <div>
            <h3 className='mainSlideShow--responsiveImg' style={contentStyle}>
              <Image
                style={{ objectFit: 'scale-down' }}
                preview={false}
                width={'100%'}
                src='/images/slider/slider-4.jpg'
              />
            </h3>
          </div>

          <div>
            <h3 className='mainSlideShow--responsiveImg' style={contentStyle}>
              <Image
                style={{ objectFit: 'scale-down' }}
                preview={false}
                width={'100%'}
                src='/images/slider/slider-5.jpg'
              />
            </h3>
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default SliderShowcase
