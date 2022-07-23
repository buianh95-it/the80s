import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className='sectionWrapper notFoundPage'>
        <div style={{ textAlign: 'center' }} className='container'>
          <h1>404 NOT FOUND THE ADDRESS</h1>
          <Button type='primary' onClick={() => navigate('/shop')}>
            <i className='fa-solid fa-angles-right faa-horizontal animated faa-slow'></i> &nbsp;
            BACK TO SHOP
          </Button>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
