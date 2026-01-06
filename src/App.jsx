import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import CheckoutIntegration from './pages/Accept_Payments/Checkout/CheckoutIntegration'
import Bitcoin from './pages/Accept_Payments/Checkout/BitCoin/Bitcoin'
import LiteCoin from './pages/Accept_Payments/Checkout/Litecoin/LiteCoin'
import Ethereum from './pages/Accept_Payments/Checkout/Ethereum/Ethereum'
import BitcoinCash from './pages/Accept_Payments/Checkout/BitcoinCash/BitcoinCash'
import XRP from './pages/Accept_Payments/Checkout/XRP/XRP'
import Tron from './pages/Accept_Payments/Checkout/Tron/Tron'
import Dogecoin from './pages/Accept_Payments/Checkout/DogeCoin/Dogecoin'
import Binancecoin from './pages/Accept_Payments/Checkout/Binancecoin/Binancecoin'
import Polygon from './pages/Accept_Payments/Checkout/Polygon/Polygon'
import USDC from './pages/Accept_Payments/Checkout/USDC/USDC'
import Solana from './pages/Accept_Payments/Checkout/Solana/Solana'
import ShibaInu from './pages/Accept_Payments/Checkout/Shiba/ShibaInu'
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
import Blog from './pages/Laerning_Center/Blog/Blog'
import Legal from './pages/Laerning_Center/Legal/Legal'
import LegalInquiries from './pages/Laerning_Center/Legal/Legal_Inquries/LegalInquries'
import TravelRuleRequest from './pages/Laerning_Center/Legal/Travel_Rule/TravelRuleRequest'
import DataProtection from './pages/Laerning_Center/Legal/DataProtection/DataProtection'
import Complaints from './pages/Laerning_Center/Legal/Complaints/Complaints'
import SupportedCountries from './pages/Laerning_Center/Supported_Countries/SupportedCountries'
import SupportedCurrencies from './pages/Laerning_Center/Supported_Currencies/SupportedCurrencies'
import ExchangeRates from './pages/Laerning_Center/Exchange_Rate/ExchangeRates'
import FAQHelpCenter from './pages/Laerning_Center/FAQ/FAQHelpCenter'
import ContactSales from './pages/Contact_Sales/ContactSales'
import PressEnquiries from './pages/Press_Enquiries/PressEnquiries'
import ContactCompliance from './pages/Contact_Compliance/ContactCompliance'

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/faq-help-center';
  const hideFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/faq-help-center';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout-integration" element={<CheckoutIntegration />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/litecoin" element={<LiteCoin />} />
        <Route path="/ethereum" element={<Ethereum />} />
        <Route path="/bitcoin-cash" element={<BitcoinCash />} />
        <Route path="/xrp" element={<XRP />} />
        <Route path="/tron" element={<Tron />} />
        <Route path="/dogecoin" element={<Dogecoin />} />
        <Route path="/binance-coin" element={<Binancecoin />} />
        <Route path="/polygon" element={<Polygon />} />
        <Route path="/usdc" element={<USDC />} />
        <Route path="/solana" element={<Solana />} />
        <Route path="/shiba-inu" element={<ShibaInu />} />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/legal-inquiries" element={<LegalInquiries />} />
        <Route path="/travel-rule-request" element={<TravelRuleRequest />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/supported-countries" element={<SupportedCountries />} />
        <Route path="/supported-currencies" element={<SupportedCurrencies />} />
        <Route path="/exchange-rates" element={<ExchangeRates />} />
        <Route path="/faq-help-center" element={<FAQHelpCenter />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/press-enquiries" element={<PressEnquiries />} />
        <Route path="/contact-compliance" element={<ContactCompliance />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App