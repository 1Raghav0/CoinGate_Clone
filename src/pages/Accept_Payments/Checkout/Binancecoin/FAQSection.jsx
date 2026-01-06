import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

   const faqs = [
  {
    question: "What is Binance Coin?",
    answer:
      "Binance Coin (BNB) is the native cryptocurrency of the Binance ecosystem. It is used for fast, low-cost payments, trading fee discounts, DeFi applications, NFTs, and transactions across the BNB Chain."
  },
  {
    question: "Why accept Binance Coin for payments?",
    answer:
      "Accepting Binance Coin allows businesses to process payments quickly with low fees, avoid chargebacks, and reach users within the Binance and BNB Chain ecosystem worldwide."
  },
  {
    question: "Why get paid in Binance Coin?",
    answer:
      "Getting paid in BNB offers fast settlement, minimal transaction costs, and flexibility. Merchants can hold BNB, use it within the Binance ecosystem, or convert it to other cryptocurrencies or fiat currencies."
  },
  {
    question: "What exactly is Binance Coin payment gateway?",
    answer:
      "A Binance Coin payment gateway is a service that enables merchants to accept BNB payments securely while managing confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "What companies accept Binance Coin for payments?",
    answer:
      "Binance Coin is accepted by e-commerce stores, crypto services, travel platforms, digital service providers, gaming companies, and businesses operating within the Web3 and DeFi space."
  },
  {
    question: "How safe are payments made on the Binance Coin network?",
    answer:
      "BNB payments are secured by blockchain technology and cryptographic verification on the BNB Chain. Once confirmed, transactions are irreversible and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most of Binance Coin payments?",
    answer:
      "Online businesses, digital services, international merchants, DeFi platforms, and high-volume sellers benefit the most due to BNB’s speed, scalability, and low transaction fees."
  },
  {
    question: "Is accepting BNB payments legal?",
    answer:
      "In most countries, accepting Binance Coin payments is legal. However, regulations vary by region, so businesses should review local crypto, tax, and compliance requirements."
  },
  {
    question: "Can my company accept Binance Coin payments?",
    answer:
      "Yes. Any business can accept Binance Coin payments using a crypto payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations."
  },
  {
    question: "How to get paid in Binance Coin?",
    answer:
      "You can get paid in Binance Coin by enabling BNB as a payment option through a crypto payment gateway. Funds can be received directly in BNB or automatically converted to fiat currency."
  },
  {
    question: "Can I pay with Binance Coin?",
    answer:
      "Yes. Customers can pay with Binance Coin using a compatible crypto wallet by scanning a QR code or sending BNB to the provided payment address during checkout."
  },
  {
    question: "How to accept Binance Coin donations?",
    answer:
      "Binance Coin donations can be accepted using donation buttons, hosted payment pages, or BNB wallet addresses, making it suitable for nonprofits, creators, and community-driven projects."
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
          Frequently Asked Questions (FAQ) about accepting BNB payments
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
