import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('VPNs');

  const tabs = ['VPNs', 'Gaming', 'Communications', 'Proxy', 'Art'];

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    setActiveTab(tabs[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(tabs[nextIndex]);
  };

  const content = {
    'VPNs': {
      title: 'NordVPN:',
      stats: [
        { label: '176 countries', desc: 'NordVPN received crypto payments from every corner of the world' },
        { label: '13% growth', desc: 'Reports an average annual growth of 13% in crypto transactions' },
        { label: 'Improved accessibility', desc: 'Crypto payments made services more accessible to users worldwide' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', // Woman with phone
      overlayText: 'See how NordVPN has taken advantage of crypto payments for years.',
      logo: 'NordVPN'
    },
    'Gaming': {
      title: 'Eldorado.gg:',
      stats: [
        { label: '3% of all sales', desc: 'Eldorado says crypto payments contribute to 3% of their overall sales' },
        { label: 'Fast integration', desc: 'Integrated crypto payment system within a week with no issues' },
        { label: 'Mitigating volatility', desc: 'CoinGate solution helped the company mitigate FX risks' }
      ],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', // Gamer
      overlayText: 'Check out how Eldorado.gg implemented crypto payments into their platform',
      logo: 'Eldorado'
    },
    'Communications': {
      title: 'MoreMins:',
      stats: [
        { label: '10% of all payments - in crypto', desc: 'One out ten orders at MoreMins is paid with crypto' },
        { label: 'Payments double each year', desc: 'Every year, the payment volume at MoreMins doubles' },
        { label: 'Extra marketing push', desc: 'CoinGate refers thousands of paying customers per year to MoreMins website' }
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800', // Woman working
      overlayText: 'See how MoreMins boosted their transaction count with crypto',
      logo: 'more mins'
    },
    'Proxy': {
      title: 'ProxyScrape:',
      stats: [
        { label: '33% of all payments - in crypto', desc: 'One in three customers at ProxyScrape pay with crypto' },
        { label: 'Crypto-to-fiat conversion', desc: 'ProxyScrape instantly converts crypto to fiat to simplify financial operations' },
        { label: 'Stablecoins dominate', desc: 'More than a third of orders paid with crypto are paid using stablecoins' }
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800', // Tech/Server background
      overlayText: 'Read about ProxyScrape\'s extensive use of crypto for payments',
      logo: 'ProxyScrape'
    },
    'Art': {
      title: 'Ghost Galerie:',
      stats: [
        { label: 'Uses the invoicing solution', desc: 'Ghost Galerie sends invoices to reach clients in all parts of the world' },
        { label: 'Spike in sales', desc: 'Experienced a notable rise in international art sales' },
        { label: 'Serving niche customers', desc: 'Young, tech-savvy clients prefer and praise crypto payment options' }
      ],
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800', // Artist/Gallery
      overlayText: 'Explore how Ghost Galerie attracted crypto-centric investors',
      logo: 'GHOST GALERIE'
    }
  };

  const activeData = content[activeTab];

  return (
    <section className="bg-[#f8faff] py-20 px-6 font-sans">
      <div className="max-w-7xl bg-white rounded-2xl px-8 py-20 mx-auto">
        <header className="text-center mb-12">
          <span className="text-gray-400 uppercase text-md md:text-lg font-bold tracking-widest block mb-4">SUCCESS STORIES</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b1121]">
            See how companies find success with <br /> our crypto payment processor:
          </h2>
        </header>

        {/* Dynamic Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border border-gray-300 rounded-xl py-2 w-gull max-w-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all border ${
                activeTab === tab 
                ? 'bg-green-50 text-[#33cf4d] border-green-100' 
                : 'text-gray-500 border-transparent hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="bg-[#f8faff] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-50">
          
          {/* Left Side: Stats */}
          <div className="lg:w-1/3 p-10 md:p-14 space-y-10">
            <h3 className="text-2xl font-bold text-[#0b1121]">{activeData.title}</h3>
            
            <div className="space-y-8">
              {activeData.stats.map((stat, i) => (
                <div key={i}>
                  <h4 className="text-xl font-bold text-[#0b1121] mb-1">{stat.label}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="lg:w-2/3 relative min-h-[400px]">
            <img 
              src={activeData.image} 
              alt={activeData.title}
              className="w-full h-full object-cover"
            />
            {/* Logo Overlay */}
            <div className="absolute top-8 left-8 flex items-center gap-2">
               <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
               <span className="text-white font-bold tracking-tighter uppercase">{activeData.logo}</span>
            </div>
            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <h4 className="text-white text-xl md:text-2xl font-bold max-w-md leading-snug">
                {activeData.overlayText}
              </h4>
            </div>
          </div>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-between mt-8 px-4">
           <div className="flex gap-1 sm:gap-2">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`h-1 rounded-full transition-all duration-300 ${activeTab === tab ? 'w-8 sm:w-16 md:w-32 lg:w-40 xl:w-54 bg-[#33cf4d]' : 'w-6 sm:w-12 md:w-24 lg:w-36 xl:w-50 bg-gray-200'}`}
                />
              ))}
           </div>
           <div className="flex gap-3">
              <button
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-400 cursor-pointer"
                onClick={handlePrev}
              >
                <ChevronLeft size={20}/>
              </button>
              <button
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-200 hover:bg-gray-50 text-gray-400 cursor-pointer"
                onClick={handleNext}
              >
                <ChevronRight size={20}/>
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;