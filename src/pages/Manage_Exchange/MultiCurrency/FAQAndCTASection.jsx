import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQAndCTASection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Which currencies can I hold in my CoinGate account?",
      answer:
        "You can hold a wide range of cryptocurrencies and fiat currencies in your CoinGate account, including BTC, ETH, USDC, EUR, USD, and more. This allows you to manage multi-currency balances from a single, unified dashboard.",
    },
    {
      question: "Can I convert between crypto and fiat instantly?",
      answer:
        "Yes. CoinGate supports instant conversions between supported cryptocurrencies and fiat currencies at real-time market rates, enabling you to react quickly to market conditions and manage liquidity efficiently.",
    },
    {
      question: "Is there a fee for deposits or withdrawals?",
      answer:
        "Deposits are generally free, while withdrawal fees depend on the selected currency and network. All applicable fees are transparently displayed before you complete a transaction.",
    },
    {
      question: "How does CoinGate help with accounting and reconciliation?",
      answer:
        "CoinGate provides automated reconciliation tools, detailed transaction histories, and exportable reports that integrate with accounting systems, helping you save time and ensure accurate financial reporting.",
    },
    {
      question: "Is CoinGate compliant with EU regulations?",
      answer:
        "Yes. CoinGate operates under strict EU regulatory frameworks and complies with KYC, AML, GDPR, and MiCA requirements, ensuring a secure and compliant environment for managing crypto assets.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#f7f8fa] py-5 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
                >
                  <span
                    className={`text-sm md:text-base font-semibold transition-colors ${
                      openIndex === index
                        ? "text-green-500"
                        : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-green-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-48 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#f7f8fa] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 rounded-4xl py-16 px-6 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Start managing crypto payouts today!
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-8">
              Effortless crypto payouts for your global business.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-green-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Create a business account
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQAndCTASection;
