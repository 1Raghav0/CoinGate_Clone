import { Link } from "react-router-dom";
import { ChevronRight, X, CheckCircle2, Globe, BarChart3, Clock, ShieldCheck, Check } from "lucide-react";
import MakePayment from "./MakePayment";
import PayoutSteps from "./PayoutSteps";
import FAQSection from "./FAQSection";



const HeroSection = () => {

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

const steps = [
  {
    title: "Deposit your funds",
    description:
      "Top-up your business account balance with BTC, USDC, EUR, etc.",
    image: "https://cdn.coingate.com/uploads/2023/11/10063749/mass_payouts_explanation_topup_01.png", // 👉 your image
  },
  {
    title: "Upload your contact list",
    description:
      "Upload your contact list with the required information for compliant processing.",
    image: "https://cdn.coingate.com/uploads/2023/11/10063748/mass_payouts_explanation_contacts_02.png", // 👉 your image
  },
  {
    title: "Send out payments",
    description:
      "Send out mass payments from your account balance to external wallets in the form of BTC, USDC, and more.",
    image: "https://cdn.coingate.com/uploads/2023/11/10063748/mass_payouts_explanation_payout_03_2.png", // 👉 your image
  },
];

  return (
    <>
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={16} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition-colors">
          <X size={16} />
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Breadcrumb */}
            <div className="text-sm text-gray-400">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Crypto payouts</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              Crypto Payouts for <br />
              Efficient Global Remittances
            </h1>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              Crypto payouts are useful if your business handles multiple
              transactions daily and you need a faster, more accessible and
              less expensive alternative for global remittances.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>0.5% fee per payment</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Global reach</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-green-400" />
                <span>Instant settlements</span>
              </li>
            </ul>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
              Sign Up <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image container */}
            <div className="relative">
              <img
                src="https://cdn.coingate.com/uploads/2024/12/10063312/Main_image-2.png"
                alt="Crypto payouts dashboard"
                className="relative z-10 h-[520px] w-auto object-contain rounded-2xl"
              />
            </div>
          </div>

        </div>
      </main>
    </div>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-14 lg:p-16 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – IMAGE */}
          <div className="flex justify-center">
            <img
              src="	https://cdn.coingate.com/uploads/2024/11/10063357/Industry-pages-02-1.png"
              alt="Global crypto payouts map"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-8">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Reach 180+ countries
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
              Pay Worldwide, <br /> Instantly
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>Affiliate Payouts:</strong> Reward your affiliates with instant payments.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>Vendor Payments:</strong> Pay your suppliers quickly and securely.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>Reward Distributions:</strong> Distribute rewards or bonuses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>Marketplace Payouts:</strong> Fast payouts to sellers or freelancers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>Payroll Disbursements:</strong> Pay employees anywhere in the world.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" size={18} />
                <span>
                  <strong>B2B & B2C Payments:</strong> Instant international transfers in crypto.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition">
                Create an Account
              </button>

              <a
                href="#"
                className="flex items-center gap-1 text-green-500 font-medium hover:underline"
              >
                Pricing <ChevronRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Cost-efficient payments
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
          Send Money Without <br className="hidden sm:block" />
          Roadblocks
        </h2>

        <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl  font-semibold transition mb-14">
          Sign Up <ChevronRight size={18} />
        </button>

        {/* FEATURES */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <Globe className="text-green-500 mb-5" size={24} />
            <h3 className="font-semibold text-[#0b1121] mb-2">
              Global reach
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Send payments to recipients worldwide without worrying about
              cross-border fees or delays.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <BarChart3 className="text-green-500 mb-5" size={24} />
            <h3 className="font-semibold text-[#0b1121] mb-2">
              Easy accounting
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Sort, monitor, and export your transaction history for accounting
              purposes.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <Clock className="text-green-500 mb-5" size={24} />
            <h3 className="font-semibold text-[#0b1121] mb-2">
              Save on costs & time
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              So much cheaper and faster than SWIFT. Avoid slow and expensive
              traditional banking.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <ShieldCheck className="text-green-500 mb-5" size={24} />
            <h3 className="font-semibold text-[#0b1121] mb-2">
              Transparent fees
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              No onboarding, setup, or hidden costs. Pay only for what you use
              and save more as volume grows.
            </p>
          </div>

        </div>
      </div>
    </section>

    <MakePayment />
    <PayoutSteps />

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-xs md:text-lg text-gray-500">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            What Our Clients Say:
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

    <section className="bg-[#0b1121] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight">
            Mass Payouts in Crypto <br />
            Made Easy
          </h2>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            Securely send compliant crypto transactions to hundreds of suppliers,
            affiliates, employees, customers and others at the same time via a
            licensed Virtual Asset Service Provider (VASP) in the EU.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="text-green-500" size={20} />
              API connection supported
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="text-green-500" size={20} />
              Advanced blockchain and data screening
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="text-green-500" size={20} />
              Transaction fee starting from 0.5%
            </li>
          </ul>

          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
            Contact Us →
          </button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Image */}
          <img
            src="	https://cdn.coingate.com/uploads/2023/11/10063747/mass_payouts_img_05.png"
            alt="Mass crypto payouts"
            className="relative z-10 h-[520px] w-auto object-contain"
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-10 md:p-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-lg  uppercase text-gray-500 mb-3">
            We are CoinGate
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121]">
            How Mass Payouts Work
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid gap-4 md:grid-cols-3 text-center max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* CIRCLE IMAGE */}
              <div className="w-32 h-32  flex items-center justify-center mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-[#0b1121] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-[#0b1121] to-[#101828] p-10 md:p-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-gray-400 max-w-md mb-8">
            Take the first step and register for a CoinGate account.
          </p>

          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-white">
            Start Now
            <span className="text-lg">›</span>
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="relative mx-auto w-full">
          <div className="bg-[#101b3a] rounded-2xl p-8 shadow-xl relative">

           
            <img src="	https://cdn.coingate.com/uploads/2024/12/10063313/get_started_image.png" alt="" className="h-full"/>
          </div>
        </div>

      </div>
    </section>

    <FAQSection />
    </>
  );
};

export default HeroSection;
