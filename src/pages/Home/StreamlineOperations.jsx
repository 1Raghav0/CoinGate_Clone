import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const StreamlineOperations = () => {
  const [activeTab, setActiveTab] = useState('withdrawals');

  const operations = [
    {
      id: 'withdrawals',
      title: 'Automatic withdrawals',
      description: 'Set up periodic auto withdrawals from your CoinGate account to a bank account.',
      image: 'https://images.unsplash.com/photo-1611974717482-482a01905847?auto=format&fit=crop&q=80&w=800', // Example UI placeholder
      overlayLabel: 'Automatic withdrawals',
      overlayValue: 'Monthly'
    },
    {
      id: 'refunds',
      title: 'Refunds',
      description: 'Manage and issue full or partial refunds to your customers directly from your dashboard in just a few clicks.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      overlayLabel: 'Process Refund',
      overlayValue: 'Success'
    },
    {
      id: 'permissions',
      title: 'Account permissions',
      description: 'Grant different access levels to your team members to manage payments, billing, or technical integrations securely.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea7025c?auto=format&fit=crop&q=80&w=800',
      overlayLabel: 'User Role',
      overlayValue: 'Manager'
    },
    {
      id: 'settlements',
      title: 'Real-time settlements',
      description: 'Track your incoming payments and settlements in real-time with our transparent ledger system.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
      overlayLabel: 'Settlement',
      overlayValue: 'Real-time'
    }
  ];

  const activeData = operations.find(op => op.id === activeTab);

  return (
    <section className="bg-[#f8faff] px-6 font-sans">
      <div className="max-w-7xl mx-auto bg-white  rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
        
        {/* Left Side: Accordion */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b1121] mb-12">
            Streamline your crypto <br /> operations
          </h2>
          
          <div className="space-y-4">
            {operations.map((op) => (
              <div key={op.id} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setActiveTab(op.id)}
                  className="w-full flex items-center justify-between py-6 text-left transition-all"
                >
                  <span className={`text-lg font-bold ${activeTab === op.id ? 'text-[#0b1121]' : 'text-gray-500'}`}>
                    {op.title}
                  </span>
                  {activeTab === op.id ? (
                    <ChevronUp className="text-[#33cf4d]" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeTab === op.id ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {op.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Dynamic Image Display */}
        <div className="lg:w-1/2 w-full relative flex justify-center">
          {/* Main Container for Image/UI Mockup */}
          <div className="relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <img 
              key={activeData.image} // Key forces re-render for transition effect
              src={activeData.image} 
              alt={activeData.title}
              className="w-full h-full object-cover opacity-20 animate-in fade-in duration-500"
            />
            
            {/* Floating UI Card Mockup */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white rounded-xl shadow-2xl p-6 w-full border border-gray-50 transform -rotate-2">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Settings</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#0b1121]">{activeData.overlayLabel}</span>
                    <div className="w-10 h-5 bg-[#33cf4d] rounded-full relative">
                       <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4">
                    <span className="text-xs text-gray-400 block mb-1">Period</span>
                    <div className="w-full p-3 bg-gray-50 border border-gray-100 rounded-lg font-medium text-gray-700">
                      {activeData.overlayValue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Currency Badge Accessory */}
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#33cf4d] rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-white text-3xl font-bold">€</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StreamlineOperations;