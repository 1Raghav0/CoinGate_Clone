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

const AcceptPayment = () => {
  return (
    <section className="py-20 px-6">
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
                className="w-22 h-22 object-contain"
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default AcceptPayment;
