import React, { useEffect } from 'react'
import { Row, Card, Button, Table, Space, Pagination } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../../globalComponents/ErrorMessage'
import { getOrderListMyRequest } from '../../../redux/actions'
import moment from 'moment'

const UserHistoryPage = () => {
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.user.userLogin.userInfo.token)
  const order = useSelector((state) => state.order)
  const { loading, error, orders } = order

  useEffect(() => {
    dispatch(getOrderListMyRequest({ token: userToken }))
  }, [])

  const tableColumns = [
    {
      title: 'Ngày mua',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => moment(createdAt).calendar(),
    },
    {
      title: 'SẢN PHẨM',
      dataIndex: 'orderItems',
      key: 'orderItems',
    },
    {
      title: 'Giá trị đơn hàng',
      dataIndex: 'totalPrice',
      key: 'price',
      render: (price, record) => `${price.toLocaleString()}₫`,
    },

    {
      title: 'Địa chỉ nhận hàng',
      dataIndex: 'shippingAddress',
      key: 'brand',
    },

    {
      title: 'Tình trạng giao hàng',
      dataIndex: 'isDelivered',
      key: 'isDelivered',
    },
    {
      title: 'Tình trạng thanh toán',
      dataIndex: 'isPaid',
      key: 'isPaid',
    },
  ]

  const tableData = orders.map((item) => {
    return {
      key: item._id,
      createdAt: item.createdAt,
      totalPrice: item.totalPrice,
      shippingAddress: item.shippingAddress.address,
      orderItems: item.orderItems.map(
        (item) =>
          `${item.name} | QTY: ${
            item.qty
          } | SIZE: ${item.size.toUpperCase()} | P: ${item.price.toLocaleString()}₫`
      ),
      isDelivered: item.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng',
      isPaid: item.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán',
    }
  })

  return (
    <div className='profileWrapper'>
      <h3 style={{ textAlign: 'center', marginBottom: 50 }}>ORDERS HISTORY</h3>
      {error ? <ErrorMessage error={error.message} /> : null}
      <Table
        style={{ fontFamily: 'Arial' }}
        columns={tableColumns}
        dataSource={tableData}
        pagination={false}
        loading={loading}
      />
    </div>
  )
}

export default UserHistoryPage
