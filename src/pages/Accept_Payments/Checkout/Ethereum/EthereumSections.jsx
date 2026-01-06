import {
  ChevronRight,
  Plug,
  Code2,
  ShieldCheck,
  Repeat,
  Wallet,
  Lock,
} from "lucide-react";

const EthereumSections = () => {
  return (
    <div className="space-y-8 bg-gray-50 py-20">

      {/* ================= SECTION 1 ================= */}
      {/* One of the best Litecoin payment gateways */}
      <section className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left */}
        <div className="lg:w-1/2 space-y-6">
          <span className="text-xs font-semibold text-gray-400 uppercase">
            We are CoinGate
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            One of the best Etereum payment gateways out there
          </h1>

          <p className="text-gray-500 text-lg">
            Get paid in Ethereum with a powerful API, e-commerce plugins, email billing, and other solutions for collecting ETH payments. Additionally, enjoy the benefits of converting crypto funds to a local fiat currency.
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
            alt="Ethereum Gateway"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      {/* Dark integration section */}
      <section className="max-w-7xl mx-auto bg-[#0b1121] rounded-[2.5rem] p-12 md:p-20 text-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            You're in control
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            From one-click setup to custom Ethereum payment method integrations
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            CoinGate’s Ethereum payment solutions are tailored for every type of business. Install in minutes using a simple plugin, send your bills manually, or use a programmable Ethereum payment API and build a custom-made ETH payment gateway – integration that works for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
          {/* Card */}
          <div className="space-y-4">
            <Plug className="text-green-500" />
            <h3 className="text-lg font-semibold">
              Ethereum Payment Sandbox
            </h3>
            <p className="text-gray-400 text-sm">
              Test your ETH payment tools in a safe environment.
            </p>
            <span className="text-green-500 text-sm cursor-pointer">
              Test in Sandbox →
            </span>
          </div>

          <div className="space-y-4">
            <ShieldCheck className="text-green-500" />
            <h3 className="text-lg font-semibold">
              Ethereum payment Plugins
            </h3>
            <p className="text-gray-400 text-sm">
              Accept Ethereum payments using plugins and extensions for popular
              platforms.
            </p>
            <span className="text-green-500 text-sm cursor-pointer">
              View all Plugins →
            </span>
          </div>

          <div className="space-y-4">
            <Code2 className="text-green-500" />
            <h3 className="text-lg font-semibold">
              Code libraries
            </h3>
            <p className="text-gray-400 text-sm">
              Get familiar with CoinGate’s API and vast Litecoin capabilities.
            </p>
            <span className="text-green-500 text-sm cursor-pointer">
              Review code libraries →
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
          Ethereum withdrawals made simple
        </h2>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
          Adjust ETH withdrawals to your liking. Set the amount, destination,
          and timing for a seamless transaction experience.
        </p>

        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-sm font-medium inline-flex items-center gap-2">
          Start now <ChevronRight size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="space-y-4">
            <Repeat className="mx-auto text-green-500" />
            <h4 className="font-semibold text-[#0b1121]">
              Convert Ethereum to fiat currency
            </h4>
            <p className="text-gray-500 text-sm">
              ETH payments can be exchanged to EUR or GBP and sent to your bank.
            </p>
          </div>

          <div className="space-y-4">
            <Wallet className="mx-auto text-green-500" />
            <h4 className="font-semibold text-[#0b1121]">
              Settle Ethereum to another crypto
            </h4>
            <p className="text-gray-500 text-sm">
              Change your payout settings to receive BTC or other coins.
            </p>
          </div>

          <div className="space-y-4">
            <Lock className="mx-auto text-green-500" />
            <h4 className="font-semibold text-[#0b1121]">
              Keep Ethereum in its original form
            </h4>
            <p className="text-gray-500 text-sm">
              Withdraw collected ETH payments directly to your ETH wallet.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EthereumSections;
