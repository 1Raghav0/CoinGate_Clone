import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What’s a merchant refund at CoinGate?",
      answer:
        "A merchant refund at CoinGate allows businesses to return funds to customers who paid in cryptocurrency. Refunds can be issued directly from the CoinGate dashboard or via API, without requiring manual blockchain transactions."
    },
    {
      question: "Why should a merchant use a cryptocurrency refund feature?",
      answer:
        "Crypto refunds help merchants resolve failed orders, overpayments, or customer disputes quickly and professionally. CoinGate’s refund system eliminates manual wallet handling and ensures a smooth customer experience."
    },
    {
      question: "How does a merchant refund work at CoinGate?",
      answer:
        "Merchants can initiate refunds from the CoinGate dashboard or API. The refund amount is sent to the customer’s wallet using the available balance, either in the original currency or another supported currency."
    },
    {
      question: "What’s a refund form and where do I find it?",
      answer:
        "The refund form is available inside the CoinGate merchant dashboard. It allows you to enter the refund amount, select the currency, and submit the refund securely in just a few steps."
    },
    {
      question: "What do I need to be able to issue a refund?",
      answer:
        "To issue a refund, you need an active CoinGate merchant account with sufficient balance in your account. API access is required if you plan to automate refunds programmatically."
    },
    {
      question: "Is there anything a customer must do to receive a refund?",
      answer:
        "In most cases, no action is required from the customer. If needed, the customer may be asked to provide a valid wallet address to receive the refunded funds."
    },
    {
      question: "How is the refund amount calculated?",
      answer:
        "Refunds are typically calculated based on the original payment amount. If a different currency is used for the refund, CoinGate applies the current exchange rate at the time of processing."
    },
    {
      question: "Is it possible to issue partial refunds?",
      answer:
        "Yes. CoinGate supports both full and partial refunds, allowing merchants to return only a portion of the original payment when necessary."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
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
