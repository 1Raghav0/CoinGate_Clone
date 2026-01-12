import React, { useState } from 'react';
import { 
  MdReceiptLong, 
  MdShoppingCartCheckout, 
  MdCurrencyExchange, 
  MdPayments, 
  MdSend,
  MdCached, 
  MdGroups,
  MdApi, 
  MdExtension, 
  MdAssuredWorkload, 
  MdVerifiedUser, 
  MdAdminPanelSettings, 
  MdHowToReg, 
  MdTune 
} from 'react-icons/md';

const Hosting = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="page-content" className="font-sans text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <div id="hero__block" className="bg-gray-900">
        <div className="sm:pt-9 mt-0 rounded-container rounded-none">
          <div className="mb-9 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav id="coingate_breadcrumbs" className="flex text-white" aria-label="Breadcrumb">
              <ol role="list" className="flex flex-wrap items-center space-x-2 text-sm">
                <li>
                  <div>
                    <p> Home </p>
                  </div>
                </li>
                <li className="separator separator-home">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron_right">
                      <path id="Vector" d="M9.70541 6L8.29541 7.41L12.8754 12L8.29541 16.59L9.70541 18L15.7054 12L9.70541 6Z" fill="currentColor"></path>
                    </g>
                  </svg>
                </li>
                <li className="item-parent max-w-[10rem] md:max-w-none truncate">
                  <a className="bread-parent" href="https://coingate.com/solutions" title="Solutions">Solutions</a>
                </li>
                <li className="separator">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron_right">
                      <path id="Vector" d="M9.70541 6L8.29541 7.41L12.8754 12L8.29541 16.59L9.70541 18L15.7054 12L9.70541 6Z" fill="currentColor"></path>
                    </g>
                  </svg>
                </li>
                <li className="item-current max-w-[10rem] md:max-w-none truncate">
                  <span> Hosting Providers Cryptocurrency Payment Gateway</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center lg:grid-cols-2 sm:gap-6 grid-cols-1">
            <div className="col-span-1">
              <div className="">
                <h1 className="text-4xl sm:text-5xl text-white font-semibold leading-tight mb-4 sm:mb-6 max-w-3xl text-left">Crypto Payment Gateway for Hosting Providers</h1>
                <p className="text-gray-100 text-base sm:text-lg whitespace-pre-line max-w-2xl text-left">We empower Hosting Providers with a robust crypto payment gateway capable of enhancing business efficiency. Get ahead in the Hosting Providers industry today. </p>
                <ul className="mt-4 space-y-2">
                  <li className="max-w-full text-gray-100 flex items-center">
                    <div className="bg-gray-700 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <p><span style={{ fontWeight: 400 }}>Attract younger, tech-savvy audience</span></p>
                  </li>
                  <li className="max-w-full text-gray-100 flex items-center">
                    <div className="bg-gray-700 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <p><span style={{ fontWeight: 400 }}>Increase reach and accessibility of your services</span></p>
                  </li>
                  <li className="max-w-full text-gray-100 flex items-center">
                    <div className="bg-gray-700 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <p><span style={{ fontWeight: 400 }}>Boost your sales significantly</span></p>
                  </li>
                </ul>
                <div className="flex flex-wrap -mr-4 -mb-4 mt-6">
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shrink-0 mr-4 mb-4" href="https://accounts.coingate.com/register" rel="" target="_blank">
                    <span className="mr-2">Start now</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shrink-0 mr-4 mb-4" href="https://coingate.com/contact-us/sales" rel="" target="">
                    <span className="mr-2">Book a Demo </span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-6 sm:mt-0">
              <div className="w-full min-h-[312px] sm:min-h-[500px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2024/11/10063358/Industry-pages-01-1.png')" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div id="logo-carousel__block" className="py-4 bg-white overflow-hidden">
        <div className="flex w-full">
           {[0, 1].map((setIndex) => (
             <div key={setIndex} className="animate-marquee flex min-w-full shrink-0 items-center justify-around space-x-12 px-6">
                <a className="inline-flex h-[60px] w-48 items-center justify-center">
                   <div className="h-full w-32 flex items-center justify-center bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/11/10063747/Logo_Alternative-Airlines_grey.png')" }}></div>
                </a>
                <a className="inline-flex h-[60px] w-48 items-center justify-center">
                   <div className="h-full w-32 flex items-center justify-center bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/11/10063747/Logo_Cherry-servers_grey.png')" }}></div>
                </a>
                <a className="inline-flex h-[60px] w-48 items-center justify-center">
                   <div className="h-full w-32 flex items-center justify-center bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/11/10063747/Logo_Hostinger_grey.png')" }}></div>
                </a>
                <a className="inline-flex h-[60px] w-48 items-center justify-center">
                   <div className="h-full w-32 flex items-center justify-center bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/11/10063747/Logo_NordVPN_grey.png')" }}></div>
                </a>
                <a className="inline-flex h-[60px] w-48 items-center justify-center">
                   <div className="h-full w-32 flex items-center justify-center bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/11/10063746/Logo_Surfshark_grey.png')" }}></div>
                </a>
             </div>
           ))}
        </div>
      </div>

      {/* Cards Block 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Cryptocurrency Payments for Hosting Providers Made Easy</h2>
          <p className="text-gray-600">Collecting crypto payments with CoinGate is no rocket science. Here's how it works:</p>
          <div className="flex flex-wrap justify-center mt-6 gap-4">
            <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" href="https://accounts.coingate.com/register" target="_blank">
               <span>Register an Account</span>
               <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
            </a>
            <a className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50" href="https://developer.coingate.com/reference/cryptocurrency-payment-api" target="_blank">
               <span>API Documentation</span>
               <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
            </a>
          </div>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <MdReceiptLong className="text-gray-400 text-[2rem] mb-4" />
             <h3 className="text-lg font-semibold text-gray-900">Invoice</h3>
             <p className="mt-3 text-sm text-gray-600">We present a detailed invoice for your customer.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <MdShoppingCartCheckout className="text-gray-400 text-[2rem] mb-4" />
             <h3 className="text-lg font-semibold text-gray-900">Payment</h3>
             <p className="mt-3 text-sm text-gray-600">Your customer makes a payment at a fixed exchange rate.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <MdCurrencyExchange className="text-gray-400 text-[2rem] mb-4" />
             <h3 className="text-lg font-semibold text-gray-900">Conversion</h3>
             <p className="mt-3 text-sm text-gray-600">We transform the client's payment into your preferred currency.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <MdPayments className="text-gray-400 text-[2rem] mb-4" />
             <h3 className="text-lg font-semibold text-gray-900">Settlement</h3>
             <p className="mt-3 text-sm text-gray-600">We send a withdrawal to your bank account on-demand.</p>
           </div>
        </div>
      </div>

      {/* User-Friendly Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-6 items-center">
            <div className="col-span-1 lg:order-last order-last">
              <div className="max-w-2xl">
                <h2 className="text-gray-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">User-Friendly Dashboard for Maximum Convenience</h2>
                <p className="text-gray-600 text-base whitespace-pre-line">CoinGate has everything a business needs to efficiently manage payments:</p>
                <ul className="mt-4 space-y-2">
                   {["Assign permissions to your team to manage company's account", "Download comprehensive reports on your payment activity", "Track your orders in real-time and get notifications", "Convert currencies in-house automatically or manually"].map((item, i) => (
                     <li key={i} className="text-gray-600 max-w-full flex items-center">
                       <div className="bg-gray-100 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                         <svg className="text-gray-600 w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path></svg>
                       </div>
                       <p>{item}</p>
                     </li>
                   ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 lg:order-first order-first">
               <div className="w-full h-full aspect-h-1 aspect-w-1">
                  <div className="bg-cover bg-center rounded-2xl bg-no-repeat max-w-full lg:max-w-[500px] lg:max-h-[500px] h-[500px]" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/12/10063744/Administrators_permissions_img_01.png')" }}></div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-gray-900 rounded-[40px] p-8 md:p-14 shadow-sm">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-last order-last">
                <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight mb-6">Payment Features Every Hosting Providers Needs</h2>
                <p className="text-gray-100">We offer a wide range of tools and features designed to cover every need of Hosting Providers.</p>
              </div>
              <div className="lg:order-first order-first">
                 <div className="w-full h-[300px] sm:h-[500px] bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2024/11/10063357/Industry-pages-04-2.png')" }}></div>
              </div>
           </div>
           
           <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Flexible Withdrawals", desc: "Withdraw your funds into your preferred crypto wallet or a bank account." , icon: <MdSend className="text-gray-400 text-[2rem] mb-4 block" />},
                { title: "Refunds in Crypto", desc: "Refund your customers in various cryptocurrencies without any hassle.", icon: <MdCached className="text-gray-400 text-[2rem] mb-4 block" /> },
                { title: "Currency Converter", desc: "Exchange cryptocurrencies in your account balance to any other available currency.", icon: <MdCurrencyExchange className="text-gray-400 text-[2rem] mb-4 block" /> },
                { title: "Mass Payouts", desc: "Send payments in bulk to hundreds of customers and business partners at the same time.", icon: <MdGroups className="text-gray-400 text-[2rem] mb-4 block" /> }
              ].map((feature, i) => (
                <div key={i} className="bg-transparent">
                   {feature.icon}
                   <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                   <p className="text-gray-300 text-sm">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
      
      {/* Integration Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
         <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Easily Integrate Crypto into your Hosting Providers Checkout Page</h2>
            <p className="text-gray-600">CoinGate supports multiple crypto payment integration methods:</p>
         </div>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
               <MdApi className="text-gray-400 text-[2rem] mb-4 block" />
               <h3 className="text-xl font-semibold text-gray-900 mb-3">CoinGate Payment API</h3>
               <p className="text-gray-600 text-sm mb-4">Connect your website to our well-documented crypto payments API for maximum customization.</p>
               <a href="https://developer.coingate.com" className="text-blue-600 font-medium hover:text-blue-700">Learn more</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
               <MdExtension className="text-gray-400 text-[2rem] mb-4 block" />
               <h3 className="text-xl font-semibold text-gray-900 mb-3">E-commerce Plugins</h3>
               <p className="text-gray-600 text-sm mb-4">Easily set up stablecoin payments with an official plugin or extension developed specifically for the e-commerce platform you're on.</p>
               <a href="https://coingate.com/plugins" className="text-blue-600 font-medium hover:text-blue-700">Learn more</a>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
               <MdReceiptLong className="text-gray-400 text-[2rem] mb-4 block" />
               <h3 className="text-xl font-semibold text-gray-900 mb-3">Email & Direct Link Billing</h3>
               <p className="text-gray-600 text-sm mb-4">Send one-time bills to customers or business partners via your email list or a direct link.</p>
               <a href="https://coingate.com/billing" className="text-blue-600 font-medium hover:text-blue-700">Learn more</a>
            </div>
         </div>
      </div>

      {/* Improved Accessibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-6 items-center">
            <div className="col-span-1 lg:order-first order-last">
              <div className="max-w-2xl">
                <h2 className="text-gray-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">Improved Accessibility to Your Hosting Providers Services – Guaranteed!</h2>
                <p className="text-gray-600 text-base whitespace-pre-line">Introducing cryptocurrency payments can significantly broaden your customer base, attracting a larger and younger demographic eager for innovative payment solutions.</p>
                <ul className="mt-4 space-y-2">
                   {["Collect payments globally and instantaneously", "Attract niche, privacy-conscious customers", "Provide access to your services to people with no bank accounts"].map((item, i) => (
                     <li key={i} className="text-gray-600 max-w-full flex items-center">
                       <div className="bg-gray-100 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                         <svg className="text-gray-600 w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path></svg>
                       </div>
                       <p>{item}</p>
                     </li>
                   ))}
                </ul>
                <div className="mt-6">
                   <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" href="https://accounts.coingate.com/register" target="_blank">
                      <span>Get started today</span>
                      <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
                   </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:order-last order-first">
               <div className="w-full h-full aspect-h-1 aspect-w-1">
                  <div className="bg-cover bg-center rounded-2xl bg-no-repeat max-w-full lg:max-w-[500px] lg:max-h-[500px] h-[500px]" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2024/11/10063357/Industry-pages-02-1.png')" }}></div>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* White-Label Solution */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">White-Label Hosting Providers Payment Solution</h2>
          <p className="text-gray-600 whitespace-pre-line">Customization is key in representing your brand uniquely. Using the white-label solution, you can tailor our crypto payment gateway to fit your brand's style and operational needs, ensuring a seamless user experience that reflects your company's identity.</p>
          <div className="mt-6">
             <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" href="https://coingate.com/accept/white-label">
                <span>Learn more</span>
                <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
             </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <div className="mb-6 bg-purple-200 rounded-full h-36 w-36 mx-auto bg-cover" style={{backgroundImage: "url('https://cdn.coingate.com/uploads/2024/02/10063732/Customization_branding_white_label_img.png')"}}></div>
             <h3 className="text-lg font-semibold text-gray-900">Customization and Branding</h3>
             <p className="mt-3 text-sm text-gray-600">CoinGate's white label solution offers extensive customization, allowing brands and PSPs to match their unique aesthetics and language.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <div className="mb-6 bg-purple-200 rounded-full h-36 w-36 mx-auto bg-cover" style={{backgroundImage: "url('https://cdn.coingate.com/uploads/2024/02/10063732/Wallet_security_measures_img.png')"}}></div>
             <h3 className="text-lg font-semibold text-gray-900">Advanced Security Measures</h3>
             <p className="mt-3 text-sm text-gray-600">The white label solution includes advanced security features like an Anti-Money Laundering (AML) program and real-time wallet checks.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <div className="mb-6 bg-purple-200 rounded-full h-36 w-36 mx-auto bg-cover" style={{backgroundImage: "url('https://cdn.coingate.com/uploads/2024/02/10063732/Advanced_acounting_img.png')"}}></div>
             <h3 className="text-lg font-semibold text-gray-900">Virtual Ledgers for Advanced Accounting</h3>
             <p className="mt-3 text-sm text-gray-600">The white label solution provides virtual ledgers, enabling PSPs to manage sub-accounts and differentiate client transactions.</p>
           </div>
           <div className="p-6 bg-white rounded-2xl shadow-sm">
             <div className="mb-6 bg-purple-200 rounded-full h-36 w-36 mx-auto bg-cover" style={{backgroundImage: "url('https://cdn.coingate.com/uploads/2024/02/10063731/Expanded_api_functionality_img.png')"}}></div>
             <h3 className="text-lg font-semibold text-gray-900">Expanded API Functionality</h3>
             <p className="mt-3 text-sm text-gray-600">CoinGate's white label solution offers advanced API features such as hiding payment flows, issuing crypto refunds, and tracking payment discrepancies.</p>
           </div>
        </div>
      </div>

       {/* What Other Advantages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-gray-900 rounded-[40px] p-8 md:p-14 shadow-sm">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-6 items-center">
            <div className="col-span-1 lg:order-first order-last">
              <div className="max-w-2xl">
                <h2 className="text-white text-4xl sm:text-5xl font-semibold leading-tight mb-6">What Other Advantages Does Crypto Offer for Hosting Providers?</h2>
                <ul className="mt-4 space-y-2">
                   {["Receive payments instantly and globally", "Serve the unbanked", "Remove multiple middle-men from payment process", "Hold onto less data of your customers", "Eliminate fraudulent chargebacks", "Attract more customers", "Gain a competitive advantage", "Enjoy cheaper payment processing than any traditional method"].map((item, i) => (
                     <li key={i} className="text-gray-300 max-w-full flex items-center">
                       <div className="bg-gray-700 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                         <svg className="text-gray-300 w-4 h-4" viewBox="0 0 16 16" fill="none"><path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path></svg>
                       </div>
                       <p>{item}</p>
                     </li>
                   ))}
                </ul>
              </div>
            </div>
            <div className="col-span-1 lg:order-last order-first">
               <div className="w-full h-full aspect-h-1 aspect-w-1">
                  <div className="bg-cover bg-center rounded-2xl bg-no-repeat max-w-full lg:max-w-[500px] lg:max-h-[500px] h-[500px]" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2024/05/10063715/VPN-page-images-04-1.png')" }}></div>
                </div>
            </div>
          </div>
        </div>
      </div>

       {/* Join Other Companies */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-4xl font-semibold text-gray-900 mb-6">Join Other Companies that Accept Crypto with CoinGate</h2>
             <p className="text-gray-600 mb-6">Join forward-looking Companies who have already enhanced their operations with crypto payments.</p>
             <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" href="https://coingate.com/blog/crypto-payments/case-studies">
                <span>Read success stories</span>
                <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
             </a>
          </div>
       </div>

      {/* Every Payment Protected */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
           <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Every Payment is Protected</h2>
              <p className="text-gray-600">Security and compliance is always our top priority.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                 <MdAssuredWorkload className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                 <h3 className="text-lg font-semibold text-gray-900">In-built AML compliance</h3>
                 <p className="mt-2 text-sm text-gray-600">Our solution includes an advanced Anti-Money Laundering program with real-time wallet checks.</p>
              </div>
              <div className="text-center">
                 <MdVerifiedUser className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                 <h3 className="text-lg font-semibold text-gray-900">Enhanced security protocols</h3>
                 <p className="mt-2 text-sm text-gray-600">We equip our solution with top-tier security features to meet the distinct demands of any brand or PSP.</p>
              </div>
              <div className="text-center">
                 <MdAdminPanelSettings className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                 <h3 className="text-lg font-semibold text-gray-900">An adaptable compliance force</h3>
                 <p className="mt-2 text-sm text-gray-600">We ensure our solution is flexible enough to adapt to various compliance landscapes and financial complexities.</p>
              </div>
           </div>
        </div>
      </div>

       {/* Get Started Now */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-4xl font-semibold text-gray-900 mb-6">Get Started Now!</h2>
             <p className="text-gray-600">Getting started with CoinGate is easy! Sign up today, and you can be up and running in no time.</p>
             <div className="mt-6">
                <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700" href="https://accounts.coingate.com/register">
                <span>Register an Account</span>
                <svg className="ml-2 w-2 h-3" viewBox="0 0 8 12" fill="currentColor"><path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z"></path></svg>
             </a>
             </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
             <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                <MdHowToReg className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">1. Register with CoinGate</h3>
                <p className="mt-2 text-sm text-gray-600">A quick account setup process.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                <MdTune className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">2. Configure Your Payment Gateway</h3>
                <p className="mt-2 text-sm text-gray-600">Easily integrate using our robust API, plugins, & more.</p>
             </div>
             <div className="p-6 bg-white rounded-2xl shadow-sm text-center">
                <MdPayments className="text-gray-400 text-[2rem] mb-4 block mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900">3. Accept Crypto Payments</h3>
                <p className="mt-2 text-sm text-gray-600">Start accepting stablecoin payments with confidence on multiple networks and Layer 2s.</p>
             </div>
          </div>
       </div>

      {/* Solutions for Industries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
           <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Crypto Payment Solutions for Various Industries</h2>
              <p className="text-gray-600">Businesses across various industries find crypto payment solutions useful:</p>
           </div>
           <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                  {name: 'Hosting', img: 'https://cdn.coingate.com/uploads/2024/05/10063711/Solutions-category_Hosting.png', link: '/solutions/hosting-providers'},
                  {name: 'Travel', img: 'https://cdn.coingate.com/uploads/2024/05/10063711/Solutions-category_Travel.png', link: '/solutions/travel-websites'},
                  {name: 'Gaming', img: 'https://cdn.coingate.com/uploads/2024/05/10063710/Solutions-category_Gaming-1.png', link: '/solutions/gaming-platforms'},
                  {name: 'Proxy', img: 'https://cdn.coingate.com/uploads/2024/05/10063709/Solutions-category_Proxy-1.png', link: '/solutions/proxies'},
                  {name: 'RDP', img: 'https://cdn.coingate.com/uploads/2024/05/10063711/Solutions-category_RDP.png', link: '/solutions/rdp'},
                  {name: 'Retail', img: 'https://cdn.coingate.com/uploads/2024/05/10063710/Solutions-category_Retail.png', link: '/solutions/retail'},
                  {name: 'E-commerce', img: 'https://cdn.coingate.com/uploads/2024/05/10063710/Solutions-category-07.png', link: '/solutions/ecommerce'},
                  {name: 'See more', img: 'https://cdn.coingate.com/uploads/2024/05/10063708/Solutions-category_See-More-1.png', link: '/solutions'}
              ].map((cat, i) => (
                  <div key={i} className="flex flex-col items-center w-[160px]">
                      <div className="h-36 w-36 rounded-full bg-purple-200 bg-cover bg-center mb-4" style={{backgroundImage: `url('${cat.img}')`}}></div>
                      <h3 className="font-semibold text-lg text-gray-900">{cat.name}</h3>
                      <a href={cat.link} className="text-blue-600 mt-2 hover:underline">Learn more</a>
                  </div>
              ))}
           </div>
        </div>
      </div>
      
      {/* Supported Currencies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="rounded-[40px] bg-white p-8 md:p-14 shadow-sm">
            <div className="flex justify-center">
              <div className="sm:max-w-4xl">
                <p className="pre-title mb-2 text-center text-gray-500 uppercase tracking-widest font-bold">THE MORE THE MERRIER</p>
                <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight mb-4 sm:mb-6 text-center">Popular cryptocurrencies supported</h2>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col sm:flex-row mt-4 sm:mt-6 space-y-4 sm:space-y-0 sm:space-x-2 grow-0 sm:flex-shrink-0">
               <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors" href="https://coingate.com/supported-currencies">
                  <span>View supported coins</span>
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="ml-2 w-2 h-3">
                     <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                  </svg>
               </a>
            </div>

            <div className="mx-auto flex flex-wrap justify-center mt-9 sm:mb-6 gap-4">
              {[
                  { id: 'bnb-1', name: 'Accept Binance Coin', link: 'https://coingate.com/accept/binance-coin', img: 'https://cdn.coingate.com/uploads/2023/08/10064147/bnb-1.png' },
                  { id: 'sol-1', name: 'Accept Solana (SOL)', link: 'https://coingate.com/accept/solana', img: 'https://cdn.coingate.com/uploads/2023/08/10064146/sol-1.png' },
                  { id: 'xrp-1', name: 'Accept Ripple (XRP)', link: 'https://coingate.com/accept/xrp', img: 'https://cdn.coingate.com/uploads/2023/08/10064145/xrp-1.png' },
                  { id: 'SHIB-1', name: 'Accept Shiba Inu (SHIB)', link: 'https://coingate.com/accept/shiba-inu', img: 'https://cdn.coingate.com/uploads/2023/09/10063806/SHIB-1.png' },
                  { id: 'eth-1', name: 'Accept Ethereum (ETH)', link: 'https://coingate.com/accept/ethereum', img: 'https://cdn.coingate.com/uploads/2023/08/10064147/eth-1.png' },
                  { id: 'ltc-1', name: 'Accept Litecoin (LTC)', link: 'https://coingate.com/accept/litecoin', img: 'https://cdn.coingate.com/uploads/2023/08/10064145/ltc-1.png' },
                  { id: 'trx-1', name: 'Accept TRON (TRX)', link: 'https://coingate.com/accept/tron', img: 'https://cdn.coingate.com/uploads/2023/08/10064145/trx-1.png' },
                  { id: 'bch-1', name: 'Accept Bitcoin Cash (BCH)', link: 'https://coingate.com/accept/bitcoin-cash', img: 'https://cdn.coingate.com/uploads/2023/08/10064145/bch-1.png' },
                  { id: 'doge-1', name: 'Accept Dogecoin (DOGE)', link: 'https://coingate.com/accept/dogecoin', img: 'https://cdn.coingate.com/uploads/2023/08/10064147/doge-1.png' },
                  { id: 'matic-1', name: 'Accept Polygon (POL)', link: 'https://coingate.com/accept/polygon', img: 'https://cdn.coingate.com/uploads/2023/09/10063805/matic-1.png' },
                  { id: 'USDC', name: 'Accept USDC', link: 'https://coingate.com/accept/usd-coin', img: 'https://cdn.coingate.com/uploads/2024/05/10063714/USDC.png' },
                  { id: 'btc-1-1', name: 'Accept Bitcoin', link: 'https://coingate.com/accept', img: 'https://cdn.coingate.com/uploads/2023/08/10064148/btc-1-1.png' }
              ].map((coin, i) => (
                  <div key={i} className="flex items-center justify-center">
                      <a href={coin.link} target="">
                        <div className="group relative p-[18px] sm:p-9 hover:bg-gray-50 rounded-2xl transition-colors">
                          <img decoding="async" src={coin.img} 
                               alt={coin.name} className="h-14 sm:h-24 w-14 sm:w-24 group-hover:transform group-hover:transition-transform group-hover:duration-300 group-hover:-translate-y-2 sm:group-hover:-translate-y-4" />
                          <p data-no-translation="" className="hidden md:block invisible group-hover:visible absolute bottom-0 left-0 right-0 p-1 sm:p-2 text-xs text-center text-gray-600 mb-1 sm:mb-4 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-200 pointer-events-none whitespace-nowrap">
                            {coin.name}
                          </p>
                        </div>
                      </a>
                  </div>
              ))}
            </div>
        </div>
      </div>
      
       {/* Book a Demo */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
           <div className="grid lg:grid-cols-2 gap-12">
              <div>
                 <p className="font-bold text-gray-500 uppercase tracking-wider mb-2">Book a demo call</p>
                 <h2 className="text-4xl font-semibold text-gray-900 mb-6">Get Started Today!</h2>
                 <p className="text-gray-600 mb-6">Get ready to get ahead of your competition – register an account or fill out the form to contact us.</p>
                 <img src="https://coingate.com/app/themes/coingate/assets/contact-section.png" alt="Contact" className="rounded-full w-full max-w-sm" />
              </div>
              <div>
                 <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-1">First name</label>
                          <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="e.g. Name" />
                       </div>
                       <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-1">Last name</label>
                          <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="e.g. Last Name" />
                       </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Job Title</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="Job Title" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Company name</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="Company name" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Business email</label>
                        <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="e.g. name@company.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Phone number</label>
                        <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="Phone number" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-1">Message</label>
                        <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:border-blue-500" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Book a demo call</button>
                 </form>
              </div>
           </div>
        </div>
       </div>

      {/* News Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-semibold text-gray-900 mb-4">Learn More about Hosting Providers Accepting Crypto</h2>
        </div>
        <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
           {[
             {title: 'A New Standard for Crypto Payments in Europe: CoinGate Obtains MiCA License', img: 'https://cdn.coingate.com/uploads/2025/12/16134937/MiCA-announcement-Blog-cover2.png', tag: 'Company Updates', date: 'December 17, 2025'},
             {title: 'SOL and Solana: Consumer Payments Data Report (2024 May–2025 Oct)', img: 'https://cdn.coingate.com/uploads/2025/12/04103724/Solana-data-report-blog-cover.png', tag: 'Data reports', date: 'December 4, 2025'},
             {title: 'Black Friday 2025: Find The Best Crypto-Powered Deals Here', img: 'https://cdn.coingate.com/uploads/2025/11/26100152/black_friday_2025_blog_img_7453.png', tag: 'Crypto-Friendly Merchants', date: 'November 25, 2025'},
             {title: 'Introducing an Improved Crypto Checkout Experience', img: 'https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png', tag: 'Company Updates', date: 'November 24, 2025'}
           ].map((post, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] flex flex-col rounded-2xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                 <div className="h-52 bg-cover bg-center bg-purple-100" style={{backgroundImage: `url('${post.img}')`}}></div>
                 <div className="p-6 flex-grow flex flex-col bg-white">
                    <span className="text-xs font-bold text-blue-600 uppercase mb-2">{post.tag}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                    <p className="mt-auto text-sm text-gray-500">Last Updated: {post.date}</p>
                 </div>
              </div>
           ))}
        </div>
      </div>

       {/* FAQ */}
      <div id="faq__block" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm">
          <div className="max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl font-semibold leading-tight text-center sm:text-5xl text-gray-900 mb-9">Crypto Payment Gateway for Hosting Providers FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What countries do you support?", a: "CoinGate supports hosting providers globally, enabling them to accept crypto payments from customers worldwide. Please visit our supported countries page for information on any specific regional restrictions." },
              { q: "Are there any restrictions?", a: "Generally, there are no specific restrictions for hosting providers using CoinGate to accept crypto payments. Compliance with local laws and regulations is crucial, and our team can assist you in navigating these requirements smoothly." },
              { q: "How to choose a payment gateway for Hosting Providers?", a: "When selecting a payment gateway for your hosting provider business, consider factors such as security, ease of integration, transaction fees, and customer support. CoinGate offers robust security features, seamless integration, competitive fees, and dedicated support, making it an ideal choice for hosting providers looking to accept crypto payments." },
              { q: "What are CoinGate fees?", a: "For hosting providers, CoinGate charges a 1% transaction fee for accepting crypto payments. This fee structure is designed to be cost-effective, allowing hosting providers to offer crypto payment options without incurring high costs." },
              { q: "How long does it take to process a transaction via your crypto payment gateway for Hosting Providers?", a: "Transactions processed through CoinGate are typically confirmed within minutes. While the exact time can vary based on the cryptocurrency and network conditions, we aim to provide swift and efficient processing to meet the needs of your hosting provider business." },
              { q: "Is it legal to accept crypto payments for Hosting Providers?", a: "Yes, it is legal for hosting providers to accept crypto payments in most regions. However, regulations can vary, so it's important to stay informed about local laws. CoinGate offers guidance to ensure your hosting provider complies with relevant legal standards." },
              { q: "What are the risks of accepting crypto payments in Hosting Providers?", a: "The primary risks include price volatility and changing regulations. CoinGate mitigates these risks by offering secure payment solutions, real-time exchange rates, and advanced fraud prevention measures, ensuring safe and reliable transactions." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 group w-full">
                <button 
                  className="text-gray-900 w-full p-4 font-semibold text-left flex items-center justify-between cursor-pointer focus:outline-none"
                  onClick={() => toggleFaq(i)}
                >
                  <h3>{faq.q}</h3>
                  <svg className={`shrink-0 w-6 h-6 text-gray-400 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.59 8.29504L12 12.875L7.41 8.29504L6 9.70504L12 15.705L18 9.70504L16.59 8.29504Z" fill="currentColor"></path>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="p-4 border-gray-200">
                    <div className="prose max-w-full text-gray-600">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
