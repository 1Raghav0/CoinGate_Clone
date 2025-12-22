import HeroSection from './HeroSection'
import FAQSection from './FAQSection'
import PaymentProcess from './PaymentProcess'
import SuccessStories from './SuccessStories'
import StreamlineOperations from './StreamlineOperations'
import CryptoGatewaySteps from './CryptoGatewaySteps'

const Home = () => {
  return (
    <div className="pt-20">
    <HeroSection />
    <CryptoGatewaySteps />
    <SuccessStories />
    <StreamlineOperations />
    <PaymentProcess />
    <FAQSection />
    </div>
  )
}

export default Home