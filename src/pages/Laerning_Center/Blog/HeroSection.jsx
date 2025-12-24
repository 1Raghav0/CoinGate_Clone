import React, { useRef } from "react";
import { ChevronRight, X } from "lucide-react";

const HeroSection = () => {
  const scrollRef = useRef(null);

  const dataReports = [
  {
    tag: "Data reports",
    title: "SOL and Solana: Consumer Payments Data Report (2024 May–2025 Oct)",
    date: "December 4, 2025",
    img: "https://cdn.coingate.com/uploads/2025/12/04103724/Solana-data-report-blog-cover.png"
  },
  {
    tag: "Data reports",
    title: "Bitcoin Payments: Eleven-Year Data Overview (2014–2025)",
    date: "October 28, 2025",
    img: "https://cdn.coingate.com/uploads/2025/10/27094833/bitcoin_payments_eleven_years_data_img_456.png"
  },
  {
    tag: "Data reports",
    title: "Seven Years of Litecoin: Consumer Payments Data Report (2018–2025 YTD)",
    date: "September 18, 2025",
    img: "https://cdn.coingate.com/uploads/2025/09/18070909/Litecoin_consumer_payments_data_report_img_56323.png"
  },
  {
    tag: "Data reports",
    title: "Layer 2 Payments in 2025 – Stablecoins, Base's Rise, and ETH's Decline",
    date: "August 28, 2025",
    img: "https://cdn.coingate.com/uploads/2025/08/10060733/layer_2_payment_report_2025_img_4520.png"
  }
];

  return (
    <>
    <section className="bg-gray-50 pt-20">
      {/* ================= Announcement Bar ================= */}
      <div className="bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-90">
            Learn more <ChevronRight size={16} />
          </a>
        </div>

        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition">
          <X size={16} />
        </button>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4 py-20">
        {/* ================= LEFT FEATURED CARD ================= */}
        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png"
              alt="Crypto Checkout"
              className="w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="inline-block text-xs font-medium text-gray-500 mb-2">
              Company Updates
            </span>

            <h2 className="text-xl md:text-2xl font-bold text-[#0b1121] mb-2">
              Introducing an Improved Crypto Checkout Experience
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              We’ve developed the best checkout experience yet.
            </p>

            <span className="text-xs text-gray-400">November 24, 2025</span>
          </div>
        </div>

        {/* ================= RIGHT STACKED CARDS ================= */}
        <div className="flex flex-col lg:col-span-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex border border-gray-100 mb-4">
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Data reports
                </span>
                <h3 className="text-base font-bold text-[#0b1121] mt-4 leading-snug">
                  Bitcoin Payments: Eleven-Year Data Overview (2014–2025)
                </h3>
              </div>
              <p className="text-xs text-gray-400">October 28, 2025</p>
            </div>
            <div className="w-48 h-48">
              <img
                src="https://cdn.coingate.com/uploads/2025/10/27094833/bitcoin_payments_eleven_years_data_img_456.png"
                alt="Bitcoin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex border border-gray-100 mb-4">
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Data reports
                </span>
                <h3 className="text-base font-bold text-[#0b1121] mt-4 leading-snug">
                  Seven Years of Litecoin: Consumer Payments Data Report
                  (2018–2025 YTD)
                </h3>
              </div>
              <p className="text-xs text-gray-400">September 18, 2025</p>
            </div>
            <div className="w-48 h-48">
              <img
                src="https://cdn.coingate.com/uploads/2025/09/18070909/Litecoin_consumer_payments_data_report_img_56323.png"
                alt="Bitcoin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex border border-gray-100">
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Case Studies
                </span>
                <h3 className="text-base font-bold text-[#0b1121] mt-4 leading-snug">
                  Nearly Half of PlainProxies Customers Pay with Crypto
                </h3>
              </div>
              <p className="text-xs text-gray-400">August 26, 2025</p>
            </div>
            <div className="w-48 h-48">
              <img
                src="https://cdn.coingate.com/uploads/2025/08/10060737/PlainProxies_crypto_payments_case_study_img1534.png"
                alt="Bitcoin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-6 bg-gray-50">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">Latest articles</h2>
    <a href="#" className="text-sm font-medium text-green-500 hover:text-green-600 flex items-center gap-1">
      See all <span className="text-xs">→</span>
    </a>
  </div>

  {/* Cards Container */}
  <div className="flex gap-6 overflow-x-auto pb-4 max-w-7xl mx-auto hide-scrollbar" ref={scrollRef}>
    {[
      {
        tag: "Company Updates",
        title: "A New Standard for Crypto Payments in Europe:...",
        date: "December 17, 2025",
        img: "https://cdn.coingate.com/uploads/2025/12/16134937/MiCA-announcement-Blog-cover2.png",
      },
      {
        tag: "Data reports",
        title: "SOL and Solana: Consumer Payments Data Report...",
        date: "December 4, 2025",
        img: "https://cdn.coingate.com/uploads/2025/12/04103724/Solana-data-report-blog-cover.png",
      },
      {
        tag: "Crypto-Friendly Merchants",
        title: "Black Friday 2025: Find The Best Crypto-Powered Dea...",
        date: "November 25, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/26100152/black_friday_2025_blog_img_7453.png",
      },
      {
        tag: "Company Updates",
        title: "Introducing an Improved Crypto Checkout...",
        date: "November 24, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png",
      },
      {
        tag: "Crypto-Friendly Merchants",
        title: "Black Friday 2025: Find The Best Crypto-Powered Dea...",
        date: "November 25, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/26100152/black_friday_2025_blog_img_7453.png",
      },
      {
        tag: "Company Updates",
        title: "Introducing an Improved Crypto Checkout...",
        date: "November 24, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png",
      },
    ].map((card, index) => (
      <div key={index} className="min-w-[300px] w-1/4 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100 flex-shrink:0">
        {/* Image Top */}
        <div className="h-40 w-full overflow-hidden">
          <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
        </div>
        
        {/* Content Bottom */}
        <div className="p-5 flex flex-col flex-1">
          <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">
            {card.tag}
          </span>
          <h3 className="text-lg font-semibold text-[#0b1121] mt-3 leading-snug flex-1">
            {card.title}
          </h3>
          <p className="text-xs text-gray-400 mt-4">
            {card.date}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-end gap-2 mt-6 max-w-7xl mx-auto">
    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}>
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
    </button>
    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}>
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
    </button>
  </div>
</section>

<section className=" bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-12">
  {/* Header */}
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl md:text-3xl  font-semibold text-[#0b1121]">Company updates</h2>
    <a href="#" className="text-sm font-semibold text-green-500 hover:text-green-600 flex items-center gap-1">
      See all <span className="text-xs">→</span>
    </a>
  </div>

  {/* Top Row: Two Large Vertical Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    {/* Large Card 1 */}
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
      <div className="h-76 w-full overflow-hidden">
        <img src="https://cdn.coingate.com/uploads/2025/12/16134937/MiCA-announcement-Blog-cover2.png" alt="MiCA License" className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit mb-4">Company Updates</span>
        <h3 className="text-xl font-semibold text-[#0b1121] mb-2 leading-tight">
          A New Standard for Crypto Payments in Europe: CoinGate Obtains MiCA License
        </h3>
        <p className="text-sm text-gray-500 mb-6 flex-1">CoinGate is now licensed under MiCA,</p>
        <p className="text-xs text-gray-400">December 17, 2025</p>
      </div>
    </div>

    {/* Large Card 2 */}
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      <div className="h-76 w-full overflow-hidden">
        <img src="https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png" alt="Checkout" className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit mb-4">Company Updates</span>
        <h3 className="text-xl font-semibold text-[#0b1121] mb-2 leading-tight">
          Introducing an Improved Crypto Checkout Experience
        </h3>
        <p className="text-sm text-gray-500 mb-6 flex-1">We've developed the best checkout experience yet.</p>
        <p className="text-xs text-gray-400">November 24, 2025</p>
      </div>
    </div>
  </div>

  {/* Bottom Row: 2x2 Grid of Horizontal Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      { title: "Introducing WalletConnect Payments at CoinGate Checkout", date: "May 13, 2025", img: "https://cdn.coingate.com/uploads/2025/05/10061657/Introducing-WalletConnect-Payments-at-CoinGate-Checkout.png" },
      { title: "CoinGate Integrates Low-Cost Ethereum Layer 2, Optimism", date: "March 19, 2025", img: "https://cdn.coingate.com/uploads/2025/03/10062403/Optimism_blockchain_launch_01.png" },
      { title: "How we Transformed our Office into an Art Gallery", date: "March 17, 2025", img: "https://cdn.coingate.com/uploads/2025/03/10062403/How_we_transformed_our_office_into_an_art_gallery_03.png" },
      { title: "CoinGate Integrates Base: A Fast, Cost-Effective Ethereum L2", date: "February 24, 2025", img: "https://cdn.coingate.com/uploads/2025/02/10062454/Base_network_announcement_img_5238.png" }
    ].map((card, idx) => (
      <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex h-48">
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">Company Updates</span>
            <h3 className="text-lg font-semibold text-[#0b1121] mt-4 leading-snug line-clamp-2">
              {card.title}
            </h3>
          </div>
          <p className="text-xs text-gray-400">{card.date}</p>
        </div>
        <div className="w-48 flex-shrink:0">
          <img src={card.img} alt="" className="h-48 object-cover"/>
        </div>
      </div>
    ))}
  </div>
  </div>
</section>

<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-12">
    {/* Header */}
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">Case studies</h2>
    <a href="#" className="text-sm font-semibold text-green-500 hover:text-green-500 flex items-center gap-1">
      See all <span className="text-xs">→</span>
    </a>
  </div>

  {/* Main Grid: 3 Columns */}
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    
    {/* COLUMN 1: 2 Cards with image on the right */}
    <div className="lg:col-span-2 flex flex-col gap-6">
      {[
        { 
          title: "Thunderproxy Proves the Proxy Industry Runs on Crypto (75% of Sales Say So)", 
          date: "September 11, 2025", 
          img: "https://cdn.coingate.com/uploads/2025/09/11103902/thunderproxy_case_study_img_5663.png" 
        },
        { 
          title: "Nearly Half of PlainProxies Customers Pay with Crypto", 
          date: "August 26, 2025", 
          img: "https://cdn.coingate.com/uploads/2025/08/10060737/PlainProxies_crypto_payments_case_study_img1534.png" 
        }
      ].map((card, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex h-[180px] hover:shadow-md transition-shadow">
          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit mb-3 inline-block uppercase tracking-wider">Case Studies</span>
              <h3 className="text-lg font-semibold text-[#0b1121] leading-snug line-clamp-3">{card.title}</h3>
            </div>
            <p className="text-[11px] text-gray-400 font-medium">{card.date}</p>
          </div>
          <div className="w-1/3 bg-green-500 flex-shrink:0 relative overflow-hidden">
            <img src={card.img} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      ))}
    </div>

    {/* COLUMN 2: 2 Cards NO image */}
    <div className="flex flex-col gap-6">
      {[
        { title: "How Ping Proxies Tripled Their Crypto Payments with CoinGate", date: "August 11, 2025" },
        { title: "Coinzilla's Solution to Automating Crypto Payments at Scale", date: "June 16, 2025" }
      ].map((card, i) => (
        <div key={i} className="bg-white rounded-2xl p-6  border border-gray-100 flex flex-col justify-between h-[180px]">
          <div>
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit mb-3 inline-block uppercase tracking-wider">Case Studies</span>
            <h3 className="font-semibold text-[#0b1121] leading-snug">{card.title}</h3>
          </div>
          <p className="text-xs text-gray-400 font-medium">{card.date}</p>
        </div>
      ))}
    </div>

    {/* COLUMN 3: 2 Cards NO image */}
    <div className="flex flex-col gap-6">
      {[
        { title: "Adopting Crypto Payments: How Businesses Go Global, Faster and Smarter", date: "June 19, 2025" },
        { title: "Squaretalk x CoinGate: Crypto Payments as a Compliance-Driven Innovation", date: "June 9, 2025" }
      ].map((card, i) => (
        <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col justify-between h-[180px]">
          <div>
            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit mb-3 inline-block uppercase tracking-wider">Case Studies</span>
            <h3 className="font-semibold text-[#0b1121] leading-snug">{card.title}</h3>
          </div>
          <p className="text-xs text-gray-400 font-medium">{card.date}</p>
        </div>
      ))}
    </div>

  </div>
  </div>
  
</section>

<section className=" bg-[#f8f9fa]">
  <div className="max-w-7xl mx-auto px-6 py-12">
    {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">Data reports</h2>
        <a href="#" className="text-sm font-semibold text-green-500 hover:text-green-600 flex items-center gap-1">
          See all <span className="text-xs">→</span>
        </a>
      </div>

      {/* 2x2 Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataReports.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex h-52 "
          >
            {/* Left Content Area */}
            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded w-fit mb-4 inline-block uppercase tracking-wider">
                  {card.tag}
                </span>
                <h3 className="font-semibold text-[#0b1121] leading-snug line-clamp-3">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-medium">
                {card.date}
              </p>
            </div>

            {/* Right Image Area */}
            <div className="w-1/3 md:w-44 flex-shrink:0 relative">
              <img 
                src={card.img} 
                alt="" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        ))}
      </div>
  </div>
      
    </section>

    <section className="py-12 px-6 bg-gray-50">
  {/* Header Section */}
  <div className="flex justify-between items-center mb-8 max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">Popular articles</h2>
    <a href="#" className="text-sm font-medium text-green-500 hover:text-green-600 flex items-center gap-1">
      See all <span className="text-xs">→</span>
    </a>
  </div>

  {/* Cards Container */}
  <div className="flex gap-6 overflow-x-auto pb-4 max-w-7xl mx-auto hide-scrollbar" ref={scrollRef}>
    {[
      {
        tag: "Company Updates",
        title: "A New Standard for Crypto Payments in Europe:...",
        date: "December 17, 2025",
        img: "https://cdn.coingate.com/uploads/2025/12/16134937/MiCA-announcement-Blog-cover2.png",
      },
      {
        tag: "Data reports",
        title: "SOL and Solana: Consumer Payments Data Report...",
        date: "December 4, 2025",
        img: "https://cdn.coingate.com/uploads/2025/12/04103724/Solana-data-report-blog-cover.png",
      },
      {
        tag: "Crypto-Friendly Merchants",
        title: "Black Friday 2025: Find The Best Crypto-Powered Dea...",
        date: "November 25, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/26100152/black_friday_2025_blog_img_7453.png",
      },
      {
        tag: "Company Updates",
        title: "Introducing an Improved Crypto Checkout...",
        date: "November 24, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png",
      },
      {
        tag: "Crypto-Friendly Merchants",
        title: "Black Friday 2025: Find The Best Crypto-Powered Dea...",
        date: "November 25, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/26100152/black_friday_2025_blog_img_7453.png",
      },
      {
        tag: "Company Updates",
        title: "Introducing an Improved Crypto Checkout...",
        date: "November 24, 2025",
        img: "https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png",
      },
    ].map((card, index) => (
      <div key={index} className="min-w-[300px] w-1/4 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col border border-gray-100 flex-shrink:0">
        {/* Image Top */}
        <div className="h-40 w-full overflow-hidden">
          <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
        </div>
        
        {/* Content Bottom */}
        <div className="p-5 flex flex-col flex-1">
          <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded w-fit">
            {card.tag}
          </span>
          <h3 className="text-lg font-semibold text-[#0b1121] mt-3 leading-snug flex-1">
            {card.title}
          </h3>
          <p className="text-xs text-gray-400 mt-4">
            {card.date}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-end gap-2 mt-6 max-w-7xl mx-auto">
    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}>
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
    </button>
    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors" onClick={() => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}>
      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
    </button>
  </div>
</section>

    </>
  );
};

export default HeroSection;
