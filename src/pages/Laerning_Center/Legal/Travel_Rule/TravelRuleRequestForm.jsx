import React from "react";

const TravelRuleRequestForm = () => {
  return (
    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* ================= LEFT IMAGE ================= */}
          <div className="flex flex-col items-start">
            <p className="text-gray-400 font-semibold text-lg uppercase mb-4">
              Contact Legal Team
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl  font-semibold text-[#0b1121] mb-4">
              Travel Rule Request
            </h2>

            <p className="text-gray-500 mb-8 max-w-lg">
              The Travel Rule mandates that Virtual Asset Service Providers
              (VASPs) share the sender and receiver information during
              cryptocurrency transactions to combat illegal activities. In
              accordance with the General Data Protection Regulation (GDPR),
              VASPs must provide individuals with their transaction information
              upon request, thereby ensuring their data protection rights are
              respected. Compliance with both of these regulations is crucial
              for facilitating legal and secure cryptocurrency transactions.
            </p>
            <div className="border border-blue-700 rounded-full overflow-hidden bg-purple-100">
              <img
                src="https://coingate.com/app/themes/coingate/assets/contact-section.png"
                alt="Support agent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div>
            <form className="space-y-5">
              {/* Legal Entity Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Legal Entity: name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Legal Entity Name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brand name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Brand name"
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

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Manager"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Surname */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Surname
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelRuleRequestForm;
