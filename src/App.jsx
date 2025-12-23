import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import CheckoutIntegration from './pages/Accept_Payments/Checkout/CheckoutIntegration'
import Solution from './pages/Accept_Payments/Solutions/Solution'
import Demo from './pages/Accept_Payments/Demo/Demo'
import PaymentBill from './pages/Accept_Payments/PaymentBill/PaymentBill'
import AcceptPlugins from './pages/Accept_Payments/Plugin/AcceptPlugins'
import CryptoPayout from './pages/Manage_Exchange/Crypto/CryptoPayout'
import DepositWithdrawal from './pages/Manage_Exchange/Deposit/DepositWithdrawal'
import UserManagement from './pages/Manage_Exchange/UserManage/UserManagement'
import MultiCurrency from './pages/Manage_Exchange/MultiCurrency/MultiCurrency'
import MerchantRefunds from './pages/Manage_Exchange/Merchant/MerchantRefunds'
import Pricing from './pages/Pricing/Pricing'
import PersonalSolutions from './pages/BuyAndSell/PersonalSolutions'
import BrowseAllCategories from './pages/Merchant_Directory/BrowseAllCategories/BrowseAllCategories'

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout-integration" element={<CheckoutIntegration />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/payment-bill" element={<PaymentBill />} />
        <Route path="/accept-plugins" element={<AcceptPlugins />} />
        <Route path="/crypto-payouts" element={<CryptoPayout />} />
        <Route path="/deposit-withdraw" element={<DepositWithdrawal />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/multi-currency" element={<MultiCurrency />} />
        <Route path="/merchant-refunds" element={<MerchantRefunds />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/personal-solutions" element={<PersonalSolutions />} />
        <Route path="/browse-all-categories" element={<BrowseAllCategories />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App