import { Search, FileText, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import KnowledgeBaseSection from "./KnowledgeBaseSection";
import Footer from "./Footer";

const FAQHelpCenter = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className="w-full bg-green-500">

      {/* TOP BAR */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className=" font-bold text-lg">FinPE</span>
            <span className=" text-gray-400">| Support</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600 hover:underline" onClick={() => navigate('/')}>
              Back to website
            </button>
            <button className="border border-gray-400 rounded-xl px-4 py-1.5 text-sm font-semibold hover:bg-gray-100">
              Submit a request
            </button>
          </div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">
          How can we help?
        </h1>

        {/* SEARCH */}
        <div className="relative max-w-xl bg-white rounded-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-11 pr-4 py-3 rounded-lg outline-none text-sm"
          />
        </div>

        {/* POPULAR SEARCHES */}
        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white">
          <span className="opacity-80">Popular searches:</span>
          {["getting started", "payments", "payouts"].map((item) => (
            <span
              key={item}
              className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30 transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-semibold text-[#0b1121] mb-6">
            Quick links
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {/* BLOG */}
            <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <FileText className="text-green-500" size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1121] mb-1">
                Blog
              </h3>
              <p className="text-sm text-gray-500">
                Explore product updates, industry insights, and helpful tips.
              </p>
            </div>

            {/* API DOCS */}
            <div className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-sm transition">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                <Code className="text-green-500" size={20} />
              </div>
              <h3 className="font-semibold text-[#0b1121] mb-1">
                API documentation
              </h3>
              <p className="text-sm text-gray-500">
                Learn how to integrate and use our API with detailed guides and examples.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <KnowledgeBaseSection />

    <Footer />
    </>
  );
};

export default FAQHelpCenter;
