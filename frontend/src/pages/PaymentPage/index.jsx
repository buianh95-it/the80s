import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, Steps, Radio } from 'antd'
import {
  ShoppingCartOutlined,
  IdcardOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { savePaymentMethodAction } from '../../redux/actions'
import { FaCcPaypal, FaMoneyBillAlt } from 'react-icons/fa'

const PaymentPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState('payAfter')
  const handlePaymentSubmit = (values) => {
    dispatch(savePaymentMethodAction({ paymentMethod: values.paymentMethod }))
    navigate('/place-order')
  }
  return (
    <>
      <section className='sectionWrapper'>
        <div className='container'>
          <Steps style={{ marginBottom: 50 }}>
            <Steps.Step status='finish' title='Giỏ hàng' icon={<ShoppingCartOutlined />} />
            <Steps.Step status='finish' title='Thông tin giao hàng' icon={<IdcardOutlined />} />
            <Steps.Step status='process' title='Thanh toán' icon={<CreditCardOutlined />} />
            <Steps.Step status='wait' title='Đặt hàng' icon={<CheckCircleOutlined />} />
          </Steps>
          <h4 className='product-title'>Thanh toán</h4>
          <Form
            layout='vertical'
            name='basic'
            onFinish={(values) => handlePaymentSubmit(values)}
            autoComplete='off'
            initialValues={{
              paymentMethod,
            }}
          >
            <Form.Item label='Phương thức thanh toán' name='paymentMethod'>
              <Radio.Group onChange={(e) => setPaymentMethod(e.target.value)}>
                <Radio value='payAfter' style={{ display: 'block' }}>
                  {' '}
                  <FaMoneyBillAlt size={30} /> &nbsp; Thanh toán tiền khi nhận hàng{' '}
                </Radio>
                <Radio value='Paypal' style={{ display: 'block' }}>
                  {' '}
                  <FaCcPaypal size={30} /> &nbsp; Thanh toán bằng Paypal
                </Radio>
              </Radio.Group>
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

export default PaymentPage
