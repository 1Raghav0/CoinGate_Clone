import { ChevronRight, X } from "lucide-react"
import SupportedCountriesSection from "./SupportedCountriesSection"

const SupportedCountries = () => {
  return (
    <>
    <div className="bg-white font-sans mt-20">
        <div className="bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>CoinGate obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
          <X size={16} />
        </button>
      </div>
     </div>

     <section className="bg-white px-4 md:px-10 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="text-gray-400 mb-4">
          <span className="hover:text-gray-600 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="text-gray-500">Supported Countries</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#0b1121] py-6">
          Supported Countries
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl text-sm md:text-base">
          CoinGate is supported in numerous countries, with more to come.
          Check the list below.
        </p>

      </div>
    </section>

    <SupportedCountriesSection />
    </>
  )
}

export default SupportedCountries