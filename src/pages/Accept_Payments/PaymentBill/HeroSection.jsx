import React from 'react';
import { CheckCircle2, ChevronRight, X, ShieldCheck } from 'lucide-react';



const HeroSection = () => {

    const steps = [
  {
    title: "Add your billing recipient",
    desc: "Add a new contact email or choose from your previous recipients.",
  },
  {
    title: "Create your crypto invoice",
    desc: "List your products, then save and reuse the details for other times.",
  },
  {
    title: "Send via email or link",
    desc: "After creating your bill, simply send it by sharing a link or via email.",
  },
  {
    title: "Track the transaction",
    desc: "Track the billing status, set notifications, download reports, and more.",
  },
];
  return (
    <>
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden relative mt-20">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#14b8a6] via-[#3b82f6] to-[#6366f1] py-2 px-4 flex justify-center items-center relative text-sm font-medium">
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

      <main className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 pt-12 lg:pt-20 pb-20 relative z-10">
        
        {/* Background Glows to match the image exactly */}
        <div className="absolute top-0 right-0  bg-green-500 blur-[180px] rounded-full opacity-20 -z-10 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-1 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-10">
            <div className="text-sm text-gray-400 mb-6 md:mb-10 lg:mb-24">
              Home<span className="mx-2">›</span> <span className="text-white">Accept crypto via bill</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight">
              Send crypto invoice anywhere, anytime, instantly
            </h1> 

            <p>Request payments in multiple cryptocurrencies from your customers or B2B partners worldwide with the instant email billing solution.</p>

            <ul className="space-y-5">
              {[
                "Lower than credit fees - >1% per transaction",
                "Request payemnts in 176 countries and more to come",
                "Instantly crypto-to-flat payouts (USD, EUR, GBP) to bank account"
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <div className="mt-1 bg-white/10 p-0.5 rounded-full">
                    <CheckCircle2 className="text-gray-400" size={18} />
                  </div>
                  <span className="text-lg leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                Use crypto invocining now
              </button>
              <button className="flex items-center gap-1 font-bold text-white hover:text-indigo-400 transition-colors text-lg">
                Try on Sandbox <ChevronRight size={22} className="text-green-500" />
              </button>
            </div>
          </div>

          {/* Right Visuals (Overlapping Dashboard & Mobile) */}
          <div className="relative mt-12 lg:mt-0">
            {/* Desktop Dashboard Card */}
            <div className="rounded-2xl shadow-2xl p-0 overflow-hidden transform lg:scale-105 lg:translate-x-8">
               
               {/* Dashboard Content Mockup Image */}
               <img 
                src="/hero-1.png" 
                alt="Dashboard UI" 
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>

    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] px-6 py-14 md:px-12 lg:px-20 text-center shadow-sm">

        {/* Top label */}
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
          Crypto Invoice Generator
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-4">
          How to send a crypto invoice
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Follow these simple steps to create and send a crypto invoice quickly and easily.
        </p>

        {/* CTA */}
        <div className="mb-12">
          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
            See crypto invoicing guide
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start gap-4">
              <CheckCircle2 className="text-[#5b45e0]" size={28} />
              <h3 className="font-semibold text-[#0b1121] text-base">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>


    </>
  );
};

export default HeroSection;