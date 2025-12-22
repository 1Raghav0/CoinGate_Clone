import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "How do I integrate the bitcoin ecommerce plugin into my online store?",
      answer:
        "You can integrate CoinGate’s bitcoin ecommerce plugin by installing one of our ready-made plugins for platforms like WooCommerce, PrestaShop, Magento, WHMCS, OpenCart, or Wix. Simply install the plugin, connect your CoinGate account, and start accepting crypto payments within minutes."
    },
    {
      question:
        "Which cryptocurrencies can I accept using your crypto payments plugin?",
      answer:
        "With CoinGate’s crypto payment plugins, you can accept Bitcoin, Lightning Network payments, Ethereum, Litecoin, USDC, Binance Coin, and many other supported cryptocurrencies and stablecoins."
    },
    {
      question:
        "Are there any fees associated with the crypto e-commerce transactions?",
      answer:
        "There are no setup or monthly fees. CoinGate applies a transparent transaction fee only when a payment is successfully processed, allowing you to start accepting crypto payments with minimal cost."
    },
    {
      question:
        "How do I convert cryptocurrency payments into my local currency using your crypto payment gateway?",
      answer:
        "CoinGate allows you to automatically convert received cryptocurrency payments into your preferred fiat currency such as EUR or USD. Funds can then be withdrawn directly to your bank account or kept in crypto if you prefer."
    },
    {
      question:
        "Is cryptocurrency ecommerce secure? What security measures do you have in place?",
      answer:
        "Yes, crypto ecommerce with CoinGate is secure. We use push-only payments to eliminate chargeback fraud, provide AML/KYC compliance, monitor transactions in real time, and ensure full traceability for every payment."
    },
    {
      question:
        "How do refunds work in the crypto e-commerce world?",
      answer:
        "Refunds can be issued directly from your CoinGate dashboard or via API. Depending on your settings, refunds can be processed in cryptocurrency or fiat, providing flexibility for both merchants and customers."
    },
    {
      question:
        "Can I track my crypto transactions and generate reports?",
      answer:
        "Yes. CoinGate provides real-time transaction tracking, detailed order history, and downloadable reports. You can export data for accounting, reconciliation, and business analysis purposes."
    },
    {
      question:
        "I'm new to crypto e-commerce. Do you provide support or training?",
      answer:
        "Absolutely. CoinGate offers detailed documentation, step-by-step guides, and customer support to help you integrate crypto payments smoothly—even if you’re new to cryptocurrency ecommerce."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            More about crypto billing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            Frequently Asked Questions (FAQ) About <br className="hidden sm:block" />
            CoinGate Crypto E-Commerce Plugins
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-green-600"
              >
                <span
                  className={`text-sm md:text-base font-semibold transition-colors ${
                    openIndex === index ? 'text-green-500' : 'text-gray-700'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-green-500' : ''
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
