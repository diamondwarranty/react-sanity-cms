import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import StickyHeader from './StickyHeader'
import ScrollToTop from './scrolltop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <StickyHeader />
      <Outlet />
    </>
  )
}
