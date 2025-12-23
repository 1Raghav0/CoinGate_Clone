import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#f7f8fa] pt-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* ================= LEFT FEATURED CARD ================= */}
        <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://cdn.coingate.com/uploads/2025/11/20082854/New-Checkout-announcement.png"
              alt="Crypto Checkout"
              className="w-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <span className="inline-block text-xs font-medium text-gray-500 mb-2">
              Company Updates
            </span>

            <h2 className="text-xl md:text-2xl font-bold text-[#0b1121] mb-2">
              Introducing an Improved Crypto Checkout Experience
            </h2>

            <p className="text-gray-500 text-sm mb-4">
              We’ve developed the best checkout experience yet.
            </p>

            <span className="text-xs text-gray-400">
              November 24, 2025
            </span>
          </div>
        </div>

        {/* ================= RIGHT STACKED CARDS ================= */}
        <div className="flex flex-col lg:col-span-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
            <div className="p-4 flex-1">
              <span className="text-xs text-gray-500">Data reports</span>
              <h3 className="text-sm font-semibold text-[#0b1121] mt-1">
                Bitcoin Payments: Eleven-Year Data Overview (2014–2025)
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                October 28, 2025
              </p>
            </div>
            <div className="bg-indigo-600 w-28 flex items-center justify-center">
              <span className="text-4xl">₿</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
            <div className="p-4 flex-1">
              <span className="text-xs text-gray-500">Data reports</span>
              <h3 className="text-sm font-semibold text-[#0b1121] mt-1">
                Seven Years of Litecoin: Consumer Payments Data Report
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                September 18, 2025
              </p>
            </div>
            <div className="bg-purple-600 w-28 flex items-center justify-center">
              <span className="text-4xl">Ł</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
            <div className="p-4 flex-1">
              <span className="text-xs text-gray-500">Case studies</span>
              <h3 className="text-sm font-semibold text-[#0b1121] mt-1">
                Nearly Half of PlainProxies Customers Pay with Crypto
              </h3>
              <p className="text-xs text-gray-400 mt-2">
                August 26, 2025
              </p>
            </div>
            <div className="bg-indigo-500 w-28 flex items-center justify-center">
              <span className="text-sm font-bold text-white">PDF</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
