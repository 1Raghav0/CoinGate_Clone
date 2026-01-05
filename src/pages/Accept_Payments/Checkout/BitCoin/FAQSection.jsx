import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is coding knowledge needed for Bitcoin processor integration?",
      answer:
        "No. You can start accepting Bitcoin without any coding knowledge by using CoinGate’s ready-made plugins, payment buttons, or hosted checkout pages. For advanced use cases, developers can also integrate via API.",
    },
    {
      question: "How does the Bitcoin Lightning Network support benefit my business?",
      answer:
        "Bitcoin Lightning Network enables near-instant transactions with extremely low fees. This allows you to accept small payments efficiently, improve checkout speed, and reduce transaction costs for customers.",
    },
    {
      question: "What are stablecoins, and should I accept them?",
      answer:
        "Stablecoins are cryptocurrencies pegged to fiat currencies like EUR or USD. Accepting stablecoins helps eliminate price volatility while still benefiting from fast, global crypto payments.",
    },
    {
      question: "How do I handle the volatility of Bitcoin?",
      answer:
        "You can automatically convert Bitcoin payments into fiat or stablecoins at the time of payment. This protects your business from price fluctuations while still allowing customers to pay in BTC.",
    },
    {
      question: "Why do consumers want to pay in Bitcoin?",
      answer:
        "Consumers value Bitcoin for its speed, privacy, global accessibility, and lower fees. It also allows people without access to traditional banking to make online purchases easily.",
    },
    {
      question: "Why should I accept Bitcoin in my store?",
      answer:
        "Accepting Bitcoin helps you reach a global audience, avoid chargebacks, reduce payment processing fees, and attract crypto-savvy customers while staying competitive in the digital economy.",
    },
    {
      question: "How do I price my products in BTC?",
      answer:
        "Product prices can be set in fiat currencies, and the BTC amount is calculated automatically at checkout using real-time exchange rates. You don’t need to manually update prices.",
    },
    {
      question: "Can I test your platform before integration?",
      answer:
        "Yes. CoinGate provides a sandbox environment where you can test Bitcoin payments, integrations, and workflows without using real funds.",
    },
    {
      question: "Is it legal to accept Bitcoin as payment?",
      answer:
        "In most countries, accepting Bitcoin as payment is legal. However, regulations vary by region, so we recommend reviewing local laws and compliance requirements relevant to your business.",
    },
    {
      question: "What are the risks of accepting Bitcoin payments?",
      answer:
        "Risks include price volatility and regulatory considerations. These risks can be minimized by instant conversion to fiat, compliance tools, and proper accounting practices.",
    },
    {
      question: "Are my customers safe paying with Bitcoin?",
      answer:
        "Yes. Bitcoin payments are secured by blockchain technology, cryptographic verification, and decentralized networks, making them highly resistant to fraud and chargebacks.",
    },
    {
      question: "Which companies accept Bitcoin as payment?",
      answer:
        "Many global brands, online merchants, and service providers accept Bitcoin across industries such as e-commerce, travel, gaming, hosting, and digital services.",
    },
    {
      question: "How to accept BTC payments?",
      answer:
        "You can accept BTC payments by creating a CoinGate account and choosing your preferred integration method—plugins, payment buttons, invoicing, or API—depending on your business needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Bitcoin payments FAQs
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
