import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are there any fees for integrating CoinGate into my website or app?",
      answer:
        "No, there are no setup or integration fees. CoinGate provides ready-to-use plugins and APIs for free. You only pay transaction-related fees when you start accepting payments."
    },
    {
      question: "What happens if the cryptocurrency value changes during a transaction?",
      answer:
        "CoinGate locks the exchange rate for a short period during checkout. This protects both the merchant and the customer from price volatility while the payment is being completed."
    },
    {
      question: "Can I choose which cryptocurrencies to accept?",
      answer:
        "Yes. You can select exactly which cryptocurrencies you want to accept from your CoinGate dashboard. You can also enable or disable currencies at any time."
    },
    {
      question: "How long does it take to receive payouts?",
      answer:
        "Crypto payouts are usually processed after the required blockchain confirmations. Fiat payouts to a bank account typically take 1–2 business days, depending on your bank and region."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-6 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        
        <p className="text-sm text-gray-400 text-center mb-2">FAQ</p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-green-500"
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
  );
};

export default FAQSection;
