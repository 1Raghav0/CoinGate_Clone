import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
  {
    question: "What types of payments can I make using the Crypto Payouts feature?",
    answer:
      "Crypto Payouts allows you to send mass payments to suppliers, affiliates, employees, freelancers, or partners globally using cryptocurrencies. It’s ideal for payroll, rewards, vendor payments, and B2B or B2C transfers."
  },
  {
    question: "How secure are the transactions made with Crypto Payouts?",
    answer:
      "All crypto payouts are secured with advanced blockchain monitoring, AML/KYC screening, and compliance checks. CoinGate operates as a licensed Virtual Asset Service Provider (VASP) in the EU, ensuring high security and regulatory compliance."
  },
  {
    question: "Can I integrate Crypto Payouts with my existing payment systems?",
    answer:
      "Yes. Crypto Payouts supports API integration, allowing you to connect directly with your existing systems and automate mass payments efficiently."
  },
  {
    question: "What cryptocurrencies and fiat currencies are supported for deposits and payouts?",
    answer:
      "You can deposit and pay out using popular cryptocurrencies such as BTC, USDC, and other supported assets. Fiat deposits like EUR are also available depending on your account setup."
  },
  {
    question: "How do I get started with using Crypto Payouts for my business?",
    answer:
      "Simply create a CoinGate business account, complete verification, fund your account, upload your recipient list, and start sending payouts instantly."
  },
  {
    question: "What information do I need to provide to send mass payments via CoinGate?",
    answer:
      "You’ll need recipient wallet addresses, payout amounts, and basic compliance-related information. For bulk payouts, recipient data can be uploaded via a contact list."
  },
  {
    question: "How are fees deducted from mass payouts?",
    answer:
      "Fees are transparently deducted from your account balance at the time of payout. Transaction fees start from as low as 0.5%, depending on the payout method and volume."
  },
  {
    question: "Where can I find more information about how mass payouts work?",
    answer:
      "You can explore CoinGate’s documentation, guides, and support resources to learn more about Crypto Payouts, or contact the support team for personalized assistance."
  }
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 pb-12 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        <p className='text-xs md:text-lg text-gray-500 font-semibold text-center mb-4'>FAQ</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12 leading-tight">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
              >
                <span className={`text-sm md:text-base font-semibold transition-colors ${openIndex === index ? 'text-green-500' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-500' : ''}`} 
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