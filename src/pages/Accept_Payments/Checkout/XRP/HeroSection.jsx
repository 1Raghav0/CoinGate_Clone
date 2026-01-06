import {ChevronRight, X, ShieldCheck} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FAQSection from "./FAQSection";
import PartnersMarquee from "../../../../components/PartnersMarquee";
import ClientTestimonials from "../../../../components/ClientTestimonials";
import Payment from "./Payment";
import XRPSections from "./XRPSections";
import XRPForm from "./XRPForm";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
  "Lower than credit card fees – <1% per transaction",
  "Instantly convert XRP to BTC, ETH, SOL & other crypto",
  "XRP-to-fiat payouts (USD, EUR, GBP) to bank account",
  "Service supported 176 countries",
  "Industry leading XRP refund system",
  "Multiple ways to integrate: API, plugins, billing, PoS & more…",
];

  return (
    <>
    <section className="bg-[#0b1121] mt-20 text-white font-sans overflow-hidden">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
          <div className="flex items-center gap-2">
            <span>FinPE obtained MiCA license! 🎉</span>
            <a href="#" className="flex items-center underline hover:opacity-80">
              Learn more <ChevronRight size={14} />
            </a>
          </div>
          <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
            <X size={16} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-10 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link to="/checkout-integration" className="hover:text-white">Accept crypto payments</Link>
            <ChevronRight size={14} />
            <span className="text-white">Accept XRP</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                Accept XRP payments
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Accept XRP payments or other cryptocurrencies with our flexible Ripple payment gateway designed for forward-thinking businesses. 
              </p>

              <ul className="space-y-3">
      {features.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-gray-200">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-black">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

              <div className="flex flex-wrap items-center gap-6">
                <button onClick={() => navigate('/register')} className="bg-green-500 hover:bg-green-600 px-7 py-2 rounded-xl font-semibold transition flex items-center justify-center gap-2">
                  Open a business account <ChevronRight size={16} className="mt-1 text-green-200"/>
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="p-4 ">
                <img
                  src="https://cdn.coingate.com/uploads/2023/08/10064151/Frame-4392-1.png"
                  alt="Checkout UI"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersMarquee />

      <XRPSections />

      <ClientTestimonials />

      <Payment />

      <section className="bg-gray-50 py-1 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-10 py-16 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
            How to accept <br /> XRP?
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-500 text-sm md:text-base mb-8">
            <li>Create a business account at CoinGate</li>
            <li>Pass the verification process</li>
            <li>Select and enable a preferred payment integration method</li>
            <li>
              Provide your XRP wallet or other payout (withdrawal) address
            </li>
            <li>
              Collect XRP and other crypto payments automatically
            </li>
          </ol>

          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all">
            Create an account
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Right Visual */}
        <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://cdn.coingate.com/uploads/2023/08/10063806/XRP-Ripple-2-1.png"
              alt="XRP"
              className="w-full max-w-3xl"
            />
          
        </div>

      </div>
    </section>

    <XRPForm />

      <FAQSection />
    </>
  )
}

export default HeroSection