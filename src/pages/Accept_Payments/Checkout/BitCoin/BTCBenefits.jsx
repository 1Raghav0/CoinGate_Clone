import { Check } from "lucide-react";

const BTCBenefits = () => {
  const benefits = [
    "Receive BTC payments on your website instantly and globally",
    "Enjoy faster transactions than SWIFT & SEPA",
    "Enjoy cheaper payment processing than any traditional method",
    "Reach consumers with no access to modern banking",
    "Attract Bitcoin-savvy consumers",
    "Remove multiple middle-men from payment process",
    "Hold onto significantly less data of your customers",
    "Utilize real-time transaction monitoring",
    "Eliminate fraudulent chargebacks – reduce fraud",
    "Setup Bitcoin payroll & send mass payouts",
    "Ensure KYC and AML compliance",
    "Gain a competitive advantage",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <span className="text-xs md:text-lg uppercase tracking-widest text-gray-400 font-semibold mb-4 block">
            Bitcoin benefits
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-6">
            Accepting BTC payments is a no-brainer for any business:
          </h2>

          <ul className="space-y-3 mb-8">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600">
                  <Check size={14} />
                </span>
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
              Start now
              <span>›</span>
            </button>

            <button className="text-green-600 hover:underline text-sm font-medium">
              Pricing →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://cdn.coingate.com/uploads/2023/12/10063743/Piggy_save_eth_img_01.png"
            alt="Bitcoin benefits"
            className="max-w-sm md:max-w-md w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BTCBenefits;
