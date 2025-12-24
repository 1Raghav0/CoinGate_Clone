import React from "react";

const DataProtectionForm = () => {
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
              Data Protection
            </h2>

            <p className="text-gray-500 mb-8 max-w-lg">
              As the data controller, our organization adheres to GDPR regulations to ensure that the rights of data subjects are upheld and their data is protected. We collect and store information in accordance with these regulations. Should you have any concerns regarding data protection or wish to exercise your right to be forgotten, we invite you to follow the provided link and complete the form. Our team will respond to your request in a timely and professional manner.
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

export default DataProtectionForm;
