import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does a customer pay with crypto?",
      answer: "Customers simply choose cryptocurrency as their payment method at checkout. They are then presented with a QR code or wallet address to send the exact amount of crypto. Once the transaction is confirmed on the blockchain, the payment is marked as complete."
    },
    {
      question: "What is a crypto payment gateway?",
      answer: "A crypto payment gateway is a payment processor that allows merchants to accept various cryptocurrencies for goods and services while receiving settlements in their preferred local fiat currency or digital assets."
    },
    {
      question: "What are the advantages of using cryptocurrency for online payments?",
      answer: "Key advantages include lower transaction fees compared to credit cards, no chargebacks, global accessibility, and faster cross-border settlements."
    },
    {
      question: "How do cryptocurrency payments work?",
      answer: "When a payment is initiated, the gateway generates a unique address. The customer sends funds from their wallet, the gateway monitors the blockchain for confirmation, and then notifies the merchant of the successful transaction."
    },
    {
      question: "What is the difference between a crypto payment gateway and a crypto wallet?",
      answer: "A wallet is for personal storage and sending/receiving funds. A gateway is a commercial service that automates the checkout process, handles exchange rates, and provides business reporting tools."
    },
    {
      question: "How can I integrate CoinGate's payment gateway into my existing e-commerce website?",
      answer: "You can integrate via our ready-to-use plugins for platforms like Shopify and WooCommerce, or use our flexible API and billing tools for custom-built websites."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-sm">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12 leading-tight">
          FAQ
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
              >
                <span className={`text-sm md:text-base font-semibold transition-colors ${openIndex === index ? 'text-[#5b45e0]' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-[#5b45e0]' : ''}`} 
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

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#f7f8fa] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 rounded-4xl py-16 px-6 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Start accepting crypto today
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-8">
              Go live fast. Grow worldwide. We’ll take care of the rest.
            </p>

            <button className="inline-flex items-center gap-2 bg-gray-50 text-[#22fc4d] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Create a business account
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;