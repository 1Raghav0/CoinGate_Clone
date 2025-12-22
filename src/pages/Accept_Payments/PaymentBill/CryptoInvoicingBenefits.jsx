import {
  CheckCircle2,
  Globe,
  ShieldCheck,
  Wallet,
  Users,
  Coins,
} from "lucide-react";

const CryptoInvoicingBenefits = () => {
  return (
    <section className="space-y-4 ">

      {/* ===================== SECTION 1 ===================== */}
      {/* WHY USE CRYPTO BILLING */}
      <div className="bg-[#0b1121] rounded-4xl px-6 py-16 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">
            <div className="">
              <img
                src="https://cdn.coingate.com/uploads/2023/11/10063813/Accept_web3_phone_circle-1.png" // replace with your asset
                alt="Crypto billing"
                className="w-full relative z-10"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white space-y-6">
            <p className="text-sm tracking-widest text-green-500 uppercase">
              Crypto Invoicing
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Why use our crypto <br /> billing system?
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" />
                Receive crypto payments from all over the globe
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" />
                Reach customers without access to modern banking
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" />
                Remove middlemen from your payment process
              </li> 
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" /> 
                Reduce fraud by eliminating chargebacks
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" />
                Enjoy low processing fees
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" />
                Provide flexibility for existing and new customers
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===================== SECTION 2 ===================== */}
      {/* STREAMLINE PAYMENTS */}
      <div className="bg-[#0b1121] rounded-4xl max-w-7xl mx-auto px-6 py-20 mb-10 md:px-16 text-white text-center">

        <p className="text-sm tracking-widest text-green-500 uppercase mb-4">
          Crypto Invoice Generator
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold lg:text-5xl max-w-xl mx-auto leading-tight">
          Streamline your payments with automated crypto invoicing
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Give your business all the tools to accept, send, manage,
          and grow with cryptocurrency.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-10 mt-16 text-left px-4 md:px-8 lg:px-16">

          <div className="space-y-4">
            <Coins className="text-green-400" size={28} />
            <h3 className="font-semibold text-lg">
              Accept many cryptos per invoice
            </h3>
            <p className="text-gray-400 text-sm">
              Send one invoice and let customers choose between BTC, ETH,
              LTC, USDC, and more.
            </p>
          </div>

          <div className="space-y-4">
            <Wallet className="text-green-400" size={28} />
            <h3 className="font-semibold text-lg">
              Settle in EUR, BTC, stablecoins, and more
            </h3>
            <p className="text-gray-400 text-sm">
              Convert collected crypto into your preferred currency
              and withdraw to a bank account or wallet.
            </p>
          </div>

          <div className="space-y-4">
            <Users className="text-green-400" size={28} />
            <h3 className="font-semibold text-lg">
              Manage team access and roles
            </h3>
            <p className="text-gray-400 text-sm">
              Assign permissions and control who can access
              different parts of your CoinGate business account.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CryptoInvoicingBenefits;
