import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const merchants = [
  {
    name: "NordVPN",
    logo: "https://cdn.coingate.com/uploads/2023/09/10061249/nordVPN-1-1-e1750683270251.png",
    description:
      "NordVPN is a cybersecurity company providing VPN services...",
  },
  {
    name: "Hostinger",
    logo: "https://cdn.coingate.com/uploads/2024/10/10063325/Hostinger_small.png",
    description:
      "Hostinger is a web hosting provider offering shared, VPS...",
  },
  {
    name: "IPRoyal",
    logo: "https://cdn.coingate.com/uploads/2024/10/10063322/iproyal_small.png",
    description:
      "IPRoyal provides residential, mobile, and datacenter proxies...",
  },
  {
    name: "MoreMins",
    logo: "https://cdn.coingate.com/uploads/2022/11/10063635/raksppuztbacsf2ly8g4-1-2-e1725456319658.png",
    description:
      "MoreMins provides affordable international calling services...",
  },
  {
    name: "Alternative Airlines",
    logo: "https://cdn.coingate.com/uploads/2024/10/10063334/Alternative-airlines_small.png",
    description:
      "Alternative Airlines is an online travel agency that lets you book...",
  },
];

const FeaturedMerchants = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: direction === "right"
        ? scrollLeft + clientWidth
        : scrollLeft - clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-xs md:text-lg font-semibold tracking-widest text-gray-400 text-center mb-8">
          FEATURED MERCHANTS
        </p>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
        >
          {merchants.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 object-contain mb-16 mt-5"
              />
              <h3 className="font-semibold text-[#0b1121] mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="">
            {/* Progress bar */}
        <div className="relative h-1 bg-gray-200 mt-6 rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-[#5b4fe9]" />
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMerchants;
