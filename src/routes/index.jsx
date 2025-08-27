import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StickyHeader from '../components/StickyHeader'
import App from '../App'
import ProductsPage from '../pages/ProductsPage'
import DealersPage from '../pages/DealersPage'
import AboutPage from '../pages/AboutPage'
import DiamondWarrantyPage from '../pages/DiamondWarrantyPage'
import ContactPage from '../pages/ContactPage'
import ScrollToTop from '../components/scrolltop'
import FaqPage from '../pages/FaqPage'

export default function PageRouter() {
   
    return (
      <>
   <ScrollToTop />
        <Routes>
            <Route path="/" element={<DiamondWarrantyPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/dealers" element={<DealersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />

            </Routes>
      </>

)}