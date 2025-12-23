import { useState } from "react";

/* ---------- ICON MAP ---------- */
const icons = {
  Bitcoin: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg",
  Litecoin: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg",
  Ethereum: "https://cryptologos.cc/logos/ethereum-eth-logo.svg",
  "Bitcoin Cash": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg",
  XRP: "https://cryptologos.cc/logos/xrp-xrp-logo.svg",
  TRON: "https://cryptologos.cc/logos/tron-trx-logo.svg",
  Dogecoin: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg",
  "Binance Coin": "https://cryptologos.cc/logos/bnb-bnb-logo.svg",
  Polygon: "https://cryptologos.cc/logos/polygon-matic-logo.svg",
  USDC: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
  Solana: "https://cryptologos.cc/logos/solana-sol-logo.svg",
  "Shiba Inu": "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg",
  "United States Dollar": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  Euro: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  "British Pound": "https://coingate.com/app/themes/coingate/dist/images/currency-icons/GBP.svg",
};

/* ---------- TABS ---------- */
const tabs = [
  "Accepted by merchants",
  "Settlements",
  "Crypto payouts & Withdrawals",
  "Deposits",
];

/* ---------- DATA ---------- */
const data = {
  "Accepted by merchants": [
    { name: "Bitcoin", networks: ["Bitcoin", "Lightning"] },
    { name: "Litecoin", networks: ["Litecoin"] },
    { name: "Ethereum", networks: ["Ethereum", "Arbitrum", "Base", "Optimism"] },
    { name: "Bitcoin Cash", networks: ["Bitcoin Cash"] },
    { name: "XRP", networks: ["XRP"] },
    { name: "TRON", networks: ["Tron"] },
    { name: "Dogecoin", networks: ["Dogecoin"] },
    { name: "Binance Coin", networks: ["Ethereum", "BSC"] },
    { name: "Polygon", networks: ["Ethereum", "Polygon"] },
    {
      name: "USDC",
      networks: ["Ethereum", "BSC", "Solana", "Polygon", "Arbitrum", "Base", "Optimism"],
    },
    { name: "Solana", networks: ["Solana"] },
  ],

  Settlements: [
    { name: "United States Dollar", rails: ["SWIFT"] },
    { name: "Euro", rails: ["SEPA", "SWIFT"] },
    { name: "British Pound", rails: ["SWIFT"] },
    { name: "Bitcoin", networks: ["Bitcoin", "Lightning"] },
    { name: "Litecoin", networks: ["Litecoin"] },
    { name: "Ethereum", networks: ["Ethereum", "Arbitrum", "Base", "Optimism"] },
    { name: "Bitcoin Cash", networks: ["Bitcoin Cash"] },
    { name: "Dogecoin", networks: ["Dogecoin"] },
    { name: "USDC", networks: ["Ethereum", "BSC", "Solana", "Polygon"] },
    { name: "Solana", networks: ["Solana"] },
  ],

  "Crypto payouts & Withdrawals": [
    { name: "Ethereum", networks: ["Ethereum", "Arbitrum", "Base", "Optimism"] },
    { name: "USDC", networks: ["Ethereum", "BSC", "Polygon", "Base"] },
    { name: "Shiba Inu", networks: ["Ethereum", "BSC", "Polygon"] },
    { name: "Binance Coin", networks: ["BSC"] },
    { name: "TRON", networks: ["Tron"] },
    { name: "Bitcoin", networks: ["Bitcoin"] },
    { name: "Litecoin", networks: ["Litecoin"] },
    { name: "Dogecoin", networks: ["Dogecoin"] },
    { name: "Bitcoin Cash", networks: ["Bitcoin Cash"] },
    { name: "XRP", networks: ["XRP"] },
    { name: "Solana", networks: ["Solana"] },
    { name: "Polygon", networks: ["Polygon"] },
  ],

  Deposits: [
    { name: "Ethereum", networks: ["Ethereum", "Arbitrum", "Base", "Optimism"] },
    { name: "Binance Coin", networks: ["Ethereum", "BSC"] },
    { name: "Polygon", networks: ["Ethereum", "Polygon"] },
    { name: "USDC", networks: ["Ethereum", "BSC", "Polygon", "Base"] },
    { name: "Shiba Inu", networks: ["Ethereum", "BSC"] },
    { name: "TRON", networks: ["Tron"] },
    { name: "Bitcoin", networks: ["Bitcoin"] },
    { name: "Litecoin", networks: ["Litecoin"] },
    { name: "Dogecoin", networks: ["Dogecoin"] },
    { name: "Bitcoin Cash", networks: ["Bitcoin Cash"] },
  ],
};

/* ---------- COMPONENT ---------- */
const AvailableNetworks = () => {
  const [activeTab, setActiveTab] = useState("Accepted by merchants");

  return (
    <section className="bg-[#f7f8fa] py-5 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Available networks & currencies
        </h2>
        <p className="text-gray-500 mb-6">
          Explore the full list of digital currencies and blockchain networks you can use for payments with CoinGate.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                activeTab === tab
                  ? "bg-indigo-100 border-indigo-300 text-indigo-600"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl p-4 border border-gray-100"
            >
              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={icons[item.name]}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-contain"
                />
                <h4 className="font-semibold text-gray-900">
                  {item.name}
                </h4>
              </div>

              {/* Networks */}
              {item.networks && (
                <>
                  <p className="text-xs text-gray-500 mb-1">Networks:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.networks.map((net) => (
                      <span
                        key={net}
                        className="text-xs bg-gray-100 rounded-lg px-2 py-0.5 text-gray-700"
                      >
                        {net}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Rails */}
              {item.rails && (
                <>
                  <p className="text-xs text-gray-500 mb-1">Payment rails:</p>
                  <div className="flex gap-2">
                    {item.rails.map((rail) => (
                      <span
                        key={rail}
                        className="text-xs bg-gray-100 rounded-lg px-2 py-0.5 text-gray-700"
                      >
                        {rail}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableNetworks;
