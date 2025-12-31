import { ArrowDownUp, ChevronDown } from "lucide-react";
import { FaBitcoin, FaEuroSign } from "react-icons/fa";

const CryptoConverterSection = () => {
  return (
    <section className="bg-[#f7f8fa] py-16 lg:py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-4 lg:px-20">

        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] mb-4">
            Convert BTC to EUR
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Use our converter to check the current BTC to EUR exchange rate
            and make real-time conversions instantly through your CoinGate
            account.
          </p>
        </div>

        {/* RIGHT CONVERTER CARD */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-sm p-6">

            {/* FROM */}
            <div className="mb-4">
              <label className="text-xs text-gray-500 block mb-1">
                Enter amount
              </label>
              <div className="flex items-center justify-between border rounded-xl px-4 py-3">
                <input
                  type="number"
                  value="1"
                  className="w-20 outline-none text-[#0b1121] font-medium"
                />

                <button className="flex items-center gap-2 text-sm font-semibold">
                  <FaBitcoin className="text-orange-500 text-lg" />
                  BTC
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* SWAP ICON */}
            <div className="flex justify-center my-3">
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                <ArrowDownUp size={18} className="text-indigo-600" />
              </div>
            </div>

            {/* TO */}
            <div className="mb-2">
              <label className="text-xs text-gray-500 block mb-1">
                Exchanged to
              </label>
              <div className="flex items-center justify-between border rounded-xl px-4 py-3">
                <span className="text-[#0b1121] font-semibold">
                  75251.36
                </span>

                <button className="flex items-center gap-2 text-sm font-semibold">
                  <FaEuroSign className="text-blue-600 text-lg" />
                  EUR
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {/* RATE */}
            <p className="text-xs text-gray-500 mt-2">
              1 BTC ≈ <span className="font-medium">75251.36 EUR</span>
            </p>

            {/* BUTTON */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl mt-4 transition">
              Exchange now
            </button>

            {/* FOOTER */}
            <p className="text-[11px] text-gray-400 text-center mt-4 leading-relaxed">
              Exchange rates are dynamic.
              <br />
              Last update: 06:00 AM, December 31, 2025.
              <span className="text-indigo-600 cursor-pointer ml-1">
                Refresh
              </span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CryptoConverterSection;
