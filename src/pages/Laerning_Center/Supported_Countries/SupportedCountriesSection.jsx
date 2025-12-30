import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

const regions = ["All", "Europe", "Americas", "Oceania", "Asia", "Africa"];

const countries = [
  // -------- Europe --------
  { name: "Albania", code: "AL", region: "Europe" },
  { name: "Andorra", code: "AD", region: "Europe" },
  { name: "Austria", code: "AT", region: "Europe" },
  { name: "Belgium", code: "BE", region: "Europe" },
  { name: "Bosnia and Herzegovina", code: "BA", region: "Europe" },
  { name: "Bulgaria", code: "BG", region: "Europe" },
  { name: "Croatia", code: "HR", region: "Europe" },
  { name: "Czech Republic", code: "CZ", region: "Europe" },
  { name: "Denmark", code: "DK", region: "Europe" },
  { name: "Estonia", code: "EE", region: "Europe" },
  { name: "Finland", code: "FI", region: "Europe" },
  { name: "France", code: "FR", region: "Europe" },
  { name: "Germany", code: "DE", region: "Europe" },
  { name: "Greece", code: "GR", region: "Europe" },
  { name: "Hungary", code: "HU", region: "Europe" },
  { name: "Ireland", code: "IE", region: "Europe" },
  { name: "Italy", code: "IT", region: "Europe" },
  { name: "Latvia", code: "LV", region: "Europe" },
  { name: "Lithuania", code: "LT", region: "Europe" },
  { name: "Luxembourg", code: "LU", region: "Europe" },
  { name: "Malta", code: "MT", region: "Europe" },
  { name: "Netherlands", code: "NL", region: "Europe" },
  { name: "Norway", code: "NO", region: "Europe" },
  { name: "Poland", code: "PL", region: "Europe" },
  { name: "Portugal", code: "PT", region: "Europe" },
  { name: "Romania", code: "RO", region: "Europe" },
  { name: "Serbia", code: "RS", region: "Europe" },
  { name: "Slovakia", code: "SK", region: "Europe" },
  { name: "Slovenia", code: "SI", region: "Europe" },
  { name: "Spain", code: "ES", region: "Europe" },
  { name: "Sweden", code: "SE", region: "Europe" },
  { name: "Switzerland", code: "CH", region: "Europe" },
  { name: "Ukraine", code: "UA", region: "Europe" },
  { name: "United Kingdom", code: "GB", region: "Europe" },

  // -------- Americas --------
  { name: "Argentina", code: "AR", region: "Americas" },
  { name: "Brazil", code: "BR", region: "Americas" },
  { name: "Chile", code: "CL", region: "Americas" },
  { name: "Colombia", code: "CO", region: "Americas" },
  { name: "Costa Rica", code: "CR", region: "Americas" },
  { name: "Dominican Republic", code: "DO", region: "Americas" },
  { name: "El Salvador", code: "SV", region: "Americas" },
  { name: "Grenada", code: "GD", region: "Americas" },
  { name: "Mexico", code: "MX", region: "Americas" },
  { name: "Peru", code: "PE", region: "Americas" },
  { name: "Saint Lucia", code: "LC", region: "Americas" },

  // -------- Oceania --------
  { name: "Australia", code: "AU", region: "Oceania" },
  { name: "New Zealand", code: "NZ", region: "Oceania" },

  // -------- Asia --------
  { name: "Cyprus", code: "CY", region: "Asia" },
  { name: "Hong Kong", code: "HK", region: "Asia" },
  { name: "India", code: "IN", region: "Asia" },
  { name: "Israel", code: "IL", region: "Asia" },
  { name: "Japan", code: "JP", region: "Asia" },
  { name: "Korea (Republic of)", code: "KR", region: "Asia" },
  { name: "Qatar", code: "QA", region: "Asia" },
  { name: "Saudi Arabia", code: "SA", region: "Asia" },
  { name: "Singapore", code: "SG", region: "Asia" },

  // -------- Africa --------
  { name: "Egypt", code: "EG", region: "Africa" },
];

export default function SupportedCountriesSection() {
  const [activeRegion, setActiveRegion] = useState("All");

  const filteredCountries =
    activeRegion === "All"
      ? countries
      : countries.filter(c => c.region === activeRegion);

  return (
    <section className="bg-[#f7f8fa] py-8 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-14">

        {/* Filter Tabs */}
        <div className="mb-10">
          <p className="text-sm font-medium mb-3">Filter by region:</p>
          <div className="flex flex-wrap gap-2">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition ${
                  activeRegion === region
                    ? "bg-indigo-500 text-white border-indigo-500"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-10">
          {filteredCountries.map((country, index) => (
            <div key={index} className="flex items-start gap-3">
              <ReactCountryFlag
                svg
                countryCode={country.code}
                className="w-7 h-7 rounded-sm mt-1"
              />
              <div>
                <p className="font-semibold text-[#0b1121]">
                  {country.name}
                </p>
                <p className="text-xs text-gray-500">Merchant Trader</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
