import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  X,
  Globe,
  ShieldCheck,
  Banknote,
  Server,
  Shield,
  Zap,
  Coins,
  Plane,
  CreditCard,
  Wallet,
  Smartphone,
  Clock,
  AlertTriangle,
  Link2,
  CheckCircle2
} from "lucide-react";
import AvailableNetworks from "./AvailableNetworks";
import RefundsAndSecuritySection from "./RefundsAndSecuritySection";
import ReportingAndIntegrationSection from "./ReportingAndIntegrationSection";
import FAQAndCTASection from "./FAQAndCTASection";

/* ---------- Feature Card Component ---------- */
const Feature = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
      <div className="text-[#5b45e0]">{icon}</div>
      <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

/* ---------- Main Hero Section ---------- */
const HeroSection = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <Globe className="text-gray-400" size={32} />,
      title: "Reach shoppers globally",
      description:
        "Tap into a global audience that prefers paying with crypto and open your business to a new revenue stream.",
    },
    {
      icon: <ShieldCheck className="text-gray-400" size={32} />,
      title: "Avoid chargeback fraud",
      description:
        "Crypto payments are push-only, meaning funds can't be reversed, protecting your business from costly disputes.",
    },
    {
      icon: <Banknote className="text-gray-400" size={32} />,
      title: "Settle funds your way",
      description:
        "Choose how you get paid - instantly convert to fiat or stablecoins, or keep your crypto balances for future use.",
    },
  ];

  const logos = [
    { name: "Cherry Servers", icon: Server },
    { name: "Hostinger", icon: Globe },
    { name: "NordVPN", icon: Shield },
    { name: "Surfshark", icon: Zap },
    { name: "Coinzilla", icon: Coins },
    { name: "Alternative Airlines", icon: Plane },
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="bg-[#0b1121] mt-20 text-white font-sans overflow-hidden">
        {/* Announcement Bar */}
        <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
          <div className="flex items-center gap-2">
            <span>CoinGate obtained MiCA license! 🎉</span>
            <a href="#" className="flex items-center underline hover:opacity-80">
              Learn more <ChevronRight size={14} />
            </a>
          </div>
          <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
            <X size={16} />
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-10 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Accept crypto payments</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <div className="space-y-6 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight">
                Accept crypto payments <br />
                with a smooth checkout <br />
                experience
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Accept crypto payments online through a clean, intuitive checkout
                that guides customers from start to end, all without friction,
                complexity, or custom UI work.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <button onClick={() => navigate('/register')} className="bg-green-500 hover:bg-green-600 px-7 py-4 rounded-xl font-semibold transition">
                  Create a business account
                </button>

                <button
                  onClick={() => navigate('/demo')}
                  className="flex items-center gap-1 text-[#22fc4d] font-semibold hover:opacity-80"
                >
                  See demo <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute w-[420px] h-[420px] bg-[#5b45e0]/30 blur-[160px] rounded-full top-1/2 -translate-y-1/2 right-10"></div>

              <div className="relative bg-[#f8faff] rounded-[28px] shadow-2xl p-4 w-[280px] sm:w-[420px]">
                <img
                  src="/hero.png"
                  alt="Checkout UI"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl px-6 md:px-10 lg:px-20 xl:px-24 py-20 bg-white rounded-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1121] mb-6">
            More revenue with less effort
          </h2>

          <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-20">
            Crypto buyers are global and ready to spend. We help your business
            reach them through a simple, intuitive checkout.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
            {highlights.map((item, index) => (
              <div key={index} className="space-y-6">
                {item.icon}
                <h3 className="text-xl font-bold text-[#0b1121]">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted Logos */}
        <section className=" pt-16 overflow-hidden">
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
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 xl:px-28 py-10 lg:py-20 rounded-4xl bg-white">

            <div className="relative bg-white mb-10">
          <div className="relative flex justify-center items-center">

            {/* Center card */}
            <img
              src="https://cdn.coingate.com/uploads/2025/11/20080639/checkout.png"
              alt="Checkout UI"
              className=""
            />
          </div>
        </div>

            {/* CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Deliver a familiar <br className="hidden sm:block" />
            experience for shoppers
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We designed our checkout to look and feel like top Web2 payment flows
            so that shoppers can complete purchases without confusion.
          </p>

          <p className="mt-2 text-gray-700 font-medium">
            Better UX → fewer abandoned payments → higher revenue.
          </p>

          <button onClick={() => navigate('/register')} className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
            Sign-up →
          </button>
        </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Feature
              icon={<CreditCard />}
              title="Guided payment experience"
              desc="Clear, step-by-step payment flow for every wallet and transfer type."
            />
            <Feature
              icon={<Wallet />}
              title="Binance Pay support"
              desc="Let your customers pay directly with their Binance Pay app."
            />
            <Feature
              icon={<Link2 />}
              title="One-tap WalletConnect"
              desc="Secure one-click pairing with 400+ wallets."
            />
            <Feature
              icon={<Smartphone />}
              title="Mobile-first"
              desc="Seamless experience across any device."
            />
            <Feature
              icon={<Clock />}
              title="Real-time payment status"
              desc="Live transaction updates and confirmations."
            />
            <Feature
              icon={<AlertTriangle />}
              title="Smart error handling"
              desc="Recovery and guidance for edge cases."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f8faff] px-6 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0b1121] rounded-3xl overflow-hidden px-8 py-16 lg:px-16">
          
          {/* Background chart glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-500/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">

            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Checkout built to scale
              </h2>

              <p className="text-gray-300 mb-6">
                A decade of experience, condensed into one reliable solution.
                You just connect.
              </p>

              <ul className="space-y-4 text-gray-300">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gray-400 mt-1" size={18} />
                  <span>Handles high payment volume</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gray-400 mt-1" size={18} />
                  <span>Supports payments across blockchains and L2s</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gray-400 mt-1" size={18} />
                  <span>WalletConnect and Binance Pay support included</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-gray-400 mt-1" size={18} />
                  <span>
                    Continuous improvements backed by real merchant demand
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-[#111827] rounded-2xl p-6 shadow-2xl">     
                <img
                  src="https://cdn.coingate.com/uploads/2025/11/20082152/Checkout-built-to-scale.png"
                  alt="Checkout UI"
                  className=""
                />
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <AvailableNetworks />

    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto bg-[#0b1121] rounded-[32px] px-6 md:px-12 py-14 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – IMAGE / MOCKUP */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://cdn.coingate.com/uploads/2025/11/20082534/Customize-settlements-to-fit-your-needs.png"
              alt="Settlement settings"
              className="max-w-[520px] w-full rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="text-white space-y-6">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Customize settlements <br /> to fit your needs
            </h2>

            <p className="text-gray-300 max-w-xl">
              Accept crypto payments and receive funds in the currency that fits
              your business best. Time-locked pricing helps protect against
              volatility during payment.
            </p>

            {/* FEATURES */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#33cf4d] mt-1" size={20} />
                <span className="text-gray-200">
                  Instant conversion to EUR / GBP / USD / Stablecoins
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#33cf4d] mt-1" size={20} />
                <span className="text-gray-200">
                  Keep cryptocurrencies if preferred
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#33cf4d] mt-1" size={20} />
                <span className="text-gray-200">
                  Unified balances for clean treasury management
                </span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-[#33cf4d] mt-1" size={20} />
                <span className="text-gray-200">
                  Fiat withdrawals to your bank account
                </span>
              </li>
            </ul>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition">
              Learn more
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>

    <RefundsAndSecuritySection />
    <ReportingAndIntegrationSection />
    <FAQAndCTASection />
    </>
  );
};

export default HeroSection;
