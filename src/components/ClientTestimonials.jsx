import React from "react";

const testimonials = [
  {
    company: "Cherry Servers",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064128/Cherry-servers-1.png",
    quote:
      "With the help of CoinGate we have increased our conversion rates and attracted more customers who value privacy and prefer crypto payments.",
    author: "Vaidas Rutkauskas",
    role: "CEO, Cherry Servers",
  },
  {
    company: "ZenMarket",
    logo: "	https://cdn.coingate.com/uploads/2023/08/10064148/zenmarket_logo-1-1.png",
    quote:
      "Since we introduced cryptocurrency payments with CoinGate, we were able to reach new clients around the world with limited or no access to credit cards and banking.",
    author: "Andriy Naumov",
    role: "CEO, ZenMarket",
  },
  {
    company: "Hostinger",
    logo: "	https://cdn.coingate.com/uploads/2023/09/10064128/Hostinger-2.png",
    quote:
      "CoinGate provides both a wide selection of cryptocurrencies and a seamless payment workflow that allows the user to complete transactions seamlessly. And all of this is delivered with a flawless user interface.",
    author: "Gediminas Griska",
    role: "Head of Payments, Hostinger",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            Here’s What Our Clients Say <br />
            About Our Payment Processor:
          </h2>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between"
            >
              {/* LOGO */}
              <img
                src={item.logo}
                alt={item.company}
                className="h-8 w-48 mb-6 opacity-70"
              />

              {/* QUOTE */}
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                “{item.quote}”
              </p>

              {/* AUTHOR */}
              <div>
                <p className="font-semibold text-[#0b1121] text-sm">
                  {item.author}
                </p>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonials;
