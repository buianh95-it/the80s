import React from 'react'
import { Row, Col, Form, Input, Button, Space, message } from 'antd'
import axios from 'axios'
import { MailOutlined } from '@ant-design/icons'

const Footer = () => {
  const [form] = Form.useForm()
  const messSuccess = () => {
    message.success('Thank you for joining us 😊')
  }

  const handleEmailSubscribe = async (email) => {
    const sendEmail = await axios.post('/api/users/subscribe', email)
  }

  return (
    <footer style={{ marginTop: 50 }}>
      <div className='footerTopWrapper'>
        <div className='container'>
          <Row>
            <Col sm={24} md={12} lg={8} xl={8}>
              <h2 className='mainFooter__topTitle'>ONLINE STORE</h2>
              <ul className='mainFooter__topUl'>
                <li>
                  Giao hàng <b>miễn phí</b> toàn quốc
                </li>
                <li>Bảo hành đổi trả 1-1 (bao Legit check)*</li>
                <li>Bảo mật thông tin khách hàng PCI Level 1</li>
              </ul>
            </Col>

            <Col sm={24} md={12} lg={8} xl={8}>
              <h2 className='mainFooter__topTitle'>MEMBERSHIP++</h2>
              <ul className='mainFooter__topUl'>
                <li>
                  Tích điểm <b>Uy tín</b> → Đổi thưởng
                </li>
                <li>Sign-up nhận ngay 500 Uy tín</li>
                <li>Unlock liền tay Mã giảm giá 10%</li>
              </ul>
            </Col>

            <Col sm={24} md={12} lg={8} xl={8}>
              <h2 className='mainFooter__topTitle'>BRAND FROM DANANG</h2>
              <ul className='mainFooter__topUl'>
                <li>Mang đến chất lượng tốt nhất</li>
                <li>Only streetwear item</li>
                <li>
                  <b>Streetwear</b> is the best
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ marginTop: 30 }} className='footerBottomWrapper'>
        <div className='container'>
          <Row>
            <Col sm={24} md={12} lg={8} xl={8}>
              <h3 className='mainFooter__bottomTitle'>THƯƠNG HIỆU</h3>
              <ul className='mainFooter__bottomUl'>
                <li>Về chúng tôi</li>
                <li>Hệ thống cửa hàng</li>
                <li>Chương trình Membership</li>
                <li>Xem đánh giá khách hàng</li>
              </ul>
            </Col>
            <Col sm={24} md={12} lg={8} xl={8}>
              <h3 className='mainFooter__bottomTitle'>CHÍNH SÁCH</h3>
              <ul className='mainFooter__bottomUl'>
                <li>Hình thức thanh toán</li>
                <li>Chính sách bảo mật </li>
                <li>Chính sách giao hàng</li>
                <li>Chính sách đổi trả</li>
                <li>Hướng dẫn mua hàng trực tuyến</li>
              </ul>
            </Col>
            <Col sm={24} md={12} lg={8} xl={8}>
              <h4 className='footer__logo'>The 80s Store&reg; </h4>
              <p>News letter</p>
              <Form
                form={form}
                onFinish={(value) => {
                  handleEmailSubscribe(value)
                  messSuccess()
                  form.resetFields()
                }}
              >
                <Form.Item
                  validateFirst
                  name='email'
                  rules={[
                    { required: true, message: 'Help us by enter your email' },
                    { type: 'email', message: 'Please enter correct email' },
                  ]}
                >
                  <Space>
                    <Input placeholder='Enter your email here...' />
                    <Button type='primary' icon={<MailOutlined />} htmlType='submit'></Button>
                  </Space>
                </Form.Item>
              </Form>
              <p style={{ fontFamily: 'Arial', fontSize: 11 }}>
                Đăng ký để nhận những ưu đãi mới nhất từ The 80s
              </p>
            </Col>
          </Row>
        </div>
      </div>

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

export default Footer
