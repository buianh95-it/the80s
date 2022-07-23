import React, { useState, useEffect } from 'react'
import {
  Col,
  Row,
  Tooltip,
  Menu,
  Drawer,
  Button,
  Modal,
  Space,
  Input,
  Dropdown,
  notification,
  Badge,
} from 'antd'
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { ROUTES } from '../../constants/routes.js'
import { Link, useNavigate, generatePath } from 'react-router-dom'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLoutOutAction } from '../../redux/actions'

const { Search } = Input
const MenuItemGroup = Menu.ItemGroup
const SubMenu = Menu.SubMenu

const Header = ({ scrolled, setScrolled }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const userInfoSave = JSON.parse(localStorage.getItem('userInfo'))
  const { cartItems } = useSelector((state) => state.cart)

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const showFixedNav = () => {
    const offset = window.scrollY
    setScrolled(offset > 100)
  }

  const onSearch = (value) => {
    if (value) {
      const path = generatePath(ROUTES.USER.SEARCH, { keyword: value })
      navigate(path)
    } else {
      const path = generatePath(ROUTES.USER.SEARCH, { keyword: 'all' })
      navigate(path)
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem('userInfo')
    dispatch(userLoutOutAction())
    notification.info({ message: 'You have been logged out!' })
    navigate(ROUTES.USER.HOME)
  }

  useEffect(() => {
    window.addEventListener('scroll', showFixedNav)
    return () => {
      window.removeEventListener('scroll', showFixedNav)
    }
  }, [])

  return (
    <header id='mainHeader' className={scrolled ? 'scrolled' : ''}>
      <div className='container'>
        <Row className='mainHeader--wrapper'>
          <Col
            className='mainHeader__leftNav--wrapper'
            style={{ paddingTop: 30 }}
            type='flex'
            align='left'
            xs={0}
            sm={0}
            md={4}
            lg={4}
          >
            {' '}
            <div className='mainHeader--searchBtn'>
              <Tooltip title='You are looking for?'>
                <SearchOutlined style={{ fontSize: 30 }} onClick={() => setModalVisible(true)} />
              </Tooltip>
            </div>
          </Col>
          <Col type='flex' align='middle' xs={18} sm={18} md={16} lg={16}>
            <h1 className='mainHeader--logo'>THE 80S STORE&reg;</h1>

            <div className='mobile-hidden'>
              <Menu
                className='mainHeader--mainMenu'
                mode='horizontal'
                defaultSelectedKeys={['home']}
                inlineCollapsed={false}
              >
                <Menu.Item key='home'>
                  <Link to={ROUTES.USER.HOME}>HOME</Link>
                </Menu.Item>

                <SubMenu key='shop' title='SHOP'>
                  <MenuItemGroup>
                    <Menu.Item key='shop1'>
                      {' '}
                      <Link to={ROUTES.USER.PRODUCT_LIST_ALL}>ALL PRODUCTS</Link>
                    </Menu.Item>
                    <Menu.Item key='shop2'>
                      {' '}
                      <Link to={ROUTES.USER.PRODUCT_LIST_HOODIE}>HOODIE JACKETS</Link>
                    </Menu.Item>
                    <Menu.Item key='shop3'>
                      <Link to={ROUTES.USER.PRODUCT_LIST_PANTS}>PANTS</Link>
                    </Menu.Item>
                  </MenuItemGroup>
                </SubMenu>

                <Menu.Item key='blog'>
                  <Link to={ROUTES.USER.BLOG}>BLOG</Link>
                </Menu.Item>

                <Menu.Item key='membership'>
                  <Link to={ROUTES.USER.MEMBERSHIP}>MEMBERSHIP++</Link>
                </Menu.Item>

                <Menu.Item key='about'>
                  <Link to={ROUTES.USER.ABOUT}>ABOUT US</Link>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col
            className='mainHeader__rightNav--wrapper'
            style={{ paddingTop: 30 }}
            type='flex'
            align='right'
            xs={4}
            sm={4}
            md={4}
            lg={4}
          >
            <div className='mobile-visible'>
              <Button className='mainHeader--openMenuBtn' type='primary' onClick={showDrawer}>
                <i className='fas fa-bars'></i>
              </Button>
              <Drawer placement='right' onClose={onClose} visible={visible}>
                <Menu mode='vertical' defaultSelectedKeys={['home']}>
                  <Menu.Item key='home'>
                    <Link
                      onClick={() => {
                        setVisible(false)
                      }}
                      to={ROUTES.USER.HOME}
                    >
                      HOME
                    </Link>
                  </Menu.Item>

                  <SubMenu key='shop' title={'SHOP'}>
                    <MenuItemGroup>
                      <Menu.Item key='shop1'>
                        {' '}
                        <Link to={ROUTES.USER.PRODUCT_LIST_ALL}>ALL PRODUCTS</Link>
                      </Menu.Item>
                      <Menu.Item key='shop2'>
                        {' '}
                        <Link
                          onClick={() => {
                            setVisible(false)
                          }}
                          to={ROUTES.USER.PRODUCT_LIST_HOODIE}
                        >
                          HOODIE JACKETS
                        </Link>
                      </Menu.Item>
                      <Menu.Item key='shop3'>
                        <Link
                          onClick={() => {
                            setVisible(false)
                          }}
                          to={ROUTES.USER.PRODUCT_LIST_PANTS}
                        >
                          PANTS
                        </Link>
                      </Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>

                  <Menu.Item key='blog'>
                    <Link
                      onClick={() => {
                        setVisible(false)
                      }}
                      to={ROUTES.USER.BLOG}
                    >
                      BLOG
                    </Link>
                  </Menu.Item>

                  <Menu.Item key='membership'>
                    <Link
                      onClick={() => {
                        setVisible(false)
                      }}
                      to={ROUTES.USER.MEMBERSHIP}
                    >
                      MEMBERSHIP++
                    </Link>
                  </Menu.Item>

                  <Menu.Item key='about'>
                    <Link
                      onClick={() => {
                        setVisible(false)
                      }}
                      to={ROUTES.USER.ABOUT}
                    >
                      ABOUT US
                    </Link>
                  </Menu.Item>

                  <Menu.Item key='search'>
                    <Button
                      onClick={() => {
                        setModalVisible(true)
                        setVisible(false)
                      }}
                      icon={<SearchOutlined />}
                    >
                      Find product
                    </Button>
                  </Menu.Item>
                </Menu>
              </Drawer>
            </div>{' '}
            <div className='mainHeader__rightNav'>
              <Space>
                {userInfoSave ? (
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key='user-info' icon={<UserOutlined />}>
                          <Link to={ROUTES.USER.MY_PROFILE}>My profile</Link>
                        </Menu.Item>
                        <Menu.Item
                          key='user-logout'
                          icon={<LogoutOutlined />}
                          onClick={() => handleLogOut()}
                        >
                          Sign out
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <div style={{ cursor: 'pointer' }}>
                      Hi,&nbsp;
                      <img
                        src={userInfoSave.image}
                        alt='user avatar'
                        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                      />
                    </div>
                  </Dropdown>
                ) : (
                  <>
                    {' '}
                    <Tooltip title='Login / Register'>
                      <UserOutlined
                        style={{ fontSize: 30 }}
                        onClick={() => navigate(ROUTES.LOGIN)}
                      />
                    </Tooltip>{' '}
                  </>
                )}
                <Tooltip title='Check your cart'>
                  <Badge count={cartItems.length}>
                    <ShoppingCartOutlined
                      style={{ fontSize: 30 }}
                      onClick={() => navigate(ROUTES.USER.CART)}
                    />
                  </Badge>
                </Tooltip>
              </Space>
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        style={{
          top: 0,
        }}
        width='100vw'
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <Space style={{ paddingTop: 8 }}>
          <SearchOutlined style={{ fontSize: 30 }} />
          <Search
            placeholder='Enter the products name...'
            allowClear
            enterButton='Find'
            size='medium'
            onSearch={onSearch}
          />
        </Space>
      </Modal>
    </header>
  )
}

export default Header
