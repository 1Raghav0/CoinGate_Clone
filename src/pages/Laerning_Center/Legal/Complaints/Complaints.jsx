import { useState } from "react";
import {ChevronRight, X} from "lucide-react"
import ComplaintProcessSection from "./ComplaintProcessSection";
import ComplaintResolutionSections from "./ComplaintResolutionSections";

const languages = [
  "English",
  "Bulgarian",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "Estonian",
  "Finnish",
  "French",
  "German",
  "Greek",
  "Hungarian",
  "Irish",
  "Italian",
  "Latvian",
  "Lithuanian",
  "Maltese",
  "Polish",
  "Portuguese",
  "Romanian",
  "Slovak",
  "Slovenian",
  "Spanish",
  "Swedish",
];


const Complaints = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("");

  return (
    <>
    <div className="bg-white font-sans mt-20">
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
     </div>

     <section className="px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white  p-8 md:p-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] leading-tight">
              Complaints Handling <br /> Procedure
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              At CoinGate, we take every complaint seriously and are committed to
              resolving them efficiently and fairly. Our process adheres to the
              Markets in Crypto-Assets (MiCA) Regulation (EU) 2023/1114,
              effective January 1, 2025.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#0b1121]">Important:</span> A
              complaint must be filed within 3 (three) months from the date the
              Customer became aware or ought to have become aware of the
              violation of their rights or legitimate interests.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This page provides clear guidance on how to file a complaint, the
              timeframes for resolution, and the steps we take to ensure your
              concerns are addressed.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.coingate.com/uploads/2025/04/10061827/image_crypto_worldwide_523.png"
              alt="Global complaints handling"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-sm">
        
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121] mb-4">
          Private Users
        </h2>

        <p className="text-gray-600 max-w-3xl mb-8">
          If you're using CoinGate for personal purposes, such as buying or
          spending cryptocurrencies, you're welcome to file a complaint through
          our dedicated process for individual users.
        </p>

        {/* Who can file */}
        <div className="mb-6">
          <h4 className="font-semibold text-[#0b1121] mb-1">
            Who can file?
          </h4>
          <p className="text-gray-600">
            Individuals using CoinGate services for personal activities.
          </p>
        </div>

        {/* What can you report */}
        <div className="mb-8">
          <h4 className="font-semibold text-[#0b1121] mb-1">
            What can you report?
          </h4>
          <p className="text-gray-600">
            Issues with transactions, account access, service disruptions, or
            other concerns related to your personal use of CoinGate.
          </p>
        </div>

        <p className="text-gray-600 mb-4">
          Choose the appropriate form below to start the process:
        </p>

        {/* Language selector */}
        <div className="max-w-sm space-y-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <button
            disabled={!selectedLanguage}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition
              ${
                selectedLanguage
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            Download
          </button>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-14 shadow-sm">

        <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121] mb-4">
          Business Users
        </h2>

        <p className="text-gray-600 max-w-3xl mb-8">
          If you're a business or organization using CoinGate for accepting
          crypto payments or other commercial solutions, please use the
          dedicated complaint process for business accounts.
        </p>

        {/* Who can file */}
        <div className="mb-6">
          <h4 className="font-semibold text-[#0b1121] mb-1">
            Who can file?
          </h4>
          <p className="text-gray-600">
            Authorized representatives of companies, merchants, or organizations
            using CoinGate services professionally.
          </p>
        </div>

        {/* What can you report */}
        <div className="mb-8">
          <h4 className="font-semibold text-[#0b1121] mb-1">
            What can you report?
          </h4>
          <p className="text-gray-600">
            Concerns about payment processing, integration, settlement issues,
            or other business-related matters.
          </p>
        </div>

        <p className="text-gray-600 mb-4">
          Choose the appropriate form below to start the process:
        </p>

        {/* Language selector */}
        <div className="max-w-sm space-y-4">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>

          <button
            disabled={!selectedLanguage}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition
              ${
                selectedLanguage
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            Download
          </button>
        </div>

      </div>
    </section>

    <ComplaintProcessSection />

    <ComplaintResolutionSections />
    </>
  )
}

export default Complaints