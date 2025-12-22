import React from "react";
import {
  Users,
  Settings,
  ShieldCheck,
  Code2,
  UserPlus,
  ClipboardCheck,
  Sliders,
} from "lucide-react";

const roles = [
  {
    role: "Business owners",
    desc: "Full account control – manage everything from user access and payouts to business settings and compliance. One point of accountability, total visibility.",
  },
  {
    role: "Account administrators",
    desc: "Coordinate payments, access, and integrations for your team. Maintain smooth operations while safeguarding business limits.",
  },
  {
    role: "CFOs, Accountants, Payments teams",
    desc: "View balances, export data, and manage invoices or refunds. Simplify reconciliation and ensure accurate reporting without exposing sensitive data.",
  },
  {
    role: "Customer support",
    desc: "Access order and refund history to help customers quickly. Deliver better customer experiences without touching financial operations.",
  },
  {
    role: "Developers",
    desc: "Manage API keys, test environments, and payment integrations. Build and maintain your crypto payment infrastructure securely and independently.",
  },
];

const steps = [
  {
    icon: <Settings className="w-7 h-7 text-green-500" />,
    title: "Account setup",
    desc: "Go to Account settings → Users and security.",
  },
  {
    icon: <UserPlus className="w-7 h-7 text-green-500" />,
    title: "Invite team members",
    desc: "Click Add user and enter an email address.",
  },
  {
    icon: <ClipboardCheck className="w-7 h-7 text-green-500" />,
    title: "Assign roles",
    desc: "Choose a predefined role and send the invitation.",
  },
  {
    icon: <Sliders className="w-7 h-7 text-green-500" />,
    title: "Stay organized",
    desc: "View or update user status anytime (Active / Disabled / Removed).",
  },
];

const CollaborateRolesSection = () => {
  return (
    <section className="bg-gray-50 py-5 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex items-center justify-between bg-gray-200 rounded-2xl p-8 md:p-12">
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

        {/* ===== COLLABORATE SECTION ===== */}
        <div className="bg-white rounded-2xl p-8 md:p-16 shadow-sm">
          <div className="text-center mb-14 w-full max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4">
              Collaborate across all roles
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Connect all your teams – from finance to support – into one secure workflow.
              Each role plays its part, ensuring smooth operations and tight control over your funds.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition">
              Deep dive
            </button>
          </div>

          {/* TABLE */}
          <div className="border-t border-gray-100">
            {roles.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-gray-100"
              >
                <div className="font-semibold text-[#0b1121]">
                  {item.role}
                </div>
                <div className="md:col-span-2 text-gray-500 leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== READY IN MINUTES ===== */}
        <div className="p-8 md:p-16">
          <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#0b1121] text-center mb-12">
            Ready in minutes
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-[#0b1121] mb-2">
                  Step {index + 1}:<br></br> {step.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollaborateRolesSection;
