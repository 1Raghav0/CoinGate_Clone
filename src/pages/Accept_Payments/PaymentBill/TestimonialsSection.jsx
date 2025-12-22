import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    company: "Hostinger",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hostinger_logo.png",
    quote:
      "CoinGate provides both a wide selection of cryptocurrencies and a seamless payment workflow that allows the user to complete transactions seamlessly. And all of this is delivered with a flawless user interface.",
    name: "Gediminas Griska",
    role: "Head of Payments, Hostinger",
    link: "Hostinger",
  },
  {
    company: "ZenMarket",
    logo: "https://zenmarket.jp/static/img/zenmarket-logo.svg",
    quote:
      "Since we introduced cryptocurrency payments with CoinGate, we were able to reach new clients around the world with limited or no access to credit cards and banking.",
    name: "Andriy Naumov",
    role: "CEO, ZenMarket",
    link: "ZenMarket",
  },
  {
    company: "Cherry Servers",
    logo: "https://www.cherryservers.com/blog/content/images/2021/02/cherryservers-logo.svg",
    quote:
      "With the help of CoinGate we have increased our conversion rates and attracted more customers who value privacy and prefer crypto payments.",
    name: "Vaidas Rutkauskas",
    role: "CEO, Cherry Servers",
    link: "Cherry Servers",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest text-green-500 uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight max-w-3xl mx-auto">
            What our users say about <br className="hidden sm:block" />
            our blockchain billing solutions
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between relative"
            >
              {/* QUOTE ICON */}
              <Quote
                size={28}
                className="absolute top-6 right-6 text-indigo-100"
              />

              {/* LOGO */}
              <img
                src={item.logo}
                alt={item.company}
                className="h-6 w-auto mb-6 opacity-80"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* QUOTE */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                “{item.quote}”
              </p>

              {/* AUTHOR */}
              <div>
                <p className="font-semibold text-[#0b1121]">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {item.role}
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-green-500 hover:underline"
                >
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
