import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, generatePath, useParams, Navigate } from 'react-router-dom'
import { Table, Pagination } from 'antd'
import { ROUTES } from '../../../constants/routes.js'
import { getAllOrderAction } from '../../../redux/actions'
import HeroBanner from '../../../globalComponents/HeroBanner/index.jsx'
import ErrorMessage from '../../../globalComponents/ErrorMessage/index.jsx'
import moment from 'moment'

const OrderListPage = () => {
  const dispatch = useDispatch()

  const order = useSelector((state) => state.order)
  const { loading, error, orders, meta } = order

  const pageNumber = 1

  const handleChangePage = (page) => {
    dispatch(getAllOrderAction({ pageNumber: page }))
  }

  useEffect(() => {
    dispatch(getAllOrderAction({ pageNumber }))
  }, [])

  const tableColumns = [
    {
      title: 'NGƯỜI MUA',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'LIÊN HỆ',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'ĐỊA CHỈ',
      dataIndex: 'shippingAddress',
      key: 'shippingAddress',
    },
    {
      title: 'SẢN PHẨM',
      dataIndex: 'orderItems',
      key: 'orderItems',
    },
    {
      title: 'PHƯƠNG THỨC',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'TỔNG TIỀN',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'TÌNH TRẠNG THANH TOÁN',
      dataIndex: 'isPaid',
      key: 'isPaid',
    },
    {
      title: 'TÌNH TRẠNG GIAO HÀNG',
      dataIndex: 'isDelivered',
      key: 'isDelivered',
    },
    {
      title: 'NGÀY TẠO ĐƠN',
      dataIndex: 'createAt',
      key: 'createAt',
    },
  ]

  const tableData = orders.map((order) => {
    return {
      key: order._id,
      user: order.user.name,
      email: `${order.user.email} - ${order.shippingAddress.phone}`,
      shippingAddress: `${order.shippingAddress.address} - ${order.shippingAddress.wards} - ${order.shippingAddress.city} - ${order.shippingAddress.country}`,
      orderItems: order.orderItems.map(
        (item) =>
          `${item.name} | QTY: ${
            item.qty
          } | SIZE: ${item.size.toUpperCase()} | P: ${item.price.toLocaleString()}₫`
      ),
      paymentMethod:
        order.paymentMethod === 'payAfter' ? 'Thanh toán khi nhận hàng' : 'Thanh toán bằng paypal',
      totalPrice: `${order.totalPrice.toLocaleString()}đ`,
      isPaid: order.isPaid ? 'Đã thanh toán' : 'Chưa thanh toán',
      isDelivered: order.isDelivered ? 'Đã giao hàng' : 'Chưa giao hàng',
      createAt: moment(order.createAt).format('MMMM Do YYYY, h:mm:ss a'),
    }
  })

  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  if (userLoginInfo.isAdmin === false) {
    return <Navigate to={ROUTES.USER.HOME} />
  }
  return (
    <>
      <HeroBanner location='admin / orders-list' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h3 style={{ textAlign: 'center', marginBottom: 50 }}>ORDERS MANAGEMENT</h3>

          {error ? <ErrorMessage error={error.message} /> : null}
          <Table
            style={{ fontFamily: 'Arial' }}
            columns={tableColumns}
            dataSource={tableData}
            pagination={false}
            loading={loading}
          />
          <Pagination
            style={{ textAlign: 'center', paddingTop: 30 }}
            current={meta.page}
            total={meta.total}
            pageSize={meta.pageSize}
            onChange={(page) => {
              handleChangePage(page)
            }}
          />
        </div>
      </section>
    </>
  )
}

export default OrderListPage
