import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

   const faqs = [
  {
    question: "What is Polygon?",
    answer:
      "Polygon (formerly Matic Network) is a Layer-2 scaling solution for Ethereum designed to enable fast, low-cost, and secure blockchain transactions. Its native token, MATIC, is used for payments, transaction fees, and securing the network."
  },
  {
    question: "Why accept Polygon for payments?",
    answer:
      "Accepting Polygon payments allows businesses to process transactions quickly with extremely low fees, avoid chargebacks, and support Ethereum-compatible payments at scale."
  },
  {
    question: "Why our customers prefer to get paid in Polygon?",
    answer:
      "Customers prefer Polygon because of its fast confirmation times, minimal transaction costs, and compatibility with Ethereum wallets and decentralized applications."
  },
  {
    question: "What exactly is Polygon payment gateway?",
    answer:
      "A Polygon payment gateway is a service that enables merchants to accept MATIC payments securely while handling blockchain confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "What companies accept Polygon for payments?",
    answer:
      "Polygon is accepted by Web3 platforms, NFT marketplaces, DeFi projects, gaming companies, digital service providers, and e-commerce businesses operating within the Ethereum ecosystem."
  },
  {
    question: "How safe are payments made on the Polygon network?",
    answer:
      "Polygon payments are secured by Ethereum-backed blockchain technology and cryptographic verification. Once confirmed, transactions are immutable and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most of Polygon payments?",
    answer:
      "Businesses handling high transaction volumes, micro-payments, NFTs, gaming, DeFi services, and international payments benefit the most due to Polygon’s speed, scalability, and low fees."
  },
  {
    question: "Is accepting MATIC payments legal?",
    answer:
      "In most countries, accepting MATIC payments is legal. However, regulations vary by region, so businesses should review local crypto, tax, and compliance requirements."
  },
  {
    question: "Can my company accept Polygon payments?",
    answer:
      "Yes. Any business can accept Polygon payments using a crypto payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations."
  },
  {
    question: "How to get paid in Polygon?",
    answer:
      "You can get paid in Polygon by enabling MATIC as a payment option through a crypto payment gateway. Funds can be received directly in MATIC or automatically converted to fiat currency."
  },
  {
    question: "Can I pay with Polygon?",
    answer:
      "Yes. Customers can pay with Polygon using a compatible Ethereum or Polygon wallet by scanning a QR code or sending MATIC to the provided payment address during checkout."
  },
  {
    question: "How to accept Polygon donations?",
    answer:
      "Polygon donations can be accepted using donation buttons, hosted payment pages, or MATIC wallet addresses, making it ideal for nonprofits, creators, DAOs, and community-driven projects."
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
          Polygon payment FAQs
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
