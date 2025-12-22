import React from "react";
import {
  CreditCard,
  Plug,
  Code,
  ChevronRight,
} from "lucide-react";

const CryptoInvoiceCTA = () => {
  return (
    <section className="space-y-4 bg-gray-50">

      {/* ===================== */}
      {/* TOP DARK CTA SECTION */}
      {/* ===================== */}
      <div className="px-6">
        <div className="bg-[#0b1121] rounded-[2rem] max-w-7xl mx-auto px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Don’t wait
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Start sending crypto <br />
              invoices today!
            </h2>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-semibold text-white">
              Sign up now
              <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Purple circle */}
            <div className="absolute w-72 h-72 bg-[#5b45e0] rounded-full blur-2xl opacity-40"></div>

            {/* Person + Phone */}
            <img
              src="https://cdn.coingate.com/uploads/2023/11/10063748/business_main_crypto_man_invoice2.png" // replace with your image
              alt="Crypto invoice"
              className="relative z-10 max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>

      {/* =================================== */}
      {/* OTHER METHODS TO TAKE CRYPTO PAYMENTS */}
      {/* =================================== */}
      <div className="bg-gray-50 px-6 py-10">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] px-10 py-16">

          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-green-500 mb-4">
              Beyond crypto billing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121]">
              Other methods to take <br className="hidden sm:block" />
              crypto payments
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Check out other ways how you can receive cryptocurrency payments.
            </p>
          </div>

          {/* METHODS GRID */}
          <div className="grid gap-10 lg:gap-28  md:grid-cols-3 px-4 md:px-8 lg:px-16 ">

            {/* CARD 1 */}
            <div className="text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-6">
                <CreditCard size={22} />
              </div>
              <h3 className="font-semibold text-[#0b1121] mb-2">
                Payment buttons
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Check out how easy it is to setup payments on your website.
              </p>
              <a href="#" className="text-sm text-green-500 font-medium hover:underline">
                Crypto payment buttons
              </a>
            </div>

            {/* CARD 2 */}
            <div className="text-left">
              <div className="w-12 h-12  flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-6">
                <Plug size={22} />
              </div>
              <h3 className="font-semibold text-[#0b1121] mb-2">
                Ecommerce plugins
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Setup our crypto payment plugins on your favorite ecommerce platform.
              </p>
              <a href="#" className="text-sm text-green-500 font-medium hover:underline">
                See crypto plugins
              </a>
            </div>

            {/* CARD 3 */}
            <div className="text-left">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-6">
                <Code size={22} />
              </div>
              <h3 className="font-semibold text-[#0b1121] mb-2">
                Crypto payments API
              </h3>
              <p className="text-gray-500 text-sm mb-3">
                Use our versatile, well-documented API for maximum flexibility.
              </p>
              <a href="#" className="text-sm text-green-500 font-medium hover:underline">
                Visit API documentation
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default CryptoInvoiceCTA;
