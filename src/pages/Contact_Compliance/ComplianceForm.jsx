import React from "react";

const CompilanceForm = () => {
  return (
    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* ================= LEFT IMAGE ================= */}
          <div className="flex flex-col items-start">
            <p className="uppercase text-gray-500 text-lg font-semibold">
              Reach Out to FinPE’s Compliance Department
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4 mt-4">
              Contact Compliance
            </h2>

            <p className="text-gray-500 mb-8 max-w-md">
              Questions about legal and compliance matters are bound to arise eventually. Our internal Compliance Department is here to assist with any queries you may have regarding secure data processing, GDPR compliance, Anti-Money Laundering (AML) protocols, and more within the realm of CoinGate.
            </p>

            <div className="relative w-[280px] sm:w-[340px] md:w-lg">
              <div className="absolute inset-0 bg-[#5b4fe9] rounded-full -z-10" />
              <img
                src="	https://coingate.com/app/themes/coingate/assets/contact-section.png"
                alt="Support agent"
                className="relative rounded-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div>
            <form className="space-y-5">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>


              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your question
                </label>
                <textarea
                  rows="16"
                  placeholder="Hello..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Book a demo call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompilanceForm;
