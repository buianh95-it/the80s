import React from 'react'
import HeroBanner from '../../globalComponents/HeroBanner'
import { Row, Col, Card, Menu, Button } from 'antd'
import { Outlet, Navigate, Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.js'
import { useSelector } from 'react-redux'
import { UserOutlined, HistoryOutlined, LockOutlined } from '@ant-design/icons'
const UserProfileLayout = () => {
  const userLogin = useSelector((state) => state.user.userLogin)
  const { userInfo } = userLogin

  const userInfoSave = localStorage.getItem('userInfo')
  if (!userInfoSave) return <Navigate to={ROUTES.USER.HOME} />
  return (
    <>
      <HeroBanner location='my-profile' />
      <section className='sectionWrapper userProfile'>
        <div className='container'>
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <Card>
                <div className='userProfile__avt'>
                  <img alt='user avatar' src={userInfo.image} />{' '}
                </div>
                <div className='profile__nav'>
                  <Menu mode='vertical' defaultSelectedKeys={['my-profile']}>
                    <Menu.Item key='my-profile' icon={<UserOutlined />}>
                      <Link to={ROUTES.USER.MY_PROFILE}>MY PROFILE</Link>
                    </Menu.Item>

                    <Menu.Item key='order-history' icon={<HistoryOutlined />}>
                      <Link to={ROUTES.USER.ORDER_HISTORY}>ORDER HISTORY</Link>
                    </Menu.Item>

                    <Menu.Item key='change-password' icon={<LockOutlined />}>
                      <Link to={ROUTES.USER.CHANGE_PASSWORD}>CHANGE PASSWORD</Link>
                    </Menu.Item>
                  </Menu>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
              <Card style={{ padding: 15, height: '100%' }}>
                <Outlet />
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default UserProfileLayout
