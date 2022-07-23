import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Steps } from 'antd'
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { saveCartAction } from '../../redux/actions'

const ShippingPage = () => {
  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()

  const handleShippingSubmit = (values) => {
    const shippingAddress = {
      phone: values.phone,
      address: values.address,
      houseNumber: values.houseNumber,
      wards: values.wards,
      city: values.city,
      country: values.country,
    }
    dispatch(saveCartAction({ shippingAddress }))
    navigate('/payment')
  }

  return (
    <>
      <section className='sectionWrapper'>
        <div className='container'>
          <Steps style={{ marginBottom: 50 }}>
            <Steps.Step status='finish' title='Giỏ hàng' icon={<ShoppingCartOutlined />} />
            <Steps.Step status='process' title='Thông tin giao hàng' icon={<IdcardOutlined />} />
            <Steps.Step status='wait' title='Thanh toán' icon={<CreditCardOutlined />} />
            <Steps.Step status='wait' title='Đặt hàng' icon={<CheckCircleOutlined />} />
          </Steps>
          <h4 className='product-title'>Địa chỉ giao hàng</h4>
          <Form
            layout='vertical'
            name='basic'
            onFinish={(values) => handleShippingSubmit(values)}
            autoComplete='off'
            initialValues={{
              phone: shippingAddress.phone,
              address: shippingAddress.address,
              houseNumber: shippingAddress.houseNumber,
              wards: shippingAddress.wards,
              city: shippingAddress.city,
              country: shippingAddress.country,
            }}
          >
            <Form.Item
              label='Số điện thoại người nhận:'
              name='phone'
              rules={[
                { required: true, message: 'Please enter your phonenumber' },
                { pattern: /^[0-9]{10}$/, message: 'Please enter 10 digits' },
              ]}
            >
              <Input type='text' />
            </Form.Item>

            <Form.Item
              label='Địa chỉ(số nhà, tên đường):'
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Please input your address!',
                },
              ]}
            >
              <Input type='text' />
            </Form.Item>

            <Form.Item label='Số căn hộ chung cư(Nếu có):' name='houseNumber'>
              <Input type='text' />
            </Form.Item>

            <Form.Item label='Phường ( hoặc Xã)' name='wards'>
              <Input type='text' />
            </Form.Item>

            <Form.Item
              label='Thành phố:'
              name='city'
              rules={[{ required: true, message: 'Nhập thông tin thành phố' }]}
            >
              <Input type='text' />
            </Form.Item>
            <Form.Item label='Tỉnh:' name='country'>
              <Input type='text' />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Tiếp tục
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  )
}

export default ShippingPage
