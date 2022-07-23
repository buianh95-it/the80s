import React, { useRef } from 'react'
import { Row, Col, Pagination, Card } from 'antd'
import HeroBanner from '../../globalComponents/HeroBanner'
import { Link } from 'react-router-dom'
const { Meta } = Card

const BlogPage = () => {
  const elementRef = useRef()
  const divElement = elementRef.current

  return (
    <>
      <HeroBanner location='Blog' />
      <section ref={elementRef} className='sectionWrapper'>
        <div className='container'>
          <h4 className='product-title'>NEWS</h4>

          <Row gutter={[48, 96]}>
            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://bizweb.dktcdn.net/100/369/010/articles/be587a11f1e732b96bf6.jpg?v=1656931578993'
                    />
                  }
                >
                  <Meta title='KHÁM PHÁ PHIÊN BẢN MÀU IVORY CỦA SẢN PHẨM SIGNATURE PRINT CARDIGAN' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    Chiếc áo Print Cardigan đã luôn ‘chắc suất’ tại vị trí best-seller đầu bảng của
                    The 80s từ lúc mới xuất hiện tới nay, với những phiên bản màu Cream/Green và
                    Cream...
                  </p>
                </Card>
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://bizweb.dktcdn.net/100/369/010/articles/thumbnail-tap-chi-dep.png?v=1652500396863'
                    />
                  }
                >
                  <Meta title='The80s X FREE FIRE | THE UNDEFEATED: RUNWAY EDITION' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    Qua lăng kính thời trang, The 80s mang đến sự kết hợp mới lạ giữa chất
                    streetwear và phong cách các nhân vật từ game eSports thể loại sinh tồn hot nhất
                    hiện nay...
                  </p>
                </Card>
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://bizweb.dktcdn.net/100/369/010/articles/untitled-1.jpg?v=1640321993720'
                    />
                  }
                >
                  <Meta title='DO ĐÂU CARDIGAN ĐƯỢC MỆNH DANH LÀ “BEST SELLER” CỦA The 80s' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    Cardigan không chỉ là một chiếc áo khoác đơn thuần mà còn là một item dễ dàng
                    chiều lòng mọi phong cách mà bạn đang hướng đến. Nhờ vào đặc tính linh hoạt,
                    năng động, ...
                  </p>
                </Card>
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://bizweb.dktcdn.net/100/369/010/articles/0-b234e78c-67a2-4302-9fde-db60e4d901da.jpg?v=1646995315090'
                    />
                  }
                >
                  <Meta title='The80s X FREE FIRE | THE UNDEFEATED: RUNWAY EDITION' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    Chiếc áo Print Cardigan đã luôn ‘chắc suất’ tại vị trí best-seller đầu bảng của
                    DirtyCoins từ lúc mới xuất hiện tới nay, với những phiên bản màu Cream/Green và
                    Cream...
                  </p>
                </Card>
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='https://bizweb.dktcdn.net/100/369/010/articles/h5.jpg?v=1644657192837'
                    />
                  }
                >
                  <Meta title=' THÊM NGỌT NGÀO CHO MÙA VALENTINE VỚI PHIÊN BẢN CARDIGAN MỚI' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    14.02 – Lễ Tình nhân sắp đến và cũng là dịp của tất cả các thương hiệu thời
                    trang đang cố gắng hỗ trợ cho các cặp đôi theo nhiều cách khác nhau. Không nằm
                    ngoài cuộc...
                  </p>
                </Card>
              </Link>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8}>
              <Link to='/blog-detail'>
                <Card
                  className='blog-card'
                  hoverable
                  style={{
                    width: 360,
                    height: 550,
                  }}
                  cover={
                    <img
                      alt='example'
                      src='http://bizweb.dktcdn.net/100/369/010/articles/artboard-1.jpg?v=1644395254880'
                    />
                  }
                >
                  <Meta title='HỌA TIẾT MONOGRAM VÀ SỰ CHUYỂN MÌNH QUA THỜI GIAN' />
                  <p style={{ textAlign: 'center', margin: 10 }}>04/07/2022</p>
                  <p style={{ textAlign: 'center', margin: 10, fontSize: 12 }}>
                    Họa tiết monogram đã được sử dụng rất lâu, với một số ghi chép cho thấy rằng
                    monogram đã được sử dụng trên những đồng tiền và văn triện từ thời Hy Lạp cổ
                    đại.
                  </p>
                </Card>
              </Link>
            </Col>
          </Row>

          <Pagination
            style={{ textAlign: 'center', paddingTop: 30 }}
            current={1}
            total={1}
            onChange={(page) => {
              divElement.scrollIntoView(true)
            }}
          />
        </div>
      </section>
    </>
  )
}

export default BlogPage
