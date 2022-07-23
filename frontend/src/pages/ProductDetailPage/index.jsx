import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailAction } from '../../redux/actions'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ProductRating from '../../globalComponents/ProductRating'
import { Row, Col, Card, Button, Collapse, Space, notification, Rate, Form, Input } from 'antd'
import ImageGallery from 'react-image-gallery'
import { ROUTES } from '../../constants/routes'
import ErrorMessage from '../../globalComponents/ErrorMessage'
import SpinnerLoading from '../../globalComponents/SpinnerLoading'
import { addCartItemAction, createCommentAction } from '../../redux/actions'
import { ShoppingCartOutlined } from '@ant-design/icons'
import moment from 'moment'
const { Panel } = Collapse

const ProductDetailPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [chooseSize, setChooseSize] = useState('')
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  const [form] = Form.useForm()
  const { productDetail } = useSelector((state) => state.product)
  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  const token = userLoginInfo.token
  const productDetailItem = productDetail.productDetailItem
  const { reviews } = productDetailItem
  const loading = productDetail.productDetailLoading
  const error = productDetail.productDetailError

  const images = [
    { original: productDetailItem.images[0], thumbnail: productDetailItem.images[0] },
    { original: productDetailItem.images[1], thumbnail: productDetailItem.images[1] },
    { original: productDetailItem.images[2], thumbnail: productDetailItem.images[2] },
    { original: productDetailItem.images[3], thumbnail: productDetailItem.images[3] },
    { original: productDetailItem.images[4], thumbnail: productDetailItem.images[4] },
    { original: productDetailItem.images[5], thumbnail: productDetailItem.images[5] },
  ]

  const handleCommentForm = (values) => {
    dispatch(createCommentAction({ id, token, rate: values.rate, comment: values.comment }))
    form.resetFields()
  }

  const addToCartHandler = () => {
    dispatch(addCartItemAction({ id, qty, size: chooseSize }))
    notification.success({
      message: `Add to cart successfully`,
      btn: (
        <Button
          icon={<ShoppingCartOutlined />}
          type='primary'
          size='middle'
          onClick={() => navigate(ROUTES.USER.CART)}
        >
          Check your cart
        </Button>
      ),
    })
  }

  const renderDescription = useMemo(() => {
    const description = productDetailItem.description
    return description.map((item, index) => {
      return <li key={index}> {item}</li>
    })
  }, [productDetailItem])

  const renderCommentForm = useMemo(() => {
    if (!userLoginInfo._id) {
      return (
        <Card style={{ height: 120, marginTop: 20 }} size='small'>
          <div>Bạn cần đăng nhập để có thể nhận xét !</div>
          <br />
          <Link to={ROUTES.LOGIN}>
            <Button type='primary'>Đăng nhập</Button>
          </Link>
        </Card>
      )
    }
    return (
      <Card
        style={{ height: 330, marginTop: 20, padding: 20 }}
        size='small'
        title='Viết đánh giá của bạn:'
      >
        <Form
          name='comment-form'
          form={form}
          onFinish={(values) => {
            handleCommentForm(values)
          }}
        >
          <Form.Item
            name='rate'
            label='Đánh giá:'
            rules={[{ required: true, message: 'Xin chọn số điểm rating!' }]}
          >
            <Rate allowHalf />
          </Form.Item>
          <Form.Item
            name='comment'
            label='Nội dung:'
            rules={[{ required: true, message: 'Hãy viết vài dòng nhận xét trước khi đánh giá!' }]}
          >
            <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} placeholder='Nhận xét của bạn:' />
          </Form.Item>
          <Button htmlType='submit' type='primary'>
            Viết đánh giá
          </Button>
        </Form>
      </Card>
    )
  }, [userLoginInfo])

  const renderCommentList = useMemo(() => {
    return reviews.map((item, index) => {
      return (
        <Card
          title={`Đánh giá của : ${item.name}`}
          style={{ height: 150, padding: '20px', marginTop: 10, fontFamily: 'Prompt' }}
          key={index}
          size='small'
        >
          <div>
            <span>{moment(item.createAt).fromNow()}</span>
          </div>
          <div>
            <Rate allowHalf defaultValue={item.rating} disabled />
          </div>
          <div>{item.comment}</div>
        </Card>
      )
    })
  }, [reviews])

  useEffect(() => {
    dispatch(getProductDetailAction({ productId: id }))
  }, [])

  return (
    <section className='sectionWrapper'>
      <div className='container'>
        <Row gutter={16}>
          {loading ? (
            <SpinnerLoading />
          ) : error ? (
            <ErrorMessage message={error.message} />
          ) : (
            <>
              <Col xs={24} sm={24} md={12} lg={12}>
                <ImageGallery
                  items={images}
                  thumbnailPosition='left'
                  showNav={false}
                  showPlayButton={false}
                  showBullets
                  infinite
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Card style={{ padding: '20px 0' }} title={productDetailItem.name}>
                  <div>
                    <ProductRating rating={productDetailItem.rating} /> of{' '}
                    {productDetailItem.numReviews} reviews
                  </div>
                  <div style={{ padding: '20px 0px' }}>
                    {productDetailItem.price.toLocaleString('it-IT', {
                      style: 'currency',
                      currency: 'vnd',
                    })}
                  </div>
                  <div>
                    <p>Detail: </p>
                    <ul style={{ listStyleType: 'none' }}>{renderDescription}</ul>
                  </div>
                  <div className='productDetail__hr'></div>
                  <div>
                    <p style={{ letterSpacing: 2, fontSize: 11 }}>CHOOSE SIZE</p>
                    <Space style={{ flexWrap: 'wrap' }}>
                      <button
                        onClick={() => {
                          setChooseSize('s')
                        }}
                        className={`sizeBtn ${
                          productDetailItem.countInStock.s <= 0 ? 'sizeBtnOutOfStock' : ''
                        }
                  ${chooseSize === 's' ? 'sizeBtnActive' : ''}
                  `}
                      >
                        S
                      </button>
                      <button
                        onClick={() => {
                          setChooseSize('m')
                        }}
                        className={`sizeBtn ${
                          productDetailItem.countInStock.m <= 0 ? 'sizeBtnOutOfStock' : ''
                        }
                  ${chooseSize === 'm' ? 'sizeBtnActive' : ''}
                  `}
                      >
                        M
                      </button>
                      <button
                        onClick={() => {
                          setChooseSize('l')
                        }}
                        className={`sizeBtn ${
                          productDetailItem.countInStock.l <= 0 ? 'sizeBtnOutOfStock' : ''
                        }
                  ${chooseSize === 'l' ? 'sizeBtnActive' : ''}
                    `}
                      >
                        L
                      </button>
                      <button
                        onClick={() => {
                          setChooseSize('xl')
                        }}
                        className={`sizeBtn ${
                          productDetailItem.countInStock.xl <= 0 ? 'sizeBtnOutOfStock' : ''
                        }
                  ${chooseSize === 'xl' ? 'sizeBtnActive' : ''}
                  `}
                      >
                        XL
                      </button>
                      <button
                        onClick={() => {
                          setChooseSize('xxl')
                        }}
                        className={`sizeBtn ${
                          productDetailItem.countInStock.xxl <= 0 ? 'sizeBtnOutOfStock' : ''
                        }
                  ${chooseSize === 'xxl' ? 'sizeBtnActive' : ''}`}
                      >
                        XXL
                      </button>
                    </Space>
                  </div>
                  <div style={{ paddingTop: 20 }}>
                    <Button
                      disabled={
                        chooseSize === '' || productDetailItem.countInStock[chooseSize] === 0
                      }
                      style={{ width: '100%', letterSpacing: 2 }}
                      size='large'
                      type='primary'
                      onClick={() => {
                        addToCartHandler()
                      }}
                    >
                      {chooseSize === ''
                        ? 'CHOOSE SIZE FIRST'
                        : productDetailItem.countInStock[chooseSize] === 0
                        ? 'OUT OF STOCK'
                        : 'ADD TO CART'}
                    </Button>
                  </div>
                  <div className='productDetail__hr'></div>
                  <div>
                    <Collapse collapsible='header'>
                      <Panel header='Hướng dẫn bảo quản sản phẩm'>
                        <p>
                          <b>Tips:</b> Để vệ sinh và bảo quản sản phẩm một cách tốt nhất trước tiên
                          sản phẩm cần được phân loại theo chất liệu, cân nặng và màu sắc với nhau.
                        </p>
                        <p>
                          - Theo chất liệu: Các sản phẩm từ Cotton không nên giặt chung với jean và
                          các chất liệu có tính co giãn như Polyester, Spandex…
                        </p>
                        <p>
                          - Theo cân nặng: Các sản phẩm có độ dày và nặng không nên giặt chung với
                          các sản phẩm nhẹ như tee, shirt…
                        </p>
                        <p>
                          - Theo màu sắc: Các sản phẩm có màu sáng như (trắng, xám nhạt, beige,
                          cream, nude) không nên giặt chung với các sản phẩm tối màu (đen, xám đậm,
                          xám than) và các sản phẩm có màu nổi (đỏ,cam, vàng, neon…) Đối với sản
                          phẩm mới.
                        </p>
                      </Panel>
                    </Collapse>
                  </div>
                </Card>
              </Col>
            </>
          )}
        </Row>
        <br />
        <br />
        <p>Đánh giá sản phẩm:</p>
        {renderCommentList}
        {renderCommentForm}
      </div>
    </section>
  )
}

export default ProductDetailPage
