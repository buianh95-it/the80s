import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams, useNavigate, generatePath } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  Card,
  List,
  InputNumber,
  Input,
  Popconfirm,
  Space,
} from 'antd'
import { updateCartItemAction, removeCartItemAction } from '../../redux/actions'
import { ROUTES } from '../../constants/routes.js'
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons'
import './style.css'

const CartPage = () => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const size = searchParams.get('size')

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const checkOutHandler = () => {
    navigate('/shipping')
  }

  const renderCartItems = useMemo(() => {
    return cartItems.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Image width={90} height={120} src={item.image}></Image>
          </td>
          <td>
            <Link to={`/products/${item.product}`}> {item.name} </Link>{' '}
          </td>
          <td>{item.size.toUpperCase()}</td>

          <td>
            <InputNumber
              min={1}
              max={10}
              defaultValue={item.qty}
              onChange={(value) =>
                dispatch(
                  updateCartItemAction({ product: item.product, size: item.size, qty: value })
                )
              }
            ></InputNumber>
          </td>
          <td>
            {(item.price * item.qty).toLocaleString('it-IT', {
              style: 'currency',
              currency: 'vnd',
            })}
          </td>

          <td>
            <Popconfirm
              placement='top'
              title={`Remove this item from cart?`}
              onConfirm={() =>
                dispatch(removeCartItemAction({ product: item.product, size: item.size }))
              }
              okText='Yes'
              cancelText='No'
            >
              <Button size='large' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </td>
        </tr>
      )
    })
  }, [cartItems])

  return (
    <section className='sectionWrapper'>
      <div className='container'>
        <h4 className='product-title'>SHOPPING CART</h4>
        <Row gutter={48} style={{ padding: '0px 20px', marginTop: 50 }}>
          {cartItems.length === 0 ? (
            <p style={{ width: '100%', textAlign: 'center' }}>
              You don't have any item in your cart{' '}
              <Link to={ROUTES.USER.PRODUCT_LIST_ALL}>
                &nbsp;&nbsp;
                <Button type='primary'>SHOPPING NOW</Button>
              </Link>
            </p>
          ) : (
            <>
              <Col md={16}>
                <table>
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th style={{ width: 200 }}>Tên sản phẩm</th>
                      <th>Size</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th>Xóa</th>
                    </tr>
                  </thead>
                  <tbody>{renderCartItems}</tbody>
                </table>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <Card style={{ padding: '20px 0', height: 280 }} bordered={false} title='DETAIL'>
                  <h3>Total: {cartItems.reduce((acc, item) => item.qty + acc, 0)} items </h3>
                  <br />
                  <h3>
                    Sum:{' '}
                    {cartItems
                      .reduce((acc, item) => item.price * item.qty + acc, 0)
                      .toLocaleString('it-IT', {
                        style: 'currency',
                        currency: 'vnd',
                      })}
                  </h3>
                  <br />
                  <div>
                    {' '}
                    <Button
                      icon={<ShoppingOutlined />}
                      size='large'
                      style={{ width: '100%' }}
                      type='primary'
                      onClick={() => checkOutHandler()}
                    >
                      {' '}
                      CHECK OUT NOW
                    </Button>
                  </div>
                </Card>
              </Col>
            </>
          )}
        </Row>
      </div>
    </section>
  )
}

export default CartPage
