import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
  {
    question: "What is Solana?",
    answer:
      "Solana is a high-performance blockchain designed for fast, low-cost, and scalable decentralized applications. Its native cryptocurrency, SOL, is used for payments, transaction fees, staking, NFTs, and DeFi applications."
  },
  {
    question: "What exactly is a Solana (SOL) payment gateway?",
    answer:
      "A Solana payment gateway is a service that enables merchants to accept SOL payments securely while handling blockchain confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "How safe are payments made on the Solana network?",
    answer:
      "Solana payments are secured by cryptographic verification and a decentralized blockchain network. Once confirmed, transactions are immutable and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most from Solana payments?",
    answer:
      "Businesses that process high transaction volumes, micro-payments, gaming, NFTs, DeFi services, and global digital products benefit the most due to Solana’s speed, scalability, and extremely low fees."
  },
  {
    question: "How to choose the best method of accepting Solana?",
    answer:
      "The best method depends on your business needs. Hosted checkout pages and plugins are ideal for quick setup, while API integrations provide full control for custom platforms and advanced payment workflows."
  },
  {
    question: "Is accepting Solana payments legal?",
    answer:
      "In most countries, accepting Solana payments is legal. However, regulations vary by region, so businesses should review local crypto, tax, and compliance requirements."
  },
  {
    question: "How do I accept Solana payments?",
    answer:
      "You can accept Solana payments by creating an account with a crypto payment gateway, enabling SOL as a payment option, and integrating via plugins, invoices, hosted checkout pages, or API."
  },
  {
    question: "What companies accept SOL for payments?",
    answer:
      "Solana is accepted by Web3 platforms, NFT marketplaces, gaming companies, SaaS providers, digital service businesses, and merchants focused on fast and low-cost crypto payments."
  },
  {
    question: "Does PayPal take Solana?",
    answer:
      "Currently, PayPal does not directly support Solana as a payment method. However, SOL can sometimes be used indirectly through third-party crypto services or payment platforms."
  },
  {
    question: "Can you convert SOL to cash?",
    answer:
      "Yes. SOL can be converted to fiat currencies such as USD or EUR through crypto exchanges or automatically via a payment gateway that supports instant conversion."
  },
  {
    question: "Can my company accept Solana payments?",
    answer:
      "Yes. Any business can accept Solana payments using a crypto payment gateway, e-commerce plugins, invoicing tools, hosted checkout pages, or API-based integrations."
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
          SOL payment solution FAQs
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
