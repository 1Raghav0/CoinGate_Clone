import { ChevronRight, ShieldCheck, Lock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BitcoinCheckout = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Take complete control of your Bitcoin funds",
      description:
        "Receive Bitcoin payments to your CoinGate account and withdraw directly to your wallet on-demand, or convert to fiat.",
      image:
        "https://cdn.coingate.com/uploads/2023/12/10063744/Dashboard_payouts_img_01.png",
      side: "right",
    },
    {
      title: "Authorized account management",
      description:
        "Control who can access your accounts, keeping your data safe and workflows streamlined.",
      image:
        "https://cdn.coingate.com/uploads/2023/12/10063744/Administrators_permissions_img_01.png",
      side: "left",
    },
    {
      title: "Simplify Bitcoin transaction tracking",
      description:
        "Track the status of your transactions, receive notifications about incoming payments, export and analyze data, and more.",
      image:
        "https://cdn.coingate.com/uploads/2024/01/10063740/Order_tracking_accept_img.png",
      side: "right",
    },
    {
      title: "Utilize our in-house BTC conversion",
      description:
        "Convert funds in your account balance into other cryptocurrencies or fiat currencies.",
      image:
        "https://cdn.coingate.com/uploads/2023/12/10063744/In_house_currency_conversion_img_01.png",
      side: "left",
    },
    {
      title: "Refund your clients instantly",
      description:
        "Issue full and partial Bitcoin refunds to your customers directly from your account dashboard or API.",
      image:
        "https://cdn.coingate.com/uploads/2023/12/10063743/Refund_man_phone_img_01.png",
      side: "right",
    },
  ];

  const complianceFeatures = [
    {
      icon: <ShieldCheck className="text-gray-400" size={28} />,
      title: "Stay ahead with MiCA-aligned compliance",
      description:
        "As a licensed MiCA service provider, we ensure your crypto operations meet the latest EU regulatory standards.",
    },
    {
      icon: <Lock className="text-gray-400" size={28} />,
      title: "Top-level security for your digital assets",
      description:
        "Deposit, hold, convert, and execute B2B / B2C payments securely in a familiar environment.",
    },
    {
      icon: <FileText className="text-gray-400" size={28} />,
      title: "Effortless accounting & reporting",
      description:
        "Customer screening, extensive reporting tools, and seamless export options included.",
    },
  ];

  return (
    <>
      {/* ===== MAIN FEATURE TIMELINE ===== */}
      <section className="bg-gray-50 pt-8 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl px-6 md:px-12 lg:px-20 py-20">
          <h2 className="text-center text-3xl md:text-4xl lg:text-[52px] font-semibold text-[#0b1121] mb-10 max-w-2xl mx-auto">
            Accept BTC with all-in-one Bitcoin checkout solution today
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 mb-10">
            Our solution is entirely compatible with your existing payment workflows – no extra costs <br />  or developments needed. Set up for Bitcoin payments in as little as one hour.
          </p>
          <div className="flex justify-center mb-10 ">
            <button onClick={() => navigate('/register')} className="text-white bg-green-500 hover:bg-green-600 px-7 py-2 rounded-xl font-semibold transition">
                  Open an account
                </button>
          </div>

          

          <div className="relative">
            {/* Center vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-28">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-24 ${
                    item.side === "right" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-200 rounded-full z-10" />

                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="">
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


    </>
  );
};

export default BitcoinCheckout;
