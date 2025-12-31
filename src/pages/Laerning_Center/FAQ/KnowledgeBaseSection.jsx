import React from "react";
import {
  Play,
  Bitcoin,
  CreditCard,
  BarChart3,
  Send,
  ShieldCheck,
  UserCheck,
  Plug,
} from "lucide-react";

const knowledgeBase = [
  {
    title: "New to CoinGate? Get Started",
    desc:
      "Onboarding basics: account creation, dashboard overview, and first steps before moving on to verification and integrations.",
    icon: Play,
  },
  {
    title: "Accept Crypto Payments",
    desc:
      "Invoices (billing), merchant refunds, and order statuses for managing payments from the merchant side.",
    icon: Bitcoin,
  },
  {
    title: "Paying via CoinGate (Shoppers)",
    desc:
      "Payment methods, common payment issues, and refunds when applicable.",
    icon: CreditCard,
  },
  {
    title: "Balances & Reporting",
    desc:
      "Balances, wallet ownership verification, currency conversion, withdrawals, deposits, transaction history, and statements.",
    icon: BarChart3,
  },
  {
    title: "Send Crypto Payouts",
    desc:
      "Sending payments directly from CoinGate, managing beneficiaries, and tracking outgoing transactions.",
    icon: Send,
  },
  {
    title: "Compliance & Security",
    desc:
      "AML/KYC requirements, supported and restricted countries, CoinGate licenses, account security, 2FA, and login recovery.",
    icon: ShieldCheck,
  },
  {
    title: "Accounts & Verification",
    desc:
      "Business and personal verification, updating company details, uploading documents, and managing permissions.",
    icon: UserCheck,
  },
  {
    title: "CoinGate Integrations & Plugins",
    desc:
      "Plugins, payment buttons, API callbacks, sandbox testing, and developer guides for integrations.",
    icon: Plug,
  },
];

const promotedArticles = [
  "User roles walkthrough",
  "How to Withdraw Funds from Your CoinGate Account",
  "How to Send Crypto Payouts from Your CoinGate Dashboard?",
  "I want to accept cryptocurrencies on my website. Where do I start?",
  "What are Batch Payouts and how can I use them?",
  "What documents do I need to verify my business account?",
];

const KnowledgeBaseSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121] mb-10">
          Browse our knowledge base
        </h2>

        {/* Knowledge base grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {knowledgeBase.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-green-500" />
                </div>

                <h3 className="font-semibold text-[#0b1121] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Promoted articles */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="font-semibold text-lg mb-6">Promoted articles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10">
            {promotedArticles.map((article, idx) => (
              <a
                key={idx}
                href="#"
                className="text-green-500 text-sm hover:underline flex items-center gap-1"
              >
                {article}
                <span className="text-orange-400">*</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-500 rounded-xl py-12 px-6 text-center text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">
            Can't find what you're looking for?
          </h3>
          <p className="text-sm opacity-90 mb-6">
            Our customer care team is here for you!
          </p>

          <button className="bg-white text-green-500 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
            Submit a request
          </button>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBaseSection;
