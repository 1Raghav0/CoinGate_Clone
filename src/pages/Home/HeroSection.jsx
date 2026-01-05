import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, X, ShieldCheck } from 'lucide-react';
import PartnersMarquee from './PartnersMarquee';
import '../../../src/index.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
        <div className="flex items-center gap-2">
          <span>FinPE obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={16} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1 transition-colors">
          <X size={16} />
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">
        {/* Decorative Background Element (The Purple 3D Curve) */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-40">
           <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-[#33cf4d] blur-[150px] rounded-full opacity-20"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl lg:text-[52px] xxl:text-6xl font-bold leading-tight">
              Your secure, compliant <br /> 
              <span className="text-white">crypto payment gateway</span>
            </h1>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg text-gray-300">
                <CheckCircle2 className="text-gray-500 mt-1 shrink-0" size={20} />
                <span>Accept crypto worldwide with transparent fees as low as 1%</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-300">
                <CheckCircle2 className="text-gray-500 mt-1 shrink-0" size={20} />
                <span>Send crypto effortlessly: single or bulk payouts to anyone, anywhere</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-300">
                <CheckCircle2 className="text-gray-500 mt-1 shrink-0" size={20} />
                <span>Deposit, hold, convert, and withdraw funds with top-level security</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <button onClick={() => navigate('/register')} className="bg-[#33cf4d] hover:bg-[#42c936] px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-indigo-500/20">
                Accept crypto now
              </button>
              <button onClick={() => navigate('/pricing')} className="flex items-center gap-1 font-semibold text-[#33cf4d] hover:text-indigo-300 transition-colors">
                Pricing <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ShieldCheck size={18} className="text-gray-500" />
              <span>MiCA licensed</span>
            </div>
          </div>

          {/* Right Visuals (Dashboard and Mobile Mockup) */}
          <div className="relative">
            {/* Desktop Dashboard Card */}
            <div className="bg-[#f8faff] rounded-2xl shadow-2xl p-2 md:p-4 transform lg:scale-110 lg:translate-x-12">
               {/* Browser Header Mockup */}
               <div className="flex items-center gap-2 px-2 py-3 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-gray-100 rounded-md px-4 py-1 text-[10px] text-gray-400">
                    dashboard.FinPE.com
                  </div>
               </div>
               {/* Dashboard Content Placeholder */}
               <img 
                src="/hero.png" // Replace with your image asset
                alt="Dashboard UI" 
                className="w-full rounded-b-xl"
              />
            </div>

            {/* Mobile Phone Mockup */}
            {/* <div className="absolute -left-10 bottom-[-20px] md:bottom-[-40px] w-48 md:w-64 bg-white rounded-[32px] border-[6px] border-[#1e293b] shadow-2xl overflow-hidden hidden sm:block">
                <img 
                  src="/hero.png" // Replace with your image asset
                  alt="Mobile UI" 
                  className="w-full"
                />
            </div> */}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-24 text-center border-t border-gray-800/50 pt-10">
          <p className="text-gray-400 font-medium tracking-wide">
            Join 500+ companies who trust FinPE
          </p>
          <PartnersMarquee />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;