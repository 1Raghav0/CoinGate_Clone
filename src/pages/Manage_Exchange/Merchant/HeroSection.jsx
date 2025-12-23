import { ChevronRight, X, RefreshCcw, ArrowLeftRight, RotateCw, Check } from "lucide-react";
import ContactFormSection from "./ContactFormSection";
import FAQSection from "./FAQSection";

const HeroSection = () => {
  return (
   <>
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* ================= Announcement Bar ================= */}
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

      {/* ================= Main Hero Section ================= */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 xl:py-28">
        <div className="grid lg:grid-cols-2 gap-2 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              The Ultimate Solution <br /> for Crypto Refunds
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Equip yourself with the ability to refund customers who make
              payments in cryptocurrencies. It’s fast, versatile, and
              hassle-free — just like it’s supposed to be.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition">
              Start now
              <ChevronRight size={18} />
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2024/02/10063735/Refunded_btc_phones_payment_img.png"
              alt="Crypto refunds illustration"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </main>
    </div>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] px-6 md:px-16 py-16 text-center shadow-sm">

        {/* ================= HEADING ================= */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
          Refunding Cryptocurrencies <br className="hidden sm:block" />
          Made Easy
        </h2>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition mb-14">
          How do crypto refunds work?
          <ChevronRight size={18} />
        </button>

        {/* ================= FEATURES ================= */}
        <div className="grid gap-12 md:grid-cols-3 text-left max-w-3xl mx-auto">

          {/* Feature 1 */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#eef0ff] flex items-center justify-center">
              <RefreshCcw className="text-green-500" size={20} />
            </div>

            <h3 className="font-semibold text-[#0b1121]">
              Reimburse customers from the user dashboard or via API
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Issue a refund in a matter of minutes directly from the GUI, or
              connect to the API endpoint and do it your way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#eef0ff] flex items-center justify-center">
              <ArrowLeftRight className="text-green-500" size={20} />
            </div>

            <h3 className="font-semibold text-[#0b1121]">
              Issue refunds in any currency using funds in your balance
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Send your customers money back in any currency they want using
              currencies you have in your balance.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#eef0ff] flex items-center justify-center">
              <RotateCw className="text-green-500" size={20} />
            </div>

            <h3 className="font-semibold text-[#0b1121]">
              Execute full or partial refunds without intermediaries
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Discover benefits of refunding cryptocurrency payments from the
              same system that collects them.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-sm">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-6">
          Refund Service Pricing:
        </h2>

        {/* Actions */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button className="bg-green-500 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-600 transition">
            Register business account
          </button>
          <a href="#" className="text-green-500 font-medium hover:underline">
            Full pricing list →
          </a>
        </div>

        {/* Table */}
        <div className="border-t border-gray-100">
          <div className="grid grid-cols-[200px_1fr] py-4 text-sm font-semibold text-gray-500">
            <span>Fee type</span>
            <span>Fee</span>
          </div>

          <div className="grid grid-cols-[200px_1fr] py-4 border-t border-gray-200 text-sm text-gray-700">
            <span>Refund issuance fee</span>
            <span>0.25 EUR per issued refund</span>
          </div>

          <div className="grid grid-cols-[200px_1fr] py-4 border-t border-gray-200 text-sm text-gray-700">
            <span>Conversion fee</span>
            <span>
              0.1% from converted amount{" "}
              <span className="text-gray-400">
                (Applied only when refunded currency differs from issued one)
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl bg-[#0b1121] mx-auto rounded-3xl p-8 md:p-14 grid lg:grid-cols-2 gap-2 items-center lg:py-20 ">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-6">
          <p className="uppercase tracking-widest text-xs text-gray-400">
            We are CoinGate
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Start Accepting Crypto Today!
          </h2>

          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              "70+ cryptocurrencies available to accept",
              "Instant order confirmations",
              "Automatic refunds for unsuccessful payments or overpayments",
              "Accept slight underpayments",
              "Convert collected crypto to fiat (optional)",
              "Multiple payout & withdrawal options",
              "Dedicated dashboard to track and manage orders",
              "Quick, free and straightforward setup",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 w-4 h-4 text-green-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition">
              Sign Up <ChevronRight size={18} />
            </button>

            <a
              href="#"
              className="text-sm text-green-500 font-medium hover:underline"
            >
              More About Accepting Crypto →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://cdn.coingate.com/uploads/2024/02/10063734/accept_btc_line_img.png"
            alt="Accept crypto illustration"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>

    <ContactFormSection />

    <FAQSection />
   </>
  );
};

export default HeroSection;
