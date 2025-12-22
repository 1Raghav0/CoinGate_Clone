import {
  BarChart3,
  FileText,
  FileCheck2,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const reportingFeatures = [
  {
    icon: BarChart3,
    title: "Real-time transaction tracking",
    desc: "See every payment update instantly. Filter by currency, status, wallet type, and more.",
  },
  {
    icon: FileText,
    title: "Complete order and settlement history",
    desc: "View full life cycle data for every transaction – from checkout to payout – all in one place.",
  },
  {
    icon: FileCheck2,
    title: "Pre-formatted reports and data exporting",
    desc: "Generate ready-to-use CSV or PDF reports for accounting or audits in seconds.",
  },
  {
    icon: RefreshCcw,
    title: "Transparent currency conversion records",
    desc: "Track every rate used for settlements and conversions for full audit confidence.",
  },
];

const integrationPoints = [
  "Plugins for WooCommerce, PrestaShop, WIX & more",
  "Billing (no-code) for instant invoicing",
  "Simple yet comprehensive API for full control",
];

const ReportingAndIntegrationSection = () => {
  return (
    <>
      {/* ================= REPORTING SECTION ================= */}
      <section className="py-8 px-4 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto text-center px-4 md:px-8 lg:px-16 xl:px-24">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl mx-auto text-gray-900">
            Clear reporting and no-sweat reconciliation
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Every crypto payment is tracked, logged, and exportable.
            No spreadsheets, no confusion.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reportingFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-gray-100 p-6 text-left shadow-sm hover:shadow-md transition"
              >
                <Icon className="text-green-500 mb-4" size={28} />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {title}
                </h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTEGRATION SECTION ================= */}
      <section className="py-8 px-4 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto bg-[#0b1121] rounded-4xl px-8 md:px-16 py-16 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT VISUAL */}
            <div className="relative flex justify-center lg:justify-start">
              <img
                src="https://cdn.coingate.com/uploads/2025/11/20090732/Integrate-fast-%E2%80%93-low-code-no-code-or-fully-custom.png" // replace with your image
                alt="Integration ready"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Integrate fast – low-code, <br />
                no-code, or fully custom
              </h2>

              <p className="text-gray-300 max-w-xl">
                Start accepting crypto the way you prefer with a hosted checkout
                and no UI work required.
              </p>

              <ul className="space-y-4">
                {integrationPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#33cf4d] mt-1 shrink-0"
                    />
                    <span className="text-gray-200">{point}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 inline-flex items-center gap-2 bg-[#33cf4d] hover:bg-[#42c936] text-black font-semibold px-6 py-3 rounded-lg transition">
                Sign-up →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportingAndIntegrationSection;
