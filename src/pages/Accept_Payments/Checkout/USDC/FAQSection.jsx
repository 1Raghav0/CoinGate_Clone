import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

   const faqs = [
  {
    question: "What is USD Coin?",
    answer:
      "USD Coin (USDC) is a regulated stablecoin pegged 1:1 to the US dollar. It is fully backed by cash and short-term US Treasury assets, providing price stability while enabling fast, global digital payments on blockchain networks."
  },
  {
    question: "Why accept USD Coin for payments?",
    answer:
      "Accepting USD Coin allows businesses to receive crypto payments without volatility. USDC offers fast settlement, low transaction fees, global accessibility, and eliminates chargeback risks."
  },
  {
    question: "What exactly is USD Coin payment gateway?",
    answer:
      "A USD Coin payment gateway is a service that enables merchants to accept USDC payments securely while handling blockchain confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "What companies accept USD Coin for payments?",
    answer:
      "USDC is widely accepted by e-commerce businesses, SaaS companies, fintech platforms, marketplaces, crypto services, and enterprises that require stable, dollar-denominated digital payments."
  },
  {
    question: "How safe are payments made on the USD Coin network?",
    answer:
      "USDC payments are secured by blockchain technology and cryptographic verification. Transactions are transparent, immutable once confirmed, and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most of USD Coin payments?",
    answer:
      "Businesses that value price stability, international payments, recurring billing, payroll, B2B transactions, and high-volume settlements benefit the most from USD Coin payments."
  },
  {
    question: "Is accepting USDC payments legal?",
    answer:
      "In most countries, accepting USDC payments is legal. However, regulations vary by jurisdiction, so businesses should ensure compliance with local crypto, tax, and financial regulations."
  },
  {
    question: "Can my company accept USD Coin payments?",
    answer:
      "Yes. Any business can accept USD Coin payments using a crypto payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations."
  },
  {
    question: "How to get paid in USD Coin?",
    answer:
      "You can get paid in USD Coin by enabling USDC as a payment option through a crypto payment gateway. Funds can be received directly in USDC or automatically converted to fiat currency."
  },
  {
    question: "Can I pay with USD Coin?",
    answer:
      "Yes. Customers can pay with USD Coin using a compatible crypto wallet by scanning a QR code or sending USDC to the provided payment address during checkout."
  },
  {
    question: "How to accept USD Coin donations?",
    answer:
      "USD Coin donations can be accepted using donation buttons, hosted payment pages, or USDC wallet addresses, making it ideal for nonprofits, creators, DAOs, and community-driven initiatives."
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
          USD Coin payment solution FAQs
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
                  className={`text-sm md:text-base font-semibold transition-colors  ${
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
