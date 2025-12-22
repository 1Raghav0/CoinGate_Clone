import {
  RotateCcw,
  Zap,
  SlidersHorizontal,
  Smile,
  CheckCircle2,
} from "lucide-react";

const refundFeatures = [
  {
    icon: RotateCcw,
    title: "Robust error handling",
    desc: "Automatically handle refund-eligible errors.",
  },
  {
    icon: Zap,
    title: "Instant refunds",
    desc: "Quickly initiate refunds from your dashboard or via API.",
  },
  {
    icon: SlidersHorizontal,
    title: "Less manual work",
    desc: "Reduce workload for support and finance teams.",
  },
  {
    icon: Smile,
    title: "Better experience",
    desc: "Keep customers informed at every step.",
  },
];

const securityPoints = [
  "Push-only payments → no chargeback fraud",
  "AML / KYC screening",
  "Wallet and sanctions monitoring",
  "Full payment traceability",
  "Role-based account management",
];

const RefundsAndSecuritySection = () => {
  return (
    <>
      {/* ================= SMART REFUNDS ================= */}
      <section className="py-8 px-4 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto bg-white rounded-[28px] px-8 md:px-16 py-16 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smart refunds built into your workflow
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Reversals shouldn’t be complicated. And, with CoinGate, they aren’t.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {refundFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="space-y-4">
                <Icon className="mx-auto text-green-500" size={28} />
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECURITY & COMPLIANCE ================= */}
      <section className="px-4 py-8 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto bg-[#0b1121] rounded-4xl px-8 md:px-16 py-12 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ensure security and <br /> compliance from the start
              </h2>

              <p className="text-gray-300 max-w-xl">
                Customers see a clean checkout. Under the hood, strong safeguards
                protect your business.
              </p>

              <ul className="space-y-4">
                {securityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#33cf4d] mt-1 shrink-0"
                      size={20}
                    />
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://cdn.coingate.com/uploads/2025/11/20085158/Ensure-security-and-compliance-from-the-start.png" // replace with your asset
                alt="Security compliance"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default RefundsAndSecuritySection;
