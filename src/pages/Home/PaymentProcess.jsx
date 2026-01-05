import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText, Bitcoin, RefreshCcw, Landmark,
  ChevronRight, ArrowUpRight
} from 'lucide-react';

const CombinedBusinessSection = () => {
  const navigate = useNavigate();

  // Data for Payment Process Steps
  const steps = [
    {
      icon: <FileText className="text-gray-300" size={32} />,
      step: "Step 1:",
      title: "Invoice Generation",
      description: "We present a detailed invoice to your customer."
    },
    {
      icon: <Bitcoin className="text-gray-300" size={32} />,
      step: "Step 2:",
      title: "Payment",
      description: "Your customer pays the invoice with any currency at a fixed exchange rate."
    },
    {
      icon: <RefreshCcw className="text-gray-300" size={32} />,
      step: "Step 3:",
      title: "Conversion",
      description: "Our system converts the incoming funds into your preferred currency."
    },
    {
      icon: <Landmark className="text-gray-300" size={32} />,
      step: "Step 4:",
      title: "Settlement",
      description: "We disburse the funds to your bank account or crypto wallet whenever you prefer."
    }
  ];

  // Data for First-hand Experiences (Testimonials)
  const testimonials = [
    {
      logo: "NordVPN",
      quote: '"CoinGate assured secure and reliable transactions and supported various cryptocurrencies, which allowed us to cater to customers who use various crypto assets"',
      author: "Kęstutis Saulis",
      role: "Head of Payments, NordVPN"
    },
    {
      logo: "cherry servers",
      quote: '"With the help of CoinGate we have increased our conversion rates and attracted more customers who value privacy and prefer crypto payments."',
      author: "Vaidas Rutkauskas",
      role: "CEO, Cherry servers"
    },
    {
      logo: "IPRoyal",
      quote: '"We\'re not surprised that a third of our clients choose to pay with cryptocurrencies, considering their primary goal – ensuring online privacy and anonymity."',
      author: "Karolis Toleikis",
      role: "CEO, IPRoyal"
    }
  ];

  return (
    <div className="bg-gray-50 pt-24 px-6 font-sans">
      
      {/* SECTION 1: HOW WE HANDLE PAYMENTS */}
      <section className="max-w-7xl mx-auto text-center mb-32">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0b1121] mb-6">
          Here's how we handle your crypto payments:
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-base">
          Our crypto payment processor simplifies each payment stage for both your business efficiency and your customer's positive experience.
        </p>
        <button className="bg-[#33cf4d] hover:bg-[#42c936] text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 mx-auto transition-all mb-16">
          Explore integration options <ChevronRight size={18} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 text-left flex flex-col min-h-[250px]">
              <div className="mb-6">{item.icon}</div>
              <div className="mt-auto">
                <span className="text-gray-400 text-sm font-medium">{item.step}</span>
                <h3 className="text-lg font-bold text-[#0b1121] mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: TESTIMONIALS */}
      <section className="max-w-7xl mx-auto text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0b1121] mb-8">
          Hear the first-hand experiences:
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button onClick={() => navigate('/register')} className="bg-[#33cf4d] hover:bg-[#42c936] text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all">
            Accept crypto now <ChevronRight size={18} />
          </button>
          <button className="text-[#33cf4d] font-bold py-3 px-8 flex items-center gap-2 hover:underline" onClick={() => navigate('/contact-sales')}>
            Contact sales <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 text-left flex flex-col">
              <div className="text-gray-400 font-bold text-xl mb-8 flex items-center gap-2">
                {/* Placeholder for Logos */}
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div> 
                <span className="uppercase tracking-wider text-sm">{t.logo}</span>
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-[#0b1121]">{t.author}</p>
                <p className="text-gray-500 text-sm mb-6">{t.role}</p>
                <a href="#" className="text-[#33cf4d] font-semibold text-sm flex items-center gap-1 hover:underline">
                  Case study
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8faff] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b1121] rounded-[2.5rem] py-20 px-10 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
            Ready to accept crypto <br className="hidden md:block" /> 
            payments and start growing <br className="hidden md:block" /> 
            your business?
          </h2>
          
          <button onClick={() => navigate('/register')} className="bg-[#33cf4d] hover:bg-[#42c936] text-white font-bold py-4 px-10 rounded-xl flex items-center gap-2 mx-auto transition-all text-lg group">
            Accept crypto now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CombinedBusinessSection;