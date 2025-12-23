import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Coinzilla’s Solution to Automating Crypto Payments at Scale",
    date: "June 16, 2025",
    image:
      "	https://cdn.coingate.com/uploads/2025/06/10061322/coinzilla_case_study_img_4563.png",
  },
  {
    title: "How NordVPN Reaches Crypto-Paying Customers in 176 Countries",
    date: "November 28, 2024",
    image:
      "https://cdn.coingate.com/uploads/2024/11/10063239/NordVPN_case_study_img_2352.png",
  },
  {
    title: "A Third of ProxyScrape’s Customers Pay with Crypto",
    date: "May 19, 2025",
    image:
      "https://cdn.coingate.com/uploads/2025/06/10061254/adopting_crypto_payments_how_img_4305.png",
  },
  {
    title: "Adopting Crypto Payments: How Businesses Go Global, Faster and Smarter",
    date: "June 19, 2025",
    image:
      "	https://cdn.coingate.com/uploads/2025/06/10061254/adopting_crypto_payments_how_img_4305.png",
  },
  {
    title: "CBDCs vs Stablecoins — Which Will Prevail? Introduction (Pt. 1)",
    date: "May 28, 2025",
    image:
      "https://cdn.coingate.com/uploads/2025/05/10061355/cbdc_vs_stablecoins_img_7623.png",
  },
];

const DiscoverMoreSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
    <style>
      {`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
    <section className="bg-gray-50 py-15 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121]">
            Discover more about crypto
          </h2>
          <p className="text-gray-500 mt-3">
            We share our client’s success stories and industry insights all the time.
          </p>
        </div>

        {/* Cards */}
        <div className="relative max-w-6xl mx-auto ">
          {/* Scroll buttons */}
          <div className="absolute -bottom-12 right-0 flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scroll-container"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[270px] max-w-[270px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="h-40 rounded-t-2xl overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-[#0b1121] leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-400">{card.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress line */}
          {/* <div className="mt-6 h-[2px] bg-gray-200 relative overflow-hidden rounded-full">
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[#5b4fe9]" />
          </div> */}
        </div>
      </div>
    </section>
    </>
  );
};

export default DiscoverMoreSection;
