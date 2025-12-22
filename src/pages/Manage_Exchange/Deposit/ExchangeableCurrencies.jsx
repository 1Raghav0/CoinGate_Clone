import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const currencyData = [
  {
    code: "USD",
    name: "United States Dollar",
    price: 89241.09,
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035",
  },
  {
    code: "EUR",
    name: "Euro",
    price: 76080.27,
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
  },
  {
    code: "GBP",
    name: "British Pound",
    price: 66511.88,
    icon: "https://coingate.com/app/themes/coingate/dist/images/currency-icons/GBP.svg",
  },
  {
    code: "USDC",
    name: "USDC",
    price: 89304.65,
    icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035",
  },
  {
    code: "LTC",
    name: "Litecoin",
    price: 1148.11,
    icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=035",
  },
  {
    code: "ETH",
    name: "Ethereum",
    price: 29.5159,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035",
  },
  {
    code: "BCH",
    name: "Bitcoin Cash",
    price: 154.5356,
    icon: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=035",
  },
  {
    code: "XRP",
    name: "XRP",
    price: 46576.62,
    icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=035",
  },
  {
    code: "TRX",
    name: "TRON",
    price: 310559.0,
    icon: "https://cryptologos.cc/logos/tron-trx-logo.png?v=035",
  },
  {
    code: "DOGE",
    name: "Dogecoin",
    price: 680272.0,
    icon: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=035",
  },
  {
    code: "BNB",
    name: "Binance Coin",
    price: 103.4447,
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035",
  },
  {
    code: "SOL",
    name: "Solana",
    price: 710.5301,
    icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=035",
  },
  {
    code: "AVAX",
    name: "Avalanche",
    price: 2240.65,
    icon: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=035",
  },
];

export default function ExchangeableCurrencies() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("BTC");

  const filteredCurrencies = currencyData.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 md:p-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Exchangeable currencies
          </h2>

          {/* DROPDOWN */}
          <div className="relative w-44">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-md px-3 py-2 text-sm bg-white"
            >
              <span>
                Currency: <strong>{selected}</strong>
              </span>
              <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                {/* SEARCH */}
                <div className="p-2 border-b">
                  <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                    <Search className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-full text-sm outline-none"
                    />
                  </div>
                </div>

                {/* LIST */}
                <div className="max-h-60 overflow-y-auto">
                  {filteredCurrencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => {
                        setSelected(currency.code);
                        setOpen(false);
                        setSearch("");
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 ${
                        selected === currency.code ? "bg-indigo-50" : ""
                      }`}
                    >
                      <img
                        src={currency.icon}
                        alt={currency.code}
                        className="w-6 h-6 rounded-full"
                      />
                      {currency.name} ({currency.code})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200  text-gray-500">
                <th className="text-left py-3">Currency</th>
                <th className="text-left py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {currencyData.map((currency) => (
                <tr key={currency.code} className="border-b border-gray-200 last:border-0">
                  <td className="py-3 flex items-center gap-3">
                    <img
                      src={currency.icon}
                      alt={currency.code}
                      className="w-7 h-7 rounded-full"
                    />
                    <span className="font-medium text-gray-900">
                      {currency.name}{" "}
                      <span className="text-gray-400">{currency.code}</span>
                    </span>
                  </td>
                  <td className="py-3 text-gray-900">
                    {currency.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
