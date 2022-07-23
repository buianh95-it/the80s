import React, { useState } from 'react'
import './App.less'
import 'moment/locale/vi'
import { ROUTES } from './constants/routes'
import { Routes, Route } from 'react-router-dom'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'
import UserProfileLayout from './layouts/UserProfileLayout'

import HomePage from './pages/HomePage/index'
import ShopPage from './pages/ShopPage' // eslint-disable-line
import HoodiePage from './pages/HoodiePage'
import ProductDetailPage from './pages/ProductDetailPage'
import SearchPage from './pages/SearchPage'
import CartPage from './pages/CartPage'
import ScrollToTop from './globalComponents/ScrollToTop'
import JeanPage from './pages/JeanPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserProfilePage from './pages/userProfile/UserProfilePage'
import ProductsAdminPage from './pages/adminPage/ProductsAdminPage'
import ChangePassPage from './pages/userProfile/ChangePassPage'
import AddProductPage from './pages/adminPage/AddProductPage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import SuccessPage from './pages/SuccessPage'
import UserHistoryPage from './pages/userProfile/UserHistoryPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogPage/BlogDetailPage'
import MembershipPage from './pages/MembershipPage'
import AboutUsPage from './pages/AboutUsPage'
import EditProductPage from './pages/adminPage/EditProductPage'
import UserListPage from './pages/adminPage/UserListPage'
import OrdersListPage from './pages/adminPage/OrdersListPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  const [scrolled, setScrolled] = useState(false)

  return (
    <ScrollToTop>
      <Routes>
        <Route element={<UserLayout scrolled={scrolled} setScrolled={setScrolled} />}>
          <Route path={ROUTES.USER.HOME} element={<HomePage scrolled={scrolled} />} />
          <Route path={ROUTES.USER.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST_ALL} element={<ShopPage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST_HOODIE} element={<HoodiePage />} />
          <Route path={ROUTES.USER.PRODUCT_LIST_PANTS} element={<JeanPage />} />
          <Route path={ROUTES.USER.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.USER.BLOG} element={<BlogPage />} />
          <Route path='/blog-detail' element={<BlogDetailPage />} />
          <Route path={ROUTES.USER.MEMBERSHIP} element={<MembershipPage />} />
          <Route path={ROUTES.USER.ABOUT} element={<AboutUsPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path={ROUTES.USER.CART}>
            <Route index element={<CartPage />} />
            <Route path=':id' element={<CartPage />} />
          </Route>

          <Route path={'/shipping'} element={<ShippingPage />} />
          <Route path={'/payment'} element={<PaymentPage />} />
          <Route path={'/place-order'} element={<PlaceOrderPage />} />
          <Route path={'/order-success'} element={<SuccessPage />} />

          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

          <Route element={<UserProfileLayout />}>
            <Route path={ROUTES.USER.MY_PROFILE} element={<UserProfilePage />} />
            <Route path={ROUTES.USER.CHANGE_PASSWORD} element={<ChangePassPage />} />
            <Route path='/order-history' element={<UserHistoryPage />} />
          </Route>
        </Route>

        <Route element={<AdminLayout scrolled={scrolled} setScrolled={setScrolled} />}>
          <Route path={ROUTES.ADMIN.PRODUCT_LIST} element={<ProductsAdminPage />} />
          <Route path={ROUTES.ADMIN.ADD_PRODUCT} element={<AddProductPage />} />
          <Route path={`/admin/products/edit/:id`} element={<EditProductPage />} />
          <Route path={ROUTES.ADMIN.USER_LIST} element={<UserListPage />} />
          <Route path={ROUTES.ADMIN.ORDER_LIST} element={<OrdersListPage />} />
        </Route>
      </Routes>
    </ScrollToTop>
  )
}

export default App
