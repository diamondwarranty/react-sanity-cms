import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../pages/ProductsPage'
import DealersPage from '../pages/DealersPage'
import AboutPage from '../pages/AboutPage'
import DiamondWarrantyPage from '../pages/DiamondWarrantyPage'
import ContactPage from '../pages/ContactPage'
import FaqPage from '../pages/FaqPage'
import ClaimPage from '../pages/ClaimPage'
import TermsPage from '../pages/TermsPage'
import Layout from '../components/Layout'

export default function PageRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<DiamondWarrantyPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="dealers" element={<DealersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="claim" element={<ClaimPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>
    </Routes>
  )
}