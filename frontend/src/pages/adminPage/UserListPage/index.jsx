import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, generatePath, useParams, Navigate } from 'react-router-dom'
import { Row, Card, Button, Table, Space, Pagination, Popconfirm, Input } from 'antd'
import { ROUTES } from '../../../constants/routes.js'
import { getAllUsersAction, getAllEmailSubAction } from '../../../redux/actions'
import HeroBanner from '../../../globalComponents/HeroBanner/index.jsx'
import ErrorMessage from '../../../globalComponents/ErrorMessage/index.jsx'
import moment from 'moment'

const UserListPage = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.user.userList)
  const { users, loading, error, meta } = userList
  const emailList = useSelector((state) => state.user.emailList)
  const { emails, loading: emailLoading, error: emailError } = emailList

  const pageNumber = 1

  const handleChangePage = (page) => {
    dispatch(getAllUsersAction({ pageNumber: page }))
  }

  useEffect(() => {
    dispatch(getAllUsersAction({ pageNumber }))
    dispatch(getAllEmailSubAction({ pageNumber }))
  }, [])

  const tableColumns = [
    {
      title: 'User Avatar',
      dataIndex: 'image',
      render: (dataIndex) => (
        <img style={{ width: 50, height: 50, borderRadius: '50%' }} src={dataIndex} alt='img' />
      ),
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'PHONE',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'GENDER',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'CREATE AT',
      dataIndex: 'createAt',
      key: 'createAt',
      render: (data) => moment(data).format('MMMM Do YYYY, h:mm:ss a'),
    },
  ]

  const tableData = users.map((user) => {
    return {
      key: user._id,
      image: user.image,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      createdAt: user.createdAt,
    }
  })

  const emailTableColumns = [
    {
      title: 'EMAIL',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'CREATE AT',
      dataIndex: 'createAt',
      key: 'createAt',
      render: (data) => moment(data).format('MMMM Do YYYY, h:mm:ss a'),
    },
  ]

  const emailTableData = emails.map((user) => {
    return {
      key: user._id,
      email: user.email,

      createdAt: user.createdAt,
    }
  })

  const userLoginInfo = useSelector((state) => state.user.userLogin.userInfo)
  if (userLoginInfo.isAdmin === false) {
    return <Navigate to={ROUTES.USER.HOME} />
  }
  return (
    <>
      <HeroBanner location='admin / users-list' />
      <section className='sectionWrapper'>
        <div className='container'>
          <h3 style={{ textAlign: 'center', marginBottom: 50 }}>USERS MANAGEMENT</h3>

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
        <br />
        <br />
        <div className='container'>
          <h3 style={{ textAlign: 'center', marginBottom: 50 }}>EMAIL SUBSCRIPTION</h3>

          {error ? <ErrorMessage error={error.message} /> : null}
          <Table
            style={{ fontFamily: 'Arial' }}
            columns={emailTableColumns}
            dataSource={emailTableData}
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

export default UserListPage
