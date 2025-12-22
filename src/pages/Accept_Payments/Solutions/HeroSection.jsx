import { Link } from "react-router-dom";
import { ChevronRight,
     X,
     Shield,
  Server,
  MapPin,
  Gamepad2,
  Globe,
  Monitor,
  ShoppingCart,
  Store,
  Heart,
  Wallet,
  Cloud,

 } from "lucide-react";

const HeroSection = () => {

    const industries = [
  {
    title: "VPNs",
    desc: "Secure and anonymous payments to protect privacy.",
    icon: Shield,
  },
  {
    title: "Hosting Services",
    desc: "Fast, reliable transaction solutions for uptime-critical environments.",
    icon: Server,
  },
  {
    title: "Travel Websites",
    desc: "Borderless payments for global bookings and accommodations.",
    icon: MapPin,
  },
  {
    title: "Gaming Platforms",
    desc: "Enhance in-game purchases with cryptocurrency.",
    icon: Gamepad2,
  },
  {
    title: "Proxies",
    desc: "Private and secure payment methods for users worldwide.",
    icon: Globe,
  },
  {
    title: "Remote Desktop Services (RDP)",
    desc: "Streamlined payments for remote access solutions.",
    icon: Monitor,
  },
  {
    title: "E-commerce / Marketplaces",
    desc: "Simple, secure transactions to boost your online sales.",
    icon: ShoppingCart,
  },
  {
    title: "Small Businesses",
    desc: "Easy integration and low fees to help your business thrive.",
    icon: Store,
  },
  {
    title: "Online Stores",
    desc: "Expand your customer base by accepting global crypto payments.",
    icon: Globe,
  },
  {
    title: "Non-Profit Organizations",
    desc: "Maximize donations with efficient, low-cost payment solutions.",
    icon: Heart,
  },
  {
    title: "Payment Service Providers (PSPs)",
    desc: "Broaden your offerings with diverse crypto payment options.",
    icon: Wallet,
  },
  {
    title: "Software as a Service (SaaS)",
    desc: "Modern payment solutions for subscription-based services.",
    icon: Cloud,
  },
];
  return (
    <>
    <div className="bg-[#0b1121] text-white font-sans overflow-hidden mt-20">

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium">
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

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="text-sm text-gray-400 mb-6 md:mb-10 lg:mb-24">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">›</span> <span className="text-white">Solutions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              Cryptocurrency Payment <br />
              Solutions For All
            </h1>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              CoinGate’s seamless crypto payment solution ensures you are equipped
              with modern payment tools and stay ahead of your competition.
              Get ready to expand your market with borderless, inclusive payments.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
              Start now <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Purple ring */}
            <div className="absolute  border-[#5b45e0] opacity-90"></div>

            {/* Person Image */}
            <img
              src="https://cdn.coingate.com/uploads/2024/06/10063708/Solutions-02-1.png"   // replace with your asset
              alt="User with phone"
              className="relative z-10 h-[400px] w-auto object-contain mt-20"
            />
          </div>
        </div>
      </main>
    </div>

    <section className="bg-[#f8faff] py-20 px-6">
      <div className="max-w-7xl px-4 md:px-10 lg:px-20 mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
            Tailored Crypto Payment <br /> Gateway For Your Industry
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base">
            Choose your sector and learn how our crypto payment solutions can
            specifically help your business grow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-30 h-30 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={48} />
                </div>

                <h3 className="font-semibold text-[#0b1121] mb-2 text-lg  md-text-xl">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="text-sm font-medium text-green-500  hover:underline"
                >
                  Visit page
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>

     <section className="bg-[#f8faff] px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b1121] rounded-4xl px-8 md:px-16 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Explore <br />
              Opportunities with <br />
              Crypto Payments?
            </h2>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all flex items-center gap-1">
                Register an Account
                <ChevronRight size={18} />
              </button>

              <a
                href="#"
                className="text-sm font-semibold text-green-500 hover:text-white transition-colors flex items-center gap-1"
              >
                Contact Us <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Purple base */}
            <div className="absolute bottom-0 w-72 h-20 bg-[#5b45e0] rounded-full blur-sm"></div>

            {/* Main Image */}
            <img
              src="https://cdn.coingate.com/uploads/2024/06/10063706/Solutions-01-1.png" // replace with your actual image
              alt="Crypto payments illustration"
              className="relative z-10 "
            />
          </div>

        </div>
      </div>
    </section>
    </>
    
  );
};

export default HeroSection;
