import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a crypto invoice feature?",
      answer:
        "The crypto invoice feature allows businesses to create and send invoices that can be paid using cryptocurrency. Clients receive an invoice link and can choose their preferred crypto payment method to complete the payment securely."
    },
    {
      question: "Can I send a reminder to pay?",
      answer:
        "Yes. You can send payment reminders to your clients if an invoice remains unpaid. This helps ensure timely payments without manual follow-ups."
    },
    {
      question: "Do CoinGate’s crypto invoices expire?",
      answer:
        "Crypto invoices can have an expiration time depending on your settings. If the invoice expires before payment is completed, the client will need a new invoice to proceed."
    },
    {
      question: "Can I receive partial payments with the CoinGate’s billing feature?",
      answer:
        "Yes, partial payments are supported. Clients can pay an invoice in multiple transactions until the full amount is settled, depending on your invoice configuration."
    },
    {
      question: "Is CoinGate’s crypto billing service free?",
      answer:
        "Creating and sending crypto invoices is free. Standard processing fees apply only when a payment is successfully completed."
    },
    {
      question: "What happens if a client forgets to pay their crypto invoice?",
      answer:
        "If an invoice is unpaid, it will remain pending until it expires. You can send reminders or generate a new invoice if necessary."
    },
    {
      question: "Is there customer support available for the crypto billing feature?",
      answer:
        "Yes. CoinGate provides customer support and documentation to help you manage crypto invoices and resolve any billing-related issues."
    },
    {
      question: "What happens to price fluctuations between sending and receiving payment?",
      answer:
        "CoinGate locks the exchange rate for a limited time during checkout. This protects both you and your client from price volatility while the payment is being completed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            More about crypto billing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            Frequently asked questions (FAQ) about <br className="hidden sm:block" />
            crypto billing
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
              >
                <span
                  className={`text-sm md:text-base font-semibold transition-colors ${
                    openIndex === index ? 'text-[#5b45e0]' : 'text-gray-700'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#5b45e0]' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
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
    </div>
  );
};

export default FAQSection;
