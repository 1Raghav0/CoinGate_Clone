import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

     const faqs = [
  {
    question: "What is Shiba Inu?",
    answer:
      "Shiba Inu (SHIB) is a decentralized cryptocurrency built on the Ethereum blockchain. Originally launched as a community-driven token, SHIB is now widely used for digital payments, DeFi applications, NFTs, and online transactions."
  },
  {
    question: "Why accept Shiba Inu as payments?",
    answer:
      "Accepting Shiba Inu allows businesses to reach a large and active crypto community, process global payments, avoid chargebacks, and offer customers an alternative and popular payment method."
  },
  {
    question: "What exactly is a Shiba Inu payment gateway?",
    answer:
      "A Shiba Inu payment gateway is a service that enables merchants to accept SHIB payments securely while handling blockchain confirmations, exchange rates, reporting, and optional automatic conversion to fiat currencies."
  },
  {
    question: "What companies accept Shiba Inu for payments?",
    answer:
      "Shiba Inu is accepted by online retailers, digital service providers, e-commerce stores, gaming platforms, NFT marketplaces, and businesses that support Ethereum-based payments."
  },
  {
    question: "How safe are payments made on the Shiba Inu network?",
    answer:
      "Shiba Inu payments are secured by Ethereum’s blockchain infrastructure and cryptographic verification. Once confirmed, transactions are immutable and protected against fraud and chargebacks."
  },
  {
    question: "What business benefits most of Shiba Inu payments?",
    answer:
      "E-commerce businesses, online services, global merchants, and crypto-friendly brands benefit the most due to SHIB’s popularity, accessibility, and compatibility with Ethereum-based platforms."
  },
  {
    question: "Is accepting SHIB payments legal?",
    answer:
      "In most countries, accepting Shiba Inu payments is legal. However, regulations vary by region, so businesses should review local crypto, tax, and compliance requirements."
  },
  {
    question: "Can my company accept Shiba Inu payments?",
    answer:
      "Yes. Any business can accept Shiba Inu payments using a crypto payment gateway, hosted checkout pages, invoicing tools, e-commerce plugins, or API-based integrations."
  },
  {
    question: "How to get paid in Shiba Inu?",
    answer:
      "You can get paid in Shiba Inu by enabling SHIB as a payment option through a crypto payment gateway. Funds can be received directly in SHIB or automatically converted to fiat currency."
  },
  {
    question: "Can I pay with Shiba Inu?",
    answer:
      "Yes. Customers can pay with Shiba Inu using a compatible Ethereum wallet by scanning a QR code or sending SHIB to the provided payment address during checkout."
  },
  {
    question: "How to accept Shiba Inu donations?",
    answer:
      "Shiba Inu donations can be accepted using donation buttons, hosted payment pages, or SHIB wallet addresses, making it suitable for nonprofits, creators, communities, and online campaigns."
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
