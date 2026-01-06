import { ChevronRight, X, RefreshCw, Repeat, Zap, Code,
  CreditCard,
  ShoppingCart,
  FileText, } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import PartnersMarquee from "../../../../components/PartnersMarquee";
import BitcoinCheckout from "./BitcoinCheckout";
import BTCBenefits from "./BTCBenefits";
import BlogCarousel from "./BlogCarousel";
import FAQSection from "./FAQSection";
import AcceptPayment from "../../../../components/AcceptPayments";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
  "Lower than credit card fees – <1% per transaction",
  "Bitcoin-to-fiat payouts (USD, EUR, GBP) to bank account",
  "Payments without borders in 176 countries",
  "Easily issue BTC refunds",
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
            <span className="text-white">Accept Bitcoin</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                Accept Bitcoin payments & get paid faster, no delays
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Accept Bitcoin payments and redefine how you do business globally.  
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
                <button onClick={() => navigate('/register')} className="bg-green-500 hover:bg-green-600 px-7 py-2 rounded-xl font-semibold transition">
                  Setup BTC payments now!
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="p-4 ">
                <img
                  src="	https://cdn.coingate.com/uploads/2023/12/10063745/Accept_main_img_01.png"
                  alt="Checkout UI"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-4 pt-16 bg-gray-50">
        <PartnersMarquee />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-white rounded-3xl px-6 py-14 text-center">
          
          {/* Top label */}
          <p className="text-xs md:text-lg lg:text-xl tracking-widest font-semibold text-gray-400 uppercase mb-3">
            Receive Bitcoin Payments
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-2xl mx-auto font-semibold text-gray-900 mb-4">
            The best method to accept Bitcoin
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-500 mb-12">
            Businesses that accept Bitcoin payments boost customer engagement
            and expand their reach. Get ahead of competition by joining rapidly
            expanding digital economy early.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left max-w-3xl mx-auto">
            
            {/* Feature 1 */}
            <div>
              <div className="mb-4">
                <Repeat className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Accept BTC payments effortlessly
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Easily integrate Bitcoin payments directly within your existing
                checkout flow via plugins, invoicing, API, and more.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4">
                <RefreshCw className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Collect BTC, receive fiat
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Prefer a hands-off approach? Accept Bitcoin and automatically
                convert to fiat, instantly deliver directly to your bank
                account. Real-time settlements and payouts in EUR / GBP and USD.
              </p>
            </div>

            {/* Feature 3 */}
            <div>
              <div className="mb-4">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                Bitcoin Lightning Network support
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Bitcoin Lightning Network allows your customers to save money
                on fees. No extra costs or development needed — it’s enabled by
                default.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <BitcoinCheckout />

    <section className="px-4 pt-8 bg-gray-50">
      <div className="mx-auto max-w-7xl rounded-2xl bg-slate-600 ">
        <div className=" px-8 py-10 md:px-12 md:py-12 max-w-4xl mx-auto">
          <p className="text-lg font-medium leading-relaxed text-white md:text-xl lg:text-2xl ">
            "With the help of CoinGate we have increased our conversion
            rates and attracted more customers who value privacy and
            prefer crypto payments."
          </p>

          <div className="mt-6 flex items-center gap-4 ">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-400 text-sm font-semibold text-white">
              VR
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Vaidas Rutkauskas
              </p>
              <p className="text-xs text-slate-200">
                CEO, Cherry Servers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-10 md:p-16 text-center">

        {/* TOP LABEL */}
        <p className="text-xs md:text-lg font-bold  uppercase text-gray-400 mb-4">
          BEYOND BITCOIN PAYMENTS
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
          Accept more than BTC payments
        </h2>

        <p className="text-xs md:text-lg text-gray-400 mb-4">
          Our Bitcoin checkout system lets you collect dozens of other cryptocurrencies, all through one simple setup.
        </p>


        {/* CTA BUTTON */}
        <button onClick={() => navigate('/supported-currencies')} className="my-10 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          View all supported coins →
        </button>

        {/* ICON GRID */}
        <AcceptPayment />
      </div>
    </section>
    

    <section className="bg-white pt-8 px-6">
  <div className="max-w-7xl mx-auto bg-[#0b1121] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden">

    {/* ===== TOP CONTENT ===== */}
    <div className="flex flex-col lg:flex-row items-center gap-14 mb-16">
      
      {/* LEFT */}
      <div className="lg:w-1/2">
        <span className="text-gray-400 uppercase text-xs font-bold tracking-widest block mb-4">
          BITCOIN PAYMENTS MADE SIMPLE
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Accept Bitcoin payments on your website,
           on your own terms
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          With us, there’s more than one way to integrate BTC payments into your business.
          Use our API for full customization, official e-commerce plugins, or email invoicing
          solutions. It’s hassle-free – no coding knowledge is needed.
        </p>

        <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl font-semibold text-sm">
          Test in sandbox
          <span className="text-lg">›</span>
        </button>
      </div>

      {/* RIGHT */}
      <div className="lg:w-1/2 flex justify-center relative">
        <div className="">
          
          <img
            src="https://cdn.coingate.com/uploads/2023/12/10063743/On_your_terms_man_laptop_img_02.png"
            alt="BTC payments"
            className=""
          />
        </div>
      </div>
    </div>

    {/* ===== BOTTOM FEATURES ===== */}
    <div className="grid grid-cols-1 gap-10 border-t border-gray-800 pt-12 md:grid-cols-2 lg:grid-cols-4">

  <div>
    <Code className="mb-4 h-6 w-6 text-green-400" />
    <h4 className="mb-3 font-semibold text-white">Bitcoin Payment API</h4>
    <p className="mb-3 text-sm leading-relaxed text-gray-400">
      Accept BTC on your website with our well-documented API for maximum customization.
    </p>
    <a href="#" className="text-sm text-green-400 hover:underline">
      More about API
    </a>
  </div>

  <div>
    <CreditCard className="mb-4 h-6 w-6 text-green-400" />
    <h4 className="mb-3 font-semibold text-white">BTC Payment Buttons</h4>
    <p className="mb-3 text-sm leading-relaxed text-gray-400">
      Accept payments in BTC by integrating payment buttons. No coding required.
    </p>
    <a href="#" className="text-sm text-green-400 hover:underline">
      More about Buttons
    </a>
  </div>

  <div>
    <ShoppingCart className="mb-4 h-6 w-6 text-green-400" />
    <h4 className="mb-3 font-semibold text-white">E-commerce Plugins</h4>
    <p className="mb-3 text-sm leading-relaxed text-gray-400">
      Easily accept Bitcoin payments with plugins for mainstream platforms.
    </p>
    <a href="#" className="text-sm text-green-400 hover:underline">
      More about eComm Plugins
    </a>
  </div>

  <div>
    <FileText className="mb-4 h-6 w-6 text-green-400" />
    <h4 className="mb-3 font-semibold text-white">Bitcoin Billing</h4>
    <p className="mb-3 text-sm leading-relaxed text-gray-400">
      Send Bitcoin invoices to customers or partners via email or direct link.
    </p>
    <a href="#" className="text-sm text-green-400 hover:underline">
      More about Billing
    </a>
  </div>

</div>

  </div>
</section>

<BTCBenefits />

<BlogCarousel />

<section className="bg-gray-50 py-1 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0b1121] to-[#0e162b] rounded-3xl px-6 py-14 md:px-16 md:py-20 text-center">
          
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">
            CoinGate in Numbers
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Merchant Orders */}
            <div>
              <p className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                5,093,294
              </p>
              <p className="text-sm text-gray-300">
                Merchant Orders
              </p>
            </div>

            {/* Registered Users */}
            <div>
              <p className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                620,957
              </p>
              <p className="text-sm text-gray-300">
                Registered Users
              </p>
            </div>

            {/* Transactions Made */}
            <div>
              <p className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                5,346,103
              </p>
              <p className="text-sm text-gray-300">
                Transactions Made
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>



<FAQSection />


    
    </>
  )
}

export default HeroSection