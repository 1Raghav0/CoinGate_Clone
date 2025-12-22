import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQAndCTASection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I limit user permissions in CoinGate?",
      answer:
        "Yes. CoinGate offers role-based access control, allowing you to define exactly what each team member can see and do. You can assign predefined roles or restrict access to sensitive actions such as payouts, settings, or integrations.",
    },
    {
      question: "Can I see who last accessed my account?",
      answer:
        "Yes. CoinGate provides detailed activity logs and audit trails, so you can always track who accessed your account, what actions were taken, and when they occurred for full transparency and accountability.",
    },
    {
      question: "What happens if my AML verification expires?",
      answer:
        "If AML verification expires, certain features may be temporarily restricted until re-verification is completed. CoinGate notifies you in advance so you can renew verification without disrupting your business operations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#f7f8fa] py-5 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left transition-all hover:text-[#5b45e0]"
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

      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#f7f8fa] px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-500 rounded-3xl py-16 px-6 md:px-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to get started?
            </h2>

            <p className="text-sm md:text-base text-white/90 mb-8">
              Set up role-based access for your team in minutes
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-green-500 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Start now
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQAndCTASection;
