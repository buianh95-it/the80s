import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from './../Footer'

const UserLayout = ({ scrolled, setScrolled }) => {
  return (
    <>
      <Header scrolled={scrolled} setScrolled={setScrolled} />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
