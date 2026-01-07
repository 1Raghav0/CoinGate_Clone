import React, { useState } from 'react';
import PluginSection from '../../../components/PluginSection';

const OpenCart = () => {
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
                <li className="item-parent item-parent-10767 max-w-[10rem] md:max-w-none truncate">
                  <a className="bread-parent bread-parent-10767" href="https://coingate.com/plugins" title="Plugins">Plugins</a>
                </li>
                <li className="separator separator-10767">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron_right">
                      <path id="Vector" d="M9.70541 6L8.29541 7.41L12.8754 12L8.29541 16.59L9.70541 18L15.7054 12L9.70541 6Z" fill="currentColor"></path>
                    </g>
                  </svg>
                </li>
                <li className="item-current item-552 max-w-[10rem] md:max-w-none truncate">
                  <span> OpenCart Plugin</span>
                </li>
              </ol>
            </nav>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid items-center lg:grid-cols-2 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="col-span-1">
              <div className="">
                <h1 className="text-4xl sm:text-5xl text-white font-semibold leading-tight mb-4 sm:mb-6 max-w-3xl text-left">Accept Bitcoin & Cryptocurrency payments with the OpenCart extension</h1>
                <p className="text-gray-100 text-base sm:text-lg whitespace-pre-line max-w-2xl text-left">Receive crypto payments on the OpenCart website with a fully automated solution. Extend the payment methods of your online business and get paid for your goods and services in Bitcoin (BTC), Litecoin (LTC), Ether (ETH), Solana (SOL), and other cryptocurrencies.</p>
                <div className="flex flex-wrap -mr-4 -mb-4 mt-6">
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shrink-0 mr-4 mb-4" href="https://accounts.coingate.com/register" target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">Start accepting crypto</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 shrink-0 mr-4 mb-4 transition-colors duration-200" href="https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=32494" rel="noreferrer" target="_blank">
                    <span className="mr-2">Download OpenCart plugin</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 mt-6 sm:mt-0">
              <div className="w-full min-h-[312px] sm:min-h-[500px] bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/09/10064126/opencart-1.png')" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Accept Crypto */}
      <div id="universal__block_why" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm max-w-7xl mx-auto">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-6 items-center">
            <div className="col-span-1 lg:order-last order-last">
              <div className="max-w-2xl">
                <p className="pre-title mb-2"></p>
                <h2 className="text-gray-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6" style={{ overflowWrap: 'break-word' }}>Why accept crypto payments on your online store?</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "Receive payments instantly and globally",
                    "Remove multiple middle-men from payment process",
                    "Hold onto less data of your customers",
                    "Eliminate fraudulent chargebacks",
                    "Attract more customers",
                    "Serve the unbanked",
                    "Gain a competitive advantage",
                    "Pay less to accept payments"
                  ].map((item, i) => (
                    <li key={i} className="text-gray-600 max-w-full flex items-center">
                      <div className="bg-gray-100 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                        <svg className="text-gray-600 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap -mr-4 -mb-4 mt-6">
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shrink-0 mr-4 mb-4" href="https://coingate.com/blog/post/why-should-business-accept-crypto" rel="" target="_blank">
                    <span className="mr-2">Learn more</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:order-first order-first">
              <div className="w-full h-full">
                <div className="w-full h-full aspect-h-1 aspect-w-1">
                  <div className="bg-cover bg-center rounded-2xl bg-no-repeat max-w-full lg:max-w-[500px] lg:max-h-[500px] h-[500px]" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/10/10063756/website_BTC_accept-1.png')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div id="universal__block_benefits" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm max-w-7xl mx-auto">
          <div className="lg:grid-cols-2 grid grid-cols-1 gap-6 items-center">
            <div className="col-span-1 lg:order-first order-last">
              <div className="max-w-2xl">
                <p className="pre-title mb-2"></p>
                <h2 className="text-gray-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6" style={{ overflowWrap: 'break-word' }}>Benefits of having CoinGate crypto payments on OpenCart:</h2>
                <ul className="mt-4 space-y-2">
                  {[
                    "One-time setup with minimal maintenance",
                    "Instant payment confirmations and their status updates",
                    "Show merchandise prices in any local fiat currency",
                    "Issue full and partial refunds",
                    "Use permission-based account management",
                    "Bitcoin Lightning Network support",
                    "Payouts in BTC, fiat (EUR/GBP/USD), stablecoins, & more",
                    "Removed risks associated with crypto price volatility"
                  ].map((item, i) => (
                    <li key={i} className="text-gray-600 max-w-full flex items-center">
                      <div className="bg-gray-100 rounded-full p-[3px] mr-3 inline-flex items-center justify-center">
                        <svg className="text-gray-600 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.85948 10.5834L3.07948 7.80336L2.13281 8.74336L5.85948 12.47L13.8595 4.47003L12.9195 3.53003L5.85948 10.5834Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap -mr-4 -mb-4 mt-6">
                  <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shrink-0 mr-4 mb-4" href="https://support.coingate.com/" rel="noreferrer" target="_blank">
                    <span className="mr-2">Connect CoinGate to your OpenCart site</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:order-last order-first">
              <div className="w-full h-full">
                <div className="w-full h-full aspect-h-1 aspect-w-1">
                  <div className="bg-cover bg-center rounded-2xl bg-no-repeat max-w-full lg:max-w-[500px] lg:max-h-[500px] h-[500px]" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/10/10063756/BTC_shopping_bag-1.png')" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More Payment Plugins */}
      <div id="plugins__block" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-transparent max-w-7xl mx-auto">
          <div className="mb-[36px] max-w-[58rem] mx-auto lg:px-[5px]">
            <h2 className="lg:text-5xl text-4xl text-gray-900 font-semibold text-center lg:mb-[24px] mb-[16px]">
              More payment plugins from CoinGate
            </h2>
            <div className="text-gray-600 text-center max-w-[45rem] mx-auto lg:px-[10px]">
              <p>Set up cryptocurrency payments infrastructure, track orders, and manage your crypto earnings with an easy-to-use crypto payment gateway.</p>
            </div>
          </div>
          <PluginSection />
        </div>
      </div>

      {/* How it works */}
      <div id="vertical-timeline__block" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto mb-9">
            <p className="pre-title mb-2 text-center text-sm font-bold tracking-wider text-gray-500 uppercase">HOW DOES IT WORK?</p>
            <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight mb-6 text-center">How to set up CoinGate’s app on OpenCart?</h2>
            <div className="flex flex-wrap justify-center -mr-4 -mb-4 mt-6">
              <a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shrink-0 mr-4 mb-4" href="https://coingate.com/blog/post/install-coingate-on-wix" rel="" target="_blank">
                <span className="mr-2">Step-by-step guide</span>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Companies */}
      <div id="logos__block" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-transparent max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="max-w-xl">
              <p className="pre-title mb-2 text-center"></p>
              <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight mb-4 sm:mb-6 text-center">Companies that use CoinGate payment gateway:</h2>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col sm:flex-row mt-4 sm:mt-6 space-y-4 sm:space-y-0 sm:space-x-2 grow-0 sm:flex-shrink-0">
          </div>
          <div className="mt-9 max-w-6xl mx-auto flex flex-wrap justify-center flex-shrink-0 gap-4">
            <a href="https://surfshark.com" target="_blank" className="inline-block p-3 sm:p-6 rounded-2xl hover:bg-white transition-colors duration-200">
              <div className="w-[124px] sm:w-[144px] h-[72px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/09/10064126/Suurfshark-1.png')" }}></div>
            </a>
            <a href="https://www.alternativeairlines.com" target="_blank" className="inline-block p-3 sm:p-6 rounded-2xl hover:bg-white transition-colors duration-200">
              <div className="w-[124px] sm:w-[144px] h-[72px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/09/10063759/alternative-airlines-2-1.png')" }}></div>
            </a>
            <a href="https://www.cherryservers.com" target="_blank" className="inline-block p-3 sm:p-6 rounded-2xl hover:bg-white transition-colors duration-200">
              <div className="w-[124px] sm:w-[144px] h-[72px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/09/10064127/cherryservers-1-e1730291321212.png')" }}></div>
            </a>
            <a href="https://www.hostinger.com" target="_blank" className="inline-block p-3 sm:p-6 rounded-2xl hover:bg-white transition-colors duration-200">
              <div className="w-[124px] sm:w-[144px] h-[72px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.coingate.com/uploads/2023/09/10063017/hostinger-1-1.png')" }}></div>
            </a>
          </div>
        </div>
      </div>

      {/* Demo Contact */}
      <div id="demo-contact__block" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="col-span-1">
              <p className="mb-4 text-sm font-bold tracking-wider text-gray-500 uppercase">Book a demo</p>
              <h2 className="text-4xl sm:text-5xl text-gray-900 font-semibold leading-tight">Our sales team is ready to help you answer all your questions</h2>
              <p className="mt-6 text-gray-600 whitespace-pre-line max-w-2xl mb-8">We’re here to help with all your questions.</p>
              <div className="hidden lg:flex justify-center w-full">
                <img 
                    src="https://coingate.com/app/themes/coingate/assets/contact-section.png" 
                    alt="Contact Sales Team" 
                    className="max-w-[400px] w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="col-span-1">
              <form action="/plugins/opencart" method="post" className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Full name</label>
                  <input 
                    type="text" 
                    name="full-name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    placeholder="e.g. John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Phone number</label>
                  <input 
                    type="text" 
                    name="phone-number"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    placeholder="Phone number" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="business-email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    placeholder="e.g. name@company.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Company name</label>
                  <input 
                    type="text" 
                    name="company-name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    placeholder="e.g. Coingate" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Website</label>
                  <input 
                    type="url" 
                    name="website"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" 
                    placeholder="e.g. coingate.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Operating country</label>
                  <div className="relative">
                    <select 
                        name="country"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                        <option value="">Choose a country...</option>
                        <option value="United States of America">United States of America</option>
                        <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Annual business turnover</label>
                  <div className="relative">
                    <select 
                        name="turnover"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white"
                    >
                        <option value="">Choose turnover range...</option>
                        <option value="Up to 100k €">Up to 100k €</option>
                        <option value="100k – 500k €">100k – 500k €</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Message</label>
                  <textarea 
                    name="message-content"
                    rows="4" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-y" 
                    placeholder="Hello"
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="inline-flex justify-center py-3 px-8 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-[#5044e4] hover:bg-[#4338ca] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4] transition-colors"
                  >
                    Book a demo call
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq__block" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-20">
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-sm max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto mb-20">
            <p className="mb-2 text-center pre-title text-sm font-bold text-gray-500 uppercase">Here to help</p>
            <h2 className="text-4xl font-semibold leading-tight text-center sm:text-5xl text-gray-900 mb-9">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What cryptos can I accept with the OpenCart extension?", a: "You can find the up-to-date list of supported currencies in this page." },
              { q: "Am I able to use the OpenCart extension and collect bitcoin payments in my country?", a: "CoinGate supports 170+ countries listed here." },
              { q: "Are there any fees for accepting crypto with the OpenCart extension?", a: "Accept cryptocurrency payments with a little 1% fee for a processed transaction." },
              { q: "How can I test the OpenCart extension functionality?", a: "Sign up for the CoinGate Sandbox to test the services in a safe environment." },
              { q: "Does it take long to withdraw the funds collected via the OpenCart extension?", a: "Withdrawals are processed recurringly. SEPA payouts might take 1-2 business days to go through." },
              { q: "What is the minimum amount that a merchant can withdraw?", a: "The amount available for withdrawal depends on the payout currency. Find all the fees in this page." }
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

export default OpenCart;
