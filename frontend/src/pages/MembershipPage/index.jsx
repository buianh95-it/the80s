import React from 'react'
import { Steps, Row, Col, Card, Button } from 'antd'
import {
  UserAddOutlined,
  CreditCardOutlined,
  SwapOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  FileImageOutlined,
  VideoCameraAddOutlined,
} from '@ant-design/icons'
import { FaBirthdayCake } from 'react-icons/fa'
const MembershipPage = () => {
  return (
    <>
      <section className='sectionWrapper sectionMembership'>
        <div className='container' style={{ textAlign: 'center' }}>
          <h4 className='product-title'>[The 80s® Prestige] Chương trình tích điểm Uy Tín</h4>
          <p style={{ margin: '10px 0', textAlign: 'center' }}>
            The 80s® Prestige là chương trình dành riêng của The 80s® muốn tưởng thưởng đến những
            khách hàng thân thiết cùng đồng hành với chúng tôi. The 80s® Prestige Club cung cấp cho
            các bạn những quyền lợi và phần thưởng [độc quyền] chỉ dành riêng trong Club. Bạn càng
            mua nhiều sản phẩm, trải nghiệm trên Website của chúng tôi, bạn càng nhận nhiều phần
            thưởng cao cấp hơn.
          </p>

          <div style={{ maxWidth: '920px', height: '342px', margin: 'auto' }}>
            <img
              style={{ display: 'block', width: '100%', height: '100%', margin: '0 auto' }}
              src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/50587067_2360052534281440_2613058016987054080_n.jpg?v=1634312837'
              alt='img'
            />
          </div>

          <h3 className='membership-title'>Cách Thức Tham Gia</h3>
          <div style={{ width: '70%', margin: 'auto' }}>
            <Steps style={{ marginBottom: 50 }}>
              <Steps.Step status='finish' title='Đăng ký thành viên' icon={<UserAddOutlined />} />
              <Steps.Step
                status='finish'
                title='Tích lũy điểm [uy tín]'
                icon={<CreditCardOutlined />}
              />
              <Steps.Step status='finish' title='Đổi điểm và nhận thưởng' icon={<SwapOutlined />} />
            </Steps>
          </div>
          <h3 className='membership-title'>Cách Tích Lũy Điểm</h3>
          <Row gutter={[16, 16]} style={{ margin: '0 auto' }}>
            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<UserAddOutlined />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Tạo tài khoản</p>
                <p>500 Points</p>
              </Card>
            </Col>

            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<FaBirthdayCake />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Mừng sinh nhật bạn</p>
                <p>500 Points</p>
              </Card>
            </Col>

            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<ShoppingCartOutlined />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Mua hàng tích điểm</p>
                <p>100 Points / 1 Item</p>
              </Card>
            </Col>

            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<StarOutlined />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Viết đánh giá</p>
                <p>200 Points</p>
              </Card>
            </Col>

            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<FileImageOutlined />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Gửi hình ảnh đánh giá </p>
                <p>300 Points</p>
              </Card>
            </Col>

            <Col xs={16} sm={16} md={8} lg={4} xl={4}>
              <Card>
                <div>
                  {' '}
                  <Button size='large' icon={<VideoCameraAddOutlined />} />{' '}
                </div>
                <p style={{ fontWeight: 'bold', marginTop: 15 }}>Gửi video đánh giá</p>
                <p>400 Points</p>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default MembershipPage
