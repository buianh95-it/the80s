import React from 'react'

const VideoShowcase = () => {
  return (
    <div className='videoShowcase'>
      <video loop autoPlay muted>
        <source src='/the1980.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoShowcase
