import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQAndCTASection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does a customer pay with crypto?",
      answer:
        "Customers choose cryptocurrency at checkout and are shown a QR code or wallet address. Once the correct amount is sent and confirmed on the blockchain, the payment is completed automatically.",
    },
    {
      question: "What is a crypto payment gateway?",
      answer:
        "A crypto payment gateway allows businesses to accept cryptocurrencies while receiving settlements in fiat or crypto. It handles exchange rates, confirmations, and reporting automatically.",
    },
    {
      question: "What are the advantages of crypto payments?",
      answer:
        "Crypto payments offer lower fees, no chargebacks, faster cross-border settlements, and global accessibility without relying on traditional banking systems.",
    },
    {
      question: "How do cryptocurrency payments work?",
      answer:
        "The gateway generates a unique payment address. The customer sends funds, the blockchain confirms the transaction, and the gateway notifies the merchant instantly.",
    },
    {
      question: "Can I keep my crypto balances?",
      answer:
        "Yes. You can choose to keep funds in crypto, convert them to fiat instantly, or use a mixed settlement strategy depending on your business needs.",
    },
    {
      question: "How can I integrate CoinGate into my website?",
      answer:
        "Integration is easy using ready-made plugins for platforms like WooCommerce and Shopify, or via API and billing tools for fully custom websites.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#f7f8fa] py-8 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12 leading-tight">
            Frequently Asked Questions (FAQ) <br />
            about our crypto payment gateway
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
                        ? "text-[#5b45e0]"
                        : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-[#5b45e0]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 pb-5 opacity-100"
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
      <section className="bg-[#f7f8fa] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 rounded-4xl py-16 px-6 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Start accepting crypto today
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-8">
              Go live fast. Grow worldwide. We’ll take care of the rest.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-[#22fc4d] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
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
