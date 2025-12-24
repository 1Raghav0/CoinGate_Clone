import {ChevronRight,
    X,
  Plane,
  Gavel,
  MessageSquareWarning,}
  from "lucide-react";
import DataProtectionForm from "./DataProtectionForm";


const DataProtection = () => {

      const items = [
        {
      title: "Legal Inquiries",
      description:
        "The Company endeavors to address all legal inquiries, information requests, subpoenas, and related matters with the utmost care and diligence, ensuring a timely and efficient response.",
      icon: Gavel,
    },
    {
      title: "Travel Rule Request",
      description:
        "The Travel Rule mandates that Virtual Asset Service Providers (VASPs) share sender and receiver information during cryptocurrency transactions to combat illegal activities.",
      icon: Plane,
    },
    {
      title: "Complaints",
      description:
        "If you have any complaints or inquiries, please do not hesitate to provide us with the necessary information, and we will make every effort to address your concerns promptly.",
      icon: MessageSquareWarning,
    },
  ];

  return (
    <>
     <div className="bg-gray-50 font-sans mt-20">
        <div className="bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
          <X size={16} />
        </button>
      </div>
     </div>

    <DataProtectionForm />

     <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl px-6 md:px-12 py-14">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold tracking-widest text-gray-400 mb-2">
            WE ARE COINGATE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121]">
            Contact Our Legal Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="space-y-4">
                <div className="flex ">
                  <Icon className="w-6 h-6 text-green-500" />
                </div>

                <h3 className="font-semibold text-[#0b1121]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="text-sm font-medium text-green-500 hover:underline inline-block"
                >
                  Contact
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    
    </>
  )
}

export default DataProtection