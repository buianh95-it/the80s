import React from 'react'
import { motion } from 'framer-motion'
import retro2 from './retro-2.png'

import './style.css'
const TRANSITION_TIME_OPACITY_S = 1
const TRANSITION_TIME_ROTATE_S = 2

const HeroBanner = ({ location }) => {
  return (
    <div className='heroWrapper'>
      <p className='subNavMenu'>
        {' '}
        <i className='fa-solid fa-house-chimney'></i> / {location}
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-2, 0, 2] }}
        transition={{
          duration: TRANSITION_TIME_OPACITY_S,
          rotate: { yoyo: Infinity, duration: TRANSITION_TIME_ROTATE_S },
        }}
      >
        <img width={80} height={'auto'} className='image-1' src={retro2} alt='img-1' />
      </motion.div>
    </div>
  )
}

export default HeroBanner
