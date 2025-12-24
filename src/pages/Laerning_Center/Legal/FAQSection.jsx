import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Does company have authorization to provide its services?",
      answer:
        "Yes. CoinGate operates as a regulated cryptocurrency service provider and holds the necessary authorizations and registrations required to offer its services in applicable jurisdictions. The company complies with local and EU regulatory requirements where it operates.",
    },
    {
      question:
        "Is your company subject to the supervision of any prudential regulatory authority?",
      answer:
        "CoinGate is subject to oversight by relevant regulatory authorities depending on the jurisdiction. This includes compliance monitoring related to financial services, anti-money laundering (AML), and counter-terrorist financing (CTF) regulations.",
    },
    {
      question:
        "Is the company subject to AML/CTF compliance? Please identify the applicable AML/CTF laws?",
      answer:
        "Yes. CoinGate follows strict AML/CTF compliance requirements in accordance with EU Anti-Money Laundering Directives, local AML laws, and international best practices. This includes customer due diligence (KYC), transaction monitoring, and reporting obligations.",
    },
    {
      question:
        "Who do I contact if I have a dispute with CoinGate or for other legal matters?",
      answer:
        "If you have a dispute or any legal-related inquiries, you can contact CoinGate’s Legal Team through the official contact channels listed on the website. The team will review your request and respond in a timely and professional manner.",
    },
    {
      question: "For how long personal data is retained by CoinGate?",
      answer:
        "Personal data is retained only for as long as necessary to fulfill legal, regulatory, and business purposes. Retention periods are determined by applicable data protection laws, including GDPR, after which data is securely deleted or anonymized.",
    },
    {
      question:
        "What is the MiCA regulation? How it affect crypto companies?",
      answer:
        "MiCA (Markets in Crypto-Assets Regulation) is an EU regulatory framework designed to create clear rules for crypto-asset service providers. It enhances consumer protection, market integrity, and transparency, and requires crypto companies like CoinGate to meet strict compliance and operational standards.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-6 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
          Legal FAQ:
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-indigo-600"
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
                    ? "max-h-60 pb-5 opacity-100"
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
