import React from 'react'
import { Steps, Row, Col, Card, Button } from 'antd'

const AboutUsPage = () => {
  return (
    <>
      <section className='sectionWrapper sectionAboutUs'>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div>
              <img
                style={{ display: 'block', width: '100%', height: '100%' }}
                alt='founder'
                src='https://cdn.shopify.com/s/files/1/0551/7839/5845/t/14/assets/img-6724_eEOk.jpg?v=1631674048639'
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className='aboutus__content'>
              <h3 className='aboutus__firstTitle'>
                “Tự hào tạo ra sản phẩm mang thương hiệu do người Việt đảm trách”
              </h3>
              <p style={{ margin: '10px 0 20px 0', fontSize: 16 }}>
                Chúng tôi sẽ không ra mắt bất cứ sản phẩm nào nếu không tự hào và rung cảm về nó đó
                là phương châm tạo ra sản phẩm tại The80s.
              </p>
              <p className='aboutus__signature'>Handcrafted Luxury Streetwear</p>
              <p className='aboutus__signature'>Proudly crafted in Danang, Vietnam</p>
              <p className='aboutus__signature'>
                Copyright © 2021, The 80S Streetwear. All rights reserved
              </p>
            </div>
          </Col>
        </Row>

        <div className='container'>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='aboutus__subContent'>
                <h4 className='aboutus__subTitle'>✠ Không ngừng cải tiến hướng đến chất lượng</h4>
                <p style={{ margin: '10px 0 20px 0', fontSize: 16 }}>
                  Với kinh nghiệm hơn 05 năm trong ngành, cùng hợp tác các nhà máy phù hợp tạo ra
                  sản phẩm may mặc có chất lượng cao cấp.
                </p>
                <p style={{ margin: '10px 0 20px 0', fontSize: 16 }}>
                  Mỗi sự cải tiến đều được phân tích kỹ lưỡng, thể hiện qua sự chỉnh chu trong quá
                  trình hoàn thiện sản phẩm, bảo đảm các sản phẩm có độ bền cao - trường tồn với
                  thời gian.
                </p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div>
                <img
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  alt='about-2'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/t/14/assets/snapseed1_a8Uc.jpg?v=1631526333402'
                />
              </div>
            </Col>
          </Row>
        </div>

        <div className='container'>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div>
                <img
                  style={{ display: 'block', width: '100%', height: '100%' }}
                  alt='about-2'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/t/14/assets/gopanh_shIp.jpg?v=1631864938897'
                />
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='aboutus__subContent'>
                <h4 className='aboutus__subTitle'>✠ Thấu hiểu khách hàng như tri kỷ</h4>
                <p style={{ margin: '10px 0 20px 0', fontSize: 16 }}>
                  Với đội ngũ trẻ luôn tò mò vẽ tương lai bằng khát vọng, đam mê và sự nhiệt huyết.
                  "Dám nghĩ, dám dẫn đầu, dám khác biệt"
                </p>
                <p style={{ margin: '10px 0 20px 0', fontSize: 16 }}>
                  Chúng tôi tin những giá trị cốt lõi chúng tôi xây dựng, hướng đến bắt đầu từ chính
                  đội ngũ tận tâm và trách nhiệm.
                </p>
              </div>
            </Col>
          </Row>

          <h3 style={{ textAlign: 'center' }}>
            {' '}
            Need a dev web? Contact me | Mr. Tuấn Anh | (+84)0333-000-369 | buianh95.it@gmail.com
          </h3>
        </div>
      </section>
    </>
  )
}

export default AboutUsPage
