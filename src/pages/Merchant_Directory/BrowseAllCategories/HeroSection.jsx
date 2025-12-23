import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import FeaturedMerchants from "./FeaturedMerchants";
import StoresPage from "./StoresPage";
import ExploreCategories from "./ExploreCategories";

const HeroSection = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");

  const getCategoryData = (category) => {
    const categoryData = {
      All: {
        title: "Discover Companies, Businesses, and Stores that Accept Bitcoin and Crypto",
        description: "Explore our directory to find places where you can pay with Bitcoin and cryptocurrencies easily and securely."
      },
      Communication: {
        title: "Pay for Communication Services with Bitcoin & Crypto",
        description: "Use Bitcoin & crypto to buy communication services. Explore the full list of companies that accept Bitcoin and cryptocurrency at CoinGate Merchant Directory."
      },
      "Data centers": {
        title: "Find Data Center Service Providers that Accept Bitcoin",
        description: "Here's a list of data center services that accept Bitcoin and cryptocurrencies. Pay for your data hosting and management services using cryptocurrency."
      },
      Gaming: {
        title: "Buy Games and Gaming Gear with Bitcoin & Crypto",
        description: "Find video games, consoles, gaming accessories and more, pay for everything with Bitcoin and cryptocurrencies at CoinGate Merchant Directory."
      },
      "Marketing & Advertising": {
        title: "Pay for Marketing & Advertising with Bitcoin & Crypto",
        description: "Explore the list of marketing and advertising platforms that accept Bitcoin and crypto payments. Use your cryptocurrency to buy ads, hire marketing agencies, and more."
      },
      "Online Stores": {
        title: "Shop at Online Stores that Accept Bitcoin & Crypto",
        description: "Find various online stores that accept Bitcoin and crypto and buy anything online with cryptocurrency. Visit the CoinGate Merchant Directory for a full list."
      },
      "Professional Services": {
        title: "Pay for Professional Services with Bitcoin & Crypto",
        description: "Find businesses that accept Bitcoin and crypto for various professional services. Pay for accounting, legal, design, or other services using Bitcoin and cryptocurrency."
      },
      Proxy: {
        title: "Pay for Proxy Services with Bitcoin & Crypto",
        description: "Use Bitcoin and cryptocurrencies to pay for these proxy services. Find secure proxy services that accept crypto at CoinGate Merchant Directory."
      },
      "Remote Desktop Protocols": {
        title: "Pay for Remote Desktop Protocol (RDP) with Crypto",
        description: "Find Remote Desktop Protocol (RDP) service providers that take payments in Bitcoin and cryptocurrency. See the full list of RDP providers in the CoinGate Merchant Directory."
      },
      "Software & Web Services": {
        title: "Buy Software with Crypto: VPN, RDP, Hosting & More",
        description: "Here's a list of software and web services where you can pay using cryptocurrency. Discover who accepts Bitcoin and other cryptocurrencies for VPNs, web hosting, domain names, and more."
      },
      "Trading Platforms": {
        title: "Pay for Trading Platforms Services with Bitcoin & Crypto",
        description: "Explore the list of trading platforms that accept payments in Bitcoin and cryptocurrencies for their services. See the full list at CoinGate Merchant Directory."
      },
      "Travel & Leisure": {
        title: "Pay for Travel & Leisure with Bitcoin & Crypto",
        description: "Use Bitcoin and cryptocurrency to book flights, hotels, and other travel services. Find the best crypto-friendly travel platforms at the CoinGate Merchant Directory."
      },
      VPN: {
        title: "Pay for VPN with Bitcoin, Stablecoins, Crypto",
        description: "Purchase VPN services and protect your privacy online using Bitcoin and cryptocurrencies. Find VPN providers that accept cryptocurrency."
      },
      "VPS & Hosting": {
        title: "Pay for VPS & Hosting with Cryptocurrency",
        description: "Pay for virtual private servers (VPS) and web hosting services using Bitcoin and cryptocurrencies. See the full list of hosting providers accepting cryptocurrency."
      }
    };

    return categoryData[category] || {
      title: `Pay for ${category} Services with Bitcoin & Crypto`,
      description: `Use Bitcoin & crypto to buy ${category.toLowerCase()} services. Explore the full list of companies that accept Bitcoin and cryptocurrency at CoinGate Merchant Directory.`
    };
  };

  const categoryData = getCategoryData(activeCategory);

  return (
    <>
    <section className="bg-white font-sans mt-20">

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

      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700 font-medium">Stores</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0b1121] leading-tight max-w-5xl">
          {categoryData.title}
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-500 max-w-2xl leading-relaxed">
          {categoryData.description}
        </p>
      </div>
    </section>

    <FeaturedMerchants />

    <StoresPage activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

    <ExploreCategories setActiveCategory={setActiveCategory} />
    </>
  )
}

export default HeroSection