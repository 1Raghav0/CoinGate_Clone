import React from "react";

const coins = [
  {
    name: "Bitcoin",
    img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    name: "Bitcoin Cash",
    img: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png",
  },
  {
    name: "Binance Coin",
    img: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    name: "Litecoin",
    img: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
  },
  {
    name: "Ethereum",
    img: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "Solana",
    img: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
  {
    name: "XRP",
    img: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
  },
  {
    name: "TRON",
    img: "https://cryptologos.cc/logos/tron-trx-logo.png",
  },
  {
    name: "USDC",
    img: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    name: "Polygon",
    img: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  },
  {
    name: "Shiba Inu",
    img: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
  },
  {
    name: "Dogecoin",
    img: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
  },
];

const Payment = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-10 md:p-16 text-center">

        {/* TOP LABEL */}
        <p className="text-xs md:text-lg font-bold  uppercase text-gray-400 mb-4">
          The More The Member
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
          Accept payments in ETH and other cryptocurrencies
        </h2>

        <p className="text-xs md:text-lg text-gray-400 mb-4">
          Besides Ethereum payments, you can also accept number of other crypto like Bitcoin, Ethereum, Litecoin, and many more.
        </p>


        {/* CTA BUTTON */}
        <button className="mb-14 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
          View supported coins →
        </button>

        {/* ICON GRID */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-6 gap-6 justify-items-center">
          {coins.map((coin, index) => (
            <div
              key={index}
              className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
              title={coin.name}
            >
              <img
                src={coin.img}
                alt={coin.name}
                className="w-18 h-18 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Payment;
