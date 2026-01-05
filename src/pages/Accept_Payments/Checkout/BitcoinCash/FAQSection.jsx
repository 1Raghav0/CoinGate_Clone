import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Ethereum?",
      answer:
        "Ethereum (ETH) is a decentralized blockchain platform that enables smart contracts and decentralized applications (dApps). Its native cryptocurrency, Ether, is widely used for digital payments, DeFi, NFTs, and Web3 services.",
    },
    {
      question: "Why get paid in Ethereum?",
      answer:
        "Getting paid in Ethereum allows businesses to access a global customer base, benefit from fast and transparent transactions, avoid chargebacks, and integrate seamlessly with modern Web3 ecosystems.",
    },
    {
      question: "What exactly is an Ethereum payment gateway?",
      answer:
        "An Ethereum payment gateway is a service that allows merchants to accept ETH payments securely while handling blockchain confirmations, exchange rates, and optional automatic conversion to fiat currencies.",
    },
    {
      question: "What companies accept Ethereum for payments?",
      answer:
        "Ethereum is accepted by online merchants, SaaS platforms, digital service providers, NFT marketplaces, gaming companies, and many Web3-native businesses worldwide.",
    },
    {
      question: "Are Ethereum transactions safe?",
      answer:
        "Yes. Ethereum transactions are secured by cryptographic algorithms and a decentralized blockchain network. Once confirmed, transactions are immutable and resistant to fraud or chargebacks.",
    },
    {
      question: "What business benefits most from accepting Ethereum as payment?",
      answer:
        "Businesses operating in e-commerce, digital services, gaming, NFTs, DeFi, and international markets benefit the most due to Ethereum’s programmability, speed, and global accessibility.",
    },
    {
      question: "How to choose the best Ethereum payment method?",
      answer:
        "The best method depends on your setup. Hosted checkout pages and plugins are ideal for quick integration, while APIs provide full flexibility for custom platforms and advanced payment flows.",
    },
    {
      question: "Is accepting ETH payments legal?",
      answer:
        "In most countries, accepting Ethereum payments is legal. However, regulations differ by jurisdiction, so businesses should ensure compliance with local crypto, tax, and AML requirements.",
    },
    {
      question: "Can my company accept Ethereum payments?",
      answer:
        "Yes. Any business can accept Ethereum payments by using a crypto payment gateway, e-commerce plugins, invoicing tools, or API integrations, depending on business needs.",
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
          accepting ETH payments
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
