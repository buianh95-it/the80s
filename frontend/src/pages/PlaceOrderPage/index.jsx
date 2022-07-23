import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Steps, Radio, Row, Col, Card } from 'antd'
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { createOrderAction } from '../../redux/actions'

const PlaceOrderPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress, paymentMethod } = cart
  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  const { token } = userLoginInfo
  // Calculate total prices:
  const totalPrices = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)

  const placeOrderHandler = () => {
    const order = {
      orderItems: cartItems,
      shippingAddress,
      totalPrice: totalPrices,
      shippingPrice: cart.shippingPrice ? cart.shippingPrice : 0,
      paymentMethod,
    }
    dispatch(
      createOrderAction({
        callback: {
          success: () => {
            navigate('/order-success')
          },
        },
        order,
        token,
      })
    )
  }
  return (
    <>
      <section className='sectionWrapper'>
        <div className='container'>
          <Steps style={{ marginBottom: 50 }}>
            <Steps.Step status='finish' title='Giỏ hàng' icon={<ShoppingCartOutlined />} />
            <Steps.Step status='finish' title='Thông tin giao hàng' icon={<IdcardOutlined />} />
            <Steps.Step status='finish' title='Thanh toán' icon={<CreditCardOutlined />} />
            <Steps.Step status='procress' title='Đặt hàng' icon={<CheckCircleOutlined />} />
          </Steps>
          <h4 className='product-title'>Đặt hàng</h4>
          <Row gutter={[8, 8]}>
            <Col md={16} sm={16}>
              <Card
                className='placeOrder-sm-1'
                style={{ padding: ' 10px 0' }}
                title='Thông tin giao hàng'
              >
                <p>
                  <strong>Địa chỉ: </strong>
                  {cart.shippingAddress.address}, {cart.shippingAddress.wards},{' '}
                  {cart.shippingAddress.city}, {cart.shippingAddress.country}
                </p>
                <p>
                  <strong>Phương thức: </strong>
                  {cart.paymentMethod === 'payAfter'
                    ? 'Thanh toán khi nhận hàng'
                    : 'Thanh toán bằng paypal'}
                </p>
                <div>
                  <strong>Giỏ hàng: </strong>

                  {cart.cartItems.map((item, index) => (
                    <Card style={{ marginTop: 10, height: 120 }}>
                      <Row gutter={[8, 8]} key={index} style={{ alignItems: 'center' }}>
                        <Col xs={24} sm={24} md={4} lg={4}>
                          <img style={{ width: 60, height: 80 }} src={item.image} alt={item.name} />
                        </Col>
                        <Col xs={24} sm={24} md={14} lg={14}>
                          <Link to={`/products/${item.product}`}> {item.name}</Link>
                        </Col>

                        <Col xs={24} sm={24} md={6} lg={6}>
                          {item.qty} x {item.price.toLocaleString()} ={' '}
                          {(item.qty * item.price).toLocaleString()}
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Card className='placeOrder-sm' style={{ padding: ' 10px 0' }} title='Summary'>
                <p>
                  <strong>Thành tiền : </strong>
                  {totalPrices.toLocaleString()} đ
                </p>
                <p>
                  <strong>Phí vận chuyển: </strong>0 vnđ
                </p>
                <div>
                  <Button
                    style={{ width: '100%' }}
                    type='primary'
                    htmlType='button'
                    onClick={placeOrderHandler}
                  >
                    Đặt hàng
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default PlaceOrderPage
