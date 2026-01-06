import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is XRP?",
      answer:
        "XRP is a digital asset built for fast, low-cost payments. It operates on the XRP Ledger, a decentralized blockchain designed to enable instant value transfers across borders with minimal transaction fees.",
    },
    {
      question: "Why accept XRP for payments?",
      answer:
        "Accepting XRP allows businesses to process payments almost instantly, reduce transaction costs, eliminate chargebacks, and receive funds globally without relying on traditional banking systems.",
    },
    {
      question: "Can my company accept XRP payments?",
      answer:
        "Yes. Any business can accept XRP payments using an XRP payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations.",
    },
    {
      question: "What exactly is an XRP payment gateway?",
      answer:
        "An XRP payment gateway is a service that enables merchants to accept XRP payments securely while handling confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies.",
    },
    {
      question: "What companies already accept XRP for payments?",
      answer:
        "XRP is accepted by online merchants, fintech platforms, digital service providers, international businesses, and companies focused on fast cross-border payments.",
    },
    {
      question: "How safe are payments made on the XRP network?",
      answer:
        "Payments on the XRP Ledger are secured by cryptographic algorithms and a decentralized consensus mechanism. Transactions are irreversible once confirmed, reducing fraud and chargeback risks.",
    },
    {
      question: "What business benefits most from XRP payments?",
      answer:
        "Businesses involved in international trade, high-volume transactions, digital services, and global e-commerce benefit the most due to XRP’s speed, scalability, and low fees.",
    },
    {
      question: "How to choose the best method of accepting XRP?",
      answer:
        "The best method depends on your business needs. Plugins and hosted checkout pages are ideal for quick setup, while API integrations offer greater flexibility for custom platforms.",
    },
    {
      question: "Is accepting XRP payments legal?",
      answer:
        "In most countries, accepting XRP payments is legal. However, regulations vary by jurisdiction, so businesses should ensure compliance with local crypto, tax, and financial regulations.",
    },
    {
      question: "How do I accept XRP payments?",
      answer:
        "You can accept XRP payments by creating an account with an XRP payment gateway, enabling XRP as a payment option, and integrating via plugins, invoices, hosted checkout, or API.",
    },
    {
      question: "Do banks accept XRP?",
      answer:
        "Some financial institutions and payment providers use XRP or the XRP Ledger for settlement and liquidity purposes, especially for cross-border payments, though adoption varies by region.",
    },
    {
      question: "Will Amazon accept XRP?",
      answer:
        "Currently, Amazon does not directly accept XRP as a payment method. However, XRP can sometimes be used indirectly through third-party payment services or crypto gift card providers.",
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
          XRP payment gateway
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
