import { ChevronRight, X, Check,
    Layers,
  Repeat,
  FileText,
  ShieldCheck,
  CheckCircle,
  KeyRound,
  Scale,
   Wallet,
  BarChart3,
  ArrowLeftRight,
  Download,
 } from "lucide-react";
import AvailableNetworks from "../../Accept_Payments/Checkout/AvailableNetworks";
import FAQAndCTASection from "./FAQAndCTASection";

const HeroSection = () => {

    const features = [
    {
      title: "Hidden costs of multi-currency operations",
      description: "Multi-currency complexity means: fragmented balances, manual conversions, time-consuming reconciliation, and limited wallet visibility.",
      image: "	https://cdn.coingate.com/uploads/2025/11/06093204/Hard-to-control-treasury.png",
      side: 'left'
    },
    {
      title: "Smarter way to manage treasury",
      description: "CoinGate consolidates your treasury into a single, compliant environment where every balance, transaction, and conversion is easy to control and trace.                     Hold assets, convert instantly, and export transaction data – all from one place.",
      image: "https://cdn.coingate.com/uploads/2025/11/06093231/Full-control-of-treasury.png",
      side: 'right'
    },
  ];

  const featuress = [
    {
      icon: Layers,
      title: "Multi-currency accounts",
      desc: `Manage your crypto in one place — deposit, accept, hold, convert, send, or withdraw — and easily convert crypto and fiat when settling or storing funds. Reduce the need for multiple wallets and improve operational oversight.`,
    },
    {
      icon: Repeat,
      title: "Instant conversions",
      desc: `Swap between crypto and fiat instantly at transparent rates so you can react quickly to market volatility and maintain balanced liquidity across currencies.`,
    },
    {
      icon: FileText,
      title: "Automated reconciliation",
      desc: `Export transaction data in one click or integrate with your accounting tools to save hours on manual reconciliation and ensure reporting accuracy.`,
    },
    {
      icon: ShieldCheck,
      title: "Role-based account access",
      desc: `Customise who can access, view, and manage your accounts to make sure only the right people have oversight.`,
    },
  ];

  const steps = [
  {
    icon: Wallet,
    title: "Step 1:",
    heading: "Add funds",
    desc: "Deposit crypto or fiat into your account.",
  },
  {
    icon: BarChart3,
    title: "Step 2:",
    heading: "Track your balance",
    desc: "View all balances across currencies.",
  },
  {
    icon: ArrowLeftRight,
    title: "Step 3:",
    heading: "Convert & withdraw",
    desc: "Convert assets instantly when needed.",
  },
  {
    icon: Download,
    title: "Step 4:",
    heading: "Export & manage",
    desc: "Export data for accounting or liquidity reports.",
  },
];

  return (
    <>
     <div className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* ================= Announcement Bar ================= */}
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

      {/* ================= Main Section ================= */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              Manage all your crypto <br /> assets in one place
            </h1>

            <p className="text-gray-300 leading-relaxed">
              A secure, compliant, and efficient way to handle treasury
              operations across currencies and networks.
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-1.5 rounded-full bg-green-400" />
                CoinGate’s multi-currency accounts simplify how your business
                holds, converts, and tracks crypto assets.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2.5 h-1.5 rounded-full bg-green-400" />
                Manage liquidity, automate reconciliation, and maintain full
                visibility across every balance, all in one dashboard.
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 bg-[#5b4fe9] hover:bg-[#4b42d8] px-6 py-3 rounded-xl font-semibold transition">
              Create a business account
              <ChevronRight size={18} />
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="	https://cdn.coingate.com/uploads/2025/11/06092413/Multi-currency-account_-hero-image.png"
              alt="Crypto asset dashboard"
              className="w-full max-w-[520px] object-contain drop-shadow-2xl"
            />
          </div>

        </div>
      </main>
    </div>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] p-8 md:p-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
              Built for modern <br /> finance teams
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Managing digital assets shouldn’t require dozens of wallets or
              manual spreadsheets.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" size={18} />
                <span className="text-gray-600">
                  Receive, hold, convert, and send crypto from one verified
                  account. Maintain full control of liquidity and compliance.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="text-green-500 mt-1" size={18} />
                <span className="text-gray-600">
                  Use EUR, GBP, and USD to fund your account, convert to crypto,
                  or withdraw to your bank.
                </span>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="	https://cdn.coingate.com/uploads/2025/11/06092644/Built-for-modern-finance-teams.png"
              alt="Crypto conversion dashboard"
              className="w-full max-w-xl object-contain"
            />
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-5 font-sans overflow-hidden">
          <div className="max-w-7xl px-4 md:px-8 lg:px-20 py-16 rounded-2xl  bg-white mx-auto"> 
            <h2 className="text-2xl md:text-4xl lg:text-[48px]  font-semibold text-[#0b1121] text-center mb-24 leading-tight">
              When treasury management <br /> becomes too complex
            </h2>
    
            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block -translate-x-1/2" />
    
              <div className="space-y-24">
                {features.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${
                      item.side === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0b1121]">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {item.description}
                      </p>
                      <button className="bg-green-50 hover:bg-[#48f965] text-[#22cf4d] font-semibold py-2 px-6 rounded-lg flex items-center gap-2 transition-all">
                        Create a business account <ChevronRight size={18} />
                      </button>
                    </div>
    
                    {/* Decorative Dot on the line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-100 rounded-full hidden lg:block z-10" />
    
                    {/* Image/Mockup Area */}
                    <div className="lg:w-1/2 w-full">
                      <div className="bg-[#f8faff] rounded-2xl aspect-square flex items-center justify-center shadow-sm border border-gray-50">
                        {/* Placeholder for your actual dashboard/icon images */}
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-contain mix-blend-multiply opacity-80"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-8 md:px-16 py-20">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4">
            Core capabilities
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Secure, controlled and streamlined crypto operations — all in one place.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition">
            Create a business account
            <ChevronRight size={18} />
          </button>
        </div>

        {/* FEATURES */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {featuress.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className=" space-y-4">
                <div className="w-12 h-12  flex items-center justify-center rounded-full bg-[#eef2ff] text-green-500">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-[#0b1121]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    <section className="bg-[#f7f8fa] px-6 py-5">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] px-8 md:px-16 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="https://cdn.coingate.com/uploads/2025/11/06095448/Compliance-for-every-use-case-Image.png"
              alt="Business managing crypto assets"
              className="rounded-2xl w-full object-cover"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] leading-tight">
              Why businesses choose CoinGate for crypto treasury
            </h2>

            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 mt-1" size={30} />
                <p className="text-gray-600 leading-relaxed">
                  CoinGate serves as a single source of truth for all assets,
                  removing multi-wallet complexity and simplifying conversions
                  and reporting.
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle className="text-green-500 mt-1" size={30} />
                <p className="text-gray-600 leading-relaxed">
                  Its compliance-first environment ensures transparency and
                  audit readiness while remaining scalable for multi-entity
                  and multi-region businesses.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </div>

        <div className=" max-w-7xl flex mx-auto my-5 items-center justify-between bg-gray-200 rounded-3xl p-8 md:p-12">
            <img src="https://cdn.coingate.com/uploads/2024/10/10061735/Decodo-logo-black.png" alt="" className="w-56 h-10"/>
        {/* ===== TESTIMONIAL ===== */}
        <div className="">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
            “Role assignment is clear and intuitive, making it easy to see who has access
            and manage users confidently. The predefined roles provide a convenient
            structure that keeps onboarding simple and organized.”
          </p>
          <p className="mt-6 font-semibold text-[#0b1121]">
            Kornelija Aglinskė
          </p>
          <p className="text-sm text-gray-500">
            Payments Product Manager, Decodo
          </p>
        </div>
        </div>
    </section>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-b from-[#0b1121] to-[#0e162a] px-8 md:px-16 py-20">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Enterprise-grade security <br className="hidden sm:block" />
            and compliance
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            CoinGate operates within strict EU regulatory frameworks and employs
            the highest security standards. Every action is verified. Every
            balance is traceable.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ITEM 1 */}
          <div className="space-y-4">
            <ShieldCheck className="text-green-500" size={28} />
            <p className="text-white font-semibold text-sm md:text-base">
              KYC/AML-verified business accounts
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="space-y-4">
            <KeyRound className="text-green-500" size={28} />
            <p className="text-white font-semibold text-sm md:text-base">
              Role-based permissions and <br /> two-factor authentication
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="space-y-4">
            <FileText className="text-green-500" size={28} />
            <p className="text-white font-semibold text-sm md:text-base">
              Exportable transaction and <br /> balance logs
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="space-y-4">
            <Scale className="text-green-500" size={28} />
            <p className="text-white font-semibold text-sm md:text-base">
              GDPR- and MiCA-aligned <br /> infrastructure
            </p>
          </div>

        </div>
      </div>
    </section>

    <AvailableNetworks />

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto rounded-4xl px-8 md:px-16 py-20">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-6">
            How it works
          </h2>

          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition">
            Explore integration options
            <ChevronRight size={18} />
          </button>
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 space-y-4 border border-gray-100"
              >
                <Icon className="text-green-500" size={24} />

                <div className="text-sm font-semibold text-[#0b1121]">
                  {step.title}
                </div>

                <h4 className="font-bold text-[#0b1121]">
                  {step.heading}
                </h4>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    <FAQAndCTASection />
    </>
  );
};

export default HeroSection;
