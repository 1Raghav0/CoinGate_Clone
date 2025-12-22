import { Link } from "react-router-dom";
import { ChevronRight, X, ShieldCheck, CheckCircle2, Zap, Wallet, BadgeCheck } from "lucide-react";
import ExchangeableCurrencies from "./ExchangeableCurrencies";
import FAQSection from "./FAQSection";

const HeroSection = () => {
  return (
    <>
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={16} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition-colors">
          <X size={16} />
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 mb-6 md:mb-10 lg:mb-24">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Buy and Sell</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              Deposit, swap & withdraw <br />
              EUR, BTC, USDC, and more
            </h1>

            {/* Description */}
            <p className="text-gray-300 max-w-xl leading-relaxed">
              Buy crypto with a credit card or convert between fiat and crypto
              in 250+ trading pairs. Enjoy free deposits and withdrawals,
              low fees, and a fast, hassle-free experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
                Create a business account <ChevronRight size={18} />
              </button>

              <button className="inline-flex items-center gap-1 text-green-500 hover:underline font-medium">
                Buy instantly with card <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL (UNCHANGED) */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2023/10/10063757/swap_crypto_personal-1-1.png"
              alt="Crypto swap illustration"
              className="relative z-10 h-[500px] w-auto object-contain mt-20"
            />
          </div>

        </div>
      </main>
    </div>

    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Label */}
        <p className="text-xs md:text-lg font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Featured In
        </p>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          
          <img
            src="https://cdn.coingate.com/uploads/2023/09/10064119/Forbes-1.png"
            alt="Forbes"
            className="h-40 w-auto opacity-80 hover:opacity-100 transition"
          />

          <img
            src="https://cdn.coingate.com/uploads/2023/09/10064118/Bitcoinist-1-1-1.png"
            alt="Bitcoinist"
            className="h-40 w-auto opacity-80 hover:opacity-100 transition"
          />

          <img
            src="https://cdn.coingate.com/uploads/2023/09/10064118/yahoo-finance-1.png"
            alt="Yahoo Finance"
            className="h-40 w-auto opacity-80 hover:opacity-100 transition"
          />

          <img
            src="https://cdn.coingate.com/uploads/2023/09/10064119/Tech-times-1.png"
            alt="Tech Times"
            className="h-40 w-auto opacity-80 hover:opacity-100 transition"
          />

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Buy in minutes
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
              Want to buy crypto <br /> fast?
            </h2>

            <p className="text-gray-600 max-w-md">
              Use your credit/debit card to buy 250+ cryptocurrencies with your
              local currency in minutes after passing a quick one-time KYC
              check-up.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Buy now <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2023/09/10064139/achievements-1.png"
              alt="Buy crypto fast"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 max-w-3xl mx-auto">
          
          <div className="space-y-3">
            <ShieldCheck className=" text-green-500" size={28} />
            <h4 className="font-semibold text-[#0b1121]">Hassle-free</h4>
            <p className="text-sm text-gray-500">
              A quick one-time KYC process should take minutes.
            </p>
          </div>

          <div className="space-y-3">
            <CheckCircle2 className="text-green-500" size={28} />
            <h4 className="font-semibold text-[#0b1121]">Convenient</h4>
            <p className="text-sm text-gray-500">
              All your favorite cryptocurrencies in one place.
            </p>
          </div>

          <div className="space-y-3">
            <Zap className="text-green-500" size={28} />
            <h4 className="font-semibold text-[#0b1121]">Fast</h4>
            <p className="text-sm text-gray-500">
              Receive crypto to your wallet in less than 1 hour.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-[#0f172a] rounded-4xl px-8 py-16 md:px-16">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-sm md:text-lg font-semibold uppercase tracking-widest text-gray-400">
              Helping new users
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              First time dealing with <br /> crypto?
            </h2>

            <p className="text-gray-300 max-w-md">
              We’ve got you covered. Follow our step-by-step guide to learn how
              to deposit, swap, and withdraw your funds.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Read guide <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2023/10/10063756/btc_arrow_pointer-1.png"
              alt="Bitcoin cursor"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-3xl mx-auto ">

          {/* WALLET */}
          <div className="flex flex-col gap-4">
            <Wallet className="text-green-500 mt-1" size={28} />
            <div>
              <h4 className="font-semibold text-white mb-1">
                Need a wallet?
              </h4>
              <p className="text-sm text-gray-400 mb-2 max-w-sm">
                A crypto wallet securely stores, sends, and receives digital
                currencies like BTC and ETH. Don’t have one yet? Check our top
                picks for wallets.
              </p>
              <a
                href="#"
                className="text-sm text-green-500 font-medium hover:underline"
              >
                Pick your wallet
              </a>
            </div>
          </div>

          {/* VERIFY */}
          <div className="flex flex-col gap-4">
            <BadgeCheck className="text-green-500 mt-1" size={28} />
            <div>
              <h4 className="font-semibold text-white mb-1">
                Verify your account
              </h4>
              <p className="text-sm text-gray-400 mb-2 max-w-sm">
                The account verification process is easy with our extensive
                step-by-step guide covering all potentially tricky parts.
              </p>
              <a
                href="#"
                className="text-sm text-green-500 font-medium hover:underline"
              >
                How to verify your account
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-14">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-xs md:text-lg font-semibold uppercase tracking-widest text-gray-500">
              Convert crypto with ease
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
              Crypto conversion <br /> made simple
            </h2>

            <p className="text-gray-500 max-w-md">
              Want to give it a try? Start by creating a CoinGate account.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Start now <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#f4f6fb] rounded-2xl p-6 md:p-10">
              <img
                src="https://cdn.coingate.com/uploads/2023/09/10063801/credit_card_personal-1.png"
                alt="Crypto conversion card"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-[#0f172a] rounded-4xl px-8 py-16 md:px-16">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <p className="text-sm md:text-lg font-semibold uppercase tracking-widest text-gray-400">
              PURCHASE GOODS, SERVICES AND GIFT CARDS
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Find places to spend <br /> your crypto?
            </h2>

            <p className="text-gray-300 max-w-md">
              Select from 3,000+ Gift Cards and buy them with cryptocurrencies via CoinGate, Binance Pay, or using VISA/MasterCard.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Buy gift cards <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2023/10/10063755/gift_cards_dark3-1.png"
              alt="Bitcoin cursor"
              className="w-full max-w-lg object-contain"
            />
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-2xl mx-auto ">

          {/* WALLET */}
          <div className="flex flex-col gap-4">
            <Wallet className="text-green-500 mt-1" size={28} />
            <div>
              <h4 className="font-semibold text-white mb-1">
                Merchant directory
              </h4>
              <p className="text-sm text-gray-400 mb-2 max-w-sm">
                Discover hundreds of VPN, VPS, e-commerce, and other merchants accepting crypto with CoinGate.
              </p>
              <a
                href="#"
                className="text-sm text-green-500 font-medium hover:underline"
              >
                See stores
              </a>
            </div>
          </div>

          {/* VERIFY */}
          <div className="flex flex-col gap-4">
            <BadgeCheck className="text-green-500 mt-1" size={28} />
            <div>
              <h4 className="font-semibold text-white mb-1">
                Find even more stores
              </h4>
              <p className="text-sm text-gray-400 mb-2 max-w-sm">
                Visit our blog to find even more crypto-friendly businesses across various industries.
              </p>
              <a
                href="#"
                className="text-sm text-green-500 font-medium hover:underline"
              >
                Visit blog
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl px-8 py-16 text-center">

        {/* PRE-TITLE */}
        <p className="text-xs md:text-lg font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Supported cryptocurrencies
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] mb-6 leading-tight">
          In-demand assets <br className="hidden sm:block" />
          supported
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          We support a variety of the most highly-demanded cryptocurrencies across
          our services. Check the full list to see if your favorite is included.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
            All supported assets
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>

    <ExchangeableCurrencies />
    <FAQSection />

    </>
  );
};

export default HeroSection;
