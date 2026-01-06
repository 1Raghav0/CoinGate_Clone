import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
    {
      question: "What is TRON?",
      answer:
        "TRON is a blockchain-based decentralized platform designed to support fast, low-cost digital transactions and smart contracts. Its native cryptocurrency, TRX, is widely used for payments, decentralized applications (dApps), and content distribution."
    },
    {
      question: "Why get paid in TRX?",
      answer:
        "Getting paid in TRX allows businesses to benefit from near-instant transactions, extremely low fees, and global accessibility. TRX is especially efficient for high-volume and micro-transactions."
    },
    {
      question: "Can my company accept TRON payments?",
      answer:
        "Yes. Any business can accept TRON (TRX) payments using a TRX payment gateway, hosted checkout pages, invoices, e-commerce plugins, or API-based integrations."
    },
    {
      question: "What exactly is TRON payment gateway?",
      answer:
        "A TRON payment gateway is a service that enables merchants to accept TRX payments securely while handling blockchain confirmations, exchange rates, reporting, and optional conversion to fiat currencies."
    },
    {
      question: "How safe are payments made on the TRX network?",
      answer:
        "TRON payments are secured by blockchain technology and cryptographic verification. Once confirmed, transactions are irreversible and protected against fraud and chargebacks."
    },
    {
      question: "What business benefits most of TRON payments?",
      answer:
        "Businesses that handle high transaction volumes, digital services, gaming platforms, streaming services, and international payments benefit the most due to TRON’s speed and low fees."
    },
    {
      question: "How to choose the best method of accepting TRON?",
      answer:
        "The best method depends on your business setup. Hosted payment pages and plugins are ideal for quick integration, while APIs provide full control for custom platforms and advanced workflows."
    },
    {
      question: "Is accepting TRX payments legal?",
      answer:
        "In most countries, accepting TRX payments is legal. However, regulations vary by region, so businesses should ensure compliance with local crypto, tax, and AML regulations."
    },
    {
      question: "What wallet accepts TRON?",
      answer:
        "TRON is supported by many wallets including TronLink, Trust Wallet, Ledger, Atomic Wallet, and other TRON-compatible software and hardware wallets."
    },
    {
      question: "How do I pay with TRON?",
      answer:
        "Customers can pay with TRON by scanning a QR code or sending TRX from their wallet to the provided address during checkout. Payments are confirmed within seconds."
    },
    {
      question: "What is TRON used for?",
      answer:
        "TRON is used for fast digital payments, decentralized applications, NFTs, gaming, streaming platforms, and transferring value globally with minimal fees."
    },
    {
      question: "How do I accept TRON payments?",
      answer:
        "You can accept TRON payments by creating an account with a crypto payment gateway, enabling TRX as a payment option, and integrating via plugins, invoices, hosted checkout, or API."
    },
    {
      question: "Is paying with TRON safe?",
      answer:
        "Yes. TRON transactions are highly secure due to blockchain encryption and decentralized consensus. Once confirmed, payments cannot be reversed or altered."
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Frequently Asked Questions (FAQ) about <br className="hidden md:block" />
          TRX payment processing
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
