import React from 'react';
import { ChevronRight, ShieldCheck, Lock, FileText } from 'lucide-react';

const CryptoGatewaySteps = () => {
  const features = [
    {
      title: "Get paid in crypto, settle in fiat instantly",
      description: "Securely accept Bitcoin, USDC, and other leading cryptocurrencies globally and chargeback-free. With CoinGate, you can choose to instantly settle your funds into EUR, GBP, or USD, shielding your business from price fluctuations and simplifying your accounting.",
      image: "https://cdn.coingate.com/uploads/2025/06/10061255/Timeline1-2x-rounded.png", // Placeholder for BTC/EUR coins
      side: 'left'
    },
    {
      title: "Send crypto effortlessly & slash transfer costs",
      description: "Reach suppliers and customers in 180+ countries. We enable faster, cheaper global remittances than traditional SWIFT transfers - with no complex onboarding, setup, or maintenance fees.",
      image: "https://cdn.coingate.com/uploads/2025/06/10061255/Timeline2-2x-rounded.png", // Placeholder for Send UI
      side: 'right'
    },
    {
      title: "Deposit, convert & manage assets with ease",
      description: "We provide a secure hub to manage your company's digital assets. Easily deposit crypto and EUR, convert between currencies, and make payments or withdrawals directly to wallets or bank accounts.",
      image: "https://cdn.coingate.com/uploads/2025/06/10061255/Timeline3-2x-rounded.png", // Placeholder for Deposit/Withdraw UI
      side: 'left'
    }
  ];

  const complianceFeatures = [
    {
      icon: <ShieldCheck className="text-gray-400" size={28} />,
      title: "Stay ahead with MiCA-aligned compliance",
      description: "As a licensed MiCA service provider, we ensure your crypto operations meet the latest EU regulatory standards – so you can focus on growing your business."
    },
    {
      icon: <Lock className="text-gray-400" size={28} />,
      title: "Top-level security for your digital assets",
      description: "Your account also acts as a treasury management tool, which is why you can deposit, hold, convert, and execute B2B / B2C payments in an already-familiar fashion."
    },
    {
      icon: <FileText className="text-gray-400" size={28} />,
      title: "Effortless accounting & reporting",
      description: "We handle customer screening and provide extensive reporting tools with seamless export options. Get back your valuable time and keep your books audit-ready."
    }
  ];

  return (
    <>
    <section className="bg-blue-50 pt-24 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl px-4 md:px-8 lg:px-20 py-16 rounded-2xl  bg-white mx-auto"> 
        <h2 className="text-2xl md:text-4xl lg:text-[48px]  font-semibold text-[#0b1121] text-center mb-24 leading-tight">
          The all-in-one crypto <br /> gateway built for growth
        </h2>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block -translate-x-1/2" />

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
                  <button className="bg-green-50 hover:bg-[#48f965] text-[#22cf4d] font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-all">
                    Explore <ChevronRight size={18} />
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
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto bg-[#0b1121] rounded-[2.5rem] overflow-hidden p-10 md:p-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          
          {/* Left Side: Header Text */}
          <div className="lg:w-1/2">
            <span className="text-gray-400 uppercase text-xs font-bold tracking-widest block mb-6">
              TAKING CARE OF REGULATORY OVERSIGHT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              MiCA-licensed infrastructure for seamless compliance
            </h2>
          </div>

          {/* Right Side: Compliance Image */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800" 
                alt="Man working on laptop with compliance UI"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Floating Element */}
            <div className="absolute -top-6 -left-6 bg-[#5b45e0]/20 p-4 rounded-2xl backdrop-blur-md border border-white/10 hidden md:block">
               <div className="w-12 h-12 bg-[#5b45e0] rounded-xl flex items-center justify-center shadow-lg">
                  <ShieldCheck className="text-white" size={24} />
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-800 pt-16">
          {complianceFeatures.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
    
  );
};

export default CryptoGatewaySteps;