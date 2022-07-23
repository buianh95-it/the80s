import React from 'react'
import AdminHeader from '../AdminHeader'
import AdminFooter from '../AdminFooter'
import HeroBanner from '../../globalComponents/HeroBanner'
import { Row, Col, Card, Menu } from 'antd'
import { Outlet, Link, Navigate } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.js'
import { useSelector } from 'react-redux'
import { DatabaseOutlined, UserSwitchOutlined, ShoppingCartOutlined } from '@ant-design/icons'

const AdminLayout = ({ scrolled, setScrolled }) => {
  const userLogin = useSelector((state) => state.user.userLogin)
  const { userInfo } = userLogin
  const userInfoSave = localStorage.getItem('userInfo')
  if (!userInfoSave) return <Navigate to={ROUTES.USER.HOME} />
  return (
    <>
      <AdminHeader scrolled={scrolled} setScrolled={setScrolled} />
      <Outlet />
      <AdminFooter />
    </>
  )
}

export default AdminLayout
