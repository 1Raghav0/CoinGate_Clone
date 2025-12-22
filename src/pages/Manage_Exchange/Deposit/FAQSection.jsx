import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best way to buy crypto?",
      answer:
        "The easiest way to buy crypto is by using a credit or debit card through CoinGate. After completing a quick identity verification, you can purchase cryptocurrencies instantly and receive them directly in your wallet."
    },
    {
      question: "Where can I learn more about depositing, swapping, and withdrawing?",
      answer:
        "You can find detailed guides and step-by-step tutorials in CoinGate’s Help Center. These resources explain how to deposit funds, swap between currencies, and withdraw crypto or fiat securely."
    },
    {
      question: "Is identity verification required?",
      answer:
        "Yes, identity verification is required for certain services such as buying crypto with a card or higher transaction limits. This helps ensure compliance with regulations and keeps your account secure."
    },
    {
      question: "What are the fees for CoinGate services?",
      answer:
        "CoinGate offers transparent pricing with no hidden costs. Fees depend on the service you use—such as buying crypto, swapping currencies, or withdrawals—and are clearly shown before you complete any transaction."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12 leading-tight">
          Frequently asked questions (FAQ)
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
              >
                <span
                  className={`text-sm md:text-base font-semibold transition-colors ${
                    openIndex === index ? 'text-green-500' : 'text-gray-700'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-green-500' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-40 pb-5 opacity-100'
                    : 'max-h-0 opacity-0'
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
    </div>
  );
};

export default FAQSection;
