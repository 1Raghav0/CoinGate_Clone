import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* ================= LEFT IMAGE ================= */}
          <div className="flex flex-col items-start">
            <p className="uppercase text-gray-500 text-lg font-semibold">
              Let's Do It Together
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4 mt-4">
              Contact Sales
            </h2>

            <p className="text-gray-500 mb-8 max-w-md">
              Our sales representatives are at your service to:
            </p>

            <ul className="list-disc list-inside text-gray-500 mb-8 max-w-md">
              <li>Demonstrate the functionality of our payment system.</li>
              <li>
                Assist you in determining the optimal starting point based on
                your needs.
              </li>
              <li>
                Potentially provide advantageous fees depending on your payment
                volumes or related factors.
              </li>
              <li>
                Expedite your integration with CoinGate through focused setup
                assistance and continuous support.
              </li>
              <li>Answer any questions you may have.</li>
            </ul>

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
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (123) 456 7890"
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

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company name
                </label>
                <input
                  type="text"
                  placeholder="e.g. CoinGate"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website
                </label>
                <input
                  type="url"
                  placeholder="e.g. coingate.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operating country
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
                  <option>Choose a country...</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                </select>
              </div>

              {/* Turnover */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual business turnover
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none">
                  <option>Choose turnover range...</option>
                  <option>Under $100k</option>
                  <option>$100k – $1M</option>
                  <option>$1M+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="8"
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

export default ContactForm;
