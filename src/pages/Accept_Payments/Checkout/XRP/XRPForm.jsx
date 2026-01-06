import React from "react";

const XRPForm = () => {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
  ];

  return (
    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-4">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4">
              Have questions?
            </h2>

            <p className="text-gray-500 mb-8 max-w-md">
              Fill out the form below to contact an Account Manager if you have
              any questions or need assistance with CoinGate products.
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
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Operating Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Operating country
                </label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select a country</option>
                  {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>

              {/* Annual Business Turnover */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual business turnover
                </label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Choose turnover range</option>
                  <option value="up to 100k €">up to 100k €</option>
                  <option value="100k to 500k €">100k to 500k €</option>
                  <option value="500k to 5M €">500k to 5M €</option>
                  <option value="5M+ €">5M+ €</option>
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

export default XRPForm;
