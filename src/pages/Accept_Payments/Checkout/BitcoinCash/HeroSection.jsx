import {ChevronRight, X, ShieldCheck} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import FAQSection from "./FAQSection";
import PartnersMarquee from "../../../../components/PartnersMarquee";
import ClientTestimonials from "../../../../components/ClientTestimonials";
import BitcoinCashSections from "./BitcoinCashSections";
import BitcoinCashForm from "./BitcoinCashForm";
import AcceptPayment from "../../../../components/AcceptPayments";

const HeroSection = () => {
  const navigate = useNavigate();

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
            <span className="text-white">Accept Bitcoin Cash</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                Accept Bitcoin Cash (BCH) payments
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Accept Bitcoin Cash payments with our flexible and multi-functional BCH payment processor for SMBs and large enterprieses. 
              </p>

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

      <BitcoinCashSections />

      <ClientTestimonials />

      <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-10 md:p-16 text-center">

        {/* TOP LABEL */}
        <p className="text-xs md:text-lg font-bold  uppercase text-gray-400 mb-4">
          The More The Member
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
          Accept payments in BCH and other cryptocurrencies
        </h2>

        <p className="text-xs md:text-lg text-gray-400 mb-4 max-w-3xl mx-auto">
          Besides Bitcoin Cash, our payment solution also allows accepting other cryptocurrencies like Bitcoin, Dogecoin, Litecoin, and other options.
        </p>


        {/* CTA BUTTON */}
        <button onClick={() => navigate('/supported-currencies')} className="my-10 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          View all supported coins →
        </button>

        {/* ICON GRID */}
        <AcceptPayment />
      </div>
    </section>

      <section className="bg-gray-50 py-1 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-10 py-16 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
            How to accept Bitcoin Cash
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-500 text-sm md:text-base mb-8">
            <li>Create a business account at FinPE</li>
            <li>Pass the verification process</li>
            <li>Select and enable a preferred payment integration method</li>
            <li>
              Provide your BCH wallet or other payout (withdrawal) address
            </li>
            <li>
              Collect Bitcoin Cash and other crypto payments automatically
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
              src="https://cdn.coingate.com/uploads/2023/09/10063805/eth-image-1-1.png"
              alt="Ethereum"
              className="w-full max-w-3xl"
            />
          
        </div>

      </div>
    </section>

    <BitcoinCashForm />

      <FAQSection />
    </>
  )
}

export default HeroSection