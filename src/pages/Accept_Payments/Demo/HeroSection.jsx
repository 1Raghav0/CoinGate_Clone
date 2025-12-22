import { ChevronRight, X, Wallet,
  Bitcoin,
  FileText,
  CheckCircle, } from "lucide-react";

const HeroSection = () => {

    const steps = [
  {
    icon: Wallet,
    title: "Enter the amount",
    desc: "Set the total you want to pay in euros. The minimum is 1 EUR.",
  },
  {
    icon: Bitcoin,
    title: "Choose your currency",
    desc: "Select the crypto you prefer and, if needed, the network you’ll use.",
  },
  {
    icon: FileText,
    title: "Add your details",
    desc: "Provide the basic information required to process your payment.",
  },
  {
    icon: CheckCircle,
    title: "Complete the payment",
    desc: "Scan the QR code with your wallet and confirm the transaction.",
  },
];

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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Test the CoinGate <br /> checkout
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Experience how our checkout works by completing a donation to
              Blue/Yellow for Ukraine’s defence.
            </p>
          </div>

          {/* RIGHT CHECKOUT CARD */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative bg-white rounded-2xl p-6 w-[320px] shadow-2xl">

              {/* Logo */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-blue-500 to-yellow-400 flex items-center justify-center mb-2">
                  <span className="text-xl font-bold">⚜</span>
                </div>
                <p className="font-semibold text-[#0b1121]">
                  Blue / Yellow foundation
                </p>
              </div>

              {/* Amount */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                  Amount
                </label>
                <select className="w-full border rounded-lg px-3 py-2 text-[#0b1121] focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>€ 10</option>
                  <option>€ 20</option>
                  <option>€ 50</option>
                </select>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-semibold transition">
                Donate
              </button>

              {/* Footer */}
              <p className="text-xs text-center text-gray-400 mt-3">
                Powered by <span className="font-medium">CoinGate</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>

    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          How it works
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-6 h-6 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#101828]  rounded-3xl px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white px-4 md:px-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Blue/Yellow
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-white">Blue / Yellow</strong> is a
                Lithuanian non-governmental organisation founded in 2014.
              </p>

              <p>
                Its mission is to support Ukrainian soldiers and volunteers
                defending against Russian aggression by providing non-lethal
                but tactical supplies (gear, medical, drones, vehicles) as well
                as humanitarian help for civilians.
              </p>

              <p>
                CoinGate contributes by helping the organisation collect
                donations in various cryptocurrencies, making global support
                faster and easier.
              </p>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold">
              Learn more <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2025/11/25113016/Ukraine-img-black-1.png" // replace with your asset
              alt="Blue Yellow donation illustration"
              className=""
            />
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
