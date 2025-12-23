import { ChevronRight, X, Check, Plug, RefreshCcw,
    FileText,
    Globe,
  Info,
  Server,
  Shield,
  Zap,
  Coins,
  Plane,
 } from "lucide-react";
import FAQSection from "./FAQSection";

const HeroSection = () => {

      const logos = [
    { name: "Cherry Servers", icon: Server },
    { name: "Hostinger", icon: Globe },
    { name: "NordVPN", icon: Shield },
    { name: "Surfshark", icon: Zap },
    { name: "Coinzilla", icon: Coins },
    { name: "Alternative Airlines", icon: Plane },
  ];

  const rows = [
    { label: "Monthly fee", standard: "0 EUR/month", enterprise: "0 EUR/month" },
    { label: "Payment processing fee", standard: "1%", enterprise: "Custom" },
    { label: "Crypto payouts", standard: "0.50 EUR + 0.5%", enterprise: "Custom" },
    {
      label: "Crypto payouts with conversion",
      standard: "0.50 EUR + 1.5%",
      enterprise: "Custom",
    },
    {
      label: "Currency exchange",
      standard: "1%",
      enterprise: "Custom",
      info: true,
    },
    { label: "Deposit", standard: "Free", enterprise: "Free" },
    {
      label: "Withdrawals (crypto)",
      standard: "Free",
      enterprise: "Free",
      info: true,
    },
    {
      label: "Withdrawals (SEPA)",
      standard: "Free",
      enterprise: "Free",
      info: true,
    },
    {
      label: "Withdrawals (SWIFT)",
      standard: "0.50%",
      enterprise: "Custom",
      info: true,
    },
    {
      label: "Refunds",
      standard: "0.25 EUR + 0.1%",
      enterprise: "Custom",
      info: true,
    },
  ];

  const features = [
    {
      icon: <Plug className="w-6 h-6 text-green-500" />,
      title: "Crypto payment integration solutions",
      description:
        "Integrate CoinGate into your platform with flexible options like e-commerce plugins, APIs, payment buttons, or email invoicing.",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-green-500" />,
      title: "Customer refunds in crypto",
      description:
        "Issue full or partial refunds in multiple cryptocurrencies directly from your CoinGate account balance.",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "Payments from 180+ countries",
      description:
        "Accept borderless crypto payments from around the world. Reach customers in crypto-native regions like LATAM with ease.",
    },
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: "Financial reconciliation & reporting",
      description:
        "Access real-time reports and statements for seamless financial tracking—no need to manage or account for crypto yourself.",
    },
  ];

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

  return (
    <>
    <div className="bg-gray-50 font-sans mt-20">

      {/* ================= Announcement Bar ================= */}
      <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition">
          <X size={16} />
        </button>
      </div>

      {/* ================= Pricing Section ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0b1121] mb-3">
            Pricing
          </h1>
          <p className="text-gray-500">
            Transparent pricing for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* ================= Standard ================= */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-xl font-bold text-[#0b1121] mb-2">Standard</h2>
            <p className="text-gray-500 mb-6">
              Get full access to crypto payments with no monthly or hidden fees.
            </p>

            <div className="mb-6">
              <span className="text-3xl font-bold text-[#0b1121]">1%</span>
              <span className="text-gray-500 ml-2">
                crypto payment processing fee
              </span>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition mb-6">
              Sign up
            </button>

            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                "No monthly fees",
                "Pay-as-you-go",
                "Weekly automatic settlements",
                "Customer support",
                "Technical support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Enterprise ================= */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-xl font-bold text-[#0b1121] mb-2">Enterprise</h2>
            <p className="text-gray-500 mb-6">
              A tailored pricing model for high-volume or high-value transactions.
            </p>

            <div className="mb-6">
              <span className="text-lg font-semibold text-[#0b1121]">
                Custom
              </span>
              <span className="text-gray-500 ml-2">
                value-based pricing
              </span>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition mb-6">
              Contact sales
            </button>

            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                "No monthly fees",
                "Pay-as-you-go",
                "On-request automatic settlements",
                "Customer support",
                "Technical support",
                "Branded checkout flow",
                "Dedicated account manager",
                "Developer-to-developer support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <section className="pb-10 overflow-hidden">
      <div className="relative w-full">
        {/* Marquee */}
        <div className="marquee-track">
          {/* Duplicate for infinite loop */}
          {[...logos, ...logos].map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <div key={index} className="marquee-logo flex items-center justify-center gap-2">
                <IconComponent size={32} className=" opacity-80 hover:opacity-100 transition" />
                <span className="text  md:text-lg lg:text-xl xl:text-2xl opacity-70">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#0f172a] to-[#0b1121] rounded-[2.5rem] px-6 md:px-14 py-16 text-white shadow-xl">

        {/* ================= Header ================= */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Compare plans & features
          </h2>

          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition inline-flex items-center gap-2">
              Sign up <ChevronRight size={16} />
            </button>

            <button className="text-green-500 hover:text-white transition inline-flex items-center gap-2 font-medium">
              Contact sales <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= Table ================= */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 font-medium text-white/70"></th>
                <th className="text-left py-4 font-semibold">Standard</th>
                <th className="text-left py-4 font-semibold">Enterprise</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 last:border-0"
                >
                  <td className="py-4 flex items-center gap-2 text-white/80">
                    {row.label}
                    {row.info && (
                      <Info className="w-4 h-4 text-white/40" />
                    )}
                  </td>

                  <td className="py-4 font-medium">
                    {row.standard}
                  </td>

                  <td className="py-4 font-medium">
                    {row.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-16 py-16">

        {/* ================= Header ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
            What’s included?
          </h2>

          <div className="flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition inline-flex items-center gap-2">
              Sign up <ChevronRight size={16} />
            </button>

            <button className="text-green-500 hover:underline inline-flex items-center gap-2 font-medium">
              Contact sales <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= Feature Cards ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="text-base font-semibold text-[#0b1121] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="uppercase text-sm md:text-lg font-semibold text-gray-500">Testimonials</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            Hear the First-Hand <br></br> Experiences
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

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
              Ready to Get Started?
            </h2>

            <p className="text-gray-500 max-w-lg mb-8">
              Access a complete payments platform with simple, pay-as-you-go
              pricing, or contact us to design a custom package specifically
              for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-semibold transition">
                Sign up <ChevronRight size={16} />
              </button>

              <button className="inline-flex items-center gap-2 text-green-500 hover:underline font-medium">
                Contact sales <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT CARDS ================= */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-[#f7f8fa] rounded-2xl p-6">
              <h4 className="font-semibold text-[#0b1121] mb-2">
                Developer-friendly API documentation
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                Explore our comprehensive API docs designed to help you build,
                integrate, and launch cryptocurrency payments.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-green-500 hover:underline"
              >
                Read the docs <ChevronRight size={14} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f7f8fa] rounded-2xl p-6">
              <h4 className="font-semibold text-[#0b1121] mb-2">
                Solutions for your industry
              </h4>
              <p className="text-sm text-gray-500 mb-3">
                Discover how our tailored payment solutions meet the unique
                needs of your business sector.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-green-500 hover:underline"
              >
                Explore solutions <ChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <FAQSection />
    </>
  );
};

export default HeroSection;
