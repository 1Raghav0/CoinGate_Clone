import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, X,
    Gavel,
  Plane,
  ShieldCheck,
  MessageSquareWarning,
 } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState("policies");

  const items = [
    {
      title: "Legal Inquiries",
      description:
        "The Company endeavors to address all legal inquiries, information requests, subpoenas, and related matters with the utmost care and diligence, ensuring a timely and efficient response.",
      icon: Gavel,
    },
    {
      title: "Travel Rule Request",
      description:
        "The Travel Rule mandates that Virtual Asset Service Providers (VASPs) share sender and receiver information during cryptocurrency transactions to combat illegal activities.",
      icon: Plane,
    },
    {
      title: "Data Protection",
      description:
        "Should you have any concerns regarding data protection or wish to exercise your right to be forgotten, we invite you to follow the provided link and complete the form.",
      icon: ShieldCheck,
    },
    {
      title: "Complaints",
      description:
        "If you have any complaints or inquiries, please do not hesitate to provide us with the necessary information, and we will make every effort to address your concerns promptly.",
      icon: MessageSquareWarning,
    },
  ];

  return (
    <>
    <div className="bg-gray-50 font-sans mt-20">

      {/* ================= Announcement Bar ================= */}
      <div className="bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
          <X size={16} />
        </button>
      </div>

      {/* ================= PAGE HEADER ================= */}
      <div className=" bg-white mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-14">
            <div className="text-gray-400 mb-8">
          Home <span className="mx-1">›</span> Legal
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] mb-8">
          Terms & Policies
        </h1>

        <p className="text-gray-500 max-w-2xl">
          Find all the essential information in regards to terms and policies at CoinGate.
        </p>
        </div>
        
      </div>

      {/* ================= CONTENT CARD ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-2">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">

          {/* Filter */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Filter by region:
            </label>
            <select className="border rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>European Union</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
          </div>

          <h2 className="text-2xl font-bold text-[#0b1121] mb-6">
            Terms & Policies
          </h2>

          {/* ================= POLICIES ================= */}
          <div className="border-b border-gray-100">
            <button
              onClick={() => setOpenSection(openSection === "policies" ? null : "policies")}
              className="w-full flex justify-between items-center py-4 font-semibold text-gray-800"
            >
              Policies
              <ChevronDown
                className={`transition-transform ${
                  openSection === "policies" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "policies" && (
              <div className="pb-6 pl-2 space-y-2 text-sm">
                {[
                  "AML/CTF Policy",
                  "CoinGate Data Processing Agreement",
                  "Commercial Policy (Summary)",
                  "Complaints Handling Procedure (Summary)",
                  "Conflict of Interest Management (Summary)",
                  "Crypto Custody Policy (Summary)",
                  "Privacy Policy",
                  "Segregation of Client-Crypto Assets and Funds (Summary)",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-green-500 hover:underline"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ================= TERMS & CONDITIONS ================= */}
          <div className="border-b border-gray-100">
            <button
              onClick={() =>
                setOpenSection(openSection === "terms" ? null : "terms")
              }
              className="w-full flex justify-between items-center py-4 font-semibold text-gray-800"
            >
              Terms and Conditions
              <ChevronDown
                className={`transition-transform ${
                  openSection === "terms" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openSection === "terms" && (
              <div className="pb-6 pl-2 space-y-2 text-sm">
                {[
                  "General Terms and Conditions",
                  "Shopper Disclaimer",
                  "Special Terms and Conditions for Crypto-Assets Payment Processing",
                  "Special Terms and Conditions of Crypto-Assets Payouts",
                  "Terms and Conditions of Referral Agreement (Merchant, Trader)",
                  "User Terms of Services",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-green-500 hover:underline"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-6 md:px-12 py-14">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold tracking-widest text-gray-400 mb-2">
            WE ARE COINGATE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121]">
            Contact Our Legal Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex ">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>

                <h3 className="font-semibold text-[#0b1121]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>

                {item.title === "Legal Inquiries" ? (
                  <button
                    onClick={() => navigate('/legal-inquiries')}
                    className="text-sm font-medium text-green-500 hover:underline inline-block"
                  >
                    Contact
                  </button>
                ) : item.title === "Travel Rule Request" ? (
                  <button
                    onClick={() => navigate('/travel-rule-request')}
                    className="text-sm font-medium text-green-500 hover:underline inline-block"
                  >
                    Contact
                  </button>
                ) : item.title === "Data Protection" ? (
                  <button
                    onClick={() => navigate('/data-protection')}
                    className="text-sm font-medium text-green-500 hover:underline inline-block"
                  >
                    Contact
                  </button>
                ) : item.title === "Complaints" ? (
                  <button
                    onClick={() => navigate('/complaints')}
                    className="text-sm font-medium text-green-500 hover:underline inline-block"
                  >
                    Contact
                  </button>
                ) : (
                  <a
                    href="#"
                    className="text-sm font-medium text-green-500 hover:underline inline-block"
                  >
                    Contact
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
