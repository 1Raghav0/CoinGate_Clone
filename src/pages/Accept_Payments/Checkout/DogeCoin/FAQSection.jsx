import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "What is Dogecoin?",
    answer:
      "Dogecoin (DOGE) is a decentralized cryptocurrency originally created as a fun and friendly digital currency. Today, it is widely used for fast, low-cost online payments, tipping, and everyday transactions."
  },
  {
    question: "Why accept Dogecoin for payments?",
    answer:
      "Accepting Dogecoin allows businesses to process payments quickly with very low transaction fees, avoid chargebacks, and attract a global and crypto-friendly audience."
  },
  {
    question: "Can my company accept Dogecoin payments?",
    answer:
      "Yes. Any business can accept Dogecoin payments using a Dogecoin payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations."
  },
  {
    question: "What exactly is Dogecoin payment gateway?",
    answer:
      "A Dogecoin payment gateway is a service that enables merchants to accept DOGE payments securely while handling blockchain confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "How safe are payments made on the Dogecoin network?",
    answer:
      "Dogecoin payments are secured by blockchain technology and cryptographic verification. Once confirmed, transactions are immutable, irreversible, and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most of Dogecoin payments?",
    answer:
      "E-commerce stores, digital services, content creators, online communities, and international merchants benefit the most due to Dogecoin’s speed, simplicity, and low fees."
  },
  {
    question: "How to choose the best method of accepting Dogecoin?",
    answer:
      "The best method depends on your business needs. Hosted checkout pages and plugins are ideal for quick setup, while API integrations offer full control for custom platforms and advanced payment flows."
  },
  {
    question: "Is accepting DOGE payments legal?",
    answer:
      "In most countries, accepting Dogecoin payments is legal. However, regulations vary by region, so businesses should ensure compliance with local crypto, tax, and AML regulations."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm">
        
        {/* Top label */}
        <span className="block text-center text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Here to help
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] text-center mb-12">
          Doge Payment Gateway FAQs
        </h2>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-colors"
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
  );
};

export default FAQSection;
