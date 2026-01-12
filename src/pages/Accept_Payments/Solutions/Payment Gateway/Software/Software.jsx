import { 
    X, 
    ChevronRight,
    ArrowRight 
} from 'lucide-react';

const Software = () => {


  return (
    <div id="page-content" className="font-sans text-gray-900 bg-gray-50">

        <div className="bg-gradient-to-r from-emerald-400 to-indigo-600 py-2 px-4 flex justify-center items-center relative text-sm font-medium mt-20">
          <div className="flex items-center gap-2 text-white">
            <span>FinPE obtained MiCA license! 🎉</span>
            <a href="#" className="flex items-center underline hover:opacity-80">
              Learn more <ChevronRight size={14} />
            </a>
          </div>
          <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
            <X size={16} />
          </button>
        </div>
      {/* Hero Section */}
       <section
      className="relative py-24 flex items-center justify-center bg-no-repeat bg-center bg-cover px-6"
      style={{
        backgroundImage:
          "url('https://coingate.com/app/themes/coingate/dist/images/shared/error_background.svg')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-44 h-44 rounded-full bg-[#0b1121] flex items-center justify-center shadow-lg">
            <img
              src="https://coingate.com/app/themes/coingate/dist/images/shared/hand_compass_transparent_square.png"
              alt="Bitcoin"
              className=""
            />
          </div>
        </div>

        {/* Error code */}
        <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
          Error 404
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1121] leading-tight mb-4">
          Oops, it appears this <br className="hidden sm:block" />
          webpage doesn't exist
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mb-8">
          There are hundreds of websites you visit and forget every day.
          Let this be one of them.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Take me home
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
    </div>
  );
};

export default Software;
