import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Bitcoin Cash?",
      answer:
        "Bitcoin Cash (BCH) is a peer-to-peer cryptocurrency designed for fast, low-cost digital payments. It was created to function as electronic cash, enabling quick transactions with minimal fees and high scalability.",
    },
    {
      question: "Why accept Bitcoin Cash for payments?",
      answer:
        "Accepting Bitcoin Cash allows businesses to process payments faster, reduce transaction fees, eliminate chargebacks, and accept payments globally without relying on traditional banking systems.",
    },
    {
      question: "Why get paid in Bitcoin Cash?",
      answer:
        "Getting paid in Bitcoin Cash provides instant settlement, low processing costs, and direct control over funds. Merchants can also choose to automatically convert BCH into fiat currency if preferred.",
    },
    {
      question: "What exactly is a Bitcoin Cash payment gateway?",
      answer:
        "A Bitcoin Cash payment gateway is a service that enables merchants to accept BCH payments securely while managing confirmations, exchange rates, reporting, and optional automatic fiat conversion.",
    },
    {
      question: "What companies accept Bitcoin Cash for payments?",
      answer:
        "Bitcoin Cash is accepted by online retailers, digital service providers, travel companies, gaming platforms, charities, and international merchants seeking fast and affordable crypto payments.",
    },
    {
      question: "How safe are payments made on the Bitcoin Cash network?",
      answer:
        "Bitcoin Cash payments are secured by blockchain technology and cryptographic verification. Once confirmed, transactions are immutable and protected against fraud and chargebacks.",
    },
    {
      question: "What business benefits most from Bitcoin Cash payments?",
      answer:
        "E-commerce businesses, high-volume merchants, global sellers, and digital services benefit the most due to BCH’s low fees, fast confirmations, and ability to handle frequent transactions.",
    },
    {
      question: "Is accepting BCH payments legal?",
      answer:
        "In most countries, accepting Bitcoin Cash payments is legal. However, businesses should review local regulations, tax requirements, and compliance obligations related to cryptocurrency payments.",
    },
    {
      question: "Can my company accept Bitcoin Cash payments?",
      answer:
        "Yes. Any business can accept Bitcoin Cash payments using a crypto payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API integrations.",
    },
    {
      question: "How to get paid in Bitcoin Cash?",
      answer:
        "You can get paid in Bitcoin Cash by enabling BCH as a payment option through a payment gateway. Payments can be received directly in BCH or automatically converted to fiat currency.",
    },
    {
      question: "Can I pay with Bitcoin Cash?",
      answer:
        "Yes. Customers can pay with Bitcoin Cash using a compatible crypto wallet by scanning a QR code or sending BCH to the provided payment address during checkout.",
    },
    {
      question: "How to accept Bitcoin Cash donations?",
      answer:
        "Bitcoin Cash donations can be accepted using donation buttons, hosted payment pages, or BCH wallet addresses, making it ideal for nonprofits, creators, and open-source projects.",
    },
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Frequently Asked Questions (FAQ) about <br className="hidden md:block" />
          accepting BCH payments
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
