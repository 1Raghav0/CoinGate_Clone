import { ChevronRight, X } from "lucide-react"
import CryptoConverterSection from "./CryptoConverterSection"
import ExchangeableCurrencies from "../../Manage_Exchange/Deposit/ExchangeableCurrencies"

const ExchangeRates = () => {
  return (
    <>
    <div className="mt-20 bg-gradient-to-r from-emerald-400 to-sky-500 py-2 px-4 flex justify-center items-center relative text-sm font-medium text-white">
        <div className="flex items-center gap-2">
          <span>FinPE obtained MiCA license! 🎉</span>
          <a href="#" className="underline flex items-center hover:opacity-80">
            Learn more <ChevronRight size={14} />
          </a>
        </div>
        <button className="absolute right-4 hover:bg-white/20 rounded-full p-1">
          <X size={16} />
        </button>
      </div>

      <CryptoConverterSection />
      <ExchangeableCurrencies />
    </>
  )
}

export default ExchangeRates