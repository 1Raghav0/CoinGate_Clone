import {
  ChevronRight,
  Plug,
  Code2,
  ShieldCheck,
  Repeat,
  ReceiptText, Boxes,
  Wallet,
  Lock,
} from "lucide-react";

const BinancecoinSections = () => {
  return (
    <div className="space-y-8 bg-gray-50 py-20">

      {/* ================= SECTION 1 ================= */}
      {/* One of the best Litecoin payment gateways */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left */}
        <div className="lg:w-1/2 space-y-6">
          <span className="text-xs font-semibold text-gray-400 uppercase">
            We are Finpe
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            One of the best Binance Coin payment gateways out there
          </h1>

          <p className="text-gray-500 text-lg">
            Get paid in Binance Coin with a powerful API, e-commerce plugins, email billing, and other solutions for collecting payments. Enjoy the benefits of converting funds to a local fiat currency.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-[#5b45e0] hover:bg-[#4a37c9] text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
              How it works <ChevronRight size={16} />
            </button>

            <button className="text-[#5b45e0] text-sm font-medium hover:underline">
              Visit demo shops →
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="https://cdn.coingate.com/uploads/2023/08/10064148/Group-46142-1.png"
            alt="Litecoin Gateway"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      {/* Dark integration section */}
      <section className="max-w-7xl mx-auto bg-[#0b1121] rounded-[2.5rem] p-12 md:p-20 text-white">
      
      {/* Top Content */}
      <div className="max-w-3xl mb-20 mx-auto text-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          You're in control
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight max-w-2xl mx-auto">
          From one-click setup to custom Binance Coin integrations
        </h2>

        <p className="text-gray-300 mt-4 text-base leading-relaxed max-w-2xl mx-auto">
          FinPE’s Binance Coin payment solutions are tailored for each and every type of business.rnrnInstall a simple payment plugin within minutes, send bills manually, or use a programmable API for building custom-made integrations with our BNB payment gateway – whatever works best for you
        </p>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-3xl mx-auto">
        
        {/* Sandbox */}
        <div className="space-y-4">
          <Boxes className="text-green-500" />
          <h3 className="text-lg font-semibold">Binance Coin Payment Sandbox</h3>
          <p className="text-gray-400 text-sm">
            Test our payment tools in a safe environment.
          </p>
          <span className="text-green-500 text-sm cursor-pointer">
            Test in sandbox →
          </span>
        </div>

        {/* Plugins */}
        <div className="space-y-4">
          <Plug className="text-green-500" />
          <h3 className="text-lg font-semibold">Binance Coin Payment Plugins</h3>
          <p className="text-gray-400 text-sm">
            Accept BNB payments with using plugins and extensions developed for mainstream e-commerce platforms.
          </p>
          <span className="text-green-500 text-sm cursor-pointer">
            See all Plugins →
          </span>
        </div>

        {/* Code Libraries */}
        <div className="space-y-4">
          <Code2 className="text-green-500" />
          <h3 className="text-lg font-semibold">Code libraries</h3>
          <p className="text-gray-400 text-sm">
            Get familiar with FinPE’s API and its vast BNB capabilities.
          </p>
          <span className="text-green-500 text-sm cursor-pointer">
            Review Code Libraries →
          </span>
        </div>

      </div>
    </section>

      {/* ================= SECTION 3 ================= */}
      {/* Litecoin withdrawals */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 text-center">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          It’s all automated
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mt-4">
          Binance Coin withdrawals made simple
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
          Adjust withdrawals to your liking.
        </p>

        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-sm font-medium inline-flex items-center gap-2">
          Start now <ChevronRight size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            <Repeat className=" text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Convert Binance Coin to fiat currency
            </h4>
            <p className="text-gray-500 text-left text-sm">
              BNB payments can be exchanged to EUR or GBP and sent to your bank.
            </p>
          </div>

          <div className="space-y-4">
            <Wallet className=" text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Settle Binance Coin to another crypto
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Change your payout settings to receive BTC or other coins. when you get BNB, simply change your payout settings.
            </p>
          </div>

          <div className="space-y-4">
            <Lock className="text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Keep Binance Coin in its original form
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Withdraw collected BNB payments directly to your BNB wallet.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BinancecoinSections;
