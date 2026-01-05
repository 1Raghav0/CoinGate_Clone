import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    tag: "CRYPTO PAYMENTS, EDUCATIONAL",
    title:
      "How to Accept Crypto as a Business? Learn To Get Paid in Bitcoin & other coins",
    image:
      "https://cdn.coingate.com/uploads/2022/04/10061749/How_to_accept_btc_img_63852.png",
    updated: "May 11, 2025",
    published: "April 14, 2022",
  },
  {
    id: 2,
    tag: "CRYPTO PAYMENTS, EDUCATIONAL",
    title:
      "Comparing Bitcoin vs Credit Card Payment Processor: What Method is Better for...",
    image:
      "https://wp-blog-assets.coingate.com/2019/06/main-2.png",
    updated: "June 1, 2025",
    published: "June 5, 2019",
  },
  {
    id: 3,
    tag: "TRADING, WALLETS",
    title: "Best Crypto Wallets for BTC, LTC, ETH & BCH",
    image:
      "https://cdn.coingate.com/uploads/2024/12/10063235/hardware_wallet_blog_img_586.png",
    updated: "May 11, 2025",
    published: "July 11, 2018",
  },
  {
    id: 4,
    tag: "CRYPTO PAYMENTS",
    title: "Bitcoin Lightning Network Explained",
    image:
      "https://cdn.coingate.com/uploads/2022/04/10061749/How_to_accept_btc_img_63852.png",
    updated: "April 20, 2025",
    published: "March 1, 2020",
  },
  {
    id: 5,
    tag: "EDUCATIONAL",
    title: "Crypto Payments vs Traditional Banking",
    image:
      "https://wp-blog-assets.coingate.com/2019/06/main-2.png",
    updated: "March 15, 2025",
    published: "August 10, 2019",
  },
];

const BlogCarousel = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (index + visibleCards < blogs.length) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-[52px] max-w-2xl mx-auto font-semibold text-gray-900">
            Still unsure why accept BTC payments?
          </h2>
          <button className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-indigo-700 text-xl ">
            Learn more
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Buttons */}
          <div className="absolute -top-12 right-0 flex gap-2">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={index + visibleCards >= blogs.length}
              className="w-9 h-9 rounded-full border flex items-center justify-center disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="min-w-[33.333%] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <p className="text-xs uppercase text-indigo-600 font-medium mb-2">
                      {blog.tag}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-gray-500">
                      Last Updated: {blog.updated}
                    </p>
                    <p className="text-xs text-gray-400">
                      First Published: {blog.published}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
