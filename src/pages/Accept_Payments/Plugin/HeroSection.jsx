import { Link } from "react-router-dom";
import { ChevronRight,
     X,
     Zap,
  CreditCard,
  Network,
  TrendingDown, Headphones, LayoutGrid, Banknote,
  MousePointerClick,
  Key,
  Mail,
 } from "lucide-react";
import ClientTestimonials from "../../../components/ClientTestimonials";

const HeroSection = () => {
    const plugins = [
  {
    name: "Wix",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064126/Wixx-1.png",
  },
  {
    name: "WooCommerce",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064126/Woo-1.png",
  },
  {
    name: "Magento",
    logo: "	https://cdn.coingate.com/uploads/2023/09/10064126/Magento2-1.png",
  },
  {
    name: "WHMCS",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064126/WHMCS-2.png",
  },
  {
    name: "OpenCart",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064126/opencart-1.png",
  },
  {
    name: "Shoprenter",
    logo: "https://cdn.coingate.com/uploads/2023/09/10064127/eshoprent-1.png",
  },
  {
    name: "PrestaShop",
    logo: "	https://cdn.coingate.com/uploads/2024/03/10063727/PrestaShop-Image.png",
  },
];

const features = [
  {
    icon: Zap,
    title: "BTC Lightning Network support",
    desc: "Whether you're using WooCommerce, WIX, WHMCS or any other ecommerce platform, CoinGate plugin will have Bitcoin Lightning Network enabled for you by default, allowing your customers to pay you Bitcoin and other cryptocurrencies instantly with zero fees.",
    link: "Learn more",
  },
  {
    icon: CreditCard,
    title: "Binance Pay option included",
    desc: "When e-commerce stores accept crypto payments using our solution, they automatically get an additional crypto payment option enabled for them – Binance Pay wallet, allowing millions of its users to buy your products and services with a few taps on the screen.",
    link: "Learn more",
  },
  {
    icon: Network,
    title: "Multiple networks & Layer 2s",
    desc: "Our payment solution allows you to accept cryptocurrency payments on multiple networks like Ethereum, Binance Smart Chain (BSC), or Tron. We also provide the ability to pay using Layer-2 solutions like Polygon and Arbitrum so your customers can save money on Ethereum gas fees.",
    link: "Learn more",
  },
  {
    icon: TrendingDown,
    title: "Low transaction fees",
    desc: "Fees are often unfair, but not here! Enjoy a fee of 1% or less for each processed cryptocurrency transaction – one of the lowest fees for cryptocurrency payment processing on the market.",
    link: "Learn more",
  },
];

const integrations = [
  {
    icon: <Key className="w-7 h-7  text-green-500" />,
    title: "Crypto Payment API",
    description:
      "Connect your website with our well-documented payment API for maximum customization.",
  },
  {
    icon: <MousePointerClick className="w-7 h-7  text-green-500" />,
    title: "Crypto Payment Buttons",
    description:
      "A simple yet versatile crypto payment method with no coding knowledge required to use it effectively.",
  },
  {
    icon: <Mail className="w-7 h-7 text-green-500" />,
    title: "Email & Direct Link Billing",
    description:
      "Send one-time crypto bills to customers or business partners via your email list or a direct link.",
  },
  {
    icon: <CreditCard className="w-7 h-7  text-green-500" />,
    title: "Bitcoin & Crypto PoS",
    description:
      "Start accepting crypto payments, including Bitcoin payments, in your physical location using any device with an internet connection and a browser.",
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
        <div className="grid lg:grid-cols-2 gap-2 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="text-sm text-gray-400 mb-6 md:mb-10 lg:mb-24">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">›</span> <span className="text-white">Plugins</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight">
              Become Part Of Crypto <br />
              Ecommerce World
            </h1>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              Cryptocurrency in e-commerce is here to stay. We offer our crypto payment plugins and extensions for many popular e-commerce platforms, making it easy to accept Bitcoin and cryptocurrencies for payments with extreme efficiency. 
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition cursor-pointer">
              Register for an Account <ChevronRight size={18} />
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Purple ring */}
            <div className="absolute  border-[#5b45e0] opacity-90"></div>

            {/* Person Image */}
            <img
              src="https://cdn.coingate.com/uploads/2024/02/10063735/Plugins_Commerce_World_img.png"   // replace with your asset
              alt="User with phone"
              className="relative z-10 h-[500px] w-auto object-contain mt-20"
            />
          </div>
        </div>
      </main>
    </div>

    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] mb-14">
          Explore All Crypto Plugin Options for <br className="hidden sm:block" />
          Online Stores:
        </h2>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 max-w-4xl mx-auto">
          {plugins.map((plugin, index) => (
            <div
              key={index}
              className="flex items-center justify-center hover:bg-white px-4 py-1 rounded-2xl cursor-pointer"
            >
              <img
                src={plugin.logo}
                alt={plugin.name}
                className="h-10 md:h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl px-8 py-16 md:px-16 shadow-sm">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-lg tracking-widest uppercase text-gray-500 mb-4 font-semibold">
            We are CoinGate
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight max-w-4xl mx-auto">
            The Most Sophisticated <br className="hidden sm:block" />
            Ecommerce Crypto Payment Plugin
          </h2>

          <button className="mt-8 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            Start now
          </button>
        </div>

        {/* FEATURES */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="space-y-4">
                <Icon className="w-6 h-6 text-green-500" />

                <h3 className="font-semibold text-[#0b1121] text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="text-sm font-medium text-green-500 hover:underline inline-block"
                >
                  {item.link}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>

    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-4xl p-10 md:p-16 shadow-sm">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight">
              Using the Bitcoin <br />
              Ecommerce Plugins & <br />
              Extensions with Less <br />
              Effort and More <br />
              Confidence
            </h2>

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              By signing up with our payment gateway, your e-commerce business
              will get access to CoinGate’s crypto payment solution with all
              the extra features merchants have been asking for over a decade,
              tailored to make your experience stellar.
            </p>

            <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Begin Your Crypto Journey →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <img
              src="https://cdn.coingate.com/uploads/2024/02/10063735/Plugins_Choose_img.png"
              alt="Ecommerce plugins preview"
              className="rounded-xl shadow-lg w-full max-w-xl"
            />
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid gap-10 md:grid-cols-3 w-full max-w-3xl mx-auto">

          {/* FEATURE 1 */}
          <div className="text-center md:text-left space-y-4">
            <Headphones className="w-6 h-6 text-green-500 mx-auto md:mx-0" />
            <h3 className="font-semibold text-[#0b1121]">
              Exceptional Support
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our support team and dedicated account managers are at your service
              if you need any help.
            </p>
          </div>

          {/* FEATURE 2 */}
          <div className="text-center md:text-left space-y-4">
            <LayoutGrid className="w-6 h-6 text-green-500 mx-auto md:mx-0" />
            <h3 className="font-semibold text-[#0b1121]">
              Streamlined Operations
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Make use of tools for efficient accounting, order tracking, payout
              settings, email billing, currency conversion, refunding solutions,
              and more — all in a single dashboard.
            </p>
          </div>

          {/* FEATURE 3 */}
          <div className="text-center md:text-left space-y-4">
            <Banknote className="w-6 h-6 text-green-500 mx-auto md:mx-0" />
            <h3 className="font-semibold text-[#0b1121]">
              Flexible Withdrawal Options
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The optional convenience of withdrawing funds to a bank account
              in fiat currencies (EUR / USD / GBP).
            </p>
          </div>

        </div>

      </div>
    </section>

    <ClientTestimonials />

    <section className="px-6 py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0b1121] rounded-4xl px-8 py-16 md:px-16">

          {/* HEADER */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-xs md:text-lg font-bold tracking-widest text-gray-500 uppercase mb-4">
              We are CoinGate
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Explore More Ways to <br />
              Integrate Crypto Payments <br />
              in Ecommerce Business
            </h2>
          </div>

          {/* FEATURES */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item, index) => (
              <div key={index} className=" px-4">
                <div className="flex mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-sm text-green-500 hover:underline"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>


    </>
    
  );
};

export default HeroSection;
