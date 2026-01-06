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

const DogecoinSections = () => {
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
            One of the best Dogecoin payment gateways out there
          </h1>

          <p className="text-gray-500 text-lg">
            Start accepting Dogecoin with a powerful API, e-commerce plugins, email billing, and other solutions for collecting payments. Enjoy the benefits of converting funds to a local fiat currency.
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
          Doge Payment Initiation
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
          Convenient Dogecoin payment processor integration
        </h2>

        <p className="text-gray-300 mt-4 text-base leading-relaxed">
          CoinGate’s DOGE solutions are tailored for each and every type of business. Install a simple plugin within minutes, send bills manually, or use a programmable API for building custom-made integrations with our Dogecoin payment gateway – whatever suits your needs the best.
        </p>
      </div>

      {/* Bottom Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
        
        {/* Sandbox */}
        <div className="space-y-4">
          <Boxes className="text-green-500" />
          <h3 className="text-lg font-semibold">Sandbox</h3>
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
          <h3 className="text-lg font-semibold">Plugins</h3>
          <p className="text-gray-400 text-sm">
            See all the official plugins developed for e-commerce platforms.
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
            Get familiar with FinPE’s API and its vast XRP capabilities.
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
          SIMPLIFIED DOGE MANAGEMENT
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mt-4">
          Withdraw Dogecoin your way
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
          WTailor Dogecoin withdrawals to your liking. Set the amount, destination, and timing for a seamless transaction experience.
        </p>

        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-sm font-medium inline-flex items-center gap-2">
          Start now <ChevronRight size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-3xl mx-auto">
          <div className="space-y-4">
            <Repeat className=" text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Convert Dogecoin to fiat currency
            </h4>
            <p className="text-gray-500 text-left text-sm">
              DOGE payments can be exchanged to EUR or GBP and sent to your bank.
            </p>
          </div>

          <div className="space-y-4">
            <Wallet className=" text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Settle Dogecoin to another crypto
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Change your payout settings to receive BTC or other coins. when you get DOGE, simply change your payout settings.
            </p>
          </div>

          <div className="space-y-4">
            <Lock className="text-green-500" />
            <h4 className="font-semibold text-left text-[#0b1121]">
              Keep Dogecoin
            </h4>
            <p className="text-gray-500 text-left text-sm">
              Withdraw collected DOGE payments directly to your DOGE wallet.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DogecoinSections;
