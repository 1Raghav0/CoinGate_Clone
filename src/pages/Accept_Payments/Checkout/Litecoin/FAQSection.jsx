import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Litecoin?",
      answer:
        "Litecoin (LTC) is a decentralized cryptocurrency designed for fast and low-cost payments. It is based on Bitcoin’s technology but offers quicker transaction confirmations and lower fees, making it suitable for everyday payments.",
    },
    {
      question: "Why accept Litecoin payments?",
      answer:
        "Accepting Litecoin allows businesses to process payments faster, reduce transaction fees, avoid chargebacks, and reach customers who prefer using crypto for online and international purchases.",
    },
    {
      question: "Can my company accept Litecoin payments online?",
      answer:
        "Yes. Businesses can accept Litecoin payments online using payment gateways, hosted checkout pages, plugins for e-commerce platforms, or custom API integrations.",
    },
    {
      question: "What exactly is Litecoin payment gateway?",
      answer:
        "A Litecoin payment gateway is a service that enables merchants to accept LTC payments securely while automatically handling exchange rates, confirmations, and optional conversion to fiat currencies.",
    },
    {
      question: "How safe are payments made on the Litecoin network?",
      answer:
        "Litecoin payments are secured by blockchain technology and cryptographic verification. Transactions are immutable and protected against fraud and chargebacks once confirmed.",
    },
    {
      question: "What business benefits most of Litecoin payments?",
      answer:
        "Litecoin payments benefit businesses by lowering processing costs, enabling global transactions, speeding up settlement times, and providing an alternative payment method to traditional banking systems.",
    },
    {
      question: "How to choose the best method of accepting Litecoin?",
      answer:
        "The best method depends on your business needs. Small businesses can use hosted payment pages or plugins, while larger or custom platforms may prefer API-based integrations for full control.",
    },
    {
      question: "Is accepting LTC payments legal?",
      answer:
        "In most countries, accepting Litecoin payments is legal. However, regulations vary by region, so businesses should ensure compliance with local crypto and financial regulations.",
    },
    {
      question: "How to get paid in Litecoin?",
      answer:
        "You can get paid in Litecoin by enabling LTC as a payment option through a crypto payment gateway. Funds can be received directly in LTC or automatically converted to fiat.",
    },
    {
      question: "Can I pay with Litecoin?",
      answer:
        "Yes. Customers can pay with Litecoin using a compatible crypto wallet by scanning a QR code or sending LTC to the provided wallet address at checkout.",
    },
    {
      question: "How to accept Litecoin donations?",
      answer:
        "Litecoin donations can be accepted using donation buttons, hosted payment pages, or wallet addresses. These methods are commonly used by nonprofits, creators, and open-source projects.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm">
        <span className="block text-center text-xs md:text-lg font-semibold uppercase tracking-widest text-gray-400 mb-3">
          Here to help
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          LTC payment method FAQs
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
