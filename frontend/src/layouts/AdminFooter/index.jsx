import React from 'react'
import { Row, Col, Form, Input, Button, Space, message } from 'antd'
import axios from 'axios'
import { MailOutlined } from '@ant-design/icons'

const AdminFooter = () => {
  const messSuccess = () => {
    message.success('Thank you for joining us 😊')
  }

  const handleEmailSubscribe = async (email) => {
    const sendEmail = await axios.post('/api/users/subscribe', email)
  }

  return (
    <footer style={{ marginTop: 50 }}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a href='https://facebook.com' target='_blank'>
          <i style={{ paddingRight: 20 }} className='fa-brands fa-facebook fa-2x'></i>
        </a>
        <a href='https://instagram.com' target='_blank'>
          <i style={{ paddingRight: 20 }} className='fa-brands fa-instagram fa-2x'></i>
        </a>
        <a href='https://youtube.com' target='_blank'>
          <i style={{ paddingRight: 20 }} className='fa-brands fa-youtube fa-2x'></i>
        </a>
        <a href='https://tiktok.com' target='_blank'>
          <i style={{ paddingRight: 20 }} className='fa-brands fa-tiktok fa-2x'></i>
        </a>
      </div>
      <p style={{ fontFamily: 'Arial', fontSize: 13, textAlign: 'center', padding: '20px 0px' }}>
        &copy;2022 Dev with ❤️ by Bui Anh | Contact me by <i className='fa-solid fa-envelope'></i>:
        buianh95.it@gmail.com | <i className='fa-solid fa-square-phone-flip'></i>: (+84)
        0333-000-369{' '}
      </p>
    </footer>
  )
}

export default AdminFooter
