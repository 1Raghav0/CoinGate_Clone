import { ChevronRight, X, Gift, Share2 } from "lucide-react";
import DiscoverMoreSection from "./DiscoverMoreSection";

const HeroSection = () => {

    const features = [
    {
      title: "Merchant Directory",
      description: "Explore a directory of CoinGate-verified websites and online stores that accept Bitcoin and cryptocurrencies",
      image: "https://cdn.coingate.com/uploads/2023/09/10063800/merchant_personal-1.png",
      side: 'left'
    },
    {
      title: "Gift Cards For Crypto",
      description: "Buy gift cards of the most popular brands with multiple  cryptocurrency options. Lightning Network / BSC / Polygon / Arbitrum / Binance Pay payments supported!",
      image: "https://cdn.coingate.com/uploads/2023/09/10063800/giftcards_personal-2-1.png",
      side: 'right'
    },
    {
      title: "Buy Crypto (Credit/Debit Card)",
      description: "Buy 250+ crypto fast using your VISA or MasterCard credit or debit card, powered by Simplex and MoonPay.",
      image: "https://cdn.coingate.com/uploads/2023/09/10063801/credit_card_personal-1.png",
      side: 'left'
    }
  ];

  return (
    <>
    <section className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* ================= Announcement Bar ================= */}
      <div className="bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition">
          <X size={14} />
        </button>
      </div>

      {/* ================= Main Content ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
         {/* Breadcrumb */}
            <div className="text-sm text-gray-400 ">
              Home <span className="mx-2">›</span>
              <span className="text-white">Personal</span>
            </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-tight">
              Welcome to our <br />
              Cryptocurrency Hub
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Bitcoin and cryptocurrency adoption is on the way! Relax and take
              your time to explore our ever-developing crypto kingdom.
            </p>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-lg aspect-square rounded-full overflow-hidden">
              <img
                src="https://cdn.coingate.com/uploads/2023/11/10063747/personal_main_crypto_woman2.png"
                alt="Cryptocurrency hub"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 pt-5 pb-12 font-sans overflow-hidden">
          <div className="max-w-7xl px-4 md:px-8 lg:px-20 py-16 rounded-2xl  bg-white mx-auto"> 
            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block -translate-x-1/2" />
    
              <div className="space-y-24">
                {features.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${
                      item.side === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0b1121]">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {item.description}
                      </p>
                      <button className="bg-green-50 hover:bg-[#48f965] text-[#22cf4d] font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-all">
                        Explore <ChevronRight size={18} />
                      </button>
                    </div>
    
                    {/* Decorative Dot on the line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-200 rounded-full hidden lg:block z-10" />
    
                    {/* Image/Mockup Area */}
                    <div className="lg:w-1/2 w-full">
                      <div className="bg-[#f8faff] rounded-2xl aspect-square flex items-center justify-center shadow-sm border border-gray-50">
                        {/* Placeholder for your actual dashboard/icon images */}
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-contain mix-blend-multiply opacity-80"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-8 py-16 md:px-16 text-center">

        {/* Top label */}
        <p className="text-xs md:text-lg  tracking-widest text-gray-400 font-semibold mb-4">
          WE ARE COINGATE
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-4">
          Let’s make crypto adoption <br /> happen together
        </h2>

        {/* Sub text */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          We give our users an opportunity to earn while helping us grow the
          community.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-xl mx-auto text-left">

          {/* Card 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              <Share2 className="w-7 h-7 text-gray-500" />
            </div>

            <h3 className="text-lg font-semibold text-[#0b1121]">
              Payment Gateway Referrals
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              We’re distributing a commission of 20% from the transaction fees
              we gather, sharing it with our users for every business they bring
              to our platform.
            </p>

            <a
              href="#"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              Learn more
            </a>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              <Gift className="w-7 h-7 text-gray-500" />
            </div>

            <h3 className="text-lg font-semibold text-[#0b1121]">
              Gift Card Affiliates
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              You will receive an 8% commission when someone purchases a gift
              card from CoinGate through your affiliate link.
            </p>

            <a
              href="#"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              Learn more
            </a>
          </div>

        </div>
      </div>
    </section>

    <DiscoverMoreSection />

    <section className="bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl px-8 md:px-16 py-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-xs md:text-lg font-semibold tracking-widest text-gray-400 mb-4 uppercase">
              We are CoinGate
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
              What’s CoinGate?
            </h2>

            <p className="text-gray-500 leading-relaxed mb-5">
              CoinGate is a cryptocurrency service provider founded in 2014 and
              based in Lithuania. CoinGate offers flexible, automated
              cryptocurrency payment processing, remittance and accounting
              services for businesses of all sizes looking to modernize their
              payment options, attract more customers, and increase sales.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              Start accepting BTC, TRX, LTC, USDC, and many more with an option to
              settle in EUR, USD or GBP and withdraw to a bank account.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition">
              Learn more
              <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2023/08/10064147/image-1.png"
              alt="CoinGate cube illustration"
              className="w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b1121] rounded-4xl px-8 md:px-16 py-14 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              We’re always looking <br /> for talents
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Want to work at CoinGate? Check whether we’re looking for
              someone with your skillset.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full transition">
              See job opportunities
              <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="">
            <div className="">
              <img
                src="https://cdn.coingate.com/uploads/2023/09/10064139/about_us_hiring_04-1.png"
                alt="CoinGate team"
                className="w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
