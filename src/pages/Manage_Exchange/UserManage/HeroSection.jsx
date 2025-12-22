import { useState } from "react";
import { ChevronRight, X, Check, ChevronDown, CheckCircle2 } from "lucide-react"
import CollaborateRolesSection from "./CollaborateRolesSection";
import FAQAndCTASection from "./FAQAndCTASection";

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
  {
    title: "Before CoinGate:",
    points: [
      "No individual accounts – logins are shared.",
      "No audit trail – can’t see who did what.",
      "No quick deactivation – access lingers after departures.",
      "No instant setup – onboarding is slow.",
    ],
    image: "https://cdn.coingate.com/uploads/2025/11/03125504/Before-CoinGate_.png",
    side: "left",
    type: "before",
  },
  {
    title: "With CoinGate:",
    points: [
      "Dedicated individual accounts for accountability.",
      "Full audit trails for complete action transparency.",
      "Instant deactivation for immediate security.",
      "Rapid setup for fast new-hire onboarding.",
    ],
    image: "https://cdn.coingate.com/uploads/2025/11/03131836/Before-CoinGate.png",
    side: "right",
    type: "after",
  },
];

    const featuress = [
  {
    title: "User invitations",
    description:
      "Invite new team members directly from your dashboard. Add accountants, developers, or support staff without sharing credentials.",
    image:
      "https://cdn.coingate.com/uploads/2025/11/03133832/Verification-based-access.png",
  },
  {
    title: "Roles and permissions",
    description:
      "Assign roles with granular permissions to control who can access, manage, and approve different actions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "User activity overview",
    description:
      "Track actions performed by each team member with full audit logs for transparency and accountability.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Access revocation",
    description:
      "Instantly revoke access when team members leave, ensuring your business stays secure at all times.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Verification-based access",
    description:
      "Restrict sensitive actions to verified users only, adding an extra layer of protection to your account.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Manage team access <br /> effectively
            </h1>

            <p className="text-gray-300 leading-relaxed">
              Manage roles and permissions with confidence. Onboard faster, reduce risks, and stay compliant while your team handles crypto payments securely.
            </p>

            <button className="mb-14 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
           Invite your team today →
        </button>
          </div>

          {/* RIGHT CHECKOUT CARD */}
          <div className="flex justify-center lg:justify-end relative">
                <img src="https://cdn.coingate.com/uploads/2025/11/03123738/User-management-hero-image-1.png" alt="" />
          </div>
        </div>
      </main>
    </div>

    <section className="bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-8 md:p-16 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
              Built for teams that <br />
              demand both speed <br />
              and security
            </h2>

            <p className="text-gray-600 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              For business owners, finance teams, and developers handling crypto,
              it offers faster onboarding, fewer security risks, and total access
              control.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                  <Check className="w-3 h-3 text-green-600" />
                </span>
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold">Granular permissions</span> – five
                  predefined roles for clear accountability.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                  <Check className="w-3 h-3 text-green-600" />
                </span>
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold">SSO & MFA security</span> – verified
                  and effortless access for your entire team.
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                  <Check className="w-3 h-3 text-green-600" />
                </span>
                <p className="text-sm md:text-base text-gray-700">
                  <span className="font-semibold">Compliance built-in</span> – AML and
                  GDPR-compliant governance for crypto-ready businesses.
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.coingate.com/uploads/2025/11/03124921/Built-for-teams-that-move-fast-and-value-security-1.png"
                alt="Secure team access"
                className="w-full max-w-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-5 font-sans overflow-hidden">
  <div className="max-w-7xl px-4 md:px-8 lg:px-20 py-16 rounded-2xl bg-white mx-auto">
    <h2 className="text-2xl md:text-4xl lg:text-[48px] font-semibold text-[#0b1121] text-center mb-24 leading-tight">
      Goodbye chaos, hello <br /> control
    </h2>

    <div className="relative">
      {/* Vertical Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block -translate-x-1/2" />

      <div className="space-y-24">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative ${
              item.side === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT CONTENT */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b1121]">
                {item.title}
              </h3>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-lg ${
                      item.type === "before"
                        ? "text-gray-500"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="mt-1">
                      {item.type === "before" ? "✕" : "✓"}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {item.type === "after" && (
                <div className="flex items-center gap-4 pt-4">
                  <button className="bg-green-100 hover:bg-green-600 text-green-500 font-semibold py-2 px-6 rounded-lg transition">
                    Sign-up
                  </button>
                  <button className="text-green-500 font-medium hover:underline">
                    Learn more →
                  </button>
                </div>
              )}
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-100 rounded-full hidden lg:block z-10" />

            {/* IMAGE (UNCHANGED) */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-[#f8faff] rounded-2xl aspect-square flex items-center justify-center shadow-sm border border-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-10 leading-tight">
            We build features our <br /> clients want
          </h2>

          <div className="divide-y divide-gray-100">
            {featuress.map((item, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span
                    className={`font-semibold text-base ${
                      activeIndex === index
                        ? "text-[#5b45e0]"
                        : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeIndex === index
                        ? "rotate-180 text-[#5b45e0]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {activeIndex === index && (
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm w-full max-w-md">
            <img
              src={featuress[activeIndex].image}
              alt={featuress[activeIndex].title}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>

    <section className="bg-gray-50 px-6 py-5">
      <div className="max-w-7xl mx-auto rounded-4xl bg-[#0f172a] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Team collaboration"
            className="rounded-2xl w-full h-[560px] object-cover"
          />

          {/* IMAGE OVERLAY CARD */}
          <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-md flex items-center gap-3 max-w-xs">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Transparent access control
              </p>
              <p className="text-xs text-gray-500">
                Every change tracked for audit confidence
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Proven outcome on <br /> efficiency and compliance
          </h2>

          <p className="text-gray-300 mb-8">
            Businesses using CoinGate’s team management tools report:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-400 mt-1" size={20} />
              <span className="text-gray-200">
                Significantly faster onboarding and offboarding.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-400 mt-1" size={20} />
              <span className="text-gray-200">
                Fewer issues with support and access, thanks to clear permission
                levels.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-green-400 mt-1" size={20} />
              <span className="text-gray-200">
                Improved compliance readiness for audits and reporting.
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>

    <CollaborateRolesSection />

    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto bg-[#0e1629] rounded-4xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center p-10 md:p-16">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Start with enterprise- <br /> grade security
            </h2>

            <p className="text-gray-400 max-w-xl">
              Get complete control without compromising operational speed.
            </p>

            <ul className="space-y-4">
              {[
                "Role-based access control – define permissions by responsibility.",
                "Single Sign-On – centralized authentication for teams.",
                "Multi-factor authentication for added protection.",
                "KYC verification ensures only approved users handle funds.",
                "GDPR-compliant data visibility and management.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2
                    size={20}
                    className="text-green-400 mt-1 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition">
              Create a business account
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
                alt="Enterprise security"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* OVERLAY BADGE */}
            <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-4 shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <CheckCircle2 className="text-indigo-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-[#0b1121] text-sm">
                  Enterprise-grade security
                </p>
                <p className="text-xs text-gray-500">
                  Protection that scales with your business
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <FAQAndCTASection />

    </>
  )
}

export default HeroSection