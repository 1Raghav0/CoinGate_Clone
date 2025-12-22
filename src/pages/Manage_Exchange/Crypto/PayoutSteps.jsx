import React from 'react';
import { ChevronRight, ShieldCheck, Lock, FileText, Code2, Zap } from 'lucide-react';

const PayoutSteps = () => {
  const features = [
    {
      no: 1,  
      title: "Deposit your funds:",
      description: "Top up your business account balance using BTC, USDC, EUR, or other currencies. It only takes minutes to get started.",
      image: "https://cdn.coingate.com/uploads/2024/12/10063314/Deposit_image.png", // Placeholder for BTC/EUR coins
      side: 'left'
    },
    {
      no: 2,
      title: "Add recipient information:",
      description: "Provide the necessary recipient information to ensure compliance and accurate processing.",
      image: "https://cdn.coingate.com/uploads/2024/12/10063313/second.png", // Placeholder for Send UI
      side: 'right'
    },
    {
      no: 3,
      title: "Send out payments",
      description: "Disburse payments directly from your account balance to external wallets.",
      image: "https://cdn.coingate.com/uploads/2024/12/10063313/third_image.png", // Placeholder for Deposit/Withdraw UI
      side: 'left'
    }
  ];



  return (
    <>
    <section className="bg-gray-50 pt-24 pb-12 font-sans overflow-hidden">
      <div className="max-w-7xl px-4 md:px-8 lg:px-20 py-16 rounded-2xl  bg-white mx-auto"> 
        <p className='text-xs text-center md:text-lg font-semibold text-gray-500 uppercase mb-4'>Simple and Intutive</p>
        <h2 className="text-2xl md:text-4xl lg:text-[48px]  font-semibold text-[#0b1121] text-center mb-10 leading-tight">
          Here's How Payouts Work
        </h2>

        <div className='flex items-center justify-center'>
            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold text-white transition mb-10">
              Learn More <ChevronRight size={18} />
            </button>
        </div>
        

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
                <div className="lg:w-1/2 space-y-8">
                <span className="text-2xl font-semibold text-gray-500">{item.no}</span>
                  <h3 className="text-2xl md:text-3xl mt-2 font-semibold text-[#0b1121]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {item.description}
                  </p>
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
     <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-xs md:text-lg uppercase tracking-widest text-gray-400 mb-3">
          Different methods, same feature
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] mb-14">
          Pick What’s Best for You:
        </h2>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-xl mx-auto">

          {/* API INTEGRATION */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <div className="w-30 h-30 mb-6 rounded-full bg-[#0b1121] flex items-center justify-center">
              <Code2 className="text-green-500" size={64} />
            </div>

            <h3 className="font-semibold text-[#0b1121] mb-3">
              API Integration
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Send crypto payouts via our highly customizable API.
            </p>

            <a
              href="#"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* NO-CODE PAYMENTS */}
          <div className="bg-white rounded-2xl p-8 shadow-sm text-left">
            <div className="w-30 h-30 mb-6 rounded-full bg-[#0b1121] flex items-center justify-center">
              <Zap className="text-green-500" size={64} />
            </div>

            <h3 className="font-semibold text-[#0b1121] mb-3">
              No-Code Payments
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Send payouts directly from your account dashboard with zero coding.
            </p>

            <a
              href="#"
              className="text-sm font-medium text-green-500 hover:underline"
            >
              Start Now
            </a>
          </div>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default PayoutSteps;